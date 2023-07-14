import React from 'react';
import { updateSkillUI, checkForLevelUp, repPushup, purchaseGym } from './script.js';
import { player, skill, gym } from './data.js';
import { toast } from 'react-toastify';

const BusinessContent = () => {

  return (
    <div id="businesscontent">
      <div className="justify-content-center">
        <div className="card cardhover bg-dark text-light text-center prevent-select" style={{ width: '18rem' }}>
          <div className="card-body" id="gymOneCard">
            <h5 className="card-title">Gym #1</h5>
              
            <p className="card-text"><span id="canAffordGym" className={gym.one.bought ? 'gymBought' : player.cash >= gym.one.price ? 'canAfford' : 'cantAfford'}> {gym.one.bought ? 'Purchased' : player.cash >= gym.one.price ? 'Affordable' : "Can't Afford"}</span></p>

            <p className="card-text">Price: $<span id="gymOnePrice">{gym.one.price}</span></p>
            <p className="card-text">Income: ${gym.one.income}/s<br></br>{gym.one.strMulti * 100}% Multi to Strength Training</p>
            {gym.one.bought ? null : (
              <>
                <hr />
                <a href="#" id="purchaseGymOneBtn" className="btn btn-primary" onClick={() => purchaseGym(1)}>Purchase</a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>

  );
};

export default BusinessContent;
