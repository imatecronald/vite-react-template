/*
 * IMATEC SOLUTIONS — Floating Remote Support Button
 * Design: Rural Professional | Navy + Lime Green
 * Fixed to the left side of the viewport on all pages
 */

import { useState } from "react";
import { Monitor, X } from "lucide-react";

export default function FloatingSupport() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-start"
      style={{ pointerEvents: "none" }}
    >
      {/* Expanded tooltip panel */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          expanded ? "max-w-[220px] opacity-100" : "max-w-0 opacity-0"
        }`}
        style={{ pointerEvents: expanded ? "auto" : "none" }}
      >
        <div
          className="bg-white shadow-xl rounded-r-xl border border-gray-100 p-4 ml-0"
          style={{ borderLeft: "4px solid #7DC800", minWidth: "200px" }}
        >
          <div className="flex items-center justify-between mb-2">
            <span
              className="font-bold text-[#2B4A8C] text-sm"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em", fontSize: "1rem" }}
            >
              Remote Support
            </span>
            <button
              onClick={() => setExpanded(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
              style={{ pointerEvents: "auto" }}
            >
              <X size={14} />
            </button>
          </div>
          <p className="text-gray-600 text-xs mb-3 leading-relaxed">
            We can connect securely to your computer and fix issues remotely — no need to come in.
          </p>
          <a
            href="https://get.teamviewer.com/imatec"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center text-xs font-bold py-2 px-3 rounded transition-all duration-200"
            style={{
              background: "#7DC800",
              color: "#1a1a1a",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.05em",
              fontSize: "0.9rem",
              pointerEvents: "auto",
            }}
          >
            Download TeamViewer
          </a>
          <p className="text-gray-400 text-xs mt-2 text-center">Free &amp; secure remote access</p>
        </div>
      </div>

      {/* Tab button — always visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        aria-label="Remote Support"
        style={{
          pointerEvents: "auto",
          background: "#2B4A8C",
          color: "white",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          letterSpacing: "0.08em",
          fontSize: "0.8rem",
          padding: "14px 8px",
          borderRadius: "0 6px 6px 0",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          boxShadow: "2px 2px 12px rgba(0,0,0,0.18)",
          transition: "background 0.2s ease",
          cursor: "pointer",
          border: "none",
          outline: "none",
          marginTop: expanded ? "8px" : "0",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "#7DC800")}
        onMouseLeave={e => (e.currentTarget.style.background = "#2B4A8C")}
      >
        <Monitor size={14} style={{ transform: "rotate(180deg)" }} />
        REMOTE SUPPORT
      </button>
    </div>
  );
}
