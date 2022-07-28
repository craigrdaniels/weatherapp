import createHtmlElement from '../modules/handlers/createHtmlElement';
import { getCity, getWeather } from '../modules/handlers/displayWeatherData';


const createSearchBar = () => `
    <form id='form' action="#" onsubmit="return false"> 
    <input id="search" type="input" class="hidden w-full h-12 bg-gray-100 dark:bg-gray-700 rounded-md text-2xl pl-2 placeholder:font-['MaterialSymbols-Outlined']" placeholder="search"/>
    <input type="submit" hidden />
    </form>
  `;


const createForecastChild = (id) => {
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

const displayForecastContainer = () => {
  const element = createHtmlElement(
    'div',
    'forecastContainer',
    [
      'flex',
      'justify-center',
      'items-center',
      'self-center',
      'gap-2',
      'w-80',
      'h-48',
      'rounded-md',
      'bg-gray-100',
      'dark:bg-gray-700',
    ],
    null
  );

  for (let i = 0; i < 4; i+=1) {
    element.appendChild(createForecastChild(`forecast${i}`));
  }

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
    null
  );

  return element;
};

const displayWeatherCard = (searchCity) => {
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
  element.appendChild(displayForecastContainer());

  getCity(searchCity).then(getWeather);  

  return element;
};
export default displayWeatherCard;
