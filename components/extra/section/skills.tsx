import React from "react";
import { motion } from "framer-motion";
import Title from "../Title";
import { isMobileOnly } from "react-device-detect";

interface SkillProps {
    name: string;
    x: string;
    y: string;
}
const Skill: React.FC<SkillProps> = ({ name, x, y }) => {
    return (
        <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-black text-white py-3 px-6 shadow-black cursor-pointer absolute"
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    );
};
const Skills = () => {
    return (
        <>
            <Title classNames="text-3xl sm:text-4xl xl:text-6xl text-center font-bold">Skills</Title>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularMobileLight sm:bg-circularLight">
                <motion.div
                    className="flex items-center justify-center rounded-full font-semibold bg-black text-white py-3 px-6 shadow-black cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>
                <Skill name="HTML" x={isMobileOnly ? "-25vw" : "-19vw"} y={isMobileOnly ? "15vw" : "1vw"} />
                <Skill name="CSS" x={isMobileOnly ? "10vw" : "-5vw"} y={isMobileOnly ? "-16vw" : "-9vw"} />
                <Skill name="JavaScript" x={isMobileOnly ? "30vw" : "19vw"} y={isMobileOnly ? "60vw" : "1vw"} />
                <Skill name="React.Js" x={isMobileOnly ? "-15vw" : "-5vw"} y={isMobileOnly ? "40vw" : "9vw"} />
                <Skill name="TypeScript" x={isMobileOnly ? "-30vw" : "-32vw"} y={isMobileOnly ? "-60vw" : "-4vw"} />
                <Skill name="Next.Js" x={isMobileOnly ? "-20vw" : "-10vw"} y={isMobileOnly ? "-40vw" : "-15vw"} />
                <Skill name="Git" x="28vw" y="-8vw" />
                <Skill name="Github" x={isMobileOnly ? "20vw" : "5vw"} y={isMobileOnly ? "40vw" : "15vw"} />
                <Skill name="Redux Toolkit" x={isMobileOnly ? "-30vw" : "-28vw"} y={isMobileOnly ? "60vw" : "17vw"} />
                <Skill name="Tailwind CSS" x={isMobileOnly ? "30vw" : "15vw"} y={isMobileOnly ? "-60vw" : "-20vw"} />
            </div>
        </>
    );
};

export default Skills;
