const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoBtn = document.querySelector("#todo-btn");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

let savedList = [];

console.log(todoInput.value);

function savedTodoList() {
  return localStorage.setItem(TODOS_KEY, JSON.stringify(savedList));
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  console.log(savedList);
  console.log(li);
  savedList = savedList.filter((toDo) => {return toDo.id !== parseInt(li.id)});
  console.log(savedList);
  savedTodoList();


  li.remove();
}

function createTodoList(todo) {
  const li = document.createElement("li");
  const text = document.createElement("span");
  text.innerText = todo.text;
  li.id = todo.id;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", deleteToDo)
  li.appendChild(text);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}

function handleTodoInput(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text:newTodo,
    id: Date.now(),
  }
  savedList.push(newTodoObj);
  createTodoList(newTodoObj);
  savedTodoList();
}

todoForm.addEventListener("submit", handleTodoInput);

const list = localStorage.getItem(TODOS_KEY);

if(localStorage.getItem(TODOS_KEY)){
  const arrayTodo = JSON.parse(list);
  savedList = arrayTodo;
  savedList.forEach(e => {
    return createTodoList(e);
  })
  // console.log(JSON.stringify(list));
  console.log("data ok");
}
else {
  console.log("data no");
}