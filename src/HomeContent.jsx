import React from 'react';
import { updateSkillUI, checkForLevelUp, repPushup } from './script.js';
import { toast } from 'react-toastify';

const HomeContent = () => {

  return (
    <div id="homecontent">
      <div className="justify-content-center">
        <div className="card bg-dark text-light text-center prevent-select" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Pushups</h5>
            <p className="card-text">Current Level: <span id="pushupLevel">0</span></p>
            <p className="card-text">XP: <span id="pushupCurrentXP">0</span> / <span id="pushupRequiredXP">50</span></p>
            <div className="progress mb-3">
              <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
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
