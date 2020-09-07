import React, { useState } from "react";

import styles from "./new-item.module.scss";

const NewItem = () => {
  const [itemName, setItemName] = useState("");

  return (
    <div className={styles.newItem}>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button>Add new item</button>
    </div>
  );
};

export { NewItem };
