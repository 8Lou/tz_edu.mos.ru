import React from "react";
import { Skill } from "./Skill";

export const Competency = ({ competency, selectedSkill, onSkillClick }) => {
    return (
        <div>
            <h3>{competency.name}</h3>
            {competency.mainSkills.map((skill, index) => (
                <Skill
                    key={index}
                    skill={skill}
                    isMainSkill={true}
                    selected={selectedSkill === skill}
                    onClick={() => onSkillClick(skill)}
                />
            ))}
            {competency.otherSkills.map((skill, index) => (
                <Skill
                    key={index}
                    skill={skill}
                    isMainSkill={false}
                    selected={selectedSkill === skill}
                    onClick={() => onSkillClick(skill)}
                />
            ))}
        </div>
    );
};

