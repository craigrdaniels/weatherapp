const getElement = (selector, parentNode = document) =>
  parentNode.querySelector(selector);

const loadViews = (selector) => {
  const mainContent = getElement(selector);
  console.warn(mainContent);
};
export default loadViews;