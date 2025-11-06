import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Story from '@/components/Story'
import Ingredients from '@/components/Ingredients'
import OrderForm from '@/components/OrderForm'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Story />
        <Ingredients />
        <Contact />
      </main>
    </>
  )
}
