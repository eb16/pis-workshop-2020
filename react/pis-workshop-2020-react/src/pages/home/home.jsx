import React from "react";

import styles from "./home.module.scss";
import { TodoItem } from "../../common/todo-item";

const Home = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Todo list for Tuesday morning</h1>
    <div className={styles.todoCard}>
      <TodoItem id="apples" title="Buy x6 Apples" />
      <TodoItem id="pears" title="Buy x8 Pears" />
    </div>
  </div>
);

export { Home };
