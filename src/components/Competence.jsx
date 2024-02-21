import React from 'react';
import './index.css';

const Competence = ({ competence, skill, onClick }) => {
    const isActive = skill === competence;

    return (
        <div className={`competence`} onClick={onClick}>
            <div className={`circle ${isActive ? 'activeCircle' : ''}`}></div>
            <div className={`competenceName`}>{competence}</div>
        </div>

        // <div className="competence" onClick={onClick}>
        //     <div className="circle"></div>
        //     <div className="competenceName">{competence}</div>
        // </div>

    );
}

export default Competence;