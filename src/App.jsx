import React, { useState } from 'react';
import data from './data/data';
import Skill from './components/Skill';
import Competence from './components/Competence';
import DoughnutChart from './components/Chart';

const App = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedCompetence, setSelectedCompetence] = useState(null);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const handleCompetenceClick = (competence) => {
    setSelectedCompetence(competence);
  };

  return (
    <div className="app">
      <DoughnutChart data={data} />
      <div className="skills">
        {data.map(entry => (
          <Skill
            key={entry.name}
            skill={entry.name}
            onClick={() => handleSkillClick(entry.name)}
          />
        ))}
      </div>

      <div className="competences">
        {selectedSkill && data.find(entry => entry.name === selectedSkill).mainSkills.map((skill, index) => (
          <Competence
            key={index}
            competence={skill}
            onClick={() => handleCompetenceClick(skill)}
          />
        ))}
        {selectedSkill && data.find(entry => entry.name === selectedSkill).otherSkills.map((skill, index) => (
          <Competence
            key={index}
            competence={skill}
            onClick={() => handleCompetenceClick(skill)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;