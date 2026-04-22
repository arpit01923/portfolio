import AnimateText from "@/components/standard/animateText";
import Button from "@/components/standard/button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export default function Home() {
    return (
        <>
            <Head>
                <title>Portfolio | Home</title>
                <meta
                    name="description"
                    content="Portfolio of Arpit — full-stack developer focused on frontend, open source, and polished web experiences."
                />
            </Head>
            <main className="grid p-5 place-items-center lg:grid-cols-2 gap-10">
                <Image
                    src="/assets/images/developer-pic-1.webp"
                    alt="Arpit — full-stack developer"
                    width={560}
                    height={560}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-auto"
                    priority
                />
                <div className="grid gap-5">
                    <AnimateText className="text-xl sm:text-4xl xl:text-6xl text-center md:text-left font-bold">
                        Unleashing the Creative Power of a Full-Stack Developer!
                    </AnimateText>
                    <p className="text-lg text-center md:text-left">
                        Welcome to my portfolio. I am <strong>Arpit</strong>, a{" "}
                        <strong>full-stack developer (heavy frontend)</strong> and an{" "}
                        <strong>open source contributor!</strong> With a passion for creating immersive user
                        experiences, I specialize in crafting elegant and responsive websites. From pixel-perfect
                        designs to seamless interactions, my goal is to bring your vision to life while delivering
                        exceptional functionality and aesthetics. Explore my projects and discover the artistry of
                        frontend development.
                    </p>
                    <div className="flex gap-5">
                        <Button className="border border-black bg-black text-white px-4 py-2">
                            <Link href="/Arpit_Resume.pdf" target="_blank" className="flex gap-2 items-center">
                                <span>Resume</span>
                                <span>
                                    <FiExternalLink />
                                </span>
                            </Link>
                        </Button>
                        <Button className="border border-black text-black px-4 py-2">
                            <Link href="mailto:arpitkumar01923@gmail.com">Contact</Link>
                        </Button>
                    </div>
                </div>
            </main>
        </>
    );
}
