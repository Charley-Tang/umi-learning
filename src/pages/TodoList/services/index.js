export function fetchTodoList(params) {
  return fetch("/api/todolist", {
    method: "GET"
  }).then(response => response.json());
}
