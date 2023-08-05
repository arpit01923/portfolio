import React, { useRef } from "react";
import Title from "../Title";
import { motion, useScroll } from "framer-motion";
import LiIcons from "../icons/liIcons";

const experience = [
    {
        position: "MERN Stack Developer",
        name: "E Software Solutions",
        dateAndTime: "2022-Present | Haryana, India",
        title: "Collaborate with the design and backend teams to develop responsive and intuitive user interfaces for web applications.Implement frontend solutions, leveraging React.js to enhance website performance and user engagement.",
    },
    {
        position: "Intern",
        name: "Emulus Consulting",
        dateAndTime: "Summer 2022 | Gurugram, India",
        title: "I am actively engaged in crafting innovative and efficient web applications. With a strong focus on code quality and best practices, I continuously strive to enhance the performance and scalability of React.js projects at Emulus Consulting.",
    },
];
interface ExperienceProps {
    position: string;
    name: string;
    dateAndTime: string;
    title: string;
    key: number;
}
const Experience: React.FC<ExperienceProps> = ({ position, name, dateAndTime, title, key }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="list-none" key={key}>
            <LiIcons reference={ref} />
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.7, type: "spring" }}>
                <p className="text-2xl font-bold">
                    {position} <span className="text-primary">@{name}</span>
                </p>
                <p className="font-light">{dateAndTime}</p>
                <p>{title}</p>
            </motion.div>
        </li>
    );
};

const Experiences = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        // @ts-ignore
        offset: ["start end", "center start"],
    });
    return (
        <>
            <Title classNames="text-3xl sm:text-4xl xl:text-6xl text-center font-bold">Experience</Title>
            <ul ref={ref} className="xs:max-w-[700px] xs:w-auto w-[280px] mx-auto relative grid gap-20">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute -left-8 top-0 w-[4px] h-full bg-black origin-top"
                ></motion.div>
                {experience?.map(
                    ({ position, name, dateAndTime, title }: Omit<ExperienceProps, "key">, index: number) => (
                        <Experience
                            position={position}
                            name={name}
                            dateAndTime={dateAndTime}
                            title={title}
                            key={index}
                        />
                    )
                )}
            </ul>
        </>
    );
};

export default Experiences;
