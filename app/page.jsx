import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Story from '@/components/Story'
import Ingredients from '@/components/Ingredients'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ';
import Reviews from '@/components/Reviews'
import ImageSlider from '@/components/ImageSlider'

export default function Home() {
  
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Story />
        <ImageSlider/>
        <Ingredients />
        <Reviews/>
        <Contact />
        <FAQ/>
      </main>
    </>
  )
}
