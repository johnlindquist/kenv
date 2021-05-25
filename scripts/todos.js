// Menu: Todos "App"
// Description: Example of create/read/update/delete
// Shortcut: cmd shift .
// Author: John Lindquist
// Twitter: @johnlindquist

let { todos, todoById, addTodo, removeTodo, toggleTodo } =
  await lib("todos")

let todosChoices = () =>
  todos.map(({ name, done, id }) => ({
    name: `${done ? "✅" : "❗️"} ${name}`,
    value: id,
  }))

let add = async () => {
  let idOrName = await arg(
    "Enter todo name:",
    todosChoices()
  )
  if (todoById(idOrName)) {
    await toggleTodo(idOrName)
  } else {
    await addTodo(idOrName)
  }
  await add()
}

let remove = async () => {
  let id = await arg("Remove todo:", todosChoices())
  await removeTodo(id)
  await remove()
}

onTab("Add", add)
onTab("Remove", remove)
