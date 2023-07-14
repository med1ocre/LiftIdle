import React from 'react';
import { updateSkillUI, checkForLevelUp, repPushup, purchaseGym } from './script.js';
import { player, skill, gym } from './data.js';
import { toast } from 'react-toastify';

const ArenaContent = () => {

  return (
    <div id="businesscontent">
      <div className="justify-content-center">
        <div className="card bg-dark text-light text-center prevent-select" style={{ width: '18rem' }}>
          <div className="card-body" id="gymOneCard">
            <h5 className="card-title">Player</h5>
              
            <p className="card-text">Level 0</p>

            <p className="card-text"><span className="lightredtext">{player.strength}</span> | <span className="lightbluetext">{player.intelligence}</span> | <span className="lightgreentext">{player.agility}</span></p>


          </div>
        </div>
      </div>
    </div>

  );
};

export default ArenaContent;
