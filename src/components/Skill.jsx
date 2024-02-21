import React from 'react';
import './index.css';

const Skill = ({ skill, onClick }) => {
    return (
        <div className="skill" onClick={onClick}>
            <div className="circle"></div>
            <div className="competenceName">{skill}</div>
        </div>
    );
}

export default Skill;