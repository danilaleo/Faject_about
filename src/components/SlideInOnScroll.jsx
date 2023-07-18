import {useEffect, useRef, useState} from "react";
import Slide from "@mui/material/Slide";

const useElementOnScreen = (options) => {
    const containerRef = useRef();
    const [isVisible, setIsVisible] = useState(false);

    const makeAppear = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting)
            setIsVisible(true);
    };

    const makeAppearRepeating = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };

    const callBack = options.reappear ? makeAppearRepeating : makeAppear;

    useEffect(() => {
        const containerRefCurrent = containerRef.current
        const observer = new IntersectionObserver(callBack, options);
        if (containerRefCurrent)
            observer.observe(containerRefCurrent);

        return () => {
            if (containerRefCurrent) {
                observer.unobserve(containerRefCurrent);
            }
        };
    }, [containerRef, options, callBack]);

    return [containerRef, isVisible];
};


// eslint-disable-next-line react/prop-types
const SlideInOnScroll = ({children, reappear, threshold = 0.5, direction = "right"}) => {
    const [containerRef, isVisible] = useElementOnScreen({
        threshold: threshold,
        reappear: reappear,
    });

    return (
        <>
            <div ref={containerRef}>
                <Slide direction={direction} in={isVisible} mountOnEnter unmountOnExit timeout={1000}>
                    {children}
                </Slide>
            </div>
        </>
    );
}

export default SlideInOnScroll;