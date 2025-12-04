import Navigation from '@/components/Navigation'
import './globals.css'
import { OrderProvider } from '@/context/OrderContext'

export const metadata = {
  title: 'Lava Shak - Delicious Molten Lava Cakes',
  description: 'Indulge in our exquisite lava cake. Every bite reveals a rich center of pure chocolate bliss.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <OrderProvider>
          <Navigation />
          {children}
        </OrderProvider>
      </body>
    </html>
  )
}
