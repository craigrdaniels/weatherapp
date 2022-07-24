import displayWeatherCard from '../../views/weather';

const getElement = (selector, parentNode = document) =>
  parentNode.querySelector(selector);

const loadViews = (selector) => {
  const mainContent = getElement(selector);

  mainContent.appendChild(displayWeatherCard());
};
export default loadViews;