import React from "react";
import { Skill } from "./Skill";
import './index.css';

const Competency = ({ competency, selectedSkill, onSkillClick }) => {
    return (
        <div className="competency">
            <div className="outer-circle">
                <h3 className="name">{competency.name}</h3>
            </div>
            <div className="inner-circle">
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
        </div>
    );
};

export default Competency;