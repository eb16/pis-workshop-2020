import React, { useState } from "react";

import styles from "./new-item.module.scss";
import { logger } from "../../helpers/logger";
import { TodoItemController } from "../../networking/controllers/todo-item-controller";

const NewItem = ({ pushNewItem }) => {
  const [itemName, setItemName] = useState("");
  const addNewItem = async () => {
    try {
      const newItem = await TodoItemController.createNewItem({
        title: itemName,
        completed: false,
      });
      pushNewItem(newItem);
      setItemName("");
    } catch (error) {
      logger.error("Error adding the new item");
    }
  };

  return (
    <div className={styles.newItem}>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button onClick={addNewItem}>Add new item</button>
    </div>
  );
};

export { NewItem };
