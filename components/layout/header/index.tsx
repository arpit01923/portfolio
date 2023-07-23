import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Logo from "@/components/extra/logo";

const menuBar = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Articles", link: "/articles" },
];
const Header = () => {
    const router = useRouter();
    const getPath = router?.pathname?.length ? menuBar?.find((item) => item.link === router.pathname) : null;
    const [selectedMenu, setSelectedMenu] = useState(getPath || menuBar[0]);

    const clickHandler = (item: { name: string; link: string }) => {
        setSelectedMenu(item);
        router.push(item.link);
    };

    return (
        <header className="mx-auto container p-5 flex justify-between items-center">
            <nav>
                <ul className="flex font-semibold gap-8">
                    {menuBar?.map((item: { name: string; link: string }, index) => (
                        <li
                            key={index}
                            className={
                                selectedMenu?.name === item.name ? "border-b-2 border-black pb-1" : "cursor-pointer"
                            }
                            onClick={() => clickHandler(item)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </nav>
            <Logo />
            <nav>
                <ul className="flex gap-8">
                    <li>
                        <Link href="https://github.com/arpit01923" target="blank">
                            <Image src="/assets/icons/Github.svg" width={25} alt="" height={25} />{" "}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://linkedin.com/in/arpit-kumar-4b11211a4" target="blank">
                            <Image src="/assets/icons/Linkedin.svg" width={25} alt="" height={25} />{" "}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://twitter.com/arpit_00_02" target="blank">
                            <Image src="/assets/icons/Twitter.svg" width={25} alt="" height={25} />{" "}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
