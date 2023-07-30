import AnimateText from "@/components/standard/animateText";
import { articles } from "@/helper/utils";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineRead } from "react-icons/ai";

const Articles = () => {
    return (
        <>
            <Head>
                <title>Portfolio | Articles</title>
            </Head>
            <section className="grid gap-5">
                <AnimateText className="text-xl sm:text-4xl xl:text-6xl text-center font-bold">
                    Words Can Change The World!
                </AnimateText>
                {articles.map((item, index) => (
                    <Link href={item?.liveLink} key={index} target="_blank" className="relative w-full h-full">
                        <div className="relative border-2 shadow-lg shadow-black border-black rounded-lg bg-white h-full w-full p-5">
                            <h3 className="font-bold text-lg">{item?.projectName}</h3>
                            <p>{item?.description}</p>
                            <div className="flex justify-end items-center gap-5">
                                <p>{item?.date}</p>
                                <p className="flex gap-2  justify-end items-center">
                                    <AiOutlineRead />
                                    {item?.readTime}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </section>
        </>
    );
};

export default Articles;
