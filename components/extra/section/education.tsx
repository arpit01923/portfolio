import React, { useRef } from "react";
import Title from "../Title";
import { useScroll, motion } from "framer-motion";
import LiIcons from "../icons/liIcons";

const education = [
    {
        course: "Bachelor of Technology In Computer Science",
        dateAndTime: "2018-2022 | Kurukshetra University, Kurukshetra, India",
        title: "A Bachelor of Technology in Computer Science equips individuals with a comprehensive understanding of computer systems and software development, enabling them to tackle complex technological challenges and drive innovation in the digital era.",
    },
    {
        course: "10+2",
        dateAndTime: "2017-2018 | C.B.S.E, Delhi, India",
        title: "Completing my education in the CBSE Board's 10+2 system, I gained a comprehensive understanding of diverse subjects, fostering a well-rounded academic foundation.",
    },
];
interface EducationProps {
    course: string;
    dateAndTime: string;
    title: string;
    key: number;
}
const Education: React.FC<EducationProps> = ({ course, dateAndTime, title, key }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="list-none" key={key}>
            <LiIcons reference={ref} />
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.7, type: "spring" }}>
                <p className="text-2xl font-bold"> {course}</p>
                <p className="font-light">{dateAndTime}</p>
                <p>{title}</p>
            </motion.div>
        </li>
    );
};

const Educations = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        // @ts-ignore
        offset: ["start end", "center start"],
    });
    return (
        <>
            <Title classNames="text-3xl sm:text-4xl xl:text-6xl text-center font-bold">Education</Title>
            <ul className="xs:max-w-[700px] xs:w-auto w-[280px] mx-auto relative grid gap-20">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute -left-8 top-0 w-[4px] h-full bg-black origin-top"
                ></motion.div>
                {education?.map(({ course, dateAndTime, title }: Omit<EducationProps, "key">, index: number) => (
                    <Education course={course} dateAndTime={dateAndTime} title={title} key={index} />
                ))}
            </ul>
        </>
    );
};

export default Educations;
