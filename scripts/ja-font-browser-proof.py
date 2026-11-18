#!/usr/bin/env python3
"""Diagnostic-only local Japanese font proof. No public site navigation."""
import json, os, subprocess, sys, time, urllib.request
import websocket

url = sys.argv[1]
chrome = os.environ.get("CHROME") or "google-chrome"
proc = subprocess.Popen([
    chrome, "--headless=new", "--no-sandbox", "--disable-dev-shm-usage",
    "--disable-gpu", "--hide-scrollbars", "--remote-allow-origins=*",
    "--remote-debugging-port=9225", "--window-size=1380,900",
    "--user-data-dir=/tmp/esther-ja-fontproof", "about:blank",
], stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
try:
    page=None
    for _ in range(75):
        try:
            x=json.load(urllib.request.urlopen("http://127.0.0.1:9225/json/list",timeout=1))
            page=next(y for y in x if y.get("type")=="page")
            break
        except Exception:
            time.sleep(.2)
    if page is None: raise RuntimeError("CDP endpoint unavailable")
    ws=websocket.create_connection(page["webSocketDebuggerUrl"],timeout=30,origin="http://localhost")
    index=0
    def call(method,params=None):
        nonlocal_holder=None
        global index
        index+=1
        id=index
        ws.send(json.dumps({"id":id,"method":method,"params":params or {}}))
        while True:
            msg=json.loads(ws.recv())
            if msg.get("id")==id:
                if "error" in msg: raise RuntimeError(msg["error"])
                return msg.get("result",{})
    call("Page.enable")
    call("DOM.enable")
    call("CSS.enable")
    call("Runtime.enable")
    call("Page.navigate",{"url":url})
    time.sleep(6)
    wait=call("Runtime.evaluate",{
        "expression":"""(async()=>{await document.fonts.load("14px 'Noto Serif JP'","物語本アトリエエスターについて");await document.fonts.ready;return 'ready';})()""",
        "awaitPromise":True,"returnByValue":True
    })
    report=call("Runtime.evaluate",{
        "expression":"""JSON.stringify({
           lang:document.documentElement.lang,
           nav:[...document.querySelectorAll('.site-header-nav-link')].slice(0,4).map(e=>({
             text:e.textContent,fonts:getComputedStyle(e).fontFamily,weight:getComputedStyle(e).fontWeight,
             size:getComputedStyle(e).fontSize,lang:e.lang
           })),
           hero: (()=>{let e=document.querySelector('h1');return e?{text:e.textContent,fonts:getComputedStyle(e).fontFamily,weight:getComputedStyle(e).fontWeight}:null})(),
           loaded:[...document.fonts].filter(f=>f.family.includes('Noto')).slice(0,20).map(f=>({family:f.family,weight:f.weight,status:f.status}))
        })""",
        "returnByValue":True
    })
    print("JA_FONTS_COMPUTED",report["result"].get("value"),flush=True)
    doc=call("DOM.getDocument",{"depth":1})
    root=doc["root"]["nodeId"]
    for selector in [".site-header-nav-link",".site-header-nav-desktop","h1"]:
        node=call("DOM.querySelector",{"nodeId":root,"selector":selector}).get("nodeId")
        if node:
            fonts=call("CSS.getPlatformFontsForNode",{"nodeId":node})
            print("JA_FONT_PLATFORM",selector,json.dumps(fonts,ensure_ascii=False),flush=True)
    ws.close()
finally:
    proc.terminate()
    try:proc.wait(timeout=5)
    except subprocess.TimeoutExpired:proc.kill()
