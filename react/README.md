## PIS Workshop :: React

### Setting up

We're going to use the CRA template made by XmartLabs:

1. `git clone git@github.com:xmartlabs/cra-template-xmartlabs.git`
2. `npx create-react-app pis-workshop-2020-react --template file:cra-template-xmartlabs --use-npm`
3. `cd pis-workshop-2020-react && npm start`

### Creating our own Todo List

1. Create a todo item and add some styles.
2. Create a TodoItem component by moving the previous logic to a new file.
3. Make its state toggle when tapping it.

### Connecting to the real world

Now, we are going to do some magic, and connect our React app with a generic backend found on the Internet:

https://github.com/dtao/todo-backend-express/blob/master/server.js

Just duplicate the environment variables file `.env.development.local.example` to `.env.development.local`, and replace `REACT_APP_API_BASE_URL=http://todo-backend-express.herokuapp.com`.

Whoala! We're connected to a backend.
Did you see how simple it was? Ok, but let's fetch some data to make it real.

Go into `src/networking/api-routes.js` and add `ALL_TODO_ITEMS: "/"` to the `API_ROUTES` object. It's important to do this, so you avoid developers to run into bugs provoked for a simple typo.

These todo items needs to be deserialized so they can fit into the front-end model. So let's adds a deserializer following the example file.

```
  static deSerialize(todoItem) {
    return {
      id: todoItem.url,
      title: todoItem.title,
      completed: todoItem.completed,
    };
  }
```

Create a `TodoController` with a `GET` method, where we are going to fetch all the todo items and deserialize them with a `map` using the `TodoItemsSerializer`:

```
  static async getTodoItems() {
    const response = await ApiService.get(API_ROUTES.ALL_TODO_ITEMS);
    const deSerializedTodoItems = TodoItemsSerializer.deSerialize(
      response.data
    );
    return deSerializedTodoItems.map((todoItem) => new TodoItem(todoItem));
  }
```

Now we can call this brand-new method from our Home page when it mounts:

```
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
```

This `todoItems` will be saved in a local state, and will be iterated to generate the Todo Items list.

And that's it! You are showing a ton of items from an external backend, that you don't know why you want to DO them.

Try to do a post now! This way you can add **YOUR OWN** items. If you can't manage to do it, follow the commits in the repo or don't hesitate to ask me.

**GOOD LUCK!** 🍀💪🏼
