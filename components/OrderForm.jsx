'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useOrder } from '@/context/OrderContext'

export default function OrderForm() {
    const router = useRouter()
    const { setOrderData } = useOrder()
    const [quantity, setQuantity] = useState(1)
    const [deliveryOption, setDeliveryOption] = useState('standard')
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        country: ''
    })
    const [transactionProof, setTransactionProof] = useState(null)
    const [transactionProofFile, setTransactionProofFile] = useState(null)
    const basePrice = 24.99
    const deliveryFee = 5.00
    const taxRate = 0.08

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleProofUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('transactionProof', file);
        console.log("Upload response:", file);
        setTransactionProofFile(file);
        
        const res = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });

        const data = await res.json();
        if (data.path) {
            setTransactionProof(data.path); // store the path, not the file itself
        }
    };


    const subtotal = basePrice * quantity
    const tax = subtotal * taxRate
    const total = subtotal + deliveryFee + tax

    return (
        <section id="order" className="py-5 bg-black px-[8%]">
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
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                required
                                className="input-field"
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-2 text-white">EMAIL ADDRESS</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="your@email.com"
                                    required
                                    className="input-field"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-white">PHONE NUMBER</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="+92 1234 123-4567"
                                    required
                                    className="input-field"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block mb-2 text-white">STREET ADDRESS</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="123 Main Street"
                            required
                            className="input-field"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2 text-white">CITY</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                placeholder="City"
                                required
                                className="input-field"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-white">STATE/PROVINCE</label>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleInputChange}
                                placeholder="State"
                                required
                                className="input-field"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2 text-white">POSTAL CODE</label>
                            <input
                                type="text"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleInputChange}
                                placeholder="12345"
                                required
                                className="input-field"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-white">COUNTRY</label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                                placeholder="Country"
                                required
                                className="input-field"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block mb-2 text-white">TRANSACTION PROOF</label>
                        <label className="flex items-center gap-2 cursor-pointer bg-white/5 border border-white/10 px-4 py-3 rounded-lg text-white hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all">
                            UPLOAD PROOF IMAGE
                            <input
                                type="file"
                                name="transactionProof"
                                accept="image/*"
                                onChange={handleProofUpload}
                                className="hidden"
                            />
                        </label>
                        {transactionProof && (
                            <div className="mt-2">
                                <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">{transactionProof.split('/')[2]}</span>
                            </div>
                        )}
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
                        onClick={(e) => {
                            e.preventDefault()

                            const orderData = {
                                ...formData,
                                quantity,
                                deliveryOption,
                                subtotal,
                                deliveryFee,
                                tax,
                                total,
                                transactionProof,
                                transactionProofFile
                            }

                            // Store the file in sessionStorage if it exists

                            setOrderData(orderData)
                            router.push('/checkout')

                        }}
                        className="w-full bg-orange-500 text-white py-3 rounded text-lg font-medium transition-colors hover:bg-orange-600"
                    >
                        Proceed to Checkout
                    </button>
                </form>
            </div>
        </section>
    )
}