const weather = document.querySelector("#weather");
const city_name = weather.querySelector("span:first-child");
const city_temp = weather.querySelector("span:last-child");

// 위치 정보 가져오기
function showYourLocation(pos) {
  let lat = pos.coords.latitude;
  let lng = pos.coords.longitude;

  const API_KEY = "1375ef314dd06de75105631b8f366f91";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      city_name.innerText = data.name;
      city_temp.innerText = data.main.temp;
    })
    .catch(error => {
      console.error("날씨 데이터를 가져오는 중 오류 발생:", error);
    });
}

function showErrorMsg() {
  console.log("오류 발생");
}

// 위치 정보 가져오기 시도
navigator.geolocation.getCurrentPosition(showYourLocation, showErrorMsg);







