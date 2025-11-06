export default function PaymentOptions() {
    return (
        <div className="w-full max-w-md mx-auto bg-black rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-orange-500 mb-6">Payment Options</h2>
            <div className="flex flex-col gap-4">
                <button className="bg-orange-500 text-white py-3 rounded font-semibold hover:bg-orange-600 transition-colors">Credit Card</button>
                <button className="bg-gray-900 text-white py-3 rounded font-semibold hover:bg-gray-800 transition-colors">Debit Card</button>
                <button className="bg-gray-900 text-white py-3 rounded font-semibold hover:bg-gray-800 transition-colors">PayPal</button>
            </div>
            <div className="mt-8 text-gray-400 text-sm">
                <p>Subtotal: $24.99</p>
                <p>Delivery Fee: $5.00</p>
                <p>Tax (8%): $2.40</p>
                <p className="text-orange-500 font-bold text-lg mt-2">Total: $32.39</p>
            </div>
        </div>
    )
}
