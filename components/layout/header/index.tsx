import Logo from "@/components/extra/logo";
import { menuBar } from "@/helper/utils";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileSidebar = dynamic(() => import("@/components/standard/modal/mobileSidebar"), {
    ssr: false,
    loading: () => null,
});

const SOCIAL_ICON = { width: 25, height: 25, decoding: "async" as const, loading: "lazy" as const };

const Header = () => {
    const [openModal, setOpenModal] = useState(false);
    const router = useRouter();

    const clickHandler = (item: { name: string; link: string }) => {
        router.push(item.link);
    };
    const openHandler = () => {
        setOpenModal((prev) => !prev);
    };

    return (
        <>
            <header className="mx-auto container p-5 flex justify-between items-center">
                <nav className="hidden md:block">
                    <ul className="flex font-semibold gap-8">
                        {menuBar?.map((item: { name: string; link: string }, index) => (
                            <li
                                key={index}
                                className={`relative group ${router.asPath === item.link ? "" : "cursor-pointer"}`}
                                onClick={() => clickHandler(item)}
                            >
                                {item.name}
                                <span
                                    className={`h-0.5 inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                                        router.asPath === item.link ? "w-full" : "w-0"
                                    }`}
                                >
                                    &nbsp;
                                </span>
                            </li>
                        ))}
                    </ul>
                </nav>
                {openModal ? (
                    <AiOutlineClose fontSize={25} className="block md:hidden cursor-pointer" onClick={openHandler} />
                ) : (
                    <GiHamburgerMenu fontSize={25} className="block md:hidden cursor-pointer" onClick={openHandler} />
                )}
                <div className="mx-auto">
                    <Logo />
                </div>
                <nav className="hidden md:block">
                    <ul className="flex gap-8">
                        <li>
                            <Link href="https://github.com/arpit01923" target="_blank" rel="noopener noreferrer">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Github-Dark.svg"
                                    alt="GitHub"
                                    {...SOCIAL_ICON}
                                />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.linkedin.com/in/arpit-4b11211a4"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/LinkedIn.svg"
                                    alt="LinkedIn"
                                    {...SOCIAL_ICON}
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://twitter.com/arpit_00_02" target="_blank" rel="noopener noreferrer">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Twitter.svg"
                                    alt="Twitter"
                                    {...SOCIAL_ICON}
                                />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <MobileSidebar openHandler={openHandler} openModal={openModal} />
        </>
    );
};

export default Header;
