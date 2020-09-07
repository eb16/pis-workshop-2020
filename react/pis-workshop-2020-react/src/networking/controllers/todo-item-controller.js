import { TodoItemsSerializer } from "../serializers/todo-items-serializer";
import { ApiService } from "../api-service";
import { API_ROUTES } from "../api-routes";
import { TodoItem } from "../../models/todo-item";
import { TodoItemSerializer } from "../serializers/todo-item-serializer";

/*
  NOTE: this file serves only as an example and is not used.
  You can remove it altogether or repurpose it by changing its name.
  Learn more about our networking architecture on:
  https://blog.xmartlabs.com/2020/07/09/frontend-architecture-and-best-practices/
*/
class TodoItemController {
  static async getTodoItems() {
    const response = await ApiService.get(API_ROUTES.ALL_TODO_ITEMS);
    const deSerializedTodoItems = TodoItemsSerializer.deSerialize(
      response.data
    );
    return deSerializedTodoItems.map((todoItem) => new TodoItem(todoItem));
  }

  static async createNewItem(item) {
    const serializedNewItem = TodoItemSerializer.serialize(item);
    const response = await ApiService.post(
      API_ROUTES.CREATE_ITEM,
      serializedNewItem
    );
    const deSerializedTodoItem = TodoItemSerializer.deSerialize(response.data);
    return new TodoItem(deSerializedTodoItem);
  }
}

export { TodoItemController };
