import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <header className='mx-auto container p-5 flex justify-between items-center'>
            <nav>
                <ul className='flex font-semibold gap-8'>
                    <li className='border-b-2 border-black pb-1'>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Articles</li>
                </ul>
            </nav>
            <p className='w-[60px] shadow-lg shadow-slate-200 h-[60px] grid place-items-center cursor-pointer rounded-full bg-black text-lg text-white font-bold'>WEB</p>
            <nav>
                <ul className='flex gap-8'>
                    <li><a href="https://github.com/arpit01923" target="blank"><Image src="/assets/icons/Github.svg" width={25} alt='' height={25} /> </a></li>
                    <li><a href="https://linkedin.com/in/arpit-kumar-4b11211a4" target="blank"><Image src="/assets/icons/Linkedin.svg" width={25} alt='' height={25} /> </a></li>
                    <li><a href="https://twitter.com/arpit_00_02" target="blank"><Image src="/assets/icons/Twitter.svg" width={25} alt='' height={25} /> </a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header