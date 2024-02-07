import React from 'react';
import './index.css';
import SkillGraph from './components/SkillGraph';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>График компетенций</h1>
      </header>
      <main>
        <SkillGraph />
      </main>
    </div>
  );
}

export default App;