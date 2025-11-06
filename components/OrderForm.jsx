'use client'

import { useState } from 'react'

export default function OrderForm() {
    const [quantity, setQuantity] = useState(1)
    const [deliveryOption, setDeliveryOption] = useState('standard')
    const basePrice = 24.99
    const deliveryFee = 5.00
    const taxRate = 0.08

    const subtotal = basePrice * quantity
    const tax = subtotal * taxRate
    const total = subtotal + deliveryFee + tax

    return (
        <section id="order" className="py-20 bg-black">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="mb-8">
                    <p className="text-gray-400">STARTING PRICE</p>
                    <h2 className="text-4xl text-orange-500">${basePrice.toFixed(2)}</h2>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block mb-2 text-white">QUANTITY</label>
                        <div className="flex items-center gap-4 w-32">
                            <button
                                type="button"
                                className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center rounded hover:bg-gray-800"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            >
                                -
                            </button>
                            <input
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                className="w-12 text-center bg-transparent text-white"
                                min="1"
                            />
                            <button
                                type="button"
                                className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center rounded hover:bg-gray-800"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block mb-2 text-white">DELIVERY OPTION</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer text-gray-100">
                                <input
                                    type="radio"
                                    name="delivery"
                                    value="standard"
                                    checked={deliveryOption === 'standard'}
                                    onChange={(e) => setDeliveryOption(e.target.value)}
                                    className="hidden"
                                />
                                <span className={`w-4 h-4 rounded-full border ${deliveryOption === 'standard' ? 'bg-orange-500 border-orange-500' : 'border-gray-400'}`} />
                                <span>Standard (3-5 days)</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer text-gray-100">
                                <input
                                    type="radio"
                                    name="delivery"
                                    value="express"
                                    checked={deliveryOption === 'express'}
                                    onChange={(e) => setDeliveryOption(e.target.value)}
                                    className="hidden"
                                />
                                <span className={`w-4 h-4 rounded-full border ${deliveryOption === 'express' ? 'bg-orange-500 border-orange-500' : 'border-gray-400'}`} />
                                <span>Express (1-2 days)</span>
                            </label>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2 text-white">FULL NAME</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                required
                                className="w-full bg-gray-900 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-2 text-white">EMAIL ADDRESS</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    required
                                    className="w-full bg-gray-900 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-white">PHONE NUMBER</label>
                                <input
                                    type="tel"
                                    placeholder="+1 (555) 000-0000"
                                    required
                                    className="w-full bg-gray-900 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block mb-2 text-white">STREET ADDRESS</label>
                        <input
                            type="text"
                            placeholder="123 Main Street"
                            required
                            className="w-full bg-gray-900 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2 text-white">CITY</label>
                            <input
                                type="text"
                                placeholder="City"
                                required
                                className="w-full bg-gray-900 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-white">STATE/PROVINCE</label>
                            <input
                                type="text"
                                placeholder="State"
                                required
                                className="w-full bg-gray-900 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2 text-white">POSTAL CODE</label>
                            <input
                                type="text"
                                placeholder="12345"
                                required
                                className="w-full bg-gray-900 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-white">COUNTRY</label>
                            <input
                                type="text"
                                placeholder="Country"
                                required
                                className="w-full bg-gray-900 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block mb-2 text-white">PAYMENT METHOD</label>
                        <div className="grid grid-cols-3 gap-4">
                            <button
                                type="button"
                                className="bg-orange-500 text-white py-2 px-4 rounded transition-colors hover:bg-orange-600"
                            >
                                Credit Card
                            </button>
                            <button
                                type="button"
                                className="bg-gray-900 text-white py-2 px-4 rounded transition-colors hover:bg-gray-800"
                            >
                                Debit Card
                            </button>
                            <button
                                type="button"
                                className="bg-gray-900 text-white py-2 px-4 rounded transition-colors hover:bg-gray-800"
                            >
                                PayPal
                            </button>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-4 mt-8">
                        <div className="flex justify-between mb-2 text-gray-100">
                            <span>Subtotal ({quantity} item):</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2 text-gray-100">
                            <span>Delivery Fee:</span>
                            <span>${deliveryFee.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2 text-gray-100">
                            <span>Tax (8%):</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-xl font-medium text-orange-500">
                            <span>TOTAL:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-3 rounded text-lg font-medium transition-colors hover:bg-orange-600"
                    >
                        Place Order
                    </button>
                </form>
            </div>
        </section>
    )
}