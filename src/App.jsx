import React, { useState } from 'react';
import data from './data/data';
import Skill from './components/Skill';
import Competence from './components/Competence';
import DoughnutChart from './components/Chart';

const App = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedCompetence, setSelectedCompetence] = useState(null);
  const [activeSkills, setActiveSkills] = useState([]);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const handleCompetenceClick = (competence) => {
    setSelectedCompetence(competence);
  };
  const handleToggleSkill = (skill) => {
    setActiveSkills(prev => {
      if (prev.includes(skill)) {
        return prev.filter(item => item !== skill);
      } else {
        return [...prev, skill];
      }
    });
  };

  return (
    <div className="app">
      <DoughnutChart data={data} />
      <div className="skills">
        {data.map(entry => (
          <Skill
            key={entry.name}
            skill={entry.name}
            activeSkills={activeSkills}
            onClick={() => handleSkillClick(entry.name)}
          />
        ))}
      </div>

      <div className="competences">
        {selectedSkill && data.find(entry => entry.name ===
          selectedSkill).mainSkills.map((skill) => (
            <Competence
              key={skill}
              competence={skill}
              skill={selectedCompetence}
              onClick={() => handleCompetenceClick(skill)}
            />
          ))}
        {selectedSkill && data.find(entry => entry.name ===
          selectedSkill).otherSkills.map((skill) => (
            <Competence
              key={skill}
              competence={skill}
              skill={selectedCompetence}
              onClick={() => handleCompetenceClick(skill)}
            />
          ))}
      </div>
    </div>
  );
}

export default App;