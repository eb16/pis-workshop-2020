import React, { useState } from "react";

import styles from "./todo-item.module.scss";

const TodoItem = ({ id, title }) => {
  const [checked, setChecked] = useState(false);
  const toggle = () => setChecked((prevState) => !prevState);

  return (
    <div className={styles.todoItem}>
      <input type="checkbox" id={id} checked={checked} onChange={toggle} />
      <label htmlFor={id}>{title}</label>
    </div>
  );
};

export { TodoItem };
