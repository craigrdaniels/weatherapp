import getIcon from './loadIcon';
import createHtmlElement from './createHtmlElement';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const url =
  'https://api.openweathermap.org/data/3.0/onecall?units=metric&exclude=minutely,hourly&appid=90318285a062f251bf658d4369021fd6';

const geoCode =
  'http://api.openweathermap.org/geo/1.0/direct?appid=90318285a062f251bf658d4369021fd6&q=';


const loadSearchBar = () => {
    const searchBarElement = document.getElementById('searchBar');
    document.getElementById('search').classList.remove('hidden');
    searchBarElement.classList.remove('bg-gray-300');
};

const loadWeatherIcon = (data) => {
  const weatherIcon = document.getElementById('weatherIcon');
  const rendered = `
    <svg viewBox="${getIcon(data.current.weather[0].icon).viewBox}">
      <use href="#${getIcon(data.current.weather[0].icon).id}" />
    </svg>`;
  weatherIcon.innerHTML = rendered;
  document
    .getElementById('weatherIcon')
    .parentElement.classList.remove(['animate-pulse']);
  document.getElementById('weatherIcon').classList.remove('bg-gray-300');
};

const loadTempMin = (data) => {
  const tempminElement = document.getElementById('tempmin');
  let tempminData = Math.round(data.daily[0].temp.min * 10) / 10;
  tempminData += '&deg;';
  tempminElement.appendChild(
    createHtmlElement('span', null, ['text-sm', 'text-gray-400'], 'Min')
  );
  tempminElement.appendChild(
    createHtmlElement('span', null, [], tempminData)
  );
  tempminElement.classList.remove('bg-gray-300');
};

const loadTempMax = (data) => {
  const tempmaxElement = document.getElementById('tempmax');
  let tempmaxData = Math.round(data.daily[0].temp.max * 10) / 10;
  tempmaxData += '&deg;';
  tempmaxElement.appendChild(
    createHtmlElement('span', null, ['text-sm', 'text-gray-400'], 'Max')
  );
  tempmaxElement.appendChild(
    createHtmlElement('span', null, [], tempmaxData)
  );
  tempmaxElement.classList.remove('bg-gray-300');  
};

const loadHumidity = (data) => {
  const humidityElement = document.getElementById('humidity');
  let humidityData = data.current.humidity;
  humidityData += '%';
  humidityElement.appendChild(
    createHtmlElement('span', null, ['text-sm', 'text-gray-400'], 'Humidity')
  );
  humidityElement.appendChild(
    createHtmlElement('span', null, [], humidityData)
  );
  humidityElement.classList.remove('bg-gray-300');
};

const loadDailyPop = (data) => {
  const dailpopElement = document.getElementById('dailypop');
  let dailpopData = Math.round(data.daily[0].pop * 10) / 10;
  dailpopData += '%';
  dailpopElement.appendChild(
    createHtmlElement('span', null, ['text-sm', 'text-gray-400'], 'Precip.')
  );
  dailpopElement.appendChild(
    createHtmlElement('span', null, [], dailpopData)
  );
  dailpopElement.classList.remove('bg-gray-300'); 
};

const loadCurrentTemp = (data) => {
  const currentTemp = document.getElementById('currentTemperature');
  currentTemp.innerHTML = Math.round(data.current.temp * 10) / 10;
  currentTemp.innerHTML += '&deg;';
  currentTemp.classList.remove('bg-gray-300');
};

const loadForecastData = (data, index) => {
  const d = new Date().getDay();
  const container = document.getElementById(`forecast${index}`);

  let tempMax = Math.round(data.daily[index+1].temp.max);
  tempMax += '&deg;';

  let tempMin = Math.round(data.daily[index+1].temp.min);
  tempMin += '&deg;';

  const renderedIcon = `
  <svg viewBox="${getIcon(data.daily[index+1].weather[0].icon).viewBox}">
    <use href="#${getIcon(data.daily[index+1].weather[0].icon).id}" />
  </svg>`;


  container.appendChild(createHtmlElement('span', null, ['text-sm', 'text-gray-400'], days[(d+index+1) % 7]));
  container.appendChild(createHtmlElement('span', null, ['text-base'], tempMax))
  container.appendChild(createHtmlElement('div', null, ['w-8', 'h-8'], renderedIcon));
  container.appendChild(createHtmlElement('span', null, ['text-base'], tempMin));


  container.classList.remove('bg-gray-300');
}


export const getWeather = async (coords) => {
  const fetchurl = url + coords;

  try {
    const response = await fetch(fetchurl, { mode: 'cors' });
    const theWeather = await response.json();

    loadSearchBar();
    loadWeatherIcon(theWeather);
    loadTempMin(theWeather);
    loadTempMax(theWeather);
    loadHumidity(theWeather);
    loadDailyPop(theWeather);
    loadCurrentTemp(theWeather);

    for (let i = 0; i < 4; i+=1) {
      loadForecastData(theWeather, i);
    }

  } catch (error) {
    console.error(`Unable to fetch weather data for ${fetchurl}`);
    return null;
  }
};

export const getCity = async (city) => {

  const thecity = city.split('&')[0];


  const fetchurl = geoCode + thecity;
  let string = '';
  try {
    const response = await fetch(fetchurl, { mode: 'cors' });
    const coords = await response.json();

    string = `&lat=${coords[0].lat}&lon=${coords[0].lon}`;

    // City Name
    const cityElement = document.getElementById('cityName');
    cityElement.innerHTML = coords[0].name;
    cityElement.classList.remove('bg-gray-300');

    // getWeather(url + string);
  } catch (error) {
    console.error(`Unable to fetch city data for ${fetchurl}`);
  }
  return string;
};