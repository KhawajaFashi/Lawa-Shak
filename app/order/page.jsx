'use client'
import PaymentOptions from '@/components/PaymentOptions'
import Navigation from '@/components/Navigation'
import { useRouter } from 'next/navigation'
import OrderForm from '@/components/OrderForm'

export default function OrderPage() {
  const router = useRouter();
  // We'll pass a prop to ContactForm to handle 'Next' click
  return (
    <>
      <main className="min-h-screen flex flex-col md:flex-row bg-black">
        <div className="w-full md:w-full p-8 flex items-center justify-center">
          <OrderForm />
        </div>
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center border-l border-gray-900">
          <PaymentOptions />
        </div>
      </main>
    </>
  )
}
