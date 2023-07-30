import { menuBar } from "@/helper/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Modal from "..";

interface Props {
    openModal: boolean;
    openHandler: () => void;
}
const MobileSidebar: React.FC<Props> = ({ openModal, openHandler }) => {
    const router = useRouter();

    const clickHandler = (item: { name: string; link: string }) => {
        openHandler();
        router.push(item.link);
    };
    return (
        <Modal show={openModal} backdropClick={openHandler}>
            <ul className="grid font-semibold gap-8 mx-auto max-w-min">
                {menuBar?.map((item: { name: string; link: string }, index: number) => (
                    <li
                        key={index}
                        className={`relative text-center group ${router.asPath === item.link ? "" : "cursor-pointer"}`}
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
            <ul className="flex gap-8 mt-10 justify-center">
                <li>
                    <Link href="https://github.com/arpit01923" target="blank">
                        <Image
                            src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Github-Dark.svg"
                            width={25}
                            alt="github"
                            height={25}
                        />{" "}
                    </Link>
                </li>
                <li>
                    <Link href="https://linkedin.com/in/arpit-kumar-4b11211a4" target="blank">
                        <Image
                            src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/LinkedIn.svg"
                            width={25}
                            alt="linkedin"
                            height={25}
                        />{" "}
                    </Link>
                </li>
                <li>
                    <Link href="https://twitter.com/arpit_00_02" target="blank">
                        <Image
                            src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Twitter.svg"
                            width={25}
                            alt="twitter"
                            height={25}
                        />{" "}
                    </Link>
                </li>
            </ul>
        </Modal>
    );
};

export default MobileSidebar;
