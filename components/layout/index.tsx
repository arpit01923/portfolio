import React from "react";
import Header from "./header";

interface Props {
    children: React.ReactNode;
    className: string;
}
const Layout: React.FC<Props> = ({ children, className }) => {
    return (
        <div className={className}>
            <Header />
            <div className="container mx-auto p-5">{children}</div>
        </div>
    );
};

export default Layout;
