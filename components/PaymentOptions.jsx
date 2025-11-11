'use client'

import { useState } from 'react'

export default function PaymentOptions() {
    const [selectedPayment, setSelectedPayment] = useState(null)

    const bankAccounts = {
        creditCard: {
            name: 'Credit Card',
            accountNumber: '4532 1234 5678 9010',
            accountHolder: 'Lawa Shak Business Account',
            expiryDate: '12/26',
            cvv: '***'
        },
        debitCard: {
            name: 'Debit Card',
            accountNumber: '5425 2334 3010 9903',
            accountHolder: 'Lawa Shak Business Account',
            expiryDate: '09/25',
            cvv: '***'
        },
        bankTransfer: {
            name: 'Bank Transfer',
            bankName: 'First National Bank',
            accountNumber: '123456789',
            routingNumber: '021000021',
            accountHolder: 'Lawa Shak Inc.',
            accountType: 'Business Checking'
        }
    }

    return (
        <div className="w-full max-w-md mx-auto bg-black rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-orange-500 mb-6">Payment Options</h2>
            <div className="flex flex-col gap-4">
                <button
                    onClick={() => setSelectedPayment(selectedPayment === 'creditCard' ? null : 'creditCard')}
                    className={`py-3 rounded font-semibold transition-colors ${selectedPayment === 'creditCard' ? 'bg-orange-500 text-white' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
                >
                    Credit Card
                </button>
                <button
                    onClick={() => setSelectedPayment(selectedPayment === 'debitCard' ? null : 'debitCard')}
                    className={`py-3 rounded font-semibold transition-colors ${selectedPayment === 'debitCard' ? 'bg-orange-500 text-white' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
                >
                    Debit Card
                </button>
                <button
                    onClick={() => setSelectedPayment(selectedPayment === 'bankTransfer' ? null : 'bankTransfer')}
                    className={`py-3 rounded font-semibold transition-colors ${selectedPayment === 'bankTransfer' ? 'bg-orange-500 text-white' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
                >
                    Bank Transfer
                </button>
            </div>

            {selectedPayment && (
                <div className="mt-6 bg-gray-900 rounded-lg p-4 border border-orange-500/30">
                    <h3 className="text-lg font-semibold text-orange-500 mb-4">Account Details</h3>
                    {selectedPayment === 'creditCard' && (
                        <div className="space-y-3 text-gray-300 text-sm">
                            <div>
                                <p className="text-gray-400">Card Number</p>
                                <p className="text-white font-mono">{bankAccounts.creditCard.accountNumber}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Account Holder</p>
                                <p className="text-white">{bankAccounts.creditCard.accountHolder}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-gray-400">Expiry Date</p>
                                    <p className="text-white font-mono">{bankAccounts.creditCard.expiryDate}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">CVV</p>
                                    <p className="text-white font-mono">{bankAccounts.creditCard.cvv}</p>
                                </div>
                            </div>
                        </div>
                    )}
                    {selectedPayment === 'debitCard' && (
                        <div className="space-y-3 text-gray-300 text-sm">
                            <div>
                                <p className="text-gray-400">Card Number</p>
                                <p className="text-white font-mono">{bankAccounts.debitCard.accountNumber}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Account Holder</p>
                                <p className="text-white">{bankAccounts.debitCard.accountHolder}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-gray-400">Expiry Date</p>
                                    <p className="text-white font-mono">{bankAccounts.debitCard.expiryDate}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">CVV</p>
                                    <p className="text-white font-mono">{bankAccounts.debitCard.cvv}</p>
                                </div>
                            </div>
                        </div>
                    )}
                    {selectedPayment === 'bankTransfer' && (
                        <div className="space-y-3 text-gray-300 text-sm">
                            <div>
                                <p className="text-gray-400">Bank Name</p>
                                <p className="text-white">{bankAccounts.bankTransfer.bankName}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Account Number</p>
                                <p className="text-white font-mono">{bankAccounts.bankTransfer.accountNumber}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Routing Number</p>
                                <p className="text-white font-mono">{bankAccounts.bankTransfer.routingNumber}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Account Holder</p>
                                <p className="text-white">{bankAccounts.bankTransfer.accountHolder}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Account Type</p>
                                <p className="text-white">{bankAccounts.bankTransfer.accountType}</p>
                            </div>
                        </div>
                    )}
                </div>
            )}

            <div className="mt-8 text-gray-400 text-sm">
                <p>Subtotal: $24.99</p>
                <p>Delivery Fee: $5.00</p>
                <p>Tax (8%): $2.40</p>
                <p className="text-orange-500 font-bold text-lg mt-2">Total: $32.39</p>
            </div>
        </div>
    )
}
