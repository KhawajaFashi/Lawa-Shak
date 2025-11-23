"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useOrder } from '@/context/OrderContext'
import Image from 'next/image'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'

export default function CheckoutPage() {
    const router = useRouter()
    const { orderData } = useOrder()
    const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)
    const [sending, setSending] = useState(false)
    const ownerWhatsApp = process.env.NEXT_PUBLIC_OWNER_WHATSAPP || '+923135520955'

    const labelize = (key) =>
        key.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase())

    const formatValue = (v) => (typeof v === 'number' ? v.toFixed(2) : String(v || '-'))

    const generatePDF = async () => {
        const pdf = await PDFDocument.create()
        let page = pdf.addPage([600, 900])
        const font = await pdf.embedFont(StandardFonts.Helvetica)
        const bold = await pdf.embedFont(StandardFonts.HelveticaBold)
        let y = 860

        page.drawText('Order Summary', { x: 50, y, size: 28, font: bold, color: rgb(0.2, 0.2, 0.2) })
        y -= 30
        page.drawLine({ start: { x: 50, y }, end: { x: 550, y }, thickness: 1, color: rgb(0.85, 0.85, 0.85) })
        y -= 40

        for (const [key, value] of Object.entries(orderData)) {
            if (key === 'transactionProof' || key === 'transactionProofFile') continue

            const label = labelize(key)
            page.drawText(label, { x: 50, y, size: 14, font: bold, color: rgb(0, 0, 0) })
            page.drawText(formatValue(value), { x: 220, y, size: 14, font, color: rgb(0.1, 0.1, 0.1) })
            y -= 26

            if (['Address', 'City', 'Subtotal'].includes(label)) {
                page.drawLine({ start: { x: 50, y }, end: { x: 550, y }, thickness: 0.5, color: rgb(0.9, 0.9, 0.9) })
                y -= 20
            }
        }

        return await pdf.save()
    }

    const sendOrder = async () => {
        setSending(true)
        try {
            const formData = new FormData()
            formData.append('orderData', JSON.stringify(orderData))
            formData.append('userEmail', orderData.email)

            // Check if transactionProof file exists in sessionStorage
            const proofFile = sessionStorage.getItem('transactionProofFile')
            if (proofFile && orderData.transactionProof) {
                const blob = new Blob([proofFile], { type: 'application/octet-stream' })
                formData.append('transactionProofFile', blob, orderData.transactionProof)
            }

            const res = await fetch('/api/order', {
                method: 'POST',
                body: formData
            })

            if (res.ok) {
                alert('Order placed successfully! You will receive a confirmation email shortly.')
                router.push('/')
            } else {
                alert('Error placing order. Please try again.')
            }
        } catch (e) {
            console.error('Error:', e)
            alert('Error placing order.')
        } finally {
            setSending(false)
        }
    }

    if (!orderData) {
        router.push('/order')
        return null
    }

    return (
        <>
            <main className="min-h-screen bg-black py-10 px-[8%]">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-3xl text-orange-500 mb-8">Order Review</h1>

                    <div className="bg-gray-900 rounded-lg p-6 mb-8">
                        <h2 className="text-xl text-white mb-4">Personal Information</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <p className="text-gray-400">Full Name</p>
                                <p className="text-white">{orderData.fullName}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Email Address</p>
                                <p className="text-white">{orderData.email}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Phone Number</p>
                                <p className="text-white">{orderData.phone}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-6 mb-8">
                        <h2 className="text-xl text-white mb-4">Delivery Address</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <p className="text-gray-400">Street Address</p>
                                <p className="text-white">{orderData.address}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">City</p>
                                <p className="text-white">{orderData.city}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">State/Province</p>
                                <p className="text-white">{orderData.state}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Postal Code</p>
                                <p className="text-white">{orderData.postalCode}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Country</p>
                                <p className="text-white">{orderData.country}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-6 mb-8">
                        <h2 className="text-xl text-white mb-4">Order Details</h2>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <p className="text-gray-400">Quantity</p>
                                <p className="text-white">{orderData.quantity}</p>
                            </div>
                            {orderData.transactionProof && (
                                <div className="pt-4 border-t border-gray-800">
                                    <p className="text-gray-400">Transaction Proof</p>
                                    <Image
                                        src={orderData.transactionProof}
                                        alt="Transaction Proof"
                                        className="mt-2 max-w-2xl rounded"
                                        width={1900}
                                        height={1900}
                                    />
                                </div>
                            )}
                            <div className="border-t border-gray-800 my-4 pt-4">
                                <div className="flex justify-between mb-2">
                                    <p className="text-gray-400">Subtotal</p>
                                    <p className="text-white">Rs. {orderData.subtotal.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <p className="text-gray-400">Delivery Fee</p>
                                    <p className="text-white">Rs. {orderData.deliveryFee.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between text-xl font-medium text-orange-500">
                                    <p>Total</p>
                                    <p>Rs. {orderData.total.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => setShowWhatsAppModal(true)}
                        disabled={sending}
                        className="w-full bg-orange-500 text-white py-3 rounded text-lg font-medium transition-colors hover:bg-orange-600"
                    >
                        Place Order
                    </button>

                    {showWhatsAppModal && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center">
                            <div className="absolute inset-0 bg-black opacity-60" onClick={() => setShowWhatsAppModal(false)} />
                            <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md mx-4 z-10">
                                <h3 className="text-xl text-white mb-3">Send order PDF via WhatsApp?</h3>
                                <p className="text-gray-300 mb-4">Open WhatsApp to send the order PDF to <span className="text-white">{ownerWhatsApp}</span>. After opening WhatsApp, please attach the PDF and send it. You can also skip and continue — the order will still be placed.</p>
                                <div className="flex gap-3 justify-end">
                                    <button
                                        className="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-600"
                                        onClick={() => {
                                            setShowWhatsAppModal(false)
                                            // send order then navigate
                                            sendOrder()
                                        }}
                                    >
                                        Skip and Continue
                                    </button>
                                    <button
                                        className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-500"
                                        onClick={async () => {
                                            // Generate PDF client-side
                                            try {
                                                // Build wa.me url with prefilled message including order details
                                                const num = ownerWhatsApp.replace(/[^0-9]/g, '')
                                                const msg = `Hello, I placed an order. Name: ${orderData.fullName || ''} - Email: ${orderData.email || ''} - Total: Rs. ${orderData.total?.toFixed(2) || ''}. I'm sending the order PDF. Please download it from here or I will send it via email.`
                                                const waUrl = `https://wa.me/${num}?text=${encodeURIComponent(msg)}`
                                                window.open(waUrl, '_blank')
                                            } catch (e) {
                                                console.error('Error generating PDF:', e)
                                            }
                                            setShowWhatsAppModal(false)
                                            // Still send the order to the server
                                            sendOrder()
                                        }}
                                    >
                                        Open WhatsApp
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}