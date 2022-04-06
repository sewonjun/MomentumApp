const API_KEY = "40deb34eae469e8a004f2bf4ed27d1ef"

function GeoOk (position){
    const lat= position.coords.latitude;
    const lng= position.coords.longitude;
    console.log("Your location is", lat, lng);
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(URL)
        .then(response => response.json())
        .then((data) => {
            const weatherContainer = document.getElementById("weather")
            const name = data.name;
            const weather = data.weather[0].main;
        });
}


function onGeoError(){
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(GeoOk, onGeoError);

