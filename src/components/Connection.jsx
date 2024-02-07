import { useSpring, animated } from "react-spring";

const Connection = ({ from, to, isVisible }) => {
    const style = useSpring({
        opacity: isVisible ? 1 : 0,
        x1: isVisible ? from.x : 0,
        y1: isVisible ? from.y : 0,
        x2: isVisible ? to.x : 0,
        y2: isVisible ? to.y : 0,
    });

    return (
        <animated.line
            x1={style.x1}
            y1={style.y1}
            x2={style.x2}
            y2={style.y2}
            style={{
                stroke: "black",
                strokeWidth: 2,
                opacity: style.opacity,
            }}
        />
    );
};
