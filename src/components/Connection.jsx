import React from 'react';
import { useSpring, animated } from 'react-spring';
import './index.css';

const Connection = ({ from, to, isVisible }) => {
    const lineProps = useSpring({
        opacity: isVisible ? 1 : 0,
        fromX: isVisible ? from.x : 0,
        fromY: isVisible ? from.y : 0,
        toX: isVisible ? to.x : 0,
        toY: isVisible ? to.y : 0,
    });

    return (
        <animated.line
            x1={lineProps.fromX}
            y1={lineProps.fromY}
            x2={lineProps.toX}
            y2={lineProps.toY}
            style={{
                stroke: 'black',
                strokeWidth: 2,
                opacity: lineProps.opacity,
            }}
        />
    );
};

export default Connection;