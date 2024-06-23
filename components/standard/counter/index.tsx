import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import React, { useEffect } from "react";

interface Props {
    totalCount: number;
}
const Counter: React.FC<Props> = ({ totalCount }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, totalCount, { duration: 1 });

        return animation.stop;
    }, []);

    return <motion.h1>{rounded}</motion.h1>;
};
export default Counter;
