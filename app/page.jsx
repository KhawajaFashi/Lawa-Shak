'use client';
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Story from '@/components/Story'
import Ingredients from '@/components/Ingredients'
import Contact from '@/components/Contact'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Navigation />
      <main>
        <Hero onOrderClick={() => router.push('/order')} />
        <Story />
        <Ingredients />
        <Contact />
      </main>
    </>
  )
}
