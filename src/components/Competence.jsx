import React from 'react';
import './index.css';

const Competence = ({ competence, onClick }) => {
    return (
        <div className="competence" onClick={onClick}>
            <div className="circle"></div>
            <div className="competenceName">{competence}</div>
        </div>
    );
}

export default Competence;