'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useOrder } from '@/context/OrderContext'
import Image from 'next/image'

const boxTypes = [
    {
        id: 'simple',
        name: 'Simple Box',
        price: 950,
        delivery: 300,
        description: '10 lavashak roll sheet',
        image: '/Simple.jpg'
    },
    {
        id: 'mix',
        name: 'Mix Box',
        price: 950,
        delivery: 300,
        description: '5 lavashak roll sheet, 5 humpa bar, 4 spicy laddu, Masala Noodles, Meethi imli',
        image: '/Mix.jpg'
    },
    {
        id: 'dubai',
        name: 'Dubai Lavashak Box',
        price: 950,
        delivery: 300,
        description: '10 roll sheets with ANAAR sweet souce & Immli Alu Bukhara sweet souce',
        image: '/Dubai.jpg'
    },
    {
        id: 'small',
        name: 'Small Box',
        price: 500,
        delivery: 150,
        description: '7 small sheets',
        image: '/Small.jpg'
    },
    {
        id: 'deal',
        name: 'Hot Slice Special Deal',
        price: 3500,
        delivery: 350,
        description: '1 Simple Box, 1 Mix Box, 1 Dubai Lavashak Box, 1 Small Box',
        image: '/Deal.jpg'
    },
]

export default function OrderForm() {
    const router = useRouter()
    const { setOrderData } = useOrder()
    const [selectedBox, setSelectedBox] = useState(boxTypes[0])
    const [quantity, setQuantity] = useState(1)
    const [deliveryOption, setDeliveryOption] = useState('standard')
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        postalCode: ''
    })
    const [transactionProof, setTransactionProof] = useState(null)
    const [transactionProofFile, setTransactionProofFile] = useState(null)
    const [errors, setErrors] = useState({})

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        setErrors(prev => ({ ...prev, [name]: undefined }))
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
        // console.log("Upload response data:", data);
        if (data.path) {
            setTransactionProof(data.path); // store the path, not the file itself
            setErrors(prev => ({ ...prev, transactionProof: undefined }))
        }
    };


    const subtotal = selectedBox.price * quantity
    const total = subtotal + selectedBox.delivery

    const validateForm = () => {
        const newErrors = {}

        if (!formData.fullName || !formData.fullName.trim()) newErrors.fullName = 'Full name is required'
        if (!formData.email || !formData.email.trim()) newErrors.email = 'Email is required'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email'
        if (!formData.phone || !formData.phone.trim()) newErrors.phone = 'Phone number is required'
        if (!formData.address || !formData.address.trim()) newErrors.address = 'Street address is required'
        if (!formData.city || !formData.city.trim()) newErrors.city = 'City is required'
        if (!formData.state || !formData.state.trim()) newErrors.state = 'State/Province is required'
        if (!formData.postalCode || !formData.postalCode.trim()) newErrors.postalCode = 'Postal code is required'
        if (!transactionProof) newErrors.transactionProof = 'Transaction proof image is required'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }



    return (
        <section id="order" className="py-5 bg-black px-[8%]">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="mb-8">
                    <p className="text-gray-400">STARTING PRICE</p>
                    <h2 className="text-4xl text-orange-500">Rs.{selectedBox.price.toFixed(2)}</h2>
                </div>

                {/* Box Image Display */}
                <div className="mb-8 w-full flex justify-center">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                        <Image
                            key={selectedBox.id}
                            src={selectedBox.image}
                            alt={selectedBox.name}
                            className={`w-full h-full object-contain ${selectedBox.image ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                            width={2000}
                            height={2000}
                        />
                    </div>
                </div>

                <form className="space-y-6">
                    <div className='flex flex-col gap-4 mb-8'>
                        <label className="block mb-2 text-white text-lg">Select Box Type</label>
                        {boxTypes.map((box) => (
                            <label
                                key={box.id}
                                className={`flex items-start p-4 border rounded-lg cursor-pointer transition-all ${selectedBox.id === box.id
                                    ? 'border-orange-500 bg-orange-500/10'
                                    : 'border-gray-700 hover:border-gray-500'
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="box"
                                    checked={selectedBox.id === box.id}
                                    onChange={() => setSelectedBox(box)}
                                    className="mt-1 mr-4 accent-orange-500"
                                />
                                <div className='w-full'>
                                    <div className="flex justify-between items-center w-full">
                                        <span className="text-white font-medium text-lg">{box.name}</span>
                                        <span className="text-orange-500 font-bold">Rs. {box.price}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm mt-1 whitespace-pre-line">
                                        {box.description}
                                    </p>
                                    <p className="text-gray-500 text-xs mt-1">
                                        Delivery: Rs. {box.delivery}
                                    </p>
                                </div>
                            </label>
                        ))}
                    </div>

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
                                className={`input-field ${errors.fullName ? 'border-red-500 bg-red-500/10' : ''}`}
                            />
                            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
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
                                    className={`input-field ${errors.email ? 'border-red-500 bg-red-500/10' : ''}`}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                                    className={`input-field ${errors.phone ? 'border-red-500 bg-red-500/10' : ''}`}
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
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
                            className={`input-field ${errors.address ? 'border-red-500 bg-red-500/10' : ''}`}
                        />
                        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
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
                                className={`input-field ${errors.city ? 'border-red-500 bg-red-500/10' : ''}`}
                            />
                            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
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
                                className={`input-field ${errors.state ? 'border-red-500 bg-red-500/10' : ''}`}
                            />
                            {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
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
                                className={`input-field ${errors.postalCode ? 'border-red-500 bg-red-500/10' : ''}`}
                            />
                            {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
                        </div>

                        <div>
                            <label className="block mb-2 text-white">TRANSACTION PROOF</label>
                            <label className={`flex items-center gap-2 cursor-pointer bg-white/5 border px-4 py-3 rounded-lg text-white hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all ${errors.transactionProof ? 'border-red-500 bg-red-500/10' : 'border-white/10'}`}>
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
                                    <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded">✓ Uploaded</span>
                                </div>
                            )}
                            {errors.transactionProof && <p className="text-red-500 text-sm mt-1">{errors.transactionProof}</p>}
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-4 mt-8">
                        <div className="flex justify-between mb-2 text-gray-100">
                            <span>Subtotal ({quantity} item):</span>
                            <span>Rs. {subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2 text-gray-100">
                            <span>Delivery Fee:</span>
                            <span>Rs. {selectedBox.delivery.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-xl font-medium text-orange-500">
                            <span>TOTAL:</span>
                            <span>Rs. {total.toFixed(2)}</span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault()

                            if (!validateForm()) return

                            const orderData = {
                                ...formData,
                                quantity,
                                deliveryOption,
                                subtotal,
                                deliveryFee: selectedBox.delivery,
                                total,
                                transactionProof,
                                transactionProofFile,
                                boxType: selectedBox.name,
                                boxDetails: selectedBox.description
                            }

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