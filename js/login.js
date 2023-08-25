const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const loginBtn = document.querySelector("#login-btn");
const welcome = document.querySelector("#welcome");
const yourName = document.querySelector("#welcome span");
// const day = document.querySelector("#day");
const todoContainer = document.querySelector(".todo-container");

function handleInputVaule(e) {
  e.preventDefault();
  console.log(loginInput.value);
  const yourname = loginInput.value;
  loginInput.value = "";
  localStorage.setItem("myAccount", yourname);
  loginCheck("myAccount")
}

function loginCheck(myAccount) {
  if(localStorage.getItem(myAccount)) {
  loginForm.classList.add("disabled")
  welcome.classList.remove("disabled")
  dayTime.classList.remove("disabled")
  todoContainer.classList.remove("disabled")


  const yourname = loginInput.value;
  // 유저정보가 있다면
  console.log("ok");
  yourName.innerText = localStorage.getItem("myAccount", yourname);
} else {
  // 유저정보가 없다면
  loginForm.classList.remove("disabled")
  console.log("no");
}
}

loginCheck("myAccount")
loginForm.addEventListener("submit", handleInputVaule);
