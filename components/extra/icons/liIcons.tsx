import React from "react";
import { motion, useScroll } from "framer-motion";

interface LiIcon {
    reference: React.MutableRefObject<null>;
}
const LiIcons: React.FC<LiIcon> = ({ reference }) => {
    const { scrollYProgress } = useScroll({
        target: reference,
        // @ts-ignore
        offset: ["center end", "center center"],
    });
    return (
        <figure className="absolute -left-[68px] stroke-black">
            <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" className="stroke-1 fill-none" />
                <motion.circle
                    style={{
                        pathLength: scrollYProgress,
                    }}
                    cx="75"
                    cy="50"
                    r="20"
                    className="stroke-[5px] fill-white"
                />
                <circle cx="75" cy="50" r="10" className="animate-pulse stroke-1 fill-primary" />
            </svg>
        </figure>
    );
};

export default LiIcons;
