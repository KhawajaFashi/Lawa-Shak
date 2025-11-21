"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const socials = [
    { icon: FaTiktok, href: "https://www.tiktok.com/@hot.slice.dina?_r=1&_t=ZS-91LV2f74eoa" },
];

export default function Contact() {
    const [subject, setSubject] = useState("");

    return (
        <section id="contact" className="relative py-24 pb-12 px-[10%] bg-[#0A0A0A]">

            {/* Soft Glowing Orbs */}
            <div className="absolute left-10 top-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute right-20 bottom-0 w-64 h-64 bg-orange-500/5 rounded-full blur-2xl"></div>

            {/* Grid Overlay */}
            {/* <div className="absolute inset-0 opacity-[0.05] bg-[url('/grid.svg')] bg-cover pointer-events-none"></div> */}

            <div className="relative z-10 container mx-auto">

                {/* Heading */}
                <h2
                    className="text-5xl font-extrabold text-orange-500 tracking-wider mb-6"
                    style={{ textShadow: "0 0 2px #ff8a00, 0 0 4px #ff8a00" }}
                >
                    CONTACT US
                </h2>

                <p className="text-gray-300 max-w-2xl leading-relaxed mb-16">
                    We’d love to hear from you! Whether you have questions, feedback, or partnership inquiries,
                    our team is always ready to assist.
                </p>

                <div className="grid md:grid-cols-2 gap-16">

                    {/* LEFT — FORM */}
                    <form className="space-y-6">

                        {/* Fullname + Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-2 text-sm tracking-wide text-gray-300">FULL NAME</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full bg-[#111] border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm tracking-wide text-gray-300">EMAIL ADDRESS</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-[#111] border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                                />
                            </div>
                        </div>

                        {/* SUBJECT */}
                        <div>
                            <label className="block mb-2 text-sm tracking-wide text-gray-300">SUBJECT</label>
                            <select
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full bg-[#111] border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                            >
                                <option value="">Select a subject</option>
                                <option value="general">General Inquiry</option>
                                <option value="order">Order Status</option>
                                <option value="feedback">Feedback</option>
                                <option value="partnership">Partnership</option>
                            </select>
                        </div>

                        {/* MESSAGE */}
                        <div>
                            <label className="block mb-2 text-sm tracking-wide text-gray-300">MESSAGE</label>
                            <textarea
                                placeholder="Tell us what's on your mind..."
                                className="w-full bg-[#111] border border-gray-700 text-gray-100 rounded-lg px-4 py-3 min-h-[170px] focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                            ></textarea>
                        </div>

                        {/* SUBMIT */}
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-black font-semibold py-3 rounded-lg tracking-wide hover:bg-orange-600 transition-all shadow-[0_0_20px_rgba(255,138,0,0.4)]"
                        >
                            SEND MESSAGE
                        </button>
                    </form>

                    {/* RIGHT — INFO SECTION */}
                    <div className="space-y-10">

                        <h3 className="text-3xl font-bold text-orange-500 tracking-wider">
                            Visit Us Today
                        </h3>

                        <p className="text-gray-300 leading-relaxed">
                            Experience the finest desserts crafted with passion and premium ingredients.
                            Our team is ready to welcome you with warm hospitality.
                        </p>

                        {/* Map Button */}
                        <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-full flex items-center gap-2 hover:bg-orange-500 hover:text-black transition-all font-medium shadow-[0_0_12px_rgba(255,138,0,0.3)]">
                            <MapPin className="w-5 h-5" />
                            View on Map
                        </button>

                        {/* Contact List */}
                        <div className="space-y-4">

                            <div className="flex items-center gap-4">
                                <Mail className="text-orange-500 w-5 h-5" />
                                <a href="mailto:Mojee544@gmail.com" className="text-gray-300 hover:text-orange-500">
                                    Mojee544@gmail.com
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <Phone className="text-orange-500 w-5 h-5" />
                                <a href="tel:+923145433000" className="text-gray-300 hover:text-orange-500">
                                    +92 314 5433000
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <Clock className="text-orange-500 w-5 h-5" />
                                <span className="text-gray-300">Mon–Sun: 10:00 AM – 10:00 PM</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <MapPin className="text-orange-500 w-5 h-5" />
                                <span className="text-gray-300">123 Dessert Lane, Sweet City</span>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex gap-4 pt-2">
                            {socials.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center text-orange-500 hover:text-black hover:bg-orange-500 hover:border-orange-500 transition-all shadow-[0_0_12px_rgba(255,138,0,0.3)]"
                                >
                                    <item.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
