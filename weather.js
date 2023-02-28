const API_KEY = "37daf8eda521c6bb613a5181229f763b";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response =>response.json())
    .then(date => {
       const weather = document.querySelector("#weather span:first-child");
       const city = document.querySelector("#weather span:last-child");
       const name = date.name;
       city.innerText = date.name;
       weather.innerText = `${date.weather[0].main} / ${date.main.temp}`;
    });
 }
 function onGeoError(){ alert("can't find")}
 
 navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
