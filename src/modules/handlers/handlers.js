import displayWeatherCard from '../../views/weatherCard';

const getElement = (selector, parentNode = document) =>
  parentNode.querySelector(selector);  

const handleSearch = (selector) => {
  const mainContent = getElement(selector);

  document.getElementById('form').addEventListener("submit", () => {
    const searchTerm = document.getElementById('search').value;
    mainContent.childNodes.forEach(node => mainContent.removeChild(node));
    mainContent.appendChild(displayWeatherCard(searchTerm));

    handleSearch(selector);

  });
}; 

const loadViews = (selector) => {

  // set light / theme based on media preference
  if (window.matchMedia('(prefers-color-scheme: dark)')) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const mainContent = getElement(selector);
  mainContent.appendChild(displayWeatherCard("Brisbane"));

  handleSearch(selector);

};
export default loadViews;