import React from "react";

interface Props {
    children: React.ReactNode;
}
const UserCard: React.FC<Props> = ({ children }) => {
    return (
        <div className="relative mx-auto">
            <div className="relative border-2 border-black shadow-lg shadow-black rounded-lg bg-white w-[325px] sm:w-[350px] p-5">
                <div className="border-2 border-black rounded-lg w-[280px] sm:w-[300px]">{children}</div>
            </div>
        </div>
    );
};

export default UserCard;
