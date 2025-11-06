'use client'

import { useState } from 'react'

export default function Contact() {
    const [subject, setSubject] = useState('')

    return (
        <section id="contact" className="py-20 bg-black pl-[8%]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl mb-6 text-white">CONTACT US</h2>
                <p className="mb-12 max-w-2xl text-gray-100">
                    We'd love to hear from you! Whether you have questions,
                    feedback, or just want to say hello, feel free to reach out
                    to us anytime.
                </p>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-2 text-white">FULL NAME</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    required
                                    className="w-full bg-gray-900 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-white">EMAIL ADDRESS</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    required
                                    className="w-full bg-gray-900 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block mb-2 text-white">SUBJECT</label>
                            <select
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full bg-gray-900 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                required
                            >
                                <option value="">Select a subject</option>
                                <option value="general">General Inquiry</option>
                                <option value="order">Order Status</option>
                                <option value="feedback">Feedback</option>
                                <option value="partnership">Partnership</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-2 text-white">MESSAGE</label>
                            <textarea
                                placeholder="Tell us what's on your mind..."
                                className="w-full bg-gray-900 text-white border border-gray-700 rounded px-4 py-2 min-h-[150px] focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-3 rounded text-lg font-medium transition-colors hover:bg-orange-600"
                        >
                            SEND MESSAGE
                        </button>
                    </form>

                    <div className="space-y-8">
                        <h3 className="text-2xl mb-8 text-white">Visit Us Today</h3>
                        <p className="text-gray-400">
                            Experience the finest desserts crafted with passion and premium
                            ingredients. Our team is ready to welcome you with warm
                            hospitality and exceptional service.
                        </p>

                        <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-full flex items-center gap-2 hover:bg-orange-500 hover:text-white transition-colors">
                            <span className="material-icons">map</span>
                            View on Map
                        </button>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="material-icons text-orange-500">email</span>
                                <a href="mailto:hello@lawashak.com" className="text-gray-100 hover:text-orange-500">
                                    hello@lawashak.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-icons text-orange-500">phone</span>
                                <a href="tel:+15551234567" className="text-gray-100 hover:text-orange-500">
                                    +1 (555) 123-4567
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-icons text-orange-500">schedule</span>
                                <span className="text-gray-100">Mon-Sun: 10:00 AM - 10:00 PM</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-icons text-orange-500">location_on</span>
                                <span className="text-gray-100">123 Dessert Lane, Sweet City, SC 12345</span>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                                <a
                                    key={social}
                                    href={`https://${social}.com/lawashak`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-gray-700 text-gray-100 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors"
                                >
                                    <span className="material-icons text-xl">{social}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}