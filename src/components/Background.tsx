"use client"
import { useEffect } from "react";

export default function UnicornBackground() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.20/dist/unicornStudio.umd.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.UnicornStudio) {
        // @ts-ignore
        window.UnicornStudio.addScene({
          elementId: "unicorn-bg",
          projectId: "XVsfsYsOdhYqafH7oLoF",
          scale: 1,
          dpi: 1.5,
          fps: 120,
        });
      }
    };
    script.onerror = (e) => {
      console.error("Failed to load UnicornStudio script", e);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="unicorn-bg" className="absolute inset-0 z-0" />;
}
