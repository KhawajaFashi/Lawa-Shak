import './globals.css'

export const metadata = {
  title: 'Lawa Shak - Delicious Molten Lava Cakes',
  description: 'Indulge in our exquisite lava cake. Every bite reveals a rich center of pure chocolate bliss.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
