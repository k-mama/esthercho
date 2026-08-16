"use client";

import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    const isKorean = window.location.pathname === "/ko" || window.location.pathname.startsWith("/ko/");
    const target = isKorean ? "/ko/" : "/";

    if (window.location.pathname !== target) {
      window.location.replace(target);
    }
  }, []);

  return (
    <main
      style={{
        minHeight: "100svh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        background: "#f7f6f2",
        color: "#173451",
        textAlign: "center",
      }}
    >
      <p style={{ margin: 0, fontSize: "0.9rem", letterSpacing: "0.04em" }}>
        Opening Esther Cho&apos;s house…
      </p>
    </main>
  );
}
