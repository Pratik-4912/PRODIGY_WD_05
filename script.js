async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const apiKey = '94b68f5b49a30c814c447f1f0f361ed6';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const result = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind: ${data.wind.speed} m/s</p>
      `;
      document.getElementById('weatherResult').innerHTML = result;
    } else {
      document.getElementById('weatherResult').innerHTML = `<p>City not found</p>`;
    }
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = `<p>Error fetching weather</p>`;
  }
}