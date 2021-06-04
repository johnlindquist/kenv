// API: https://github.com/typicode/lowdb
let todosDb = await db("todos", { todos: [] })
export let todos = todosDb.data.todos

export let todoById = id =>
  todos.find(todo => todo.id === id)

export let addTodo = async name => {
  todos.push({ name, done: false, id: uuid() })
  await todosDb.write()
}

export let toggleTodo = async id => {
  let todo = todoById(id)
  todo.done = !todo.done
  await todosDb.write()
}

export let removeTodo = async id => {
  todos.splice(todos.indexOf(todoById(id)), 1)
  await todosDb.write()
}
