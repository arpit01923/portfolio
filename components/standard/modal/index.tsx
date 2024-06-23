import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import React, { memo, useEffect } from "react";
import { HiX } from "react-icons/hi";

interface Props {
    show: boolean;
    children: React.ReactNode;
    backdropClick?: () => void;
    escClicked?: () => void;
    className?: string;
    paddingDisable?: boolean;
    loader?: boolean;
    noAnimation?: boolean;
    maxWidth?: string;
}
const Modal: React.FC<Props> = ({
    children,
    show,
    backdropClick,
    className,
    escClicked,
    paddingDisable,
    loader,
    noAnimation,
    maxWidth,
}) => {
    useEffect(() => {
        if (escClicked) {
            document.onkeydown = function (evt: any) {
                evt = evt || window.event;
                var isEscape = false;
                if ("key" in evt) {
                    isEscape = evt.key === "Escape" || evt.key === "Esc";
                } else {
                    isEscape = evt?.keyCode === 27;
                }
                if (isEscape) {
                    escClicked();
                }
            };
        }
    }, []);
    useEffect(() => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            console.log();
        } else {
            if (show) {
                document.body.style.overflowY = "hidden";
                document.body.style.paddingRight = "15px";
            } else {
                document.body.style.overflowY = "auto";
                document.body.style.paddingRight = "0";
            }
        }
    }, [show]);
    return (
        <div>
            <AnimatePresence
                // Disable any initial animations on children that
                // are present when the component is first rendered
                initial={false}
                // Only render one component at a time.
                // The exiting component will finish its exit
                // animation before entering component is rendered
                mode="wait"
                // Fires when all exiting nodes have completed animating out
                onExitComplete={() => null}
            >
                {show ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={noAnimation ? { duration: 0.3 } : { duration: 0.5 }}
                        className={classNames(
                            "bg-black/60 backdrop-blur-sm fixed top-0 right-0 bottom-0 left-0 w-screen h-screen z-[80]",
                            loader ? "loaderModal" : ""
                        )}
                        onClick={backdropClick}
                    ></motion.div>
                ) : (
                    ""
                )}
            </AnimatePresence>
            <AnimatePresence
                // Disable any initial animations on children that
                // are present when the component is first rendered
                initial={false}
                // Only render one component at a time.
                // The exiting component will finish its exit
                // animation before entering component is rendered
                mode="wait"
                // Fires when all exiting nodes have completed animating out
                onExitComplete={() => null}
            >
                {show ? (
                    <div
                        className={classNames(
                            "left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 fixed md:min-w-400 w-[90vw] rounded-xl z-[100] max-h-screen overflow-auto",
                            maxWidth || "max-w-400"
                        )}
                    >
                        <motion.div
                            initial={noAnimation ? { opacity: 0, scale: 1 } : { scale: 0 }}
                            animate={noAnimation ? { opacity: 1 } : { scale: 1 }}
                            exit={{
                                scale: 0,
                            }}
                            transition={{ duration: 0.2 }}
                            className={classNames(
                                "shadow-secondaryShadow bg-white rounded-xl",
                                loader ? "loaderModal" : "",
                                !paddingDisable && "p-5",
                                className
                            )}
                        >
                            {backdropClick ? (
                                <span className="absolute right-3 top-3 cursor-pointer">
                                    <HiX onClick={backdropClick} />
                                </span>
                            ) : null}
                            {children}
                        </motion.div>
                    </div>
                ) : (
                    ""
                )}
            </AnimatePresence>
        </div>
    );
};

export default memo(Modal);
