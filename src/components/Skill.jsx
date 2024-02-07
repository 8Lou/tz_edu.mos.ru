import React from "react";
import './index.css';

export const Skill = ({ skill, isMainSkill, selected, onClick }) => {
    return (
        <div className="Skill"
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