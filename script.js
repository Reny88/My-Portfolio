//Project title color

// document.addEventListener("DOMContentLoaded", () => {
//     const originalColor = 'rgb(26, 133, 134)'; // Színt stringként adtam meg
//     const pageTitle = document.getElementById("Projects");

//     window.onload = function() {
//         if (pageTitle) {
//             pageTitle.style.color = originalColor;
//         }
//     };

//     window.onbeforeunload = function() {
//         setTimeout(function() {
//             if (pageTitle) {
//                 pageTitle.style.color = originalColor;
//             }
//         }, 100);
//     };

//     const apiKey = 'a1670d86713b44537de2db0b496fcb07';

//     function fetchWeather(city, elementId) {
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.main) {
//                     const temperature = data.main.temp;
//                     const description = data.weather[0].description;
//                     document.getElementById(elementId).innerHTML = `${city}: ${temperature}°C, ${description}`;
//                 } else {
//                     document.getElementById(elementId).innerHTML = `Could not fetch weather data for ${city}`;
//                 }
//             })
//             .catch(error => console.log(error));
//     }

//     function updateTime(elementId, timezone) {
//         const now = new Date(new Date().toLocaleString("en-US", { timeZone: timezone }));
//         const hours = now.getHours().toString().padStart(2, '0');
//         const minutes = now.getMinutes().toString().padStart(2, '0');
//         const seconds = now.getSeconds().toString().padStart(2, '0');
//         document.getElementById(elementId).innerHTML = `${hours}:${minutes}:${seconds}`;
//     }

//     fetchWeather('Bucharest', 'romania-weather');
//     fetchWeather('New York', 'usa-weather');
//     fetchWeather('London', 'uk-weather');

//     setInterval(() => updateTime('romania-time', 'Europe/Bucharest'), 1000);
//     setInterval(() => updateTime('usa-time', 'America/New_York'), 1000);
//     setInterval(() => updateTime('uk-time', 'Europe/London'), 1000);
// });

document.addEventListener("DOMContentLoaded", () => {
    const apiKey = 'a1670d86713b44537de2db0b496fcb07';

    function fetchWeather(city, elementId) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.main) {
                    const temperature = data.main.temp;
                    const description = data.weather[0].description;
                    const icon = data.weather[0].icon;
                    document.getElementById(elementId).innerHTML = `${city}: ${temperature}°C, ${description} <img src="http://openweathermap.org/img/wn/${icon}.png" alt="${description}">`;
                } else {
                    document.getElementById(elementId).innerHTML = `Could not fetch weather data for ${city}`;
                }
            })
            .catch(error => console.log(error));
    }

    function updateTime(elementId, timezone, city) {
        const now = new Date(new Date().toLocaleString("en-US", { timeZone: timezone }));
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        document.getElementById(elementId).innerHTML = `${city} Time: ${hours}:${minutes}:${seconds}`;
    }

    fetchWeather('Bucharest', 'romania-weather');
    fetchWeather('New York', 'usa-weather');
    fetchWeather('London', 'uk-weather');

    setInterval(() => updateTime('romania-time', 'Europe/Bucharest', 'Bucharest'), 1000);
    setInterval(() => updateTime('usa-time', 'America/New_York', 'New York'), 1000);
    setInterval(() => updateTime('uk-time', 'Europe/London', 'London'), 1000);
});