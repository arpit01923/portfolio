import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='grid p-5 place-items-center md:grid-cols-2 gap-10'>
      <Image src="/assets/images/developer-pic-1.webp" alt='' width='0' height='0' sizes='100vw' className='w-full h-auto' />
      <div className='grid gap-5'>
        <h1 className='text-3xl sm:text-4xl xl:text-6xl text-center md:text-left font-bold'>Unleashing the Creative Power of a Frontend Developer</h1>
        <p className='text-lg text-center md:text-left'>Welcome to my portfolio as a frontend developer! With a passion for creating immersive user experiences, I specialize in crafting elegant and responsive websites. From pixel-perfect designs to seamless interactions, my goal is to bring your vision to life while delivering exceptional functionality and aesthetics. Explore my projects and discover the artistry of frontend development.</p>
      </div>
    </main>
  )
}
