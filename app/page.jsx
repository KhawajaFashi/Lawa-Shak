import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Story from '@/components/Story'
import Ingredients from '@/components/Ingredients'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ';

export default function Home() {
  
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Story />
        <Ingredients />
        <Contact />
        <FAQ/>
      </main>
    </>
  )
}
