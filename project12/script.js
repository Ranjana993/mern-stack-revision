const searchBtn = document.getElementById('searchBtn');
const value = document.getElementById('value');

const fetchData = async (city) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b70fa50b27f302df4161469654d2d50e&units=metric`);
    if (!response.ok) {
      throw new Error("City not found");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

searchBtn.addEventListener("click", async () => {
  const city = value.value.trim();
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const result = await fetchData(city);
  if (result) {
    renderWeatherData(result);
  } else {
    alert("Could not fetch weather data. Please check the city name and try again.");
  }
});

const renderWeatherData = (data) => {
  // Update temperature
  const degreeElement = document.querySelector('.degree');
  degreeElement.textContent = `${data.main.temp}°C`;

  // Update city name
  const cityElement = document.querySelector('.city');
  cityElement.textContent = data.name;

  // Update wind speed
  const windElement = document.querySelector('.wind_value');
  windElement.textContent = `${data.wind.speed} km/h`;

  // Update pressure
  const pressureElement = document.querySelector('.pressure_value');
  pressureElement.textContent = `${data.main.pressure} hPa`;

  // Update humidity
  const humidityElement = document.querySelector('.humidity_value');
  humidityElement.textContent = `${data.main.humidity}%`;
};
