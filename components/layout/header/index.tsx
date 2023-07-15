import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

const menuBar = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Articles", link: "/articles" },
]
const Header = () => {
    const router = useRouter();
    const getPath = router?.pathname?.length ? menuBar?.find((item) => item.link === router.pathname) : null
    const [selectedMenu, setSelectedMenu] = useState(getPath || menuBar[0]);

    const clickHandler = (item: { name: string, link: string }) => {
        setSelectedMenu(item);
        router.push(item.link);
    }

    return (
        <header className='mx-auto container p-5 flex justify-between items-center'>
            <nav>
                <ul className='flex font-semibold gap-8'>
                    {menuBar?.map((item: { name: string, link: string }, index) =>
                        <li key={index} className={selectedMenu?.name === item.name ? "border-b-2 border-black pb-1" : "cursor-pointer"} onClick={() => clickHandler(item)}>{item.name}</li>
                    )}
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