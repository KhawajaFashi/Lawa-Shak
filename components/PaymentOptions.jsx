'use client'

import { useState } from 'react'

export default function PaymentOptions() {
    const [selectedPayment, setSelectedPayment] = useState(null)

    const bankAccounts = {
        RaastAccount: {
            name: 'Raast Account',
            accountNumber: '0315 5605 210',
            accountHolder: 'Hamza Zafar Qureshi'
        },
        UblAccount: {
            name: 'Ubl Bank Account',
            accountNumber: '0242 29034 3425',
            accountHolder: 'Hamza Zafar Qureshi'
        },
        Easypaisa: {
            name: 'Easypaisa',
            accountNumber: '0315 5605 210 ',
            accountHolder: 'Hamza Zafar Qureshi',
        },
        Jazzcash: {
            name: 'Jazzcash',
            accountNumber: '0315 5605 210 ',
            accountHolder: 'Hamza Zafar Qureshi',
        }
    }

    return (
        <div className="w-full max-w-md mx-auto bg-black rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-orange-500 mb-6">Payment Options</h2>
            <div className="flex flex-col gap-4">
                <button
                    onClick={() => setSelectedPayment(selectedPayment === 'Raast Account' ? null : 'Raast Account')}
                    className={`py-3 rounded font-semibold transition-colors ${selectedPayment === 'Raast Account' ? 'bg-orange-500 text-white' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
                >
                    Raast Account
                </button>
                <button
                    onClick={() => setSelectedPayment(selectedPayment === 'Ubl Bank Account' ? null : 'Ubl Bank Account')}
                    className={`py-3 rounded font-semibold transition-colors ${selectedPayment === 'Ubl Bank Account' ? 'bg-orange-500 text-white' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
                >
                    UBL Bank Account
                </button>
                <button
                    onClick={() => setSelectedPayment(selectedPayment === 'Easypaisa' ? null : 'Easypaisa')}
                    className={`py-3 rounded font-semibold transition-colors ${selectedPayment === 'Easypaisa' ? 'bg-orange-500 text-white' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
                >
                    Easypaisa
                </button>
                <button
                    onClick={() => setSelectedPayment(selectedPayment === 'Jazzcash' ? null : 'Jazzcash')}
                    className={`py-3 rounded font-semibold transition-colors ${selectedPayment === 'Jazzcash' ? 'bg-orange-500 text-white' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
                >
                    Jazzcash
                </button>
            </div>

            {selectedPayment && (
                <div className="mt-6 bg-gray-900 rounded-lg p-4 border border-orange-500/30">
                    {selectedPayment === 'Raast Account' && (
                        <div className="space-y-3 text-gray-300 text-sm">
                            <h3 className="text-lg font-semibold text-orange-500 mb-4">Raast Account Details</h3>
                            <div>
                                <p className="text-gray-400">Account Number</p>
                                <p className="text-white font-mono">{bankAccounts.RaastAccount.accountNumber}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Account Holder</p>
                                <p className="text-white">{bankAccounts.RaastAccount.accountHolder}</p>
                            </div>
                        </div>
                    )}
                    {selectedPayment === 'Ubl Bank Account' && (
                        <div className="space-y-3 text-gray-300 text-sm">
                            <h3 className="text-lg font-semibold text-orange-500 mb-4">UBL Account Details</h3>
                            <div>
                                <p className="text-gray-400">Card Number</p>
                                <p className="text-white font-mono">{bankAccounts.UblAccount.accountNumber}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Account Holder</p>
                                <p className="text-white">{bankAccounts.UblAccount.accountHolder}</p>
                            </div>
                        </div>
                    )}
                    {selectedPayment === 'Easypaisa' && (
                        <div className="space-y-3 text-gray-300 text-sm">
                            <h3 className="text-lg font-semibold text-orange-500 mb-4">Easypaisa Account</h3>
                            <div>
                                <p className="text-gray-400">Account Number</p>
                                <p className="text-white font-mono">{bankAccounts.Easypaisa.accountNumber}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Account Holder</p>
                                <p className="text-white">{bankAccounts.Easypaisa.accountHolder}</p>
                            </div>
                        </div>
                    )}
                    {selectedPayment === 'Jazzcash' && (
                        <div className="space-y-3 text-gray-300 text-sm">
                            <h3 className="text-lg font-semibold text-orange-500 mb-4">Jazzcash Account</h3>
                            <div>
                                <p className="text-gray-400">Account Number</p>
                                <p className="text-white font-mono">{bankAccounts.Jazzcash.accountNumber}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Account Holder</p>
                                <p className="text-white">{bankAccounts.Jazzcash.accountHolder}</p>
                            </div>
                        </div>
                    )}
                </div>
            )}


        </div>
    )
}
