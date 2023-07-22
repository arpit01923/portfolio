import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FiExternalLink } from 'react-icons/fi';
import Title from '@/components/extra/Title';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='grid p-5 place-items-center lg:grid-cols-2 gap-10'>
      <Image src="/assets/images/developer-pic-1.webp" alt='' width='0' height='0' sizes='100vw' className='w-full h-auto' />
      <div className='grid gap-5'>
        <Title classNames='text-3xl sm:text-4xl xl:text-6xl text-center md:text-left font-bold'>Unleashing the Creative Power of a Frontend Developer!</Title>
        <p className='text-lg text-center md:text-left'>Welcome to my portfolio as a frontend developer! With a passion for creating immersive user experiences, I specialize in crafting elegant and responsive websites. From pixel-perfect designs to seamless interactions, my goal is to bring your vision to life while delivering exceptional functionality and aesthetics. Explore my projects and discover the artistry of frontend development.</p>
        <div className='flex gap-5'>
          <a href='' download="/Arpit_Resume.pdf" className='border border-black bg-black text-white px-4 py-2 rounded-lg flex gap-2 items-center'>
            <span>
              Resume
            </span>
            <span>
              <FiExternalLink />
            </span>
          </a>
          <button className='border border-black text-black px-4 py-2 rounded-lg'>Contact</button>
        </div>
      </div>
    </main>
  )
}
