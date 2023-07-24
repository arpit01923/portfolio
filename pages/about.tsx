import Biography from "@/components/extra/section/biography";
import Educations from "@/components/extra/section/education";
import Experiences from "@/components/extra/section/experience";
import Skills from "@/components/extra/section/skills";

const About = () => {
    return (
        <section className="mb-80 grid gap-10">
            <Biography />
            <Skills />
            <Experiences />
            <Educations />
        </section>
    );
};

export default About;
