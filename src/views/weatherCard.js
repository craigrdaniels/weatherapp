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
      'md:text-3xl',
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
      'md:h-28',
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

const displayDetailsContainer = () => {
  const element = createHtmlElement(
    'div',
    null,
    [
      'flex',
      'flex-col',
      'place-content-center',
      'w-full',
      'gap-6'
    ],
    null
  );

  element.appendChild(displayDetails());
  element.appendChild(displayForecastContainer());

  return element;
};

const displayBreak = () => {
  const element = createHtmlElement(
    'div',
    null,
    [
      'flex',
      'hidden',
      'md:block',
      'md:w-px',
      'bg-gray-300',
      'self-stretch'
    ],
    null
  );

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

const displaySearchContainer = () => {
  const element = createHtmlElement(
    'div',
    null,
    [
      'flex',
      'flex-col',
      'justify-center',
      'self-start',
      'items-center',
      'w-full'
    ],
    null
  );

  element.appendChild(displaySearchBar());

  return element;
}

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

const mainWeatherContainer = () => {
  const element = createHtmlElement(
    'div',
    null,
    [
      'flex',
      'flex-col',
      'place-content-center',
      'w-full',
      'gap-6'
    ],
    null
  );

  element.appendChild(displayWeatherIcon());
  element.appendChild(displayCityName());
  element.appendChild(displayCurrentTemperature());
  
  return element;
};

const contentContainer = () => {
  const element = createHtmlElement(
    'div',
    null,
    [
      'flex',
      'flex-col',
      'md:flex-row',
      'place-content-center',
      'w-full',
      'gap-6'
    ],
    null
  );

  element.appendChild(mainWeatherContainer());
  element.appendChild(displayBreak());
  element.appendChild(displayDetailsContainer());

  return element;
}

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
      'mx-auto',
      'gap-6',
      'md:border',
      'md:shadow-xl',
      'md:rounded-lg',
      'md:max-h-sm',
      'self-center'
    ],
    null
  );

  element.appendChild(displaySearchContainer());
  element.appendChild(contentContainer());

  getCity(searchCity).then(getWeather);  

  return element;
};
export default displayWeatherCard;
