import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
    return (
        <motion.p
            className="w-[60px] shadow-lg shadow-slate-200 h-[60px] grid place-items-center cursor-pointer rounded-full bg-black text-lg text-white font-bold"
            whileHover={{
                backgroundColor: [
                    "#121212",
                    "rgba(131,58,180,1)",
                    "rgba(253,29,29,1)",
                    "rgba(252,176,69,1)",
                    "rgba(131,58,180,1)",
                    "#121212",
                ],
                transition: { duration: 1, repeat: Infinity },
            }}
        >
            WEB
        </motion.p>
    );
};

export default Logo;
