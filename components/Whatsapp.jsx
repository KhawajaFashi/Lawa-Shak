"use client";
import Link from "next/link";
import React, { useState } from "react";

// /c:/Users/HP/Desktop/Lawa-Shak/components/Whatsapp.jsx

export default function Whatsapp({ phone = "923145433000", message = "Hello, I have a question regarding your services.", size = 56 }) {
    const [hover, setHover] = useState(false);
    const href = `https://api.whatsapp.com/send?phone=${phone}${message ? `&text=${encodeURIComponent(message)}` : ""}`;

    const style = {
        position: "fixed",
        right: 20,
        bottom: 20,
        width: size,
        height: size,
        background: "#25D366",
        borderRadius: "50%",
        boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textDecoration: "none",
        transform: hover ? "translateY(-3px) scale(1.03)" : "none",
        transition: "transform 150ms ease, box-shadow 150ms ease",
        zIndex: 9999,
    };

    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            style={style}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {/* WhatsApp SVG icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={Math.round(size * 0.6)}
                height={Math.round(size * 0.6)}
                fill="currentColor"
                aria-hidden="true"
            >
                <path d="M20.52 3.48A11.87 11.87 0 0012.12.5C6.02.5 1.05 5.47 1.05 11.57c0 2.07.55 4.07 1.6 5.85L.25 23.9l6.73-2.02a12 12 0 005.13 1.12h.01c6.1 0 11.07-4.97 11.07-11.07 0-3.02-1.18-5.86-3.37-7.45zM12.12 21.5h-.01a10.2 10.2 0 01-4.92-1.32l-.35-.21-3.99 1.2 1.08-3.89-.23-.37A9.8 9.8 0 012.32 11.57C2.32 6.42 6.97 1.8 12.12 1.8c5.15 0 9.8 4.62 9.8 9.77 0 5.15-4.65 9.93-9.8 9.93z" />
                <path d="M17.1 14.6c-.3-.15-1.77-.87-2.04-.98-.27-.12-.47-.15-.67.15-.2.3-.78.98-.96 1.18-.17.2-.34.22-.63.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.12.3-.33.45-.5.15-.17.2-.28.3-.47.1-.2.05-.36-.02-.5-.07-.12-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5-.17 0-.36 0-.55 0-.2 0-.52.07-.79.35-.27.27-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.08 3.2 5.05 4.49 2.97 1.3 2.97.87 3.51.81.54-.06 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.3-.2-.6-.35z" />
            </svg>
        </Link>
    );
}