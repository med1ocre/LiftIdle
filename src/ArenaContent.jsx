import React from 'react';
import { player, skill, gym } from './data.js';
import { toast } from 'react-toastify';

const ArenaContent = () => {
  const { equipment } = player;

  const renderEquipmentImage = (slotName) => {
    const item = equipment[slotName];
    const imageSource = item && item.image;

    return (
      <div className={`combat-equip-img border-rounded-equip border-combat-outline p-1 pointerenabled`}>
        <div className="equipment-image-container d-flex justify-content-center align-items-center">
          {item && <img className="equipment-image" src={imageSource} alt={slotName} />}
        </div>
      </div>
    );
  };

  return (
    <div id="arenacontent">
      <div className="justify-content-center">
        <div className="card bg-dark text-light text-center prevent-select" style={{ width: '18rem' }}>
          <div className="card-body" id="gymOneCard">
            <h5 className="card-title">Player</h5>
            <p className="card-text">Level 0</p>

            <div className="equipment-container">
              <div className="row ">
                <div className="col-4 offset-4 head-equipment equipment-slot">
                  {renderEquipmentImage('head')}
                </div>
                <div className="col-4 offset-4 neck-equipment equipment-slot">
                  {renderEquipmentImage('neck')}
                </div>
                <div className="col-4 ammo-equipment equipment-slot">
                  {renderEquipmentImage('ammo')}
                </div>
                <div className="col-4 primary-equipment equipment-slot">
                  {renderEquipmentImage('primary')}
                </div>
                <div className="col-4 chest-equipment equipment-slot">
                  {renderEquipmentImage('chest')}
                </div>
                <div className="col-4 secondary-equipment equipment-slot">
                  {renderEquipmentImage('secondary')}
                </div>
                <div className="col-4 nv">
                  <p>.</p>
                </div>
                <div className="col-4 legs-equipment equipment-slot">
                  {renderEquipmentImage('legs')}
                </div>
                <div className="col-4 nv">
                  <p>.</p>
                </div>
                <div className="col-4 hands-equipment equipment-slot">
                  {renderEquipmentImage('hands')}
                </div>
                <div className="col-4 feet-equipment equipment-slot">
                  {renderEquipmentImage('feet')}
                </div>
                <div className="col-4 ring-equipment equipment-slot">
                  {renderEquipmentImage('ring')}
                </div>
              </div>
            </div>

            <p className="card-text">
              <span className="lightredtext">{player.strength}</span> |{' '}
              <span className="lightbluetext">{player.intelligence}</span> |{' '}
              <span className="lightgreentext">{player.agility}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArenaContent;