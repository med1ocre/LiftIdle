import React from 'react';
import { updateSkillUI, checkForLevelUp, repPushup } from './script.js';
import { toast } from 'react-toastify';
import { skill } from './data.js';

const HomeContent = () => {

  return (
    <div id="homecontent">
      <div className="justify-content-center">
        <div className="card cardhover bg-dark text-light text-center prevent-select" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Pushups</h5>
            <p className="card-text">Current Level: <span id="pushupLevel">{skill.pushUp.level}</span><br></br>Max Reps: <span id="pushUpCurrentRep">{skill.pushUp.currentRep}</span> / {skill.pushUp.maxRep}<br></br>Rep Speed: <span id="pushUpRepSpeed">{skill.pushUp.repSpeed}s</span></p>
            <p className="card-text">XP: <span id="pushupCurrentXP">{skill.pushUp.currentXP}</span> / <span id="pushupRequiredXP">{skill.pushUp.requiredXP}</span></p>
            <div className="progress mb-3">
              <div className="progress-bar pushUpProgress" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p className="card-text">A perfect starting point for building strength</p>
            <hr id="gymOneHr" />
            <a href="#" className="btn btn-primary" onClick={() => repPushup()} >Begin</a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default HomeContent;
