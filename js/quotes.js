const quote = document.querySelector("#quote");
const text = quote.querySelector("span:first-child");
const author = quote.querySelector("span:last-child");

const quotes = [
  {
    quote: "태초에 하나님이 천지를 창조하시니라",
    author: "창1:1"
  },
  {
    quote: "진리를 알지니 진리가 너희를 자유롭게 하리라",
    author: "요8:31"
  },
  {
    quote: "내가 문이니 누구든지 나로 말미암아 들어가면 구원을 받고 또는 들어가며 나오며 꼴을 얻으리라",
    author: "요10:0"
  },
  {
    quote: "예수께서 이르시되 나는 부활이요 생명이니 나를 믿는 자는 죽어도 살겠고",
    author: "요11:25"
  },
  {
    quote: "영생은 곧 유일하신 참 하나님과 그가 보내신 자 예수 그리스도를 아는 것이니이다",
    author: "요17:3"
  },
  {
    quote: "주도 한 분이시요 믿음도 하나요 세례도 하나요",
    author: "엡4:3"
  },
  {
    quote: "너희 안에 이 마음을 품으라 곧 그리스도 예수의 마음이니",
    author: "빌2:5"
  },
  {
    quote: "주 안에서 항상 기뻐하라 내가 다시 말하노니 기뻐하라",
    author: "빌4:4"
  }
]

const randomQuote = Math.floor(Math.random() * quotes.length);

text.innerText = quotes[randomQuote].quote;
author.innerText = quotes[randomQuote].author;
console.log(randomQuote);

