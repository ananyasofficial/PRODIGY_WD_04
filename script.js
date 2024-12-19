function getWeather() {
    const apiKey = "89cc068b18f6918ce4b681b757374809"; 
    const city = document.getElementById("cityInput").value;
    const weatherInfoDiv = document.getElementById("weatherInfo");

    console.log("API Key:", apiKey);
    console.log("City:", city);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log("API Response:", data);
            if (data.cod === "404") {
                weatherInfoDiv.innerHTML = `<p>Error: City not found</p>`;
            } else {
                const weatherInfo = `
                    <h2>Weather information for ${data.name}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Description: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
                weatherInfoDiv.innerHTML = weatherInfo;
            }
        })
        .catch(error => {
            console.log("Fetch Error:", error);
            weatherInfoDiv.innerHTML = `<p>Error: Connection error</p>`;
        });
}

