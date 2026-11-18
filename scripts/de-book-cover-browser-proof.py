#!/usr/bin/env python3
"""Take a screenshot below a large hero using local Chrome DevTools Protocol.
Only talks to localhost; used for unpublished German website QA.
"""
import base64
import json
import os
import pathlib
import subprocess
import sys
import time
import urllib.request

import websocket

url = sys.argv[1]
destination = pathlib.Path(sys.argv[2])
scroll_y = int(sys.argv[3])
chrome = os.environ.get("CHROME") or "google-chrome"
profile = "/tmp/esther-es-cdp-browser"
proc = subprocess.Popen(
    [chrome, "--headless=new", "--no-sandbox", "--disable-dev-shm-usage",
     "--disable-gpu", "--hide-scrollbars", "--remote-allow-origins=*",
     "--remote-debugging-port=9223", "--window-size=1380,900",
     "--user-data-dir=" + profile, "about:blank"],
    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
)
try:
    session = None
    for _ in range(80):
        try:
            sessions = json.load(urllib.request.urlopen("http://127.0.0.1:9223/json/list", timeout=1))
            session = next(x for x in sessions if x.get("type") == "page")
            break
        except Exception:
            time.sleep(.25)
    if not session:
        raise RuntimeError("Chrome CDP not ready")

    ws = websocket.create_connection(session["webSocketDebuggerUrl"], timeout=25,
                                     origin="http://localhost")
    counter = 0
    def invoke(method, params=None):
        global counter
        counter += 1
        current = counter
        ws.send(json.dumps({"id": current, "method": method, "params": params or {}}))
        for _ in range(150):
            reply = json.loads(ws.recv())
            if reply.get("id") == current:
                if "error" in reply:
                    raise RuntimeError(reply["error"])
                return reply.get("result", {})
        raise RuntimeError("CDP did not reply to " + method)

    invoke("Page.enable")
    invoke("Page.navigate", {"url": url})
    time.sleep(4)
    invoke("Runtime.evaluate", {"expression": f"window.scrollTo(0,{scroll_y})"})
    time.sleep(4)
    data = invoke("Runtime.evaluate", {
       "expression": """JSON.stringify([...document.querySelectorAll('img')].filter(i =>
          (i.currentSrc || i.src).includes('61IlRaRs5SL')).map(i =>
          ({source:i.currentSrc||i.src,loaded:i.complete,width:i.naturalWidth,height:i.naturalHeight})))""",
       "returnByValue": True,
    })
    cover = json.loads(data["result"]["value"])
    print("German verified retail cover state:", cover)
    if not cover or any(item["width"] == 0 or not item["loaded"] for item in cover):
        raise RuntimeError("German edition cover failed to load in local browser")
    screenshot = invoke("Page.captureScreenshot", {"format": "png", "captureBeyondViewport": False})
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_bytes(base64.b64decode(screenshot["data"]))
    print("Saved preview:", destination, destination.stat().st_size)
    ws.close()
finally:
    proc.terminate()
    try:
        proc.wait(timeout=5)
    except subprocess.TimeoutExpired:
        proc.kill()
