const apiKey = "9d2d88c5f352c465f0bcf08ed3fa555c";

async function getWeather() {

    const city = document.getElementById("city").value;
    const weatherDiv = document.getElementById("weather");

    if(city === ""){
        weatherDiv.innerHTML = "Please enter a city name";
        return;
    }

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        weatherDiv.innerHTML = "Loading...";

        const response = await fetch(url);

        if(!response.ok){
            throw new Error("City not found");
        }

        const data = await response.json();

        weatherDiv.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p><b>Temperature:</b> ${data.main.temp} °C</p>
            <p><b>Humidity:</b> ${data.main.humidity}%</p>
            <p><b>Wind Speed:</b> ${data.wind.speed} m/s</p>
            <p><b>Weather Condition:</b> ${data.weather[0].main}</p>
            <p><b>Description:</b> ${data.weather[0].description}</p>
        `;

    } catch(error){

        weatherDiv.innerHTML =
        `<p style="color:red">${error.message}</p>`;
    }}
