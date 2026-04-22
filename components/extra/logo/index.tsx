import React from "react";

const Logo = () => {
    return (
        <p
            className="w-[60px] shadow-lg shadow-slate-200 h-[60px] grid place-items-center cursor-pointer rounded-full bg-black text-lg text-white font-bold transition-[transform,box-shadow,background-color] duration-300 ease-out hover:scale-[1.03] hover:shadow-xl hover:bg-teal-700 active:scale-[0.98]"
            title="Home"
        >
            WEB
        </p>
    );
};

export default Logo;
