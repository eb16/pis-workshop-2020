import { TodoItemSerializer } from "./todo-item-serializer";

class TodoItemsSerializer {
  static deSerialize(todoItems) {
    return todoItems.map(TodoItemSerializer.deSerialize);
  }

  static serialize(example) {
    return {
      foo: example.foo,
      bar: example.bar,
    };
  }
}

export { TodoItemsSerializer };
