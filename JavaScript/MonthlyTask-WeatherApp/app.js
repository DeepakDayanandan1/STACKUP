const API_KEY = '62b154c9eac7716f1bb184baf2b15293'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

document.addEventListener('DOMContentLoaded', () => {
  const cityInput = document.getElementById('city-input');
  const getWeatherBtn = document.getElementById('get-weather-btn');
  const weatherDisplay = document.getElementById('weather-display');
  const errorMessage = document.getElementById('error-message');

  getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
      getWeather(city);
    }
  });

  cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const city = cityInput.value.trim();
      if (city) {
        getWeather(city);
      }
    }
  });

  async function getWeather(city) {
    hideAll();

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeather(weatherData);
    } catch (error) {
      showError(error.message);
    }
  }

  async function fetchWeatherData(city) {
    const url = `${BASE_URL}?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found. Please enter a valid city name.');
      }
      throw new Error('Failed to fetch weather data. Please try again.');
    }

    return response.json();
  }

  function displayWeather(data) {
    const cityName = document.querySelector('.city-name');
    const temp = document.querySelector('.temp');
    const condition = document.querySelector('.condition');

    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temp.textContent = `${Math.round(data.main.temp)}°C`;
    condition.textContent = data.weather[0].description;

    weatherDisplay.classList.remove('hidden');
  }

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
  }

  function hideAll() {
    weatherDisplay.classList.add('hidden');
    errorMessage.classList.add('hidden');
  }
});