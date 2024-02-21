import React from 'react';
import './index.css';

const Line = ({ active }) => {
    return (
        <div className={`line ${active ? 'active' : ''}`}></div>
    );
}

export default Line;