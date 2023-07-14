import React, { useState } from 'react';
import { Item } from './Item.js';
import { player } from './data.js';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';
import { renderToString } from 'react-dom/server';

const InventoryContent = () => {
  const playerInventory = player.inventory;
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [sellQuantities, setSellQuantities] = useState({});

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  const handleSliderChange = (itemId, event) => {
    const updatedQuantities = { ...sellQuantities, [itemId]: Number(event.target.value) };
    setSellQuantities(updatedQuantities);
  };

  const calculateTotalSellPrice = (itemId, quantity) => {
    const item = playerInventory.find((item) => item.id === itemId);
    return item ? item.price * quantity : 0;
  };

  const selectedItem = playerInventory.find((item) => item.id === selectedItemId);

  const tooltipContent = (
    <div className="slider-tooltip">
      <span>Sell Quantity: {sellQuantities[selectedItemId] || 1}</span>
    </div>
  );

  return (
    <div>
      <div className="hcenter whitetext">
        <div className="inventory-wrapper">
          <div className="inventory-container">
            <div className="inventory-items">
              {playerInventory.map((item) => (
                <div
                  className={`inventory-tile pointerenabled ${selectedItemId === item.id ? 'selected' : ''}`}
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                >
                  <Tooltip
                    title={renderToString(
                      <div className="item-tooltip">
                        <div className="item-left">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="item-image"
                            style={{ width: '70px', height: '70px' }}
                          />
                        </div>
                        <div className="item-right">
                          <div className="item-details">
                            <div className="item-name">{item.name}</div>
                            <div className="item-price">
                              <img src="./media/coin.png" style={{ width: '30px', height: '30px' }} />
                              {item.price}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    position="bottom"
                    trigger="mouseenter"
                    arrow={true}
                  >
                    <div>
                      <img src={item.image} alt={item.name} style={{ width: '40px', height: '40px' }} />
                      <div className="item-amount">{item.amount}</div>
                    </div>
                  </Tooltip>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="item-container">
          {selectedItemId && (
            <div className="selected-item-wrapper">
              <img
                src={playerInventory.find((item) => item.id === selectedItemId)?.image}
                alt="Selected Item"
                className="selected-item-image"
                style={{ width: '140px', height: '140px' }}
              />
            </div>
          )}
          {selectedItemId && (
            <div className="selected-item-stats">
              <div className="selected-item-stats-top-half">
                <h4 className="selected-item-name">{selectedItem?.name}</h4>
                <p className="selected-item-view-stats">View Item Stats</p>
              </div>
              <div className="selected-item-stats-bottom-half">
                <div className="sell-slider-container">
                  <input
                    className="sell-slider"
                    type="range"
                    min="1"
                    max={selectedItem?.amount}
                    value={sellQuantities[selectedItemId] || 1}
                    onChange={(event) => handleSliderChange(selectedItemId, event)}
                  />
                  <div className="row no-gutters">
                    <div className="col-12 col-xl-3 selected-item-amount-container" style={{ width: '100%' }}>
                      <p>{sellQuantities[selectedItemId] || 1}</p>
                    </div>
                    <div className="col-12 text-right">
                      <button className="btn btn-primary sell-button">Sell</button>
                    </div>
                    <div className="col-12 text-right">
                      <span className="total-sell-price">
                        {calculateTotalSellPrice(selectedItemId, sellQuantities[selectedItemId] || 1)}
                      </span>
                      <img src="./media/coin.png" style={{ width: '25px', height: '25px', float: 'right' }} />
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InventoryContent;
