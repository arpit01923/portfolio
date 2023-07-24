import React from "react";
import { motion } from "framer-motion";
import Title from "../Title";

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
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
                <motion.div
                    className="flex items-center justify-center rounded-full font-semibold bg-black text-white py-3 px-6 shadow-black cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>
                <Skill name="HTML" x="-19vw" y="1vw" />
                <Skill name="CSS" x="-5vw" y="-9vw" />
                <Skill name="JavaScript" x="19vw" y="1vw" />
                <Skill name="React.Js" x="-5vw" y="9vw" />
                <Skill name="TypeScript" x="-32vw" y="-4vw" />
                <Skill name="Next.Js" x="-10vw" y="-15vw" />
                <Skill name="Git" x="28vw" y="-8vw" />
                <Skill name="Github" x="5vw" y="15vw" />
                <Skill name="Redux Toolkit" x="-28vw" y="17vw" />
                <Skill name="Tailwind CSS" x="15vw" y="-20vw" />
            </div>
        </>
    );
};

export default Skills;
