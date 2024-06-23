import React from "react";
interface Props {
    children: string | React.ReactNode;
    classNames: string;
}
const Title: React.FC<Props> = ({ children, classNames }) => {
    return <h1 className={classNames}>{children}</h1>;
};

export default Title;
