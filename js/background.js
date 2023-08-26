const bgImage = document.querySelector("#wrapper");

const imageWebUrls = [
  "https://ifh.cc/g/ckZK0p.jpg",
  "https://ifh.cc/g/Sozaqb.jpg",
  "https://ifh.cc/g/zg8LV5.jpg",
  "https://ifh.cc/g/pLnca1.jpg",
  "https://ifh.cc/g/7YsMny.jpg",
  "https://ifh.cc/g/AW69fm.jpg",
  "https://ifh.cc/g/nryM5J.jpg",
  "https://ifh.cc/g/13qbY8.jpg",
  "https://ifh.cc/g/4yOdPJ.jpg",
  "https://ifh.cc/g/bA8QxH.jpg",
  "https://ifh.cc/g/R6OJAW.jpg",
]

const imageUrls = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
]

const random = Math.floor(Math.random() * imageUrls.length);

function getRandomImage() {
  return imageWebUrls[random];
}

const paintImage = () => {
  const imgURL = getRandomImage();
  console.log(imgURL);
  bgImage.style.backgroundImage = `url(${imgURL})`;
  console.log(bgImage.style.backgroundImage);
  console.log(bgImage);
}
paintImage(random);