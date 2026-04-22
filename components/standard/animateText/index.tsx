import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

interface Props {
    children: string;
    className: string;
}
const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.08,
            staggerChildren: 0.04,
        },
    },
};
const singleWord = {
    initial: {
        opacity: 1,
        y: 18,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};
const AnimateText: React.FC<Props> = ({ children, className = "" }) => {
    return (
        <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
            <motion.h1
                className={classNames("inline-block w-full text-black font-bold capitalize text-8xl", className)}
                variants={quote}
                initial="initial"
                animate="animate"
            >
                {children.split(" ").map((word: string, index: number) => (
                    <motion.span key={index} className="inline-block" variants={singleWord}>
                        {word}&nbsp;
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
};

export default AnimateText;
