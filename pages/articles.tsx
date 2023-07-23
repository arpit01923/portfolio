import SubTitle from "@/components/extra/Subtitle";
import Title from "@/components/extra/Title";
import Link from "next/link";
import { AiOutlineRead } from "react-icons/ai";

const Articles = () => {
    const articles = [
        {
            projectName: "Hoisting In JS",
            liveLink: "https://vany02.hashnode.dev/hoisting-in-js",
            description:
                "You know most hated language is JavaScript !!! You know most loved language is JavaScript !!! And you know according to research which is the most flexible / powerfull language ???? It's again JavaScript",
            date: "May 10, 2022",
            readTime: "2 min read",
        },
        {
            projectName: "Beginner friendly Git commands to run your project",
            liveLink: "https://vany02.hashnode.dev/beginner-friendly-git-commands-to-run-your-project",
            description:
                "Git is a free and open source distributed code management and Version control system that is distributed under the GNU General Public License version 2.",
            date: "May 10, 2022",
            readTime: "2 min read",
        },
        {
            projectName: "Async vs Defer",
            liveLink: "https://vany02.hashnode.dev/async-vs-defer",
            description:
                "Async vs Defer* the most confusing topic. A lot of programmer want understand this. Don't worry after this blog you will never be confused about this topic.",
            date: "Jun 9, 2022",
            readTime: "2 min read",
        },
    ];
    return (
        <section className="grid gap-5">
            <Title classNames="text-3xl sm:text-4xl xl:text-6xl text-center font-bold">
                Words Can Change The World!
            </Title>
            <SubTitle classNames="text-lg uppercase font-bold">All Articles</SubTitle>
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
    );
};

export default Articles;
