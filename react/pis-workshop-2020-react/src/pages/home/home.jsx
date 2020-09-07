import React, { useEffect, useState } from "react";

import styles from "./home.module.scss";
import { TodoItem } from "../../common/todo-item";
import { TodoItemController } from "../../networking/controllers/todo-item-controller";
import { logger } from "../../helpers/logger";
import { NewItem } from "../../common/new-item";

const Home = () => {
  const [todoItems, setTodoItems] = useState([]);
  useEffect(() => {
    const fetchTodoItems = async () => {
      try {
        const todoItems = await TodoItemController.getTodoItems();
        setTodoItems(todoItems);
      } catch (error) {
        logger.error("Error fetching todo items");
      }
    };
    fetchTodoItems();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo list for Tuesday morning</h1>
      <div className={styles.todoCard}>
        {todoItems.map((todoItem) => (
          <TodoItem id={todoItem.id} title={todoItem.title} key={todoItem.id} />
        ))}
        <NewItem />
      </div>
    </div>
  );
};

export { Home };
