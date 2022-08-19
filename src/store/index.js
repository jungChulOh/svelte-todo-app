import { writable, get } from "svelte/store";

export const todos = writable([]);

// get(todos) 는 $todos 문법과 동일
export function saveStorage() {
  localStorage.setItem("todos", JSON.stringify(get(todos)));
}
