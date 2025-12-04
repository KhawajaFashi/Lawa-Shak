"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
    { url: "/Simple.jpg" },
    { url: "/Dubai.jpg" },
    { url: "/Small.jpg" },
    { url: "/Mix.jpg" },
    { url: "/Deal.jpg" },
];

export default function ImageSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const goTo = (index) => setCurrent(index);

    return (
        <div id="images" className="relative py-24 pb-12 px-[10%] bg-[#0A0A0A] w-full overflow-hidden">
            {/* Slides */}
            <h2
                className="text-5xl font-extrabold text-orange-500 tracking-wider mb-12"
                style={{ textShadow: "0 0 2px #ff8a00, 0 0 4px #ff8a00" }}
            >
                LAWA SHAK
            </h2>
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100 + (current * 15)}%)` }}
            >
                {images.map((img, idx) => (
                    <Image
                        key={idx}
                        src={img.url}
                        alt={`slide-${idx}`}
                        width={1900}
                        height={1900}
                        className="w-full h-[90vh] object-contain shrink-0 mr-[15%]"
                    />
                ))}
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goTo(idx)}
                        className={`w-3 h-3 rounded-full ${idx === current ? "bg-white" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
