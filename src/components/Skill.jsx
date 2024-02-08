import React from "react";
import './index.css';

export const Skill = ({ skill, isMainSkill, selected, onClick }) => {
    return (
        <div className={`skill ${isMainSkill ? 'main-skill'
            : 'other-skill'} ${selected ? 'selected' : ''}`}
            style={{
                fontWeight: selected ? "bold" : "normal",
                color: isMainSkill ? "orange" : "purple"
            }}
            onClick={onClick}
        >
            {skill}
        </div>
    );
};