import { useEffect, useState } from "react";

/** Matches Tailwind `md` breakpoint (768px): true for narrow viewports only. */
export function useMobileViewport() {
    const [isNarrow, setIsNarrow] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 768px)");
        const update = () => setIsNarrow(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);

    return isNarrow;
}
