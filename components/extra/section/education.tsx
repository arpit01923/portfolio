import { education } from "@/helper/utils";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import Title from "../Title";
import LiIcons from "../icons/liIcons";

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
