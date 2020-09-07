import React from 'react';

import styles from './home.module.scss';

const Home = () => (
  <div className={styles.container}>

    <h1 className={styles.title}>
      Todo list for Tuesday morning
    </h1>
    <div className={styles.todoCard}>
      <div className={styles.todoItem}>
        <input type="checkbox" name="apples" />
        <label htmlFor="apples">Buy x6 Apples</label>
      </div>
      <div className={styles.todoItem}>
        <input type="checkbox" name="pears" />
        <label htmlFor="pears">Buy x8 Pears</label>
      </div>
    </div>
  </div>
);

export { Home };
