import React from 'react';
import './index.css';

const Competence = ({ competence, onClick }) => {
    return (
        <div className="competence" onClick={onClick}>
            {competence}
        </div>
    );
}

export default Competence;