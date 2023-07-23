import React from "react";
interface Props {
    children: string | React.ReactNode;
    classNames: string;
}
const SubTitle: React.FC<Props> = ({ children, classNames }) => {
    return <h2 className={classNames}>{children}</h2>;
};

export default SubTitle;
