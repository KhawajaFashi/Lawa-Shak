"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "What is Lawa Shak?",
        a: "Lawa Shak is our signature molten dessert crafted with premium Belgian chocolate and a rich flowing center, made fresh for every order.",
    },
    {
        q: "Is Lawa Shak available for delivery?",
        a: "Yes. We offer delivery through our partnered couriers. Delivery availability depends on your location.",
    },
    {
        q: "Do you use organic or premium ingredients?",
        a: "Every dessert is made with ethically sourced premium ingredients including Belgian chocolate, Madagascar vanilla, and farm-fresh dairy.",
    },
    {
        q: "Is Lawa Shak suitable for events?",
        a: "Absolutely. We provide bulk orders and customized packaging for parties, corporate events, and special occasions.",
    },
    {
        q: "How should I store Lawa Shak?",
        a: "Keep refrigerated if not eaten immediately. Reheat for 20–25 seconds for the perfect molten texture.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section id="faq" className="relative py-12 px-[6%] bg-[#0A0A0A]">

            {/* Soft glowing orbs */}
            <div className="absolute left-10 top-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute right-20 bottom-0 w-64 h-64 bg-orange-500/5 rounded-full blur-2xl"></div>

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('/grid.svg')] bg-cover pointer-events-none"></div>

            <div className="relative z-10 container mx-auto max-w-[90%]">

                <h2
                    className="text-5xl font-extrabold text-orange-500 tracking-wider mb-24"
                    style={{ textShadow: "0 0 2px #ff8a00, 0 0 4px #ff8a00" }}
                >
                    FAQ
                </h2>

                <div className="space-y-6">
                    {faqs.map((item, i) => (
                        <div
                            key={i}
                            className="border border-gray-800 rounded-xl bg-[#111] hover:border-orange-500/50 transition-all"
                        >
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex justify-between items-center px-6 py-4 text-left"
                            >
                                <span className="text-lg text-gray-200 font-medium">
                                    {item.q}
                                </span>

                                <ChevronDown
                                    className={`text-orange-500 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Answer */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 pb-4 px-6" : "max-h-0 px-6"
                                    }`}
                            >
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {item.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
