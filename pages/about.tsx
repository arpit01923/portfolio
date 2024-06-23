import Biography from "@/components/extra/section/biography";
import Educations from "@/components/extra/section/education";
import Experiences from "@/components/extra/section/experience";
import Skills from "@/components/extra/section/skills";
import Head from "next/head";

const About = () => {
    return (
        <>
            <Head>
                <title>Portfolio | About Us</title>
            </Head>
            <section className="mb-80 grid gap-10">
                <Biography />
                <Skills />
                <Experiences />
                <Educations />
            </section>
        </>
    );
};

export default About;
