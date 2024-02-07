import React from "react";

export const Skill = ({ skill, isMainSkill, selected, onClick }) => {
    return (
        <div
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