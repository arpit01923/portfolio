import ProjectCard from "@/components/extra/card/projectCard";
import AnimateText from "@/components/standard/animateText";
import { openSourceProjects, personalProjects, professionalProjects } from "@/helper/utils";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    return (
        <>
            <Head>
                <title>Portfolio | Projects</title>
            </Head>
            <section className="grid gap-5">
                <AnimateText className="text-xl sm:text-4xl xl:text-6xl text-center font-bold  my-5">
                    Professional Projects
                </AnimateText>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {professionalProjects.map((item, index) => (
                        <ProjectCard key={index}>
                            <div className="grid gap-2">
                                <Link href={item?.liveLink} target="_blank">
                                    <Image
                                        alt="project-image"
                                        src={item?.src}
                                        width={300}
                                        height={200}
                                        className="rounded-lg w-full h-[200px] shadow-md"
                                        unoptimized
                                    />
                                </Link>
                                <h1 className="text-2xl font-bold my-2">{item?.projectName}</h1>
                                <p className="line-clamp-3">{item?.description}</p>
                                <div className="flex gap-2 flex-wrap my-1">
                                    {item?.tags?.map((inst, index) => (
                                        <span key={index} className="text-white text-sm p-1 rounded-md bg-primary">
                                            {inst}
                                        </span>
                                    ))}
                                </div>
                                <p className="border-b-2 border-blue-700 w-10 font-medium text-blue-700">
                                    <Link href={item?.liveLink} target="_blank">
                                        Visit
                                    </Link>
                                </p>
                            </div>
                        </ProjectCard>
                    ))}
                </div>
                <AnimateText className="text-xl sm:text-4xl xl:text-6xl text-center font-bold  my-5">
                    Open Source Contribution
                </AnimateText>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {openSourceProjects.map((item, index) => (
                        <ProjectCard key={index}>
                            <div className="grid gap-2">
                                <Link href={item?.liveLink} target="_blank">
                                    <Image
                                        alt="project-image"
                                        src={item?.src}
                                        width={300}
                                        height={200}
                                        className="rounded-lg w-full h-[200px] shadow-md"
                                        unoptimized
                                    />
                                </Link>
                                <h1 className="text-2xl font-bold my-2">{item?.projectName}</h1>
                                <p className="line-clamp-4">{item?.description}</p>
                                <div className="flex gap-2 flex-wrap my-1">
                                    {item?.tags?.map((inst, index) => (
                                        <span key={index} className="text-white text-sm p-1 rounded-md bg-primary">
                                            {inst}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between">
                                    <p className="border-b-2 border-blue-700 w-10 font-medium text-blue-700">
                                        <Link href={item?.liveLink} target="blank">
                                            Visit
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </ProjectCard>
                    ))}
                </div>
                <AnimateText className="text-xl sm:text-4xl xl:text-6xl text-center font-bold my-5">
                    Personal Projects
                </AnimateText>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {personalProjects.map((item, index) => (
                        <ProjectCard key={index}>
                            <div className="grid gap-2">
                                <Link href={item?.liveLink} target="_blank">
                                    <Image
                                        alt="project-image"
                                        src={item?.src}
                                        width={300}
                                        height={200}
                                        className="rounded-lg w-full h-[200px] shadow-md"
                                        unoptimized
                                    />
                                </Link>
                                <h1 className="text-2xl font-bold my-2">{item?.projectName}</h1>
                                <p className="line-clamp-4">{item?.description}</p>
                                <div className="flex gap-2 flex-wrap my-1">
                                    {item?.tags?.map((inst, index) => (
                                        <span key={index} className="text-white text-sm p-1 rounded-md bg-primary">
                                            {inst}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between">
                                    <p className="border-b-2 border-blue-700 w-10 font-medium text-blue-700">
                                        <Link href={item?.liveLink} target="blank">
                                            Visit
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href={item?.githubLink} target="blank">
                                            <Image
                                                src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Github-Dark.svg"
                                                width={25}
                                                alt="github-icon"
                                                height={25}
                                            />{" "}
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </ProjectCard>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Projects;
