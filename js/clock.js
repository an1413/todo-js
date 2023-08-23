const dayTime = document.querySelector("#day-time");
const day = dayTime.querySelector("#day");
const time = dayTime.querySelector("#time");
const date = new Date();

const week = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
]

console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(String(date.getHours()).padStart(2,"0"));
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(`${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getSeconds()).padStart(2,"0")}`);

day.innerText = `${date.getFullYear()} ${date.getMonth()} ${date.getDate()} ${week[date.getDay()]}`
time.innerText = `${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getSeconds()).padStart(2,"0")}`


