import classNames from "classnames";
import React from "react";

interface Props {
    children: React.ReactNode;
    className: string;
}
const Button: React.FC<Props> = ({ children, className }) => {
    return (
        <button className={classNames("rounded-lg duration-300 active:scale-95", className || "")}>{children}</button>
    );
};

export default Button;
