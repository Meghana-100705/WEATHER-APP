async function getWeather() {

    // 1. Get city name from input
    const city = document.getElementById("city").value;

    // 2. Your API key
    const apiKey = "c3a2a6fcf5c227d446d6369266b6d895";

    // 3. Validation
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    // 4. API URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        // 5. Call API
        const response = await fetch(url);
        const data = await response.json();

        // 6. If city not found
        if (data.cod !== 200) {
            document.getElementById("result").innerHTML = "City not found ❌";
            return;
        }

        // 7. Display data
        document.getElementById("result").innerHTML = `
            <h3>Weather in ${data.name}</h3>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>☁ Condition: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        document.getElementById("result").innerHTML = "Error fetching weather data";
    }
}
