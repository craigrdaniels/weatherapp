import createHtmlElement from '../modules/handlers/createHtmlElement';
import getIcon from '../modules/handlers/loadIcon';

// const url = 'https://api.openweathermap.org/data/2.5/weather?q=Brisbane&units=metric&appid=90318285a062f251bf658d4369021fd6';

// const forecasturl = 'http://api.openweathermap.org/data/2.5/forecast?lat=-27.4679&lon=153.0281&cnt=5&units=metric&appid=90318285a062f251bf658d4369021fd6';

const url =
  'https://api.openweathermap.org/data/3.0/onecall?units=metric&exclude=minutely,hourly&appid=90318285a062f251bf658d4369021fd6';

const geoCode =
  'http://api.openweathermap.org/geo/1.0/direct?appid=90318285a062f251bf658d4369021fd6&q=';

const createSearchBar = () => `
    <form id='form' action="#" onsubmit="return false"> 
    <input id="search" type="input" class="hidden w-full h-12 bg-gray-50 dark:bg-gray-700 rounded-md text-2xl pl-2 placeholder:font-['MaterialSymbols-Outlined']" placeholder="search"/>
    <input type="submit" hidden />
    </form>
  `;

const getWeather = async (coords) => {
  const fetchurl = url + coords;

  try {
    const response = await fetch(fetchurl, { mode: 'cors' });
    const theWeather = await response.json();

    // Search Bar
    const searchBarElement = document.getElementById('searchBar');
    document.getElementById('search').classList.remove('hidden');
    // searchBarElement.innerHTML = createSearchBar();
    searchBarElement.classList.remove('bg-gray-300');

    // Weather Icon
    const weatherIcon = document.getElementById('weatherIcon');
    const rendered = `
      <svg viewBox="${getIcon(theWeather.current.weather[0].icon).viewBox}">
        <use href="#${getIcon(theWeather.current.weather[0].icon).id}" />
      </svg>`;
    weatherIcon.innerHTML = rendered;
    document
      .getElementById('weatherIcon')
      .parentElement.classList.remove(['animate-pulse']);
    document.getElementById('weatherIcon').classList.remove('bg-gray-300');

    // Temp min
    const tempminElement = document.getElementById('tempmin');
    let tempminData = Math.round(theWeather.daily[0].temp.min * 10) / 10;
    tempminData += '&deg;';
    tempminElement.appendChild(
      createHtmlElement('span', null, ['text-sm', 'text-gray-400'], 'Min')
    );
    tempminElement.appendChild(
      createHtmlElement('span', null, [], tempminData)
    );
    tempminElement.classList.remove('bg-gray-300');

    // Temp max
    const tempmaxElement = document.getElementById('tempmax');
    let tempmaxData = Math.round(theWeather.daily[0].temp.max * 10) / 10;
    tempmaxData += '&deg;';
    tempmaxElement.appendChild(
      createHtmlElement('span', null, ['text-sm', 'text-gray-400'], 'Max')
    );
    tempmaxElement.appendChild(
      createHtmlElement('span', null, [], tempmaxData)
    );
    tempmaxElement.classList.remove('bg-gray-300');   


    // Humidity
    const humidityElement = document.getElementById('humidity');
    let humidityData = theWeather.current.humidity;
    humidityData += '%';
    humidityElement.appendChild(
      createHtmlElement('span', null, ['text-sm', 'text-gray-400'], 'Humidity')
    );
    humidityElement.appendChild(
      createHtmlElement('span', null, [], humidityData)
    );
    humidityElement.classList.remove('bg-gray-300');

    // Daily POP
    const dailpopElement = document.getElementById('dailypop');
    let dailpopData = Math.round(theWeather.daily[0].pop * 10) / 10;
    dailpopData += '%';
    dailpopElement.appendChild(
      createHtmlElement('span', null, ['text-sm', 'text-gray-400'], 'Precip.')
    );
    dailpopElement.appendChild(
      createHtmlElement('span', null, [], dailpopData)
    );
    dailpopElement.classList.remove('bg-gray-300'); 

    // // Pressure
    // const pressureElement = document.getElementById('pressure');
    // const pressureData = theWeather.current.pressure;
    // pressureElement.appendChild(
    //   createHtmlElement('span', null, ['text-sm', 'text-gray-400'], 'Pressure')
    // );
    // pressureElement.appendChild(
    //   createHtmlElement('span', null, [], pressureData)
    // );
    // pressureElement.classList.remove('bg-gray-300');

    // // Wind Speed
    // const windspeedElement = document.getElementById('windspeed');
    // const windSpeedData = Math.round(theWeather.current.wind_speed * 10) / 10;
    // windspeedElement.appendChild(
    //   createHtmlElement(
    //     'span',
    //     null,
    //     ['text-sm', 'text-gray-600', 'dark:text-gray-400'],
    //     'Wind Spd'
    //   )
    // );
    // windspeedElement.appendChild(
    //   createHtmlElement('span', null, [], windSpeedData)
    // );
    // windspeedElement.classList.remove('bg-gray-300');

    // // Wind Dir
    // const winddirElement = document.getElementById('winddir');
    // const windDirData = theWeather.current.wind_deg;
    // winddirElement.appendChild(
    //   createHtmlElement('span', null, ['text-sm', 'text-gray-400'], 'Wind Dir')
    // );
    // winddirElement.appendChild(
    //   createHtmlElement('span', null, [], windDirData)
    // );
    // winddirElement.classList.remove('bg-gray-300');

    // Current Temperature
    const currentTemp = document.getElementById('currentTemperature');
    currentTemp.innerHTML = Math.round(theWeather.current.temp * 10) / 10;
    currentTemp.innerHTML += '&deg;';
    currentTemp.classList.remove('bg-gray-300');
  } catch (error) {
    console.error(`Unable to fetch weather data for ${fetchurl}`);
  }
};

