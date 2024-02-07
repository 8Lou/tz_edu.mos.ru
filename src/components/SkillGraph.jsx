import React, { useState } from "react";
import { Competency } from "./Competency";
import data from "../data";
import './index.css';

const SkillGraph = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
    };

    return (
        <div className="SkillGraph">
            {data.map((competency, index) => (
                <Competency
                    key={index}
                    competency={competency}
                    selectedSkill={selectedSkill}
                    onSkillClick={handleSkillClick}
                />
            ))}
        </div>
    );
};

export default SkillGraph;