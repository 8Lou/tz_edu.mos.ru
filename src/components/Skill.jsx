import React from 'react';
import './index.css';

const Skill = ({ skill, onClick, activeSkills }) => {
    const isActive = activeSkills.includes(skill);

    return (
        <div className={`skill ${isActive ? 'active' : ''}`} onClick={() =>
            onClick(skill)}>
            {skill}
        </div>
    );
}

export default Skill;