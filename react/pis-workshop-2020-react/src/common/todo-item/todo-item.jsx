import React from "react";

import styles from "./todo-item.module.scss";

const TodoItem = ({ title, name }) => (
  <div className={styles.todoItem}>
    <input type="checkbox" name={name} />
    <label htmlFor={name}>{title}</label>
  </div>
);

export { TodoItem };
