const quote = document.querySelector("#quote");
const text = quote.querySelector("span:first-child");
const author = quote.querySelector("span:last-child");

// const quotes = [
//   {
//     quote: "태초에 하나님이 천지를 창조하시니라",
//     author: "창1:1"
//   },
//   {
//     quote: "진리를 알지니 진리가 너희를 자유롭게 하리라",
//     author: "요8:31"
//   },
//   {
//     quote: "내가 문이니 누구든지 나로 말미암아 들어가면 구원을 받고 또는 들어가며 나오며 꼴을 얻으리라",
//     author: "요10:0"
//   },
//   {
//     quote: "예수께서 이르시되 나는 부활이요 생명이니 나를 믿는 자는 죽어도 살겠고",
//     author: "요11:25"
//   },
//   {
//     quote: "영생은 곧 유일하신 참 하나님과 그가 보내신 자 예수 그리스도를 아는 것이니이다",
//     author: "요17:3"
//   },
//   {
//     quote: "주도 한 분이시요 믿음도 하나요 세례도 하나요",
//     author: "엡4:3"
//   },
//   {
//     quote: "너희 안에 이 마음을 품으라 곧 그리스도 예수의 마음이니",
//     author: "빌2:5"
//   },
//   {
//     quote: "주 안에서 항상 기뻐하라 내가 다시 말하노니 기뻐하라",
//     author: "빌4:4"
//   }
// ]

const quotes = [
  {
    quote: "삶이 있는 한 희망은 있다",
    author: "키케로"
  },
  {
    quote: "산다는것 그것은 치열한 전투이다",
    author: "로망로랑"
  },
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다",
    author: "사무엘존슨"
  },
  {
    quote: "언제나 현재에 집중할수 있다면 행복할것이다",
    author: "파울로 코엘료"
  },
  {
    quote: "피할수 없으면 즐겨라",
    author: "로버트 엘리엇"
  },
  {
    quote: "계단을 밟아야 계단 위에 올라설수 있다",
    author: "터키속담"
  },
  {
    quote: "자신감 있는 표정을 지으면 자신감이 생긴다",
    author: "찰스다윈"
  },
  {
    quote: "그대의 하루 하루를 그대의 마지막 날이라고 생각하라",
    author: "호라티우스"
  }
]

const randomQuote = Math.floor(Math.random() * quotes.length);

text.innerText = quotes[randomQuote].quote;
author.innerText = quotes[randomQuote].author;
console.log(randomQuote);

