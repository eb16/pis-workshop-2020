/*
  NOTE: this file serves only as an example and is not used.
  You can remove it altogether or repurpose it by changing its name.
  Learn more about our networking architecture on:
  https://blog.xmartlabs.com/2020/07/09/frontend-architecture-and-best-practices/
*/
class TodoItem {
  constructor(params) {
    this.id = params.id;
    this.title = params.title;
    this.completed = params.completed;
  }
}

export { TodoItem };
