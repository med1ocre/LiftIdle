import React, { useState } from 'react';
import { Item } from './Item.js';
import { player } from './data.js';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';
import { renderToString } from 'react-dom/server';

export let tabs = [
  { id: 0, name: 'Tab 0', items: [] },
  { id: 1, name: 'Tab 1', items: [] },
  { id: 2, name: 'Tab 2', items: [] },
  { id: 3, name: 'Tab 3', items: [] },
  { id: 4, name: 'Tab 4', items: [] },
  { id: 5, name: 'Tab 5', items: [] },
];

export let setTabs;

const InventoryContent = () => {
  const playerInventory1 = player.inventory;
  const [activeTab, setActiveTab] = useState(0);
  [tabs, setTabs] = useState(tabs);
 
  const [editTabId, setEditTabId] = useState(-1);

  const switchTab = (index) => {
    setActiveTab(index);
  };

  const handleTabDoubleClick = (tabId) => {
    setEditTabId(tabId);
  };

  const handleTabNameChange = (e, tabId) => {
    const updatedTabs = tabs.map((tab) => {
      if (tab.id === tabId) {
        return { ...tab, name: e.target.value };
      }
      return tab;
    });

    setTabs(updatedTabs);
  };

  const filteredInventory = playerInventory1.filter((item) => {
    const inActiveTab = tabs.find((tab) => tab.id === activeTab);
    if (activeTab === 0 || (inActiveTab && inActiveTab.items.find((tabItem) => tabItem.id === item.id))) {
      return true;
    }
    return false;
  });

  return (
    <div>
      <div className="hcenter whitetext">
        <div className="inventory-wrapper">
          <div className="inventory-container">
            <div className="inventory-items">
              <div className="tabs-wrapper">
                <div className="tabs-container">
                  {tabs.map((tab, index) => (
                    <div
                      key={tab.id}
                      className={`tab ${activeTab === index ? 'active' : ''}`}
                      onDoubleClick={() => handleTabDoubleClick(tab.id)}
                      onClick={() => switchTab(index)}
                    >
                      {editTabId === tab.id ? (
                        <input
                          type="text"
                          value={tab.name}
                          onChange={(e) => handleTabNameChange(e, tab.id)}
                          onBlur={() => setEditTabId(-1)}
                          autoFocus
                        />
                      ) : (
                        tab.name
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {filteredInventory.map((item) => (
                <div className="inventory-tile pointerenabled" key={item.id}>
                  <Tooltip
                    title={renderToString(
                      <div className="item-tooltip">
                        <div className="item-left">
                          <img src={item.image} alt={item.name} className="item-image" style={{ width: '70px', height: '70px' }} />
                        </div>
                        <div className="item-right">
                          <div className="item-details">
                            <div className="item-name">{item.name}</div>
                            <div className="item-price">
                              <img src="./media/coin.png" style={{ width: '30px', height: '30px' }}></img>
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
                    <img src={item.image} alt={item.name} style={{ width: '40px', height: '40px' }} />
                  </Tooltip>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryContent;
