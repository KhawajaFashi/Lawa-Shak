'use client'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import { useOrder } from '@/context/OrderContext'
import Image from 'next/image'

export default function CheckoutPage() {
    const router = useRouter()
    const { orderData } = useOrder()

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
                            <div className="flex justify-between">
                                <p className="text-gray-400">Delivery Option</p>
                                <p className="text-white">{orderData.deliveryOption === 'standard' ? 'Standard (3-5 days)' : 'Express (1-2 days)'}</p>
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
                                    <p className="text-white">${orderData.subtotal.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <p className="text-gray-400">Delivery Fee</p>
                                    <p className="text-white">${orderData.deliveryFee.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <p className="text-gray-400">Tax</p>
                                    <p className="text-white">${orderData.tax.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between text-xl font-medium text-orange-500">
                                    <p>Total</p>
                                    <p>${orderData.total.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={async () => {
                            // Send PDF to owner and user
                            try {
                                const formData = new FormData()
                                formData.append('orderData', JSON.stringify(orderData))
                                formData.append('userEmail', orderData.email)

                                // Check if transactionProof exists in session storage (we'll need to store it there from OrderForm)
                                const proofFile = sessionStorage.getItem('transactionProofFile')
                                if (proofFile) {
                                    const blob = new Blob([proofFile], { type: 'application/octet-stream' })
                                    formData.append('transactionProof', blob, orderData.transactionProof)
                                }

                                await fetch('/api/order', {
                                    method: 'POST',
                                    body: formData
                                })
                            } catch (e) {
                                console.log("Error:", e)
                            }
                            alert('Order placed successfully!')
                            router.push('/')
                        }}
                        className="w-full bg-orange-500 text-white py-3 rounded text-lg font-medium transition-colors hover:bg-orange-600"
                    >
                        Place Order
                    </button>
                </div>
            </main>
        </>
    )
}