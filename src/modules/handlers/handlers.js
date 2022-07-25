import displayWeatherCard from '../../views/weather';


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
  const mainContent = getElement(selector);

  mainContent.appendChild(displayWeatherCard("Brisbane"));

  handleSearch(selector);


};
export default loadViews;