import React from 'react';
import './index.css';

const Skill = ({ skill, onClick }) => {
    return (
        <div className="skill" onClick={onClick}>
            {skill}
        </div>
    );
}

export default Skill;