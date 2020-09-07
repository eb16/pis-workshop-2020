import { ExampleSerializer } from "../serializers/example-serializer";
import { TodoItemsSerializer } from "../serializers/todo-items-serializer";
import { ApiService } from "../api-service";
import { API_ROUTES } from "../api-routes";
import { TodoItem } from "../../models/todo-item";

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

  static createExample(example) {
    const serializedExample = ExampleSerializer.serialize(example);
    return ApiService.post(API_ROUTES.EXAMPLE, {
      example: serializedExample,
    });
  }
}

export { TodoItemController };