const getCity = async (city) => {
  const fetchurl = geoCode + city;
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

// pressure, humidity, wind speed, wind dir,

const displaySunriseSunset = () => {
  const element = createHtmlElement(
    'div',
    'sunriseSunset',
    [
      'flex',
      'justify-center',
      'items-center',
      'self-center',
      'w-80',
      'h-48',
      'rounded-md',
      'bg-gray-300',
    ],
    '&nbsp;'
  );

  return element;
};

const createDetailsChild = (id) => {
  const element = createHtmlElement(
    'div',
    id,
    [
      'flex',
      'flex-col',
      'justify-evenly',
      'items-center',
      'text-2xl',
      'w-1/4',
      'h-full',
      'rounded-md',
      'bg-gray-300',
    ],
    null
  );

  return element;
};

const displayDetails = () => {
  const element = createHtmlElement(
    'div',
    'details',
    [
      'flex',
      'justify-start',
      'self-center',
      'bg-gray-100',
      'dark:bg-gray-700',
      'gap-2',
      'w-80',
      'h-20',
      'rounded-md',
    ],
    null
  );

  element.appendChild(createDetailsChild('tempmin'));
  element.appendChild(createDetailsChild('tempmax'));
  element.appendChild(createDetailsChild('dailypop'));
  element.appendChild(createDetailsChild('humidity'));

  return element;
};

const displaySearchBar = () => {
  const element = createHtmlElement(
    'div',
    'searchBar',
    [
      'flex',
      'justify-center',
      'items-center',
      'self-center',
      'w-72',
      'h-12',
      'rounded-md',
      'bg-gray-300',
    ],
    null
  );

  element.innerHTML = createSearchBar();

  return element;
};

const displayCurrentTemperature = () => {
  const element = createHtmlElement(
    'div',
    'currentTemperature',
    [
      'flex',
      'justify-center',
      'items-center',
      'self-center',
      'font-bold',
      'text-7xl',
      'w-28',
      'h-24',
      'rounded-md',
      'bg-gray-300',
    ],
    '&nbsp;'
  );

  return element;
};

const displayCityName = () => {
  const element = createHtmlElement(
    'div',
    'cityName',
    [
      'flex',
      'justify-center',
      'items-center',
      'self-center',
      'font-bold',
      'text-4xl',
      'w-64',
      'h-10',
      'rounded-md',
      'bg-gray-300',
    ],
    '&nbsp;'
  );

  return element;
};

const displayWeatherIcon = () => {
  const element = createHtmlElement(
    'div',
    'weatherIcon',
    [
      'flex',
      'justify-center',
      'items-center',
      'self-center',
      'w-36',
      'h-36',
      'rounded-md',
      'bg-gray-300',
    ],
    '&nbsp;'
  );

  return element;
};

const displayWeatherCard = (searchCity) => {
  console.warn(searchCity);

  const element = createHtmlElement(
    'div',
    null,
    [
      'animate-pulse',
      'flex',
      'flex-col',
      'p-4',
      'pt-8',
      'max-w-sm',
      'w-full',
      'mx-auto',
      'gap-4',
    ],
    null
  );

  element.appendChild(displaySearchBar());
  element.appendChild(displayWeatherIcon());
  element.appendChild(displayCityName());
  element.appendChild(displayCurrentTemperature());
  element.appendChild(displayDetails());
  element.appendChild(displaySunriseSunset());

  getCity(searchCity).then(getWeather);

  return element;
};
export default displayWeatherCard;
