import React from 'react';
import { Item } from './Item.js';
import { player } from './data.js';

const InventoryContent = () => {
  const playerInventory = player.inventory;

  return (
    <div>
      <h2>Inventory</h2>
      <div className="inventory-container">
        {playerInventory.map((itemName) => {
          const item = Item[itemName];
          console.log(item.id);
          return;
          return (
            <div key={item.id} className="item-slot">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              {/* Display other properties or additional item information */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InventoryContent;
