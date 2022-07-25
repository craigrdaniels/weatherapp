/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/handlers/createHtmlElement.js":
/*!***************************************************!*\
  !*** ./src/modules/handlers/createHtmlElement.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHtmlElement)
/* harmony export */ });
function createHtmlElement(type, id, arrayClasses, content) {
  var element = document.createElement(type);
  if (id) element.id = id;

  if (arrayClasses) {
    arrayClasses.forEach(function (myClass) {
      return element.classList.add(myClass);
    });
  }

  if (content) element.innerHTML = content;
  return element;
}

/***/ }),

/***/ "./src/modules/handlers/handlers.js":
/*!******************************************!*\
  !*** ./src/modules/handlers/handlers.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/weather */ "./src/views/weather.js");


var getElement = function getElement(selector) {
  var parentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return parentNode.querySelector(selector);
};

var handleSearch = function handleSearch(selector) {
  var mainContent = getElement(selector);
  document.getElementById('form').addEventListener("submit", function () {
    var searchTerm = document.getElementById('search').value;
    mainContent.childNodes.forEach(function (node) {
      return mainContent.removeChild(node);
    });
    mainContent.appendChild((0,_views_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(searchTerm));
    handleSearch(selector);
  });
};

var loadViews = function loadViews(selector) {
  // set light / theme based on media preference
  if (window.matchMedia('(prefers-color-scheme: dark)')) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  var mainContent = getElement(selector);
  mainContent.appendChild((0,_views_weather__WEBPACK_IMPORTED_MODULE_0__["default"])("Brisbane"));
  handleSearch(selector);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadViews);

/***/ }),

/***/ "./src/modules/handlers/loadIcon.js":
/*!******************************************!*\
  !*** ./src/modules/handlers/loadIcon.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_icons8_sun_50_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/icons8-sun-50.svg */ "./src/images/icons8-sun-50.svg");
/* harmony import */ var _images_icons8_moon_and_stars_50_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/icons8-moon-and-stars-50.svg */ "./src/images/icons8-moon-and-stars-50.svg");
/* harmony import */ var _images_icons8_partly_cloudy_day_50_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/icons8-partly-cloudy-day-50.svg */ "./src/images/icons8-partly-cloudy-day-50.svg");
/* harmony import */ var _images_icons8_night_50_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/icons8-night-50.svg */ "./src/images/icons8-night-50.svg");
/* harmony import */ var _images_icons8_cloud_50_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/icons8-cloud-50.svg */ "./src/images/icons8-cloud-50.svg");
/* harmony import */ var _images_icons8_clouds_50_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/icons8-clouds-50.svg */ "./src/images/icons8-clouds-50.svg");
/* harmony import */ var _images_icons8_rain_cloud_50_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/icons8-rain-cloud-50.svg */ "./src/images/icons8-rain-cloud-50.svg");
/* harmony import */ var _images_icons8_rain_50_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/icons8-rain-50.svg */ "./src/images/icons8-rain-50.svg");
/* harmony import */ var _images_icons8_storm_50_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/icons8-storm-50.svg */ "./src/images/icons8-storm-50.svg");
/* harmony import */ var _images_icons8_snow_50_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/icons8-snow-50.svg */ "./src/images/icons8-snow-50.svg");
/* harmony import */ var _images_icons8_haze_50_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/icons8-haze-50.svg */ "./src/images/icons8-haze-50.svg");











var iconReference = {
  '01d': {
    icon: _images_icons8_sun_50_svg__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  // clear sky day
  '01n': {
    icon: _images_icons8_moon_and_stars_50_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  // clear sky night
  '02d': {
    icon: _images_icons8_partly_cloudy_day_50_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  // few clouds day
  '02n': {
    icon: _images_icons8_night_50_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  // few clouds night
  '03d': {
    icon: _images_icons8_cloud_50_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  // clouds day
  '03n': {
    icon: _images_icons8_cloud_50_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  // clouds night
  '04d': {
    icon: _images_icons8_clouds_50_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  // broken clouds day
  '04n': {
    icon: _images_icons8_clouds_50_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  // broken clouds night
  '09d': {
    icon: _images_icons8_rain_cloud_50_svg__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  // shower rain day
  '09n': {
    icon: _images_icons8_rain_cloud_50_svg__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  // shower rain night (shows sun)
  '10d': {
    icon: _images_icons8_rain_50_svg__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  // rain day
  '10n': {
    icon: _images_icons8_rain_50_svg__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  // rain night
  '11d': {
    icon: _images_icons8_storm_50_svg__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  // storm day
  '11n': {
    icon: _images_icons8_storm_50_svg__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  // storm night
  '13d': {
    icon: _images_icons8_snow_50_svg__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  // snow day
  '13n': {
    icon: _images_icons8_snow_50_svg__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  // snow night
  '50d': {
    icon: _images_icons8_haze_50_svg__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  // mist day
  '50n': {
    icon: _images_icons8_haze_50_svg__WEBPACK_IMPORTED_MODULE_10__["default"]
  } // mist night

};

var getIcon = function getIcon(code) {
  return iconReference[code].icon;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getIcon);

/***/ }),

/***/ "./src/views/weather.js":
/*!******************************!*\
  !*** ./src/views/weather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/handlers/createHtmlElement */ "./src/modules/handlers/createHtmlElement.js");
/* harmony import */ var _modules_handlers_loadIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/handlers/loadIcon */ "./src/modules/handlers/loadIcon.js");

 // const url = 'https://api.openweathermap.org/data/2.5/weather?q=Brisbane&units=metric&appid=90318285a062f251bf658d4369021fd6';
// const forecasturl = 'http://api.openweathermap.org/data/2.5/forecast?lat=-27.4679&lon=153.0281&cnt=5&units=metric&appid=90318285a062f251bf658d4369021fd6';

var url = 'https://api.openweathermap.org/data/3.0/onecall?units=metric&exclude=minutely,hourly&appid=90318285a062f251bf658d4369021fd6';
var geoCode = 'http://api.openweathermap.org/geo/1.0/direct?appid=90318285a062f251bf658d4369021fd6&q=';

var createSearchBar = function createSearchBar() {
  return "\n    <form id='form' action=\"#\" onsubmit=\"return false\"> \n    <input id=\"search\" type=\"input\" class=\"hidden w-full h-12 bg-gray-50 dark:bg-gray-700 rounded-md text-2xl pl-2 placeholder:font-['MaterialSymbols-Outlined']\" placeholder=\"search\"/>\n    <input type=\"submit\" hidden />\n    </form>\n  ";
};

var getWeather = async function getWeather(coords) {
  var fetchurl = url + coords;

  try {
    var response = await fetch(fetchurl, {
      mode: 'cors'
    });
    var theWeather = await response.json(); // Search Bar

    var searchBarElement = document.getElementById('searchBar');
    document.getElementById('search').classList.remove('hidden'); // searchBarElement.innerHTML = createSearchBar();

    searchBarElement.classList.remove('bg-gray-300'); // Weather Icon

    var weatherIcon = document.getElementById('weatherIcon');
    var rendered = "\n      <svg viewBox=\"".concat((0,_modules_handlers_loadIcon__WEBPACK_IMPORTED_MODULE_1__["default"])(theWeather.current.weather[0].icon).viewBox, "\">\n        <use href=\"#").concat((0,_modules_handlers_loadIcon__WEBPACK_IMPORTED_MODULE_1__["default"])(theWeather.current.weather[0].icon).id, "\" />\n      </svg>");
    weatherIcon.innerHTML = rendered;
    document.getElementById('weatherIcon').parentElement.classList.remove(['animate-pulse']);
    document.getElementById('weatherIcon').classList.remove('bg-gray-300'); // Humidity

    var humidityElement = document.getElementById('humidity');
    var humidityData = theWeather.current.humidity;
    humidityData += '%';
    humidityElement.appendChild((0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', null, ['text-sm', 'text-gray-400'], 'Humidity'));
    humidityElement.appendChild((0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', null, [], humidityData));
    humidityElement.classList.remove('bg-gray-300'); // Pressure

    var pressureElement = document.getElementById('pressure');
    var pressureData = theWeather.current.pressure;
    pressureElement.appendChild((0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', null, ['text-sm', 'text-gray-400'], 'Pressure'));
    pressureElement.appendChild((0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', null, [], pressureData));
    pressureElement.classList.remove('bg-gray-300'); // Wind Speed

    var windspeedElement = document.getElementById('windspeed');
    var windSpeedData = Math.round(theWeather.current.wind_speed * 10) / 10;
    windspeedElement.appendChild((0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', null, ['text-sm', 'text-gray-600', 'dark:text-gray-400'], 'Wind Spd'));
    windspeedElement.appendChild((0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', null, [], windSpeedData));
    windspeedElement.classList.remove('bg-gray-300'); // Wind Dir

    var winddirElement = document.getElementById('winddir');
    var windDirData = theWeather.current.wind_deg;
    winddirElement.appendChild((0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', null, ['text-sm', 'text-gray-400'], 'Wind Dir'));
    winddirElement.appendChild((0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', null, [], windDirData));
    winddirElement.classList.remove('bg-gray-300'); // Current Temperature

    var currentTemp = document.getElementById('currentTemperature');
    currentTemp.innerHTML = Math.round(theWeather.current.temp * 10) / 10;
    currentTemp.innerHTML += '&deg;';
    currentTemp.classList.remove('bg-gray-300');
  } catch (error) {
    console.error("Unable to fetch weather data for ".concat(fetchurl));
  }
};

var getCity = async function getCity(city) {
  var fetchurl = geoCode + city;
  var string = '';

  try {
    var response = await fetch(fetchurl, {
      mode: 'cors'
    });
    var coords = await response.json();
    string = "&lat=".concat(coords[0].lat, "&lon=").concat(coords[0].lon); // City Name

    var cityElement = document.getElementById('cityName');
    cityElement.innerHTML = coords[0].name;
    cityElement.classList.remove('bg-gray-300'); // getWeather(url + string);
  } catch (error) {
    console.error("Unable to fetch city data for ".concat(fetchurl));
  }

  return string;
}; // pressure, humidity, wind speed, wind dir,


var displaySunriseSunset = function displaySunriseSunset() {
  var element = (0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'sunriseSunset', ['flex', 'justify-center', 'items-center', 'self-center', 'w-80', 'h-48', 'rounded-md', 'bg-gray-300'], '&nbsp;');
  return element;
};

var createDetailsChild = function createDetailsChild(id) {
  var element = (0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', id, ['flex', 'flex-col', 'justify-evenly', 'items-center', 'text-2xl', 'w-1/4', 'h-full', 'rounded-md', 'bg-gray-300'], null);
  return element;
};

var displayDetails = function displayDetails() {
  var element = (0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'details', ['flex', 'justify-start', 'self-center', 'bg-gray-100', 'dark:bg-gray-700', 'gap-2', 'w-80', 'h-20', 'rounded-md'], null);
  element.appendChild(createDetailsChild('humidity'));
  element.appendChild(createDetailsChild('pressure'));
  element.appendChild(createDetailsChild('windspeed'));
  element.appendChild(createDetailsChild('winddir'));
  return element;
};

var displaySearchBar = function displaySearchBar() {
  var element = (0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'searchBar', ['flex', 'justify-center', 'items-center', 'self-center', 'w-72', 'h-12', 'rounded-md', 'bg-gray-300'], null);
  element.innerHTML = createSearchBar();
  return element;
};

var displayCurrentTemperature = function displayCurrentTemperature() {
  var element = (0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'currentTemperature', ['flex', 'justify-center', 'items-center', 'self-center', 'font-bold', 'text-7xl', 'w-28', 'h-24', 'rounded-md', 'bg-gray-300'], '&nbsp;');
  return element;
};

var displayCityName = function displayCityName() {
  var element = (0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'cityName', ['flex', 'justify-center', 'items-center', 'self-center', 'font-bold', 'text-4xl', 'w-64', 'h-10', 'rounded-md', 'bg-gray-300'], '&nbsp;');
  return element;
};

var displayWeatherIcon = function displayWeatherIcon() {
  var element = (0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'weatherIcon', ['flex', 'justify-center', 'items-center', 'self-center', 'w-36', 'h-36', 'rounded-md', 'bg-gray-300'], '&nbsp;');
  return element;
};

var displayWeatherCard = function displayWeatherCard(searchCity) {
  console.warn(searchCity);
  var element = (0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', null, ['animate-pulse', 'flex', 'flex-col', 'p-4', 'pt-8', 'max-w-sm', 'w-full', 'mx-auto', 'gap-4'], null);
  element.appendChild(displaySearchBar());
  element.appendChild(displayWeatherIcon());
  element.appendChild(displayCityName());
  element.appendChild(displayCurrentTemperature());
  element.appendChild(displayDetails());
  element.appendChild(displaySunriseSunset());
  getCity(searchCity).then(getWeather);
  return element;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayWeatherCard);

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/svg-baker-runtime/browser-symbol.js":
/*!**********************************************************!*\
  !*** ./node_modules/svg-baker-runtime/browser-symbol.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {} else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

return BrowserSpriteSymbol;

})));


/***/ }),

/***/ "./src/images/icons8-cloud-50.svg":
/*!****************************************!*\
  !*** ./src/images/icons8-cloud-50.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icons8-cloud-50",
  "use": "icons8-cloud-50-usage",
  "viewBox": "0 0 100 100",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" id=\"icons8-cloud-50\"><path d=\"M21.0680008,84c-0.1509991,0-0.3010006-0.0049973-0.4500008-0.0159988 c-8.6669998-0.2440033-15.6870003-7.4670029-15.6870003-16.1910019c0-6.6170006,4.0060005-12.4179993,9.8240004-14.9069977 c0.3249998-2.6170006,1.2250004-5.1580009,2.6929998-7.5919991c2.7989998-4.644001,7.3050003-7.8920021,12.3610001-8.9099998 C31.0860004,36.1290016,32.382,36,33.6640015,36c0.0699997,0,0.1399994,0,0.2089996,0.0009995 c1.8450012-4.6020012,5.0250015-8.5489998,9.2350006-11.3810005c4.105999-2.7609997,8.8730011-4.2210007,13.7890015-4.2210007 c2.4550018,0,4.9350014,0.3619995,7.3700027,1.0750008c7.3099976,2.1399994,13.2529984,7.7129993,15.9000015,14.9090004 c0.9089966,2.4749985,1.4400024,5.0400009,1.5830002,7.6040001c1.8880005,0.2599983,3.7529984,0.7929993,5.5690002,1.5940018 c5.3349991,2.3499985,9.4420013,7.0999985,10.987999,12.7060013c1.7129974,6.2170029,0.5240021,12.6709976-3.2630005,17.7080002 c-3.6750031,4.887001-9.2559967,7.7910004-15.336998,7.987999C79.5469971,83.9940033,79.3860016,84,79.2249985,84H21.0680008z\" opacity=\".35\" /><path fill=\"#F2F2F2\" d=\"M19.0680008,82c-0.1509991,0-0.3010006-0.0049973-0.4500008-0.0159988 C9.9519997,81.7409973,2.9319999,74.5169983,2.9319999,65.7939987c0-6.6170006,4.0059996-12.4179993,9.8240004-14.9069977 c0.3249998-2.6170006,1.2250004-5.1580009,2.6929998-7.5919991c2.7990007-4.644001,7.3049994-7.8920021,12.361001-8.9099998 C29.0860004,34.1290016,30.382,34,31.6639996,34c0.0699997,0,0.1399994,0,0.2089996,0.0009995 c1.8449993-4.6020012,5.0249996-8.5489998,9.2349987-11.3810005c4.105999-2.7609997,8.8730011-4.2210007,13.7889977-4.2210007 c2.4550018,0,4.9350014,0.3619995,7.3699989,1.0750008c7.3100014,2.1399994,13.2530022,7.7129993,15.8999977,14.9090004 c0.9089966,2.4749985,1.4400024,5.0400009,1.5830002,7.6040001c1.8880005,0.2599983,3.7529984,0.7929993,5.5690002,1.5940018 c5.3349991,2.3499985,9.4420013,7.0999985,10.987999,12.7060013c1.7129974,6.2169991,0.5240021,12.6709976-3.2630005,17.7080002 c-3.6750031,4.887001-9.2559967,7.7910004-15.336998,7.987999C77.5469971,81.9940033,77.3860016,82,77.2249985,82H19.0680008z\" /><path fill=\"#70BFFF\" d=\"M82.9530029,49.2459984c-3.7170029-1.6380005-7.2689972-1.5309982-10.3410034-0.4150009 c1.2180023-3.7919998,1.2959976-8.0979996-0.3420029-12.5540009c-1.9509964-5.3069992-6.3410034-9.4420013-11.743-11.0240002 c-11.9440002-3.4979992-22.8729973,4.7520008-24.0099983,15.9190006c-2.2659988-0.9749985-4.8699989-1.3100014-7.5900002-0.7630005 c-3.4319992,0.6899986-6.3540001,2.9490013-8.1689987,5.9589996c-2.0739994,3.4410019-2.2420006,6.6399994-1.5629997,9.5100021 c-0.118-0.0040016-0.2339993-0.0180016-0.3530006-0.0180016c-5.3899994,0-9.7589998,4.3950005-9.7589998,9.8159981 c0,5.4199982,4.368,9.814003,9.7559996,9.8160019L18.8379993,75.5h58.5830002l-0.0009995-0.0090027 c8.7330017-0.1100006,15.4970016-8.4469986,12.9560013-17.6660004 C89.3239975,54.0079994,86.5599976,50.8359985,82.9530029,49.2459984z\" /><path fill=\"#40396E\" d=\"M77.4209976,77H18.8379993c-0.0610008,0-0.1200008-0.0029984-0.1800003-0.0110016 c-6.1230001-0.0999985-11.0749998-5.1380005-11.0749998-11.314003c0-5.7579994,4.3009996-10.5250015,9.8439989-11.2270012 c-0.3400002-3.0629997,0.3460007-6.0340004,2.0470009-8.8549995c2.0979996-3.4799995,5.4360008-5.9059982,9.1569996-6.6549988 c2.25-0.4519997,4.5220013-0.3740005,6.6709995,0.2200012c1.0250015-5.2190018,4.0649986-9.8219986,8.5289993-12.8250008 c5.031002-3.3840008,11.1079979-4.2779999,17.1170006-2.519001c5.8509979,1.7129993,10.6080017,6.1790009,12.7290039,11.9459991 c1.3259964,3.6100006,1.6640015,7.3549995,1.0039978,10.9690018c2.9540024-0.519001,5.9759979-0.1329994,8.8759995,1.1450005 c4.0139999,1.769001,7.1039963,5.3390007,8.2649994,9.5519981c1.310997,4.757,0.4120026,9.6790009-2.4639969,13.5049973 c-2.8170013,3.7470016-7.0930023,5.947998-11.7509995,6.0569992C77.5459976,76.9960022,77.4830017,77,77.4209976,77z M19.007,74 h58.2520027c0.0469971-0.0049973,0.0950012-0.0080032,0.1429977-0.0090027 c3.7860031-0.0469971,7.2710037-1.8199997,9.5589981-4.862999c2.3130035-3.0759964,3.0309982-7.0509987,1.9700012-10.9049988 c-0.9240036-3.3530006-3.3850021-6.1949997-6.5820007-7.6040001h-0.0009995 c-3.0759964-1.355999-6.1809998-1.4830017-9.2229996-0.3779984c-0.5390015,0.1949997-1.1409988,0.0680008-1.5530014-0.3289986 c-0.413002-0.3969994-0.5630035-0.9939995-0.3880005-1.5390015C72.3829956,44.6360016,72.272995,40.632,70.8619995,36.795002 c-1.7929993-4.8780003-5.814003-8.6549988-10.757-10.1020012c-5.1360016-1.5049992-10.3219986-0.7479992-14.598999,2.1289997 c-4.2459984,2.8560009-6.9790001,7.4139996-7.4970016,12.5020008c-0.0480003,0.4760017-0.3199997,0.8989983-0.7319984,1.1409988 c-0.4109993,0.2420006-0.9150009,0.2739983-1.3530006,0.0849991c-2.0929985-0.901001-4.4090004-1.132-6.7010002-0.6699982 c-2.8980007,0.5830002-5.5159988,2.5009995-7.1800003,5.2630005c-1.6310005,2.704998-2.0849991,5.4490013-1.3880005,8.3899994 c0.1070004,0.4560013-0.0039997,0.9360008-0.3010006,1.2980003s-0.7439995,0.5579987-1.2150002,0.5470009l-0.2980003-0.0169983 c-4.5539999,0-8.2589998,3.7299995-8.2589998,8.3149986c0,4.5839996,3.7039995,8.314003,8.2580004,8.3160019 C18.8959999,73.9909973,18.9510002,73.9940033,19.007,74z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (symbol);

/***/ }),

/***/ "./src/images/icons8-clouds-50.svg":
/*!*****************************************!*\
  !*** ./src/images/icons8-clouds-50.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icons8-clouds-50",
  "use": "icons8-clouds-50-usage",
  "viewBox": "0 0 100 100",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" id=\"icons8-clouds-50\"><path d=\"M80.572,33.378C78.398,21.793,68.207,13,56,13\tc-10.489,0-19.658,6.503-23.313,16c-9.94,0.032-18.131,7.638-19.092,17.337C7.904,48.828,4,54.517,4,61\tc0,8.474,6.622,15.431,14.962,15.967C21.487,84.555,28.682,90,37,90h38c9.374,0,17-7.626,17-17c0-0.761-0.051-1.517-0.151-2.264\tC96.063,66.624,98.5,60.954,98.5,55C98.5,44.26,90.765,35.292,80.572,33.378z\" opacity=\".35\" /><path fill=\"#f2f2f2\" d=\"M78.572,31.378C76.398,19.793,66.207,11,54,11c-10.489,0-19.658,6.503-23.313,16\tc-9.94,0.032-18.131,7.638-19.092,17.337C5.904,46.828,2,52.517,2,59c0,8.474,6.622,15.431,14.962,15.967\tC19.487,82.555,26.682,88,35,88h38c9.374,0,17-7.626,17-17c0-0.761-0.051-1.517-0.151-2.264C94.063,64.624,96.5,58.954,96.5,53\tC96.5,42.26,88.765,33.292,78.572,31.378z\" /><path fill=\"#70bfff\" d=\"M90,53c0-8.56-6.94-15.5-15.5-15.5c-0.708,0-1.4,0.064-2.084,0.156C72.465,37.11,72.5,36.559,72.5,36\tc0-10.217-8.283-18.5-18.5-18.5c-9.695,0-17.634,7.461-18.422,16.953c-1.49-0.61-3.118-0.953-4.828-0.953\tC23.708,33.5,18,39.208,18,46.25c0,1.133,0.162,2.226,0.44,3.272C18.293,49.516,18.148,49.5,18,49.5c-5.247,0-9.5,4.253-9.5,9.5\ts4.253,9.5,9.5,9.5h4.525C22.519,68.667,22.5,68.831,22.5,69c0,6.904,5.596,12.5,12.5,12.5h38c5.799,0,10.5-4.701,10.5-10.5\tc0-1.682-0.406-3.267-1.109-4.676C86.941,63.623,90,58.675,90,53z\" /><path fill=\"#d9eeff\" d=\"M82,71c0,4.96-4.04,9-9,9H35c-6.07,0-11-4.93-11-11s4.93-11,11-11c0.66,0,1.35,0.07,2.05,0.2\ts1.4-0.25,1.67-0.91C41.26,51.04,47.26,47,54,47c8.11,0,14.95,5.81,16.26,13.82c0.13,0.8,0.86,1.35,1.66,1.25\tC72.33,62.02,72.68,62,73,62C77.96,62,82,66.04,82,71z\" /><path fill=\"#40396e\" d=\"M73,83H35c-7.383,0-13.45-5.745-13.965-13H18c-6.065,0-11-4.935-11-11\tc0-5.6,4.207-10.235,9.625-10.914c-0.083-0.617-0.125-1.229-0.125-1.836C16.5,38.393,22.893,32,30.75,32\tc1.216,0,2.414,0.153,3.579,0.457C36.02,23.091,44.32,16,54,16c11.028,0,20,8.972,20,20c0,0.003,0,0.006,0,0.009\tC74.169,36.003,74.335,36,74.5,36c9.374,0,17,7.626,17,17c0,5.518-2.74,10.727-7.231,13.894C84.755,68.211,85,69.587,85,71\tC85,77.617,79.617,83,73,83z M18,51c-4.411,0-8,3.589-8,8s3.589,8,8,8h4.525c0.409,0,0.799,0.167,1.082,0.461\tc0.283,0.295,0.434,0.692,0.417,1.101l-0.014,0.234C24.006,68.863,24,68.931,24,69c0,6.065,4.935,11,11,11h38c4.962,0,9-4.037,9-9\tc0-1.394-0.32-2.741-0.951-4.006c-0.351-0.703-0.099-1.559,0.577-1.96C85.93,62.479,88.5,57.979,88.5,53c0-7.72-6.28-14-14-14\tc-0.56,0-1.158,0.045-1.884,0.143c-0.452,0.058-0.907-0.088-1.236-0.402c-0.33-0.314-0.498-0.762-0.458-1.216\tC70.975,36.925,71,36.44,71,36c0-9.374-7.626-17-17-17c-8.767,0-16.202,6.843-16.927,15.577c-0.04,0.477-0.304,0.905-0.711,1.155\tc-0.409,0.25-0.911,0.289-1.353,0.108C33.649,35.283,32.216,35,30.75,35c-6.203,0-11.25,5.047-11.25,11.25\tc0,0.942,0.131,1.914,0.389,2.888c0.123,0.462,0.018,0.955-0.283,1.327c-0.3,0.371-0.75,0.577-1.237,0.556l-0.19-0.011\tC18.12,51.005,18.061,51,18,51z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (symbol);

/***/ }),

/***/ "./src/images/icons8-haze-50.svg":
/*!***************************************!*\
  !*** ./src/images/icons8-haze-50.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icons8-haze-50",
  "use": "icons8-haze-50-usage",
  "viewBox": "0 0 100 100",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" id=\"icons8-haze-50\"><path d=\"M94.937,45.727l-5.839-2.766c1.255-1.876,1.596-4.257,0.875-6.42\tc-0.825-2.497-2.938-4.377-5.511-4.906l-0.596-0.122l2.198-6.154c1.102-3.08-0.216-6.464-3.12-8.04\tc-0.951-0.52-2.026-0.794-3.11-0.794c-0.785,0-1.556,0.141-2.28,0.414l-5.681,2.127L69,20.179c-0.718-3.462-0.824-7.025-4.362-7.025\tc-1.373,0-2.708,0.385-3.859,1.097l-4.157-0.206c-1.097-2.194-1.996-8.979-4.472-9.037l-0.116-0.001\tc-2.42,0-4.646,1.328-5.844,3.527l-3.112,5.914c-1.222-0.84-2.668-1.294-4.159-1.294c-3.539,0-6.513,2.419-7.23,5.886l-0.024,0.119\tl-6.302-2.25c-0.701-0.249-1.433-0.375-2.176-0.375c-0.434,0-0.869,0.044-1.299,0.131l-0.102,0.021\tc-1.216,0.247-2.331,0.834-3.225,1.697c-1.812,1.751-2.467,4.329-1.718,6.707l2.046,6.59c-2.511,0.589-4.486,2.394-5.32,4.896\tc-0.675,2.084-0.378,4.357,0.758,6.183l-6.265,2.967c-2.241,1.062-3.666,3.262-3.717,5.741c-0.051,2.483,1.284,4.74,3.48,5.89\tl4.765,2.499C12.204,61.014,12,62.241,12,63.5c0,0.7,0.062,1.392,0.185,2.067C10.187,67.665,9,70.489,9,73.5\tc0,5.862,4.409,10.715,10.086,11.414C19.785,90.591,24.638,95,30.5,95h37c5.835,0,10.669-4.368,11.403-10.007\tC85.059,84.779,90,79.706,90,73.5c0-1.637-0.355-3.229-1.008-4.681c0.421-0.583,0.755-1.222,0.978-1.896\tc0.748-2.248,0.359-4.719-1.001-6.621l5.97-2.828c2.257-1.07,3.716-3.376,3.716-5.874S97.195,46.797,94.937,45.727z\" opacity=\".35\" /><path fill=\"#f2f2f2\" d=\"M92.937,43.727l-5.839-2.766c1.255-1.876,1.596-4.257,0.875-6.42\tc-0.825-2.497-2.938-4.377-5.511-4.906l-0.596-0.122l2.198-6.154c1.102-3.08-0.216-6.464-3.12-8.04\tc-0.951-0.52-2.026-0.794-3.11-0.794c-0.785,0-1.556,0.141-2.28,0.414l-5.681,2.127l-0.007-0.032\tc-0.718-3.462-3.691-5.879-7.229-5.879c-1.373,0-2.708,0.385-3.859,1.097L55.94,6.658c-1.097-2.194-3.315-3.593-5.791-3.65\tl-0.116-0.001c-2.42,0-4.646,1.328-5.844,3.527l-3.112,5.914c-1.222-0.84-2.668-1.294-4.159-1.294c-3.539,0-6.513,2.419-7.23,5.886\tl-0.024,0.119l-6.302-2.25c-0.701-0.249-1.433-0.375-2.176-0.375c-0.434,0-0.869,0.044-1.299,0.131l-0.102,0.021\tc-1.216,0.247-2.331,0.834-3.225,1.697c-1.812,1.751-2.467,4.329-1.718,6.707l2.046,6.59c-2.511,0.589-4.486,2.394-5.32,4.896\tc-0.675,2.084-0.378,4.357,0.758,6.183l-6.265,2.967c-2.241,1.062-3.666,3.262-3.717,5.741c-0.051,2.483,1.284,4.74,3.48,5.89\tl4.765,2.499C10.204,59.014,10,60.241,10,61.5c0,0.7,0.062,1.392,0.185,2.067C8.187,65.665,7,68.489,7,71.5\tc0,5.862,4.409,10.715,10.086,11.414C17.785,88.591,22.638,93,28.5,93h37c5.835,0,10.669-4.368,11.403-10.007\tC83.059,82.779,88,77.706,88,71.5c0-1.637-0.355-3.229-1.008-4.681c0.421-0.583,0.755-1.222,0.978-1.896\tc0.748-2.248,0.359-4.719-1.001-6.621l5.97-2.828c2.257-1.07,3.716-3.376,3.716-5.874S95.195,44.797,92.937,43.727z\" /><path fill=\"#ffc571\" d=\"M77.716,57.619c-0.313-0.354-0.443-0.833-0.349-1.296s0.4-0.854,0.827-1.057l11.96-5.666\tl-11.802-5.59c-0.428-0.202-0.734-0.594-0.828-1.057c-0.095-0.463,0.035-0.942,0.349-1.296l3.754-4.221\tc0.303-0.34,0.225-0.711,0.177-0.854c-0.048-0.145-0.207-0.489-0.652-0.581l-6.229-1.284c-0.426-0.087-0.792-0.355-1.005-0.733\tc-0.213-0.379-0.251-0.831-0.105-1.24l4.135-11.575c0.014-0.038,0.004-0.08-0.111-0.143L66.683,25.2\tc-0.171,0.064-0.349,0.096-0.526,0.096c-0.251,0-0.501-0.063-0.726-0.187c-0.383-0.212-0.655-0.581-0.743-1.011l-1.185-5.745\tc-0.1-0.48-0.519-0.699-0.865-0.699c-0.212,0-0.404,0.075-0.57,0.224L58.2,21.317c-0.277,0.246-0.633,0.379-0.997,0.379\tc-0.093,0-0.187-0.009-0.279-0.026c-0.457-0.086-0.848-0.38-1.059-0.795l-5.737-11.31c-0.018-0.035-0.052-0.058-0.094-0.059\tc-0.038,0-0.074,0.022-0.092,0.055l-6.06,11.513c-0.215,0.408-0.605,0.695-1.059,0.777c-0.09,0.017-0.18,0.024-0.269,0.024\tc-0.364,0-0.72-0.133-0.997-0.379l-4.069-3.62c-0.166-0.147-0.358-0.223-0.57-0.223c-0.347,0-0.766,0.219-0.865,0.699l-1.187,5.752\tc-0.088,0.426-0.355,0.792-0.733,1.005c-0.228,0.128-0.48,0.192-0.735,0.192c-0.17,0-0.341-0.029-0.505-0.088l-11.708-4.181\tl-0.105,0.021c-0.029,0.028-0.04,0.07-0.028,0.107l3.68,11.854c0.125,0.404,0.074,0.843-0.141,1.207\tc-0.216,0.364-0.574,0.621-0.989,0.706l-5.196,1.071c-0.445,0.092-0.604,0.437-0.652,0.58c-0.047,0.145-0.125,0.516,0.178,0.855\tl3.588,4.035c0.313,0.354,0.443,0.833,0.349,1.296s-0.4,0.854-0.828,1.057l-12.197,5.78L22,56.5h-0.5c-2.761,0-5,2.239-5,5\ts2.239,5,5,5h-3c-2.761,0-5,2.239-5,5s2.239,5,5,5h10c-2.761,0-5,2.239-5,5s2.239,5,5,5h37c2.761,0,5-2.239,5-5s-2.239-5-5-5h11\tc2.761,0,5-2.239,5-5s-2.239-5-5-5H74c0-0.5,0.574-0.913,1-1l6-2c0.445-0.092,0.755-0.485,0.803-0.63\tc0.048-0.144,0.126-0.515-0.177-0.854L77.716,57.619z\" /><circle cx=\"50\" cy=\"50.005\" r=\"19\" fill=\"#ffe385\" /><path fill=\"#d9eeff\" d=\"M28.5,85c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5c0.828,0,1.5-0.672,1.5-1.5S29.328,75,28.5,75\th-10c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5h3c0.828,0,1.5-0.672,1.5-1.5S22.328,65,21.5,65c-1.93,0-3.5-1.57-3.5-3.5\ts1.57-3.5,3.5-3.5h43c1.93,0,3.5,1.57,3.5,3.5S66.43,65,64.5,65c-0.828,0-1.5,0.672-1.5,1.5s0.672,1.5,1.5,1.5h12\tc1.93,0,3.5,1.57,3.5,3.5S78.43,75,76.5,75h-11c-0.828,0-1.5,0.672-1.5,1.5s0.672,1.5,1.5,1.5c1.93,0,3.5,1.57,3.5,3.5\tS67.43,85,65.5,85H28.5z\" /><path fill=\"#f2f2f2\" d=\"M32.782,58c3.02,6.493,9.584,11.005,17.218,11.005c7.286,0,13.607-4.106,16.795-10.126\tC66.179,58.339,65.382,58,64.5,58H32.782z\" /><path fill=\"#40396e\" d=\"M65.5,88h-37c-3.584,0-6.5-2.916-6.5-6.5c0-1.287,0.376-2.489,1.024-3.5H18.5\tc-3.584,0-6.5-2.916-6.5-6.5c0-2.81,1.792-5.208,4.293-6.114C15.48,64.301,15,62.956,15,61.5c0-2.271,1.17-4.273,2.939-5.436\tl-9.792-5.136c-0.504-0.264-0.815-0.79-0.804-1.358s0.344-1.082,0.857-1.325l12.194-5.776l-3.587-4.035\tc-0.566-0.636-0.747-1.502-0.483-2.315c0.274-0.824,0.938-1.413,1.776-1.586l5.196-1.071l-3.68-11.854\tc-0.182-0.576-0.022-1.204,0.418-1.63c0.206-0.199,0.464-0.335,0.743-0.392l0.105-0.021c0.27-0.055,0.546-0.034,0.805,0.057\tl11.708,4.181l1.187-5.751c0.231-1.117,1.191-1.896,2.334-1.896c0.582,0,1.124,0.208,1.566,0.602l4.07,3.62l6.06-11.513\tc0.292-0.536,0.831-0.856,1.419-0.856c0.632,0.015,1.169,0.354,1.436,0.888L57.2,20.199l3.868-3.439\tc0.44-0.394,0.983-0.603,1.567-0.603c1.143,0,2.103,0.779,2.334,1.895l1.185,5.747l11.151-4.175c0.409-0.154,0.86-0.122,1.241,0.086\tc0.871,0.473,1.029,1.351,0.809,1.968L75.22,33.251l6.23,1.284c0.841,0.173,1.504,0.763,1.773,1.578\tc0.271,0.813,0.092,1.682-0.48,2.324l-3.753,4.22l11.804,5.591c0.523,0.248,0.857,0.775,0.857,1.355s-0.334,1.107-0.857,1.355\tl-11.96,5.666l-1.121,0.997l1.121-0.997l3.91,4.396c0.571,0.642,0.75,1.511,0.479,2.326c-0.208,0.629-0.894,1.367-1.816,1.6\tl-2.093,0.698C81.494,66.693,83,68.924,83,71.5c0,3.584-2.916,6.5-6.5,6.5h-5.524C71.624,79.011,72,80.213,72,81.5\tC72,85.084,69.084,88,65.5,88z M28.5,78c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5h37c1.93,0,3.5-1.57,3.5-3.5S67.43,78,65.5,78\tc-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5h11c1.93,0,3.5-1.57,3.5-3.5S78.43,68,76.5,68H74c-0.828,0-1.5-0.672-1.5-1.5\tc0-1.223,1.046-2.184,2.092-2.445l5.276-1.759l-3.273-3.68c0-0.001-0.001-0.001-0.001-0.002c-0.624-0.703-0.884-1.673-0.696-2.592\tc0.187-0.919,0.805-1.709,1.654-2.111l9.099-4.311l-8.941-4.235c-0.85-0.401-1.469-1.192-1.655-2.114\tc-0.188-0.916,0.072-1.886,0.696-2.589l3.034-3.411l-5.166-1.065c-0.849-0.173-1.582-0.707-2.009-1.466\tc-0.426-0.758-0.503-1.661-0.212-2.479l3.125-8.748l-8.313,3.112c-0.804,0.304-1.745,0.237-2.503-0.182\tc-0.771-0.427-1.313-1.164-1.488-2.023l-0.965-4.68l-3.057,2.719c-0.69,0.613-1.633,0.881-2.553,0.705\tc-0.905-0.17-1.697-0.765-2.116-1.589l-4.517-8.903l-4.802,9.121c-0.433,0.823-1.205,1.39-2.118,1.555\tc-0.897,0.169-1.845-0.102-2.528-0.708l-3.26-2.899l-0.968,4.688c-0.175,0.851-0.71,1.583-1.466,2.009\tc-0.749,0.422-1.667,0.501-2.481,0.211l-9.076-3.241l2.852,9.186c0.25,0.808,0.147,1.688-0.281,2.413\tc-0.433,0.73-1.154,1.245-1.98,1.414l-4.13,0.852l2.867,3.224c0.625,0.705,0.885,1.675,0.697,2.594\tc-0.187,0.919-0.806,1.71-1.657,2.112l-9.475,4.488l10.492,5.503c0.611,0.32,0.925,1.017,0.76,1.687C23.291,57.529,22.69,58,22,58\th-0.5c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5c0.828,0,1.5,0.672,1.5,1.5S22.328,68,21.5,68h-3c-1.93,0-3.5,1.57-3.5,3.5\ts1.57,3.5,3.5,3.5h10c0.828,0,1.5,0.672,1.5,1.5S29.328,78,28.5,78z M80.506,63.014h0.01H80.506z M80.697,62.031\tc-0.017,0.003-0.032,0.007-0.049,0.011C80.665,62.038,80.681,62.034,80.697,62.031z M22.481,20.711l0.004,0.014\tC22.484,20.721,22.482,20.716,22.481,20.711z M76.533,20.663c-0.001,0.002-0.002,0.003-0.002,0.005L76.533,20.663z M63.067,18.996\tl-0.002,0.002C63.066,18.997,63.066,18.997,63.067,18.996z M48.789,10.244c0.003,0.005,0.005,0.01,0.008,0.014L48.789,10.244z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (symbol);

/***/ }),

/***/ "./src/images/icons8-moon-and-stars-50.svg":
/*!*************************************************!*\
  !*** ./src/images/icons8-moon-and-stars-50.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icons8-moon-and-stars-50",
  "use": "icons8-moon-and-stars-50-usage",
  "viewBox": "0 0 100 100",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" id=\"icons8-moon-and-stars-50\"><path d=\"M20.178,27.195C12.75,34.917,8.782,45.064,9.004,55.765c0.258,12.438,6.14,23.893,16.377,31.481\tc5.731,4.248,12.565,6.867,19.665,7.555c12.568,1.218,24.482-3.203,33.061-12.122c5.105-5.308,8.643-11.894,10.23-19.048\tl1.925-8.676c0.177-0.797-0.553-1.499-1.343-1.29l-1.251,0.331l1.665-5.404l9.064-6.88c0.802-0.609,0.802-1.815,0-2.424\tl-9.072-6.884L20.178,27.195z\" opacity=\".35\" /><path fill=\"#f2f2f2\" d=\"M87.339,46.601l9.064-6.88c0.802-0.609,0.802-1.815,0-2.424l-9.072-6.884l-7.631-10.445\tc-0.453-0.62-1.109-1.062-1.853-1.249l-3.287-0.825l-10.047-3.663L58.18,5.615c-0.585-0.796-1.775-0.796-2.36,0.001l-6.329,8.62\tl-3.214,1.175l0.372-1.675c0.227-1.022-0.71-1.922-1.722-1.654l-8.102,2.144c-7.094,1.877-13.54,5.673-18.643,10.979\tc-7.428,7.722-11.396,17.869-11.174,28.57c0.258,12.438,6.14,23.893,16.377,31.481c5.731,4.248,12.565,6.867,19.665,7.555\tc12.568,1.218,24.482-3.203,33.061-12.122c5.105-5.308,8.643-11.894,10.23-19.048l1.925-8.676c0.177-0.797-0.553-1.499-1.343-1.29\tl-1.251,0.331L87.339,46.601z\" /><path fill=\"#ffe385\" d=\"M48.044,52.014c-8.793-8.415-12.01-20.447-9.555-31.505c-5.763,1.525-11.192,4.596-15.621,9.201\tc-12.865,13.376-12.423,34.622,0.986,47.455c13.41,12.833,34.71,12.392,47.575-0.984c4.429-4.605,7.281-10.143,8.569-15.95\tC69.022,63.136,56.837,60.429,48.044,52.014z\" /><polygon fill=\"#94cfff\" points=\"57.02,31.009 59.273,23.778 65.497,21.509 59.273,19.239 57.003,12.009 54.733,19.239 48.509,21.514 54.733,23.778\" /><path fill=\"#40396e\" d=\"M57.02,32.509c-0.654,0-1.233-0.424-1.43-1.048l-2.064-6.525l-5.53-2.011 c-0.592-0.215-0.987-0.778-0.987-1.408c0-0.63,0.393-1.194,0.985-1.41l5.53-2.021l2.048-6.525c0.196-0.625,0.776-1.051,1.431-1.051 s1.235,0.425,1.431,1.051l2.048,6.524l5.529,2.016c0.592,0.216,0.986,0.779,0.986,1.409s-0.394,1.193-0.986,1.409l-5.527,2.015 l-2.032,6.522c-0.195,0.625-0.773,1.052-1.429,1.054C57.022,32.509,57.021,32.509,57.02,32.509z M52.888,21.511l2.358,0.857 c0.438,0.159,0.777,0.513,0.917,0.958L57.009,26l0.832-2.668c0.139-0.447,0.479-0.803,0.918-0.963l2.359-0.86l-2.359-0.86 c-0.438-0.16-0.778-0.515-0.917-0.96l-0.839-2.671l-0.838,2.671c-0.14,0.445-0.478,0.799-0.916,0.959L52.888,21.511z\" /><polygon fill=\"#94cfff\" points=\"79.026,51.509 82.074,41.615 90.497,38.509 82.074,35.403 79.003,25.509 75.932,35.403 67.509,38.517 75.932,41.615\" /><path fill=\"#40396e\" d=\"M79.026,53.009c-0.656,0-1.236-0.426-1.432-1.052l-2.874-9.189l-7.729-2.843 c-0.59-0.217-0.982-0.778-0.982-1.407c0-0.628,0.391-1.19,0.98-1.408l7.729-2.857l2.852-9.188c0.195-0.627,0.775-1.055,1.433-1.055 s1.238,0.428,1.433,1.055l2.852,9.188l7.729,2.85c0.589,0.217,0.981,0.779,0.981,1.407s-0.392,1.19-0.981,1.407l-7.728,2.85 l-2.83,9.185c-0.193,0.628-0.773,1.057-1.431,1.058C79.028,53.009,79.027,53.009,79.026,53.009z M71.845,38.513l4.604,1.694 c0.438,0.161,0.775,0.516,0.914,0.96l1.652,5.282l1.625-5.276c0.138-0.447,0.476-0.804,0.915-0.965l4.606-1.699l-4.606-1.698 c-0.438-0.161-0.775-0.517-0.914-0.962l-1.639-5.279l-1.639,5.279c-0.138,0.445-0.476,0.801-0.913,0.962L71.845,38.513z\" /><g><path fill=\"#ffe385\" d=\"M48.044,52.014c-8.793-8.415-12.01-20.447-9.555-31.505c-5.763,1.525-11.192,4.596-15.621,9.201 c-12.865,13.376-12.423,34.622,0.986,47.455c13.41,12.833,34.71,12.392,47.575-0.984c4.429-4.605,7.281-10.143,8.569-15.95 C69.022,63.136,56.837,60.429,48.044,52.014z\" /><path fill=\"#40396e\" d=\"M47.141,87.992c-8.755,0-17.522-3.234-24.324-9.744c-6.776-6.484-10.615-15.213-10.809-24.578 c-0.194-9.364,3.279-18.242,9.779-25c4.468-4.645,10.111-7.969,16.318-9.611c0.506-0.135,1.046,0.005,1.423,0.368 c0.377,0.363,0.539,0.896,0.425,1.407c-2.448,11.033,0.964,22.284,9.128,30.096v0c8.165,7.814,19.581,10.749,30.533,7.851 c0.507-0.132,1.046,0.006,1.423,0.368c0.377,0.363,0.539,0.896,0.425,1.407c-1.389,6.257-4.484,12.019-8.953,16.665 C65.619,84.386,56.386,87.992,47.141,87.992z M36.563,22.664c-4.765,1.655-9.09,4.42-12.615,8.086 c-5.943,6.179-9.119,14.297-8.941,22.858c0.178,8.562,3.688,16.543,9.884,22.473c12.792,12.242,33.183,11.821,45.457-0.94 c3.523-3.664,6.113-8.084,7.574-12.899c-11.201,2.141-22.598-1.187-30.914-9.144l0,0C38.689,45.139,34.882,33.917,36.563,22.664z\" /></g></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (symbol);

/***/ }),

/***/ "./src/images/icons8-night-50.svg":
/*!****************************************!*\
  !*** ./src/images/icons8-night-50.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icons8-night-50",
  "use": "icons8-night-50-usage",
  "viewBox": "0 0 100 100",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" id=\"icons8-night-50\"><path d=\"M97.121,44.685c-1.216-1.166-2.814-1.809-4.5-1.809c-0.557,0-1.113,0.072-1.665,0.217c-1.671,0.443-3.38,0.667-5.082,0.668 c-4.994,0-9.756-1.929-13.407-5.432c-4.943-4.742-7.009-11.574-5.527-18.271c0.488-2.2-0.219-4.536-1.852-6.104 c-1.216-1.162-2.813-1.803-4.497-1.803c-0.549,0-1.098,0.069-1.665,0.216c-5.738,1.522-10.951,4.601-15.076,8.9 c-1.978,2.062-3.66,4.37-5.016,6.847c-0.571-0.482-1.22-0.881-1.946-1.145l-3.21-1.171l-1.309-4.17 c-0.855-2.724-3.348-4.553-6.202-4.553s-5.346,1.829-6.202,4.554l-1.31,4.172l-3.218,1.176c-2.553,0.936-4.267,3.391-4.265,6.109 c0.002,2.723,1.723,5.177,4.277,6.103l3.216,1.171l1.32,4.175c0.804,2.541,3.04,4.282,5.658,4.498 c-1.227,1.547-2.301,3.222-3.162,5.026c-2.119,0.165-4.198,0.706-6.199,1.614c-6.81,3.093-11.288,9.769-11.407,17.01 c-0.084,5.136,1.852,9.98,5.453,13.642C13.933,89.984,18.744,92,23.877,92h44.661c9.683,0,17.924-7.078,19.17-16.463 c0.285-2.146,0.205-4.304-0.228-6.389c1.137-0.904,2.213-1.885,3.22-2.936c4.126-4.299,6.985-9.635,8.267-15.43 C99.456,48.583,98.75,46.247,97.121,44.685z\" opacity=\".35\" /><path fill=\"#f2f2f2\" d=\"M95.121,42.685c-1.216-1.166-2.814-1.809-4.5-1.809c-0.557,0-1.113,0.072-1.665,0.217 c-1.671,0.443-3.38,0.667-5.082,0.668c-4.994,0-9.756-1.929-13.407-5.432c-4.943-4.742-7.009-11.574-5.527-18.271 c0.488-2.2-0.219-4.536-1.852-6.104c-1.216-1.162-2.813-1.803-4.497-1.803c-0.549,0-1.098,0.069-1.665,0.216 c-5.738,1.522-10.951,4.601-15.076,8.9c-1.978,2.062-3.66,4.37-5.016,6.847c-0.571-0.482-1.22-0.881-1.946-1.145l-3.21-1.171 l-1.309-4.17c-0.855-2.724-3.348-4.553-6.202-4.553s-5.346,1.829-6.202,4.554l-1.31,4.172l-3.218,1.176 c-2.553,0.936-4.267,3.391-4.265,6.109c0.002,2.723,1.723,5.177,4.277,6.103l3.216,1.171l1.32,4.175 c0.804,2.541,3.04,4.282,5.658,4.498c-1.227,1.547-2.301,3.222-3.162,5.026c-2.119,0.165-4.198,0.706-6.199,1.614 c-6.81,3.093-11.288,9.769-11.407,17.01c-0.084,5.136,1.852,9.98,5.453,13.642C11.933,87.984,16.744,90,21.877,90h44.661 c9.683,0,17.924-7.078,19.17-16.463c0.285-2.146,0.205-4.304-0.228-6.389c1.137-0.904,2.213-1.885,3.22-2.936 c4.126-4.299,6.985-9.635,8.267-15.43C97.456,46.583,96.75,44.247,95.121,42.685z\" /><path fill=\"#ffe385\" d=\"M65.968,40.945c-6.784-6.509-9.266-15.816-7.373-24.37c-4.446,1.179-8.635,3.555-12.053,7.117 c-9.926,10.346-9.585,26.781,0.761,36.707c10.346,9.926,26.781,9.585,36.707-0.761c3.417-3.562,5.617-7.846,6.612-12.337 C82.154,49.547,72.753,47.453,65.968,40.945z\" /><path fill=\"#94cfff\" d=\"M66.102,59.555c-1.025,0-2.014,0.14-2.965,0.379c-2.022-8.526-9.694-14.879-18.872-14.879 s-16.85,6.352-18.872,14.879c-0.951-0.238-1.94-0.379-2.965-0.379c-6.7,0-12.132,5.41-12.132,12.083s5.432,12.083,12.132,12.083 c3.805,0,17.113,0,21.837,0s18.032,0,21.837,0c6.7,0,12.132-5.41,12.132-12.083S72.803,59.555,66.102,59.555z\" /><polygon fill=\"#94cfff\" points=\"24.188,40.577 26.44,33.346 32.665,31.077 26.44,28.807 24.171,21.577 21.901,28.807 15.676,31.082 21.901,33.346\" /><path fill=\"#40396e\" d=\"M24.188,42.076c-0.654,0-1.233-0.424-1.43-1.048l-2.063-6.524l-5.53-2.013 c-0.592-0.215-0.987-0.777-0.987-1.408c0-0.63,0.393-1.193,0.985-1.41l5.531-2.021l2.048-6.524 c0.196-0.625,0.776-1.051,1.431-1.051s1.235,0.426,1.431,1.051l2.048,6.524l5.529,2.016c0.592,0.216,0.986,0.779,0.986,1.409 s-0.394,1.193-0.986,1.409l-5.527,2.017l-2.032,6.521c-0.195,0.626-0.773,1.053-1.429,1.054 C24.189,42.076,24.188,42.076,24.188,42.076z M20.055,31.079l2.359,0.858c0.438,0.159,0.777,0.513,0.917,0.957l0.846,2.674 l0.831-2.668c0.139-0.446,0.479-0.803,0.918-0.963l2.361-0.861l-2.36-0.86c-0.438-0.16-0.778-0.515-0.917-0.96l-0.838-2.671 l-0.838,2.671c-0.14,0.445-0.478,0.8-0.916,0.96L20.055,31.079z\" /><g><path fill=\"#40396e\" d=\"M66.539,85H21.877c-3.783,0-7.328-1.485-9.981-4.183C9.244,78.12,7.817,74.55,7.879,70.765 c0.088-5.319,3.415-10.241,8.475-12.539c2.408-1.093,4.925-1.455,7.498-1.077c2.072-6.735,7.281-11.998,14.001-14.132 c-0.349-7.512,2.387-14.846,7.608-20.287c3.49-3.639,7.899-6.242,12.75-7.529c0.508-0.131,1.044,0.006,1.423,0.368 c0.377,0.362,0.539,0.896,0.426,1.406c-1.863,8.418,0.733,17.002,6.947,22.963c6.213,5.96,14.898,8.197,23.231,5.988 c0.506-0.133,1.045,0.006,1.423,0.368c0.377,0.362,0.539,0.896,0.426,1.406c-1.084,4.9-3.503,9.414-6.993,13.051 c-1.639,1.709-3.483,3.192-5.496,4.423c1.11,2.401,1.509,5.037,1.154,7.704C79.835,79.789,73.724,85,66.539,85z M21.876,60 c-1.458,0-2.875,0.318-4.282,0.957c-4.011,1.821-6.647,5.69-6.716,9.856c-0.049,2.976,1.072,5.781,3.156,7.899 C16.12,80.833,18.905,82,21.877,82h44.661c5.688,0,10.52-4.092,11.24-9.517c0.332-2.499-0.176-4.96-1.469-7.118 c-0.21-0.352-0.268-0.773-0.159-1.168s0.374-0.729,0.734-0.923c2.244-1.21,4.277-2.758,6.044-4.6 c2.551-2.659,4.459-5.842,5.595-9.309c-8.565,1.463-17.234-1.162-23.594-7.265c-6.359-6.1-9.344-14.649-8.236-23.271 c-3.417,1.278-6.517,3.317-9.068,5.976c-4.907,5.115-7.349,12.106-6.7,19.182c0.067,0.733-0.409,1.408-1.123,1.59 c-6.685,1.705-11.824,6.939-13.411,13.659c-0.092,0.391-0.338,0.729-0.681,0.938c-0.344,0.208-0.756,0.271-1.146,0.173 C23.65,60.115,22.755,60,21.876,60z\" /></g></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (symbol);

/***/ }),

/***/ "./src/images/icons8-partly-cloudy-day-50.svg":
/*!****************************************************!*\
  !*** ./src/images/icons8-partly-cloudy-day-50.svg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icons8-partly-cloudy-day-50",
  "use": "icons8-partly-cloudy-day-50-usage",
  "viewBox": "0 0 100 100",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" id=\"icons8-partly-cloudy-day-50\"><path d=\"M95.362,36.723l-0.702-0.331c0.437-1.403,0.437-2.923-0.041-4.328\tc-0.628-1.914-2.036-3.454-3.833-4.271l0.269-0.757c0.979-2.768,0.291-5.77-1.795-7.831c-1.414-1.401-3.285-2.173-5.268-2.173\tc-0.88,0-1.749,0.153-2.596,0.462l-1.99,0.459c-1.204-2.302-2.134-4.051-4.865-4.051c-0.681,0-1.353,0.098-1.997,0.287l-2.186-0.524\tc-1.28-2.491-2.117-4.479-4.973-4.5c-2.774,0-5.31,1.521-6.617,3.97l-0.608,1.14c-0.727-0.245-1.493-0.373-2.272-0.373\tc-2.763,0-5.168,1.523-6.359,3.873l-1.099-0.386c-0.806-0.285-1.647-0.43-2.5-0.43c-1.94,0-3.783,0.742-5.192,2.095\tc-2.05,1.971-2.807,4.885-1.974,7.604l0.419,1.366c-1.569,0.857-2.793,2.294-3.375,4.052c-0.318,0.976-0.415,1.994-0.305,2.986\tc-6.826,2.799-12.413,8.256-15.316,15.111c-2.288,0.296-4.507,1.011-6.622,2.135C6.969,55.813,2.922,62.484,3.001,69.716\tC3.117,80.349,11.864,89,22.5,89H69c0.077,0,0.154-0.001,0.231-0.004C69.32,88.999,69.41,89,69.5,89C79.701,89,88,80.701,88,70.5\tc0-0.546-0.024-1.092-0.072-1.635c0.474-0.294,0.919-0.644,1.328-1.046c2.087-2.064,2.777-5.065,1.799-7.835l-0.271-0.767\tc1.793-0.813,3.197-2.338,3.812-4.204c0.491-1.443,0.496-2.981,0.061-4.396l0.703-0.332c2.652-1.251,4.3-3.85,4.3-6.782\tC99.659,40.573,98.013,37.976,95.362,36.723z\" opacity=\".35\" /><path fill=\"#f2f2f2\" d=\"M93.362,34.723l-0.702-0.331c0.437-1.403,0.437-2.923-0.041-4.328\tc-0.628-1.914-2.036-3.454-3.833-4.271l0.269-0.757c0.979-2.768,0.291-5.77-1.795-7.831c-1.414-1.401-3.285-2.173-5.268-2.173\tc-0.88,0-1.749,0.153-2.596,0.462l-0.537,0.197c-1.204-2.302-3.587-3.79-6.317-3.79c-0.681,0-1.353,0.098-1.997,0.287l-0.488-0.951\tc-1.28-2.491-3.814-4.052-6.671-4.072c-2.774,0-5.31,1.521-6.617,3.97l-0.608,1.14c-0.727-0.245-1.493-0.373-2.272-0.373\tc-2.763,0-5.168,1.523-6.359,3.873l-1.099-0.386c-0.806-0.285-1.647-0.43-2.5-0.43c-1.94,0-3.783,0.742-5.192,2.095\tc-2.05,1.971-2.807,4.885-1.974,7.604l0.419,1.366c-1.569,0.857-2.793,2.294-3.375,4.052c-0.318,0.976-0.415,1.994-0.305,2.986\tc-6.826,2.799-12.413,8.256-15.316,15.111c-2.288,0.296-4.507,1.011-6.622,2.135C4.969,53.813,0.922,60.484,1.001,67.716\tC1.117,78.349,9.864,87,20.5,87H67c0.077,0,0.154-0.001,0.231-0.004C67.32,86.999,67.41,87,67.5,87C77.701,87,86,78.701,86,68.5\tc0-0.546-0.024-1.092-0.072-1.635c0.474-0.294,0.919-0.644,1.328-1.046c2.087-2.064,2.777-5.065,1.799-7.835l-0.271-0.767\tc1.793-0.813,3.197-2.338,3.812-4.204c0.491-1.443,0.496-2.981,0.061-4.396l0.703-0.332c2.652-1.251,4.3-3.85,4.3-6.782\tC97.659,38.573,96.013,35.976,93.362,34.723z\" /><path fill=\"#f9b84f\" d=\"M83.592,47.25c-0.227-0.256-0.322-0.602-0.253-0.937c0.068-0.335,0.29-0.618,0.6-0.764l6.647-3.14\tc0.764-0.361,0.764-1.448,0-1.808l-6.647-3.14c-0.31-0.146-0.532-0.429-0.6-0.764c-0.069-0.335,0.026-0.682,0.253-0.937l2.723-3.052\tc0.22-0.246,0.163-0.514,0.128-0.618s-0.15-0.354-0.473-0.42l-4.518-0.929c-0.309-0.063-0.574-0.257-0.729-0.53\tc-0.154-0.274-0.182-0.601-0.076-0.897l2.281-6.445c0.282-0.798-0.493-1.564-1.287-1.272l-6.163,2.263\tc-0.124,0.047-0.253,0.069-0.382,0.069c-0.182,0-0.363-0.045-0.526-0.135c-0.278-0.153-0.475-0.42-0.539-0.731l-0.859-4.156\tc-0.072-0.347-0.375-0.505-0.628-0.505c-0.154,0-0.293,0.054-0.414,0.161l-2.806,2.488c-0.201,0.178-0.459,0.274-0.723,0.274\tc-0.067,0-0.135-0.006-0.203-0.019c-0.331-0.062-0.615-0.275-0.768-0.575l-3.355-6.524c-0.369-0.717-1.392-0.725-1.772-0.013\tl-3.564,6.681c-0.156,0.295-0.439,0.503-0.768,0.562c-0.064,0.012-0.13,0.018-0.194,0.018c-0.264,0-0.522-0.096-0.723-0.274\tl-2.951-2.618c-0.12-0.107-0.26-0.161-0.414-0.161c-0.252,0-0.555,0.158-0.628,0.505l-0.861,4.16\tc-0.064,0.308-0.258,0.573-0.532,0.727c-0.165,0.093-0.349,0.139-0.533,0.139c-0.123,0-0.247-0.021-0.366-0.063l-6.703-2.352\tc-0.774-0.272-1.527,0.452-1.287,1.236l2.07,6.758c0.091,0.292,0.054,0.609-0.102,0.873c-0.156,0.263-0.417,0.449-0.717,0.511\tl-3.769,0.774c-0.323,0.066-0.438,0.316-0.473,0.42c-0.034,0.104-0.091,0.372,0.129,0.618l2.602,2.918\tc0.227,0.256,0.322,0.602,0.253,0.937c-0.068,0.335-0.29,0.618-0.6,0.764L41.8,37.611c-9.418,0.957-17.035,7.994-18.873,17.123\tc-2.512-0.475-5.392-0.24-8.312,1.312c-4.344,2.309-7.167,6.679-7.113,11.598C7.578,74.758,13.369,80.5,20.5,80.5H67v-0.025\tc0.167,0.007,0.331,0.025,0.5,0.025c6.627,0,12-5.373,12-12c0-3.812-1.783-7.202-4.554-9.4c0.05-0.007,0.099-0.019,0.149-0.019\tc0.129,0,0.258,0.023,0.382,0.069l6.162,2.272c0.795,0.293,1.571-0.473,1.289-1.271l-2.28-6.455\tc-0.106-0.296-0.078-0.623,0.076-0.897c0.154-0.273,0.42-0.468,0.729-0.53l4.518-0.929c0.323-0.066,0.438-0.316,0.473-0.42\tc0.035-0.104,0.091-0.372-0.128-0.618L83.592,47.25z\" /><circle cx=\"63.25\" cy=\"42\" r=\"12.5\" fill=\"#ffc571\" /><path fill=\"#94cfff\" d=\"M78,68.5C78,74.29,73.29,79,67.5,79c-0.07,0-0.14-0.01-0.2-0.01l-0.24-0.01\tc-0.02-0.01-0.04-0.01-0.06-0.01c-0.09,0-0.17,0.01-0.26,0.03H20.5C14.16,79,9,73.84,9,67.5S14.16,56,20.5,56\tc0.69,0,1.42,0.07,2.15,0.21c0.8,0.16,1.58-0.37,1.75-1.18C26.27,45.74,34.51,39,44,39c10.25,0,18.8,7.68,19.88,17.86\tc0.05,0.41,0.26,0.79,0.59,1.04c0.34,0.25,0.76,0.35,1.17,0.28C66.3,58.06,66.91,58,67.5,58C73.29,58,78,62.71,78,68.5z\" /><path fill=\"#40396e\" d=\"M91.23,39.24l-6.15-2.9l2.35-2.63c0.52-0.58,0.68-1.37,0.44-2.09c-0.24-0.73-0.84-1.27-1.6-1.42\tl-1.48-0.3l-2.57-0.53l2.12-6c0.33-0.92,0.1-1.93-0.6-2.61c-0.69-0.69-1.7-0.91-2.62-0.57l-5.72,2.1l-0.76-3.69\tc-0.21-1-1.07-1.7-2.1-1.7c-0.51,0-1.01,0.19-1.41,0.54l-2.41,2.14l-3.11-6.06c-0.43-0.83-1.27-1.35-2.2-1.36c-0.01,0-0.02,0-0.02,0\tc-0.93,0-1.77,0.51-2.21,1.33l-3.32,6.22l-2.56-2.27c-0.4-0.35-0.89-0.54-1.41-0.54c-1.03,0-1.89,0.7-2.1,1.7l-0.76,3.7l-6.27-2.2\tc-0.89-0.31-1.87-0.1-2.56,0.56c-0.68,0.65-0.93,1.63-0.66,2.53l1.94,6.33l-3.32,0.68c-0.76,0.15-1.35,0.68-1.6,1.42\tc-0.24,0.73-0.07,1.51,0.44,2.09l2.19,2.46c-9.25,1.13-17.02,7.94-19.41,16.9c-0.66-0.06-1.32-0.07-1.98-0.02\tc-0.24,0.01-0.48,0.03-0.72,0.06c-1.77,0.19-3.52,0.73-5.17,1.61C8.97,57.35,5.94,62.3,6,67.66C6.09,75.57,12.59,82,20.5,82H67\tc0.06,0,0.12,0,0.18-0.01C67.29,82,67.39,82,67.5,82C74.94,82,81,75.94,81,68.5c0-2.23-0.54-4.38-1.55-6.29l1.67,0.62\tc0.92,0.34,1.92,0.12,2.62-0.57c0.7-0.68,0.93-1.69,0.6-2.61l-2.12-6.01l3.32-0.68l0.73-0.15c0.76-0.16,1.35-0.69,1.59-1.41\tc0.25-0.73,0.09-1.52-0.43-2.1l-2.35-2.63l6.15-2.91c0.88-0.41,1.43-1.28,1.43-2.26C92.66,40.53,92.11,39.66,91.23,39.24z M83.3,44.19c-0.74,0.35-1.27,1.03-1.43,1.82c-0.03,0.17-0.05,0.34-0.05,0.52c0,0.63,0.23,1.24,0.65,1.72l1.72,1.92l-3.04,0.63\tc-0.73,0.15-1.36,0.61-1.73,1.26c-0.37,0.66-0.44,1.44-0.19,2.14l1.93,5.45l-5.15-1.9c-0.41-0.15-0.84-0.21-1.27-0.14\tc-0.59,0.09-1.08,0.51-1.24,1.09c-0.16,0.58,0.04,1.2,0.51,1.57C76.55,62.28,78,65.28,78,68.5C78,74.29,73.29,79,67.5,79\tc-0.07,0-0.14-0.01-0.2-0.01l-0.24-0.01c-0.02-0.01-0.04-0.01-0.06-0.01c-0.09,0-0.17,0.01-0.26,0.03H20.5\tC14.23,79,9.07,73.9,9,67.63c-0.05-4.23,2.38-8.16,6.32-10.26c1.3-0.69,2.63-1.12,3.99-1.29c0.2-0.02,0.39-0.04,0.59-0.05\tc0.91-0.06,1.83,0,2.75,0.18c0.8,0.15,1.58-0.37,1.75-1.18c1.71-8.5,8.93-15.05,17.55-15.93c0.18-0.02,0.36-0.07,0.52-0.15\tl0.54-0.27c0.74-0.35,1.27-1.03,1.43-1.82s-0.06-1.62-0.6-2.23l-1.6-1.8l2.29-0.47c0.71-0.14,1.34-0.59,1.71-1.21\tc0.37-0.63,0.46-1.39,0.24-2.08l-1.78-5.81l5.78,2.03c0.7,0.24,1.48,0.17,2.12-0.19c0.66-0.37,1.12-1,1.27-1.73l0.56-2.69l1.83,1.62\tc0.58,0.53,1.4,0.75,2.18,0.61c0.79-0.14,1.45-0.63,1.82-1.33l3.12-5.84l2.91,5.67c0.36,0.71,1.05,1.22,1.83,1.37\tc0.79,0.15,1.61-0.08,2.2-0.61L72,20.68l0.56,2.68c0.15,0.74,0.62,1.38,1.28,1.74c0.65,0.36,1.46,0.43,2.15,0.17l5.17-1.9\tl-1.93,5.44c-0.25,0.7-0.18,1.48,0.19,2.14c0.36,0.65,1,1.11,1.73,1.26l3.04,0.62l-1.72,1.93c-0.54,0.61-0.76,1.44-0.6,2.24\tc0.16,0.79,0.7,1.47,1.43,1.82l5.69,2.68L83.3,44.19z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (symbol);

/***/ }),

/***/ "./src/images/icons8-rain-50.svg":
/*!***************************************!*\
  !*** ./src/images/icons8-rain-50.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icons8-rain-50",
  "use": "icons8-rain-50-usage",
  "viewBox": "0 0 100 100",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" id=\"icons8-rain-50\"><path d=\"M79.09,62.55c1.8,0.75,3.18,2.29,3.73,4.17c1.93,6.72,2.36,11.67,1.26,14.69\tc-1.05,2.88-3.15,5.17-5.93,6.47c-1.53,0.71-3.16,1.08-4.84,1.08c-1.34,0-2.66-0.24-3.92-0.7c-4.78-1.74-7.7-6.34-7.53-11.17\tc-1.12,2.54-3.08,4.56-5.61,5.74c-1.53,0.71-3.15,1.07-4.83,1.07c-1.33,0-2.65-0.23-3.91-0.69c-2.87-1.04-5.16-3.14-6.45-5.91\tc-0.17-0.35-0.31-0.7-0.43-1.06c0.11,2.08-0.06,3.83-0.55,5.17c-1.05,2.88-3.15,5.17-5.93,6.47c-1.53,0.71-3.16,1.08-4.84,1.08\tc-1.34,0-2.66-0.24-3.92-0.7c-5.94-2.16-9.01-8.75-6.85-14.69c1.37-3.78,6.42-7.76,10.41-10.44c0.07-0.05,0.15-0.08,0.22-0.13H29\tc-10.48,0-19-8.52-19-19c0-9.89,7.42-18.02,17.27-18.92c0.37-0.03,0.77-0.06,1.17-0.07C32.65,16,41.83,10,52,10s19.35,6,23.56,15.01\tc0.41,0.01,0.81,0.04,1.22,0.08C86.58,25.98,94,34.11,94,44C94,53.07,87.6,60.67,79.09,62.55z\" opacity=\".35\" /><path fill=\"#f2f2f2\" d=\"M77.09,60.55c1.8,0.75,3.18,2.29,3.73,4.17c1.93,6.72,2.36,11.67,1.26,14.69\tc-1.05,2.88-3.15,5.17-5.93,6.47c-1.53,0.71-3.16,1.08-4.84,1.08c-1.34,0-2.66-0.24-3.92-0.7c-4.78-1.74-7.7-6.34-7.53-11.17\tc-1.12,2.54-3.08,4.56-5.61,5.74c-1.53,0.71-3.15,1.07-4.83,1.07c-1.33,0-2.65-0.23-3.91-0.69c-2.87-1.04-5.16-3.14-6.45-5.91\tc-0.17-0.35-0.31-0.7-0.43-1.06c0.11,2.08-0.06,3.83-0.55,5.17c-1.05,2.88-3.15,5.17-5.93,6.47c-1.53,0.71-3.16,1.08-4.84,1.08\tc-1.34,0-2.66-0.24-3.92-0.7c-5.94-2.16-9.01-8.75-6.85-14.69c1.37-3.78,6.42-7.76,10.41-10.44c0.07-0.05,0.15-0.08,0.22-0.13H27\tC16.52,61,8,52.48,8,42c0-9.89,7.42-18.02,17.27-18.92c0.37-0.03,0.77-0.06,1.17-0.07C30.65,14,39.83,8,50,8s19.35,6,23.56,15.01\tc0.41,0.01,0.81,0.04,1.22,0.08C84.58,23.98,92,32.11,92,42C92,51.07,85.6,58.67,77.09,60.55z\" /><path fill=\"#94cfff\" d=\"M73,29.5c-1.359,0-2.663,0.224-3.888,0.624C67.315,21.212,59.442,14.5,50,14.5\ts-17.315,6.712-19.112,15.624C29.663,29.724,28.359,29.5,27,29.5c-6.904,0-12.5,5.596-12.5,12.5S20.096,54.5,27,54.5\tc0.169,0,45.831,0,46,0c6.904,0,12.5-5.596,12.5-12.5S79.904,29.5,73,29.5z\" /><path fill=\"#40396e\" d=\"M73,56H27c-7.72,0-14-6.28-14-14s6.28-14,14-14c0.937,0,1.87,0.095,2.79,0.283\tC32.315,19.339,40.574,13,50,13s17.685,6.339,20.21,15.283C71.13,28.095,72.063,28,73,28c7.72,0,14,6.28,14,14S80.72,56,73,56z M27,31c-6.065,0-11,4.935-11,11s4.935,11,11,11h46c6.065,0,11-4.935,11-11s-4.935-11-11-11c-1.154,0-2.306,0.185-3.422,0.55\tc-0.405,0.135-0.85,0.085-1.222-0.13c-0.37-0.216-0.63-0.579-0.715-0.999C65.956,22.064,58.537,16,50,16\ts-15.956,6.064-17.642,14.421c-0.085,0.42-0.345,0.783-0.715,0.999c-0.371,0.217-0.816,0.264-1.222,0.13\tC29.306,31.185,28.154,31,27,31z\" /><path fill=\"#2785bd\" d=\"M54.051,72.155c0.931-2.559-1.39-10.596-1.39-10.596s-6.945,4.665-7.876,7.224\tc-0.931,2.559,0.388,5.388,2.947,6.32C50.29,76.033,53.12,74.714,54.051,72.155z\" /><path fill=\"#40396e\" d=\"M49.422,76.902c-0.742,0-1.485-0.13-2.204-0.392c-1.613-0.587-2.902-1.768-3.628-3.324\tc-0.726-1.558-0.802-3.304-0.214-4.918c1.045-2.872,7.222-7.131,8.449-7.955c0.397-0.267,0.9-0.328,1.349-0.164\tc0.45,0.163,0.796,0.532,0.929,0.993c0.41,1.42,2.403,8.651,1.357,11.525l0,0c-0.587,1.614-1.768,2.903-3.324,3.629\tC51.271,76.7,50.348,76.902,49.422,76.902z M51.763,64.027c-2.638,1.946-5.183,4.207-5.568,5.268\tc-0.313,0.861-0.272,1.793,0.114,2.624c0.388,0.83,1.075,1.46,1.936,1.773c0.861,0.313,1.793,0.273,2.624-0.114\tc0.83-0.388,1.46-1.075,1.773-1.936l0,0C53.027,70.581,52.532,67.213,51.763,64.027z\" /><path fill=\"#2785bd\" d=\"M75.97,77.189c0.937-2.575-1.399-10.663-1.399-10.663s-6.989,4.694-7.926,7.269\tc-0.937,2.575,0.39,5.422,2.965,6.359C72.185,81.091,75.032,79.764,75.97,77.189z\" /><path fill=\"#40396e\" d=\"M71.312,81.957c-0.746,0-1.493-0.131-2.214-0.394c-3.348-1.218-5.08-4.934-3.863-8.281\tc1.052-2.889,7.265-7.173,8.5-8.002c0.396-0.267,0.899-0.327,1.349-0.164c0.45,0.163,0.796,0.532,0.929,0.993\tc0.412,1.429,2.418,8.705,1.367,11.592l0,0c-0.59,1.622-1.776,2.917-3.341,3.646C73.17,81.753,72.242,81.957,71.312,81.957z M73.672,68.994c-2.659,1.961-5.229,4.243-5.618,5.313c-0.652,1.794,0.276,3.784,2.069,4.438c1.793,0.651,3.784-0.275,4.438-2.069\tl0,0C74.949,75.605,74.448,72.205,73.672,68.994z M75.97,77.188h0.01H75.97z\" /><path fill=\"#2785bd\" d=\"M31.97,77.189c0.937-2.575-1.399-10.663-1.399-10.663s-6.989,4.694-7.926,7.269\tc-0.937,2.575,0.39,5.422,2.965,6.359S31.032,79.764,31.97,77.189z\" /><path fill=\"#40396e\" d=\"M27.312,81.957c-0.746,0-1.493-0.131-2.214-0.394c-3.348-1.218-5.08-4.934-3.863-8.281\tc1.052-2.889,7.265-7.173,8.5-8.002c0.396-0.267,0.899-0.327,1.349-0.164c0.45,0.163,0.796,0.532,0.929,0.993\tc0.412,1.429,2.418,8.705,1.367,11.592l0,0c-0.59,1.622-1.776,2.917-3.341,3.646C29.17,81.753,28.242,81.957,27.312,81.957z M29.672,68.994c-2.659,1.961-5.229,4.243-5.618,5.313c-0.652,1.794,0.276,3.784,2.069,4.438c1.794,0.651,3.783-0.275,4.438-2.069\tl0,0C30.949,75.605,30.448,72.205,29.672,68.994z M31.97,77.188h0.01H31.97z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (symbol);

/***/ }),

/***/ "./src/images/icons8-rain-cloud-50.svg":
/*!*********************************************!*\
  !*** ./src/images/icons8-rain-cloud-50.svg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icons8-rain-cloud-50",
  "use": "icons8-rain-cloud-50-usage",
  "viewBox": "0 0 100 100",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" id=\"icons8-rain-cloud-50\"><path d=\"M97.5,41.74c0,2.5-1.46,4.8-3.73,5.87l-3.03,1.45c0.53,1.48,0.58,3.12,0.07,4.66\tc-0.32,0.97-0.81,1.83-1.45,2.55C89.78,57.8,90,59.4,90,61.02c0,8.66-6.16,15.91-14.33,17.6c1.89,5.86,1.26,8.25,1.04,9.09\tc-1.15,4.29-5.1,7.28-9.59,7.28c-0.88,0-1.76-0.11-2.62-0.34c-2.54-0.68-4.68-2.28-6.02-4.51c-0.38-0.62-0.67-1.27-0.9-1.94\tc-0.77,2.37-2.38,4.33-4.59,5.55C51.51,94.57,49.84,95,48.15,95c-0.88,0-1.77-0.12-2.62-0.35c-3.4-0.91-5.92-3.45-6.94-6.54\tc-1.29,4.07-5.11,6.88-9.47,6.88c-0.88,0-1.76-0.11-2.61-0.34c-5.34-1.43-8.52-6.87-7.11-12.12c0.16-0.61,0.55-2.04,2.5-4.35\tC14.13,75.82,8.45,68.6,8.45,60.07c0-9.61,7.18-17.57,16.45-18.77c1.15-2.67,2.72-5.12,4.66-7.28c-0.43-1.4-0.41-2.9,0.07-4.33\tc0.58-1.8,1.9-3.3,3.61-4.14l-1.15-3.69c-0.69-2.24-0.09-4.78,1.53-6.48c0.88-0.93,2.01-1.57,3.27-1.87l0.23-0.05\tc0.42-0.07,0.85-0.11,1.28-0.11c0.79,0,1.54,0.13,2.24,0.38l3.25,1.17c1.15-2.5,3.64-4.15,6.52-4.15c0.86,0,1.71,0.16,2.51,0.46\tl1.66-3.18c0.99-1.89,2.93-3.23,5.05-3.48l0.11-0.02c0.22-0.02,0.43-0.03,0.64-0.03c0.19,0,0.38,0.01,0.57,0.03\tc2.31,0.18,3.068,3.682,4.078,5.772l2.762,0.808c0.72-0.24,1.47-0.36,2.23-0.36c2.79,0,3.636,1.733,4.816,4.163l4.484-1.163\tc0.74-0.28,1.51-0.42,2.29-0.42c1.01,0,2.02,0.25,2.93,0.7c3.05,1.6,4.39,5.07,3.24,8.16l-1.1,3.12c1.94,0.78,3.44,2.35,4.12,4.4\tc0.51,1.56,0.47,3.22-0.07,4.7l3.06,1.45C96.04,36.92,97.5,39.23,97.5,41.74z\" opacity=\".35\" /><path fill=\"#f2f2f2\" d=\"M95.5,39.74c0,2.5-1.46,4.8-3.73,5.87l-3.03,1.45c0.53,1.48,0.58,3.12,0.07,4.66\tc-0.32,0.97-0.81,1.83-1.45,2.55C87.78,55.8,88,57.4,88,59.02c0,8.66-6.16,15.91-14.33,17.6c1.89,5.86,1.26,8.25,1.04,9.09\tc-1.15,4.29-5.1,7.28-9.59,7.28c-0.88,0-1.76-0.11-2.62-0.34c-2.54-0.68-4.68-2.28-6.02-4.51c-0.38-0.62-0.67-1.27-0.9-1.94\tc-0.77,2.37-2.38,4.33-4.59,5.55C49.51,92.57,47.84,93,46.15,93c-0.88,0-1.77-0.12-2.62-0.35c-3.4-0.91-5.92-3.45-6.94-6.54\tc-1.29,4.07-5.11,6.88-9.47,6.88c-0.88,0-1.76-0.11-2.61-0.34c-5.34-1.43-8.52-6.87-7.11-12.12c0.16-0.61,0.55-2.04,2.5-4.35\tC12.13,73.82,6.45,66.6,6.45,58.07c0-9.61,7.18-17.57,16.45-18.77c1.15-2.67,2.72-5.12,4.66-7.28c-0.43-1.4-0.41-2.9,0.07-4.33\tc0.58-1.8,1.9-3.3,3.61-4.14l-1.15-3.69c-0.69-2.24-0.09-4.78,1.53-6.48c0.88-0.93,2.01-1.57,3.27-1.87l0.23-0.05\tc0.42-0.07,0.85-0.11,1.28-0.11c0.79,0,1.54,0.13,2.24,0.38l3.25,1.17c1.15-2.5,3.64-4.15,6.52-4.15c0.86,0,1.71,0.16,2.51,0.46\tl1.66-3.18c0.99-1.89,2.93-3.23,5.05-3.48l0.11-0.02c0.22-0.02,0.43-0.03,0.64-0.03c0.19,0,0.38,0.01,0.57,0.03\tc2.31,0.18,4.36,1.58,5.37,3.67l1.47,2.91c0.72-0.24,1.47-0.36,2.23-0.36c2.79,0,5.29,1.64,6.47,4.07l2.83-1.07\tc0.74-0.28,1.51-0.42,2.29-0.42c1.01,0,2.02,0.25,2.93,0.7c3.05,1.6,4.39,5.07,3.24,8.16l-1.1,3.12c1.94,0.78,3.44,2.35,4.12,4.4\tc0.51,1.56,0.47,3.22-0.07,4.7l3.06,1.45C94.04,34.92,95.5,37.23,95.5,39.74z\" /><path fill=\"#f9b84f\" d=\"M79.774,45.986l-0.428-0.893c-0.002-0.086,0.004-0.173,0.022-0.259\tc0.071-0.355,0.305-0.655,0.631-0.81l9-4.287l-9-4.287c-0.325-0.155-0.559-0.455-0.631-0.81c-0.018-0.086-0.024-0.173-0.022-0.259\tl0.428-0.893l2.722-3.077c0.231-0.261,0.171-0.545,0.135-0.655c-0.036-0.11-0.158-0.375-0.497-0.445l-4.75-0.984\tc-0.325-0.067-0.604-0.273-0.766-0.562c-0.162-0.29-0.191-0.637-0.08-0.951l3.153-8.874c0.01-0.028,0.003-0.061-0.085-0.107\tl-8.503,3.2c-0.13,0.049-0.266,0.073-0.401,0.073c-0.191,0-0.382-0.048-0.553-0.143c-0.292-0.162-0.5-0.445-0.567-0.775\tl-0.903-4.405c-0.076-0.368-0.395-0.535-0.66-0.535c-0.162,0-0.308,0.058-0.435,0.171l-2.95,2.637\tc-0.211,0.189-0.482,0.29-0.76,0.29c-0.071,0-0.142-0.007-0.213-0.02c-0.349-0.066-0.646-0.291-0.807-0.609l-4.375-8.671\tc-0.013-0.027-0.039-0.043-0.069-0.044c-0.003,0-0.005,0-0.008-0.001c-0.026,0.003-0.051,0.019-0.063,0.043l-4.62,8.826\tc-0.164,0.313-0.462,0.533-0.808,0.596c-0.068,0.013-0.136,0.019-0.204,0.019c-0.278,0-0.549-0.102-0.76-0.29l-3.103-2.775\tc-0.127-0.113-0.273-0.171-0.435-0.171c-0.265,0-0.584,0.168-0.66,0.535l-0.905,4.409c-0.067,0.326-0.271,0.607-0.559,0.77\tc-0.174,0.098-0.366,0.148-0.561,0.148c-0.13,0-0.26-0.022-0.385-0.067l-8.927-3.205l-0.082,0.017\tc-0.021,0.021-0.028,0.053-0.02,0.081l2.806,9.088c0.095,0.31,0.057,0.646-0.107,0.925c-0.165,0.279-0.439,0.476-0.754,0.541\tl-3.962,0.82c-0.34,0.07-0.461,0.335-0.497,0.445c-0.036,0.11-0.095,0.395,0.135,0.655l2.039,2.306l0.98,1.636l8.24,18.145\tl32.029-0.385c0,0-0.157-0.899,0.168-0.965l4.75-0.984c0.34-0.07,0.461-0.335,0.497-0.445c0.036-0.11,0.096-0.395-0.135-0.655\tL79.774,45.986z\" /><circle cx=\"58.4\" cy=\"39.997\" r=\"12.5\" fill=\"#ffc571\" /><path fill=\"#94cfff\" d=\"M80,59.02c0,5.5-4.475,9.975-9.975,9.975c-0.067,0-0.133-0.01-0.19-0.01l-0.228-0.01\tc-0.019-0.01-0.038-0.01-0.057-0.01c-0.086,0-0.161,0.01-0.247,0.029H25.375c-6.023,0-10.925-4.902-10.925-10.925\tc0-6.023,4.902-10.925,10.925-10.925c0.656,0,1.349,0.067,2.043,0.199c0.76,0.152,1.501-0.351,1.663-1.121\tc1.776-8.825,9.604-15.228,18.62-15.228c9.737,0,17.86,7.296,18.886,16.967c0.047,0.389,0.247,0.75,0.56,0.988\tc0.323,0.238,0.722,0.333,1.112,0.266c0.627-0.114,1.206-0.171,1.767-0.171C75.525,49.045,80,53.519,80,59.02z\" /><path fill=\"#40396e\" d=\"M70.025,71.994c-0.114,0-0.227-0.006-0.334-0.015H69.69c-0.006,0-0.037-0.001-0.078-0.003\tc-0.099,0.013-0.194,0.018-0.31,0.018H25.375c-7.678,0-13.925-6.247-13.925-13.925c0-8.042,6.837-14.548,15.029-13.879\tc1.228-4.515,3.854-8.484,7.542-11.408l-1.219-1.377c-0.516-0.584-0.679-1.375-0.437-2.116c0.245-0.747,0.85-1.288,1.619-1.447\tl3.582-0.742l-2.694-8.722c-0.16-0.52-0.006-1.166,0.369-1.56c0.212-0.222,0.486-0.373,0.787-0.434\tc0.269-0.057,0.628-0.051,0.887,0.041l8.538,3.065l0.822-4.011c0.212-1.022,1.087-1.734,2.13-1.734c0.529,0,1.023,0.189,1.429,0.548\tl2.765,2.473l4.407-8.419c0.23-0.44,0.728-0.781,1.221-0.838c0.103-0.012,0.204-0.013,0.307-0.004\tc0.562,0.045,1.064,0.392,1.304,0.907l4.145,8.211l2.6-2.325c0.411-0.363,0.905-0.553,1.436-0.553c1.028,0,1.924,0.73,2.129,1.736\tl0.819,3.997l8.11-3.052c0.4-0.148,0.845-0.122,1.223,0.074c0.844,0.441,1.037,1.324,0.793,1.969l-3.008,8.469l4.354,0.902\tc0.769,0.159,1.373,0.7,1.618,1.447c0.242,0.741,0.079,1.532-0.437,2.115l-2.557,2.892l8.58,4.086\tc0.522,0.249,0.855,0.776,0.855,1.354s-0.333,1.105-0.854,1.354l-8.582,4.087l2.558,2.891c0.516,0.584,0.679,1.375,0.437,2.116\tc-0.248,0.749-0.852,1.288-1.618,1.447L80.9,51.95c1.366,2.089,2.1,4.527,2.1,7.069C83,66.174,77.18,71.994,70.025,71.994z M69.208,69.005c0,0-0.001,0-0.002,0C69.207,69.005,69.208,69.005,69.208,69.005z M69.535,68.974c0.041,0,0.081,0.002,0.118,0.005\tl0.372,0.016c5.5,0,9.975-4.475,9.975-9.975c0-2.625-1.02-5.107-2.871-6.989c-0.385-0.392-0.525-0.962-0.366-1.487\ts0.594-0.922,1.131-1.033l2.531-0.524l-1.774-2.006c-0.091-0.104-0.168-0.22-0.229-0.345l-0.429-0.893\tc-0.092-0.192-0.143-0.402-0.147-0.615c-0.004-0.2,0.014-0.398,0.052-0.591c0.164-0.813,0.708-1.511,1.457-1.867l6.156-2.933\tl-6.156-2.932c-0.749-0.356-1.294-1.056-1.457-1.87c-0.038-0.187-0.056-0.387-0.052-0.588c0.005-0.213,0.056-0.423,0.147-0.615\tl0.429-0.893c0.061-0.125,0.138-0.24,0.229-0.345l1.774-2.006l-3.346-0.693c-0.748-0.152-1.396-0.627-1.771-1.3\tc-0.373-0.667-0.439-1.463-0.184-2.184l2.128-5.991l-5.622,2.115c-0.69,0.265-1.536,0.212-2.21-0.162\tc-0.679-0.379-1.155-1.029-1.31-1.787l-0.611-2.982l-1.866,1.669c-0.61,0.545-1.451,0.781-2.259,0.625\tc-0.806-0.153-1.486-0.666-1.859-1.404l-3.132-6.206l-3.338,6.376c-0.382,0.729-1.063,1.23-1.87,1.376\tc-0.775,0.149-1.623-0.089-2.229-0.626l-2.022-1.81l-0.612,2.989c-0.155,0.752-0.626,1.397-1.29,1.774\tc-0.666,0.374-1.466,0.443-2.182,0.19l-6.261-2.247l1.968,6.37c0.218,0.713,0.128,1.486-0.247,2.126\tc-0.382,0.646-1.018,1.102-1.745,1.252l-2.557,0.529l1.092,1.234c0.054,0.062,0.103,0.126,0.146,0.195l0.214,0.34\tc0.43,0.684,0.242,1.584-0.425,2.039c-4.123,2.808-6.939,7.02-7.931,11.86c-0.164,0.801-0.945,1.325-1.743,1.174\tc-0.668-0.124-1.333-0.187-1.976-0.187c-6.024,0-10.925,4.9-10.925,10.925s4.9,10.925,10.925,10.925h43.896\tC69.355,68.981,69.448,68.974,69.535,68.974z M81.372,50.056h0.01H81.372z M77.684,26.856h0.002\tC77.686,26.856,77.685,26.856,77.684,26.856z M70.569,19.629c-0.002,0.001-0.003,0.001-0.005,0.002L70.569,19.629z M78.276,17.437\tc-0.008,0.019-0.014,0.037-0.021,0.056L78.276,17.437z M58.399,9h0.01H58.399z\" /><path fill=\"#d9eeff\" d=\"M68.429,84.027c-0.481,1.795-2.383,2.844-4.251,2.343c-1.868-0.5-2.991-2.36-2.51-4.155 c0.481-1.795,5.122-5.592,5.122-5.592S68.91,82.231,68.429,84.027z\" /><path fill=\"#40396e\" d=\"M68.192,76.093c-0.171-0.452-0.549-0.794-1.016-0.919c-0.465-0.125-0.964-0.019-1.338,0.288 c-1.176,0.963-5.058,4.267-5.62,6.364c-0.339,1.267-0.147,2.59,0.539,3.728c0.675,1.117,1.752,1.922,3.032,2.266 c0.443,0.118,0.888,0.175,1.325,0.175c2.19,0,4.185-1.421,4.763-3.58C70.44,82.315,68.729,77.514,68.192,76.093z M66.979,83.638 c-0.267,0.992-1.35,1.569-2.413,1.283c-0.527-0.141-0.968-0.468-1.24-0.919c-0.262-0.432-0.336-0.929-0.209-1.399 c0.145-0.533,1.4-1.937,2.978-3.39C66.735,81.261,67.121,83.104,66.979,83.638z\" /><path fill=\"#d9eeff\" d=\"M49.457,84.027c-0.481,1.795-2.383,2.844-4.251,2.343c-1.868-0.5-2.991-2.36-2.51-4.155 c0.481-1.795,5.122-5.592,5.122-5.592S49.938,82.231,49.457,84.027z\" /><path fill=\"#40396e\" d=\"M49.221,76.093c-0.171-0.452-0.549-0.794-1.016-0.919c-0.465-0.125-0.964-0.019-1.338,0.288 c-1.176,0.963-5.058,4.266-5.621,6.365c-0.693,2.59,0.909,5.277,3.572,5.992c0.441,0.118,0.89,0.177,1.334,0.177 c0.844,0,1.675-0.211,2.424-0.624c1.163-0.641,1.99-1.691,2.33-2.957C51.469,82.316,49.758,77.515,49.221,76.093z M48.008,83.638 c-0.126,0.47-0.438,0.864-0.881,1.107c-0.461,0.256-1.006,0.319-1.532,0.176c-1.065-0.285-1.716-1.325-1.45-2.317 c0.145-0.533,1.4-1.937,2.979-3.391C47.764,81.261,48.149,83.104,48.008,83.638z\" /><path fill=\"#d9eeff\" d=\"M30.436,84.027c-0.481,1.795-2.383,2.844-4.251,2.343c-1.868-0.5-2.991-2.36-2.51-4.155 c0.481-1.795,5.122-5.592,5.122-5.592S30.917,82.231,30.436,84.027z\" /><path fill=\"#40396e\" d=\"M30.2,76.09c-0.17-0.45-0.55-0.79-1.01-0.92c-0.47-0.12-0.97-0.01-1.34,0.29 c-1.18,0.96-5.06,4.27-5.62,6.37c-0.7,2.59,0.9,5.27,3.57,5.99c0.44,0.12,0.88,0.17,1.32,0.17c2.19,0,4.19-1.42,4.77-3.57v-0.01 C32.45,82.32,30.74,77.51,30.2,76.09z M28.99,83.64c-0.27,0.99-1.36,1.57-2.42,1.28c-1.06-0.28-1.71-1.32-1.45-2.32 c0.15-0.53,1.4-1.93,2.98-3.39c0.55,1.77,0.92,3.38,0.92,4.14C29.02,83.47,29.01,83.57,28.99,83.64z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (symbol);

/***/ }),

/***/ "./src/images/icons8-snow-50.svg":
/*!***************************************!*\
  !*** ./src/images/icons8-snow-50.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icons8-snow-50",
  "use": "icons8-snow-50-usage",
  "viewBox": "0 0 100 100",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" id=\"icons8-snow-50\"><path d=\"M91.992,76c0.261-0.529,0.471-1.087,0.627-1.67c0.623-2.322,0.305-4.748-0.896-6.829c-1.507-2.611-4.24-4.292-7.23-4.482 c-0.262-0.393-0.565-0.756-0.884-1.102C89.766,58.77,94,52.377,94,45c0-7.993-4.961-14.848-11.965-17.65 C80.023,26.545,76.279,27.067,74,27c-1.619-3.459-2.406-7.468-5.264-9.87C64.153,13.276,58.266,11,52,11 c-10.174,0-19.349,6.001-23.563,15.008C18.22,26.308,10,34.712,10,45c0,4.149,1.34,7.987,3.608,11.112 C15.372,58.541,18.306,58.623,21,60c-0.319,0.346-1.23,2.624-1.492,3.018c-2.989,0.19-5.724,1.872-7.232,4.485 c-1.2,2.081-1.518,4.506-0.895,6.828c0.156,0.582,0.366,1.141,0.627,1.669c-0.261,0.529-0.471,1.087-0.627,1.67 c-0.623,2.322-0.305,4.748,0.896,6.829c1.507,2.611,4.24,4.292,7.23,4.482C21.122,91.402,23.878,93,27,93s5.878-1.599,7.493-4.02 c2.987-0.191,5.72-1.87,7.231-4.483c1.2-2.081,1.518-4.506,0.895-6.828c-0.156-0.582-0.366-1.141-0.627-1.669 c0.261-0.529,0.471-1.087,0.627-1.67c0.419-1.563,0.402-3.171-0.014-4.691c0.617,0.177,1.251,0.302,1.902,0.343 C46.123,72.402,48.878,74,52,74s5.878-1.598,7.492-4.019c0.651-0.042,1.285-0.166,1.902-0.344 c-0.416,1.521-0.433,3.129-0.013,4.693c0.156,0.582,0.366,1.141,0.627,1.669c-0.261,0.529-0.471,1.087-0.627,1.67 c-0.623,2.322-0.305,4.748,0.896,6.829c1.507,2.611,4.24,4.292,7.23,4.482C71.122,91.402,73.878,93,77,93s5.878-1.599,7.493-4.02 c2.987-0.191,5.72-1.87,7.231-4.483c1.2-2.081,1.518-4.506,0.895-6.828C92.463,77.087,92.253,76.528,91.992,76z\" opacity=\".35\" /><path fill=\"#f2f2f2\" d=\"M89.992,74c0.261-0.529,0.471-1.087,0.627-1.67c0.623-2.322,0.305-4.748-0.896-6.829 c-1.507-2.611-4.24-4.292-7.23-4.482c-0.262-0.393-0.565-0.756-0.884-1.102C87.766,56.77,92,50.377,92,43 c0-10.288-8.22-18.692-18.437-18.992C69.349,15.001,60.174,9,50,9s-19.349,6.001-23.563,15.008C16.22,24.308,8,32.712,8,43 c0,7.376,4.234,13.769,10.392,16.916c-0.319,0.346-0.622,0.708-0.884,1.102c-2.989,0.19-5.724,1.872-7.232,4.485 c-1.2,2.081-1.518,4.506-0.895,6.828c0.156,0.582,0.366,1.141,0.627,1.669c-0.261,0.529-0.471,1.087-0.627,1.67 c-0.623,2.322-0.305,4.748,0.896,6.829c1.507,2.611,4.24,4.292,7.23,4.482C19.122,89.402,21.878,91,25,91s5.878-1.599,7.493-4.02 c2.987-0.191,5.72-1.87,7.231-4.483c1.2-2.081,1.518-4.506,0.895-6.828c-0.156-0.582-0.366-1.141-0.627-1.669 c0.261-0.529,0.471-1.087,0.627-1.67c0.419-1.563,0.402-3.171-0.014-4.691c0.617,0.177,1.251,0.302,1.902,0.343 C44.123,70.402,46.878,72,50,72s5.878-1.598,7.492-4.019c0.651-0.042,1.285-0.166,1.902-0.344 c-0.416,1.521-0.433,3.129-0.013,4.693c0.156,0.582,0.366,1.141,0.627,1.669c-0.261,0.529-0.471,1.087-0.627,1.67 c-0.623,2.322-0.305,4.748,0.896,6.829c1.507,2.611,4.24,4.292,7.23,4.482C69.122,89.402,71.878,91,75,91s5.878-1.599,7.493-4.02 c2.987-0.191,5.72-1.87,7.231-4.483c1.2-2.081,1.518-4.506,0.895-6.828C90.463,75.087,90.253,74.528,89.992,74z\" /><path fill=\"#d9eeff\" d=\"M57.794,50.5L57.794,50.5c-0.592-1.025-1.902-1.376-2.927-0.784l-2.724,1.573v-3.146 C52.143,46.959,51.183,46,50,46h0c-1.183,0-2.143,0.959-2.143,2.143v3.146l-2.724-1.573c-1.025-0.592-2.335-0.241-2.927,0.784l0,0 c-0.592,1.025-0.241,2.335,0.784,2.927L45.714,55l-2.724,1.573c-1.025,0.592-1.376,1.902-0.784,2.927l0,0 c0.592,1.025,1.902,1.376,2.927,0.784l2.724-1.573v3.146C47.857,63.041,48.817,64,50,64h0c1.183,0,2.143-0.959,2.143-2.143v-3.146 l2.724,1.573c1.025,0.592,2.335,0.241,2.927-0.784l0,0c0.592-1.025,0.241-2.335-0.784-2.927L54.286,55l2.724-1.573 C58.035,52.835,58.386,51.525,57.794,50.5z\" /><path fill=\"#94cfff\" d=\"M73,29c-1.359,0-2.663,0.224-3.888,0.624C67.315,20.712,59.442,14,50,14 s-17.315,6.712-19.112,15.624C29.663,29.224,28.359,29,27,29c-6.904,0-12.5,5.596-12.5,12.5S20.096,54,27,54c0.169,0,45.831,0,46,0 c6.904,0,12.5-5.596,12.5-12.5S79.904,29,73,29z\" /><path fill=\"#40396e\" d=\"M50,67c-2.206,0-4-1.794-4-4v-1.071l-0.928,0.535c-1.91,1.105-4.362,0.446-5.465-1.464 c-0.738-1.28-0.688-2.803,0.002-4H27c-7.72,0-14-6.28-14-14s6.28-14,14-14c0.937,0,1.87,0.095,2.79,0.283 C32.315,20.339,40.574,14,50,14s17.685,6.339,20.21,15.283C71.13,29.095,72.063,29,73,29c7.72,0,14,6.28,14,14s-6.28,14-14,14 H60.392c0.688,1.197,0.739,2.72,0.002,3.999c-1.105,1.91-3.554,2.569-5.466,1.465L54,61.929V63C54,65.206,52.206,67,50,67z M47.5,57.83c0.259,0,0.518,0.067,0.75,0.201C48.714,58.299,49,58.794,49,59.33V63c0,0.552,0.448,1,1,1s1-0.448,1-1v-3.67 c0-0.536,0.286-1.031,0.75-1.299c0.465-0.268,1.035-0.268,1.5,0l3.178,1.835c0.477,0.274,1.09,0.111,1.367-0.366 c0.275-0.478,0.11-1.09-0.367-1.366l-2.312-1.335c-0.588-0.34-0.875-1.031-0.699-1.688C54.593,54.456,55.188,54,55.866,54H73 c6.065,0,11-4.935,11-11s-4.935-11-11-11c-1.154,0-2.306,0.185-3.422,0.55c-0.405,0.134-0.851,0.086-1.222-0.13 c-0.37-0.216-0.63-0.579-0.715-0.999C65.956,23.064,58.537,17,50,17s-15.956,6.064-17.642,14.421 c-0.085,0.42-0.345,0.783-0.715,0.999c-0.372,0.217-0.816,0.264-1.222,0.13C29.306,32.185,28.154,32,27,32c-6.065,0-11,4.935-11,11 s4.935,11,11,11h17.134c0.679,0,1.273,0.456,1.449,1.111c0.176,0.656-0.111,1.348-0.699,1.688l-2.312,1.335 c-0.478,0.276-0.643,0.889-0.366,1.367c0.274,0.476,0.888,0.64,1.366,0.365l3.178-1.835C46.982,57.897,47.241,57.83,47.5,57.83z\" /><path fill=\"#d9eeff\" d=\"M34.093,68.75L34.093,68.75c-0.69-1.196-2.219-1.605-3.415-0.915L27.5,69.67V66 c0-1.381-1.119-2.5-2.5-2.5h0c-1.381,0-2.5,1.119-2.5,2.5v3.67l-3.178-1.835c-1.196-0.69-2.725-0.281-3.415,0.915l0,0 c-0.69,1.196-0.281,2.725,0.915,3.415L20,74l-3.178,1.835c-1.196,0.69-1.605,2.219-0.915,3.415l0,0 c0.69,1.196,2.219,1.605,3.415,0.915L22.5,78.33V82c0,1.381,1.119,2.5,2.5,2.5h0c1.381,0,2.5-1.119,2.5-2.5v-3.67l3.178,1.835 c1.196,0.69,2.725,0.281,3.415-0.915l0,0c0.69-1.196,0.281-2.725-0.915-3.415L30,74l3.178-1.835 C34.374,71.475,34.784,69.946,34.093,68.75z\" /><path fill=\"#40396e\" d=\"M25,86c-2.206,0-4-1.794-4-4v-1.071l-0.928,0.535c-1.91,1.104-4.362,0.446-5.465-1.464 c-1.103-1.911-0.445-4.362,1.465-5.464L17,74l-0.928-0.536c-1.91-1.102-2.567-3.553-1.466-5.463 c1.104-1.911,3.552-2.57,5.466-1.465L21,67.071V66c0-2.206,1.794-4,4-4s4,1.794,4,4v1.071l0.928-0.535 c0.926-0.534,2.004-0.677,3.036-0.399c1.032,0.276,1.895,0.938,2.429,1.864h0.001c1.102,1.91,0.444,4.361-1.466,5.463L33,74 l0.928,0.536c1.91,1.102,2.567,3.553,1.466,5.463c-1.104,1.909-3.553,2.568-5.466,1.465L29,80.929V82C29,84.206,27.206,86,25,86z M22.5,76.83c0.259,0,0.518,0.067,0.75,0.201C23.714,77.299,24,77.794,24,78.33V82c0,0.552,0.448,1,1,1s1-0.448,1-1v-3.67 c0-0.536,0.286-1.031,0.75-1.299c0.465-0.268,1.035-0.268,1.5,0l3.178,1.835c0.477,0.275,1.09,0.111,1.367-0.366 c0.275-0.478,0.11-1.09-0.367-1.366l-3.178-1.835C28.786,75.031,28.5,74.536,28.5,74s0.286-1.031,0.75-1.299l3.178-1.835 c0.478-0.275,0.642-0.889,0.367-1.366l0,0c-0.277-0.479-0.891-0.643-1.367-0.366l-3.178,1.835c-0.465,0.268-1.035,0.268-1.5,0 C26.286,70.701,26,70.206,26,69.67V66c0-0.552-0.448-1-1-1s-1,0.448-1,1v3.67c0,0.536-0.286,1.031-0.75,1.299 c-0.465,0.268-1.035,0.268-1.5,0l-3.178-1.835c-0.233-0.135-0.505-0.17-0.759-0.1c-0.259,0.069-0.474,0.234-0.606,0.465 c-0.135,0.232-0.17,0.502-0.101,0.76c0.068,0.258,0.234,0.474,0.466,0.607l3.178,1.835c0.464,0.268,0.75,0.763,0.75,1.299 s-0.286,1.031-0.75,1.299l-3.178,1.835c-0.478,0.276-0.643,0.889-0.366,1.367c0.275,0.477,0.889,0.641,1.366,0.365l3.178-1.835 C21.982,76.897,22.241,76.83,22.5,76.83z\" /><g><path fill=\"#d9eeff\" d=\"M84.093,68.75L84.093,68.75c-0.69-1.196-2.219-1.605-3.415-0.915L77.5,69.67V66 c0-1.381-1.119-2.5-2.5-2.5l0,0c-1.381,0-2.5,1.119-2.5,2.5v3.67l-3.178-1.835c-1.196-0.69-2.725-0.281-3.415,0.915v0 c-0.69,1.196-0.281,2.725,0.915,3.415L70,74l-3.178,1.835c-1.196,0.69-1.605,2.219-0.915,3.415v0 c0.69,1.196,2.219,1.605,3.415,0.915L72.5,78.33V82c0,1.381,1.119,2.5,2.5,2.5l0,0c1.381,0,2.5-1.119,2.5-2.5v-3.67l3.178,1.835 c1.196,0.69,2.725,0.281,3.415-0.915v0c0.69-1.196,0.281-2.725-0.915-3.415L80,74l3.178-1.835 C84.374,71.475,84.784,69.946,84.093,68.75z\" /><path fill=\"#40396e\" d=\"M75,86c-2.206,0-4-1.794-4-4v-1.071l-0.928,0.535C68.161,82.568,65.71,81.91,64.607,80 c-1.103-1.911-0.445-4.362,1.465-5.464L67,74l-0.928-0.536c-1.91-1.102-2.567-3.553-1.466-5.463 c1.104-1.911,3.552-2.57,5.466-1.465L71,67.071V66c0-2.206,1.794-4,4-4s4,1.794,4,4v1.071l0.928-0.535 c0.925-0.534,2.003-0.677,3.036-0.399c1.032,0.276,1.895,0.938,2.429,1.864h0.001c1.102,1.91,0.444,4.361-1.466,5.463L83,74 l0.928,0.536c1.91,1.102,2.567,3.553,1.466,5.463c-1.104,1.909-3.554,2.568-5.466,1.465L79,80.929V82C79,84.206,77.206,86,75,86z M72.5,76.83c0.259,0,0.518,0.067,0.75,0.201C73.714,77.299,74,77.794,74,78.33V82c0,0.552,0.448,1,1,1s1-0.448,1-1v-3.67 c0-0.536,0.286-1.031,0.75-1.299c0.465-0.268,1.035-0.268,1.5,0l3.178,1.835c0.476,0.275,1.091,0.111,1.367-0.366 c0.275-0.478,0.11-1.09-0.367-1.366l-3.178-1.835C78.786,75.031,78.5,74.536,78.5,74s0.286-1.031,0.75-1.299l3.178-1.835 c0.478-0.275,0.642-0.889,0.367-1.366l0,0c-0.276-0.479-0.892-0.643-1.367-0.366l-3.178,1.835c-0.465,0.268-1.035,0.268-1.5,0 C76.286,70.701,76,70.206,76,69.67V66c0-0.552-0.448-1-1-1s-1,0.448-1,1v3.67c0,0.536-0.286,1.031-0.75,1.299 c-0.465,0.268-1.035,0.268-1.5,0l-3.178-1.835c-0.232-0.135-0.505-0.17-0.759-0.1c-0.259,0.069-0.474,0.234-0.606,0.465 c-0.135,0.232-0.17,0.502-0.101,0.76c0.068,0.258,0.234,0.474,0.466,0.607l3.178,1.835c0.464,0.268,0.75,0.763,0.75,1.299 s-0.286,1.031-0.75,1.299l-3.178,1.835c-0.478,0.276-0.643,0.889-0.366,1.367c0.274,0.477,0.888,0.641,1.366,0.365l3.178-1.835 C71.982,76.897,72.241,76.83,72.5,76.83z\" /></g></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (symbol);

/***/ }),

/***/ "./src/images/icons8-storm-50.svg":
/*!****************************************!*\
  !*** ./src/images/icons8-storm-50.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icons8-storm-50",
  "use": "icons8-storm-50-usage",
  "viewBox": "0 0 100 100",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" id=\"icons8-storm-50\"><path d=\"M75,63h-3.68c0.23,0.97,0.23,1.97,0.01,2.93c0.62-0.19,1.25-0.3,1.9-0.3c0.57,0,1.13,0.07,1.68,0.22\tc2.02,0.54,3.67,2.03,4.4,3.98c2.86,7.57,2.09,10.44,1.84,11.38C80,85.5,76.06,88.5,71.56,88.5c-0.88,0-1.76-0.12-2.61-0.34\tc-2.54-0.69-4.68-2.28-6.03-4.51c-0.96-1.59-1.43-3.37-1.41-5.16L50.92,90.75C49.69,92.18,47.89,93,46,93\tc-1.07,0-2.13-0.27-3.08-0.77c-2.7-1.46-4.01-4.53-3.18-7.48l0.63-2.23c-1.07,1.97-3.02,3.69-4.91,4.74\tc-1.47,0.81-3.15,1.24-4.83,1.24c-0.89,0-1.77-0.12-2.63-0.34c-2.54-0.68-4.67-2.29-6.02-4.52c-1.4-2.31-1.78-5.01-1.09-7.6\tc0.25-0.94,1.02-3.81,7.28-8.94c1.16-0.95,2.62-1.47,4.12-1.47c0.56,0,1.13,0.07,1.68,0.22c1.39,0.37,2.6,1.21,3.47,2.33\tc0.01-0.04,0.02-0.08,0.03-0.11L39.52,63H29c-10.48,0-19-8.52-19-19c0-10.29,8.22-18.69,18.44-18.99C32.65,16,41.83,10,52,10\ts19.35,6,23.56,15.01C85.78,25.31,94,33.71,94,44C94,54.48,85.48,63,75,63z\" opacity=\".35\" /><path fill=\"#f2f2f2\" d=\"M73,61h-3.68c0.23,0.97,0.23,1.97,0.01,2.93c0.62-0.19,1.25-0.3,1.9-0.3c0.57,0,1.13,0.07,1.68,0.22\tc2.02,0.54,3.67,2.03,4.4,3.98c2.86,7.57,2.09,10.44,1.84,11.38C78,83.5,74.06,86.5,69.56,86.5c-0.88,0-1.76-0.12-2.61-0.34\tc-2.54-0.69-4.68-2.28-6.03-4.51c-0.96-1.59-1.43-3.37-1.41-5.16L48.92,88.75C47.69,90.18,45.89,91,44,91\tc-1.07,0-2.13-0.27-3.08-0.77c-2.7-1.46-4.01-4.53-3.18-7.48l0.63-2.23c-1.07,1.97-3.02,3.69-4.91,4.74\tc-1.47,0.81-3.15,1.24-4.83,1.24c-0.89,0-1.77-0.12-2.63-0.34c-2.54-0.68-4.67-2.29-6.02-4.52c-1.4-2.31-1.78-5.01-1.09-7.6\tc0.25-0.94,1.02-3.81,7.28-8.94c1.16-0.95,2.62-1.47,4.12-1.47c0.56,0,1.13,0.07,1.68,0.22c1.39,0.37,2.6,1.21,3.47,2.33\tc0.01-0.04,0.02-0.08,0.03-0.11L37.52,61H27C16.52,61,8,52.48,8,42c0-10.29,8.22-18.69,18.44-18.99C30.65,14,39.83,8,50,8\ts19.35,6,23.56,15.01C83.78,23.31,92,31.71,92,42C92,52.48,83.48,61,73,61z\" /><path fill=\"#94cfff\" d=\"M73,29.5c-1.359,0-2.663,0.224-3.888,0.624C67.315,21.212,59.442,14.5,50,14.5\ts-17.315,6.712-19.112,15.624C29.663,29.724,28.359,29.5,27,29.5c-6.904,0-12.5,5.596-12.5,12.5S20.096,54.5,27,54.5\tc0.169,0,45.831,0,46,0c6.904,0,12.5-5.596,12.5-12.5S79.904,29.5,73,29.5z\" /><polygon fill=\"#ffe385\" points=\"63,62.5 55.5,62.5 58.929,54.5 58.929,53 47.159,53 47.159,54.5 41.5,68.5 48.5,68.5 44,84.5\" /><rect width=\"12.5\" height=\"3\" x=\"46.5\" y=\"53\" fill=\"#40396e\" opacity=\".35\" /><path fill=\"#d9eeff\" d=\"M72.873,77.532c-0.481,1.795-2.383,2.844-4.251,2.343c-1.868-0.5-2.991-2.36-2.51-4.155\tc0.481-1.795,5.122-5.592,5.122-5.592S73.354,75.737,72.873,77.532z\" /><path fill=\"#40396e\" d=\"M72.64,69.6c-0.17-0.45-0.55-0.8-1.02-0.92c-0.47-0.13-0.96-0.02-1.34,0.29\tc-1.17,0.96-5.06,4.26-5.62,6.36c-0.34,1.27-0.15,2.59,0.54,3.73c0.68,1.12,1.75,1.92,3.03,2.26c0.45,0.12,0.89,0.18,1.33,0.18\tc2.19,0,4.18-1.42,4.76-3.58c0.08-0.29,0.11-0.63,0.11-1.01C74.43,74.56,73.1,70.82,72.64,69.6z M71.42,77.14\tc-0.26,1-1.34,1.57-2.41,1.29c-0.53-0.14-0.97-0.47-1.24-0.92c-0.26-0.43-0.34-0.93-0.21-1.4c0.15-0.53,1.4-1.94,2.98-3.39\tC71.18,74.77,71.56,76.61,71.42,77.14z\" /><path fill=\"#d9eeff\" d=\"M31.929,77.532c-0.481,1.795-2.383,2.844-4.251,2.343c-1.868-0.5-2.991-2.36-2.51-4.155\ts5.122-5.592,5.122-5.592S32.41,75.737,31.929,77.532z\" /><path fill=\"#40396e\" d=\"M31.692,69.598c-0.171-0.452-0.549-0.794-1.015-0.919c-0.469-0.125-0.965-0.019-1.339,0.288\tc-1.176,0.963-5.059,4.267-5.62,6.365c-0.339,1.267-0.147,2.59,0.539,3.727c0.676,1.118,1.752,1.923,3.031,2.266\tc0.442,0.118,0.892,0.177,1.337,0.177c0.843,0,1.673-0.21,2.422-0.623c1.163-0.641,1.991-1.691,2.33-2.958\tC33.94,75.821,32.229,71.02,31.692,69.598z M30.479,77.144L30.479,77.144c-0.126,0.471-0.438,0.864-0.88,1.107\tc-0.462,0.256-1.006,0.316-1.534,0.175c-0.527-0.141-0.968-0.467-1.24-0.918c-0.261-0.432-0.335-0.929-0.208-1.399\tc0.145-0.533,1.4-1.938,2.978-3.391C30.235,74.766,30.621,76.609,30.479,77.144z\" /><path fill=\"#40396e\" d=\"M43.999,86c-0.241,0-0.485-0.059-0.709-0.179c-0.619-0.333-0.924-1.051-0.734-1.728L46.52,70H41.5\tc-0.499,0-0.965-0.248-1.243-0.661c-0.279-0.414-0.334-0.938-0.147-1.401L44.935,56H27c-7.72,0-14-6.28-14-14s6.28-14,14-14\tc0.937,0,1.87,0.095,2.79,0.283C32.315,19.339,40.574,13,50,13s17.685,6.339,20.21,15.283C71.13,28.095,72.063,28,73,28\tc7.72,0,14,6.28,14,14s-6.28,14-14,14H59.918l-2.144,5H63c0.587,0,1.12,0.342,1.364,0.876c0.244,0.533,0.154,1.16-0.229,1.604\tl-19,22C44.843,85.819,44.424,86,43.999,86z M43.724,67H48.5c0.47,0,0.912,0.22,1.195,0.594c0.284,0.375,0.376,0.86,0.249,1.313\tl-2.677,9.515L59.723,64H55.5c-0.504,0-0.975-0.253-1.252-0.674c-0.278-0.421-0.325-0.954-0.127-1.417l3.429-8\tC57.786,53.357,58.329,53,58.929,53H73c6.065,0,11-4.935,11-11s-4.935-11-11-11c-1.154,0-2.306,0.185-3.422,0.55\tc-0.405,0.135-0.851,0.085-1.222-0.13c-0.37-0.216-0.63-0.579-0.715-0.999C65.956,22.064,58.537,16,50,16\ts-15.956,6.064-17.642,14.421c-0.085,0.42-0.345,0.783-0.715,0.999c-0.371,0.217-0.816,0.264-1.222,0.13\tC29.306,31.185,28.154,31,27,31c-6.065,0-11,4.935-11,11s4.935,11,11,11h20.158c0.499,0,0.965,0.248,1.243,0.661\tc0.279,0.414,0.334,0.938,0.147,1.401L43.724,67z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (symbol);

/***/ }),

/***/ "./src/images/icons8-sun-50.svg":
/*!**************************************!*\
  !*** ./src/images/icons8-sun-50.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icons8-sun-50",
  "use": "icons8-sun-50-usage",
  "viewBox": "0 0 100 100",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" id=\"icons8-sun-50\"><path d=\"M52.017,98c-2.401,0-4.592-1.288-5.76-3.374l-3.303-5.545c-1.196,0.787-2.596,1.211-4.036,1.211 c-3.487,0-6.528-2.476-7.231-5.887l-0.029-0.146l-6.386,2.059c-0.686,0.232-1.398,0.351-2.121,0.351 c-1.711,0-3.334-0.652-4.569-1.836c-1.815-1.742-2.481-4.314-1.741-6.715l1.977-6.369c-2.444-0.603-2.019-3.686-2.816-6.089 c-0.719-2.167-2.798-3.29-1.55-5.163l-4.514-5.368c-2.159-1.023-5.488-0.81-5.645-3.204L4.27,51.596l0.021-0.327 c0.157-2.394,1.596-4.517,3.754-5.539l6.281-2.977c-1.146-1.839-1.438-4.127-0.744-6.221c0.805-2.428,2.826-4.272,5.307-4.857 l-2.046-6.591c-0.744-2.415-0.076-4.988,1.739-6.727c1.234-1.183,2.857-1.835,4.568-1.835c0.766,0,1.519,0.132,2.237,0.391 l6.274,2.241l0.025-0.119c0.701-3.409,3.742-5.886,7.23-5.886c1.49,0,2.938,0.454,4.159,1.293l3.112-5.913 c1.15-2.178,3.388-3.528,5.844-3.528h0.251l0.117,0.011c7.29,0,10.514,9.235,10.514,9.235c1.154-0.714-0.776,1.519,0.596,1.519 c3.484,0,5.957,3.319,8.358,3.266l0.006,0.028l5.681-2.127c0.78-0.28,1.53-0.411,2.293-0.411c1.764,0,3.422,0.687,4.669,1.935 c1.795,1.79,2.405,4.495,1.551,6.889l-2.2,6.161l0.596,0.122c2.572,0.531,4.684,2.409,5.51,4.902 c0.72,2.171,0.379,4.55-0.874,6.424l5.854,2.773c2.159,1.021,3.598,3.147,3.752,5.548l0.021,0.319l-0.021,0.32 c-0.153,2.396-1.589,4.52-3.746,5.545l-5.989,2.836c1.36,1.903,1.749,4.371,1.004,6.616c-0.828,2.492-2.939,4.369-5.511,4.898 l-0.511,0.105l2.117,5.927c0.853,2.394,0.243,5.098-1.551,6.891c-1.247,1.248-2.905,1.935-4.669,1.935 c-0.733,0-1.456-0.121-2.147-0.359l-5.828-1.921l-0.003,0.018c-0.706,3.411-3.747,5.886-7.231,5.886 c-1.35,0-2.664-0.372-3.808-1.065l-2.952,5.212c-1.113,2.152-3.285,3.51-5.724,3.561L52.102,98H52.017z\" opacity=\".35\" /><path fill=\"#f2f2f2\" d=\"M50.017,96c-2.401,0-4.592-1.288-5.76-3.374l-3.303-5.545c-1.196,0.787-2.596,1.211-4.036,1.211 c-3.487,0-6.528-2.476-7.231-5.887l-0.029-0.146l-6.386,2.059c-0.686,0.232-1.398,0.351-2.121,0.351 c-1.711,0-3.334-0.652-4.569-1.836c-1.815-1.742-2.481-4.314-1.741-6.715l1.977-6.369c-2.444-0.603-4.436-2.434-5.233-4.837 c-0.719-2.167-0.381-4.543,0.867-6.416l-6.404-3.033c-2.159-1.023-3.598-3.146-3.755-5.539L2.27,49.596l0.021-0.327 c0.157-2.394,1.596-4.517,3.754-5.539l6.281-2.977c-1.146-1.839-1.438-4.127-0.744-6.221c0.805-2.428,2.826-4.272,5.307-4.857 l-2.046-6.591c-0.744-2.415-0.076-4.988,1.739-6.727c1.234-1.183,2.857-1.835,4.568-1.835c0.766,0,1.519,0.132,2.237,0.391 l6.274,2.241l0.025-0.119c0.701-3.409,3.742-5.886,7.23-5.886c1.49,0,2.938,0.454,4.159,1.293l3.112-5.913 c1.15-2.178,3.388-3.528,5.844-3.528h0.251l0.117,0.011c2.396,0.132,4.504,1.526,5.562,3.688l2.814,5.548 c1.154-0.714,2.488-1.098,3.86-1.098c3.484,0,6.525,2.475,7.23,5.883l0.006,0.028l5.681-2.127c0.78-0.28,1.53-0.411,2.293-0.411 c1.764,0,3.422,0.687,4.669,1.935c1.795,1.79,2.405,4.495,1.551,6.889l-2.2,6.161l0.596,0.122c2.572,0.531,4.684,2.409,5.51,4.902 c0.72,2.171,0.379,4.55-0.874,6.424l5.854,2.773c2.159,1.021,3.598,3.147,3.752,5.548l0.021,0.319l-0.021,0.32 c-0.153,2.396-1.589,4.52-3.746,5.545l-5.989,2.836c1.36,1.903,1.749,4.371,1.004,6.616c-0.828,2.492-2.939,4.369-5.511,4.898 l-0.511,0.105l2.117,5.927c0.853,2.394,0.243,5.098-1.551,6.891c-1.247,1.248-2.905,1.935-4.669,1.935 c-0.733,0-1.456-0.121-2.147-0.359l-5.828-1.921l-0.003,0.018c-0.706,3.411-3.747,5.886-7.231,5.886 c-1.35,0-2.664-0.372-3.808-1.065l-2.952,5.212c-1.113,2.152-3.285,3.51-5.724,3.561L50.102,96H50.017z\" /><path fill=\"#f9b84f\" d=\"M50.017,89.5c-0.038,0-0.074-0.021-0.092-0.055l-6.441-10.821c-0.229-0.385-0.618-0.646-1.06-0.715 c-0.077-0.012-0.153-0.018-0.229-0.018c-0.365,0-0.721,0.133-0.997,0.379l-3.709,3.299c-0.166,0.147-0.358,0.223-0.57,0.223 c-0.348,0-0.766-0.219-0.865-0.698l-1.156-5.605c-0.086-0.418-0.346-0.778-0.713-0.993c-0.232-0.135-0.493-0.204-0.756-0.204 c-0.154,0-0.31,0.023-0.46,0.072l-11.738,3.784l-0.15-0.007c-0.029-0.028-0.04-0.069-0.027-0.109l3.605-11.616 c0.125-0.404,0.074-0.843-0.141-1.207c-0.216-0.364-0.574-0.621-0.989-0.706l-5.123-1.057c-0.445-0.092-0.604-0.437-0.651-0.58 c-0.048-0.144-0.127-0.515,0.176-0.855l3.746-4.211c0.313-0.354,0.443-0.833,0.349-1.296c-0.094-0.463-0.4-0.854-0.828-1.057 L8.844,49.596l12.195-5.777c0.427-0.202,0.733-0.594,0.827-1.057c0.095-0.463-0.035-0.942-0.349-1.296l-3.588-4.035 c-0.303-0.34-0.225-0.711-0.178-0.854c0.048-0.145,0.207-0.489,0.652-0.581l5.196-1.07c0.414-0.085,0.773-0.342,0.989-0.706 c0.215-0.364,0.266-0.803,0.141-1.207l-3.68-11.854c-0.011-0.036-0.001-0.078,0.026-0.105l0.107-0.022l11.708,4.181 c0.164,0.058,0.335,0.087,0.505,0.087c0.255,0,0.508-0.064,0.735-0.192c0.378-0.213,0.646-0.579,0.733-1.005l1.187-5.752 c0.1-0.479,0.518-0.698,0.865-0.698c0.212,0,0.404,0.075,0.57,0.223l4.069,3.62c0.277,0.246,0.633,0.379,0.997,0.379 c0.089,0,0.179-0.008,0.268-0.024c0.454-0.082,0.845-0.369,1.06-0.777l6.06-11.513c0.017-0.03,0.049-0.052,0.083-0.056 c0.004,0.001,0.007,0.001,0.011,0.001c0.04,0.001,0.074,0.022,0.091,0.058l5.738,11.311c0.211,0.415,0.602,0.709,1.059,0.795 c0.093,0.018,0.187,0.026,0.279,0.026c0.364,0,0.72-0.133,0.997-0.379l3.868-3.44c0.166-0.147,0.358-0.223,0.57-0.223 c0.348,0,0.766,0.219,0.865,0.698l1.185,5.746c0.088,0.43,0.36,0.799,0.743,1.011c0.225,0.124,0.475,0.187,0.726,0.187 c0.178,0,0.355-0.031,0.526-0.096l11.151-4.174c0.115,0.061,0.125,0.103,0.111,0.14l-4.135,11.576 c-0.146,0.409-0.107,0.861,0.105,1.24c0.213,0.378,0.579,0.646,1.005,0.733l6.229,1.284c0.445,0.092,0.604,0.438,0.652,0.581 s0.126,0.515-0.177,0.854l-3.754,4.221c-0.313,0.354-0.443,0.833-0.349,1.296c0.094,0.463,0.4,0.854,0.827,1.057l11.804,5.592 l-11.96,5.665c-0.427,0.202-0.733,0.594-0.827,1.057c-0.095,0.463,0.035,0.942,0.349,1.296l3.91,4.396 c0.303,0.34,0.225,0.712,0.177,0.855s-0.207,0.488-0.652,0.58l-6.146,1.268c-0.426,0.087-0.792,0.355-1.005,0.733 c-0.213,0.379-0.251,0.831-0.105,1.24l4.052,11.344c0.014,0.037,0.005,0.079-0.024,0.108c-0.001-0.001-0.143,0.013-0.144,0.012 l-11.199-3.692c-0.153-0.05-0.312-0.075-0.47-0.075c-0.261,0-0.521,0.068-0.751,0.201c-0.37,0.215-0.632,0.577-0.718,0.996 l-1.137,5.514c-0.1,0.479-0.518,0.698-0.865,0.698c-0.212,0-0.404-0.074-0.57-0.223l-3.603-3.204 c-0.277-0.246-0.633-0.379-0.997-0.379c-0.082,0-0.164,0.007-0.245,0.021c-0.447,0.074-0.837,0.346-1.061,0.74L50.16,89.344 c-0.018,0.032-0.035,0.065-0.051,0.099s-0.048,0.055-0.084,0.058H50.017z\" /><path fill=\"#40396e\" d=\"M51.269,10.256h0.005H51.269 M50.01,12.647l4.517,8.901c0.421,0.83,1.203,1.417,2.117,1.59 c0.186,0.035,0.372,0.052,0.558,0.052c0.729,0,1.44-0.266,1.994-0.758l3.057-2.718l0.965,4.682 c0.177,0.858,0.721,1.597,1.488,2.02c0.449,0.248,0.949,0.374,1.451,0.374c0.355,0,0.712-0.063,1.052-0.19l8.314-3.113 l-3.124,8.746c-0.292,0.818-0.215,1.722,0.21,2.479s1.159,1.292,2.009,1.468l5.166,1.065l-3.032,3.409 c-0.628,0.706-0.887,1.666-0.698,2.592c0.188,0.926,0.802,1.709,1.656,2.113l8.941,4.235l-9.098,4.31 c-0.854,0.404-1.467,1.187-1.656,2.113s0.07,1.886,0.698,2.592l3.189,3.585l-5.083,1.048c-0.851,0.175-1.583,0.711-2.009,1.468 c-0.426,0.757-0.502,1.661-0.21,2.479l3.091,8.654l-8.525-2.81c-0.306-0.101-0.623-0.151-0.939-0.151 c-0.522,0-1.041,0.136-1.502,0.403c-0.741,0.429-1.263,1.153-1.436,1.991l-0.917,4.45l-2.791-2.482 c-0.553-0.492-1.264-0.758-1.994-0.758c-0.163,0-0.327,0.013-0.491,0.04c-0.894,0.148-1.673,0.693-2.12,1.481l-4.872,8.603 l-5.213-8.754c-0.458-0.769-1.235-1.293-2.119-1.43c-0.153-0.024-0.306-0.035-0.458-0.035c-0.73,0-1.441,0.266-1.994,0.758 l-2.898,2.577l-0.936-4.542c-0.172-0.835-0.691-1.557-1.427-1.986c-0.464-0.27-0.985-0.408-1.511-0.408 c-0.309,0-0.62,0.048-0.92,0.145l-9.227,2.975l2.809-9.051c0.251-0.808,0.149-1.685-0.282-2.414 c-0.43-0.729-1.149-1.242-1.978-1.413l-4.059-0.837l3.024-3.4c0.628-0.706,0.886-1.666,0.698-2.592s-0.802-1.709-1.656-2.113 l-9.49-4.495l9.334-4.421c0.854-0.404,1.467-1.187,1.656-2.113c0.188-0.926-0.07-1.886-0.698-2.592l-2.867-3.224l4.132-0.852 c0.829-0.171,1.547-0.684,1.978-1.413c0.43-0.729,0.533-1.606,0.282-2.414l-2.851-9.186l9.077,3.242 c0.327,0.117,0.669,0.175,1.009,0.175c0.509,0,1.016-0.13,1.47-0.385c0.757-0.426,1.292-1.159,1.468-2.009l0.967-4.689 l3.259,2.898c0.554,0.493,1.265,0.758,1.994,0.758c0.178,0,0.358-0.016,0.536-0.048c0.908-0.165,1.689-0.738,2.119-1.554 L50.01,12.647 M37.522,18.651h0.005H37.522 M63.064,18.993h0.005H63.064 M78.319,22.44h0.005H78.319 M50.033,8.001 c-0.594,0-1.141,0.329-1.419,0.857l-6.059,11.513l-4.07-3.62c-0.464-0.413-1.02-0.602-1.567-0.602 c-1.063,0-2.09,0.715-2.334,1.896l-1.186,5.752L21.69,19.616c-0.177-0.063-0.359-0.093-0.54-0.093 c-0.407,0-0.806,0.155-1.11,0.446c-0.438,0.42-0.601,1.052-0.422,1.633l3.679,11.854l-5.195,1.071 c-1.789,0.369-2.508,2.536-1.294,3.901l3.589,4.035l-12.21,5.784c-0.527,0.25-0.868,0.769-0.906,1.349 c0.038,0.579,0.378,1.098,0.906,1.348l12.367,5.858l-3.745,4.211c-1.214,1.365-0.495,3.532,1.294,3.901l5.122,1.056l-3.606,11.619 c-0.18,0.581-0.017,1.213,0.422,1.633c0.304,0.291,0.703,0.446,1.11,0.446c0.181,0,0.363-0.031,0.54-0.093l11.738-3.784 l1.156,5.605c0.244,1.181,1.271,1.896,2.334,1.896c0.547,0,1.104-0.189,1.567-0.602l3.709-3.299l6.404,10.753 C48.875,90.671,49.423,91,50.017,91c0.011,0,0.023,0,0.033,0c0.608-0.013,1.156-0.367,1.416-0.917l6.002-10.597l3.602,3.204 c0.464,0.412,1.02,0.602,1.567,0.602c1.063,0,2.09-0.715,2.334-1.896l1.137-5.513l11.2,3.692c0.176,0.063,0.359,0.093,0.54,0.093 c0.418,0,0.828-0.164,1.134-0.47c0.438-0.438,0.585-1.089,0.377-1.673l-4.052-11.344l6.146-1.267 c1.789-0.369,2.508-2.536,1.294-3.901l-3.911-4.397l11.975-5.672c0.528-0.25,0.865-0.77,0.902-1.348 c-0.037-0.579-0.374-1.098-0.902-1.349l-11.818-5.598l3.754-4.221c1.214-1.365,0.495-3.532-1.294-3.901l-6.23-1.284l4.135-11.577 c0.208-0.584,0.062-1.235-0.377-1.673c-0.306-0.306-0.716-0.47-1.134-0.47c-0.181,0-0.363,0.03-0.54,0.093l-11.152,4.175 l-1.185-5.746c-0.244-1.181-1.271-1.896-2.334-1.896c-0.547,0-1.104,0.189-1.567,0.602l-3.868,3.44l-5.72-11.272 c-0.26-0.549-0.808-0.904-1.416-0.917C50.056,8.001,50.045,8.001,50.033,8.001L50.033,8.001z\" /><g><circle cx=\"50\" cy=\"50\" r=\"19\" fill=\"#ffc571\" /></g></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (symbol);

/***/ }),

/***/ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js":
/*!************************************************************************!*\
  !*** ./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {} else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

//      
// An event handler can take an optional event argument
// and should not return a value
                                          
// An array of all currently registered event handlers for a type
                                            
// A map of event types and their corresponding event handlers.
                        
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberof mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).map(function (handler) { handler(evt); });
			(all['*'] || []).map(function (handler) { handler(type, evt); });
		}
	};
}

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var svg$1 = namespaces_1.svg;
var xlink$1 = namespaces_1.xlink;

var defaultConfig = {
  attrs: ( obj = {
    style: ['position: absolute', 'width: 0', 'height: 0'].join('; '),
    'aria-hidden': 'true'
  }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj )
};
var obj;

var Sprite = function Sprite(config) {
  this.config = deepmerge(defaultConfig, config || {});
  this.symbols = [];
};

/**
 * Add new symbol. If symbol with the same id exists it will be replaced.
 * @param {SpriteSymbol} symbol
 * @return {boolean} `true` - symbol was added, `false` - replaced
 */
Sprite.prototype.add = function add (symbol) {
  var ref = this;
    var symbols = ref.symbols;
  var existing = this.find(symbol.id);

  if (existing) {
    symbols[symbols.indexOf(existing)] = symbol;
    return false;
  }

  symbols.push(symbol);
  return true;
};

/**
 * Remove symbol & destroy it
 * @param {string} id
 * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise
 */
Sprite.prototype.remove = function remove (id) {
  var ref = this;
    var symbols = ref.symbols;
  var symbol = this.find(id);

  if (symbol) {
    symbols.splice(symbols.indexOf(symbol), 1);
    symbol.destroy();
    return true;
  }

  return false;
};

/**
 * @param {string} id
 * @return {SpriteSymbol|null}
 */
Sprite.prototype.find = function find (id) {
  return this.symbols.filter(function (s) { return s.id === id; })[0] || null;
};

/**
 * @param {string} id
 * @return {boolean}
 */
Sprite.prototype.has = function has (id) {
  return this.find(id) !== null;
};

/**
 * @return {string}
 */
Sprite.prototype.stringify = function stringify () {
  var ref = this.config;
    var attrs = ref.attrs;
  var stringifiedSymbols = this.symbols.map(function (s) { return s.stringify(); }).join('');
  return wrapInSvgString(stringifiedSymbols, attrs);
};

/**
 * @return {string}
 */
Sprite.prototype.toString = function toString () {
  return this.stringify();
};

Sprite.prototype.destroy = function destroy () {
  this.symbols.forEach(function (s) { return s.destroy(); });
};

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

var defaultConfig$1 = {
  /**
   * Should following options be automatically configured:
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @type {boolean}
   */
  autoConfigure: true,

  /**
   * Default mounting selector
   * @type {string}
   */
  mountTo: 'body',

  /**
   * Fix disappearing SVG elements when <base href> exists.
   * Executes when sprite mounted.
   * @see http://stackoverflow.com/a/18265336/796152
   * @see https://github.com/everdimension/angular-svg-base-fix
   * @see https://github.com/angular/angular.js/issues/8934#issuecomment-56568466
   * @type {boolean}
   */
  syncUrlsWithBaseTag: false,

  /**
   * Should sprite listen custom location change event
   * @type {boolean}
   */
  listenLocationChangeEvent: true,

  /**
   * Custom window event name which should be emitted to update sprite urls
   * @type {string}
   */
  locationChangeEvent: 'locationChange',

  /**
   * Emit location change event in Angular automatically
   * @type {boolean}
   */
  locationChangeAngularEmitter: false,

  /**
   * Selector to find symbols usages when updating sprite urls
   * @type {string}
   */
  usagesToUpdate: 'use[*|href]',

  /**
   * Fix Firefox bug when gradients and patterns don't work if they are within a symbol.
   * Executes when sprite is rendered, but not mounted.
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=306674
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1235364
   * @type {boolean}
   */
  moveGradientsOutsideSymbol: false
};

/**
 * @param {*} arrayLike
 * @return {Array}
 */
var arrayFrom = function (arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
};

var browser = {
  isChrome: function () { return /chrome/i.test(navigator.userAgent); },
  isFirefox: function () { return /firefox/i.test(navigator.userAgent); },

  // https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
  isIE: function () { return /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent); },
  isEdge: function () { return /edge/i.test(navigator.userAgent); }
};

/**
 * @param {string} name
 * @param {*} data
 */
var dispatchEvent = function (name, data) {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(name, false, false, data);
  window.dispatchEvent(event);
};

/**
 * IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.
 * This trick will trigger IE to read and use any existing SVG <style> tags.
 * @see https://github.com/iconic/SVGInjector/issues/23
 * @see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
 *
 * @param {Element} node DOM Element to search <style> tags in
 * @return {Array<HTMLStyleElement>}
 */
var evalStylesIEWorkaround = function (node) {
  var updatedNodes = [];

  arrayFrom(node.querySelectorAll('style'))
    .forEach(function (style) {
      style.textContent += '';
      updatedNodes.push(style);
    });

  return updatedNodes;
};

/**
 * @param {string} [url] If not provided - current URL will be used
 * @return {string}
 */
var getUrlWithoutFragment = function (url) {
  return (url || window.location.href).split('#')[0];
};

/* global angular */
/**
 * @param {string} eventName
 */
var locationChangeAngularEmitter = function (eventName) {
  angular.module('ng').run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$locationChangeSuccess', function (e, newUrl, oldUrl) {
      dispatchEvent(eventName, { oldUrl: oldUrl, newUrl: newUrl });
    });
  }]);
};

var defaultSelector = 'linearGradient, radialGradient, pattern, mask, clipPath';

/**
 * @param {Element} svg
 * @param {string} [selector]
 * @return {Element}
 */
var moveGradientsOutsideSymbol = function (svg, selector) {
  if ( selector === void 0 ) selector = defaultSelector;

  arrayFrom(svg.querySelectorAll('symbol')).forEach(function (symbol) {
    arrayFrom(symbol.querySelectorAll(selector)).forEach(function (node) {
      symbol.parentNode.insertBefore(node, symbol);
    });
  });
  return svg;
};

/**
 * @param {NodeList} nodes
 * @param {Function} [matcher]
 * @return {Attr[]}
 */
function selectAttributes(nodes, matcher) {
  var attrs = arrayFrom(nodes).reduce(function (acc, node) {
    if (!node.attributes) {
      return acc;
    }

    var arrayfied = arrayFrom(node.attributes);
    var matched = matcher ? arrayfied.filter(matcher) : arrayfied;
    return acc.concat(matched);
  }, []);

  return attrs;
}

/**
 * @param {NodeList|Node} nodes
 * @param {boolean} [clone=true]
 * @return {string}
 */

var xLinkNS = namespaces_1.xlink.uri;
var xLinkAttrName = 'xlink:href';

// eslint-disable-next-line no-useless-escape
var specialUrlCharsPattern = /[{}|\\\^\[\]`"<>]/g;

function encoder(url) {
  return url.replace(specialUrlCharsPattern, function (match) {
    return ("%" + (match[0].charCodeAt(0).toString(16).toUpperCase()));
  });
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

/**
 * @param {NodeList} nodes
 * @param {string} startsWith
 * @param {string} replaceWith
 * @return {NodeList}
 */
function updateReferences(nodes, startsWith, replaceWith) {
  arrayFrom(nodes).forEach(function (node) {
    var href = node.getAttribute(xLinkAttrName);
    if (href && href.indexOf(startsWith) === 0) {
      var newUrl = href.replace(startsWith, replaceWith);
      node.setAttributeNS(xLinkNS, xLinkAttrName, newUrl);
    }
  });

  return nodes;
}

/**
 * List of SVG attributes to update url() target in them
 */
var attList = [
  'clipPath',
  'colorProfile',
  'src',
  'cursor',
  'fill',
  'filter',
  'marker',
  'markerStart',
  'markerMid',
  'markerEnd',
  'mask',
  'stroke',
  'style'
];

var attSelector = attList.map(function (attr) { return ("[" + attr + "]"); }).join(',');

/**
 * Update URLs in svg image (like `fill="url(...)"`) and update referencing elements
 * @param {Element} svg
 * @param {NodeList} references
 * @param {string|RegExp} startsWith
 * @param {string} replaceWith
 * @return {void}
 *
 * @example
 * const sprite = document.querySelector('svg.sprite');
 * const usages = document.querySelectorAll('use');
 * updateUrls(sprite, usages, '#', 'prefix#');
 */
var updateUrls = function (svg, references, startsWith, replaceWith) {
  var startsWithEncoded = encoder(startsWith);
  var replaceWithEncoded = encoder(replaceWith);

  var nodes = svg.querySelectorAll(attSelector);
  var attrs = selectAttributes(nodes, function (ref) {
    var localName = ref.localName;
    var value = ref.value;

    return attList.indexOf(localName) !== -1 && value.indexOf(("url(" + startsWithEncoded)) !== -1;
  });

  attrs.forEach(function (attr) { return attr.value = attr.value.replace(new RegExp(escapeRegExp(startsWithEncoded), 'g'), replaceWithEncoded); });
  updateReferences(references, startsWithEncoded, replaceWithEncoded);
};

/**
 * Internal emitter events
 * @enum
 * @private
 */
var Events = {
  MOUNT: 'mount',
  SYMBOL_MOUNT: 'symbol_mount'
};

var BrowserSprite = (function (Sprite$$1) {
  function BrowserSprite(cfg) {
    var this$1 = this;
    if ( cfg === void 0 ) cfg = {};

    Sprite$$1.call(this, deepmerge(defaultConfig$1, cfg));

    var emitter = mitt();
    this._emitter = emitter;
    this.node = null;

    var ref = this;
    var config = ref.config;

    if (config.autoConfigure) {
      this._autoConfigure(cfg);
    }

    if (config.syncUrlsWithBaseTag) {
      var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
      emitter.on(Events.MOUNT, function () { return this$1.updateUrls('#', baseUrl); });
    }

    var handleLocationChange = this._handleLocationChange.bind(this);
    this._handleLocationChange = handleLocationChange;

    // Provide way to update sprite urls externally via dispatching custom window event
    if (config.listenLocationChangeEvent) {
      window.addEventListener(config.locationChangeEvent, handleLocationChange);
    }

    // Emit location change event in Angular automatically
    if (config.locationChangeAngularEmitter) {
      locationChangeAngularEmitter(config.locationChangeEvent);
    }

    // After sprite mounted
    emitter.on(Events.MOUNT, function (spriteNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(spriteNode);
      }
    });

    // After symbol mounted into sprite
    emitter.on(Events.SYMBOL_MOUNT, function (symbolNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(symbolNode.parentNode);
      }

      if (browser.isIE() || browser.isEdge()) {
        evalStylesIEWorkaround(symbolNode);
      }
    });
  }

  if ( Sprite$$1 ) BrowserSprite.__proto__ = Sprite$$1;
  BrowserSprite.prototype = Object.create( Sprite$$1 && Sprite$$1.prototype );
  BrowserSprite.prototype.constructor = BrowserSprite;

  var prototypeAccessors = { isMounted: {} };

  /**
   * @return {boolean}
   */
  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * Automatically configure following options
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @param {Object} cfg
   * @private
   */
  BrowserSprite.prototype._autoConfigure = function _autoConfigure (cfg) {
    var ref = this;
    var config = ref.config;

    if (typeof cfg.syncUrlsWithBaseTag === 'undefined') {
      config.syncUrlsWithBaseTag = typeof document.getElementsByTagName('base')[0] !== 'undefined';
    }

    if (typeof cfg.locationChangeAngularEmitter === 'undefined') {
        config.locationChangeAngularEmitter = typeof window.angular !== 'undefined';
    }

    if (typeof cfg.moveGradientsOutsideSymbol === 'undefined') {
      config.moveGradientsOutsideSymbol = browser.isFirefox();
    }
  };

  /**
   * @param {Event} event
   * @param {Object} event.detail
   * @param {string} event.detail.oldUrl
   * @param {string} event.detail.newUrl
   * @private
   */
  BrowserSprite.prototype._handleLocationChange = function _handleLocationChange (event) {
    var ref = event.detail;
    var oldUrl = ref.oldUrl;
    var newUrl = ref.newUrl;
    this.updateUrls(oldUrl, newUrl);
  };

  /**
   * Add new symbol. If symbol with the same id exists it will be replaced.
   * If sprite already mounted - `symbol.mount(sprite.node)` will be called.
   * @fires Events#SYMBOL_MOUNT
   * @param {BrowserSpriteSymbol} symbol
   * @return {boolean} `true` - symbol was added, `false` - replaced
   */
  BrowserSprite.prototype.add = function add (symbol) {
    var sprite = this;
    var isNewSymbol = Sprite$$1.prototype.add.call(this, symbol);

    if (this.isMounted && isNewSymbol) {
      symbol.mount(sprite.node);
      this._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    }

    return isNewSymbol;
  };

  /**
   * Attach to existing DOM node
   * @param {string|Element} target
   * @return {Element|null} attached DOM Element. null if node to attach not found.
   */
  BrowserSprite.prototype.attach = function attach (target) {
    var this$1 = this;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    /** @type Element */
    var node = typeof target === 'string' ? document.querySelector(target) : target;
    sprite.node = node;

    // Already added symbols needs to be mounted
    this.symbols.forEach(function (symbol) {
      symbol.mount(sprite.node);
      this$1._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    });

    // Create symbols from existing DOM nodes, add and mount them
    arrayFrom(node.querySelectorAll('symbol'))
      .forEach(function (symbolNode) {
        var symbol = BrowserSpriteSymbol.createFromExistingNode(symbolNode);
        symbol.node = symbolNode; // hack to prevent symbol mounting to sprite when adding
        sprite.add(symbol);
      });

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  BrowserSprite.prototype.destroy = function destroy () {
    var ref = this;
    var config = ref.config;
    var symbols = ref.symbols;
    var _emitter = ref._emitter;

    symbols.forEach(function (s) { return s.destroy(); });

    _emitter.off('*');
    window.removeEventListener(config.locationChangeEvent, this._handleLocationChange);

    if (this.isMounted) {
      this.unmount();
    }
  };

  /**
   * @fires Events#MOUNT
   * @param {string|Element} [target]
   * @param {boolean} [prepend=false]
   * @return {Element|null} rendered sprite node. null if mount node not found.
   */
  BrowserSprite.prototype.mount = function mount (target, prepend) {
    if ( target === void 0 ) target = this.config.mountTo;
    if ( prepend === void 0 ) prepend = false;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    var mountNode = typeof target === 'string' ? document.querySelector(target) : target;
    var node = sprite.render();
    this.node = node;

    if (prepend && mountNode.childNodes[0]) {
      mountNode.insertBefore(node, mountNode.childNodes[0]);
    } else {
      mountNode.appendChild(node);
    }

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSprite.prototype.render = function render () {
    return parse(this.stringify());
  };

  /**
   * Detach sprite from the DOM
   */
  BrowserSprite.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  /**
   * Update URLs in sprite and usage elements
   * @param {string} oldUrl
   * @param {string} newUrl
   * @return {boolean} `true` - URLs was updated, `false` - sprite is not mounted
   */
  BrowserSprite.prototype.updateUrls = function updateUrls$1 (oldUrl, newUrl) {
    if (!this.isMounted) {
      return false;
    }

    var usages = document.querySelectorAll(this.config.usagesToUpdate);

    updateUrls(
      this.node,
      usages,
      ((getUrlWithoutFragment(oldUrl)) + "#"),
      ((getUrlWithoutFragment(newUrl)) + "#")
    );

    return true;
  };

  Object.defineProperties( BrowserSprite.prototype, prototypeAccessors );

  return BrowserSprite;
}(Sprite));

var ready$1 = createCommonjsModule(function (module) {
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  { module.exports = definition(); }

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);


  if (!loaded)
  { doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener);
    loaded = 1;
    while (listener = fns.shift()) { listener(); }
  }); }

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  }

});
});

var spriteNodeId = '__SVG_SPRITE_NODE__';
var spriteGlobalVarName = '__SVG_SPRITE__';
var isSpriteExists = !!window[spriteGlobalVarName];

// eslint-disable-next-line import/no-mutable-exports
var sprite;

if (isSpriteExists) {
  sprite = window[spriteGlobalVarName];
} else {
  sprite = new BrowserSprite({
    attrs: {
      id: spriteNodeId,
      'aria-hidden': 'true'
    }
  });
  window[spriteGlobalVarName] = sprite;
}

var loadSprite = function () {
  /**
   * Check for page already contains sprite node
   * If found - attach to and reuse it's content
   * If not - render and mount the new sprite
   */
  var existing = document.getElementById(spriteNodeId);

  if (existing) {
    sprite.attach(existing);
  } else {
    sprite.mount(document.body, true);
  }
};

if (document.body) {
  loadSprite();
} else {
  ready$1(loadSprite);
}

var sprite$1 = sprite;

return sprite$1;

})));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_handlers_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/handlers/handlers */ "./src/modules/handlers/handlers.js");



var startApp = function startApp() {
  (0,_modules_handlers_handlers__WEBPACK_IMPORTED_MODULE_1__["default"])('#content');
};

startApp();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDOzs7Ozs7O1VDai9CRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBLElBQU13RixRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0VBQ3JCekUsc0VBQVMsQ0FBQyxVQUFELENBQVQ7QUFDRCxDQUZEOztBQUlBeUUsUUFBUSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9tb2R1bGVzL2hhbmRsZXJzL2NyZWF0ZUh0bWxFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvbW9kdWxlcy9oYW5kbGVycy9oYW5kbGVycy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21vZHVsZXMvaGFuZGxlcnMvbG9hZEljb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy92aWV3cy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGVzLmNzcz81MjMxIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWFnZXMvaWNvbnM4LWNsb3VkLTUwLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltYWdlcy9pY29uczgtY2xvdWRzLTUwLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltYWdlcy9pY29uczgtaGF6ZS01MC5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWFnZXMvaWNvbnM4LW1vb24tYW5kLXN0YXJzLTUwLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltYWdlcy9pY29uczgtbmlnaHQtNTAuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1hZ2VzL2ljb25zOC1wYXJ0bHktY2xvdWR5LWRheS01MC5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWFnZXMvaWNvbnM4LXJhaW4tNTAuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1hZ2VzL2ljb25zOC1yYWluLWNsb3VkLTUwLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltYWdlcy9pY29uczgtc25vdy01MC5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWFnZXMvaWNvbnM4LXN0b3JtLTUwLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltYWdlcy9pY29uczgtc3VuLTUwLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSHRtbEVsZW1lbnQodHlwZSwgaWQsIGFycmF5Q2xhc3NlcywgY29udGVudCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgaWYgKGlkKSBlbGVtZW50LmlkID0gaWQ7XG4gIGlmIChhcnJheUNsYXNzZXMpIHtcbiAgICBhcnJheUNsYXNzZXMuZm9yRWFjaCgobXlDbGFzcykgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKG15Q2xhc3MpKTtcbiAgfVxuICBpZiAoY29udGVudCkgZWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50O1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuIiwiaW1wb3J0IGRpc3BsYXlXZWF0aGVyQ2FyZCBmcm9tICcuLi8uLi92aWV3cy93ZWF0aGVyJztcblxuXG5jb25zdCBnZXRFbGVtZW50ID0gKHNlbGVjdG9yLCBwYXJlbnROb2RlID0gZG9jdW1lbnQpID0+XG4gIHBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7ICBcblxuY29uc3QgaGFuZGxlU2VhcmNoID0gKHNlbGVjdG9yKSA9PiB7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZ2V0RWxlbWVudChzZWxlY3Rvcik7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtcbiAgICBjb25zdCBzZWFyY2hUZXJtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpLnZhbHVlO1xuICAgIG1haW5Db250ZW50LmNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IG1haW5Db250ZW50LnJlbW92ZUNoaWxkKG5vZGUpKTtcblxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGRpc3BsYXlXZWF0aGVyQ2FyZChzZWFyY2hUZXJtKSk7XG5cbiAgICBoYW5kbGVTZWFyY2goc2VsZWN0b3IpO1xuXG4gIH0pO1xufTsgXG5cbmNvbnN0IGxvYWRWaWV3cyA9IChzZWxlY3RvcikgPT4ge1xuXG4gIC8vIHNldCBsaWdodCAvIHRoZW1lIGJhc2VkIG9uIG1lZGlhIHByZWZlcmVuY2VcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XG4gIH1cbiAgXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZ2V0RWxlbWVudChzZWxlY3Rvcik7XG5cbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlzcGxheVdlYXRoZXJDYXJkKFwiQnJpc2JhbmVcIikpO1xuXG4gIGhhbmRsZVNlYXJjaChzZWxlY3Rvcik7XG5cblxufTtcbmV4cG9ydCBkZWZhdWx0IGxvYWRWaWV3czsiLCJpbXBvcnQgc3VuIGZyb20gJy4uLy4uL2ltYWdlcy9pY29uczgtc3VuLTUwLnN2Zyc7XG5pbXBvcnQgbW9vbiBmcm9tICcuLi8uLi9pbWFnZXMvaWNvbnM4LW1vb24tYW5kLXN0YXJzLTUwLnN2Zyc7XG5pbXBvcnQgY2xvdWR5IGZyb20gJy4uLy4uL2ltYWdlcy9pY29uczgtcGFydGx5LWNsb3VkeS1kYXktNTAuc3ZnJztcbmltcG9ydCBjbG91ZHluaWdodCBmcm9tICcuLi8uLi9pbWFnZXMvaWNvbnM4LW5pZ2h0LTUwLnN2Zyc7XG5pbXBvcnQgY2xvdWQgZnJvbSAnLi4vLi4vaW1hZ2VzL2ljb25zOC1jbG91ZC01MC5zdmcnO1xuaW1wb3J0IGNsb3VkcyBmcm9tICcuLi8uLi9pbWFnZXMvaWNvbnM4LWNsb3Vkcy01MC5zdmcnO1xuaW1wb3J0IHJhaW5jbG91ZCBmcm9tICcuLi8uLi9pbWFnZXMvaWNvbnM4LXJhaW4tY2xvdWQtNTAuc3ZnJztcbmltcG9ydCByYWluIGZyb20gJy4uLy4uL2ltYWdlcy9pY29uczgtcmFpbi01MC5zdmcnO1xuaW1wb3J0IHN0b3JtIGZyb20gJy4uLy4uL2ltYWdlcy9pY29uczgtc3Rvcm0tNTAuc3ZnJztcbmltcG9ydCBzbm93IGZyb20gJy4uLy4uL2ltYWdlcy9pY29uczgtc25vdy01MC5zdmcnO1xuaW1wb3J0IG1pc3QgZnJvbSAnLi4vLi4vaW1hZ2VzL2ljb25zOC1oYXplLTUwLnN2Zyc7XG5cbmNvbnN0IGljb25SZWZlcmVuY2UgPSB7XG4gICcwMWQnOiB7IGljb246IHN1biB9LCAvLyBjbGVhciBza3kgZGF5XG4gICcwMW4nOiB7IGljb246IG1vb24gfSwgLy8gY2xlYXIgc2t5IG5pZ2h0XG4gICcwMmQnOiB7IGljb246IGNsb3VkeSB9LCAvLyBmZXcgY2xvdWRzIGRheVxuICAnMDJuJzogeyBpY29uOiBjbG91ZHluaWdodCB9LCAvLyBmZXcgY2xvdWRzIG5pZ2h0XG4gICcwM2QnOiB7IGljb246IGNsb3VkIH0sIC8vIGNsb3VkcyBkYXlcbiAgJzAzbic6IHsgaWNvbjogY2xvdWQgfSwgLy8gY2xvdWRzIG5pZ2h0XG4gICcwNGQnOiB7IGljb246IGNsb3VkcyB9LCAvLyBicm9rZW4gY2xvdWRzIGRheVxuICAnMDRuJzogeyBpY29uOiBjbG91ZHMgfSwgLy8gYnJva2VuIGNsb3VkcyBuaWdodFxuICAnMDlkJzogeyBpY29uOiByYWluY2xvdWQgfSwgLy8gc2hvd2VyIHJhaW4gZGF5XG4gICcwOW4nOiB7IGljb246IHJhaW5jbG91ZCB9LCAvLyBzaG93ZXIgcmFpbiBuaWdodCAoc2hvd3Mgc3VuKVxuICAnMTBkJzogeyBpY29uOiByYWluIH0sIC8vIHJhaW4gZGF5XG4gICcxMG4nOiB7IGljb246IHJhaW4gfSwgLy8gcmFpbiBuaWdodFxuICAnMTFkJzogeyBpY29uOiBzdG9ybSB9LCAvLyBzdG9ybSBkYXlcbiAgJzExbic6IHsgaWNvbjogc3Rvcm0gfSwgLy8gc3Rvcm0gbmlnaHRcbiAgJzEzZCc6IHsgaWNvbjogc25vdyB9LCAvLyBzbm93IGRheVxuICAnMTNuJzogeyBpY29uOiBzbm93IH0sIC8vIHNub3cgbmlnaHRcbiAgJzUwZCc6IHsgaWNvbjogbWlzdCB9LCAvLyBtaXN0IGRheVxuICAnNTBuJzogeyBpY29uOiBtaXN0IH0sIC8vIG1pc3QgbmlnaHRcbn07XG5cbmNvbnN0IGdldEljb24gPSAoY29kZSkgPT4gaWNvblJlZmVyZW5jZVtjb2RlXS5pY29uO1xuZXhwb3J0IGRlZmF1bHQgZ2V0SWNvbjtcbiIsImltcG9ydCBjcmVhdGVIdG1sRWxlbWVudCBmcm9tICcuLi9tb2R1bGVzL2hhbmRsZXJzL2NyZWF0ZUh0bWxFbGVtZW50JztcbmltcG9ydCBnZXRJY29uIGZyb20gJy4uL21vZHVsZXMvaGFuZGxlcnMvbG9hZEljb24nO1xuXG4vLyBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1CcmlzYmFuZSZ1bml0cz1tZXRyaWMmYXBwaWQ9OTAzMTgyODVhMDYyZjI1MWJmNjU4ZDQzNjkwMjFmZDYnO1xuXG4vLyBjb25zdCBmb3JlY2FzdHVybCA9ICdodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9LTI3LjQ2NzkmbG9uPTE1My4wMjgxJmNudD01JnVuaXRzPW1ldHJpYyZhcHBpZD05MDMxODI4NWEwNjJmMjUxYmY2NThkNDM2OTAyMWZkNic7XG5cbmNvbnN0IHVybCA9XG4gICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8zLjAvb25lY2FsbD91bml0cz1tZXRyaWMmZXhjbHVkZT1taW51dGVseSxob3VybHkmYXBwaWQ9OTAzMTgyODVhMDYyZjI1MWJmNjU4ZDQzNjkwMjFmZDYnO1xuXG5jb25zdCBnZW9Db2RlID1cbiAgJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P2FwcGlkPTkwMzE4Mjg1YTA2MmYyNTFiZjY1OGQ0MzY5MDIxZmQ2JnE9JztcblxuY29uc3QgY3JlYXRlU2VhcmNoQmFyID0gKCkgPT4gYFxuICAgIDxmb3JtIGlkPSdmb3JtJyBhY3Rpb249XCIjXCIgb25zdWJtaXQ9XCJyZXR1cm4gZmFsc2VcIj4gXG4gICAgPGlucHV0IGlkPVwic2VhcmNoXCIgdHlwZT1cImlucHV0XCIgY2xhc3M9XCJoaWRkZW4gdy1mdWxsIGgtMTIgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktNzAwIHJvdW5kZWQtbWQgdGV4dC0yeGwgcGwtMiBwbGFjZWhvbGRlcjpmb250LVsnTWF0ZXJpYWxTeW1ib2xzLU91dGxpbmVkJ11cIiBwbGFjZWhvbGRlcj1cInNlYXJjaFwiLz5cbiAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGhpZGRlbiAvPlxuICAgIDwvZm9ybT5cbiAgYDtcblxuY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChjb29yZHMpID0+IHtcbiAgY29uc3QgZmV0Y2h1cmwgPSB1cmwgKyBjb29yZHM7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZldGNodXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBjb25zdCB0aGVXZWF0aGVyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgLy8gU2VhcmNoIEJhclxuICAgIGNvbnN0IHNlYXJjaEJhckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoQmFyJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIC8vIHNlYXJjaEJhckVsZW1lbnQuaW5uZXJIVE1MID0gY3JlYXRlU2VhcmNoQmFyKCk7XG4gICAgc2VhcmNoQmFyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdiZy1ncmF5LTMwMCcpO1xuXG4gICAgLy8gV2VhdGhlciBJY29uXG4gICAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlckljb24nKTtcbiAgICBjb25zdCByZW5kZXJlZCA9IGBcbiAgICAgIDxzdmcgdmlld0JveD1cIiR7Z2V0SWNvbih0aGVXZWF0aGVyLmN1cnJlbnQud2VhdGhlclswXS5pY29uKS52aWV3Qm94fVwiPlxuICAgICAgICA8dXNlIGhyZWY9XCIjJHtnZXRJY29uKHRoZVdlYXRoZXIuY3VycmVudC53ZWF0aGVyWzBdLmljb24pLmlkfVwiIC8+XG4gICAgICA8L3N2Zz5gO1xuICAgIHdlYXRoZXJJY29uLmlubmVySFRNTCA9IHJlbmRlcmVkO1xuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJJY29uJylcbiAgICAgIC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoWydhbmltYXRlLXB1bHNlJ10pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVySWNvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2JnLWdyYXktMzAwJyk7XG5cbiAgICAvLyBIdW1pZGl0eVxuICAgIGNvbnN0IGh1bWlkaXR5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eScpO1xuICAgIGxldCBodW1pZGl0eURhdGEgPSB0aGVXZWF0aGVyLmN1cnJlbnQuaHVtaWRpdHk7XG4gICAgaHVtaWRpdHlEYXRhICs9ICclJztcbiAgICBodW1pZGl0eUVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICBjcmVhdGVIdG1sRWxlbWVudCgnc3BhbicsIG51bGwsIFsndGV4dC1zbScsICd0ZXh0LWdyYXktNDAwJ10sICdIdW1pZGl0eScpXG4gICAgKTtcbiAgICBodW1pZGl0eUVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICBjcmVhdGVIdG1sRWxlbWVudCgnc3BhbicsIG51bGwsIFtdLCBodW1pZGl0eURhdGEpXG4gICAgKTtcbiAgICBodW1pZGl0eUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYmctZ3JheS0zMDAnKTtcblxuICAgIC8vIFByZXNzdXJlXG4gICAgY29uc3QgcHJlc3N1cmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXNzdXJlJyk7XG4gICAgY29uc3QgcHJlc3N1cmVEYXRhID0gdGhlV2VhdGhlci5jdXJyZW50LnByZXNzdXJlO1xuICAgIHByZXNzdXJlRWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICAgIGNyZWF0ZUh0bWxFbGVtZW50KCdzcGFuJywgbnVsbCwgWyd0ZXh0LXNtJywgJ3RleHQtZ3JheS00MDAnXSwgJ1ByZXNzdXJlJylcbiAgICApO1xuICAgIHByZXNzdXJlRWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICAgIGNyZWF0ZUh0bWxFbGVtZW50KCdzcGFuJywgbnVsbCwgW10sIHByZXNzdXJlRGF0YSlcbiAgICApO1xuICAgIHByZXNzdXJlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdiZy1ncmF5LTMwMCcpO1xuXG4gICAgLy8gV2luZCBTcGVlZFxuICAgIGNvbnN0IHdpbmRzcGVlZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZHNwZWVkJyk7XG4gICAgY29uc3Qgd2luZFNwZWVkRGF0YSA9IE1hdGgucm91bmQodGhlV2VhdGhlci5jdXJyZW50LndpbmRfc3BlZWQgKiAxMCkgLyAxMDtcbiAgICB3aW5kc3BlZWRFbGVtZW50LmFwcGVuZENoaWxkKFxuICAgICAgY3JlYXRlSHRtbEVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgWyd0ZXh0LXNtJywgJ3RleHQtZ3JheS02MDAnLCAnZGFyazp0ZXh0LWdyYXktNDAwJ10sXG4gICAgICAgICdXaW5kIFNwZCdcbiAgICAgIClcbiAgICApO1xuICAgIHdpbmRzcGVlZEVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICBjcmVhdGVIdG1sRWxlbWVudCgnc3BhbicsIG51bGwsIFtdLCB3aW5kU3BlZWREYXRhKVxuICAgICk7XG4gICAgd2luZHNwZWVkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdiZy1ncmF5LTMwMCcpO1xuXG4gICAgLy8gV2luZCBEaXJcbiAgICBjb25zdCB3aW5kZGlyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kZGlyJyk7XG4gICAgY29uc3Qgd2luZERpckRhdGEgPSB0aGVXZWF0aGVyLmN1cnJlbnQud2luZF9kZWc7XG4gICAgd2luZGRpckVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICBjcmVhdGVIdG1sRWxlbWVudCgnc3BhbicsIG51bGwsIFsndGV4dC1zbScsICd0ZXh0LWdyYXktNDAwJ10sICdXaW5kIERpcicpXG4gICAgKTtcbiAgICB3aW5kZGlyRWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICAgIGNyZWF0ZUh0bWxFbGVtZW50KCdzcGFuJywgbnVsbCwgW10sIHdpbmREaXJEYXRhKVxuICAgICk7XG4gICAgd2luZGRpckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYmctZ3JheS0zMDAnKTtcblxuICAgIC8vIEN1cnJlbnQgVGVtcGVyYXR1cmVcbiAgICBjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGVtcGVyYXR1cmUnKTtcbiAgICBjdXJyZW50VGVtcC5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKHRoZVdlYXRoZXIuY3VycmVudC50ZW1wICogMTApIC8gMTA7XG4gICAgY3VycmVudFRlbXAuaW5uZXJIVE1MICs9ICcmZGVnOyc7XG4gICAgY3VycmVudFRlbXAuY2xhc3NMaXN0LnJlbW92ZSgnYmctZ3JheS0zMDAnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBVbmFibGUgdG8gZmV0Y2ggd2VhdGhlciBkYXRhIGZvciAke2ZldGNodXJsfWApO1xuICB9XG59O1xuXG5jb25zdCBnZXRDaXR5ID0gYXN5bmMgKGNpdHkpID0+IHtcbiAgY29uc3QgZmV0Y2h1cmwgPSBnZW9Db2RlICsgY2l0eTtcbiAgbGV0IHN0cmluZyA9ICcnO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZmV0Y2h1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGNvbnN0IGNvb3JkcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHN0cmluZyA9IGAmbGF0PSR7Y29vcmRzWzBdLmxhdH0mbG9uPSR7Y29vcmRzWzBdLmxvbn1gO1xuXG4gICAgLy8gQ2l0eSBOYW1lXG4gICAgY29uc3QgY2l0eUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eU5hbWUnKTtcbiAgICBjaXR5RWxlbWVudC5pbm5lckhUTUwgPSBjb29yZHNbMF0ubmFtZTtcbiAgICBjaXR5RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdiZy1ncmF5LTMwMCcpO1xuXG4gICAgLy8gZ2V0V2VhdGhlcih1cmwgKyBzdHJpbmcpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYFVuYWJsZSB0byBmZXRjaCBjaXR5IGRhdGEgZm9yICR7ZmV0Y2h1cmx9YCk7XG4gIH1cbiAgcmV0dXJuIHN0cmluZztcbn07XG5cbi8vIHByZXNzdXJlLCBodW1pZGl0eSwgd2luZCBzcGVlZCwgd2luZCBkaXIsXG5cbmNvbnN0IGRpc3BsYXlTdW5yaXNlU3Vuc2V0ID0gKCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gY3JlYXRlSHRtbEVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgJ3N1bnJpc2VTdW5zZXQnLFxuICAgIFtcbiAgICAgICdmbGV4JyxcbiAgICAgICdqdXN0aWZ5LWNlbnRlcicsXG4gICAgICAnaXRlbXMtY2VudGVyJyxcbiAgICAgICdzZWxmLWNlbnRlcicsXG4gICAgICAndy04MCcsXG4gICAgICAnaC00OCcsXG4gICAgICAncm91bmRlZC1tZCcsXG4gICAgICAnYmctZ3JheS0zMDAnLFxuICAgIF0sXG4gICAgJyZuYnNwOydcbiAgKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZURldGFpbHNDaGlsZCA9IChpZCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gY3JlYXRlSHRtbEVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgaWQsXG4gICAgW1xuICAgICAgJ2ZsZXgnLFxuICAgICAgJ2ZsZXgtY29sJyxcbiAgICAgICdqdXN0aWZ5LWV2ZW5seScsXG4gICAgICAnaXRlbXMtY2VudGVyJyxcbiAgICAgICd0ZXh0LTJ4bCcsXG4gICAgICAndy0xLzQnLFxuICAgICAgJ2gtZnVsbCcsXG4gICAgICAncm91bmRlZC1tZCcsXG4gICAgICAnYmctZ3JheS0zMDAnLFxuICAgIF0sXG4gICAgbnVsbFxuICApO1xuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgZGlzcGxheURldGFpbHMgPSAoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVIdG1sRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICAnZGV0YWlscycsXG4gICAgW1xuICAgICAgJ2ZsZXgnLFxuICAgICAgJ2p1c3RpZnktc3RhcnQnLFxuICAgICAgJ3NlbGYtY2VudGVyJyxcbiAgICAgICdiZy1ncmF5LTEwMCcsXG4gICAgICAnZGFyazpiZy1ncmF5LTcwMCcsXG4gICAgICAnZ2FwLTInLFxuICAgICAgJ3ctODAnLFxuICAgICAgJ2gtMjAnLFxuICAgICAgJ3JvdW5kZWQtbWQnLFxuICAgIF0sXG4gICAgbnVsbFxuICApO1xuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRGV0YWlsc0NoaWxkKCdodW1pZGl0eScpKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVEZXRhaWxzQ2hpbGQoJ3ByZXNzdXJlJykpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZURldGFpbHNDaGlsZCgnd2luZHNwZWVkJykpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZURldGFpbHNDaGlsZCgnd2luZGRpcicpKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IGRpc3BsYXlTZWFyY2hCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVIdG1sRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICAnc2VhcmNoQmFyJyxcbiAgICBbXG4gICAgICAnZmxleCcsXG4gICAgICAnanVzdGlmeS1jZW50ZXInLFxuICAgICAgJ2l0ZW1zLWNlbnRlcicsXG4gICAgICAnc2VsZi1jZW50ZXInLFxuICAgICAgJ3ctNzInLFxuICAgICAgJ2gtMTInLFxuICAgICAgJ3JvdW5kZWQtbWQnLFxuICAgICAgJ2JnLWdyYXktMzAwJyxcbiAgICBdLFxuICAgIG51bGxcbiAgKTtcblxuICBlbGVtZW50LmlubmVySFRNTCA9IGNyZWF0ZVNlYXJjaEJhcigpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgZGlzcGxheUN1cnJlbnRUZW1wZXJhdHVyZSA9ICgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUh0bWxFbGVtZW50KFxuICAgICdkaXYnLFxuICAgICdjdXJyZW50VGVtcGVyYXR1cmUnLFxuICAgIFtcbiAgICAgICdmbGV4JyxcbiAgICAgICdqdXN0aWZ5LWNlbnRlcicsXG4gICAgICAnaXRlbXMtY2VudGVyJyxcbiAgICAgICdzZWxmLWNlbnRlcicsXG4gICAgICAnZm9udC1ib2xkJyxcbiAgICAgICd0ZXh0LTd4bCcsXG4gICAgICAndy0yOCcsXG4gICAgICAnaC0yNCcsXG4gICAgICAncm91bmRlZC1tZCcsXG4gICAgICAnYmctZ3JheS0zMDAnLFxuICAgIF0sXG4gICAgJyZuYnNwOydcbiAgKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IGRpc3BsYXlDaXR5TmFtZSA9ICgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUh0bWxFbGVtZW50KFxuICAgICdkaXYnLFxuICAgICdjaXR5TmFtZScsXG4gICAgW1xuICAgICAgJ2ZsZXgnLFxuICAgICAgJ2p1c3RpZnktY2VudGVyJyxcbiAgICAgICdpdGVtcy1jZW50ZXInLFxuICAgICAgJ3NlbGYtY2VudGVyJyxcbiAgICAgICdmb250LWJvbGQnLFxuICAgICAgJ3RleHQtNHhsJyxcbiAgICAgICd3LTY0JyxcbiAgICAgICdoLTEwJyxcbiAgICAgICdyb3VuZGVkLW1kJyxcbiAgICAgICdiZy1ncmF5LTMwMCcsXG4gICAgXSxcbiAgICAnJm5ic3A7J1xuICApO1xuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgZGlzcGxheVdlYXRoZXJJY29uID0gKCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gY3JlYXRlSHRtbEVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgJ3dlYXRoZXJJY29uJyxcbiAgICBbXG4gICAgICAnZmxleCcsXG4gICAgICAnanVzdGlmeS1jZW50ZXInLFxuICAgICAgJ2l0ZW1zLWNlbnRlcicsXG4gICAgICAnc2VsZi1jZW50ZXInLFxuICAgICAgJ3ctMzYnLFxuICAgICAgJ2gtMzYnLFxuICAgICAgJ3JvdW5kZWQtbWQnLFxuICAgICAgJ2JnLWdyYXktMzAwJyxcbiAgICBdLFxuICAgICcmbmJzcDsnXG4gICk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBkaXNwbGF5V2VhdGhlckNhcmQgPSAoc2VhcmNoQ2l0eSkgPT4ge1xuICBjb25zb2xlLndhcm4oc2VhcmNoQ2l0eSk7XG5cbiAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUh0bWxFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIG51bGwsXG4gICAgW1xuICAgICAgJ2FuaW1hdGUtcHVsc2UnLFxuICAgICAgJ2ZsZXgnLFxuICAgICAgJ2ZsZXgtY29sJyxcbiAgICAgICdwLTQnLFxuICAgICAgJ3B0LTgnLFxuICAgICAgJ21heC13LXNtJyxcbiAgICAgICd3LWZ1bGwnLFxuICAgICAgJ214LWF1dG8nLFxuICAgICAgJ2dhcC00JyxcbiAgICBdLFxuICAgIG51bGxcbiAgKTtcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKGRpc3BsYXlTZWFyY2hCYXIoKSk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGlzcGxheVdlYXRoZXJJY29uKCkpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGRpc3BsYXlDaXR5TmFtZSgpKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChkaXNwbGF5Q3VycmVudFRlbXBlcmF0dXJlKCkpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGRpc3BsYXlEZXRhaWxzKCkpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGRpc3BsYXlTdW5yaXNlU3Vuc2V0KCkpO1xuXG4gIGdldENpdHkoc2VhcmNoQ2l0eSkudGhlbihnZXRXZWF0aGVyKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5V2VhdGhlckNhcmQ7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuQnJvd3NlclNwcml0ZVN5bWJvbCA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxudmFyIFNwcml0ZVN5bWJvbCA9IGZ1bmN0aW9uIFNwcml0ZVN5bWJvbChyZWYpIHtcbiAgdmFyIGlkID0gcmVmLmlkO1xuICB2YXIgdmlld0JveCA9IHJlZi52aWV3Qm94O1xuICB2YXIgY29udGVudCA9IHJlZi5jb250ZW50O1xuXG4gIHRoaXMuaWQgPSBpZDtcbiAgdGhpcy52aWV3Qm94ID0gdmlld0JveDtcbiAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5TcHJpdGVTeW1ib2wucHJvdG90eXBlLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeSAoKSB7XG4gIHJldHVybiB0aGlzLmNvbnRlbnQ7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KCk7XG59O1xuXG5TcHJpdGVTeW1ib2wucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBbJ2lkJywgJ3ZpZXdCb3gnLCAnY29udGVudCddLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHsgcmV0dXJuIGRlbGV0ZSB0aGlzJDFbcHJvcF07IH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xudmFyIHBhcnNlID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgdmFyIGhhc0ltcG9ydE5vZGUgPSAhIWRvY3VtZW50LmltcG9ydE5vZGU7XG4gIHZhciBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGNvbnRlbnQsICdpbWFnZS9zdmcreG1sJykuZG9jdW1lbnRFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBGaXggZm9yIGJyb3dzZXIgd2hpY2ggYXJlIHRocm93aW5nIFdyb25nRG9jdW1lbnRFcnJvclxuICAgKiBpZiB5b3UgaW5zZXJ0IGFuIGVsZW1lbnQgd2hpY2ggaXMgbm90IHBhcnQgb2YgdGhlIGRvY3VtZW50XG4gICAqIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzk4NjUxOS80NjI0NDAzXG4gICAqL1xuICBpZiAoaGFzSW1wb3J0Tm9kZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5pbXBvcnROb2RlKGRvYywgdHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gZG9jO1xufTtcblxudmFyIGNvbW1vbmpzR2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIGRlZXBtZXJnZSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgdW5kZWZpbmVkID09PSAnZnVuY3Rpb24nICYmIHVuZGVmaW5lZC5hbWQpIHtcbiAgICAgICAgdW5kZWZpbmVkKGZhY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH1cbn0oY29tbW9uanNHbG9iYWwsIGZ1bmN0aW9uICgpIHtcblxuZnVuY3Rpb24gaXNNZXJnZWFibGVPYmplY3QodmFsKSB7XG4gICAgdmFyIG5vbk51bGxPYmplY3QgPSB2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gbm9uTnVsbE9iamVjdFxuICAgICAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgUmVnRXhwXSdcbiAgICAgICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IERhdGVdJ1xufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gW10gOiB7fVxufVxuXG5mdW5jdGlvbiBjbG9uZUlmTmVjZXNzYXJ5KHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgY2xvbmUgPSBvcHRpb25zQXJndW1lbnQgJiYgb3B0aW9uc0FyZ3VtZW50LmNsb25lID09PSB0cnVlO1xuICAgIHJldHVybiAoY2xvbmUgJiYgaXNNZXJnZWFibGVPYmplY3QodmFsdWUpKSA/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIDogdmFsdWVcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHRhcmdldC5zbGljZSgpO1xuICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uKGUsIGkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbltpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gY2xvbmVJZk5lY2Vzc2FyeShlLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTWVyZ2VhYmxlT2JqZWN0KGUpKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpXSA9IGRlZXBtZXJnZSh0YXJnZXRbaV0sIGUsIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmluZGV4T2YoZSkgPT09IC0xKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5wdXNoKGNsb25lSWZOZWNlc3NhcnkoZSwgb3B0aW9uc0FyZ3VtZW50KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGVzdGluYXRpb25cbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHt9O1xuICAgIGlmIChpc01lcmdlYWJsZU9iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVJZk5lY2Vzc2FyeSh0YXJnZXRba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pIHx8ICF0YXJnZXRba2V5XSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGNsb25lSWZOZWNlc3Nhcnkoc291cmNlW2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gZGVlcG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBkZWVwbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcbiAgICB2YXIgb3B0aW9ucyA9IG9wdGlvbnNBcmd1bWVudCB8fCB7IGFycmF5TWVyZ2U6IGRlZmF1bHRBcnJheU1lcmdlIH07XG4gICAgdmFyIGFycmF5TWVyZ2UgPSBvcHRpb25zLmFycmF5TWVyZ2UgfHwgZGVmYXVsdEFycmF5TWVyZ2U7XG5cbiAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGFyZ2V0KSA/IGFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkgOiBjbG9uZUlmTmVjZXNzYXJ5KHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH1cbn1cblxuZGVlcG1lcmdlLmFsbCA9IGZ1bmN0aW9uIGRlZXBtZXJnZUFsbChhcnJheSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSB8fCBhcnJheS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5IHdpdGggYXQgbGVhc3QgdHdvIGVsZW1lbnRzJylcbiAgICB9XG5cbiAgICAvLyB3ZSBhcmUgc3VyZSB0aGVyZSBhcmUgYXQgbGVhc3QgMiB2YWx1ZXMsIHNvIGl0IGlzIHNhZmUgdG8gaGF2ZSBubyBpbml0aWFsIHZhbHVlXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbihwcmV2LCBuZXh0KSB7XG4gICAgICAgIHJldHVybiBkZWVwbWVyZ2UocHJldiwgbmV4dCwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH0pXG59O1xuXG5yZXR1cm4gZGVlcG1lcmdlXG5cbn0pKTtcbn0pO1xuXG52YXIgbmFtZXNwYWNlc18xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xudmFyIG5hbWVzcGFjZXMgPSB7XG4gIHN2Zzoge1xuICAgIG5hbWU6ICd4bWxucycsXG4gICAgdXJpOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gIH0sXG4gIHhsaW5rOiB7XG4gICAgbmFtZTogJ3htbG5zOnhsaW5rJyxcbiAgICB1cmk6ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJ1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuYW1lc3BhY2VzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG59KTtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIG9iamVjdFRvQXR0cnNTdHJpbmcgPSBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJzKS5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICB2YXIgdmFsdWUgPSBhdHRyc1thdHRyXS50b1N0cmluZygpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgICByZXR1cm4gKGF0dHIgKyBcIj1cXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiKTtcbiAgfSkuam9pbignICcpO1xufTtcblxudmFyIHN2ZyA9IG5hbWVzcGFjZXNfMS5zdmc7XG52YXIgeGxpbmsgPSBuYW1lc3BhY2VzXzEueGxpbms7XG5cbnZhciBkZWZhdWx0QXR0cnMgPSB7fTtcbmRlZmF1bHRBdHRyc1tzdmcubmFtZV0gPSBzdmcudXJpO1xuZGVmYXVsdEF0dHJzW3hsaW5rLm5hbWVdID0geGxpbmsudXJpO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29udGVudF1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXR0cmlidXRlc11cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIHdyYXBJblN2Z1N0cmluZyA9IGZ1bmN0aW9uIChjb250ZW50LCBhdHRyaWJ1dGVzKSB7XG4gIGlmICggY29udGVudCA9PT0gdm9pZCAwICkgY29udGVudCA9ICcnO1xuXG4gIHZhciBhdHRycyA9IGRlZXBtZXJnZShkZWZhdWx0QXR0cnMsIGF0dHJpYnV0ZXMgfHwge30pO1xuICB2YXIgYXR0cnNSZW5kZXJlZCA9IG9iamVjdFRvQXR0cnNTdHJpbmcoYXR0cnMpO1xuICByZXR1cm4gKFwiPHN2ZyBcIiArIGF0dHJzUmVuZGVyZWQgKyBcIj5cIiArIGNvbnRlbnQgKyBcIjwvc3ZnPlwiKTtcbn07XG5cbnZhciBCcm93c2VyU3ByaXRlU3ltYm9sID0gKGZ1bmN0aW9uIChTcHJpdGVTeW1ib2wkJDEpIHtcbiAgZnVuY3Rpb24gQnJvd3NlclNwcml0ZVN5bWJvbCAoKSB7XG4gICAgU3ByaXRlU3ltYm9sJCQxLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBpZiAoIFNwcml0ZVN5bWJvbCQkMSApIEJyb3dzZXJTcHJpdGVTeW1ib2wuX19wcm90b19fID0gU3ByaXRlU3ltYm9sJCQxO1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFNwcml0ZVN5bWJvbCQkMSAmJiBTcHJpdGVTeW1ib2wkJDEucHJvdG90eXBlICk7XG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQnJvd3NlclNwcml0ZVN5bWJvbDtcblxuICB2YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBpc01vdW50ZWQ6IHt9IH07XG5cbiAgcHJvdG90eXBlQWNjZXNzb3JzLmlzTW91bnRlZC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5ub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAgICogQHJldHVybiB7QnJvd3NlclNwcml0ZVN5bWJvbH1cbiAgICovXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wuY3JlYXRlRnJvbUV4aXN0aW5nTm9kZSA9IGZ1bmN0aW9uIGNyZWF0ZUZyb21FeGlzdGluZ05vZGUgKG5vZGUpIHtcbiAgICByZXR1cm4gbmV3IEJyb3dzZXJTcHJpdGVTeW1ib2woe1xuICAgICAgaWQ6IG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpLFxuICAgICAgdmlld0JveDogbm9kZS5nZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnKSxcbiAgICAgIGNvbnRlbnQ6IG5vZGUub3V0ZXJIVE1MXG4gICAgfSk7XG4gIH07XG5cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgdGhpcy51bm1vdW50KCk7XG4gICAgfVxuICAgIFNwcml0ZVN5bWJvbCQkMS5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR8c3RyaW5nfSB0YXJnZXRcbiAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICovXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gbW91bnQgKHRhcmdldCkge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgICB9XG5cbiAgICB2YXIgbW91bnRUYXJnZXQgPSB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSA6IHRhcmdldDtcbiAgICB2YXIgbm9kZSA9IHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcblxuICAgIG1vdW50VGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5zdHJpbmdpZnkoKTtcbiAgICByZXR1cm4gcGFyc2Uod3JhcEluU3ZnU3RyaW5nKGNvbnRlbnQpKS5jaGlsZE5vZGVzWzBdO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLnVubW91bnQgPSBmdW5jdGlvbiB1bm1vdW50ICgpIHtcbiAgICB0aGlzLm5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbiAgcmV0dXJuIEJyb3dzZXJTcHJpdGVTeW1ib2w7XG59KFNwcml0ZVN5bWJvbCkpO1xuXG5yZXR1cm4gQnJvd3NlclNwcml0ZVN5bWJvbDtcblxufSkpKTtcbiIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbC5qc1wiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanNcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcImljb25zOC1jbG91ZC01MFwiLFxuICBcInVzZVwiOiBcImljb25zOC1jbG91ZC01MC11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAwIDEwMFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIGlkPVxcXCJpY29uczgtY2xvdWQtNTBcXFwiPjxwYXRoIGQ9XFxcIk0yMS4wNjgwMDA4LDg0Yy0wLjE1MDk5OTEsMC0wLjMwMTAwMDYtMC4wMDQ5OTczLTAuNDUwMDAwOC0wLjAxNTk5ODggYy04LjY2Njk5OTgtMC4yNDQwMDMzLTE1LjY4NzAwMDMtNy40NjcwMDI5LTE1LjY4NzAwMDMtMTYuMTkxMDAxOWMwLTYuNjE3MDAwNiw0LjAwNjAwMDUtMTIuNDE3OTk5Myw5LjgyNDAwMDQtMTQuOTA2OTk3NyBjMC4zMjQ5OTk4LTIuNjE3MDAwNiwxLjIyNTAwMDQtNS4xNTgwMDA5LDIuNjkyOTk5OC03LjU5MTk5OTFjMi43OTg5OTk4LTQuNjQ0MDAxLDcuMzA1MDAwMy03Ljg5MjAwMjEsMTIuMzYxMDAwMS04LjkwOTk5OTggQzMxLjA4NjAwMDQsMzYuMTI5MDAxNiwzMi4zODIsMzYsMzMuNjY0MDAxNSwzNmMwLjA2OTk5OTcsMCwwLjEzOTk5OTQsMCwwLjIwODk5OTYsMC4wMDA5OTk1IGMxLjg0NTAwMTItNC42MDIwMDEyLDUuMDI1MDAxNS04LjU0ODk5OTgsOS4yMzUwMDA2LTExLjM4MTAwMDVjNC4xMDU5OTktMi43NjA5OTk3LDguODczMDAxMS00LjIyMTAwMDcsMTMuNzg5MDAxNS00LjIyMTAwMDcgYzIuNDU1MDAxOCwwLDQuOTM1MDAxNCwwLjM2MTk5OTUsNy4zNzAwMDI3LDEuMDc1MDAwOGM3LjMwOTk5NzYsMi4xMzk5OTk0LDEzLjI1Mjk5ODQsNy43MTI5OTkzLDE1LjkwMDAwMTUsMTQuOTA5MDAwNCBjMC45MDg5OTY2LDIuNDc0OTk4NSwxLjQ0MDAwMjQsNS4wNDAwMDA5LDEuNTgzMDAwMiw3LjYwNDAwMDFjMS44ODgwMDA1LDAuMjU5OTk4MywzLjc1Mjk5ODQsMC43OTI5OTkzLDUuNTY5MDAwMiwxLjU5NDAwMTggYzUuMzM0OTk5MSwyLjM0OTk5ODUsOS40NDIwMDEzLDcuMDk5OTk4NSwxMC45ODc5OTksMTIuNzA2MDAxM2MxLjcxMjk5NzQsNi4yMTcwMDI5LDAuNTI0MDAyMSwxMi42NzA5OTc2LTMuMjYzMDAwNSwxNy43MDgwMDAyIGMtMy42NzUwMDMxLDQuODg3MDAxLTkuMjU1OTk2Nyw3Ljc5MTAwMDQtMTUuMzM2OTk4LDcuOTg3OTk5Qzc5LjU0Njk5NzEsODMuOTk0MDAzMyw3OS4zODYwMDE2LDg0LDc5LjIyNDk5ODUsODRIMjEuMDY4MDAwOHpcXFwiIG9wYWNpdHk9XFxcIi4zNVxcXCIgLz48cGF0aCBmaWxsPVxcXCIjRjJGMkYyXFxcIiBkPVxcXCJNMTkuMDY4MDAwOCw4MmMtMC4xNTA5OTkxLDAtMC4zMDEwMDA2LTAuMDA0OTk3My0wLjQ1MDAwMDgtMC4wMTU5OTg4IEM5Ljk1MTk5OTcsODEuNzQwOTk3MywyLjkzMTk5OTksNzQuNTE2OTk4MywyLjkzMTk5OTksNjUuNzkzOTk4N2MwLTYuNjE3MDAwNiw0LjAwNTk5OTYtMTIuNDE3OTk5Myw5LjgyNDAwMDQtMTQuOTA2OTk3NyBjMC4zMjQ5OTk4LTIuNjE3MDAwNiwxLjIyNTAwMDQtNS4xNTgwMDA5LDIuNjkyOTk5OC03LjU5MTk5OTFjMi43OTkwMDA3LTQuNjQ0MDAxLDcuMzA0OTk5NC03Ljg5MjAwMjEsMTIuMzYxMDAxLTguOTA5OTk5OCBDMjkuMDg2MDAwNCwzNC4xMjkwMDE2LDMwLjM4MiwzNCwzMS42NjM5OTk2LDM0YzAuMDY5OTk5NywwLDAuMTM5OTk5NCwwLDAuMjA4OTk5NiwwLjAwMDk5OTUgYzEuODQ0OTk5My00LjYwMjAwMTIsNS4wMjQ5OTk2LTguNTQ4OTk5OCw5LjIzNDk5ODctMTEuMzgxMDAwNWM0LjEwNTk5OS0yLjc2MDk5OTcsOC44NzMwMDExLTQuMjIxMDAwNywxMy43ODg5OTc3LTQuMjIxMDAwNyBjMi40NTUwMDE4LDAsNC45MzUwMDE0LDAuMzYxOTk5NSw3LjM2OTk5ODksMS4wNzUwMDA4YzcuMzEwMDAxNCwyLjEzOTk5OTQsMTMuMjUzMDAyMiw3LjcxMjk5OTMsMTUuODk5OTk3NywxNC45MDkwMDA0IGMwLjkwODk5NjYsMi40NzQ5OTg1LDEuNDQwMDAyNCw1LjA0MDAwMDksMS41ODMwMDAyLDcuNjA0MDAwMWMxLjg4ODAwMDUsMC4yNTk5OTgzLDMuNzUyOTk4NCwwLjc5Mjk5OTMsNS41NjkwMDAyLDEuNTk0MDAxOCBjNS4zMzQ5OTkxLDIuMzQ5OTk4NSw5LjQ0MjAwMTMsNy4wOTk5OTg1LDEwLjk4Nzk5OSwxMi43MDYwMDEzYzEuNzEyOTk3NCw2LjIxNjk5OTEsMC41MjQwMDIxLDEyLjY3MDk5NzYtMy4yNjMwMDA1LDE3LjcwODAwMDIgYy0zLjY3NTAwMzEsNC44ODcwMDEtOS4yNTU5OTY3LDcuNzkxMDAwNC0xNS4zMzY5OTgsNy45ODc5OTlDNzcuNTQ2OTk3MSw4MS45OTQwMDMzLDc3LjM4NjAwMTYsODIsNzcuMjI0OTk4NSw4MkgxOS4wNjgwMDA4elxcXCIgLz48cGF0aCBmaWxsPVxcXCIjNzBCRkZGXFxcIiBkPVxcXCJNODIuOTUzMDAyOSw0OS4yNDU5OTg0Yy0zLjcxNzAwMjktMS42MzgwMDA1LTcuMjY4OTk3Mi0xLjUzMDk5ODItMTAuMzQxMDAzNC0wLjQxNTAwMDkgYzEuMjE4MDAyMy0zLjc5MTk5OTgsMS4yOTU5OTc2LTguMDk3OTk5Ni0wLjM0MjAwMjktMTIuNTU0MDAwOWMtMS45NTA5OTY0LTUuMzA2OTk5Mi02LjM0MTAwMzQtOS40NDIwMDEzLTExLjc0My0xMS4wMjQwMDAyIGMtMTEuOTQ0MDAwMi0zLjQ5Nzk5OTItMjIuODcyOTk3Myw0Ljc1MjAwMDgtMjQuMDA5OTk4MywxNS45MTkwMDA2Yy0yLjI2NTk5ODgtMC45NzQ5OTg1LTQuODY5OTk4OS0xLjMxMDAwMTQtNy41OTAwMDAyLTAuNzYzMDAwNSBjLTMuNDMxOTk5MiwwLjY4OTk5ODYtNi4zNTQwMDAxLDIuOTQ5MDAxMy04LjE2ODk5ODcsNS45NTg5OTk2Yy0yLjA3Mzk5OTQsMy40NDEwMDE5LTIuMjQyMDAwNiw2LjYzOTk5OTQtMS41NjI5OTk3LDkuNTEwMDAyMSBjLTAuMTE4LTAuMDA0MDAxNi0wLjIzMzk5OTMtMC4wMTgwMDE2LTAuMzUzMDAwNi0wLjAxODAwMTZjLTUuMzg5OTk5NCwwLTkuNzU4OTk5OCw0LjM5NTAwMDUtOS43NTg5OTk4LDkuODE1OTk4MSBjMCw1LjQxOTk5ODIsNC4zNjgsOS44MTQwMDMsOS43NTU5OTk2LDkuODE2MDAxOUwxOC44Mzc5OTkzLDc1LjVoNTguNTgzMDAwMmwtMC4wMDA5OTk1LTAuMDA5MDAyNyBjOC43MzMwMDE3LTAuMTEwMDAwNiwxNS40OTcwMDE2LTguNDQ2OTk4NiwxMi45NTYwMDEzLTE3LjY2NjAwMDQgQzg5LjMyMzk5NzUsNTQuMDA3OTk5NCw4Ni41NTk5OTc2LDUwLjgzNTk5ODUsODIuOTUzMDAyOSw0OS4yNDU5OTg0elxcXCIgLz48cGF0aCBmaWxsPVxcXCIjNDAzOTZFXFxcIiBkPVxcXCJNNzcuNDIwOTk3Niw3N0gxOC44Mzc5OTkzYy0wLjA2MTAwMDgsMC0wLjEyMDAwMDgtMC4wMDI5OTg0LTAuMTgwMDAwMy0wLjAxMTAwMTYgYy02LjEyMzAwMDEtMC4wOTk5OTg1LTExLjA3NDk5OTgtNS4xMzgwMDA1LTExLjA3NDk5OTgtMTEuMzE0MDAzYzAtNS43NTc5OTk0LDQuMzAwOTk5Ni0xMC41MjUwMDE1LDkuODQzOTk4OS0xMS4yMjcwMDEyIGMtMC4zNDAwMDAyLTMuMDYyOTk5NywwLjM0NjAwMDctNi4wMzQwMDA0LDIuMDQ3MDAwOS04Ljg1NDk5OTVjMi4wOTc5OTk2LTMuNDc5OTk5NSw1LjQzNjAwMDgtNS45MDU5OTgyLDkuMTU2OTk5Ni02LjY1NDk5ODggYzIuMjUtMC40NTE5OTk3LDQuNTIyMDAxMy0wLjM3NDAwMDUsNi42NzA5OTk1LDAuMjIwMDAxMmMxLjAyNTAwMTUtNS4yMTkwMDE4LDQuMDY0OTk4Ni05LjgyMTk5ODYsOC41Mjg5OTkzLTEyLjgyNTAwMDggYzUuMDMxMDAyLTMuMzg0MDAwOCwxMS4xMDc5OTc5LTQuMjc3OTk5OSwxNy4xMTcwMDA2LTIuNTE5MDAxYzUuODUwOTk3OSwxLjcxMjk5OTMsMTAuNjA4MDAxNyw2LjE3OTAwMDksMTIuNzI5MDAzOSwxMS45NDU5OTkxIGMxLjMyNTk5NjQsMy42MTAwMDA2LDEuNjY0MDAxNSw3LjM1NDk5OTUsMS4wMDM5OTc4LDEwLjk2OTAwMThjMi45NTQwMDI0LTAuNTE5MDAxLDUuOTc1OTk3OS0wLjEzMjk5OTQsOC44NzU5OTk1LDEuMTQ1MDAwNSBjNC4wMTM5OTk5LDEuNzY5MDAxLDcuMTAzOTk2Myw1LjMzOTAwMDcsOC4yNjQ5OTk0LDkuNTUxOTk4MWMxLjMxMDk5Nyw0Ljc1NywwLjQxMjAwMjYsOS42NzkwMDA5LTIuNDYzOTk2OSwxMy41MDQ5OTczIGMtMi44MTcwMDEzLDMuNzQ3MDAxNi03LjA5MzAwMjMsNS45NDc5OTgtMTEuNzUwOTk5NSw2LjA1Njk5OTJDNzcuNTQ1OTk3Niw3Ni45OTYwMDIyLDc3LjQ4MzAwMTcsNzcsNzcuNDIwOTk3Niw3N3ogTTE5LjAwNyw3NCBoNTguMjUyMDAyN2MwLjA0Njk5NzEtMC4wMDQ5OTczLDAuMDk1MDAxMi0wLjAwODAwMzIsMC4xNDI5OTc3LTAuMDA5MDAyNyBjMy43ODYwMDMxLTAuMDQ2OTk3MSw3LjI3MTAwMzctMS44MTk5OTk3LDkuNTU4OTk4MS00Ljg2Mjk5OWMyLjMxMzAwMzUtMy4wNzU5OTY0LDMuMDMwOTk4Mi03LjA1MDk5ODcsMS45NzAwMDEyLTEwLjkwNDk5ODggYy0wLjkyNDAwMzYtMy4zNTMwMDA2LTMuMzg1MDAyMS02LjE5NDk5OTctNi41ODIwMDA3LTcuNjA0MDAwMWgtMC4wMDA5OTk1IGMtMy4wNzU5OTY0LTEuMzU1OTk5LTYuMTgwOTk5OC0xLjQ4MzAwMTctOS4yMjI5OTk2LTAuMzc3OTk4NGMtMC41MzkwMDE1LDAuMTk0OTk5Ny0xLjE0MDk5ODgsMC4wNjgwMDA4LTEuNTUzMDAxNC0wLjMyODk5ODYgYy0wLjQxMzAwMi0wLjM5Njk5OTQtMC41NjMwMDM1LTAuOTkzOTk5NS0wLjM4ODAwMDUtMS41MzkwMDE1QzcyLjM4Mjk5NTYsNDQuNjM2MDAxNiw3Mi4yNzI5OTUsNDAuNjMyLDcwLjg2MTk5OTUsMzYuNzk1MDAyIGMtMS43OTI5OTkzLTQuODc4MDAwMy01LjgxNDAwMy04LjY1NDk5ODgtMTAuNzU3LTEwLjEwMjAwMTJjLTUuMTM2MDAxNi0xLjUwNDk5OTItMTAuMzIxOTk4Ni0wLjc0Nzk5OTItMTQuNTk4OTk5LDIuMTI4OTk5NyBjLTQuMjQ1OTk4NCwyLjg1NjAwMDktNi45NzkwMDAxLDcuNDEzOTk5Ni03LjQ5NzAwMTYsMTIuNTAyMDAwOGMtMC4wNDgwMDAzLDAuNDc2MDAxNy0wLjMxOTk5OTcsMC44OTg5OTgzLTAuNzMxOTk4NCwxLjE0MDk5ODggYy0wLjQxMDk5OTMsMC4yNDIwMDA2LTAuOTE1MDAwOSwwLjI3Mzk5ODMtMS4zNTMwMDA2LDAuMDg0OTk5MWMtMi4wOTI5OTg1LTAuOTAxMDAxLTQuNDA5MDAwNC0xLjEzMi02LjcwMTAwMDItMC42Njk5OTgyIGMtMi44OTgwMDA3LDAuNTgzMDAwMi01LjUxNTk5ODgsMi41MDA5OTk1LTcuMTgwMDAwMyw1LjI2MzAwMDVjLTEuNjMxMDAwNSwyLjcwNDk5OC0yLjA4NDk5OTEsNS40NDkwMDEzLTEuMzg4MDAwNSw4LjM4OTk5OTQgYzAuMTA3MDAwNCwwLjQ1NjAwMTMtMC4wMDM5OTk3LDAuOTM2MDAwOC0wLjMwMTAwMDYsMS4yOTgwMDAzcy0wLjc0Mzk5OTUsMC41NTc5OTg3LTEuMjE1MDAwMiwwLjU0NzAwMDlsLTAuMjk4MDAwMy0wLjAxNjk5ODMgYy00LjU1Mzk5OTksMC04LjI1ODk5OTgsMy43Mjk5OTk1LTguMjU4OTk5OCw4LjMxNDk5ODZjMCw0LjU4Mzk5OTYsMy43MDM5OTk1LDguMzE0MDAzLDguMjU4MDAwNCw4LjMxNjAwMTkgQzE4Ljg5NTk5OTksNzMuOTkwOTk3MywxOC45NTEwMDAyLDczLjk5NDAwMzMsMTkuMDA3LDc0elxcXCIgLz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sLmpzXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZC5qc1wiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiaWNvbnM4LWNsb3Vkcy01MFwiLFxuICBcInVzZVwiOiBcImljb25zOC1jbG91ZHMtNTAtdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwMCAxMDBcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBpZD1cXFwiaWNvbnM4LWNsb3Vkcy01MFxcXCI+PHBhdGggZD1cXFwiTTgwLjU3MiwzMy4zNzhDNzguMzk4LDIxLjc5Myw2OC4yMDcsMTMsNTYsMTNcXHRjLTEwLjQ4OSwwLTE5LjY1OCw2LjUwMy0yMy4zMTMsMTZjLTkuOTQsMC4wMzItMTguMTMxLDcuNjM4LTE5LjA5MiwxNy4zMzdDNy45MDQsNDguODI4LDQsNTQuNTE3LDQsNjFcXHRjMCw4LjQ3NCw2LjYyMiwxNS40MzEsMTQuOTYyLDE1Ljk2N0MyMS40ODcsODQuNTU1LDI4LjY4Miw5MCwzNyw5MGgzOGM5LjM3NCwwLDE3LTcuNjI2LDE3LTE3YzAtMC43NjEtMC4wNTEtMS41MTctMC4xNTEtMi4yNjRcXHRDOTYuMDYzLDY2LjYyNCw5OC41LDYwLjk1NCw5OC41LDU1Qzk4LjUsNDQuMjYsOTAuNzY1LDM1LjI5Miw4MC41NzIsMzMuMzc4elxcXCIgb3BhY2l0eT1cXFwiLjM1XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiNmMmYyZjJcXFwiIGQ9XFxcIk03OC41NzIsMzEuMzc4Qzc2LjM5OCwxOS43OTMsNjYuMjA3LDExLDU0LDExYy0xMC40ODksMC0xOS42NTgsNi41MDMtMjMuMzEzLDE2XFx0Yy05Ljk0LDAuMDMyLTE4LjEzMSw3LjYzOC0xOS4wOTIsMTcuMzM3QzUuOTA0LDQ2LjgyOCwyLDUyLjUxNywyLDU5YzAsOC40NzQsNi42MjIsMTUuNDMxLDE0Ljk2MiwxNS45NjdcXHRDMTkuNDg3LDgyLjU1NSwyNi42ODIsODgsMzUsODhoMzhjOS4zNzQsMCwxNy03LjYyNiwxNy0xN2MwLTAuNzYxLTAuMDUxLTEuNTE3LTAuMTUxLTIuMjY0Qzk0LjA2Myw2NC42MjQsOTYuNSw1OC45NTQsOTYuNSw1M1xcdEM5Ni41LDQyLjI2LDg4Ljc2NSwzMy4yOTIsNzguNTcyLDMxLjM3OHpcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzcwYmZmZlxcXCIgZD1cXFwiTTkwLDUzYzAtOC41Ni02Ljk0LTE1LjUtMTUuNS0xNS41Yy0wLjcwOCwwLTEuNCwwLjA2NC0yLjA4NCwwLjE1NkM3Mi40NjUsMzcuMTEsNzIuNSwzNi41NTksNzIuNSwzNlxcdGMwLTEwLjIxNy04LjI4My0xOC41LTE4LjUtMTguNWMtOS42OTUsMC0xNy42MzQsNy40NjEtMTguNDIyLDE2Ljk1M2MtMS40OS0wLjYxLTMuMTE4LTAuOTUzLTQuODI4LTAuOTUzXFx0QzIzLjcwOCwzMy41LDE4LDM5LjIwOCwxOCw0Ni4yNWMwLDEuMTMzLDAuMTYyLDIuMjI2LDAuNDQsMy4yNzJDMTguMjkzLDQ5LjUxNiwxOC4xNDgsNDkuNSwxOCw0OS41Yy01LjI0NywwLTkuNSw0LjI1My05LjUsOS41XFx0czQuMjUzLDkuNSw5LjUsOS41aDQuNTI1QzIyLjUxOSw2OC42NjcsMjIuNSw2OC44MzEsMjIuNSw2OWMwLDYuOTA0LDUuNTk2LDEyLjUsMTIuNSwxMi41aDM4YzUuNzk5LDAsMTAuNS00LjcwMSwxMC41LTEwLjVcXHRjMC0xLjY4Mi0wLjQwNi0zLjI2Ny0xLjEwOS00LjY3NkM4Ni45NDEsNjMuNjIzLDkwLDU4LjY3NSw5MCw1M3pcXFwiIC8+PHBhdGggZmlsbD1cXFwiI2Q5ZWVmZlxcXCIgZD1cXFwiTTgyLDcxYzAsNC45Ni00LjA0LDktOSw5SDM1Yy02LjA3LDAtMTEtNC45My0xMS0xMXM0LjkzLTExLDExLTExYzAuNjYsMCwxLjM1LDAuMDcsMi4wNSwwLjJcXHRzMS40LTAuMjUsMS42Ny0wLjkxQzQxLjI2LDUxLjA0LDQ3LjI2LDQ3LDU0LDQ3YzguMTEsMCwxNC45NSw1LjgxLDE2LjI2LDEzLjgyYzAuMTMsMC44LDAuODYsMS4zNSwxLjY2LDEuMjVcXHRDNzIuMzMsNjIuMDIsNzIuNjgsNjIsNzMsNjJDNzcuOTYsNjIsODIsNjYuMDQsODIsNzF6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiM0MDM5NmVcXFwiIGQ9XFxcIk03Myw4M0gzNWMtNy4zODMsMC0xMy40NS01Ljc0NS0xMy45NjUtMTNIMThjLTYuMDY1LDAtMTEtNC45MzUtMTEtMTFcXHRjMC01LjYsNC4yMDctMTAuMjM1LDkuNjI1LTEwLjkxNGMtMC4wODMtMC42MTctMC4xMjUtMS4yMjktMC4xMjUtMS44MzZDMTYuNSwzOC4zOTMsMjIuODkzLDMyLDMwLjc1LDMyXFx0YzEuMjE2LDAsMi40MTQsMC4xNTMsMy41NzksMC40NTdDMzYuMDIsMjMuMDkxLDQ0LjMyLDE2LDU0LDE2YzExLjAyOCwwLDIwLDguOTcyLDIwLDIwYzAsMC4wMDMsMCwwLjAwNiwwLDAuMDA5XFx0Qzc0LjE2OSwzNi4wMDMsNzQuMzM1LDM2LDc0LjUsMzZjOS4zNzQsMCwxNyw3LjYyNiwxNywxN2MwLDUuNTE4LTIuNzQsMTAuNzI3LTcuMjMxLDEzLjg5NEM4NC43NTUsNjguMjExLDg1LDY5LjU4Nyw4NSw3MVxcdEM4NSw3Ny42MTcsNzkuNjE3LDgzLDczLDgzeiBNMTgsNTFjLTQuNDExLDAtOCwzLjU4OS04LDhzMy41ODksOCw4LDhoNC41MjVjMC40MDksMCwwLjc5OSwwLjE2NywxLjA4MiwwLjQ2MVxcdGMwLjI4MywwLjI5NSwwLjQzNCwwLjY5MiwwLjQxNywxLjEwMWwtMC4wMTQsMC4yMzRDMjQuMDA2LDY4Ljg2MywyNCw2OC45MzEsMjQsNjljMCw2LjA2NSw0LjkzNSwxMSwxMSwxMWgzOGM0Ljk2MiwwLDktNC4wMzcsOS05XFx0YzAtMS4zOTQtMC4zMi0yLjc0MS0wLjk1MS00LjAwNmMtMC4zNTEtMC43MDMtMC4wOTktMS41NTksMC41NzctMS45NkM4NS45Myw2Mi40NzksODguNSw1Ny45NzksODguNSw1M2MwLTcuNzItNi4yOC0xNC0xNC0xNFxcdGMtMC41NiwwLTEuMTU4LDAuMDQ1LTEuODg0LDAuMTQzYy0wLjQ1MiwwLjA1OC0wLjkwNy0wLjA4OC0xLjIzNi0wLjQwMmMtMC4zMy0wLjMxNC0wLjQ5OC0wLjc2Mi0wLjQ1OC0xLjIxNlxcdEM3MC45NzUsMzYuOTI1LDcxLDM2LjQ0LDcxLDM2YzAtOS4zNzQtNy42MjYtMTctMTctMTdjLTguNzY3LDAtMTYuMjAyLDYuODQzLTE2LjkyNywxNS41NzdjLTAuMDQsMC40NzctMC4zMDQsMC45MDUtMC43MTEsMS4xNTVcXHRjLTAuNDA5LDAuMjUtMC45MTEsMC4yODktMS4zNTMsMC4xMDhDMzMuNjQ5LDM1LjI4MywzMi4yMTYsMzUsMzAuNzUsMzVjLTYuMjAzLDAtMTEuMjUsNS4wNDctMTEuMjUsMTEuMjVcXHRjMCwwLjk0MiwwLjEzMSwxLjkxNCwwLjM4OSwyLjg4OGMwLjEyMywwLjQ2MiwwLjAxOCwwLjk1NS0wLjI4MywxLjMyN2MtMC4zLDAuMzcxLTAuNzUsMC41NzctMS4yMzcsMC41NTZsLTAuMTktMC4wMTFcXHRDMTguMTIsNTEuMDA1LDE4LjA2MSw1MSwxOCw1MXpcXFwiIC8+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbCIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbC5qc1wiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanNcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcImljb25zOC1oYXplLTUwXCIsXG4gIFwidXNlXCI6IFwiaWNvbnM4LWhhemUtNTAtdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwMCAxMDBcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBpZD1cXFwiaWNvbnM4LWhhemUtNTBcXFwiPjxwYXRoIGQ9XFxcIk05NC45MzcsNDUuNzI3bC01LjgzOS0yLjc2NmMxLjI1NS0xLjg3NiwxLjU5Ni00LjI1NywwLjg3NS02LjQyXFx0Yy0wLjgyNS0yLjQ5Ny0yLjkzOC00LjM3Ny01LjUxMS00LjkwNmwtMC41OTYtMC4xMjJsMi4xOTgtNi4xNTRjMS4xMDItMy4wOC0wLjIxNi02LjQ2NC0zLjEyLTguMDRcXHRjLTAuOTUxLTAuNTItMi4wMjYtMC43OTQtMy4xMS0wLjc5NGMtMC43ODUsMC0xLjU1NiwwLjE0MS0yLjI4LDAuNDE0bC01LjY4MSwyLjEyN0w2OSwyMC4xNzljLTAuNzE4LTMuNDYyLTAuODI0LTcuMDI1LTQuMzYyLTcuMDI1XFx0Yy0xLjM3MywwLTIuNzA4LDAuMzg1LTMuODU5LDEuMDk3bC00LjE1Ny0wLjIwNmMtMS4wOTctMi4xOTQtMS45OTYtOC45NzktNC40NzItOS4wMzdsLTAuMTE2LTAuMDAxXFx0Yy0yLjQyLDAtNC42NDYsMS4zMjgtNS44NDQsMy41MjdsLTMuMTEyLDUuOTE0Yy0xLjIyMi0wLjg0LTIuNjY4LTEuMjk0LTQuMTU5LTEuMjk0Yy0zLjUzOSwwLTYuNTEzLDIuNDE5LTcuMjMsNS44ODZsLTAuMDI0LDAuMTE5XFx0bC02LjMwMi0yLjI1Yy0wLjcwMS0wLjI0OS0xLjQzMy0wLjM3NS0yLjE3Ni0wLjM3NWMtMC40MzQsMC0wLjg2OSwwLjA0NC0xLjI5OSwwLjEzMWwtMC4xMDIsMC4wMjFcXHRjLTEuMjE2LDAuMjQ3LTIuMzMxLDAuODM0LTMuMjI1LDEuNjk3Yy0xLjgxMiwxLjc1MS0yLjQ2Nyw0LjMyOS0xLjcxOCw2LjcwN2wyLjA0Niw2LjU5Yy0yLjUxMSwwLjU4OS00LjQ4NiwyLjM5NC01LjMyLDQuODk2XFx0Yy0wLjY3NSwyLjA4NC0wLjM3OCw0LjM1NywwLjc1OCw2LjE4M2wtNi4yNjUsMi45NjdjLTIuMjQxLDEuMDYyLTMuNjY2LDMuMjYyLTMuNzE3LDUuNzQxYy0wLjA1MSwyLjQ4MywxLjI4NCw0Ljc0LDMuNDgsNS44OVxcdGw0Ljc2NSwyLjQ5OUMxMi4yMDQsNjEuMDE0LDEyLDYyLjI0MSwxMiw2My41YzAsMC43LDAuMDYyLDEuMzkyLDAuMTg1LDIuMDY3QzEwLjE4Nyw2Ny42NjUsOSw3MC40ODksOSw3My41XFx0YzAsNS44NjIsNC40MDksMTAuNzE1LDEwLjA4NiwxMS40MTRDMTkuNzg1LDkwLjU5MSwyNC42MzgsOTUsMzAuNSw5NWgzN2M1LjgzNSwwLDEwLjY2OS00LjM2OCwxMS40MDMtMTAuMDA3XFx0Qzg1LjA1OSw4NC43NzksOTAsNzkuNzA2LDkwLDczLjVjMC0xLjYzNy0wLjM1NS0zLjIyOS0xLjAwOC00LjY4MWMwLjQyMS0wLjU4MywwLjc1NS0xLjIyMiwwLjk3OC0xLjg5NlxcdGMwLjc0OC0yLjI0OCwwLjM1OS00LjcxOS0xLjAwMS02LjYyMWw1Ljk3LTIuODI4YzIuMjU3LTEuMDcsMy43MTYtMy4zNzYsMy43MTYtNS44NzRTOTcuMTk1LDQ2Ljc5Nyw5NC45MzcsNDUuNzI3elxcXCIgb3BhY2l0eT1cXFwiLjM1XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiNmMmYyZjJcXFwiIGQ9XFxcIk05Mi45MzcsNDMuNzI3bC01LjgzOS0yLjc2NmMxLjI1NS0xLjg3NiwxLjU5Ni00LjI1NywwLjg3NS02LjQyXFx0Yy0wLjgyNS0yLjQ5Ny0yLjkzOC00LjM3Ny01LjUxMS00LjkwNmwtMC41OTYtMC4xMjJsMi4xOTgtNi4xNTRjMS4xMDItMy4wOC0wLjIxNi02LjQ2NC0zLjEyLTguMDRcXHRjLTAuOTUxLTAuNTItMi4wMjYtMC43OTQtMy4xMS0wLjc5NGMtMC43ODUsMC0xLjU1NiwwLjE0MS0yLjI4LDAuNDE0bC01LjY4MSwyLjEyN2wtMC4wMDctMC4wMzJcXHRjLTAuNzE4LTMuNDYyLTMuNjkxLTUuODc5LTcuMjI5LTUuODc5Yy0xLjM3MywwLTIuNzA4LDAuMzg1LTMuODU5LDEuMDk3TDU1Ljk0LDYuNjU4Yy0xLjA5Ny0yLjE5NC0zLjMxNS0zLjU5My01Ljc5MS0zLjY1XFx0bC0wLjExNi0wLjAwMWMtMi40MiwwLTQuNjQ2LDEuMzI4LTUuODQ0LDMuNTI3bC0zLjExMiw1LjkxNGMtMS4yMjItMC44NC0yLjY2OC0xLjI5NC00LjE1OS0xLjI5NGMtMy41MzksMC02LjUxMywyLjQxOS03LjIzLDUuODg2XFx0bC0wLjAyNCwwLjExOWwtNi4zMDItMi4yNWMtMC43MDEtMC4yNDktMS40MzMtMC4zNzUtMi4xNzYtMC4zNzVjLTAuNDM0LDAtMC44NjksMC4wNDQtMS4yOTksMC4xMzFsLTAuMTAyLDAuMDIxXFx0Yy0xLjIxNiwwLjI0Ny0yLjMzMSwwLjgzNC0zLjIyNSwxLjY5N2MtMS44MTIsMS43NTEtMi40NjcsNC4zMjktMS43MTgsNi43MDdsMi4wNDYsNi41OWMtMi41MTEsMC41ODktNC40ODYsMi4zOTQtNS4zMiw0Ljg5NlxcdGMtMC42NzUsMi4wODQtMC4zNzgsNC4zNTcsMC43NTgsNi4xODNsLTYuMjY1LDIuOTY3Yy0yLjI0MSwxLjA2Mi0zLjY2NiwzLjI2Mi0zLjcxNyw1Ljc0MWMtMC4wNTEsMi40ODMsMS4yODQsNC43NCwzLjQ4LDUuODlcXHRsNC43NjUsMi40OTlDMTAuMjA0LDU5LjAxNCwxMCw2MC4yNDEsMTAsNjEuNWMwLDAuNywwLjA2MiwxLjM5MiwwLjE4NSwyLjA2N0M4LjE4Nyw2NS42NjUsNyw2OC40ODksNyw3MS41XFx0YzAsNS44NjIsNC40MDksMTAuNzE1LDEwLjA4NiwxMS40MTRDMTcuNzg1LDg4LjU5MSwyMi42MzgsOTMsMjguNSw5M2gzN2M1LjgzNSwwLDEwLjY2OS00LjM2OCwxMS40MDMtMTAuMDA3XFx0QzgzLjA1OSw4Mi43NzksODgsNzcuNzA2LDg4LDcxLjVjMC0xLjYzNy0wLjM1NS0zLjIyOS0xLjAwOC00LjY4MWMwLjQyMS0wLjU4MywwLjc1NS0xLjIyMiwwLjk3OC0xLjg5NlxcdGMwLjc0OC0yLjI0OCwwLjM1OS00LjcxOS0xLjAwMS02LjYyMWw1Ljk3LTIuODI4YzIuMjU3LTEuMDcsMy43MTYtMy4zNzYsMy43MTYtNS44NzRTOTUuMTk1LDQ0Ljc5Nyw5Mi45MzcsNDMuNzI3elxcXCIgLz48cGF0aCBmaWxsPVxcXCIjZmZjNTcxXFxcIiBkPVxcXCJNNzcuNzE2LDU3LjYxOWMtMC4zMTMtMC4zNTQtMC40NDMtMC44MzMtMC4zNDktMS4yOTZzMC40LTAuODU0LDAuODI3LTEuMDU3bDExLjk2LTUuNjY2XFx0bC0xMS44MDItNS41OWMtMC40MjgtMC4yMDItMC43MzQtMC41OTQtMC44MjgtMS4wNTdjLTAuMDk1LTAuNDYzLDAuMDM1LTAuOTQyLDAuMzQ5LTEuMjk2bDMuNzU0LTQuMjIxXFx0YzAuMzAzLTAuMzQsMC4yMjUtMC43MTEsMC4xNzctMC44NTRjLTAuMDQ4LTAuMTQ1LTAuMjA3LTAuNDg5LTAuNjUyLTAuNTgxbC02LjIyOS0xLjI4NGMtMC40MjYtMC4wODctMC43OTItMC4zNTUtMS4wMDUtMC43MzNcXHRjLTAuMjEzLTAuMzc5LTAuMjUxLTAuODMxLTAuMTA1LTEuMjRsNC4xMzUtMTEuNTc1YzAuMDE0LTAuMDM4LDAuMDA0LTAuMDgtMC4xMTEtMC4xNDNMNjYuNjgzLDI1LjJcXHRjLTAuMTcxLDAuMDY0LTAuMzQ5LDAuMDk2LTAuNTI2LDAuMDk2Yy0wLjI1MSwwLTAuNTAxLTAuMDYzLTAuNzI2LTAuMTg3Yy0wLjM4My0wLjIxMi0wLjY1NS0wLjU4MS0wLjc0My0xLjAxMWwtMS4xODUtNS43NDVcXHRjLTAuMS0wLjQ4LTAuNTE5LTAuNjk5LTAuODY1LTAuNjk5Yy0wLjIxMiwwLTAuNDA0LDAuMDc1LTAuNTcsMC4yMjRMNTguMiwyMS4zMTdjLTAuMjc3LDAuMjQ2LTAuNjMzLDAuMzc5LTAuOTk3LDAuMzc5XFx0Yy0wLjA5MywwLTAuMTg3LTAuMDA5LTAuMjc5LTAuMDI2Yy0wLjQ1Ny0wLjA4Ni0wLjg0OC0wLjM4LTEuMDU5LTAuNzk1bC01LjczNy0xMS4zMWMtMC4wMTgtMC4wMzUtMC4wNTItMC4wNTgtMC4wOTQtMC4wNTlcXHRjLTAuMDM4LDAtMC4wNzQsMC4wMjItMC4wOTIsMC4wNTVsLTYuMDYsMTEuNTEzYy0wLjIxNSwwLjQwOC0wLjYwNSwwLjY5NS0xLjA1OSwwLjc3N2MtMC4wOSwwLjAxNy0wLjE4LDAuMDI0LTAuMjY5LDAuMDI0XFx0Yy0wLjM2NCwwLTAuNzItMC4xMzMtMC45OTctMC4zNzlsLTQuMDY5LTMuNjJjLTAuMTY2LTAuMTQ3LTAuMzU4LTAuMjIzLTAuNTctMC4yMjNjLTAuMzQ3LDAtMC43NjYsMC4yMTktMC44NjUsMC42OTlsLTEuMTg3LDUuNzUyXFx0Yy0wLjA4OCwwLjQyNi0wLjM1NSwwLjc5Mi0wLjczMywxLjAwNWMtMC4yMjgsMC4xMjgtMC40OCwwLjE5Mi0wLjczNSwwLjE5MmMtMC4xNywwLTAuMzQxLTAuMDI5LTAuNTA1LTAuMDg4bC0xMS43MDgtNC4xODFcXHRsLTAuMTA1LDAuMDIxYy0wLjAyOSwwLjAyOC0wLjA0LDAuMDctMC4wMjgsMC4xMDdsMy42OCwxMS44NTRjMC4xMjUsMC40MDQsMC4wNzQsMC44NDMtMC4xNDEsMS4yMDdcXHRjLTAuMjE2LDAuMzY0LTAuNTc0LDAuNjIxLTAuOTg5LDAuNzA2bC01LjE5NiwxLjA3MWMtMC40NDUsMC4wOTItMC42MDQsMC40MzctMC42NTIsMC41OGMtMC4wNDcsMC4xNDUtMC4xMjUsMC41MTYsMC4xNzgsMC44NTVcXHRsMy41ODgsNC4wMzVjMC4zMTMsMC4zNTQsMC40NDMsMC44MzMsMC4zNDksMS4yOTZzLTAuNCwwLjg1NC0wLjgyOCwxLjA1N2wtMTIuMTk3LDUuNzhMMjIsNTYuNWgtMC41Yy0yLjc2MSwwLTUsMi4yMzktNSw1XFx0czIuMjM5LDUsNSw1aC0zYy0yLjc2MSwwLTUsMi4yMzktNSw1czIuMjM5LDUsNSw1aDEwYy0yLjc2MSwwLTUsMi4yMzktNSw1czIuMjM5LDUsNSw1aDM3YzIuNzYxLDAsNS0yLjIzOSw1LTVzLTIuMjM5LTUtNS01aDExXFx0YzIuNzYxLDAsNS0yLjIzOSw1LTVzLTIuMjM5LTUtNS01SDc0YzAtMC41LDAuNTc0LTAuOTEzLDEtMWw2LTJjMC40NDUtMC4wOTIsMC43NTUtMC40ODUsMC44MDMtMC42M1xcdGMwLjA0OC0wLjE0NCwwLjEyNi0wLjUxNS0wLjE3Ny0wLjg1NEw3Ny43MTYsNTcuNjE5elxcXCIgLz48Y2lyY2xlIGN4PVxcXCI1MFxcXCIgY3k9XFxcIjUwLjAwNVxcXCIgcj1cXFwiMTlcXFwiIGZpbGw9XFxcIiNmZmUzODVcXFwiIC8+PHBhdGggZmlsbD1cXFwiI2Q5ZWVmZlxcXCIgZD1cXFwiTTI4LjUsODVjLTEuOTMsMC0zLjUtMS41Ny0zLjUtMy41czEuNTctMy41LDMuNS0zLjVjMC44MjgsMCwxLjUtMC42NzIsMS41LTEuNVMyOS4zMjgsNzUsMjguNSw3NVxcdGgtMTBjLTEuOTMsMC0zLjUtMS41Ny0zLjUtMy41czEuNTctMy41LDMuNS0zLjVoM2MwLjgyOCwwLDEuNS0wLjY3MiwxLjUtMS41UzIyLjMyOCw2NSwyMS41LDY1Yy0xLjkzLDAtMy41LTEuNTctMy41LTMuNVxcdHMxLjU3LTMuNSwzLjUtMy41aDQzYzEuOTMsMCwzLjUsMS41NywzLjUsMy41UzY2LjQzLDY1LDY0LjUsNjVjLTAuODI4LDAtMS41LDAuNjcyLTEuNSwxLjVzMC42NzIsMS41LDEuNSwxLjVoMTJcXHRjMS45MywwLDMuNSwxLjU3LDMuNSwzLjVTNzguNDMsNzUsNzYuNSw3NWgtMTFjLTAuODI4LDAtMS41LDAuNjcyLTEuNSwxLjVzMC42NzIsMS41LDEuNSwxLjVjMS45MywwLDMuNSwxLjU3LDMuNSwzLjVcXHRTNjcuNDMsODUsNjUuNSw4NUgyOC41elxcXCIgLz48cGF0aCBmaWxsPVxcXCIjZjJmMmYyXFxcIiBkPVxcXCJNMzIuNzgyLDU4YzMuMDIsNi40OTMsOS41ODQsMTEuMDA1LDE3LjIxOCwxMS4wMDVjNy4yODYsMCwxMy42MDctNC4xMDYsMTYuNzk1LTEwLjEyNlxcdEM2Ni4xNzksNTguMzM5LDY1LjM4Miw1OCw2NC41LDU4SDMyLjc4MnpcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzQwMzk2ZVxcXCIgZD1cXFwiTTY1LjUsODhoLTM3Yy0zLjU4NCwwLTYuNS0yLjkxNi02LjUtNi41YzAtMS4yODcsMC4zNzYtMi40ODksMS4wMjQtMy41SDE4LjVcXHRjLTMuNTg0LDAtNi41LTIuOTE2LTYuNS02LjVjMC0yLjgxLDEuNzkyLTUuMjA4LDQuMjkzLTYuMTE0QzE1LjQ4LDY0LjMwMSwxNSw2Mi45NTYsMTUsNjEuNWMwLTIuMjcxLDEuMTctNC4yNzMsMi45MzktNS40MzZcXHRsLTkuNzkyLTUuMTM2Yy0wLjUwNC0wLjI2NC0wLjgxNS0wLjc5LTAuODA0LTEuMzU4czAuMzQ0LTEuMDgyLDAuODU3LTEuMzI1bDEyLjE5NC01Ljc3NmwtMy41ODctNC4wMzVcXHRjLTAuNTY2LTAuNjM2LTAuNzQ3LTEuNTAyLTAuNDgzLTIuMzE1YzAuMjc0LTAuODI0LDAuOTM4LTEuNDEzLDEuNzc2LTEuNTg2bDUuMTk2LTEuMDcxbC0zLjY4LTExLjg1NFxcdGMtMC4xODItMC41NzYtMC4wMjItMS4yMDQsMC40MTgtMS42M2MwLjIwNi0wLjE5OSwwLjQ2NC0wLjMzNSwwLjc0My0wLjM5MmwwLjEwNS0wLjAyMWMwLjI3LTAuMDU1LDAuNTQ2LTAuMDM0LDAuODA1LDAuMDU3XFx0bDExLjcwOCw0LjE4MWwxLjE4Ny01Ljc1MWMwLjIzMS0xLjExNywxLjE5MS0xLjg5NiwyLjMzNC0xLjg5NmMwLjU4MiwwLDEuMTI0LDAuMjA4LDEuNTY2LDAuNjAybDQuMDcsMy42Mmw2LjA2LTExLjUxM1xcdGMwLjI5Mi0wLjUzNiwwLjgzMS0wLjg1NiwxLjQxOS0wLjg1NmMwLjYzMiwwLjAxNSwxLjE2OSwwLjM1NCwxLjQzNiwwLjg4OEw1Ny4yLDIwLjE5OWwzLjg2OC0zLjQzOVxcdGMwLjQ0LTAuMzk0LDAuOTgzLTAuNjAzLDEuNTY3LTAuNjAzYzEuMTQzLDAsMi4xMDMsMC43NzksMi4zMzQsMS44OTVsMS4xODUsNS43NDdsMTEuMTUxLTQuMTc1YzAuNDA5LTAuMTU0LDAuODYtMC4xMjIsMS4yNDEsMC4wODZcXHRjMC44NzEsMC40NzMsMS4wMjksMS4zNTEsMC44MDksMS45NjhMNzUuMjIsMzMuMjUxbDYuMjMsMS4yODRjMC44NDEsMC4xNzMsMS41MDQsMC43NjMsMS43NzMsMS41NzhcXHRjMC4yNzEsMC44MTMsMC4wOTIsMS42ODItMC40OCwyLjMyNGwtMy43NTMsNC4yMmwxMS44MDQsNS41OTFjMC41MjMsMC4yNDgsMC44NTcsMC43NzUsMC44NTcsMS4zNTVzLTAuMzM0LDEuMTA3LTAuODU3LDEuMzU1XFx0bC0xMS45Niw1LjY2NmwtMS4xMjEsMC45OTdsMS4xMjEtMC45OTdsMy45MSw0LjM5NmMwLjU3MSwwLjY0MiwwLjc1LDEuNTExLDAuNDc5LDIuMzI2Yy0wLjIwOCwwLjYyOS0wLjg5NCwxLjM2Ny0xLjgxNiwxLjZcXHRsLTIuMDkzLDAuNjk4QzgxLjQ5NCw2Ni42OTMsODMsNjguOTI0LDgzLDcxLjVjMCwzLjU4NC0yLjkxNiw2LjUtNi41LDYuNWgtNS41MjRDNzEuNjI0LDc5LjAxMSw3Miw4MC4yMTMsNzIsODEuNVxcdEM3Miw4NS4wODQsNjkuMDg0LDg4LDY1LjUsODh6IE0yOC41LDc4Yy0xLjkzLDAtMy41LDEuNTctMy41LDMuNXMxLjU3LDMuNSwzLjUsMy41aDM3YzEuOTMsMCwzLjUtMS41NywzLjUtMy41UzY3LjQzLDc4LDY1LjUsNzhcXHRjLTAuODI4LDAtMS41LTAuNjcyLTEuNS0xLjVzMC42NzItMS41LDEuNS0xLjVoMTFjMS45MywwLDMuNS0xLjU3LDMuNS0zLjVTNzguNDMsNjgsNzYuNSw2OEg3NGMtMC44MjgsMC0xLjUtMC42NzItMS41LTEuNVxcdGMwLTEuMjIzLDEuMDQ2LTIuMTg0LDIuMDkyLTIuNDQ1bDUuMjc2LTEuNzU5bC0zLjI3My0zLjY4YzAtMC4wMDEtMC4wMDEtMC4wMDEtMC4wMDEtMC4wMDJjLTAuNjI0LTAuNzAzLTAuODg0LTEuNjczLTAuNjk2LTIuNTkyXFx0YzAuMTg3LTAuOTE5LDAuODA1LTEuNzA5LDEuNjU0LTIuMTExbDkuMDk5LTQuMzExbC04Ljk0MS00LjIzNWMtMC44NS0wLjQwMS0xLjQ2OS0xLjE5Mi0xLjY1NS0yLjExNFxcdGMtMC4xODgtMC45MTYsMC4wNzItMS44ODYsMC42OTYtMi41ODlsMy4wMzQtMy40MTFsLTUuMTY2LTEuMDY1Yy0wLjg0OS0wLjE3My0xLjU4Mi0wLjcwNy0yLjAwOS0xLjQ2NlxcdGMtMC40MjYtMC43NTgtMC41MDMtMS42NjEtMC4yMTItMi40NzlsMy4xMjUtOC43NDhsLTguMzEzLDMuMTEyYy0wLjgwNCwwLjMwNC0xLjc0NSwwLjIzNy0yLjUwMy0wLjE4MlxcdGMtMC43NzEtMC40MjctMS4zMTMtMS4xNjQtMS40ODgtMi4wMjNsLTAuOTY1LTQuNjhsLTMuMDU3LDIuNzE5Yy0wLjY5LDAuNjEzLTEuNjMzLDAuODgxLTIuNTUzLDAuNzA1XFx0Yy0wLjkwNS0wLjE3LTEuNjk3LTAuNzY1LTIuMTE2LTEuNTg5bC00LjUxNy04LjkwM2wtNC44MDIsOS4xMjFjLTAuNDMzLDAuODIzLTEuMjA1LDEuMzktMi4xMTgsMS41NTVcXHRjLTAuODk3LDAuMTY5LTEuODQ1LTAuMTAyLTIuNTI4LTAuNzA4bC0zLjI2LTIuODk5bC0wLjk2OCw0LjY4OGMtMC4xNzUsMC44NTEtMC43MSwxLjU4My0xLjQ2NiwyLjAwOVxcdGMtMC43NDksMC40MjItMS42NjcsMC41MDEtMi40ODEsMC4yMTFsLTkuMDc2LTMuMjQxbDIuODUyLDkuMTg2YzAuMjUsMC44MDgsMC4xNDcsMS42ODgtMC4yODEsMi40MTNcXHRjLTAuNDMzLDAuNzMtMS4xNTQsMS4yNDUtMS45OCwxLjQxNGwtNC4xMywwLjg1MmwyLjg2NywzLjIyNGMwLjYyNSwwLjcwNSwwLjg4NSwxLjY3NSwwLjY5NywyLjU5NFxcdGMtMC4xODcsMC45MTktMC44MDYsMS43MS0xLjY1NywyLjExMmwtOS40NzUsNC40ODhsMTAuNDkyLDUuNTAzYzAuNjExLDAuMzIsMC45MjUsMS4wMTcsMC43NiwxLjY4N0MyMy4yOTEsNTcuNTI5LDIyLjY5LDU4LDIyLDU4XFx0aC0wLjVjLTEuOTMsMC0zLjUsMS41Ny0zLjUsMy41czEuNTcsMy41LDMuNSwzLjVjMC44MjgsMCwxLjUsMC42NzIsMS41LDEuNVMyMi4zMjgsNjgsMjEuNSw2OGgtM2MtMS45MywwLTMuNSwxLjU3LTMuNSwzLjVcXHRzMS41NywzLjUsMy41LDMuNWgxMGMwLjgyOCwwLDEuNSwwLjY3MiwxLjUsMS41UzI5LjMyOCw3OCwyOC41LDc4eiBNODAuNTA2LDYzLjAxNGgwLjAxSDgwLjUwNnogTTgwLjY5Nyw2Mi4wMzFcXHRjLTAuMDE3LDAuMDAzLTAuMDMyLDAuMDA3LTAuMDQ5LDAuMDExQzgwLjY2NSw2Mi4wMzgsODAuNjgxLDYyLjAzNCw4MC42OTcsNjIuMDMxeiBNMjIuNDgxLDIwLjcxMWwwLjAwNCwwLjAxNFxcdEMyMi40ODQsMjAuNzIxLDIyLjQ4MiwyMC43MTYsMjIuNDgxLDIwLjcxMXogTTc2LjUzMywyMC42NjNjLTAuMDAxLDAuMDAyLTAuMDAyLDAuMDAzLTAuMDAyLDAuMDA1TDc2LjUzMywyMC42NjN6IE02My4wNjcsMTguOTk2XFx0bC0wLjAwMiwwLjAwMkM2My4wNjYsMTguOTk3LDYzLjA2NiwxOC45OTcsNjMuMDY3LDE4Ljk5NnogTTQ4Ljc4OSwxMC4yNDRjMC4wMDMsMC4wMDUsMC4wMDUsMC4wMSwwLjAwOCwwLjAxNEw0OC43ODksMTAuMjQ0elxcXCIgLz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sLmpzXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZC5qc1wiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiaWNvbnM4LW1vb24tYW5kLXN0YXJzLTUwXCIsXG4gIFwidXNlXCI6IFwiaWNvbnM4LW1vb24tYW5kLXN0YXJzLTUwLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAxMDAgMTAwXCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgaWQ9XFxcImljb25zOC1tb29uLWFuZC1zdGFycy01MFxcXCI+PHBhdGggZD1cXFwiTTIwLjE3OCwyNy4xOTVDMTIuNzUsMzQuOTE3LDguNzgyLDQ1LjA2NCw5LjAwNCw1NS43NjVjMC4yNTgsMTIuNDM4LDYuMTQsMjMuODkzLDE2LjM3NywzMS40ODFcXHRjNS43MzEsNC4yNDgsMTIuNTY1LDYuODY3LDE5LjY2NSw3LjU1NWMxMi41NjgsMS4yMTgsMjQuNDgyLTMuMjAzLDMzLjA2MS0xMi4xMjJjNS4xMDUtNS4zMDgsOC42NDMtMTEuODk0LDEwLjIzLTE5LjA0OFxcdGwxLjkyNS04LjY3NmMwLjE3Ny0wLjc5Ny0wLjU1My0xLjQ5OS0xLjM0My0xLjI5bC0xLjI1MSwwLjMzMWwxLjY2NS01LjQwNGw5LjA2NC02Ljg4YzAuODAyLTAuNjA5LDAuODAyLTEuODE1LDAtMi40MjRcXHRsLTkuMDcyLTYuODg0TDIwLjE3OCwyNy4xOTV6XFxcIiBvcGFjaXR5PVxcXCIuMzVcXFwiIC8+PHBhdGggZmlsbD1cXFwiI2YyZjJmMlxcXCIgZD1cXFwiTTg3LjMzOSw0Ni42MDFsOS4wNjQtNi44OGMwLjgwMi0wLjYwOSwwLjgwMi0xLjgxNSwwLTIuNDI0bC05LjA3Mi02Ljg4NGwtNy42MzEtMTAuNDQ1XFx0Yy0wLjQ1My0wLjYyLTEuMTA5LTEuMDYyLTEuODUzLTEuMjQ5bC0zLjI4Ny0wLjgyNWwtMTAuMDQ3LTMuNjYzTDU4LjE4LDUuNjE1Yy0wLjU4NS0wLjc5Ni0xLjc3NS0wLjc5Ni0yLjM2LDAuMDAxbC02LjMyOSw4LjYyXFx0bC0zLjIxNCwxLjE3NWwwLjM3Mi0xLjY3NWMwLjIyNy0xLjAyMi0wLjcxLTEuOTIyLTEuNzIyLTEuNjU0bC04LjEwMiwyLjE0NGMtNy4wOTQsMS44NzctMTMuNTQsNS42NzMtMTguNjQzLDEwLjk3OVxcdGMtNy40MjgsNy43MjItMTEuMzk2LDE3Ljg2OS0xMS4xNzQsMjguNTdjMC4yNTgsMTIuNDM4LDYuMTQsMjMuODkzLDE2LjM3NywzMS40ODFjNS43MzEsNC4yNDgsMTIuNTY1LDYuODY3LDE5LjY2NSw3LjU1NVxcdGMxMi41NjgsMS4yMTgsMjQuNDgyLTMuMjAzLDMzLjA2MS0xMi4xMjJjNS4xMDUtNS4zMDgsOC42NDMtMTEuODk0LDEwLjIzLTE5LjA0OGwxLjkyNS04LjY3NmMwLjE3Ny0wLjc5Ny0wLjU1My0xLjQ5OS0xLjM0My0xLjI5XFx0bC0xLjI1MSwwLjMzMUw4Ny4zMzksNDYuNjAxelxcXCIgLz48cGF0aCBmaWxsPVxcXCIjZmZlMzg1XFxcIiBkPVxcXCJNNDguMDQ0LDUyLjAxNGMtOC43OTMtOC40MTUtMTIuMDEtMjAuNDQ3LTkuNTU1LTMxLjUwNWMtNS43NjMsMS41MjUtMTEuMTkyLDQuNTk2LTE1LjYyMSw5LjIwMVxcdGMtMTIuODY1LDEzLjM3Ni0xMi40MjMsMzQuNjIyLDAuOTg2LDQ3LjQ1NWMxMy40MSwxMi44MzMsMzQuNzEsMTIuMzkyLDQ3LjU3NS0wLjk4NGM0LjQyOS00LjYwNSw3LjI4MS0xMC4xNDMsOC41NjktMTUuOTVcXHRDNjkuMDIyLDYzLjEzNiw1Ni44MzcsNjAuNDI5LDQ4LjA0NCw1Mi4wMTR6XFxcIiAvPjxwb2x5Z29uIGZpbGw9XFxcIiM5NGNmZmZcXFwiIHBvaW50cz1cXFwiNTcuMDIsMzEuMDA5IDU5LjI3MywyMy43NzggNjUuNDk3LDIxLjUwOSA1OS4yNzMsMTkuMjM5IDU3LjAwMywxMi4wMDkgNTQuNzMzLDE5LjIzOSA0OC41MDksMjEuNTE0IDU0LjczMywyMy43NzhcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzQwMzk2ZVxcXCIgZD1cXFwiTTU3LjAyLDMyLjUwOWMtMC42NTQsMC0xLjIzMy0wLjQyNC0xLjQzLTEuMDQ4bC0yLjA2NC02LjUyNWwtNS41My0yLjAxMSBjLTAuNTkyLTAuMjE1LTAuOTg3LTAuNzc4LTAuOTg3LTEuNDA4YzAtMC42MywwLjM5My0xLjE5NCwwLjk4NS0xLjQxbDUuNTMtMi4wMjFsMi4wNDgtNi41MjVjMC4xOTYtMC42MjUsMC43NzYtMS4wNTEsMS40MzEtMS4wNTEgczEuMjM1LDAuNDI1LDEuNDMxLDEuMDUxbDIuMDQ4LDYuNTI0bDUuNTI5LDIuMDE2YzAuNTkyLDAuMjE2LDAuOTg2LDAuNzc5LDAuOTg2LDEuNDA5cy0wLjM5NCwxLjE5My0wLjk4NiwxLjQwOWwtNS41MjcsMi4wMTUgbC0yLjAzMiw2LjUyMmMtMC4xOTUsMC42MjUtMC43NzMsMS4wNTItMS40MjksMS4wNTRDNTcuMDIyLDMyLjUwOSw1Ny4wMjEsMzIuNTA5LDU3LjAyLDMyLjUwOXogTTUyLjg4OCwyMS41MTFsMi4zNTgsMC44NTcgYzAuNDM4LDAuMTU5LDAuNzc3LDAuNTEzLDAuOTE3LDAuOTU4TDU3LjAwOSwyNmwwLjgzMi0yLjY2OGMwLjEzOS0wLjQ0NywwLjQ3OS0wLjgwMywwLjkxOC0wLjk2M2wyLjM1OS0wLjg2bC0yLjM1OS0wLjg2IGMtMC40MzgtMC4xNi0wLjc3OC0wLjUxNS0wLjkxNy0wLjk2bC0wLjgzOS0yLjY3MWwtMC44MzgsMi42NzFjLTAuMTQsMC40NDUtMC40NzgsMC43OTktMC45MTYsMC45NTlMNTIuODg4LDIxLjUxMXpcXFwiIC8+PHBvbHlnb24gZmlsbD1cXFwiIzk0Y2ZmZlxcXCIgcG9pbnRzPVxcXCI3OS4wMjYsNTEuNTA5IDgyLjA3NCw0MS42MTUgOTAuNDk3LDM4LjUwOSA4Mi4wNzQsMzUuNDAzIDc5LjAwMywyNS41MDkgNzUuOTMyLDM1LjQwMyA2Ny41MDksMzguNTE3IDc1LjkzMiw0MS42MTVcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzQwMzk2ZVxcXCIgZD1cXFwiTTc5LjAyNiw1My4wMDljLTAuNjU2LDAtMS4yMzYtMC40MjYtMS40MzItMS4wNTJsLTIuODc0LTkuMTg5bC03LjcyOS0yLjg0MyBjLTAuNTktMC4yMTctMC45ODItMC43NzgtMC45ODItMS40MDdjMC0wLjYyOCwwLjM5MS0xLjE5LDAuOTgtMS40MDhsNy43MjktMi44NTdsMi44NTItOS4xODhjMC4xOTUtMC42MjcsMC43NzUtMS4wNTUsMS40MzMtMS4wNTUgczEuMjM4LDAuNDI4LDEuNDMzLDEuMDU1bDIuODUyLDkuMTg4bDcuNzI5LDIuODVjMC41ODksMC4yMTcsMC45ODEsMC43NzksMC45ODEsMS40MDdzLTAuMzkyLDEuMTktMC45ODEsMS40MDdsLTcuNzI4LDIuODUgbC0yLjgzLDkuMTg1Yy0wLjE5MywwLjYyOC0wLjc3MywxLjA1Ny0xLjQzMSwxLjA1OEM3OS4wMjgsNTMuMDA5LDc5LjAyNyw1My4wMDksNzkuMDI2LDUzLjAwOXogTTcxLjg0NSwzOC41MTNsNC42MDQsMS42OTQgYzAuNDM4LDAuMTYxLDAuNzc1LDAuNTE2LDAuOTE0LDAuOTZsMS42NTIsNS4yODJsMS42MjUtNS4yNzZjMC4xMzgtMC40NDcsMC40NzYtMC44MDQsMC45MTUtMC45NjVsNC42MDYtMS42OTlsLTQuNjA2LTEuNjk4IGMtMC40MzgtMC4xNjEtMC43NzUtMC41MTctMC45MTQtMC45NjJsLTEuNjM5LTUuMjc5bC0xLjYzOSw1LjI3OWMtMC4xMzgsMC40NDUtMC40NzYsMC44MDEtMC45MTMsMC45NjJMNzEuODQ1LDM4LjUxM3pcXFwiIC8+PGc+PHBhdGggZmlsbD1cXFwiI2ZmZTM4NVxcXCIgZD1cXFwiTTQ4LjA0NCw1Mi4wMTRjLTguNzkzLTguNDE1LTEyLjAxLTIwLjQ0Ny05LjU1NS0zMS41MDVjLTUuNzYzLDEuNTI1LTExLjE5Miw0LjU5Ni0xNS42MjEsOS4yMDEgYy0xMi44NjUsMTMuMzc2LTEyLjQyMywzNC42MjIsMC45ODYsNDcuNDU1YzEzLjQxLDEyLjgzMywzNC43MSwxMi4zOTIsNDcuNTc1LTAuOTg0YzQuNDI5LTQuNjA1LDcuMjgxLTEwLjE0Myw4LjU2OS0xNS45NSBDNjkuMDIyLDYzLjEzNiw1Ni44MzcsNjAuNDI5LDQ4LjA0NCw1Mi4wMTR6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiM0MDM5NmVcXFwiIGQ9XFxcIk00Ny4xNDEsODcuOTkyYy04Ljc1NSwwLTE3LjUyMi0zLjIzNC0yNC4zMjQtOS43NDRjLTYuNzc2LTYuNDg0LTEwLjYxNS0xNS4yMTMtMTAuODA5LTI0LjU3OCBjLTAuMTk0LTkuMzY0LDMuMjc5LTE4LjI0Miw5Ljc3OS0yNWM0LjQ2OC00LjY0NSwxMC4xMTEtNy45NjksMTYuMzE4LTkuNjExYzAuNTA2LTAuMTM1LDEuMDQ2LDAuMDA1LDEuNDIzLDAuMzY4IGMwLjM3NywwLjM2MywwLjUzOSwwLjg5NiwwLjQyNSwxLjQwN2MtMi40NDgsMTEuMDMzLDAuOTY0LDIyLjI4NCw5LjEyOCwzMC4wOTZ2MGM4LjE2NSw3LjgxNCwxOS41ODEsMTAuNzQ5LDMwLjUzMyw3Ljg1MSBjMC41MDctMC4xMzIsMS4wNDYsMC4wMDYsMS40MjMsMC4zNjhjMC4zNzcsMC4zNjMsMC41MzksMC44OTYsMC40MjUsMS40MDdjLTEuMzg5LDYuMjU3LTQuNDg0LDEyLjAxOS04Ljk1MywxNi42NjUgQzY1LjYxOSw4NC4zODYsNTYuMzg2LDg3Ljk5Miw0Ny4xNDEsODcuOTkyeiBNMzYuNTYzLDIyLjY2NGMtNC43NjUsMS42NTUtOS4wOSw0LjQyLTEyLjYxNSw4LjA4NiBjLTUuOTQzLDYuMTc5LTkuMTE5LDE0LjI5Ny04Ljk0MSwyMi44NThjMC4xNzgsOC41NjIsMy42ODgsMTYuNTQzLDkuODg0LDIyLjQ3M2MxMi43OTIsMTIuMjQyLDMzLjE4MywxMS44MjEsNDUuNDU3LTAuOTQgYzMuNTIzLTMuNjY0LDYuMTEzLTguMDg0LDcuNTc0LTEyLjg5OWMtMTEuMjAxLDIuMTQxLTIyLjU5OC0xLjE4Ny0zMC45MTQtOS4xNDRsMCwwQzM4LjY4OSw0NS4xMzksMzQuODgyLDMzLjkxNywzNi41NjMsMjIuNjY0elxcXCIgLz48L2c+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbCIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbC5qc1wiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanNcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcImljb25zOC1uaWdodC01MFwiLFxuICBcInVzZVwiOiBcImljb25zOC1uaWdodC01MC11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAwIDEwMFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIGlkPVxcXCJpY29uczgtbmlnaHQtNTBcXFwiPjxwYXRoIGQ9XFxcIk05Ny4xMjEsNDQuNjg1Yy0xLjIxNi0xLjE2Ni0yLjgxNC0xLjgwOS00LjUtMS44MDljLTAuNTU3LDAtMS4xMTMsMC4wNzItMS42NjUsMC4yMTdjLTEuNjcxLDAuNDQzLTMuMzgsMC42NjctNS4wODIsMC42NjggYy00Ljk5NCwwLTkuNzU2LTEuOTI5LTEzLjQwNy01LjQzMmMtNC45NDMtNC43NDItNy4wMDktMTEuNTc0LTUuNTI3LTE4LjI3MWMwLjQ4OC0yLjItMC4yMTktNC41MzYtMS44NTItNi4xMDQgYy0xLjIxNi0xLjE2Mi0yLjgxMy0xLjgwMy00LjQ5Ny0xLjgwM2MtMC41NDksMC0xLjA5OCwwLjA2OS0xLjY2NSwwLjIxNmMtNS43MzgsMS41MjItMTAuOTUxLDQuNjAxLTE1LjA3Niw4LjkgYy0xLjk3OCwyLjA2Mi0zLjY2LDQuMzctNS4wMTYsNi44NDdjLTAuNTcxLTAuNDgyLTEuMjItMC44ODEtMS45NDYtMS4xNDVsLTMuMjEtMS4xNzFsLTEuMzA5LTQuMTcgYy0wLjg1NS0yLjcyNC0zLjM0OC00LjU1My02LjIwMi00LjU1M3MtNS4zNDYsMS44MjktNi4yMDIsNC41NTRsLTEuMzEsNC4xNzJsLTMuMjE4LDEuMTc2Yy0yLjU1MywwLjkzNi00LjI2NywzLjM5MS00LjI2NSw2LjEwOSBjMC4wMDIsMi43MjMsMS43MjMsNS4xNzcsNC4yNzcsNi4xMDNsMy4yMTYsMS4xNzFsMS4zMiw0LjE3NWMwLjgwNCwyLjU0MSwzLjA0LDQuMjgyLDUuNjU4LDQuNDk4IGMtMS4yMjcsMS41NDctMi4zMDEsMy4yMjItMy4xNjIsNS4wMjZjLTIuMTE5LDAuMTY1LTQuMTk4LDAuNzA2LTYuMTk5LDEuNjE0Yy02LjgxLDMuMDkzLTExLjI4OCw5Ljc2OS0xMS40MDcsMTcuMDEgYy0wLjA4NCw1LjEzNiwxLjg1Miw5Ljk4LDUuNDUzLDEzLjY0MkMxMy45MzMsODkuOTg0LDE4Ljc0NCw5MiwyMy44NzcsOTJoNDQuNjYxYzkuNjgzLDAsMTcuOTI0LTcuMDc4LDE5LjE3LTE2LjQ2MyBjMC4yODUtMi4xNDYsMC4yMDUtNC4zMDQtMC4yMjgtNi4zODljMS4xMzctMC45MDQsMi4yMTMtMS44ODUsMy4yMi0yLjkzNmM0LjEyNi00LjI5OSw2Ljk4NS05LjYzNSw4LjI2Ny0xNS40MyBDOTkuNDU2LDQ4LjU4Myw5OC43NSw0Ni4yNDcsOTcuMTIxLDQ0LjY4NXpcXFwiIG9wYWNpdHk9XFxcIi4zNVxcXCIgLz48cGF0aCBmaWxsPVxcXCIjZjJmMmYyXFxcIiBkPVxcXCJNOTUuMTIxLDQyLjY4NWMtMS4yMTYtMS4xNjYtMi44MTQtMS44MDktNC41LTEuODA5Yy0wLjU1NywwLTEuMTEzLDAuMDcyLTEuNjY1LDAuMjE3IGMtMS42NzEsMC40NDMtMy4zOCwwLjY2Ny01LjA4MiwwLjY2OGMtNC45OTQsMC05Ljc1Ni0xLjkyOS0xMy40MDctNS40MzJjLTQuOTQzLTQuNzQyLTcuMDA5LTExLjU3NC01LjUyNy0xOC4yNzEgYzAuNDg4LTIuMi0wLjIxOS00LjUzNi0xLjg1Mi02LjEwNGMtMS4yMTYtMS4xNjItMi44MTMtMS44MDMtNC40OTctMS44MDNjLTAuNTQ5LDAtMS4wOTgsMC4wNjktMS42NjUsMC4yMTYgYy01LjczOCwxLjUyMi0xMC45NTEsNC42MDEtMTUuMDc2LDguOWMtMS45NzgsMi4wNjItMy42Niw0LjM3LTUuMDE2LDYuODQ3Yy0wLjU3MS0wLjQ4Mi0xLjIyLTAuODgxLTEuOTQ2LTEuMTQ1bC0zLjIxLTEuMTcxIGwtMS4zMDktNC4xN2MtMC44NTUtMi43MjQtMy4zNDgtNC41NTMtNi4yMDItNC41NTNzLTUuMzQ2LDEuODI5LTYuMjAyLDQuNTU0bC0xLjMxLDQuMTcybC0zLjIxOCwxLjE3NiBjLTIuNTUzLDAuOTM2LTQuMjY3LDMuMzkxLTQuMjY1LDYuMTA5YzAuMDAyLDIuNzIzLDEuNzIzLDUuMTc3LDQuMjc3LDYuMTAzbDMuMjE2LDEuMTcxbDEuMzIsNC4xNzUgYzAuODA0LDIuNTQxLDMuMDQsNC4yODIsNS42NTgsNC40OThjLTEuMjI3LDEuNTQ3LTIuMzAxLDMuMjIyLTMuMTYyLDUuMDI2Yy0yLjExOSwwLjE2NS00LjE5OCwwLjcwNi02LjE5OSwxLjYxNCBjLTYuODEsMy4wOTMtMTEuMjg4LDkuNzY5LTExLjQwNywxNy4wMWMtMC4wODQsNS4xMzYsMS44NTIsOS45OCw1LjQ1MywxMy42NDJDMTEuOTMzLDg3Ljk4NCwxNi43NDQsOTAsMjEuODc3LDkwaDQ0LjY2MSBjOS42ODMsMCwxNy45MjQtNy4wNzgsMTkuMTctMTYuNDYzYzAuMjg1LTIuMTQ2LDAuMjA1LTQuMzA0LTAuMjI4LTYuMzg5YzEuMTM3LTAuOTA0LDIuMjEzLTEuODg1LDMuMjItMi45MzYgYzQuMTI2LTQuMjk5LDYuOTg1LTkuNjM1LDguMjY3LTE1LjQzQzk3LjQ1Niw0Ni41ODMsOTYuNzUsNDQuMjQ3LDk1LjEyMSw0Mi42ODV6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiNmZmUzODVcXFwiIGQ9XFxcIk02NS45NjgsNDAuOTQ1Yy02Ljc4NC02LjUwOS05LjI2Ni0xNS44MTYtNy4zNzMtMjQuMzdjLTQuNDQ2LDEuMTc5LTguNjM1LDMuNTU1LTEyLjA1Myw3LjExNyBjLTkuOTI2LDEwLjM0Ni05LjU4NSwyNi43ODEsMC43NjEsMzYuNzA3YzEwLjM0Niw5LjkyNiwyNi43ODEsOS41ODUsMzYuNzA3LTAuNzYxYzMuNDE3LTMuNTYyLDUuNjE3LTcuODQ2LDYuNjEyLTEyLjMzNyBDODIuMTU0LDQ5LjU0Nyw3Mi43NTMsNDcuNDUzLDY1Ljk2OCw0MC45NDV6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiM5NGNmZmZcXFwiIGQ9XFxcIk02Ni4xMDIsNTkuNTU1Yy0xLjAyNSwwLTIuMDE0LDAuMTQtMi45NjUsMC4zNzljLTIuMDIyLTguNTI2LTkuNjk0LTE0Ljg3OS0xOC44NzItMTQuODc5IHMtMTYuODUsNi4zNTItMTguODcyLDE0Ljg3OWMtMC45NTEtMC4yMzgtMS45NC0wLjM3OS0yLjk2NS0wLjM3OWMtNi43LDAtMTIuMTMyLDUuNDEtMTIuMTMyLDEyLjA4M3M1LjQzMiwxMi4wODMsMTIuMTMyLDEyLjA4MyBjMy44MDUsMCwxNy4xMTMsMCwyMS44MzcsMHMxOC4wMzIsMCwyMS44MzcsMGM2LjcsMCwxMi4xMzItNS40MSwxMi4xMzItMTIuMDgzUzcyLjgwMyw1OS41NTUsNjYuMTAyLDU5LjU1NXpcXFwiIC8+PHBvbHlnb24gZmlsbD1cXFwiIzk0Y2ZmZlxcXCIgcG9pbnRzPVxcXCIyNC4xODgsNDAuNTc3IDI2LjQ0LDMzLjM0NiAzMi42NjUsMzEuMDc3IDI2LjQ0LDI4LjgwNyAyNC4xNzEsMjEuNTc3IDIxLjkwMSwyOC44MDcgMTUuNjc2LDMxLjA4MiAyMS45MDEsMzMuMzQ2XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiM0MDM5NmVcXFwiIGQ9XFxcIk0yNC4xODgsNDIuMDc2Yy0wLjY1NCwwLTEuMjMzLTAuNDI0LTEuNDMtMS4wNDhsLTIuMDYzLTYuNTI0bC01LjUzLTIuMDEzIGMtMC41OTItMC4yMTUtMC45ODctMC43NzctMC45ODctMS40MDhjMC0wLjYzLDAuMzkzLTEuMTkzLDAuOTg1LTEuNDFsNS41MzEtMi4wMjFsMi4wNDgtNi41MjQgYzAuMTk2LTAuNjI1LDAuNzc2LTEuMDUxLDEuNDMxLTEuMDUxczEuMjM1LDAuNDI2LDEuNDMxLDEuMDUxbDIuMDQ4LDYuNTI0bDUuNTI5LDIuMDE2YzAuNTkyLDAuMjE2LDAuOTg2LDAuNzc5LDAuOTg2LDEuNDA5IHMtMC4zOTQsMS4xOTMtMC45ODYsMS40MDlsLTUuNTI3LDIuMDE3bC0yLjAzMiw2LjUyMWMtMC4xOTUsMC42MjYtMC43NzMsMS4wNTMtMS40MjksMS4wNTQgQzI0LjE4OSw0Mi4wNzYsMjQuMTg4LDQyLjA3NiwyNC4xODgsNDIuMDc2eiBNMjAuMDU1LDMxLjA3OWwyLjM1OSwwLjg1OGMwLjQzOCwwLjE1OSwwLjc3NywwLjUxMywwLjkxNywwLjk1N2wwLjg0NiwyLjY3NCBsMC44MzEtMi42NjhjMC4xMzktMC40NDYsMC40NzktMC44MDMsMC45MTgtMC45NjNsMi4zNjEtMC44NjFsLTIuMzYtMC44NmMtMC40MzgtMC4xNi0wLjc3OC0wLjUxNS0wLjkxNy0wLjk2bC0wLjgzOC0yLjY3MSBsLTAuODM4LDIuNjcxYy0wLjE0LDAuNDQ1LTAuNDc4LDAuOC0wLjkxNiwwLjk2TDIwLjA1NSwzMS4wNzl6XFxcIiAvPjxnPjxwYXRoIGZpbGw9XFxcIiM0MDM5NmVcXFwiIGQ9XFxcIk02Ni41MzksODVIMjEuODc3Yy0zLjc4MywwLTcuMzI4LTEuNDg1LTkuOTgxLTQuMTgzQzkuMjQ0LDc4LjEyLDcuODE3LDc0LjU1LDcuODc5LDcwLjc2NSBjMC4wODgtNS4zMTksMy40MTUtMTAuMjQxLDguNDc1LTEyLjUzOWMyLjQwOC0xLjA5Myw0LjkyNS0xLjQ1NSw3LjQ5OC0xLjA3N2MyLjA3Mi02LjczNSw3LjI4MS0xMS45OTgsMTQuMDAxLTE0LjEzMiBjLTAuMzQ5LTcuNTEyLDIuMzg3LTE0Ljg0Niw3LjYwOC0yMC4yODdjMy40OS0zLjYzOSw3Ljg5OS02LjI0MiwxMi43NS03LjUyOWMwLjUwOC0wLjEzMSwxLjA0NCwwLjAwNiwxLjQyMywwLjM2OCBjMC4zNzcsMC4zNjIsMC41MzksMC44OTYsMC40MjYsMS40MDZjLTEuODYzLDguNDE4LDAuNzMzLDE3LjAwMiw2Ljk0NywyMi45NjNjNi4yMTMsNS45NiwxNC44OTgsOC4xOTcsMjMuMjMxLDUuOTg4IGMwLjUwNi0wLjEzMywxLjA0NSwwLjAwNiwxLjQyMywwLjM2OGMwLjM3NywwLjM2MiwwLjUzOSwwLjg5NiwwLjQyNiwxLjQwNmMtMS4wODQsNC45LTMuNTAzLDkuNDE0LTYuOTkzLDEzLjA1MSBjLTEuNjM5LDEuNzA5LTMuNDgzLDMuMTkyLTUuNDk2LDQuNDIzYzEuMTEsMi40MDEsMS41MDksNS4wMzcsMS4xNTQsNy43MDRDNzkuODM1LDc5Ljc4OSw3My43MjQsODUsNjYuNTM5LDg1eiBNMjEuODc2LDYwIGMtMS40NTgsMC0yLjg3NSwwLjMxOC00LjI4MiwwLjk1N2MtNC4wMTEsMS44MjEtNi42NDcsNS42OS02LjcxNiw5Ljg1NmMtMC4wNDksMi45NzYsMS4wNzIsNS43ODEsMy4xNTYsNy44OTkgQzE2LjEyLDgwLjgzMywxOC45MDUsODIsMjEuODc3LDgyaDQ0LjY2MWM1LjY4OCwwLDEwLjUyLTQuMDkyLDExLjI0LTkuNTE3YzAuMzMyLTIuNDk5LTAuMTc2LTQuOTYtMS40NjktNy4xMTggYy0wLjIxLTAuMzUyLTAuMjY4LTAuNzczLTAuMTU5LTEuMTY4czAuMzc0LTAuNzI5LDAuNzM0LTAuOTIzYzIuMjQ0LTEuMjEsNC4yNzctMi43NTgsNi4wNDQtNC42IGMyLjU1MS0yLjY1OSw0LjQ1OS01Ljg0Miw1LjU5NS05LjMwOWMtOC41NjUsMS40NjMtMTcuMjM0LTEuMTYyLTIzLjU5NC03LjI2NWMtNi4zNTktNi4xLTkuMzQ0LTE0LjY0OS04LjIzNi0yMy4yNzEgYy0zLjQxNywxLjI3OC02LjUxNywzLjMxNy05LjA2OCw1Ljk3NmMtNC45MDcsNS4xMTUtNy4zNDksMTIuMTA2LTYuNywxOS4xODJjMC4wNjcsMC43MzMtMC40MDksMS40MDgtMS4xMjMsMS41OSBjLTYuNjg1LDEuNzA1LTExLjgyNCw2LjkzOS0xMy40MTEsMTMuNjU5Yy0wLjA5MiwwLjM5MS0wLjMzOCwwLjcyOS0wLjY4MSwwLjkzOGMtMC4zNDQsMC4yMDgtMC43NTYsMC4yNzEtMS4xNDYsMC4xNzMgQzIzLjY1LDYwLjExNSwyMi43NTUsNjAsMjEuODc2LDYwelxcXCIgLz48L2c+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbCIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbC5qc1wiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanNcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcImljb25zOC1wYXJ0bHktY2xvdWR5LWRheS01MFwiLFxuICBcInVzZVwiOiBcImljb25zOC1wYXJ0bHktY2xvdWR5LWRheS01MC11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAwIDEwMFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIGlkPVxcXCJpY29uczgtcGFydGx5LWNsb3VkeS1kYXktNTBcXFwiPjxwYXRoIGQ9XFxcIk05NS4zNjIsMzYuNzIzbC0wLjcwMi0wLjMzMWMwLjQzNy0xLjQwMywwLjQzNy0yLjkyMy0wLjA0MS00LjMyOFxcdGMtMC42MjgtMS45MTQtMi4wMzYtMy40NTQtMy44MzMtNC4yNzFsMC4yNjktMC43NTdjMC45NzktMi43NjgsMC4yOTEtNS43Ny0xLjc5NS03LjgzMWMtMS40MTQtMS40MDEtMy4yODUtMi4xNzMtNS4yNjgtMi4xNzNcXHRjLTAuODgsMC0xLjc0OSwwLjE1My0yLjU5NiwwLjQ2MmwtMS45OSwwLjQ1OWMtMS4yMDQtMi4zMDItMi4xMzQtNC4wNTEtNC44NjUtNC4wNTFjLTAuNjgxLDAtMS4zNTMsMC4wOTgtMS45OTcsMC4yODdsLTIuMTg2LTAuNTI0XFx0Yy0xLjI4LTIuNDkxLTIuMTE3LTQuNDc5LTQuOTczLTQuNWMtMi43NzQsMC01LjMxLDEuNTIxLTYuNjE3LDMuOTdsLTAuNjA4LDEuMTRjLTAuNzI3LTAuMjQ1LTEuNDkzLTAuMzczLTIuMjcyLTAuMzczXFx0Yy0yLjc2MywwLTUuMTY4LDEuNTIzLTYuMzU5LDMuODczbC0xLjA5OS0wLjM4NmMtMC44MDYtMC4yODUtMS42NDctMC40My0yLjUtMC40M2MtMS45NCwwLTMuNzgzLDAuNzQyLTUuMTkyLDIuMDk1XFx0Yy0yLjA1LDEuOTcxLTIuODA3LDQuODg1LTEuOTc0LDcuNjA0bDAuNDE5LDEuMzY2Yy0xLjU2OSwwLjg1Ny0yLjc5MywyLjI5NC0zLjM3NSw0LjA1MmMtMC4zMTgsMC45NzYtMC40MTUsMS45OTQtMC4zMDUsMi45ODZcXHRjLTYuODI2LDIuNzk5LTEyLjQxMyw4LjI1Ni0xNS4zMTYsMTUuMTExYy0yLjI4OCwwLjI5Ni00LjUwNywxLjAxMS02LjYyMiwyLjEzNUM2Ljk2OSw1NS44MTMsMi45MjIsNjIuNDg0LDMuMDAxLDY5LjcxNlxcdEMzLjExNyw4MC4zNDksMTEuODY0LDg5LDIyLjUsODlINjljMC4wNzcsMCwwLjE1NC0wLjAwMSwwLjIzMS0wLjAwNEM2OS4zMiw4OC45OTksNjkuNDEsODksNjkuNSw4OUM3OS43MDEsODksODgsODAuNzAxLDg4LDcwLjVcXHRjMC0wLjU0Ni0wLjAyNC0xLjA5Mi0wLjA3Mi0xLjYzNWMwLjQ3NC0wLjI5NCwwLjkxOS0wLjY0NCwxLjMyOC0xLjA0NmMyLjA4Ny0yLjA2NCwyLjc3Ny01LjA2NSwxLjc5OS03LjgzNWwtMC4yNzEtMC43NjdcXHRjMS43OTMtMC44MTMsMy4xOTctMi4zMzgsMy44MTItNC4yMDRjMC40OTEtMS40NDMsMC40OTYtMi45ODEsMC4wNjEtNC4zOTZsMC43MDMtMC4zMzJjMi42NTItMS4yNTEsNC4zLTMuODUsNC4zLTYuNzgyXFx0Qzk5LjY1OSw0MC41NzMsOTguMDEzLDM3Ljk3Niw5NS4zNjIsMzYuNzIzelxcXCIgb3BhY2l0eT1cXFwiLjM1XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiNmMmYyZjJcXFwiIGQ9XFxcIk05My4zNjIsMzQuNzIzbC0wLjcwMi0wLjMzMWMwLjQzNy0xLjQwMywwLjQzNy0yLjkyMy0wLjA0MS00LjMyOFxcdGMtMC42MjgtMS45MTQtMi4wMzYtMy40NTQtMy44MzMtNC4yNzFsMC4yNjktMC43NTdjMC45NzktMi43NjgsMC4yOTEtNS43Ny0xLjc5NS03LjgzMWMtMS40MTQtMS40MDEtMy4yODUtMi4xNzMtNS4yNjgtMi4xNzNcXHRjLTAuODgsMC0xLjc0OSwwLjE1My0yLjU5NiwwLjQ2MmwtMC41MzcsMC4xOTdjLTEuMjA0LTIuMzAyLTMuNTg3LTMuNzktNi4zMTctMy43OWMtMC42ODEsMC0xLjM1MywwLjA5OC0xLjk5NywwLjI4N2wtMC40ODgtMC45NTFcXHRjLTEuMjgtMi40OTEtMy44MTQtNC4wNTItNi42NzEtNC4wNzJjLTIuNzc0LDAtNS4zMSwxLjUyMS02LjYxNywzLjk3bC0wLjYwOCwxLjE0Yy0wLjcyNy0wLjI0NS0xLjQ5My0wLjM3My0yLjI3Mi0wLjM3M1xcdGMtMi43NjMsMC01LjE2OCwxLjUyMy02LjM1OSwzLjg3M2wtMS4wOTktMC4zODZjLTAuODA2LTAuMjg1LTEuNjQ3LTAuNDMtMi41LTAuNDNjLTEuOTQsMC0zLjc4MywwLjc0Mi01LjE5MiwyLjA5NVxcdGMtMi4wNSwxLjk3MS0yLjgwNyw0Ljg4NS0xLjk3NCw3LjYwNGwwLjQxOSwxLjM2NmMtMS41NjksMC44NTctMi43OTMsMi4yOTQtMy4zNzUsNC4wNTJjLTAuMzE4LDAuOTc2LTAuNDE1LDEuOTk0LTAuMzA1LDIuOTg2XFx0Yy02LjgyNiwyLjc5OS0xMi40MTMsOC4yNTYtMTUuMzE2LDE1LjExMWMtMi4yODgsMC4yOTYtNC41MDcsMS4wMTEtNi42MjIsMi4xMzVDNC45NjksNTMuODEzLDAuOTIyLDYwLjQ4NCwxLjAwMSw2Ny43MTZcXHRDMS4xMTcsNzguMzQ5LDkuODY0LDg3LDIwLjUsODdINjdjMC4wNzcsMCwwLjE1NC0wLjAwMSwwLjIzMS0wLjAwNEM2Ny4zMiw4Ni45OTksNjcuNDEsODcsNjcuNSw4N0M3Ny43MDEsODcsODYsNzguNzAxLDg2LDY4LjVcXHRjMC0wLjU0Ni0wLjAyNC0xLjA5Mi0wLjA3Mi0xLjYzNWMwLjQ3NC0wLjI5NCwwLjkxOS0wLjY0NCwxLjMyOC0xLjA0NmMyLjA4Ny0yLjA2NCwyLjc3Ny01LjA2NSwxLjc5OS03LjgzNWwtMC4yNzEtMC43NjdcXHRjMS43OTMtMC44MTMsMy4xOTctMi4zMzgsMy44MTItNC4yMDRjMC40OTEtMS40NDMsMC40OTYtMi45ODEsMC4wNjEtNC4zOTZsMC43MDMtMC4zMzJjMi42NTItMS4yNTEsNC4zLTMuODUsNC4zLTYuNzgyXFx0Qzk3LjY1OSwzOC41NzMsOTYuMDEzLDM1Ljk3Niw5My4zNjIsMzQuNzIzelxcXCIgLz48cGF0aCBmaWxsPVxcXCIjZjliODRmXFxcIiBkPVxcXCJNODMuNTkyLDQ3LjI1Yy0wLjIyNy0wLjI1Ni0wLjMyMi0wLjYwMi0wLjI1My0wLjkzN2MwLjA2OC0wLjMzNSwwLjI5LTAuNjE4LDAuNi0wLjc2NGw2LjY0Ny0zLjE0XFx0YzAuNzY0LTAuMzYxLDAuNzY0LTEuNDQ4LDAtMS44MDhsLTYuNjQ3LTMuMTRjLTAuMzEtMC4xNDYtMC41MzItMC40MjktMC42LTAuNzY0Yy0wLjA2OS0wLjMzNSwwLjAyNi0wLjY4MiwwLjI1My0wLjkzN2wyLjcyMy0zLjA1MlxcdGMwLjIyLTAuMjQ2LDAuMTYzLTAuNTE0LDAuMTI4LTAuNjE4cy0wLjE1LTAuMzU0LTAuNDczLTAuNDJsLTQuNTE4LTAuOTI5Yy0wLjMwOS0wLjA2My0wLjU3NC0wLjI1Ny0wLjcyOS0wLjUzXFx0Yy0wLjE1NC0wLjI3NC0wLjE4Mi0wLjYwMS0wLjA3Ni0wLjg5N2wyLjI4MS02LjQ0NWMwLjI4Mi0wLjc5OC0wLjQ5My0xLjU2NC0xLjI4Ny0xLjI3MmwtNi4xNjMsMi4yNjNcXHRjLTAuMTI0LDAuMDQ3LTAuMjUzLDAuMDY5LTAuMzgyLDAuMDY5Yy0wLjE4MiwwLTAuMzYzLTAuMDQ1LTAuNTI2LTAuMTM1Yy0wLjI3OC0wLjE1My0wLjQ3NS0wLjQyLTAuNTM5LTAuNzMxbC0wLjg1OS00LjE1NlxcdGMtMC4wNzItMC4zNDctMC4zNzUtMC41MDUtMC42MjgtMC41MDVjLTAuMTU0LDAtMC4yOTMsMC4wNTQtMC40MTQsMC4xNjFsLTIuODA2LDIuNDg4Yy0wLjIwMSwwLjE3OC0wLjQ1OSwwLjI3NC0wLjcyMywwLjI3NFxcdGMtMC4wNjcsMC0wLjEzNS0wLjAwNi0wLjIwMy0wLjAxOWMtMC4zMzEtMC4wNjItMC42MTUtMC4yNzUtMC43NjgtMC41NzVsLTMuMzU1LTYuNTI0Yy0wLjM2OS0wLjcxNy0xLjM5Mi0wLjcyNS0xLjc3Mi0wLjAxM1xcdGwtMy41NjQsNi42ODFjLTAuMTU2LDAuMjk1LTAuNDM5LDAuNTAzLTAuNzY4LDAuNTYyYy0wLjA2NCwwLjAxMi0wLjEzLDAuMDE4LTAuMTk0LDAuMDE4Yy0wLjI2NCwwLTAuNTIyLTAuMDk2LTAuNzIzLTAuMjc0XFx0bC0yLjk1MS0yLjYxOGMtMC4xMi0wLjEwNy0wLjI2LTAuMTYxLTAuNDE0LTAuMTYxYy0wLjI1MiwwLTAuNTU1LDAuMTU4LTAuNjI4LDAuNTA1bC0wLjg2MSw0LjE2XFx0Yy0wLjA2NCwwLjMwOC0wLjI1OCwwLjU3My0wLjUzMiwwLjcyN2MtMC4xNjUsMC4wOTMtMC4zNDksMC4xMzktMC41MzMsMC4xMzljLTAuMTIzLDAtMC4yNDctMC4wMjEtMC4zNjYtMC4wNjNsLTYuNzAzLTIuMzUyXFx0Yy0wLjc3NC0wLjI3Mi0xLjUyNywwLjQ1Mi0xLjI4NywxLjIzNmwyLjA3LDYuNzU4YzAuMDkxLDAuMjkyLDAuMDU0LDAuNjA5LTAuMTAyLDAuODczYy0wLjE1NiwwLjI2My0wLjQxNywwLjQ0OS0wLjcxNywwLjUxMVxcdGwtMy43NjksMC43NzRjLTAuMzIzLDAuMDY2LTAuNDM4LDAuMzE2LTAuNDczLDAuNDJjLTAuMDM0LDAuMTA0LTAuMDkxLDAuMzcyLDAuMTI5LDAuNjE4bDIuNjAyLDIuOTE4XFx0YzAuMjI3LDAuMjU2LDAuMzIyLDAuNjAyLDAuMjUzLDAuOTM3Yy0wLjA2OCwwLjMzNS0wLjI5LDAuNjE4LTAuNiwwLjc2NEw0MS44LDM3LjYxMWMtOS40MTgsMC45NTctMTcuMDM1LDcuOTk0LTE4Ljg3MywxNy4xMjNcXHRjLTIuNTEyLTAuNDc1LTUuMzkyLTAuMjQtOC4zMTIsMS4zMTJjLTQuMzQ0LDIuMzA5LTcuMTY3LDYuNjc5LTcuMTEzLDExLjU5OEM3LjU3OCw3NC43NTgsMTMuMzY5LDgwLjUsMjAuNSw4MC41SDY3di0wLjAyNVxcdGMwLjE2NywwLjAwNywwLjMzMSwwLjAyNSwwLjUsMC4wMjVjNi42MjcsMCwxMi01LjM3MywxMi0xMmMwLTMuODEyLTEuNzgzLTcuMjAyLTQuNTU0LTkuNGMwLjA1LTAuMDA3LDAuMDk5LTAuMDE5LDAuMTQ5LTAuMDE5XFx0YzAuMTI5LDAsMC4yNTgsMC4wMjMsMC4zODIsMC4wNjlsNi4xNjIsMi4yNzJjMC43OTUsMC4yOTMsMS41NzEtMC40NzMsMS4yODktMS4yNzFsLTIuMjgtNi40NTVcXHRjLTAuMTA2LTAuMjk2LTAuMDc4LTAuNjIzLDAuMDc2LTAuODk3YzAuMTU0LTAuMjczLDAuNDItMC40NjgsMC43MjktMC41M2w0LjUxOC0wLjkyOWMwLjMyMy0wLjA2NiwwLjQzOC0wLjMxNiwwLjQ3My0wLjQyXFx0YzAuMDM1LTAuMTA0LDAuMDkxLTAuMzcyLTAuMTI4LTAuNjE4TDgzLjU5Miw0Ny4yNXpcXFwiIC8+PGNpcmNsZSBjeD1cXFwiNjMuMjVcXFwiIGN5PVxcXCI0MlxcXCIgcj1cXFwiMTIuNVxcXCIgZmlsbD1cXFwiI2ZmYzU3MVxcXCIgLz48cGF0aCBmaWxsPVxcXCIjOTRjZmZmXFxcIiBkPVxcXCJNNzgsNjguNUM3OCw3NC4yOSw3My4yOSw3OSw2Ny41LDc5Yy0wLjA3LDAtMC4xNC0wLjAxLTAuMi0wLjAxbC0wLjI0LTAuMDFcXHRjLTAuMDItMC4wMS0wLjA0LTAuMDEtMC4wNi0wLjAxYy0wLjA5LDAtMC4xNywwLjAxLTAuMjYsMC4wM0gyMC41QzE0LjE2LDc5LDksNzMuODQsOSw2Ny41UzE0LjE2LDU2LDIwLjUsNTZcXHRjMC42OSwwLDEuNDIsMC4wNywyLjE1LDAuMjFjMC44LDAuMTYsMS41OC0wLjM3LDEuNzUtMS4xOEMyNi4yNyw0NS43NCwzNC41MSwzOSw0NCwzOWMxMC4yNSwwLDE4LjgsNy42OCwxOS44OCwxNy44NlxcdGMwLjA1LDAuNDEsMC4yNiwwLjc5LDAuNTksMS4wNGMwLjM0LDAuMjUsMC43NiwwLjM1LDEuMTcsMC4yOEM2Ni4zLDU4LjA2LDY2LjkxLDU4LDY3LjUsNThDNzMuMjksNTgsNzgsNjIuNzEsNzgsNjguNXpcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzQwMzk2ZVxcXCIgZD1cXFwiTTkxLjIzLDM5LjI0bC02LjE1LTIuOWwyLjM1LTIuNjNjMC41Mi0wLjU4LDAuNjgtMS4zNywwLjQ0LTIuMDljLTAuMjQtMC43My0wLjg0LTEuMjctMS42LTEuNDJcXHRsLTEuNDgtMC4zbC0yLjU3LTAuNTNsMi4xMi02YzAuMzMtMC45MiwwLjEtMS45My0wLjYtMi42MWMtMC42OS0wLjY5LTEuNy0wLjkxLTIuNjItMC41N2wtNS43MiwyLjFsLTAuNzYtMy42OVxcdGMtMC4yMS0xLTEuMDctMS43LTIuMS0xLjdjLTAuNTEsMC0xLjAxLDAuMTktMS40MSwwLjU0bC0yLjQxLDIuMTRsLTMuMTEtNi4wNmMtMC40My0wLjgzLTEuMjctMS4zNS0yLjItMS4zNmMtMC4wMSwwLTAuMDIsMC0wLjAyLDBcXHRjLTAuOTMsMC0xLjc3LDAuNTEtMi4yMSwxLjMzbC0zLjMyLDYuMjJsLTIuNTYtMi4yN2MtMC40LTAuMzUtMC44OS0wLjU0LTEuNDEtMC41NGMtMS4wMywwLTEuODksMC43LTIuMSwxLjdsLTAuNzYsMy43bC02LjI3LTIuMlxcdGMtMC44OS0wLjMxLTEuODctMC4xLTIuNTYsMC41NmMtMC42OCwwLjY1LTAuOTMsMS42My0wLjY2LDIuNTNsMS45NCw2LjMzbC0zLjMyLDAuNjhjLTAuNzYsMC4xNS0xLjM1LDAuNjgtMS42LDEuNDJcXHRjLTAuMjQsMC43My0wLjA3LDEuNTEsMC40NCwyLjA5bDIuMTksMi40NmMtOS4yNSwxLjEzLTE3LjAyLDcuOTQtMTkuNDEsMTYuOWMtMC42Ni0wLjA2LTEuMzItMC4wNy0xLjk4LTAuMDJcXHRjLTAuMjQsMC4wMS0wLjQ4LDAuMDMtMC43MiwwLjA2Yy0xLjc3LDAuMTktMy41MiwwLjczLTUuMTcsMS42MUM4Ljk3LDU3LjM1LDUuOTQsNjIuMyw2LDY3LjY2QzYuMDksNzUuNTcsMTIuNTksODIsMjAuNSw4Mkg2N1xcdGMwLjA2LDAsMC4xMiwwLDAuMTgtMC4wMUM2Ny4yOSw4Miw2Ny4zOSw4Miw2Ny41LDgyQzc0Ljk0LDgyLDgxLDc1Ljk0LDgxLDY4LjVjMC0yLjIzLTAuNTQtNC4zOC0xLjU1LTYuMjlsMS42NywwLjYyXFx0YzAuOTIsMC4zNCwxLjkyLDAuMTIsMi42Mi0wLjU3YzAuNy0wLjY4LDAuOTMtMS42OSwwLjYtMi42MWwtMi4xMi02LjAxbDMuMzItMC42OGwwLjczLTAuMTVjMC43Ni0wLjE2LDEuMzUtMC42OSwxLjU5LTEuNDFcXHRjMC4yNS0wLjczLDAuMDktMS41Mi0wLjQzLTIuMWwtMi4zNS0yLjYzbDYuMTUtMi45MWMwLjg4LTAuNDEsMS40My0xLjI4LDEuNDMtMi4yNkM5Mi42Niw0MC41Myw5Mi4xMSwzOS42Niw5MS4yMywzOS4yNHogTTgzLjMsNDQuMTljLTAuNzQsMC4zNS0xLjI3LDEuMDMtMS40MywxLjgyYy0wLjAzLDAuMTctMC4wNSwwLjM0LTAuMDUsMC41MmMwLDAuNjMsMC4yMywxLjI0LDAuNjUsMS43MmwxLjcyLDEuOTJsLTMuMDQsMC42M1xcdGMtMC43MywwLjE1LTEuMzYsMC42MS0xLjczLDEuMjZjLTAuMzcsMC42Ni0wLjQ0LDEuNDQtMC4xOSwyLjE0bDEuOTMsNS40NWwtNS4xNS0xLjljLTAuNDEtMC4xNS0wLjg0LTAuMjEtMS4yNy0wLjE0XFx0Yy0wLjU5LDAuMDktMS4wOCwwLjUxLTEuMjQsMS4wOWMtMC4xNiwwLjU4LDAuMDQsMS4yLDAuNTEsMS41N0M3Ni41NSw2Mi4yOCw3OCw2NS4yOCw3OCw2OC41Qzc4LDc0LjI5LDczLjI5LDc5LDY3LjUsNzlcXHRjLTAuMDcsMC0wLjE0LTAuMDEtMC4yLTAuMDFsLTAuMjQtMC4wMWMtMC4wMi0wLjAxLTAuMDQtMC4wMS0wLjA2LTAuMDFjLTAuMDksMC0wLjE3LDAuMDEtMC4yNiwwLjAzSDIwLjVcXHRDMTQuMjMsNzksOS4wNyw3My45LDksNjcuNjNjLTAuMDUtNC4yMywyLjM4LTguMTYsNi4zMi0xMC4yNmMxLjMtMC42OSwyLjYzLTEuMTIsMy45OS0xLjI5YzAuMi0wLjAyLDAuMzktMC4wNCwwLjU5LTAuMDVcXHRjMC45MS0wLjA2LDEuODMsMCwyLjc1LDAuMThjMC44LDAuMTUsMS41OC0wLjM3LDEuNzUtMS4xOGMxLjcxLTguNSw4LjkzLTE1LjA1LDE3LjU1LTE1LjkzYzAuMTgtMC4wMiwwLjM2LTAuMDcsMC41Mi0wLjE1XFx0bDAuNTQtMC4yN2MwLjc0LTAuMzUsMS4yNy0xLjAzLDEuNDMtMS44MnMtMC4wNi0xLjYyLTAuNi0yLjIzbC0xLjYtMS44bDIuMjktMC40N2MwLjcxLTAuMTQsMS4zNC0wLjU5LDEuNzEtMS4yMVxcdGMwLjM3LTAuNjMsMC40Ni0xLjM5LDAuMjQtMi4wOGwtMS43OC01LjgxbDUuNzgsMi4wM2MwLjcsMC4yNCwxLjQ4LDAuMTcsMi4xMi0wLjE5YzAuNjYtMC4zNywxLjEyLTEsMS4yNy0xLjczbDAuNTYtMi42OWwxLjgzLDEuNjJcXHRjMC41OCwwLjUzLDEuNCwwLjc1LDIuMTgsMC42MWMwLjc5LTAuMTQsMS40NS0wLjYzLDEuODItMS4zM2wzLjEyLTUuODRsMi45MSw1LjY3YzAuMzYsMC43MSwxLjA1LDEuMjIsMS44MywxLjM3XFx0YzAuNzksMC4xNSwxLjYxLTAuMDgsMi4yLTAuNjFMNzIsMjAuNjhsMC41NiwyLjY4YzAuMTUsMC43NCwwLjYyLDEuMzgsMS4yOCwxLjc0YzAuNjUsMC4zNiwxLjQ2LDAuNDMsMi4xNSwwLjE3bDUuMTctMS45XFx0bC0xLjkzLDUuNDRjLTAuMjUsMC43LTAuMTgsMS40OCwwLjE5LDIuMTRjMC4zNiwwLjY1LDEsMS4xMSwxLjczLDEuMjZsMy4wNCwwLjYybC0xLjcyLDEuOTNjLTAuNTQsMC42MS0wLjc2LDEuNDQtMC42LDIuMjRcXHRjMC4xNiwwLjc5LDAuNywxLjQ3LDEuNDMsMS44Mmw1LjY5LDIuNjhMODMuMyw0NC4xOXpcXFwiIC8+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbCIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbC5qc1wiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanNcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcImljb25zOC1yYWluLTUwXCIsXG4gIFwidXNlXCI6IFwiaWNvbnM4LXJhaW4tNTAtdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwMCAxMDBcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBpZD1cXFwiaWNvbnM4LXJhaW4tNTBcXFwiPjxwYXRoIGQ9XFxcIk03OS4wOSw2Mi41NWMxLjgsMC43NSwzLjE4LDIuMjksMy43Myw0LjE3YzEuOTMsNi43MiwyLjM2LDExLjY3LDEuMjYsMTQuNjlcXHRjLTEuMDUsMi44OC0zLjE1LDUuMTctNS45Myw2LjQ3Yy0xLjUzLDAuNzEtMy4xNiwxLjA4LTQuODQsMS4wOGMtMS4zNCwwLTIuNjYtMC4yNC0zLjkyLTAuN2MtNC43OC0xLjc0LTcuNy02LjM0LTcuNTMtMTEuMTdcXHRjLTEuMTIsMi41NC0zLjA4LDQuNTYtNS42MSw1Ljc0Yy0xLjUzLDAuNzEtMy4xNSwxLjA3LTQuODMsMS4wN2MtMS4zMywwLTIuNjUtMC4yMy0zLjkxLTAuNjljLTIuODctMS4wNC01LjE2LTMuMTQtNi40NS01LjkxXFx0Yy0wLjE3LTAuMzUtMC4zMS0wLjctMC40My0xLjA2YzAuMTEsMi4wOC0wLjA2LDMuODMtMC41NSw1LjE3Yy0xLjA1LDIuODgtMy4xNSw1LjE3LTUuOTMsNi40N2MtMS41MywwLjcxLTMuMTYsMS4wOC00Ljg0LDEuMDhcXHRjLTEuMzQsMC0yLjY2LTAuMjQtMy45Mi0wLjdjLTUuOTQtMi4xNi05LjAxLTguNzUtNi44NS0xNC42OWMxLjM3LTMuNzgsNi40Mi03Ljc2LDEwLjQxLTEwLjQ0YzAuMDctMC4wNSwwLjE1LTAuMDgsMC4yMi0wLjEzSDI5XFx0Yy0xMC40OCwwLTE5LTguNTItMTktMTljMC05Ljg5LDcuNDItMTguMDIsMTcuMjctMTguOTJjMC4zNy0wLjAzLDAuNzctMC4wNiwxLjE3LTAuMDdDMzIuNjUsMTYsNDEuODMsMTAsNTIsMTBzMTkuMzUsNiwyMy41NiwxNS4wMVxcdGMwLjQxLDAuMDEsMC44MSwwLjA0LDEuMjIsMC4wOEM4Ni41OCwyNS45OCw5NCwzNC4xMSw5NCw0NEM5NCw1My4wNyw4Ny42LDYwLjY3LDc5LjA5LDYyLjU1elxcXCIgb3BhY2l0eT1cXFwiLjM1XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiNmMmYyZjJcXFwiIGQ9XFxcIk03Ny4wOSw2MC41NWMxLjgsMC43NSwzLjE4LDIuMjksMy43Myw0LjE3YzEuOTMsNi43MiwyLjM2LDExLjY3LDEuMjYsMTQuNjlcXHRjLTEuMDUsMi44OC0zLjE1LDUuMTctNS45Myw2LjQ3Yy0xLjUzLDAuNzEtMy4xNiwxLjA4LTQuODQsMS4wOGMtMS4zNCwwLTIuNjYtMC4yNC0zLjkyLTAuN2MtNC43OC0xLjc0LTcuNy02LjM0LTcuNTMtMTEuMTdcXHRjLTEuMTIsMi41NC0zLjA4LDQuNTYtNS42MSw1Ljc0Yy0xLjUzLDAuNzEtMy4xNSwxLjA3LTQuODMsMS4wN2MtMS4zMywwLTIuNjUtMC4yMy0zLjkxLTAuNjljLTIuODctMS4wNC01LjE2LTMuMTQtNi40NS01LjkxXFx0Yy0wLjE3LTAuMzUtMC4zMS0wLjctMC40My0xLjA2YzAuMTEsMi4wOC0wLjA2LDMuODMtMC41NSw1LjE3Yy0xLjA1LDIuODgtMy4xNSw1LjE3LTUuOTMsNi40N2MtMS41MywwLjcxLTMuMTYsMS4wOC00Ljg0LDEuMDhcXHRjLTEuMzQsMC0yLjY2LTAuMjQtMy45Mi0wLjdjLTUuOTQtMi4xNi05LjAxLTguNzUtNi44NS0xNC42OWMxLjM3LTMuNzgsNi40Mi03Ljc2LDEwLjQxLTEwLjQ0YzAuMDctMC4wNSwwLjE1LTAuMDgsMC4yMi0wLjEzSDI3XFx0QzE2LjUyLDYxLDgsNTIuNDgsOCw0MmMwLTkuODksNy40Mi0xOC4wMiwxNy4yNy0xOC45MmMwLjM3LTAuMDMsMC43Ny0wLjA2LDEuMTctMC4wN0MzMC42NSwxNCwzOS44Myw4LDUwLDhzMTkuMzUsNiwyMy41NiwxNS4wMVxcdGMwLjQxLDAuMDEsMC44MSwwLjA0LDEuMjIsMC4wOEM4NC41OCwyMy45OCw5MiwzMi4xMSw5Miw0MkM5Miw1MS4wNyw4NS42LDU4LjY3LDc3LjA5LDYwLjU1elxcXCIgLz48cGF0aCBmaWxsPVxcXCIjOTRjZmZmXFxcIiBkPVxcXCJNNzMsMjkuNWMtMS4zNTksMC0yLjY2MywwLjIyNC0zLjg4OCwwLjYyNEM2Ny4zMTUsMjEuMjEyLDU5LjQ0MiwxNC41LDUwLDE0LjVcXHRzLTE3LjMxNSw2LjcxMi0xOS4xMTIsMTUuNjI0QzI5LjY2MywyOS43MjQsMjguMzU5LDI5LjUsMjcsMjkuNWMtNi45MDQsMC0xMi41LDUuNTk2LTEyLjUsMTIuNVMyMC4wOTYsNTQuNSwyNyw1NC41XFx0YzAuMTY5LDAsNDUuODMxLDAsNDYsMGM2LjkwNCwwLDEyLjUtNS41OTYsMTIuNS0xMi41Uzc5LjkwNCwyOS41LDczLDI5LjV6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiM0MDM5NmVcXFwiIGQ9XFxcIk03Myw1NkgyN2MtNy43MiwwLTE0LTYuMjgtMTQtMTRzNi4yOC0xNCwxNC0xNGMwLjkzNywwLDEuODcsMC4wOTUsMi43OSwwLjI4M1xcdEMzMi4zMTUsMTkuMzM5LDQwLjU3NCwxMyw1MCwxM3MxNy42ODUsNi4zMzksMjAuMjEsMTUuMjgzQzcxLjEzLDI4LjA5NSw3Mi4wNjMsMjgsNzMsMjhjNy43MiwwLDE0LDYuMjgsMTQsMTRTODAuNzIsNTYsNzMsNTZ6IE0yNywzMWMtNi4wNjUsMC0xMSw0LjkzNS0xMSwxMXM0LjkzNSwxMSwxMSwxMWg0NmM2LjA2NSwwLDExLTQuOTM1LDExLTExcy00LjkzNS0xMS0xMS0xMWMtMS4xNTQsMC0yLjMwNiwwLjE4NS0zLjQyMiwwLjU1XFx0Yy0wLjQwNSwwLjEzNS0wLjg1LDAuMDg1LTEuMjIyLTAuMTNjLTAuMzctMC4yMTYtMC42My0wLjU3OS0wLjcxNS0wLjk5OUM2NS45NTYsMjIuMDY0LDU4LjUzNywxNiw1MCwxNlxcdHMtMTUuOTU2LDYuMDY0LTE3LjY0MiwxNC40MjFjLTAuMDg1LDAuNDItMC4zNDUsMC43ODMtMC43MTUsMC45OTljLTAuMzcxLDAuMjE3LTAuODE2LDAuMjY0LTEuMjIyLDAuMTNcXHRDMjkuMzA2LDMxLjE4NSwyOC4xNTQsMzEsMjcsMzF6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiMyNzg1YmRcXFwiIGQ9XFxcIk01NC4wNTEsNzIuMTU1YzAuOTMxLTIuNTU5LTEuMzktMTAuNTk2LTEuMzktMTAuNTk2cy02Ljk0NSw0LjY2NS03Ljg3Niw3LjIyNFxcdGMtMC45MzEsMi41NTksMC4zODgsNS4zODgsMi45NDcsNi4zMkM1MC4yOSw3Ni4wMzMsNTMuMTIsNzQuNzE0LDU0LjA1MSw3Mi4xNTV6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiM0MDM5NmVcXFwiIGQ9XFxcIk00OS40MjIsNzYuOTAyYy0wLjc0MiwwLTEuNDg1LTAuMTMtMi4yMDQtMC4zOTJjLTEuNjEzLTAuNTg3LTIuOTAyLTEuNzY4LTMuNjI4LTMuMzI0XFx0Yy0wLjcyNi0xLjU1OC0wLjgwMi0zLjMwNC0wLjIxNC00LjkxOGMxLjA0NS0yLjg3Miw3LjIyMi03LjEzMSw4LjQ0OS03Ljk1NWMwLjM5Ny0wLjI2NywwLjktMC4zMjgsMS4zNDktMC4xNjRcXHRjMC40NSwwLjE2MywwLjc5NiwwLjUzMiwwLjkyOSwwLjk5M2MwLjQxLDEuNDIsMi40MDMsOC42NTEsMS4zNTcsMTEuNTI1bDAsMGMtMC41ODcsMS42MTQtMS43NjgsMi45MDMtMy4zMjQsMy42MjlcXHRDNTEuMjcxLDc2LjcsNTAuMzQ4LDc2LjkwMiw0OS40MjIsNzYuOTAyeiBNNTEuNzYzLDY0LjAyN2MtMi42MzgsMS45NDYtNS4xODMsNC4yMDctNS41NjgsNS4yNjhcXHRjLTAuMzEzLDAuODYxLTAuMjcyLDEuNzkzLDAuMTE0LDIuNjI0YzAuMzg4LDAuODMsMS4wNzUsMS40NiwxLjkzNiwxLjc3M2MwLjg2MSwwLjMxMywxLjc5MywwLjI3MywyLjYyNC0wLjExNFxcdGMwLjgzLTAuMzg4LDEuNDYtMS4wNzUsMS43NzMtMS45MzZsMCwwQzUzLjAyNyw3MC41ODEsNTIuNTMyLDY3LjIxMyw1MS43NjMsNjQuMDI3elxcXCIgLz48cGF0aCBmaWxsPVxcXCIjMjc4NWJkXFxcIiBkPVxcXCJNNzUuOTcsNzcuMTg5YzAuOTM3LTIuNTc1LTEuMzk5LTEwLjY2My0xLjM5OS0xMC42NjNzLTYuOTg5LDQuNjk0LTcuOTI2LDcuMjY5XFx0Yy0wLjkzNywyLjU3NSwwLjM5LDUuNDIyLDIuOTY1LDYuMzU5QzcyLjE4NSw4MS4wOTEsNzUuMDMyLDc5Ljc2NCw3NS45Nyw3Ny4xODl6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiM0MDM5NmVcXFwiIGQ9XFxcIk03MS4zMTIsODEuOTU3Yy0wLjc0NiwwLTEuNDkzLTAuMTMxLTIuMjE0LTAuMzk0Yy0zLjM0OC0xLjIxOC01LjA4LTQuOTM0LTMuODYzLTguMjgxXFx0YzEuMDUyLTIuODg5LDcuMjY1LTcuMTczLDguNS04LjAwMmMwLjM5Ni0wLjI2NywwLjg5OS0wLjMyNywxLjM0OS0wLjE2NGMwLjQ1LDAuMTYzLDAuNzk2LDAuNTMyLDAuOTI5LDAuOTkzXFx0YzAuNDEyLDEuNDI5LDIuNDE4LDguNzA1LDEuMzY3LDExLjU5MmwwLDBjLTAuNTksMS42MjItMS43NzYsMi45MTctMy4zNDEsMy42NDZDNzMuMTcsODEuNzUzLDcyLjI0Miw4MS45NTcsNzEuMzEyLDgxLjk1N3ogTTczLjY3Miw2OC45OTRjLTIuNjU5LDEuOTYxLTUuMjI5LDQuMjQzLTUuNjE4LDUuMzEzYy0wLjY1MiwxLjc5NCwwLjI3NiwzLjc4NCwyLjA2OSw0LjQzOGMxLjc5MywwLjY1MSwzLjc4NC0wLjI3NSw0LjQzOC0yLjA2OVxcdGwwLDBDNzQuOTQ5LDc1LjYwNSw3NC40NDgsNzIuMjA1LDczLjY3Miw2OC45OTR6IE03NS45Nyw3Ny4xODhoMC4wMUg3NS45N3pcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzI3ODViZFxcXCIgZD1cXFwiTTMxLjk3LDc3LjE4OWMwLjkzNy0yLjU3NS0xLjM5OS0xMC42NjMtMS4zOTktMTAuNjYzcy02Ljk4OSw0LjY5NC03LjkyNiw3LjI2OVxcdGMtMC45MzcsMi41NzUsMC4zOSw1LjQyMiwyLjk2NSw2LjM1OVMzMS4wMzIsNzkuNzY0LDMxLjk3LDc3LjE4OXpcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzQwMzk2ZVxcXCIgZD1cXFwiTTI3LjMxMiw4MS45NTdjLTAuNzQ2LDAtMS40OTMtMC4xMzEtMi4yMTQtMC4zOTRjLTMuMzQ4LTEuMjE4LTUuMDgtNC45MzQtMy44NjMtOC4yODFcXHRjMS4wNTItMi44ODksNy4yNjUtNy4xNzMsOC41LTguMDAyYzAuMzk2LTAuMjY3LDAuODk5LTAuMzI3LDEuMzQ5LTAuMTY0YzAuNDUsMC4xNjMsMC43OTYsMC41MzIsMC45MjksMC45OTNcXHRjMC40MTIsMS40MjksMi40MTgsOC43MDUsMS4zNjcsMTEuNTkybDAsMGMtMC41OSwxLjYyMi0xLjc3NiwyLjkxNy0zLjM0MSwzLjY0NkMyOS4xNyw4MS43NTMsMjguMjQyLDgxLjk1NywyNy4zMTIsODEuOTU3eiBNMjkuNjcyLDY4Ljk5NGMtMi42NTksMS45NjEtNS4yMjksNC4yNDMtNS42MTgsNS4zMTNjLTAuNjUyLDEuNzk0LDAuMjc2LDMuNzg0LDIuMDY5LDQuNDM4YzEuNzk0LDAuNjUxLDMuNzgzLTAuMjc1LDQuNDM4LTIuMDY5XFx0bDAsMEMzMC45NDksNzUuNjA1LDMwLjQ0OCw3Mi4yMDUsMjkuNjcyLDY4Ljk5NHogTTMxLjk3LDc3LjE4OGgwLjAxSDMxLjk3elxcXCIgLz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sLmpzXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZC5qc1wiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiaWNvbnM4LXJhaW4tY2xvdWQtNTBcIixcbiAgXCJ1c2VcIjogXCJpY29uczgtcmFpbi1jbG91ZC01MC11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAwIDEwMFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIGlkPVxcXCJpY29uczgtcmFpbi1jbG91ZC01MFxcXCI+PHBhdGggZD1cXFwiTTk3LjUsNDEuNzRjMCwyLjUtMS40Niw0LjgtMy43Myw1Ljg3bC0zLjAzLDEuNDVjMC41MywxLjQ4LDAuNTgsMy4xMiwwLjA3LDQuNjZcXHRjLTAuMzIsMC45Ny0wLjgxLDEuODMtMS40NSwyLjU1Qzg5Ljc4LDU3LjgsOTAsNTkuNCw5MCw2MS4wMmMwLDguNjYtNi4xNiwxNS45MS0xNC4zMywxNy42YzEuODksNS44NiwxLjI2LDguMjUsMS4wNCw5LjA5XFx0Yy0xLjE1LDQuMjktNS4xLDcuMjgtOS41OSw3LjI4Yy0wLjg4LDAtMS43Ni0wLjExLTIuNjItMC4zNGMtMi41NC0wLjY4LTQuNjgtMi4yOC02LjAyLTQuNTFjLTAuMzgtMC42Mi0wLjY3LTEuMjctMC45LTEuOTRcXHRjLTAuNzcsMi4zNy0yLjM4LDQuMzMtNC41OSw1LjU1QzUxLjUxLDk0LjU3LDQ5Ljg0LDk1LDQ4LjE1LDk1Yy0wLjg4LDAtMS43Ny0wLjEyLTIuNjItMC4zNWMtMy40LTAuOTEtNS45Mi0zLjQ1LTYuOTQtNi41NFxcdGMtMS4yOSw0LjA3LTUuMTEsNi44OC05LjQ3LDYuODhjLTAuODgsMC0xLjc2LTAuMTEtMi42MS0wLjM0Yy01LjM0LTEuNDMtOC41Mi02Ljg3LTcuMTEtMTIuMTJjMC4xNi0wLjYxLDAuNTUtMi4wNCwyLjUtNC4zNVxcdEMxNC4xMyw3NS44Miw4LjQ1LDY4LjYsOC40NSw2MC4wN2MwLTkuNjEsNy4xOC0xNy41NywxNi40NS0xOC43N2MxLjE1LTIuNjcsMi43Mi01LjEyLDQuNjYtNy4yOGMtMC40My0xLjQtMC40MS0yLjksMC4wNy00LjMzXFx0YzAuNTgtMS44LDEuOS0zLjMsMy42MS00LjE0bC0xLjE1LTMuNjljLTAuNjktMi4yNC0wLjA5LTQuNzgsMS41My02LjQ4YzAuODgtMC45MywyLjAxLTEuNTcsMy4yNy0xLjg3bDAuMjMtMC4wNVxcdGMwLjQyLTAuMDcsMC44NS0wLjExLDEuMjgtMC4xMWMwLjc5LDAsMS41NCwwLjEzLDIuMjQsMC4zOGwzLjI1LDEuMTdjMS4xNS0yLjUsMy42NC00LjE1LDYuNTItNC4xNWMwLjg2LDAsMS43MSwwLjE2LDIuNTEsMC40NlxcdGwxLjY2LTMuMThjMC45OS0xLjg5LDIuOTMtMy4yMyw1LjA1LTMuNDhsMC4xMS0wLjAyYzAuMjItMC4wMiwwLjQzLTAuMDMsMC42NC0wLjAzYzAuMTksMCwwLjM4LDAuMDEsMC41NywwLjAzXFx0YzIuMzEsMC4xOCwzLjA2OCwzLjY4Miw0LjA3OCw1Ljc3MmwyLjc2MiwwLjgwOGMwLjcyLTAuMjQsMS40Ny0wLjM2LDIuMjMtMC4zNmMyLjc5LDAsMy42MzYsMS43MzMsNC44MTYsNC4xNjNsNC40ODQtMS4xNjNcXHRjMC43NC0wLjI4LDEuNTEtMC40MiwyLjI5LTAuNDJjMS4wMSwwLDIuMDIsMC4yNSwyLjkzLDAuN2MzLjA1LDEuNiw0LjM5LDUuMDcsMy4yNCw4LjE2bC0xLjEsMy4xMmMxLjk0LDAuNzgsMy40NCwyLjM1LDQuMTIsNC40XFx0YzAuNTEsMS41NiwwLjQ3LDMuMjItMC4wNyw0LjdsMy4wNiwxLjQ1Qzk2LjA0LDM2LjkyLDk3LjUsMzkuMjMsOTcuNSw0MS43NHpcXFwiIG9wYWNpdHk9XFxcIi4zNVxcXCIgLz48cGF0aCBmaWxsPVxcXCIjZjJmMmYyXFxcIiBkPVxcXCJNOTUuNSwzOS43NGMwLDIuNS0xLjQ2LDQuOC0zLjczLDUuODdsLTMuMDMsMS40NWMwLjUzLDEuNDgsMC41OCwzLjEyLDAuMDcsNC42NlxcdGMtMC4zMiwwLjk3LTAuODEsMS44My0xLjQ1LDIuNTVDODcuNzgsNTUuOCw4OCw1Ny40LDg4LDU5LjAyYzAsOC42Ni02LjE2LDE1LjkxLTE0LjMzLDE3LjZjMS44OSw1Ljg2LDEuMjYsOC4yNSwxLjA0LDkuMDlcXHRjLTEuMTUsNC4yOS01LjEsNy4yOC05LjU5LDcuMjhjLTAuODgsMC0xLjc2LTAuMTEtMi42Mi0wLjM0Yy0yLjU0LTAuNjgtNC42OC0yLjI4LTYuMDItNC41MWMtMC4zOC0wLjYyLTAuNjctMS4yNy0wLjktMS45NFxcdGMtMC43NywyLjM3LTIuMzgsNC4zMy00LjU5LDUuNTVDNDkuNTEsOTIuNTcsNDcuODQsOTMsNDYuMTUsOTNjLTAuODgsMC0xLjc3LTAuMTItMi42Mi0wLjM1Yy0zLjQtMC45MS01LjkyLTMuNDUtNi45NC02LjU0XFx0Yy0xLjI5LDQuMDctNS4xMSw2Ljg4LTkuNDcsNi44OGMtMC44OCwwLTEuNzYtMC4xMS0yLjYxLTAuMzRjLTUuMzQtMS40My04LjUyLTYuODctNy4xMS0xMi4xMmMwLjE2LTAuNjEsMC41NS0yLjA0LDIuNS00LjM1XFx0QzEyLjEzLDczLjgyLDYuNDUsNjYuNiw2LjQ1LDU4LjA3YzAtOS42MSw3LjE4LTE3LjU3LDE2LjQ1LTE4Ljc3YzEuMTUtMi42NywyLjcyLTUuMTIsNC42Ni03LjI4Yy0wLjQzLTEuNC0wLjQxLTIuOSwwLjA3LTQuMzNcXHRjMC41OC0xLjgsMS45LTMuMywzLjYxLTQuMTRsLTEuMTUtMy42OWMtMC42OS0yLjI0LTAuMDktNC43OCwxLjUzLTYuNDhjMC44OC0wLjkzLDIuMDEtMS41NywzLjI3LTEuODdsMC4yMy0wLjA1XFx0YzAuNDItMC4wNywwLjg1LTAuMTEsMS4yOC0wLjExYzAuNzksMCwxLjU0LDAuMTMsMi4yNCwwLjM4bDMuMjUsMS4xN2MxLjE1LTIuNSwzLjY0LTQuMTUsNi41Mi00LjE1YzAuODYsMCwxLjcxLDAuMTYsMi41MSwwLjQ2XFx0bDEuNjYtMy4xOGMwLjk5LTEuODksMi45My0zLjIzLDUuMDUtMy40OGwwLjExLTAuMDJjMC4yMi0wLjAyLDAuNDMtMC4wMywwLjY0LTAuMDNjMC4xOSwwLDAuMzgsMC4wMSwwLjU3LDAuMDNcXHRjMi4zMSwwLjE4LDQuMzYsMS41OCw1LjM3LDMuNjdsMS40NywyLjkxYzAuNzItMC4yNCwxLjQ3LTAuMzYsMi4yMy0wLjM2YzIuNzksMCw1LjI5LDEuNjQsNi40Nyw0LjA3bDIuODMtMS4wN1xcdGMwLjc0LTAuMjgsMS41MS0wLjQyLDIuMjktMC40MmMxLjAxLDAsMi4wMiwwLjI1LDIuOTMsMC43YzMuMDUsMS42LDQuMzksNS4wNywzLjI0LDguMTZsLTEuMSwzLjEyYzEuOTQsMC43OCwzLjQ0LDIuMzUsNC4xMiw0LjRcXHRjMC41MSwxLjU2LDAuNDcsMy4yMi0wLjA3LDQuN2wzLjA2LDEuNDVDOTQuMDQsMzQuOTIsOTUuNSwzNy4yMyw5NS41LDM5Ljc0elxcXCIgLz48cGF0aCBmaWxsPVxcXCIjZjliODRmXFxcIiBkPVxcXCJNNzkuNzc0LDQ1Ljk4NmwtMC40MjgtMC44OTNjLTAuMDAyLTAuMDg2LDAuMDA0LTAuMTczLDAuMDIyLTAuMjU5XFx0YzAuMDcxLTAuMzU1LDAuMzA1LTAuNjU1LDAuNjMxLTAuODFsOS00LjI4N2wtOS00LjI4N2MtMC4zMjUtMC4xNTUtMC41NTktMC40NTUtMC42MzEtMC44MWMtMC4wMTgtMC4wODYtMC4wMjQtMC4xNzMtMC4wMjItMC4yNTlcXHRsMC40MjgtMC44OTNsMi43MjItMy4wNzdjMC4yMzEtMC4yNjEsMC4xNzEtMC41NDUsMC4xMzUtMC42NTVjLTAuMDM2LTAuMTEtMC4xNTgtMC4zNzUtMC40OTctMC40NDVsLTQuNzUtMC45ODRcXHRjLTAuMzI1LTAuMDY3LTAuNjA0LTAuMjczLTAuNzY2LTAuNTYyYy0wLjE2Mi0wLjI5LTAuMTkxLTAuNjM3LTAuMDgtMC45NTFsMy4xNTMtOC44NzRjMC4wMS0wLjAyOCwwLjAwMy0wLjA2MS0wLjA4NS0wLjEwN1xcdGwtOC41MDMsMy4yYy0wLjEzLDAuMDQ5LTAuMjY2LDAuMDczLTAuNDAxLDAuMDczYy0wLjE5MSwwLTAuMzgyLTAuMDQ4LTAuNTUzLTAuMTQzYy0wLjI5Mi0wLjE2Mi0wLjUtMC40NDUtMC41NjctMC43NzVcXHRsLTAuOTAzLTQuNDA1Yy0wLjA3Ni0wLjM2OC0wLjM5NS0wLjUzNS0wLjY2LTAuNTM1Yy0wLjE2MiwwLTAuMzA4LDAuMDU4LTAuNDM1LDAuMTcxbC0yLjk1LDIuNjM3XFx0Yy0wLjIxMSwwLjE4OS0wLjQ4MiwwLjI5LTAuNzYsMC4yOWMtMC4wNzEsMC0wLjE0Mi0wLjAwNy0wLjIxMy0wLjAyYy0wLjM0OS0wLjA2Ni0wLjY0Ni0wLjI5MS0wLjgwNy0wLjYwOWwtNC4zNzUtOC42NzFcXHRjLTAuMDEzLTAuMDI3LTAuMDM5LTAuMDQzLTAuMDY5LTAuMDQ0Yy0wLjAwMywwLTAuMDA1LDAtMC4wMDgtMC4wMDFjLTAuMDI2LDAuMDAzLTAuMDUxLDAuMDE5LTAuMDYzLDAuMDQzbC00LjYyLDguODI2XFx0Yy0wLjE2NCwwLjMxMy0wLjQ2MiwwLjUzMy0wLjgwOCwwLjU5NmMtMC4wNjgsMC4wMTMtMC4xMzYsMC4wMTktMC4yMDQsMC4wMTljLTAuMjc4LDAtMC41NDktMC4xMDItMC43Ni0wLjI5bC0zLjEwMy0yLjc3NVxcdGMtMC4xMjctMC4xMTMtMC4yNzMtMC4xNzEtMC40MzUtMC4xNzFjLTAuMjY1LDAtMC41ODQsMC4xNjgtMC42NiwwLjUzNWwtMC45MDUsNC40MDljLTAuMDY3LDAuMzI2LTAuMjcxLDAuNjA3LTAuNTU5LDAuNzdcXHRjLTAuMTc0LDAuMDk4LTAuMzY2LDAuMTQ4LTAuNTYxLDAuMTQ4Yy0wLjEzLDAtMC4yNi0wLjAyMi0wLjM4NS0wLjA2N2wtOC45MjctMy4yMDVsLTAuMDgyLDAuMDE3XFx0Yy0wLjAyMSwwLjAyMS0wLjAyOCwwLjA1My0wLjAyLDAuMDgxbDIuODA2LDkuMDg4YzAuMDk1LDAuMzEsMC4wNTcsMC42NDYtMC4xMDcsMC45MjVjLTAuMTY1LDAuMjc5LTAuNDM5LDAuNDc2LTAuNzU0LDAuNTQxXFx0bC0zLjk2MiwwLjgyYy0wLjM0LDAuMDctMC40NjEsMC4zMzUtMC40OTcsMC40NDVjLTAuMDM2LDAuMTEtMC4wOTUsMC4zOTUsMC4xMzUsMC42NTVsMi4wMzksMi4zMDZsMC45OCwxLjYzNmw4LjI0LDE4LjE0NVxcdGwzMi4wMjktMC4zODVjMCwwLTAuMTU3LTAuODk5LDAuMTY4LTAuOTY1bDQuNzUtMC45ODRjMC4zNC0wLjA3LDAuNDYxLTAuMzM1LDAuNDk3LTAuNDQ1YzAuMDM2LTAuMTEsMC4wOTYtMC4zOTUtMC4xMzUtMC42NTVcXHRMNzkuNzc0LDQ1Ljk4NnpcXFwiIC8+PGNpcmNsZSBjeD1cXFwiNTguNFxcXCIgY3k9XFxcIjM5Ljk5N1xcXCIgcj1cXFwiMTIuNVxcXCIgZmlsbD1cXFwiI2ZmYzU3MVxcXCIgLz48cGF0aCBmaWxsPVxcXCIjOTRjZmZmXFxcIiBkPVxcXCJNODAsNTkuMDJjMCw1LjUtNC40NzUsOS45NzUtOS45NzUsOS45NzVjLTAuMDY3LDAtMC4xMzMtMC4wMS0wLjE5LTAuMDFsLTAuMjI4LTAuMDFcXHRjLTAuMDE5LTAuMDEtMC4wMzgtMC4wMS0wLjA1Ny0wLjAxYy0wLjA4NiwwLTAuMTYxLDAuMDEtMC4yNDcsMC4wMjlIMjUuMzc1Yy02LjAyMywwLTEwLjkyNS00LjkwMi0xMC45MjUtMTAuOTI1XFx0YzAtNi4wMjMsNC45MDItMTAuOTI1LDEwLjkyNS0xMC45MjVjMC42NTYsMCwxLjM0OSwwLjA2NywyLjA0MywwLjE5OWMwLjc2LDAuMTUyLDEuNTAxLTAuMzUxLDEuNjYzLTEuMTIxXFx0YzEuNzc2LTguODI1LDkuNjA0LTE1LjIyOCwxOC42Mi0xNS4yMjhjOS43MzcsMCwxNy44Niw3LjI5NiwxOC44ODYsMTYuOTY3YzAuMDQ3LDAuMzg5LDAuMjQ3LDAuNzUsMC41NiwwLjk4OFxcdGMwLjMyMywwLjIzOCwwLjcyMiwwLjMzMywxLjExMiwwLjI2NmMwLjYyNy0wLjExNCwxLjIwNi0wLjE3MSwxLjc2Ny0wLjE3MUM3NS41MjUsNDkuMDQ1LDgwLDUzLjUxOSw4MCw1OS4wMnpcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzQwMzk2ZVxcXCIgZD1cXFwiTTcwLjAyNSw3MS45OTRjLTAuMTE0LDAtMC4yMjctMC4wMDYtMC4zMzQtMC4wMTVINjkuNjljLTAuMDA2LDAtMC4wMzctMC4wMDEtMC4wNzgtMC4wMDNcXHRjLTAuMDk5LDAuMDEzLTAuMTk0LDAuMDE4LTAuMzEsMC4wMThIMjUuMzc1Yy03LjY3OCwwLTEzLjkyNS02LjI0Ny0xMy45MjUtMTMuOTI1YzAtOC4wNDIsNi44MzctMTQuNTQ4LDE1LjAyOS0xMy44NzlcXHRjMS4yMjgtNC41MTUsMy44NTQtOC40ODQsNy41NDItMTEuNDA4bC0xLjIxOS0xLjM3N2MtMC41MTYtMC41ODQtMC42NzktMS4zNzUtMC40MzctMi4xMTZjMC4yNDUtMC43NDcsMC44NS0xLjI4OCwxLjYxOS0xLjQ0N1xcdGwzLjU4Mi0wLjc0MmwtMi42OTQtOC43MjJjLTAuMTYtMC41Mi0wLjAwNi0xLjE2NiwwLjM2OS0xLjU2YzAuMjEyLTAuMjIyLDAuNDg2LTAuMzczLDAuNzg3LTAuNDM0XFx0YzAuMjY5LTAuMDU3LDAuNjI4LTAuMDUxLDAuODg3LDAuMDQxbDguNTM4LDMuMDY1bDAuODIyLTQuMDExYzAuMjEyLTEuMDIyLDEuMDg3LTEuNzM0LDIuMTMtMS43MzRjMC41MjksMCwxLjAyMywwLjE4OSwxLjQyOSwwLjU0OFxcdGwyLjc2NSwyLjQ3M2w0LjQwNy04LjQxOWMwLjIzLTAuNDQsMC43MjgtMC43ODEsMS4yMjEtMC44MzhjMC4xMDMtMC4wMTIsMC4yMDQtMC4wMTMsMC4zMDctMC4wMDRcXHRjMC41NjIsMC4wNDUsMS4wNjQsMC4zOTIsMS4zMDQsMC45MDdsNC4xNDUsOC4yMTFsMi42LTIuMzI1YzAuNDExLTAuMzYzLDAuOTA1LTAuNTUzLDEuNDM2LTAuNTUzYzEuMDI4LDAsMS45MjQsMC43MywyLjEyOSwxLjczNlxcdGwwLjgxOSwzLjk5N2w4LjExLTMuMDUyYzAuNC0wLjE0OCwwLjg0NS0wLjEyMiwxLjIyMywwLjA3NGMwLjg0NCwwLjQ0MSwxLjAzNywxLjMyNCwwLjc5MywxLjk2OWwtMy4wMDgsOC40NjlsNC4zNTQsMC45MDJcXHRjMC43NjksMC4xNTksMS4zNzMsMC43LDEuNjE4LDEuNDQ3YzAuMjQyLDAuNzQxLDAuMDc5LDEuNTMyLTAuNDM3LDIuMTE1bC0yLjU1NywyLjg5Mmw4LjU4LDQuMDg2XFx0YzAuNTIyLDAuMjQ5LDAuODU1LDAuNzc2LDAuODU1LDEuMzU0cy0wLjMzMywxLjEwNS0wLjg1NCwxLjM1NGwtOC41ODIsNC4wODdsMi41NTgsMi44OTFjMC41MTYsMC41ODQsMC42NzksMS4zNzUsMC40MzcsMi4xMTZcXHRjLTAuMjQ4LDAuNzQ5LTAuODUyLDEuMjg4LTEuNjE4LDEuNDQ3TDgwLjksNTEuOTVjMS4zNjYsMi4wODksMi4xLDQuNTI3LDIuMSw3LjA2OUM4Myw2Ni4xNzQsNzcuMTgsNzEuOTk0LDcwLjAyNSw3MS45OTR6IE02OS4yMDgsNjkuMDA1YzAsMC0wLjAwMSwwLTAuMDAyLDBDNjkuMjA3LDY5LjAwNSw2OS4yMDgsNjkuMDA1LDY5LjIwOCw2OS4wMDV6IE02OS41MzUsNjguOTc0YzAuMDQxLDAsMC4wODEsMC4wMDIsMC4xMTgsMC4wMDVcXHRsMC4zNzIsMC4wMTZjNS41LDAsOS45NzUtNC40NzUsOS45NzUtOS45NzVjMC0yLjYyNS0xLjAyLTUuMTA3LTIuODcxLTYuOTg5Yy0wLjM4NS0wLjM5Mi0wLjUyNS0wLjk2Mi0wLjM2Ni0xLjQ4N1xcdHMwLjU5NC0wLjkyMiwxLjEzMS0xLjAzM2wyLjUzMS0wLjUyNGwtMS43NzQtMi4wMDZjLTAuMDkxLTAuMTA0LTAuMTY4LTAuMjItMC4yMjktMC4zNDVsLTAuNDI5LTAuODkzXFx0Yy0wLjA5Mi0wLjE5Mi0wLjE0My0wLjQwMi0wLjE0Ny0wLjYxNWMtMC4wMDQtMC4yLDAuMDE0LTAuMzk4LDAuMDUyLTAuNTkxYzAuMTY0LTAuODEzLDAuNzA4LTEuNTExLDEuNDU3LTEuODY3bDYuMTU2LTIuOTMzXFx0bC02LjE1Ni0yLjkzMmMtMC43NDktMC4zNTYtMS4yOTQtMS4wNTYtMS40NTctMS44N2MtMC4wMzgtMC4xODctMC4wNTYtMC4zODctMC4wNTItMC41ODhjMC4wMDUtMC4yMTMsMC4wNTYtMC40MjMsMC4xNDctMC42MTVcXHRsMC40MjktMC44OTNjMC4wNjEtMC4xMjUsMC4xMzgtMC4yNCwwLjIyOS0wLjM0NWwxLjc3NC0yLjAwNmwtMy4zNDYtMC42OTNjLTAuNzQ4LTAuMTUyLTEuMzk2LTAuNjI3LTEuNzcxLTEuM1xcdGMtMC4zNzMtMC42NjctMC40MzktMS40NjMtMC4xODQtMi4xODRsMi4xMjgtNS45OTFsLTUuNjIyLDIuMTE1Yy0wLjY5LDAuMjY1LTEuNTM2LDAuMjEyLTIuMjEtMC4xNjJcXHRjLTAuNjc5LTAuMzc5LTEuMTU1LTEuMDI5LTEuMzEtMS43ODdsLTAuNjExLTIuOTgybC0xLjg2NiwxLjY2OWMtMC42MSwwLjU0NS0xLjQ1MSwwLjc4MS0yLjI1OSwwLjYyNVxcdGMtMC44MDYtMC4xNTMtMS40ODYtMC42NjYtMS44NTktMS40MDRsLTMuMTMyLTYuMjA2bC0zLjMzOCw2LjM3NmMtMC4zODIsMC43MjktMS4wNjMsMS4yMy0xLjg3LDEuMzc2XFx0Yy0wLjc3NSwwLjE0OS0xLjYyMy0wLjA4OS0yLjIyOS0wLjYyNmwtMi4wMjItMS44MWwtMC42MTIsMi45ODljLTAuMTU1LDAuNzUyLTAuNjI2LDEuMzk3LTEuMjksMS43NzRcXHRjLTAuNjY2LDAuMzc0LTEuNDY2LDAuNDQzLTIuMTgyLDAuMTlsLTYuMjYxLTIuMjQ3bDEuOTY4LDYuMzdjMC4yMTgsMC43MTMsMC4xMjgsMS40ODYtMC4yNDcsMi4xMjZcXHRjLTAuMzgyLDAuNjQ2LTEuMDE4LDEuMTAyLTEuNzQ1LDEuMjUybC0yLjU1NywwLjUyOWwxLjA5MiwxLjIzNGMwLjA1NCwwLjA2MiwwLjEwMywwLjEyNiwwLjE0NiwwLjE5NWwwLjIxNCwwLjM0XFx0YzAuNDMsMC42ODQsMC4yNDIsMS41ODQtMC40MjUsMi4wMzljLTQuMTIzLDIuODA4LTYuOTM5LDcuMDItNy45MzEsMTEuODZjLTAuMTY0LDAuODAxLTAuOTQ1LDEuMzI1LTEuNzQzLDEuMTc0XFx0Yy0wLjY2OC0wLjEyNC0xLjMzMy0wLjE4Ny0xLjk3Ni0wLjE4N2MtNi4wMjQsMC0xMC45MjUsNC45LTEwLjkyNSwxMC45MjVzNC45LDEwLjkyNSwxMC45MjUsMTAuOTI1aDQzLjg5NlxcdEM2OS4zNTUsNjguOTgxLDY5LjQ0OCw2OC45NzQsNjkuNTM1LDY4Ljk3NHogTTgxLjM3Miw1MC4wNTZoMC4wMUg4MS4zNzJ6IE03Ny42ODQsMjYuODU2aDAuMDAyXFx0Qzc3LjY4NiwyNi44NTYsNzcuNjg1LDI2Ljg1Niw3Ny42ODQsMjYuODU2eiBNNzAuNTY5LDE5LjYyOWMtMC4wMDIsMC4wMDEtMC4wMDMsMC4wMDEtMC4wMDUsMC4wMDJMNzAuNTY5LDE5LjYyOXogTTc4LjI3NiwxNy40MzdcXHRjLTAuMDA4LDAuMDE5LTAuMDE0LDAuMDM3LTAuMDIxLDAuMDU2TDc4LjI3NiwxNy40Mzd6IE01OC4zOTksOWgwLjAxSDU4LjM5OXpcXFwiIC8+PHBhdGggZmlsbD1cXFwiI2Q5ZWVmZlxcXCIgZD1cXFwiTTY4LjQyOSw4NC4wMjdjLTAuNDgxLDEuNzk1LTIuMzgzLDIuODQ0LTQuMjUxLDIuMzQzYy0xLjg2OC0wLjUtMi45OTEtMi4zNi0yLjUxLTQuMTU1IGMwLjQ4MS0xLjc5NSw1LjEyMi01LjU5Miw1LjEyMi01LjU5MlM2OC45MSw4Mi4yMzEsNjguNDI5LDg0LjAyN3pcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzQwMzk2ZVxcXCIgZD1cXFwiTTY4LjE5Miw3Ni4wOTNjLTAuMTcxLTAuNDUyLTAuNTQ5LTAuNzk0LTEuMDE2LTAuOTE5Yy0wLjQ2NS0wLjEyNS0wLjk2NC0wLjAxOS0xLjMzOCwwLjI4OCBjLTEuMTc2LDAuOTYzLTUuMDU4LDQuMjY3LTUuNjIsNi4zNjRjLTAuMzM5LDEuMjY3LTAuMTQ3LDIuNTksMC41MzksMy43MjhjMC42NzUsMS4xMTcsMS43NTIsMS45MjIsMy4wMzIsMi4yNjYgYzAuNDQzLDAuMTE4LDAuODg4LDAuMTc1LDEuMzI1LDAuMTc1YzIuMTksMCw0LjE4NS0xLjQyMSw0Ljc2My0zLjU4QzcwLjQ0LDgyLjMxNSw2OC43MjksNzcuNTE0LDY4LjE5Miw3Ni4wOTN6IE02Ni45NzksODMuNjM4IGMtMC4yNjcsMC45OTItMS4zNSwxLjU2OS0yLjQxMywxLjI4M2MtMC41MjctMC4xNDEtMC45NjgtMC40NjgtMS4yNC0wLjkxOWMtMC4yNjItMC40MzItMC4zMzYtMC45MjktMC4yMDktMS4zOTkgYzAuMTQ1LTAuNTMzLDEuNC0xLjkzNywyLjk3OC0zLjM5QzY2LjczNSw4MS4yNjEsNjcuMTIxLDgzLjEwNCw2Ni45NzksODMuNjM4elxcXCIgLz48cGF0aCBmaWxsPVxcXCIjZDllZWZmXFxcIiBkPVxcXCJNNDkuNDU3LDg0LjAyN2MtMC40ODEsMS43OTUtMi4zODMsMi44NDQtNC4yNTEsMi4zNDNjLTEuODY4LTAuNS0yLjk5MS0yLjM2LTIuNTEtNC4xNTUgYzAuNDgxLTEuNzk1LDUuMTIyLTUuNTkyLDUuMTIyLTUuNTkyUzQ5LjkzOCw4Mi4yMzEsNDkuNDU3LDg0LjAyN3pcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzQwMzk2ZVxcXCIgZD1cXFwiTTQ5LjIyMSw3Ni4wOTNjLTAuMTcxLTAuNDUyLTAuNTQ5LTAuNzk0LTEuMDE2LTAuOTE5Yy0wLjQ2NS0wLjEyNS0wLjk2NC0wLjAxOS0xLjMzOCwwLjI4OCBjLTEuMTc2LDAuOTYzLTUuMDU4LDQuMjY2LTUuNjIxLDYuMzY1Yy0wLjY5MywyLjU5LDAuOTA5LDUuMjc3LDMuNTcyLDUuOTkyYzAuNDQxLDAuMTE4LDAuODksMC4xNzcsMS4zMzQsMC4xNzcgYzAuODQ0LDAsMS42NzUtMC4yMTEsMi40MjQtMC42MjRjMS4xNjMtMC42NDEsMS45OS0xLjY5MSwyLjMzLTIuOTU3QzUxLjQ2OSw4Mi4zMTYsNDkuNzU4LDc3LjUxNSw0OS4yMjEsNzYuMDkzeiBNNDguMDA4LDgzLjYzOCBjLTAuMTI2LDAuNDctMC40MzgsMC44NjQtMC44ODEsMS4xMDdjLTAuNDYxLDAuMjU2LTEuMDA2LDAuMzE5LTEuNTMyLDAuMTc2Yy0xLjA2NS0wLjI4NS0xLjcxNi0xLjMyNS0xLjQ1LTIuMzE3IGMwLjE0NS0wLjUzMywxLjQtMS45MzcsMi45NzktMy4zOTFDNDcuNzY0LDgxLjI2MSw0OC4xNDksODMuMTA0LDQ4LjAwOCw4My42Mzh6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiNkOWVlZmZcXFwiIGQ9XFxcIk0zMC40MzYsODQuMDI3Yy0wLjQ4MSwxLjc5NS0yLjM4MywyLjg0NC00LjI1MSwyLjM0M2MtMS44NjgtMC41LTIuOTkxLTIuMzYtMi41MS00LjE1NSBjMC40ODEtMS43OTUsNS4xMjItNS41OTIsNS4xMjItNS41OTJTMzAuOTE3LDgyLjIzMSwzMC40MzYsODQuMDI3elxcXCIgLz48cGF0aCBmaWxsPVxcXCIjNDAzOTZlXFxcIiBkPVxcXCJNMzAuMiw3Ni4wOWMtMC4xNy0wLjQ1LTAuNTUtMC43OS0xLjAxLTAuOTJjLTAuNDctMC4xMi0wLjk3LTAuMDEtMS4zNCwwLjI5IGMtMS4xOCwwLjk2LTUuMDYsNC4yNy01LjYyLDYuMzdjLTAuNywyLjU5LDAuOSw1LjI3LDMuNTcsNS45OWMwLjQ0LDAuMTIsMC44OCwwLjE3LDEuMzIsMC4xN2MyLjE5LDAsNC4xOS0xLjQyLDQuNzctMy41N3YtMC4wMSBDMzIuNDUsODIuMzIsMzAuNzQsNzcuNTEsMzAuMiw3Ni4wOXogTTI4Ljk5LDgzLjY0Yy0wLjI3LDAuOTktMS4zNiwxLjU3LTIuNDIsMS4yOGMtMS4wNi0wLjI4LTEuNzEtMS4zMi0xLjQ1LTIuMzIgYzAuMTUtMC41MywxLjQtMS45MywyLjk4LTMuMzljMC41NSwxLjc3LDAuOTIsMy4zOCwwLjkyLDQuMTRDMjkuMDIsODMuNDcsMjkuMDEsODMuNTcsMjguOTksODMuNjR6XFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2wiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2wuanNcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkLmpzXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJpY29uczgtc25vdy01MFwiLFxuICBcInVzZVwiOiBcImljb25zOC1zbm93LTUwLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAxMDAgMTAwXCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgaWQ9XFxcImljb25zOC1zbm93LTUwXFxcIj48cGF0aCBkPVxcXCJNOTEuOTkyLDc2YzAuMjYxLTAuNTI5LDAuNDcxLTEuMDg3LDAuNjI3LTEuNjdjMC42MjMtMi4zMjIsMC4zMDUtNC43NDgtMC44OTYtNi44MjljLTEuNTA3LTIuNjExLTQuMjQtNC4yOTItNy4yMy00LjQ4MiBjLTAuMjYyLTAuMzkzLTAuNTY1LTAuNzU2LTAuODg0LTEuMTAyQzg5Ljc2Niw1OC43Nyw5NCw1Mi4zNzcsOTQsNDVjMC03Ljk5My00Ljk2MS0xNC44NDgtMTEuOTY1LTE3LjY1IEM4MC4wMjMsMjYuNTQ1LDc2LjI3OSwyNy4wNjcsNzQsMjdjLTEuNjE5LTMuNDU5LTIuNDA2LTcuNDY4LTUuMjY0LTkuODdDNjQuMTUzLDEzLjI3Niw1OC4yNjYsMTEsNTIsMTEgYy0xMC4xNzQsMC0xOS4zNDksNi4wMDEtMjMuNTYzLDE1LjAwOEMxOC4yMiwyNi4zMDgsMTAsMzQuNzEyLDEwLDQ1YzAsNC4xNDksMS4zNCw3Ljk4NywzLjYwOCwxMS4xMTIgQzE1LjM3Miw1OC41NDEsMTguMzA2LDU4LjYyMywyMSw2MGMtMC4zMTksMC4zNDYtMS4yMywyLjYyNC0xLjQ5MiwzLjAxOGMtMi45ODksMC4xOS01LjcyNCwxLjg3Mi03LjIzMiw0LjQ4NSBjLTEuMiwyLjA4MS0xLjUxOCw0LjUwNi0wLjg5NSw2LjgyOGMwLjE1NiwwLjU4MiwwLjM2NiwxLjE0MSwwLjYyNywxLjY2OWMtMC4yNjEsMC41MjktMC40NzEsMS4wODctMC42MjcsMS42NyBjLTAuNjIzLDIuMzIyLTAuMzA1LDQuNzQ4LDAuODk2LDYuODI5YzEuNTA3LDIuNjExLDQuMjQsNC4yOTIsNy4yMyw0LjQ4MkMyMS4xMjIsOTEuNDAyLDIzLjg3OCw5MywyNyw5M3M1Ljg3OC0xLjU5OSw3LjQ5My00LjAyIGMyLjk4Ny0wLjE5MSw1LjcyLTEuODcsNy4yMzEtNC40ODNjMS4yLTIuMDgxLDEuNTE4LTQuNTA2LDAuODk1LTYuODI4Yy0wLjE1Ni0wLjU4Mi0wLjM2Ni0xLjE0MS0wLjYyNy0xLjY2OSBjMC4yNjEtMC41MjksMC40NzEtMS4wODcsMC42MjctMS42N2MwLjQxOS0xLjU2MywwLjQwMi0zLjE3MS0wLjAxNC00LjY5MWMwLjYxNywwLjE3NywxLjI1MSwwLjMwMiwxLjkwMiwwLjM0MyBDNDYuMTIzLDcyLjQwMiw0OC44NzgsNzQsNTIsNzRzNS44NzgtMS41OTgsNy40OTItNC4wMTljMC42NTEtMC4wNDIsMS4yODUtMC4xNjYsMS45MDItMC4zNDQgYy0wLjQxNiwxLjUyMS0wLjQzMywzLjEyOS0wLjAxMyw0LjY5M2MwLjE1NiwwLjU4MiwwLjM2NiwxLjE0MSwwLjYyNywxLjY2OWMtMC4yNjEsMC41MjktMC40NzEsMS4wODctMC42MjcsMS42NyBjLTAuNjIzLDIuMzIyLTAuMzA1LDQuNzQ4LDAuODk2LDYuODI5YzEuNTA3LDIuNjExLDQuMjQsNC4yOTIsNy4yMyw0LjQ4MkM3MS4xMjIsOTEuNDAyLDczLjg3OCw5Myw3Nyw5M3M1Ljg3OC0xLjU5OSw3LjQ5My00LjAyIGMyLjk4Ny0wLjE5MSw1LjcyLTEuODcsNy4yMzEtNC40ODNjMS4yLTIuMDgxLDEuNTE4LTQuNTA2LDAuODk1LTYuODI4QzkyLjQ2Myw3Ny4wODcsOTIuMjUzLDc2LjUyOCw5MS45OTIsNzZ6XFxcIiBvcGFjaXR5PVxcXCIuMzVcXFwiIC8+PHBhdGggZmlsbD1cXFwiI2YyZjJmMlxcXCIgZD1cXFwiTTg5Ljk5Miw3NGMwLjI2MS0wLjUyOSwwLjQ3MS0xLjA4NywwLjYyNy0xLjY3YzAuNjIzLTIuMzIyLDAuMzA1LTQuNzQ4LTAuODk2LTYuODI5IGMtMS41MDctMi42MTEtNC4yNC00LjI5Mi03LjIzLTQuNDgyYy0wLjI2Mi0wLjM5My0wLjU2NS0wLjc1Ni0wLjg4NC0xLjEwMkM4Ny43NjYsNTYuNzcsOTIsNTAuMzc3LDkyLDQzIGMwLTEwLjI4OC04LjIyLTE4LjY5Mi0xOC40MzctMTguOTkyQzY5LjM0OSwxNS4wMDEsNjAuMTc0LDksNTAsOXMtMTkuMzQ5LDYuMDAxLTIzLjU2MywxNS4wMDhDMTYuMjIsMjQuMzA4LDgsMzIuNzEyLDgsNDMgYzAsNy4zNzYsNC4yMzQsMTMuNzY5LDEwLjM5MiwxNi45MTZjLTAuMzE5LDAuMzQ2LTAuNjIyLDAuNzA4LTAuODg0LDEuMTAyYy0yLjk4OSwwLjE5LTUuNzI0LDEuODcyLTcuMjMyLDQuNDg1IGMtMS4yLDIuMDgxLTEuNTE4LDQuNTA2LTAuODk1LDYuODI4YzAuMTU2LDAuNTgyLDAuMzY2LDEuMTQxLDAuNjI3LDEuNjY5Yy0wLjI2MSwwLjUyOS0wLjQ3MSwxLjA4Ny0wLjYyNywxLjY3IGMtMC42MjMsMi4zMjItMC4zMDUsNC43NDgsMC44OTYsNi44MjljMS41MDcsMi42MTEsNC4yNCw0LjI5Miw3LjIzLDQuNDgyQzE5LjEyMiw4OS40MDIsMjEuODc4LDkxLDI1LDkxczUuODc4LTEuNTk5LDcuNDkzLTQuMDIgYzIuOTg3LTAuMTkxLDUuNzItMS44Nyw3LjIzMS00LjQ4M2MxLjItMi4wODEsMS41MTgtNC41MDYsMC44OTUtNi44MjhjLTAuMTU2LTAuNTgyLTAuMzY2LTEuMTQxLTAuNjI3LTEuNjY5IGMwLjI2MS0wLjUyOSwwLjQ3MS0xLjA4NywwLjYyNy0xLjY3YzAuNDE5LTEuNTYzLDAuNDAyLTMuMTcxLTAuMDE0LTQuNjkxYzAuNjE3LDAuMTc3LDEuMjUxLDAuMzAyLDEuOTAyLDAuMzQzIEM0NC4xMjMsNzAuNDAyLDQ2Ljg3OCw3Miw1MCw3MnM1Ljg3OC0xLjU5OCw3LjQ5Mi00LjAxOWMwLjY1MS0wLjA0MiwxLjI4NS0wLjE2NiwxLjkwMi0wLjM0NCBjLTAuNDE2LDEuNTIxLTAuNDMzLDMuMTI5LTAuMDEzLDQuNjkzYzAuMTU2LDAuNTgyLDAuMzY2LDEuMTQxLDAuNjI3LDEuNjY5Yy0wLjI2MSwwLjUyOS0wLjQ3MSwxLjA4Ny0wLjYyNywxLjY3IGMtMC42MjMsMi4zMjItMC4zMDUsNC43NDgsMC44OTYsNi44MjljMS41MDcsMi42MTEsNC4yNCw0LjI5Miw3LjIzLDQuNDgyQzY5LjEyMiw4OS40MDIsNzEuODc4LDkxLDc1LDkxczUuODc4LTEuNTk5LDcuNDkzLTQuMDIgYzIuOTg3LTAuMTkxLDUuNzItMS44Nyw3LjIzMS00LjQ4M2MxLjItMi4wODEsMS41MTgtNC41MDYsMC44OTUtNi44MjhDOTAuNDYzLDc1LjA4Nyw5MC4yNTMsNzQuNTI4LDg5Ljk5Miw3NHpcXFwiIC8+PHBhdGggZmlsbD1cXFwiI2Q5ZWVmZlxcXCIgZD1cXFwiTTU3Ljc5NCw1MC41TDU3Ljc5NCw1MC41Yy0wLjU5Mi0xLjAyNS0xLjkwMi0xLjM3Ni0yLjkyNy0wLjc4NGwtMi43MjQsMS41NzN2LTMuMTQ2IEM1Mi4xNDMsNDYuOTU5LDUxLjE4Myw0Niw1MCw0NmgwYy0xLjE4MywwLTIuMTQzLDAuOTU5LTIuMTQzLDIuMTQzdjMuMTQ2bC0yLjcyNC0xLjU3M2MtMS4wMjUtMC41OTItMi4zMzUtMC4yNDEtMi45MjcsMC43ODRsMCwwIGMtMC41OTIsMS4wMjUtMC4yNDEsMi4zMzUsMC43ODQsMi45MjdMNDUuNzE0LDU1bC0yLjcyNCwxLjU3M2MtMS4wMjUsMC41OTItMS4zNzYsMS45MDItMC43ODQsMi45MjdsMCwwIGMwLjU5MiwxLjAyNSwxLjkwMiwxLjM3NiwyLjkyNywwLjc4NGwyLjcyNC0xLjU3M3YzLjE0NkM0Ny44NTcsNjMuMDQxLDQ4LjgxNyw2NCw1MCw2NGgwYzEuMTgzLDAsMi4xNDMtMC45NTksMi4xNDMtMi4xNDN2LTMuMTQ2IGwyLjcyNCwxLjU3M2MxLjAyNSwwLjU5MiwyLjMzNSwwLjI0MSwyLjkyNy0wLjc4NGwwLDBjMC41OTItMS4wMjUsMC4yNDEtMi4zMzUtMC43ODQtMi45MjdMNTQuMjg2LDU1bDIuNzI0LTEuNTczIEM1OC4wMzUsNTIuODM1LDU4LjM4Niw1MS41MjUsNTcuNzk0LDUwLjV6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiM5NGNmZmZcXFwiIGQ9XFxcIk03MywyOWMtMS4zNTksMC0yLjY2MywwLjIyNC0zLjg4OCwwLjYyNEM2Ny4zMTUsMjAuNzEyLDU5LjQ0MiwxNCw1MCwxNCBzLTE3LjMxNSw2LjcxMi0xOS4xMTIsMTUuNjI0QzI5LjY2MywyOS4yMjQsMjguMzU5LDI5LDI3LDI5Yy02LjkwNCwwLTEyLjUsNS41OTYtMTIuNSwxMi41UzIwLjA5Niw1NCwyNyw1NGMwLjE2OSwwLDQ1LjgzMSwwLDQ2LDAgYzYuOTA0LDAsMTIuNS01LjU5NiwxMi41LTEyLjVTNzkuOTA0LDI5LDczLDI5elxcXCIgLz48cGF0aCBmaWxsPVxcXCIjNDAzOTZlXFxcIiBkPVxcXCJNNTAsNjdjLTIuMjA2LDAtNC0xLjc5NC00LTR2LTEuMDcxbC0wLjkyOCwwLjUzNWMtMS45MSwxLjEwNS00LjM2MiwwLjQ0Ni01LjQ2NS0xLjQ2NCBjLTAuNzM4LTEuMjgtMC42ODgtMi44MDMsMC4wMDItNEgyN2MtNy43MiwwLTE0LTYuMjgtMTQtMTRzNi4yOC0xNCwxNC0xNGMwLjkzNywwLDEuODcsMC4wOTUsMi43OSwwLjI4MyBDMzIuMzE1LDIwLjMzOSw0MC41NzQsMTQsNTAsMTRzMTcuNjg1LDYuMzM5LDIwLjIxLDE1LjI4M0M3MS4xMywyOS4wOTUsNzIuMDYzLDI5LDczLDI5YzcuNzIsMCwxNCw2LjI4LDE0LDE0cy02LjI4LDE0LTE0LDE0IEg2MC4zOTJjMC42ODgsMS4xOTcsMC43MzksMi43MiwwLjAwMiwzLjk5OWMtMS4xMDUsMS45MS0zLjU1NCwyLjU2OS01LjQ2NiwxLjQ2NUw1NCw2MS45MjlWNjNDNTQsNjUuMjA2LDUyLjIwNiw2Nyw1MCw2N3ogTTQ3LjUsNTcuODNjMC4yNTksMCwwLjUxOCwwLjA2NywwLjc1LDAuMjAxQzQ4LjcxNCw1OC4yOTksNDksNTguNzk0LDQ5LDU5LjMzVjYzYzAsMC41NTIsMC40NDgsMSwxLDFzMS0wLjQ0OCwxLTF2LTMuNjcgYzAtMC41MzYsMC4yODYtMS4wMzEsMC43NS0xLjI5OWMwLjQ2NS0wLjI2OCwxLjAzNS0wLjI2OCwxLjUsMGwzLjE3OCwxLjgzNWMwLjQ3NywwLjI3NCwxLjA5LDAuMTExLDEuMzY3LTAuMzY2IGMwLjI3NS0wLjQ3OCwwLjExLTEuMDktMC4zNjctMS4zNjZsLTIuMzEyLTEuMzM1Yy0wLjU4OC0wLjM0LTAuODc1LTEuMDMxLTAuNjk5LTEuNjg4QzU0LjU5Myw1NC40NTYsNTUuMTg4LDU0LDU1Ljg2Niw1NEg3MyBjNi4wNjUsMCwxMS00LjkzNSwxMS0xMXMtNC45MzUtMTEtMTEtMTFjLTEuMTU0LDAtMi4zMDYsMC4xODUtMy40MjIsMC41NWMtMC40MDUsMC4xMzQtMC44NTEsMC4wODYtMS4yMjItMC4xMyBjLTAuMzctMC4yMTYtMC42My0wLjU3OS0wLjcxNS0wLjk5OUM2NS45NTYsMjMuMDY0LDU4LjUzNywxNyw1MCwxN3MtMTUuOTU2LDYuMDY0LTE3LjY0MiwxNC40MjEgYy0wLjA4NSwwLjQyLTAuMzQ1LDAuNzgzLTAuNzE1LDAuOTk5Yy0wLjM3MiwwLjIxNy0wLjgxNiwwLjI2NC0xLjIyMiwwLjEzQzI5LjMwNiwzMi4xODUsMjguMTU0LDMyLDI3LDMyYy02LjA2NSwwLTExLDQuOTM1LTExLDExIHM0LjkzNSwxMSwxMSwxMWgxNy4xMzRjMC42NzksMCwxLjI3MywwLjQ1NiwxLjQ0OSwxLjExMWMwLjE3NiwwLjY1Ni0wLjExMSwxLjM0OC0wLjY5OSwxLjY4OGwtMi4zMTIsMS4zMzUgYy0wLjQ3OCwwLjI3Ni0wLjY0MywwLjg4OS0wLjM2NiwxLjM2N2MwLjI3NCwwLjQ3NiwwLjg4OCwwLjY0LDEuMzY2LDAuMzY1bDMuMTc4LTEuODM1QzQ2Ljk4Miw1Ny44OTcsNDcuMjQxLDU3LjgzLDQ3LjUsNTcuODN6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiNkOWVlZmZcXFwiIGQ9XFxcIk0zNC4wOTMsNjguNzVMMzQuMDkzLDY4Ljc1Yy0wLjY5LTEuMTk2LTIuMjE5LTEuNjA1LTMuNDE1LTAuOTE1TDI3LjUsNjkuNjdWNjYgYzAtMS4zODEtMS4xMTktMi41LTIuNS0yLjVoMGMtMS4zODEsMC0yLjUsMS4xMTktMi41LDIuNXYzLjY3bC0zLjE3OC0xLjgzNWMtMS4xOTYtMC42OS0yLjcyNS0wLjI4MS0zLjQxNSwwLjkxNWwwLDAgYy0wLjY5LDEuMTk2LTAuMjgxLDIuNzI1LDAuOTE1LDMuNDE1TDIwLDc0bC0zLjE3OCwxLjgzNWMtMS4xOTYsMC42OS0xLjYwNSwyLjIxOS0wLjkxNSwzLjQxNWwwLDAgYzAuNjksMS4xOTYsMi4yMTksMS42MDUsMy40MTUsMC45MTVMMjIuNSw3OC4zM1Y4MmMwLDEuMzgxLDEuMTE5LDIuNSwyLjUsMi41aDBjMS4zODEsMCwyLjUtMS4xMTksMi41LTIuNXYtMy42N2wzLjE3OCwxLjgzNSBjMS4xOTYsMC42OSwyLjcyNSwwLjI4MSwzLjQxNS0wLjkxNWwwLDBjMC42OS0xLjE5NiwwLjI4MS0yLjcyNS0wLjkxNS0zLjQxNUwzMCw3NGwzLjE3OC0xLjgzNSBDMzQuMzc0LDcxLjQ3NSwzNC43ODQsNjkuOTQ2LDM0LjA5Myw2OC43NXpcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzQwMzk2ZVxcXCIgZD1cXFwiTTI1LDg2Yy0yLjIwNiwwLTQtMS43OTQtNC00di0xLjA3MWwtMC45MjgsMC41MzVjLTEuOTEsMS4xMDQtNC4zNjIsMC40NDYtNS40NjUtMS40NjQgYy0xLjEwMy0xLjkxMS0wLjQ0NS00LjM2MiwxLjQ2NS01LjQ2NEwxNyw3NGwtMC45MjgtMC41MzZjLTEuOTEtMS4xMDItMi41NjctMy41NTMtMS40NjYtNS40NjMgYzEuMTA0LTEuOTExLDMuNTUyLTIuNTcsNS40NjYtMS40NjVMMjEsNjcuMDcxVjY2YzAtMi4yMDYsMS43OTQtNCw0LTRzNCwxLjc5NCw0LDR2MS4wNzFsMC45MjgtMC41MzUgYzAuOTI2LTAuNTM0LDIuMDA0LTAuNjc3LDMuMDM2LTAuMzk5YzEuMDMyLDAuMjc2LDEuODk1LDAuOTM4LDIuNDI5LDEuODY0aDAuMDAxYzEuMTAyLDEuOTEsMC40NDQsNC4zNjEtMS40NjYsNS40NjNMMzMsNzQgbDAuOTI4LDAuNTM2YzEuOTEsMS4xMDIsMi41NjcsMy41NTMsMS40NjYsNS40NjNjLTEuMTA0LDEuOTA5LTMuNTUzLDIuNTY4LTUuNDY2LDEuNDY1TDI5LDgwLjkyOVY4MkMyOSw4NC4yMDYsMjcuMjA2LDg2LDI1LDg2eiBNMjIuNSw3Ni44M2MwLjI1OSwwLDAuNTE4LDAuMDY3LDAuNzUsMC4yMDFDMjMuNzE0LDc3LjI5OSwyNCw3Ny43OTQsMjQsNzguMzNWODJjMCwwLjU1MiwwLjQ0OCwxLDEsMXMxLTAuNDQ4LDEtMXYtMy42NyBjMC0wLjUzNiwwLjI4Ni0xLjAzMSwwLjc1LTEuMjk5YzAuNDY1LTAuMjY4LDEuMDM1LTAuMjY4LDEuNSwwbDMuMTc4LDEuODM1YzAuNDc3LDAuMjc1LDEuMDksMC4xMTEsMS4zNjctMC4zNjYgYzAuMjc1LTAuNDc4LDAuMTEtMS4wOS0wLjM2Ny0xLjM2NmwtMy4xNzgtMS44MzVDMjguNzg2LDc1LjAzMSwyOC41LDc0LjUzNiwyOC41LDc0czAuMjg2LTEuMDMxLDAuNzUtMS4yOTlsMy4xNzgtMS44MzUgYzAuNDc4LTAuMjc1LDAuNjQyLTAuODg5LDAuMzY3LTEuMzY2bDAsMGMtMC4yNzctMC40NzktMC44OTEtMC42NDMtMS4zNjctMC4zNjZsLTMuMTc4LDEuODM1Yy0wLjQ2NSwwLjI2OC0xLjAzNSwwLjI2OC0xLjUsMCBDMjYuMjg2LDcwLjcwMSwyNiw3MC4yMDYsMjYsNjkuNjdWNjZjMC0wLjU1Mi0wLjQ0OC0xLTEtMXMtMSwwLjQ0OC0xLDF2My42N2MwLDAuNTM2LTAuMjg2LDEuMDMxLTAuNzUsMS4yOTkgYy0wLjQ2NSwwLjI2OC0xLjAzNSwwLjI2OC0xLjUsMGwtMy4xNzgtMS44MzVjLTAuMjMzLTAuMTM1LTAuNTA1LTAuMTctMC43NTktMC4xYy0wLjI1OSwwLjA2OS0wLjQ3NCwwLjIzNC0wLjYwNiwwLjQ2NSBjLTAuMTM1LDAuMjMyLTAuMTcsMC41MDItMC4xMDEsMC43NmMwLjA2OCwwLjI1OCwwLjIzNCwwLjQ3NCwwLjQ2NiwwLjYwN2wzLjE3OCwxLjgzNWMwLjQ2NCwwLjI2OCwwLjc1LDAuNzYzLDAuNzUsMS4yOTkgcy0wLjI4NiwxLjAzMS0wLjc1LDEuMjk5bC0zLjE3OCwxLjgzNWMtMC40NzgsMC4yNzYtMC42NDMsMC44ODktMC4zNjYsMS4zNjdjMC4yNzUsMC40NzcsMC44ODksMC42NDEsMS4zNjYsMC4zNjVsMy4xNzgtMS44MzUgQzIxLjk4Miw3Ni44OTcsMjIuMjQxLDc2LjgzLDIyLjUsNzYuODN6XFxcIiAvPjxnPjxwYXRoIGZpbGw9XFxcIiNkOWVlZmZcXFwiIGQ9XFxcIk04NC4wOTMsNjguNzVMODQuMDkzLDY4Ljc1Yy0wLjY5LTEuMTk2LTIuMjE5LTEuNjA1LTMuNDE1LTAuOTE1TDc3LjUsNjkuNjdWNjYgYzAtMS4zODEtMS4xMTktMi41LTIuNS0yLjVsMCwwYy0xLjM4MSwwLTIuNSwxLjExOS0yLjUsMi41djMuNjdsLTMuMTc4LTEuODM1Yy0xLjE5Ni0wLjY5LTIuNzI1LTAuMjgxLTMuNDE1LDAuOTE1djAgYy0wLjY5LDEuMTk2LTAuMjgxLDIuNzI1LDAuOTE1LDMuNDE1TDcwLDc0bC0zLjE3OCwxLjgzNWMtMS4xOTYsMC42OS0xLjYwNSwyLjIxOS0wLjkxNSwzLjQxNXYwIGMwLjY5LDEuMTk2LDIuMjE5LDEuNjA1LDMuNDE1LDAuOTE1TDcyLjUsNzguMzNWODJjMCwxLjM4MSwxLjExOSwyLjUsMi41LDIuNWwwLDBjMS4zODEsMCwyLjUtMS4xMTksMi41LTIuNXYtMy42N2wzLjE3OCwxLjgzNSBjMS4xOTYsMC42OSwyLjcyNSwwLjI4MSwzLjQxNS0wLjkxNXYwYzAuNjktMS4xOTYsMC4yODEtMi43MjUtMC45MTUtMy40MTVMODAsNzRsMy4xNzgtMS44MzUgQzg0LjM3NCw3MS40NzUsODQuNzg0LDY5Ljk0Niw4NC4wOTMsNjguNzV6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiM0MDM5NmVcXFwiIGQ9XFxcIk03NSw4NmMtMi4yMDYsMC00LTEuNzk0LTQtNHYtMS4wNzFsLTAuOTI4LDAuNTM1QzY4LjE2MSw4Mi41NjgsNjUuNzEsODEuOTEsNjQuNjA3LDgwIGMtMS4xMDMtMS45MTEtMC40NDUtNC4zNjIsMS40NjUtNS40NjRMNjcsNzRsLTAuOTI4LTAuNTM2Yy0xLjkxLTEuMTAyLTIuNTY3LTMuNTUzLTEuNDY2LTUuNDYzIGMxLjEwNC0xLjkxMSwzLjU1Mi0yLjU3LDUuNDY2LTEuNDY1TDcxLDY3LjA3MVY2NmMwLTIuMjA2LDEuNzk0LTQsNC00czQsMS43OTQsNCw0djEuMDcxbDAuOTI4LTAuNTM1IGMwLjkyNS0wLjUzNCwyLjAwMy0wLjY3NywzLjAzNi0wLjM5OWMxLjAzMiwwLjI3NiwxLjg5NSwwLjkzOCwyLjQyOSwxLjg2NGgwLjAwMWMxLjEwMiwxLjkxLDAuNDQ0LDQuMzYxLTEuNDY2LDUuNDYzTDgzLDc0IGwwLjkyOCwwLjUzNmMxLjkxLDEuMTAyLDIuNTY3LDMuNTUzLDEuNDY2LDUuNDYzYy0xLjEwNCwxLjkwOS0zLjU1NCwyLjU2OC01LjQ2NiwxLjQ2NUw3OSw4MC45MjlWODJDNzksODQuMjA2LDc3LjIwNiw4Niw3NSw4NnogTTcyLjUsNzYuODNjMC4yNTksMCwwLjUxOCwwLjA2NywwLjc1LDAuMjAxQzczLjcxNCw3Ny4yOTksNzQsNzcuNzk0LDc0LDc4LjMzVjgyYzAsMC41NTIsMC40NDgsMSwxLDFzMS0wLjQ0OCwxLTF2LTMuNjcgYzAtMC41MzYsMC4yODYtMS4wMzEsMC43NS0xLjI5OWMwLjQ2NS0wLjI2OCwxLjAzNS0wLjI2OCwxLjUsMGwzLjE3OCwxLjgzNWMwLjQ3NiwwLjI3NSwxLjA5MSwwLjExMSwxLjM2Ny0wLjM2NiBjMC4yNzUtMC40NzgsMC4xMS0xLjA5LTAuMzY3LTEuMzY2bC0zLjE3OC0xLjgzNUM3OC43ODYsNzUuMDMxLDc4LjUsNzQuNTM2LDc4LjUsNzRzMC4yODYtMS4wMzEsMC43NS0xLjI5OWwzLjE3OC0xLjgzNSBjMC40NzgtMC4yNzUsMC42NDItMC44ODksMC4zNjctMS4zNjZsMCwwYy0wLjI3Ni0wLjQ3OS0wLjg5Mi0wLjY0My0xLjM2Ny0wLjM2NmwtMy4xNzgsMS44MzVjLTAuNDY1LDAuMjY4LTEuMDM1LDAuMjY4LTEuNSwwIEM3Ni4yODYsNzAuNzAxLDc2LDcwLjIwNiw3Niw2OS42N1Y2NmMwLTAuNTUyLTAuNDQ4LTEtMS0xcy0xLDAuNDQ4LTEsMXYzLjY3YzAsMC41MzYtMC4yODYsMS4wMzEtMC43NSwxLjI5OSBjLTAuNDY1LDAuMjY4LTEuMDM1LDAuMjY4LTEuNSwwbC0zLjE3OC0xLjgzNWMtMC4yMzItMC4xMzUtMC41MDUtMC4xNy0wLjc1OS0wLjFjLTAuMjU5LDAuMDY5LTAuNDc0LDAuMjM0LTAuNjA2LDAuNDY1IGMtMC4xMzUsMC4yMzItMC4xNywwLjUwMi0wLjEwMSwwLjc2YzAuMDY4LDAuMjU4LDAuMjM0LDAuNDc0LDAuNDY2LDAuNjA3bDMuMTc4LDEuODM1YzAuNDY0LDAuMjY4LDAuNzUsMC43NjMsMC43NSwxLjI5OSBzLTAuMjg2LDEuMDMxLTAuNzUsMS4yOTlsLTMuMTc4LDEuODM1Yy0wLjQ3OCwwLjI3Ni0wLjY0MywwLjg4OS0wLjM2NiwxLjM2N2MwLjI3NCwwLjQ3NywwLjg4OCwwLjY0MSwxLjM2NiwwLjM2NWwzLjE3OC0xLjgzNSBDNzEuOTgyLDc2Ljg5Nyw3Mi4yNDEsNzYuODMsNzIuNSw3Ni44M3pcXFwiIC8+PC9nPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2wiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2wuanNcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkLmpzXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJpY29uczgtc3Rvcm0tNTBcIixcbiAgXCJ1c2VcIjogXCJpY29uczgtc3Rvcm0tNTAtdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwMCAxMDBcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBpZD1cXFwiaWNvbnM4LXN0b3JtLTUwXFxcIj48cGF0aCBkPVxcXCJNNzUsNjNoLTMuNjhjMC4yMywwLjk3LDAuMjMsMS45NywwLjAxLDIuOTNjMC42Mi0wLjE5LDEuMjUtMC4zLDEuOS0wLjNjMC41NywwLDEuMTMsMC4wNywxLjY4LDAuMjJcXHRjMi4wMiwwLjU0LDMuNjcsMi4wMyw0LjQsMy45OGMyLjg2LDcuNTcsMi4wOSwxMC40NCwxLjg0LDExLjM4QzgwLDg1LjUsNzYuMDYsODguNSw3MS41Niw4OC41Yy0wLjg4LDAtMS43Ni0wLjEyLTIuNjEtMC4zNFxcdGMtMi41NC0wLjY5LTQuNjgtMi4yOC02LjAzLTQuNTFjLTAuOTYtMS41OS0xLjQzLTMuMzctMS40MS01LjE2TDUwLjkyLDkwLjc1QzQ5LjY5LDkyLjE4LDQ3Ljg5LDkzLDQ2LDkzXFx0Yy0xLjA3LDAtMi4xMy0wLjI3LTMuMDgtMC43N2MtMi43LTEuNDYtNC4wMS00LjUzLTMuMTgtNy40OGwwLjYzLTIuMjNjLTEuMDcsMS45Ny0zLjAyLDMuNjktNC45MSw0Ljc0XFx0Yy0xLjQ3LDAuODEtMy4xNSwxLjI0LTQuODMsMS4yNGMtMC44OSwwLTEuNzctMC4xMi0yLjYzLTAuMzRjLTIuNTQtMC42OC00LjY3LTIuMjktNi4wMi00LjUyYy0xLjQtMi4zMS0xLjc4LTUuMDEtMS4wOS03LjZcXHRjMC4yNS0wLjk0LDEuMDItMy44MSw3LjI4LTguOTRjMS4xNi0wLjk1LDIuNjItMS40Nyw0LjEyLTEuNDdjMC41NiwwLDEuMTMsMC4wNywxLjY4LDAuMjJjMS4zOSwwLjM3LDIuNiwxLjIxLDMuNDcsMi4zM1xcdGMwLjAxLTAuMDQsMC4wMi0wLjA4LDAuMDMtMC4xMUwzOS41Miw2M0gyOWMtMTAuNDgsMC0xOS04LjUyLTE5LTE5YzAtMTAuMjksOC4yMi0xOC42OSwxOC40NC0xOC45OUMzMi42NSwxNiw0MS44MywxMCw1MiwxMFxcdHMxOS4zNSw2LDIzLjU2LDE1LjAxQzg1Ljc4LDI1LjMxLDk0LDMzLjcxLDk0LDQ0Qzk0LDU0LjQ4LDg1LjQ4LDYzLDc1LDYzelxcXCIgb3BhY2l0eT1cXFwiLjM1XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiNmMmYyZjJcXFwiIGQ9XFxcIk03Myw2MWgtMy42OGMwLjIzLDAuOTcsMC4yMywxLjk3LDAuMDEsMi45M2MwLjYyLTAuMTksMS4yNS0wLjMsMS45LTAuM2MwLjU3LDAsMS4xMywwLjA3LDEuNjgsMC4yMlxcdGMyLjAyLDAuNTQsMy42NywyLjAzLDQuNCwzLjk4YzIuODYsNy41NywyLjA5LDEwLjQ0LDEuODQsMTEuMzhDNzgsODMuNSw3NC4wNiw4Ni41LDY5LjU2LDg2LjVjLTAuODgsMC0xLjc2LTAuMTItMi42MS0wLjM0XFx0Yy0yLjU0LTAuNjktNC42OC0yLjI4LTYuMDMtNC41MWMtMC45Ni0xLjU5LTEuNDMtMy4zNy0xLjQxLTUuMTZMNDguOTIsODguNzVDNDcuNjksOTAuMTgsNDUuODksOTEsNDQsOTFcXHRjLTEuMDcsMC0yLjEzLTAuMjctMy4wOC0wLjc3Yy0yLjctMS40Ni00LjAxLTQuNTMtMy4xOC03LjQ4bDAuNjMtMi4yM2MtMS4wNywxLjk3LTMuMDIsMy42OS00LjkxLDQuNzRcXHRjLTEuNDcsMC44MS0zLjE1LDEuMjQtNC44MywxLjI0Yy0wLjg5LDAtMS43Ny0wLjEyLTIuNjMtMC4zNGMtMi41NC0wLjY4LTQuNjctMi4yOS02LjAyLTQuNTJjLTEuNC0yLjMxLTEuNzgtNS4wMS0xLjA5LTcuNlxcdGMwLjI1LTAuOTQsMS4wMi0zLjgxLDcuMjgtOC45NGMxLjE2LTAuOTUsMi42Mi0xLjQ3LDQuMTItMS40N2MwLjU2LDAsMS4xMywwLjA3LDEuNjgsMC4yMmMxLjM5LDAuMzcsMi42LDEuMjEsMy40NywyLjMzXFx0YzAuMDEtMC4wNCwwLjAyLTAuMDgsMC4wMy0wLjExTDM3LjUyLDYxSDI3QzE2LjUyLDYxLDgsNTIuNDgsOCw0MmMwLTEwLjI5LDguMjItMTguNjksMTguNDQtMTguOTlDMzAuNjUsMTQsMzkuODMsOCw1MCw4XFx0czE5LjM1LDYsMjMuNTYsMTUuMDFDODMuNzgsMjMuMzEsOTIsMzEuNzEsOTIsNDJDOTIsNTIuNDgsODMuNDgsNjEsNzMsNjF6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiM5NGNmZmZcXFwiIGQ9XFxcIk03MywyOS41Yy0xLjM1OSwwLTIuNjYzLDAuMjI0LTMuODg4LDAuNjI0QzY3LjMxNSwyMS4yMTIsNTkuNDQyLDE0LjUsNTAsMTQuNVxcdHMtMTcuMzE1LDYuNzEyLTE5LjExMiwxNS42MjRDMjkuNjYzLDI5LjcyNCwyOC4zNTksMjkuNSwyNywyOS41Yy02LjkwNCwwLTEyLjUsNS41OTYtMTIuNSwxMi41UzIwLjA5Niw1NC41LDI3LDU0LjVcXHRjMC4xNjksMCw0NS44MzEsMCw0NiwwYzYuOTA0LDAsMTIuNS01LjU5NiwxMi41LTEyLjVTNzkuOTA0LDI5LjUsNzMsMjkuNXpcXFwiIC8+PHBvbHlnb24gZmlsbD1cXFwiI2ZmZTM4NVxcXCIgcG9pbnRzPVxcXCI2Myw2Mi41IDU1LjUsNjIuNSA1OC45MjksNTQuNSA1OC45MjksNTMgNDcuMTU5LDUzIDQ3LjE1OSw1NC41IDQxLjUsNjguNSA0OC41LDY4LjUgNDQsODQuNVxcXCIgLz48cmVjdCB3aWR0aD1cXFwiMTIuNVxcXCIgaGVpZ2h0PVxcXCIzXFxcIiB4PVxcXCI0Ni41XFxcIiB5PVxcXCI1M1xcXCIgZmlsbD1cXFwiIzQwMzk2ZVxcXCIgb3BhY2l0eT1cXFwiLjM1XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiNkOWVlZmZcXFwiIGQ9XFxcIk03Mi44NzMsNzcuNTMyYy0wLjQ4MSwxLjc5NS0yLjM4MywyLjg0NC00LjI1MSwyLjM0M2MtMS44NjgtMC41LTIuOTkxLTIuMzYtMi41MS00LjE1NVxcdGMwLjQ4MS0xLjc5NSw1LjEyMi01LjU5Miw1LjEyMi01LjU5MlM3My4zNTQsNzUuNzM3LDcyLjg3Myw3Ny41MzJ6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiM0MDM5NmVcXFwiIGQ9XFxcIk03Mi42NCw2OS42Yy0wLjE3LTAuNDUtMC41NS0wLjgtMS4wMi0wLjkyYy0wLjQ3LTAuMTMtMC45Ni0wLjAyLTEuMzQsMC4yOVxcdGMtMS4xNywwLjk2LTUuMDYsNC4yNi01LjYyLDYuMzZjLTAuMzQsMS4yNy0wLjE1LDIuNTksMC41NCwzLjczYzAuNjgsMS4xMiwxLjc1LDEuOTIsMy4wMywyLjI2YzAuNDUsMC4xMiwwLjg5LDAuMTgsMS4zMywwLjE4XFx0YzIuMTksMCw0LjE4LTEuNDIsNC43Ni0zLjU4YzAuMDgtMC4yOSwwLjExLTAuNjMsMC4xMS0xLjAxQzc0LjQzLDc0LjU2LDczLjEsNzAuODIsNzIuNjQsNjkuNnogTTcxLjQyLDc3LjE0XFx0Yy0wLjI2LDEtMS4zNCwxLjU3LTIuNDEsMS4yOWMtMC41My0wLjE0LTAuOTctMC40Ny0xLjI0LTAuOTJjLTAuMjYtMC40My0wLjM0LTAuOTMtMC4yMS0xLjRjMC4xNS0wLjUzLDEuNC0xLjk0LDIuOTgtMy4zOVxcdEM3MS4xOCw3NC43Nyw3MS41Niw3Ni42MSw3MS40Miw3Ny4xNHpcXFwiIC8+PHBhdGggZmlsbD1cXFwiI2Q5ZWVmZlxcXCIgZD1cXFwiTTMxLjkyOSw3Ny41MzJjLTAuNDgxLDEuNzk1LTIuMzgzLDIuODQ0LTQuMjUxLDIuMzQzYy0xLjg2OC0wLjUtMi45OTEtMi4zNi0yLjUxLTQuMTU1XFx0czUuMTIyLTUuNTkyLDUuMTIyLTUuNTkyUzMyLjQxLDc1LjczNywzMS45MjksNzcuNTMyelxcXCIgLz48cGF0aCBmaWxsPVxcXCIjNDAzOTZlXFxcIiBkPVxcXCJNMzEuNjkyLDY5LjU5OGMtMC4xNzEtMC40NTItMC41NDktMC43OTQtMS4wMTUtMC45MTljLTAuNDY5LTAuMTI1LTAuOTY1LTAuMDE5LTEuMzM5LDAuMjg4XFx0Yy0xLjE3NiwwLjk2My01LjA1OSw0LjI2Ny01LjYyLDYuMzY1Yy0wLjMzOSwxLjI2Ny0wLjE0NywyLjU5LDAuNTM5LDMuNzI3YzAuNjc2LDEuMTE4LDEuNzUyLDEuOTIzLDMuMDMxLDIuMjY2XFx0YzAuNDQyLDAuMTE4LDAuODkyLDAuMTc3LDEuMzM3LDAuMTc3YzAuODQzLDAsMS42NzMtMC4yMSwyLjQyMi0wLjYyM2MxLjE2My0wLjY0MSwxLjk5MS0xLjY5MSwyLjMzLTIuOTU4XFx0QzMzLjk0LDc1LjgyMSwzMi4yMjksNzEuMDIsMzEuNjkyLDY5LjU5OHogTTMwLjQ3OSw3Ny4xNDRMMzAuNDc5LDc3LjE0NGMtMC4xMjYsMC40NzEtMC40MzgsMC44NjQtMC44OCwxLjEwN1xcdGMtMC40NjIsMC4yNTYtMS4wMDYsMC4zMTYtMS41MzQsMC4xNzVjLTAuNTI3LTAuMTQxLTAuOTY4LTAuNDY3LTEuMjQtMC45MThjLTAuMjYxLTAuNDMyLTAuMzM1LTAuOTI5LTAuMjA4LTEuMzk5XFx0YzAuMTQ1LTAuNTMzLDEuNC0xLjkzOCwyLjk3OC0zLjM5MUMzMC4yMzUsNzQuNzY2LDMwLjYyMSw3Ni42MDksMzAuNDc5LDc3LjE0NHpcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzQwMzk2ZVxcXCIgZD1cXFwiTTQzLjk5OSw4NmMtMC4yNDEsMC0wLjQ4NS0wLjA1OS0wLjcwOS0wLjE3OWMtMC42MTktMC4zMzMtMC45MjQtMS4wNTEtMC43MzQtMS43MjhMNDYuNTIsNzBINDEuNVxcdGMtMC40OTksMC0wLjk2NS0wLjI0OC0xLjI0My0wLjY2MWMtMC4yNzktMC40MTQtMC4zMzQtMC45MzgtMC4xNDctMS40MDFMNDQuOTM1LDU2SDI3Yy03LjcyLDAtMTQtNi4yOC0xNC0xNHM2LjI4LTE0LDE0LTE0XFx0YzAuOTM3LDAsMS44NywwLjA5NSwyLjc5LDAuMjgzQzMyLjMxNSwxOS4zMzksNDAuNTc0LDEzLDUwLDEzczE3LjY4NSw2LjMzOSwyMC4yMSwxNS4yODNDNzEuMTMsMjguMDk1LDcyLjA2MywyOCw3MywyOFxcdGM3LjcyLDAsMTQsNi4yOCwxNCwxNHMtNi4yOCwxNC0xNCwxNEg1OS45MThsLTIuMTQ0LDVINjNjMC41ODcsMCwxLjEyLDAuMzQyLDEuMzY0LDAuODc2YzAuMjQ0LDAuNTMzLDAuMTU0LDEuMTYtMC4yMjksMS42MDRcXHRsLTE5LDIyQzQ0Ljg0Myw4NS44MTksNDQuNDI0LDg2LDQzLjk5OSw4NnogTTQzLjcyNCw2N0g0OC41YzAuNDcsMCwwLjkxMiwwLjIyLDEuMTk1LDAuNTk0YzAuMjg0LDAuMzc1LDAuMzc2LDAuODYsMC4yNDksMS4zMTNcXHRsLTIuNjc3LDkuNTE1TDU5LjcyMyw2NEg1NS41Yy0wLjUwNCwwLTAuOTc1LTAuMjUzLTEuMjUyLTAuNjc0Yy0wLjI3OC0wLjQyMS0wLjMyNS0wLjk1NC0wLjEyNy0xLjQxN2wzLjQyOS04XFx0QzU3Ljc4Niw1My4zNTcsNTguMzI5LDUzLDU4LjkyOSw1M0g3M2M2LjA2NSwwLDExLTQuOTM1LDExLTExcy00LjkzNS0xMS0xMS0xMWMtMS4xNTQsMC0yLjMwNiwwLjE4NS0zLjQyMiwwLjU1XFx0Yy0wLjQwNSwwLjEzNS0wLjg1MSwwLjA4NS0xLjIyMi0wLjEzYy0wLjM3LTAuMjE2LTAuNjMtMC41NzktMC43MTUtMC45OTlDNjUuOTU2LDIyLjA2NCw1OC41MzcsMTYsNTAsMTZcXHRzLTE1Ljk1Niw2LjA2NC0xNy42NDIsMTQuNDIxYy0wLjA4NSwwLjQyLTAuMzQ1LDAuNzgzLTAuNzE1LDAuOTk5Yy0wLjM3MSwwLjIxNy0wLjgxNiwwLjI2NC0xLjIyMiwwLjEzXFx0QzI5LjMwNiwzMS4xODUsMjguMTU0LDMxLDI3LDMxYy02LjA2NSwwLTExLDQuOTM1LTExLDExczQuOTM1LDExLDExLDExaDIwLjE1OGMwLjQ5OSwwLDAuOTY1LDAuMjQ4LDEuMjQzLDAuNjYxXFx0YzAuMjc5LDAuNDE0LDAuMzM0LDAuOTM4LDAuMTQ3LDEuNDAxTDQzLjcyNCw2N3pcXFwiIC8+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbCIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbC5qc1wiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanNcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcImljb25zOC1zdW4tNTBcIixcbiAgXCJ1c2VcIjogXCJpY29uczgtc3VuLTUwLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAxMDAgMTAwXCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgaWQ9XFxcImljb25zOC1zdW4tNTBcXFwiPjxwYXRoIGQ9XFxcIk01Mi4wMTcsOThjLTIuNDAxLDAtNC41OTItMS4yODgtNS43Ni0zLjM3NGwtMy4zMDMtNS41NDVjLTEuMTk2LDAuNzg3LTIuNTk2LDEuMjExLTQuMDM2LDEuMjExIGMtMy40ODcsMC02LjUyOC0yLjQ3Ni03LjIzMS01Ljg4N2wtMC4wMjktMC4xNDZsLTYuMzg2LDIuMDU5Yy0wLjY4NiwwLjIzMi0xLjM5OCwwLjM1MS0yLjEyMSwwLjM1MSBjLTEuNzExLDAtMy4zMzQtMC42NTItNC41NjktMS44MzZjLTEuODE1LTEuNzQyLTIuNDgxLTQuMzE0LTEuNzQxLTYuNzE1bDEuOTc3LTYuMzY5Yy0yLjQ0NC0wLjYwMy0yLjAxOS0zLjY4Ni0yLjgxNi02LjA4OSBjLTAuNzE5LTIuMTY3LTIuNzk4LTMuMjktMS41NS01LjE2M2wtNC41MTQtNS4zNjhjLTIuMTU5LTEuMDIzLTUuNDg4LTAuODEtNS42NDUtMy4yMDRMNC4yNyw1MS41OTZsMC4wMjEtMC4zMjcgYzAuMTU3LTIuMzk0LDEuNTk2LTQuNTE3LDMuNzU0LTUuNTM5bDYuMjgxLTIuOTc3Yy0xLjE0Ni0xLjgzOS0xLjQzOC00LjEyNy0wLjc0NC02LjIyMWMwLjgwNS0yLjQyOCwyLjgyNi00LjI3Miw1LjMwNy00Ljg1NyBsLTIuMDQ2LTYuNTkxYy0wLjc0NC0yLjQxNS0wLjA3Ni00Ljk4OCwxLjczOS02LjcyN2MxLjIzNC0xLjE4MywyLjg1Ny0xLjgzNSw0LjU2OC0xLjgzNWMwLjc2NiwwLDEuNTE5LDAuMTMyLDIuMjM3LDAuMzkxIGw2LjI3NCwyLjI0MWwwLjAyNS0wLjExOWMwLjcwMS0zLjQwOSwzLjc0Mi01Ljg4Niw3LjIzLTUuODg2YzEuNDksMCwyLjkzOCwwLjQ1NCw0LjE1OSwxLjI5M2wzLjExMi01LjkxMyBjMS4xNS0yLjE3OCwzLjM4OC0zLjUyOCw1Ljg0NC0zLjUyOGgwLjI1MWwwLjExNywwLjAxMWM3LjI5LDAsMTAuNTE0LDkuMjM1LDEwLjUxNCw5LjIzNWMxLjE1NC0wLjcxNC0wLjc3NiwxLjUxOSwwLjU5NiwxLjUxOSBjMy40ODQsMCw1Ljk1NywzLjMxOSw4LjM1OCwzLjI2NmwwLjAwNiwwLjAyOGw1LjY4MS0yLjEyN2MwLjc4LTAuMjgsMS41My0wLjQxMSwyLjI5My0wLjQxMWMxLjc2NCwwLDMuNDIyLDAuNjg3LDQuNjY5LDEuOTM1IGMxLjc5NSwxLjc5LDIuNDA1LDQuNDk1LDEuNTUxLDYuODg5bC0yLjIsNi4xNjFsMC41OTYsMC4xMjJjMi41NzIsMC41MzEsNC42ODQsMi40MDksNS41MSw0LjkwMiBjMC43MiwyLjE3MSwwLjM3OSw0LjU1LTAuODc0LDYuNDI0bDUuODU0LDIuNzczYzIuMTU5LDEuMDIxLDMuNTk4LDMuMTQ3LDMuNzUyLDUuNTQ4bDAuMDIxLDAuMzE5bC0wLjAyMSwwLjMyIGMtMC4xNTMsMi4zOTYtMS41ODksNC41Mi0zLjc0Niw1LjU0NWwtNS45ODksMi44MzZjMS4zNiwxLjkwMywxLjc0OSw0LjM3MSwxLjAwNCw2LjYxNmMtMC44MjgsMi40OTItMi45MzksNC4zNjktNS41MTEsNC44OTggbC0wLjUxMSwwLjEwNWwyLjExNyw1LjkyN2MwLjg1MywyLjM5NCwwLjI0Myw1LjA5OC0xLjU1MSw2Ljg5MWMtMS4yNDcsMS4yNDgtMi45MDUsMS45MzUtNC42NjksMS45MzUgYy0wLjczMywwLTEuNDU2LTAuMTIxLTIuMTQ3LTAuMzU5bC01LjgyOC0xLjkyMWwtMC4wMDMsMC4wMThjLTAuNzA2LDMuNDExLTMuNzQ3LDUuODg2LTcuMjMxLDUuODg2IGMtMS4zNSwwLTIuNjY0LTAuMzcyLTMuODA4LTEuMDY1bC0yLjk1Miw1LjIxMmMtMS4xMTMsMi4xNTItMy4yODUsMy41MS01LjcyNCwzLjU2MUw1Mi4xMDIsOThINTIuMDE3elxcXCIgb3BhY2l0eT1cXFwiLjM1XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiNmMmYyZjJcXFwiIGQ9XFxcIk01MC4wMTcsOTZjLTIuNDAxLDAtNC41OTItMS4yODgtNS43Ni0zLjM3NGwtMy4zMDMtNS41NDVjLTEuMTk2LDAuNzg3LTIuNTk2LDEuMjExLTQuMDM2LDEuMjExIGMtMy40ODcsMC02LjUyOC0yLjQ3Ni03LjIzMS01Ljg4N2wtMC4wMjktMC4xNDZsLTYuMzg2LDIuMDU5Yy0wLjY4NiwwLjIzMi0xLjM5OCwwLjM1MS0yLjEyMSwwLjM1MSBjLTEuNzExLDAtMy4zMzQtMC42NTItNC41NjktMS44MzZjLTEuODE1LTEuNzQyLTIuNDgxLTQuMzE0LTEuNzQxLTYuNzE1bDEuOTc3LTYuMzY5Yy0yLjQ0NC0wLjYwMy00LjQzNi0yLjQzNC01LjIzMy00LjgzNyBjLTAuNzE5LTIuMTY3LTAuMzgxLTQuNTQzLDAuODY3LTYuNDE2bC02LjQwNC0zLjAzM2MtMi4xNTktMS4wMjMtMy41OTgtMy4xNDYtMy43NTUtNS41MzlMMi4yNyw0OS41OTZsMC4wMjEtMC4zMjcgYzAuMTU3LTIuMzk0LDEuNTk2LTQuNTE3LDMuNzU0LTUuNTM5bDYuMjgxLTIuOTc3Yy0xLjE0Ni0xLjgzOS0xLjQzOC00LjEyNy0wLjc0NC02LjIyMWMwLjgwNS0yLjQyOCwyLjgyNi00LjI3Miw1LjMwNy00Ljg1NyBsLTIuMDQ2LTYuNTkxYy0wLjc0NC0yLjQxNS0wLjA3Ni00Ljk4OCwxLjczOS02LjcyN2MxLjIzNC0xLjE4MywyLjg1Ny0xLjgzNSw0LjU2OC0xLjgzNWMwLjc2NiwwLDEuNTE5LDAuMTMyLDIuMjM3LDAuMzkxIGw2LjI3NCwyLjI0MWwwLjAyNS0wLjExOWMwLjcwMS0zLjQwOSwzLjc0Mi01Ljg4Niw3LjIzLTUuODg2YzEuNDksMCwyLjkzOCwwLjQ1NCw0LjE1OSwxLjI5M2wzLjExMi01LjkxMyBjMS4xNS0yLjE3OCwzLjM4OC0zLjUyOCw1Ljg0NC0zLjUyOGgwLjI1MWwwLjExNywwLjAxMWMyLjM5NiwwLjEzMiw0LjUwNCwxLjUyNiw1LjU2MiwzLjY4OGwyLjgxNCw1LjU0OCBjMS4xNTQtMC43MTQsMi40ODgtMS4wOTgsMy44Ni0xLjA5OGMzLjQ4NCwwLDYuNTI1LDIuNDc1LDcuMjMsNS44ODNsMC4wMDYsMC4wMjhsNS42ODEtMi4xMjdjMC43OC0wLjI4LDEuNTMtMC40MTEsMi4yOTMtMC40MTEgYzEuNzY0LDAsMy40MjIsMC42ODcsNC42NjksMS45MzVjMS43OTUsMS43OSwyLjQwNSw0LjQ5NSwxLjU1MSw2Ljg4OWwtMi4yLDYuMTYxbDAuNTk2LDAuMTIyYzIuNTcyLDAuNTMxLDQuNjg0LDIuNDA5LDUuNTEsNC45MDIgYzAuNzIsMi4xNzEsMC4zNzksNC41NS0wLjg3NCw2LjQyNGw1Ljg1NCwyLjc3M2MyLjE1OSwxLjAyMSwzLjU5OCwzLjE0NywzLjc1Miw1LjU0OGwwLjAyMSwwLjMxOWwtMC4wMjEsMC4zMiBjLTAuMTUzLDIuMzk2LTEuNTg5LDQuNTItMy43NDYsNS41NDVsLTUuOTg5LDIuODM2YzEuMzYsMS45MDMsMS43NDksNC4zNzEsMS4wMDQsNi42MTZjLTAuODI4LDIuNDkyLTIuOTM5LDQuMzY5LTUuNTExLDQuODk4IGwtMC41MTEsMC4xMDVsMi4xMTcsNS45MjdjMC44NTMsMi4zOTQsMC4yNDMsNS4wOTgtMS41NTEsNi44OTFjLTEuMjQ3LDEuMjQ4LTIuOTA1LDEuOTM1LTQuNjY5LDEuOTM1IGMtMC43MzMsMC0xLjQ1Ni0wLjEyMS0yLjE0Ny0wLjM1OWwtNS44MjgtMS45MjFsLTAuMDAzLDAuMDE4Yy0wLjcwNiwzLjQxMS0zLjc0Nyw1Ljg4Ni03LjIzMSw1Ljg4NiBjLTEuMzUsMC0yLjY2NC0wLjM3Mi0zLjgwOC0xLjA2NWwtMi45NTIsNS4yMTJjLTEuMTEzLDIuMTUyLTMuMjg1LDMuNTEtNS43MjQsMy41NjFMNTAuMTAyLDk2SDUwLjAxN3pcXFwiIC8+PHBhdGggZmlsbD1cXFwiI2Y5Yjg0ZlxcXCIgZD1cXFwiTTUwLjAxNyw4OS41Yy0wLjAzOCwwLTAuMDc0LTAuMDIxLTAuMDkyLTAuMDU1bC02LjQ0MS0xMC44MjFjLTAuMjI5LTAuMzg1LTAuNjE4LTAuNjQ2LTEuMDYtMC43MTUgYy0wLjA3Ny0wLjAxMi0wLjE1My0wLjAxOC0wLjIyOS0wLjAxOGMtMC4zNjUsMC0wLjcyMSwwLjEzMy0wLjk5NywwLjM3OWwtMy43MDksMy4yOTljLTAuMTY2LDAuMTQ3LTAuMzU4LDAuMjIzLTAuNTcsMC4yMjMgYy0wLjM0OCwwLTAuNzY2LTAuMjE5LTAuODY1LTAuNjk4bC0xLjE1Ni01LjYwNWMtMC4wODYtMC40MTgtMC4zNDYtMC43NzgtMC43MTMtMC45OTNjLTAuMjMyLTAuMTM1LTAuNDkzLTAuMjA0LTAuNzU2LTAuMjA0IGMtMC4xNTQsMC0wLjMxLDAuMDIzLTAuNDYsMC4wNzJsLTExLjczOCwzLjc4NGwtMC4xNS0wLjAwN2MtMC4wMjktMC4wMjgtMC4wNC0wLjA2OS0wLjAyNy0wLjEwOWwzLjYwNS0xMS42MTYgYzAuMTI1LTAuNDA0LDAuMDc0LTAuODQzLTAuMTQxLTEuMjA3Yy0wLjIxNi0wLjM2NC0wLjU3NC0wLjYyMS0wLjk4OS0wLjcwNmwtNS4xMjMtMS4wNTdjLTAuNDQ1LTAuMDkyLTAuNjA0LTAuNDM3LTAuNjUxLTAuNTggYy0wLjA0OC0wLjE0NC0wLjEyNy0wLjUxNSwwLjE3Ni0wLjg1NWwzLjc0Ni00LjIxMWMwLjMxMy0wLjM1NCwwLjQ0My0wLjgzMywwLjM0OS0xLjI5NmMtMC4wOTQtMC40NjMtMC40LTAuODU0LTAuODI4LTEuMDU3IEw4Ljg0NCw0OS41OTZsMTIuMTk1LTUuNzc3YzAuNDI3LTAuMjAyLDAuNzMzLTAuNTk0LDAuODI3LTEuMDU3YzAuMDk1LTAuNDYzLTAuMDM1LTAuOTQyLTAuMzQ5LTEuMjk2bC0zLjU4OC00LjAzNSBjLTAuMzAzLTAuMzQtMC4yMjUtMC43MTEtMC4xNzgtMC44NTRjMC4wNDgtMC4xNDUsMC4yMDctMC40ODksMC42NTItMC41ODFsNS4xOTYtMS4wN2MwLjQxNC0wLjA4NSwwLjc3My0wLjM0MiwwLjk4OS0wLjcwNiBjMC4yMTUtMC4zNjQsMC4yNjYtMC44MDMsMC4xNDEtMS4yMDdsLTMuNjgtMTEuODU0Yy0wLjAxMS0wLjAzNi0wLjAwMS0wLjA3OCwwLjAyNi0wLjEwNWwwLjEwNy0wLjAyMmwxMS43MDgsNC4xODEgYzAuMTY0LDAuMDU4LDAuMzM1LDAuMDg3LDAuNTA1LDAuMDg3YzAuMjU1LDAsMC41MDgtMC4wNjQsMC43MzUtMC4xOTJjMC4zNzgtMC4yMTMsMC42NDYtMC41NzksMC43MzMtMS4wMDVsMS4xODctNS43NTIgYzAuMS0wLjQ3OSwwLjUxOC0wLjY5OCwwLjg2NS0wLjY5OGMwLjIxMiwwLDAuNDA0LDAuMDc1LDAuNTcsMC4yMjNsNC4wNjksMy42MmMwLjI3NywwLjI0NiwwLjYzMywwLjM3OSwwLjk5NywwLjM3OSBjMC4wODksMCwwLjE3OS0wLjAwOCwwLjI2OC0wLjAyNGMwLjQ1NC0wLjA4MiwwLjg0NS0wLjM2OSwxLjA2LTAuNzc3bDYuMDYtMTEuNTEzYzAuMDE3LTAuMDMsMC4wNDktMC4wNTIsMC4wODMtMC4wNTYgYzAuMDA0LDAuMDAxLDAuMDA3LDAuMDAxLDAuMDExLDAuMDAxYzAuMDQsMC4wMDEsMC4wNzQsMC4wMjIsMC4wOTEsMC4wNThsNS43MzgsMTEuMzExYzAuMjExLDAuNDE1LDAuNjAyLDAuNzA5LDEuMDU5LDAuNzk1IGMwLjA5MywwLjAxOCwwLjE4NywwLjAyNiwwLjI3OSwwLjAyNmMwLjM2NCwwLDAuNzItMC4xMzMsMC45OTctMC4zNzlsMy44NjgtMy40NGMwLjE2Ni0wLjE0NywwLjM1OC0wLjIyMywwLjU3LTAuMjIzIGMwLjM0OCwwLDAuNzY2LDAuMjE5LDAuODY1LDAuNjk4bDEuMTg1LDUuNzQ2YzAuMDg4LDAuNDMsMC4zNiwwLjc5OSwwLjc0MywxLjAxMWMwLjIyNSwwLjEyNCwwLjQ3NSwwLjE4NywwLjcyNiwwLjE4NyBjMC4xNzgsMCwwLjM1NS0wLjAzMSwwLjUyNi0wLjA5NmwxMS4xNTEtNC4xNzRjMC4xMTUsMC4wNjEsMC4xMjUsMC4xMDMsMC4xMTEsMC4xNGwtNC4xMzUsMTEuNTc2IGMtMC4xNDYsMC40MDktMC4xMDcsMC44NjEsMC4xMDUsMS4yNGMwLjIxMywwLjM3OCwwLjU3OSwwLjY0NiwxLjAwNSwwLjczM2w2LjIyOSwxLjI4NGMwLjQ0NSwwLjA5MiwwLjYwNCwwLjQzOCwwLjY1MiwwLjU4MSBzMC4xMjYsMC41MTUtMC4xNzcsMC44NTRsLTMuNzU0LDQuMjIxYy0wLjMxMywwLjM1NC0wLjQ0MywwLjgzMy0wLjM0OSwxLjI5NmMwLjA5NCwwLjQ2MywwLjQsMC44NTQsMC44MjcsMS4wNTdsMTEuODA0LDUuNTkyIGwtMTEuOTYsNS42NjVjLTAuNDI3LDAuMjAyLTAuNzMzLDAuNTk0LTAuODI3LDEuMDU3Yy0wLjA5NSwwLjQ2MywwLjAzNSwwLjk0MiwwLjM0OSwxLjI5NmwzLjkxLDQuMzk2IGMwLjMwMywwLjM0LDAuMjI1LDAuNzEyLDAuMTc3LDAuODU1cy0wLjIwNywwLjQ4OC0wLjY1MiwwLjU4bC02LjE0NiwxLjI2OGMtMC40MjYsMC4wODctMC43OTIsMC4zNTUtMS4wMDUsMC43MzMgYy0wLjIxMywwLjM3OS0wLjI1MSwwLjgzMS0wLjEwNSwxLjI0bDQuMDUyLDExLjM0NGMwLjAxNCwwLjAzNywwLjAwNSwwLjA3OS0wLjAyNCwwLjEwOGMtMC4wMDEtMC4wMDEtMC4xNDMsMC4wMTMtMC4xNDQsMC4wMTIgbC0xMS4xOTktMy42OTJjLTAuMTUzLTAuMDUtMC4zMTItMC4wNzUtMC40Ny0wLjA3NWMtMC4yNjEsMC0wLjUyMSwwLjA2OC0wLjc1MSwwLjIwMWMtMC4zNywwLjIxNS0wLjYzMiwwLjU3Ny0wLjcxOCwwLjk5NiBsLTEuMTM3LDUuNTE0Yy0wLjEsMC40NzktMC41MTgsMC42OTgtMC44NjUsMC42OThjLTAuMjEyLDAtMC40MDQtMC4wNzQtMC41Ny0wLjIyM2wtMy42MDMtMy4yMDQgYy0wLjI3Ny0wLjI0Ni0wLjYzMy0wLjM3OS0wLjk5Ny0wLjM3OWMtMC4wODIsMC0wLjE2NCwwLjAwNy0wLjI0NSwwLjAyMWMtMC40NDcsMC4wNzQtMC44MzcsMC4zNDYtMS4wNjEsMC43NEw1MC4xNiw4OS4zNDQgYy0wLjAxOCwwLjAzMi0wLjAzNSwwLjA2NS0wLjA1MSwwLjA5OXMtMC4wNDgsMC4wNTUtMC4wODQsMC4wNThINTAuMDE3elxcXCIgLz48cGF0aCBmaWxsPVxcXCIjNDAzOTZlXFxcIiBkPVxcXCJNNTEuMjY5LDEwLjI1NmgwLjAwNUg1MS4yNjkgTTUwLjAxLDEyLjY0N2w0LjUxNyw4LjkwMWMwLjQyMSwwLjgzLDEuMjAzLDEuNDE3LDIuMTE3LDEuNTkgYzAuMTg2LDAuMDM1LDAuMzcyLDAuMDUyLDAuNTU4LDAuMDUyYzAuNzI5LDAsMS40NC0wLjI2NiwxLjk5NC0wLjc1OGwzLjA1Ny0yLjcxOGwwLjk2NSw0LjY4MiBjMC4xNzcsMC44NTgsMC43MjEsMS41OTcsMS40ODgsMi4wMmMwLjQ0OSwwLjI0OCwwLjk0OSwwLjM3NCwxLjQ1MSwwLjM3NGMwLjM1NSwwLDAuNzEyLTAuMDYzLDEuMDUyLTAuMTlsOC4zMTQtMy4xMTMgbC0zLjEyNCw4Ljc0NmMtMC4yOTIsMC44MTgtMC4yMTUsMS43MjIsMC4yMSwyLjQ3OXMxLjE1OSwxLjI5MiwyLjAwOSwxLjQ2OGw1LjE2NiwxLjA2NWwtMy4wMzIsMy40MDkgYy0wLjYyOCwwLjcwNi0wLjg4NywxLjY2Ni0wLjY5OCwyLjU5MmMwLjE4OCwwLjkyNiwwLjgwMiwxLjcwOSwxLjY1NiwyLjExM2w4Ljk0MSw0LjIzNWwtOS4wOTgsNC4zMSBjLTAuODU0LDAuNDA0LTEuNDY3LDEuMTg3LTEuNjU2LDIuMTEzczAuMDcsMS44ODYsMC42OTgsMi41OTJsMy4xODksMy41ODVsLTUuMDgzLDEuMDQ4Yy0wLjg1MSwwLjE3NS0xLjU4MywwLjcxMS0yLjAwOSwxLjQ2OCBjLTAuNDI2LDAuNzU3LTAuNTAyLDEuNjYxLTAuMjEsMi40NzlsMy4wOTEsOC42NTRsLTguNTI1LTIuODFjLTAuMzA2LTAuMTAxLTAuNjIzLTAuMTUxLTAuOTM5LTAuMTUxIGMtMC41MjIsMC0xLjA0MSwwLjEzNi0xLjUwMiwwLjQwM2MtMC43NDEsMC40MjktMS4yNjMsMS4xNTMtMS40MzYsMS45OTFsLTAuOTE3LDQuNDVsLTIuNzkxLTIuNDgyIGMtMC41NTMtMC40OTItMS4yNjQtMC43NTgtMS45OTQtMC43NThjLTAuMTYzLDAtMC4zMjcsMC4wMTMtMC40OTEsMC4wNGMtMC44OTQsMC4xNDgtMS42NzMsMC42OTMtMi4xMiwxLjQ4MWwtNC44NzIsOC42MDMgbC01LjIxMy04Ljc1NGMtMC40NTgtMC43NjktMS4yMzUtMS4yOTMtMi4xMTktMS40M2MtMC4xNTMtMC4wMjQtMC4zMDYtMC4wMzUtMC40NTgtMC4wMzVjLTAuNzMsMC0xLjQ0MSwwLjI2Ni0xLjk5NCwwLjc1OCBsLTIuODk4LDIuNTc3bC0wLjkzNi00LjU0MmMtMC4xNzItMC44MzUtMC42OTEtMS41NTctMS40MjctMS45ODZjLTAuNDY0LTAuMjctMC45ODUtMC40MDgtMS41MTEtMC40MDggYy0wLjMwOSwwLTAuNjIsMC4wNDgtMC45MiwwLjE0NWwtOS4yMjcsMi45NzVsMi44MDktOS4wNTFjMC4yNTEtMC44MDgsMC4xNDktMS42ODUtMC4yODItMi40MTQgYy0wLjQzLTAuNzI5LTEuMTQ5LTEuMjQyLTEuOTc4LTEuNDEzbC00LjA1OS0wLjgzN2wzLjAyNC0zLjRjMC42MjgtMC43MDYsMC44ODYtMS42NjYsMC42OTgtMi41OTJzLTAuODAyLTEuNzA5LTEuNjU2LTIuMTEzIGwtOS40OS00LjQ5NWw5LjMzNC00LjQyMWMwLjg1NC0wLjQwNCwxLjQ2Ny0xLjE4NywxLjY1Ni0yLjExM2MwLjE4OC0wLjkyNi0wLjA3LTEuODg2LTAuNjk4LTIuNTkybC0yLjg2Ny0zLjIyNGw0LjEzMi0wLjg1MiBjMC44MjktMC4xNzEsMS41NDctMC42ODQsMS45NzgtMS40MTNjMC40My0wLjcyOSwwLjUzMy0xLjYwNiwwLjI4Mi0yLjQxNGwtMi44NTEtOS4xODZsOS4wNzcsMy4yNDIgYzAuMzI3LDAuMTE3LDAuNjY5LDAuMTc1LDEuMDA5LDAuMTc1YzAuNTA5LDAsMS4wMTYtMC4xMywxLjQ3LTAuMzg1YzAuNzU3LTAuNDI2LDEuMjkyLTEuMTU5LDEuNDY4LTIuMDA5bDAuOTY3LTQuNjg5IGwzLjI1OSwyLjg5OGMwLjU1NCwwLjQ5MywxLjI2NSwwLjc1OCwxLjk5NCwwLjc1OGMwLjE3OCwwLDAuMzU4LTAuMDE2LDAuNTM2LTAuMDQ4YzAuOTA4LTAuMTY1LDEuNjg5LTAuNzM4LDIuMTE5LTEuNTU0IEw1MC4wMSwxMi42NDcgTTM3LjUyMiwxOC42NTFoMC4wMDVIMzcuNTIyIE02My4wNjQsMTguOTkzaDAuMDA1SDYzLjA2NCBNNzguMzE5LDIyLjQ0aDAuMDA1SDc4LjMxOSBNNTAuMDMzLDguMDAxIGMtMC41OTQsMC0xLjE0MSwwLjMyOS0xLjQxOSwwLjg1N2wtNi4wNTksMTEuNTEzbC00LjA3LTMuNjJjLTAuNDY0LTAuNDEzLTEuMDItMC42MDItMS41NjctMC42MDIgYy0xLjA2MywwLTIuMDksMC43MTUtMi4zMzQsMS44OTZsLTEuMTg2LDUuNzUyTDIxLjY5LDE5LjYxNmMtMC4xNzctMC4wNjMtMC4zNTktMC4wOTMtMC41NC0wLjA5MyBjLTAuNDA3LDAtMC44MDYsMC4xNTUtMS4xMSwwLjQ0NmMtMC40MzgsMC40Mi0wLjYwMSwxLjA1Mi0wLjQyMiwxLjYzM2wzLjY3OSwxMS44NTRsLTUuMTk1LDEuMDcxIGMtMS43ODksMC4zNjktMi41MDgsMi41MzYtMS4yOTQsMy45MDFsMy41ODksNC4wMzVsLTEyLjIxLDUuNzg0Yy0wLjUyNywwLjI1LTAuODY4LDAuNzY5LTAuOTA2LDEuMzQ5IGMwLjAzOCwwLjU3OSwwLjM3OCwxLjA5OCwwLjkwNiwxLjM0OGwxMi4zNjcsNS44NThsLTMuNzQ1LDQuMjExYy0xLjIxNCwxLjM2NS0wLjQ5NSwzLjUzMiwxLjI5NCwzLjkwMWw1LjEyMiwxLjA1NmwtMy42MDYsMTEuNjE5IGMtMC4xOCwwLjU4MS0wLjAxNywxLjIxMywwLjQyMiwxLjYzM2MwLjMwNCwwLjI5MSwwLjcwMywwLjQ0NiwxLjExLDAuNDQ2YzAuMTgxLDAsMC4zNjMtMC4wMzEsMC41NC0wLjA5M2wxMS43MzgtMy43ODQgbDEuMTU2LDUuNjA1YzAuMjQ0LDEuMTgxLDEuMjcxLDEuODk2LDIuMzM0LDEuODk2YzAuNTQ3LDAsMS4xMDQtMC4xODksMS41NjctMC42MDJsMy43MDktMy4yOTlsNi40MDQsMTAuNzUzIEM0OC44NzUsOTAuNjcxLDQ5LjQyMyw5MSw1MC4wMTcsOTFjMC4wMTEsMCwwLjAyMywwLDAuMDMzLDBjMC42MDgtMC4wMTMsMS4xNTYtMC4zNjcsMS40MTYtMC45MTdsNi4wMDItMTAuNTk3bDMuNjAyLDMuMjA0IGMwLjQ2NCwwLjQxMiwxLjAyLDAuNjAyLDEuNTY3LDAuNjAyYzEuMDYzLDAsMi4wOS0wLjcxNSwyLjMzNC0xLjg5NmwxLjEzNy01LjUxM2wxMS4yLDMuNjkyYzAuMTc2LDAuMDYzLDAuMzU5LDAuMDkzLDAuNTQsMC4wOTMgYzAuNDE4LDAsMC44MjgtMC4xNjQsMS4xMzQtMC40N2MwLjQzOC0wLjQzOCwwLjU4NS0xLjA4OSwwLjM3Ny0xLjY3M2wtNC4wNTItMTEuMzQ0bDYuMTQ2LTEuMjY3IGMxLjc4OS0wLjM2OSwyLjUwOC0yLjUzNiwxLjI5NC0zLjkwMWwtMy45MTEtNC4zOTdsMTEuOTc1LTUuNjcyYzAuNTI4LTAuMjUsMC44NjUtMC43NywwLjkwMi0xLjM0OCBjLTAuMDM3LTAuNTc5LTAuMzc0LTEuMDk4LTAuOTAyLTEuMzQ5bC0xMS44MTgtNS41OThsMy43NTQtNC4yMjFjMS4yMTQtMS4zNjUsMC40OTUtMy41MzItMS4yOTQtMy45MDFsLTYuMjMtMS4yODRsNC4xMzUtMTEuNTc3IGMwLjIwOC0wLjU4NCwwLjA2Mi0xLjIzNS0wLjM3Ny0xLjY3M2MtMC4zMDYtMC4zMDYtMC43MTYtMC40Ny0xLjEzNC0wLjQ3Yy0wLjE4MSwwLTAuMzYzLDAuMDMtMC41NCwwLjA5M2wtMTEuMTUyLDQuMTc1IGwtMS4xODUtNS43NDZjLTAuMjQ0LTEuMTgxLTEuMjcxLTEuODk2LTIuMzM0LTEuODk2Yy0wLjU0NywwLTEuMTA0LDAuMTg5LTEuNTY3LDAuNjAybC0zLjg2OCwzLjQ0bC01LjcyLTExLjI3MiBjLTAuMjYtMC41NDktMC44MDgtMC45MDQtMS40MTYtMC45MTdDNTAuMDU2LDguMDAxLDUwLjA0NSw4LjAwMSw1MC4wMzMsOC4wMDFMNTAuMDMzLDguMDAxelxcXCIgLz48Zz48Y2lyY2xlIGN4PVxcXCI1MFxcXCIgY3k9XFxcIjUwXFxcIiByPVxcXCIxOVxcXCIgZmlsbD1cXFwiI2ZmYzU3MVxcXCIgLz48L2c+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbCIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0KGdsb2JhbC5Ccm93c2VyU3ByaXRlID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9O1xuXG5cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcblx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xufVxuXG52YXIgZGVlcG1lcmdlID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiB1bmRlZmluZWQgPT09ICdmdW5jdGlvbicgJiYgdW5kZWZpbmVkLmFtZCkge1xuICAgICAgICB1bmRlZmluZWQoZmFjdG9yeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfVxufShjb21tb25qc0dsb2JhbCwgZnVuY3Rpb24gKCkge1xuXG5mdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWwpIHtcbiAgICB2YXIgbm9uTnVsbE9iamVjdCA9IHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JztcblxuICAgIHJldHVybiBub25OdWxsT2JqZWN0XG4gICAgICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBSZWdFeHBdJ1xuICAgICAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgRGF0ZV0nXG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFyZ2V0KHZhbCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyBbXSA6IHt9XG59XG5cbmZ1bmN0aW9uIGNsb25lSWZOZWNlc3NhcnkodmFsdWUsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBjbG9uZSA9IG9wdGlvbnNBcmd1bWVudCAmJiBvcHRpb25zQXJndW1lbnQuY2xvbmUgPT09IHRydWU7XG4gICAgcmV0dXJuIChjbG9uZSAmJiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkpID8gZGVlcG1lcmdlKGVtcHR5VGFyZ2V0KHZhbHVlKSwgdmFsdWUsIG9wdGlvbnNBcmd1bWVudCkgOiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0QXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0gdGFyZ2V0LnNsaWNlKCk7XG4gICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24oZSwgaSkge1xuICAgICAgICBpZiAodHlwZW9mIGRlc3RpbmF0aW9uW2ldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZGVzdGluYXRpb25baV0gPSBjbG9uZUlmTmVjZXNzYXJ5KGUsIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNNZXJnZWFibGVPYmplY3QoZSkpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gZGVlcG1lcmdlKHRhcmdldFtpXSwgZSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuaW5kZXhPZihlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLnB1c2goY2xvbmVJZk5lY2Vzc2FyeShlLCBvcHRpb25zQXJndW1lbnQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0ge307XG4gICAgaWYgKGlzTWVyZ2VhYmxlT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZUlmTmVjZXNzYXJ5KHRhcmdldFtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCFpc01lcmdlYWJsZU9iamVjdChzb3VyY2Vba2V5XSkgfHwgIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVJZk5lY2Vzc2FyeShzb3VyY2Vba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShzb3VyY2UpO1xuICAgIHZhciBvcHRpb25zID0gb3B0aW9uc0FyZ3VtZW50IHx8IHsgYXJyYXlNZXJnZTogZGVmYXVsdEFycmF5TWVyZ2UgfTtcbiAgICB2YXIgYXJyYXlNZXJnZSA9IG9wdGlvbnMuYXJyYXlNZXJnZSB8fCBkZWZhdWx0QXJyYXlNZXJnZTtcblxuICAgIGlmIChhcnJheSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0YXJnZXQpID8gYXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSA6IGNsb25lSWZOZWNlc3Nhcnkoc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG4gICAgfVxufVxuXG5kZWVwbWVyZ2UuYWxsID0gZnVuY3Rpb24gZGVlcG1lcmdlQWxsKGFycmF5LCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpIHx8IGFycmF5Lmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaXJzdCBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXkgd2l0aCBhdCBsZWFzdCB0d28gZWxlbWVudHMnKVxuICAgIH1cblxuICAgIC8vIHdlIGFyZSBzdXJlIHRoZXJlIGFyZSBhdCBsZWFzdCAyIHZhbHVlcywgc28gaXQgaXMgc2FmZSB0byBoYXZlIG5vIGluaXRpYWwgdmFsdWVcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcbiAgICAgICAgcmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zQXJndW1lbnQpXG4gICAgfSlcbn07XG5cbnJldHVybiBkZWVwbWVyZ2VcblxufSkpO1xufSk7XG5cbi8vICAgICAgXG4vLyBBbiBldmVudCBoYW5kbGVyIGNhbiB0YWtlIGFuIG9wdGlvbmFsIGV2ZW50IGFyZ3VtZW50XG4vLyBhbmQgc2hvdWxkIG5vdCByZXR1cm4gYSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyBBbiBhcnJheSBvZiBhbGwgY3VycmVudGx5IHJlZ2lzdGVyZWQgZXZlbnQgaGFuZGxlcnMgZm9yIGEgdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vIEEgbWFwIG9mIGV2ZW50IHR5cGVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBcblxuLyoqIE1pdHQ6IFRpbnkgKH4yMDBiKSBmdW5jdGlvbmFsIGV2ZW50IGVtaXR0ZXIgLyBwdWJzdWIuXG4gKiAgQG5hbWUgbWl0dFxuICogIEByZXR1cm5zIHtNaXR0fVxuICovXG5mdW5jdGlvbiBtaXR0KGFsbCAgICAgICAgICAgICAgICAgKSB7XG5cdGFsbCA9IGFsbCB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdHJldHVybiB7XG5cdFx0LyoqXG5cdFx0ICogUmVnaXN0ZXIgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gbGlzdGVuIGZvciwgb3IgYFwiKlwiYCBmb3IgYWxsIGV2ZW50c1xuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEZ1bmN0aW9uIHRvIGNhbGwgaW4gcmVzcG9uc2UgdG8gZ2l2ZW4gZXZlbnRcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdG9uOiBmdW5jdGlvbiBvbih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBSZW1vdmUgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gdW5yZWdpc3RlciBgaGFuZGxlcmAgZnJvbSwgb3IgYFwiKlwiYFxuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEhhbmRsZXIgZnVuY3Rpb24gdG8gcmVtb3ZlXG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRvZmY6IGZ1bmN0aW9uIG9mZih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0aWYgKGFsbFt0eXBlXSkge1xuXHRcdFx0XHRhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogSW52b2tlIGFsbCBoYW5kbGVycyBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICogSWYgcHJlc2VudCwgYFwiKlwiYCBoYW5kbGVycyBhcmUgaW52b2tlZCBhZnRlciB0eXBlLW1hdGNoZWQgaGFuZGxlcnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAgVGhlIGV2ZW50IHR5cGUgdG8gaW52b2tlXG5cdFx0ICogQHBhcmFtIHtBbnl9IFtldnRdICBBbnkgdmFsdWUgKG9iamVjdCBpcyByZWNvbW1lbmRlZCBhbmQgcG93ZXJmdWwpLCBwYXNzZWQgdG8gZWFjaCBoYW5kbGVyXG5cdFx0ICogQG1lbWJlcm9mIG1pdHRcblx0XHQgKi9cblx0XHRlbWl0OiBmdW5jdGlvbiBlbWl0KHR5cGUgICAgICAgICwgZXZ0ICAgICApIHtcblx0XHRcdChhbGxbdHlwZV0gfHwgW10pLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyBoYW5kbGVyKGV2dCk7IH0pO1xuXHRcdFx0KGFsbFsnKiddIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgaGFuZGxlcih0eXBlLCBldnQpOyB9KTtcblx0XHR9XG5cdH07XG59XG5cbnZhciBuYW1lc3BhY2VzXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG52YXIgbmFtZXNwYWNlcyA9IHtcbiAgc3ZnOiB7XG4gICAgbmFtZTogJ3htbG5zJyxcbiAgICB1cmk6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgfSxcbiAgeGxpbms6IHtcbiAgICBuYW1lOiAneG1sbnM6eGxpbmsnLFxuICAgIHVyaTogJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnXG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5hbWVzcGFjZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbn0pO1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgb2JqZWN0VG9BdHRyc1N0cmluZyA9IGZ1bmN0aW9uIChhdHRycykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cnMpLm1hcChmdW5jdGlvbiAoYXR0cikge1xuICAgIHZhciB2YWx1ZSA9IGF0dHJzW2F0dHJdLnRvU3RyaW5nKCkucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuICAgIHJldHVybiAoYXR0ciArIFwiPVxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCIpO1xuICB9KS5qb2luKCcgJyk7XG59O1xuXG52YXIgc3ZnID0gbmFtZXNwYWNlc18xLnN2ZztcbnZhciB4bGluayA9IG5hbWVzcGFjZXNfMS54bGluaztcblxudmFyIGRlZmF1bHRBdHRycyA9IHt9O1xuZGVmYXVsdEF0dHJzW3N2Zy5uYW1lXSA9IHN2Zy51cmk7XG5kZWZhdWx0QXR0cnNbeGxpbmsubmFtZV0gPSB4bGluay51cmk7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb250ZW50XVxuICogQHBhcmFtIHtPYmplY3R9IFthdHRyaWJ1dGVzXVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgd3JhcEluU3ZnU3RyaW5nID0gZnVuY3Rpb24gKGNvbnRlbnQsIGF0dHJpYnV0ZXMpIHtcbiAgaWYgKCBjb250ZW50ID09PSB2b2lkIDAgKSBjb250ZW50ID0gJyc7XG5cbiAgdmFyIGF0dHJzID0gZGVlcG1lcmdlKGRlZmF1bHRBdHRycywgYXR0cmlidXRlcyB8fCB7fSk7XG4gIHZhciBhdHRyc1JlbmRlcmVkID0gb2JqZWN0VG9BdHRyc1N0cmluZyhhdHRycyk7XG4gIHJldHVybiAoXCI8c3ZnIFwiICsgYXR0cnNSZW5kZXJlZCArIFwiPlwiICsgY29udGVudCArIFwiPC9zdmc+XCIpO1xufTtcblxudmFyIHN2ZyQxID0gbmFtZXNwYWNlc18xLnN2ZztcbnZhciB4bGluayQxID0gbmFtZXNwYWNlc18xLnhsaW5rO1xuXG52YXIgZGVmYXVsdENvbmZpZyA9IHtcbiAgYXR0cnM6ICggb2JqID0ge1xuICAgIHN0eWxlOiBbJ3Bvc2l0aW9uOiBhYnNvbHV0ZScsICd3aWR0aDogMCcsICdoZWlnaHQ6IDAnXS5qb2luKCc7ICcpLFxuICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICB9LCBvYmpbc3ZnJDEubmFtZV0gPSBzdmckMS51cmksIG9ialt4bGluayQxLm5hbWVdID0geGxpbmskMS51cmksIG9iaiApXG59O1xudmFyIG9iajtcblxudmFyIFNwcml0ZSA9IGZ1bmN0aW9uIFNwcml0ZShjb25maWcpIHtcbiAgdGhpcy5jb25maWcgPSBkZWVwbWVyZ2UoZGVmYXVsdENvbmZpZywgY29uZmlnIHx8IHt9KTtcbiAgdGhpcy5zeW1ib2xzID0gW107XG59O1xuXG4vKipcbiAqIEFkZCBuZXcgc3ltYm9sLiBJZiBzeW1ib2wgd2l0aCB0aGUgc2FtZSBpZCBleGlzdHMgaXQgd2lsbCBiZSByZXBsYWNlZC5cbiAqIEBwYXJhbSB7U3ByaXRlU3ltYm9sfSBzeW1ib2xcbiAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCAtIHN5bWJvbCB3YXMgYWRkZWQsIGBmYWxzZWAgLSByZXBsYWNlZFxuICovXG5TcHJpdGUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZCAoc3ltYm9sKSB7XG4gIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBzeW1ib2xzID0gcmVmLnN5bWJvbHM7XG4gIHZhciBleGlzdGluZyA9IHRoaXMuZmluZChzeW1ib2wuaWQpO1xuXG4gIGlmIChleGlzdGluZykge1xuICAgIHN5bWJvbHNbc3ltYm9scy5pbmRleE9mKGV4aXN0aW5nKV0gPSBzeW1ib2w7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3ltYm9scy5wdXNoKHN5bWJvbCk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3ltYm9sICYgZGVzdHJveSBpdFxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgLSBzeW1ib2wgd2FzIGZvdW5kICYgc3VjY2Vzc2Z1bGx5IGRlc3Ryb3llZCwgYGZhbHNlYCAtIG90aGVyd2lzZVxuICovXG5TcHJpdGUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSAoaWQpIHtcbiAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIHN5bWJvbHMgPSByZWYuc3ltYm9scztcbiAgdmFyIHN5bWJvbCA9IHRoaXMuZmluZChpZCk7XG5cbiAgaWYgKHN5bWJvbCkge1xuICAgIHN5bWJvbHMuc3BsaWNlKHN5bWJvbHMuaW5kZXhPZihzeW1ib2wpLCAxKTtcbiAgICBzeW1ib2wuZGVzdHJveSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge1Nwcml0ZVN5bWJvbHxudWxsfVxuICovXG5TcHJpdGUucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiBmaW5kIChpZCkge1xuICByZXR1cm4gdGhpcy5zeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAocykgeyByZXR1cm4gcy5pZCA9PT0gaWQ7IH0pWzBdIHx8IG51bGw7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXMgKGlkKSB7XG4gIHJldHVybiB0aGlzLmZpbmQoaWQpICE9PSBudWxsO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZS5wcm90b3R5cGUuc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5ICgpIHtcbiAgdmFyIHJlZiA9IHRoaXMuY29uZmlnO1xuICAgIHZhciBhdHRycyA9IHJlZi5hdHRycztcbiAgdmFyIHN0cmluZ2lmaWVkU3ltYm9scyA9IHRoaXMuc3ltYm9scy5tYXAoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuc3RyaW5naWZ5KCk7IH0pLmpvaW4oJycpO1xuICByZXR1cm4gd3JhcEluU3ZnU3RyaW5nKHN0cmluZ2lmaWVkU3ltYm9scywgYXR0cnMpO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpO1xufTtcblxuU3ByaXRlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIHRoaXMuc3ltYm9scy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmRlc3Ryb3koKTsgfSk7XG59O1xuXG52YXIgU3ByaXRlU3ltYm9sID0gZnVuY3Rpb24gU3ByaXRlU3ltYm9sKHJlZikge1xuICB2YXIgaWQgPSByZWYuaWQ7XG4gIHZhciB2aWV3Qm94ID0gcmVmLnZpZXdCb3g7XG4gIHZhciBjb250ZW50ID0gcmVmLmNvbnRlbnQ7XG5cbiAgdGhpcy5pZCA9IGlkO1xuICB0aGlzLnZpZXdCb3ggPSB2aWV3Qm94O1xuICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUuc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5ICgpIHtcbiAgcmV0dXJuIHRoaXMuY29udGVudDtcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5TcHJpdGVTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICByZXR1cm4gdGhpcy5zdHJpbmdpZnkoKTtcbn07XG5cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIFsnaWQnLCAndmlld0JveCcsICdjb250ZW50J10uZm9yRWFjaChmdW5jdGlvbiAocHJvcCkgeyByZXR1cm4gZGVsZXRlIHRoaXMkMVtwcm9wXTsgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG52YXIgcGFyc2UgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICB2YXIgaGFzSW1wb3J0Tm9kZSA9ICEhZG9jdW1lbnQuaW1wb3J0Tm9kZTtcbiAgdmFyIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoY29udGVudCwgJ2ltYWdlL3N2Zyt4bWwnKS5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIEZpeCBmb3IgYnJvd3NlciB3aGljaCBhcmUgdGhyb3dpbmcgV3JvbmdEb2N1bWVudEVycm9yXG4gICAqIGlmIHlvdSBpbnNlcnQgYW4gZWxlbWVudCB3aGljaCBpcyBub3QgcGFydCBvZiB0aGUgZG9jdW1lbnRcbiAgICogQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83OTg2NTE5LzQ2MjQ0MDNcbiAgICovXG4gIGlmIChoYXNJbXBvcnROb2RlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmltcG9ydE5vZGUoZG9jLCB0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBkb2M7XG59O1xuXG52YXIgQnJvd3NlclNwcml0ZVN5bWJvbCA9IChmdW5jdGlvbiAoU3ByaXRlU3ltYm9sJCQxKSB7XG4gIGZ1bmN0aW9uIEJyb3dzZXJTcHJpdGVTeW1ib2wgKCkge1xuICAgIFNwcml0ZVN5bWJvbCQkMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgaWYgKCBTcHJpdGVTeW1ib2wkJDEgKSBCcm93c2VyU3ByaXRlU3ltYm9sLl9fcHJvdG9fXyA9IFNwcml0ZVN5bWJvbCQkMTtcbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTcHJpdGVTeW1ib2wkJDEgJiYgU3ByaXRlU3ltYm9sJCQxLnByb3RvdHlwZSApO1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJyb3dzZXJTcHJpdGVTeW1ib2w7XG5cbiAgdmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgaXNNb3VudGVkOiB7fSB9O1xuXG4gIHByb3RvdHlwZUFjY2Vzc29ycy5pc01vdW50ZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXRoaXMubm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBub2RlXG4gICAqIEByZXR1cm4ge0Jyb3dzZXJTcHJpdGVTeW1ib2x9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLmNyZWF0ZUZyb21FeGlzdGluZ05vZGUgPSBmdW5jdGlvbiBjcmVhdGVGcm9tRXhpc3RpbmdOb2RlIChub2RlKSB7XG4gICAgcmV0dXJuIG5ldyBCcm93c2VyU3ByaXRlU3ltYm9sKHtcbiAgICAgIGlkOiBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSxcbiAgICAgIHZpZXdCb3g6IG5vZGUuZ2V0QXR0cmlidXRlKCd2aWV3Qm94JyksXG4gICAgICBjb250ZW50OiBub2RlLm91dGVySFRNTFxuICAgIH0pO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHRoaXMudW5tb3VudCgpO1xuICAgIH1cbiAgICBTcHJpdGVTeW1ib2wkJDEucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fHN0cmluZ30gdGFyZ2V0XG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uIG1vdW50ICh0YXJnZXQpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgdmFyIG1vdW50VGFyZ2V0ID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG5cbiAgICBtb3VudFRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuc3RyaW5naWZ5KCk7XG4gICAgcmV0dXJuIHBhcnNlKHdyYXBJblN2Z1N0cmluZyhjb250ZW50KSkuY2hpbGROb2Rlc1swXTtcbiAgfTtcblxuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS51bm1vdW50ID0gZnVuY3Rpb24gdW5tb3VudCAoKSB7XG4gICAgdGhpcy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyggQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG4gIHJldHVybiBCcm93c2VyU3ByaXRlU3ltYm9sO1xufShTcHJpdGVTeW1ib2wpKTtcblxudmFyIGRlZmF1bHRDb25maWckMSA9IHtcbiAgLyoqXG4gICAqIFNob3VsZCBmb2xsb3dpbmcgb3B0aW9ucyBiZSBhdXRvbWF0aWNhbGx5IGNvbmZpZ3VyZWQ6XG4gICAqIC0gYHN5bmNVcmxzV2l0aEJhc2VUYWdgXG4gICAqIC0gYGxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXJgXG4gICAqIC0gYG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sYFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGF1dG9Db25maWd1cmU6IHRydWUsXG5cbiAgLyoqXG4gICAqIERlZmF1bHQgbW91bnRpbmcgc2VsZWN0b3JcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIG1vdW50VG86ICdib2R5JyxcblxuICAvKipcbiAgICogRml4IGRpc2FwcGVhcmluZyBTVkcgZWxlbWVudHMgd2hlbiA8YmFzZSBocmVmPiBleGlzdHMuXG4gICAqIEV4ZWN1dGVzIHdoZW4gc3ByaXRlIG1vdW50ZWQuXG4gICAqIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTgyNjUzMzYvNzk2MTUyXG4gICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2V2ZXJkaW1lbnNpb24vYW5ndWxhci1zdmctYmFzZS1maXhcbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2lzc3Vlcy84OTM0I2lzc3VlY29tbWVudC01NjU2ODQ2NlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHN5bmNVcmxzV2l0aEJhc2VUYWc6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBTaG91bGQgc3ByaXRlIGxpc3RlbiBjdXN0b20gbG9jYXRpb24gY2hhbmdlIGV2ZW50XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgbGlzdGVuTG9jYXRpb25DaGFuZ2VFdmVudDogdHJ1ZSxcblxuICAvKipcbiAgICogQ3VzdG9tIHdpbmRvdyBldmVudCBuYW1lIHdoaWNoIHNob3VsZCBiZSBlbWl0dGVkIHRvIHVwZGF0ZSBzcHJpdGUgdXJsc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgbG9jYXRpb25DaGFuZ2VFdmVudDogJ2xvY2F0aW9uQ2hhbmdlJyxcblxuICAvKipcbiAgICogRW1pdCBsb2NhdGlvbiBjaGFuZ2UgZXZlbnQgaW4gQW5ndWxhciBhdXRvbWF0aWNhbGx5XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlcjogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFNlbGVjdG9yIHRvIGZpbmQgc3ltYm9scyB1c2FnZXMgd2hlbiB1cGRhdGluZyBzcHJpdGUgdXJsc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdXNhZ2VzVG9VcGRhdGU6ICd1c2VbKnxocmVmXScsXG5cbiAgLyoqXG4gICAqIEZpeCBGaXJlZm94IGJ1ZyB3aGVuIGdyYWRpZW50cyBhbmQgcGF0dGVybnMgZG9uJ3Qgd29yayBpZiB0aGV5IGFyZSB3aXRoaW4gYSBzeW1ib2wuXG4gICAqIEV4ZWN1dGVzIHdoZW4gc3ByaXRlIGlzIHJlbmRlcmVkLCBidXQgbm90IG1vdW50ZWQuXG4gICAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MzA2Njc0XG4gICAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MzUzNTc1XG4gICAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTIzNTM2NFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sOiBmYWxzZVxufTtcblxuLyoqXG4gKiBAcGFyYW0geyp9IGFycmF5TGlrZVxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbnZhciBhcnJheUZyb20gPSBmdW5jdGlvbiAoYXJyYXlMaWtlKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheUxpa2UsIDApO1xufTtcblxudmFyIGJyb3dzZXIgPSB7XG4gIGlzQ2hyb21lOiBmdW5jdGlvbiAoKSB7IHJldHVybiAvY2hyb21lL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTsgfSxcbiAgaXNGaXJlZm94OiBmdW5jdGlvbiAoKSB7IHJldHVybiAvZmlyZWZveC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7IH0sXG5cbiAgLy8gaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzNzUwMyh2PXZzLjg1KS5hc3B4XG4gIGlzSUU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIC9tc2llL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSB8fCAvdHJpZGVudC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7IH0sXG4gIGlzRWRnZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gL2VkZ2UvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0geyp9IGRhdGFcbiAqL1xudmFyIGRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAobmFtZSwgZGF0YSkge1xuICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KG5hbWUsIGZhbHNlLCBmYWxzZSwgZGF0YSk7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn07XG5cbi8qKlxuICogSUUgZG9lc24ndCBldmFsdWF0ZSA8c3R5bGU+IHRhZ3MgaW4gU1ZHcyB0aGF0IGFyZSBkeW5hbWljYWxseSBhZGRlZCB0byB0aGUgcGFnZS5cbiAqIFRoaXMgdHJpY2sgd2lsbCB0cmlnZ2VyIElFIHRvIHJlYWQgYW5kIHVzZSBhbnkgZXhpc3RpbmcgU1ZHIDxzdHlsZT4gdGFncy5cbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ljb25pYy9TVkdJbmplY3Rvci9pc3N1ZXMvMjNcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTA4OTg0NjkvXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBub2RlIERPTSBFbGVtZW50IHRvIHNlYXJjaCA8c3R5bGU+IHRhZ3MgaW5cbiAqIEByZXR1cm4ge0FycmF5PEhUTUxTdHlsZUVsZW1lbnQ+fVxuICovXG52YXIgZXZhbFN0eWxlc0lFV29ya2Fyb3VuZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciB1cGRhdGVkTm9kZXMgPSBbXTtcblxuICBhcnJheUZyb20obm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdzdHlsZScpKVxuICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChzdHlsZSkge1xuICAgICAgc3R5bGUudGV4dENvbnRlbnQgKz0gJyc7XG4gICAgICB1cGRhdGVkTm9kZXMucHVzaChzdHlsZSk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIHVwZGF0ZWROb2Rlcztcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFt1cmxdIElmIG5vdCBwcm92aWRlZCAtIGN1cnJlbnQgVVJMIHdpbGwgYmUgdXNlZFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgZ2V0VXJsV2l0aG91dEZyYWdtZW50ID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gKHVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZikuc3BsaXQoJyMnKVswXTtcbn07XG5cbi8qIGdsb2JhbCBhbmd1bGFyICovXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAqL1xudmFyIGxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXIgPSBmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gIGFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyRyb290U2NvcGUnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSkge1xuICAgICRyb290U2NvcGUuJG9uKCckbG9jYXRpb25DaGFuZ2VTdWNjZXNzJywgZnVuY3Rpb24gKGUsIG5ld1VybCwgb2xkVXJsKSB7XG4gICAgICBkaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgeyBvbGRVcmw6IG9sZFVybCwgbmV3VXJsOiBuZXdVcmwgfSk7XG4gICAgfSk7XG4gIH1dKTtcbn07XG5cbnZhciBkZWZhdWx0U2VsZWN0b3IgPSAnbGluZWFyR3JhZGllbnQsIHJhZGlhbEdyYWRpZW50LCBwYXR0ZXJuLCBtYXNrLCBjbGlwUGF0aCc7XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBzdmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3JdXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG52YXIgbW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2wgPSBmdW5jdGlvbiAoc3ZnLCBzZWxlY3Rvcikge1xuICBpZiAoIHNlbGVjdG9yID09PSB2b2lkIDAgKSBzZWxlY3RvciA9IGRlZmF1bHRTZWxlY3RvcjtcblxuICBhcnJheUZyb20oc3ZnLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N5bWJvbCcpKS5mb3JFYWNoKGZ1bmN0aW9uIChzeW1ib2wpIHtcbiAgICBhcnJheUZyb20oc3ltYm9sLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBzeW1ib2wucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgc3ltYm9sKTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBzdmc7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZUxpc3R9IG5vZGVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbbWF0Y2hlcl1cbiAqIEByZXR1cm4ge0F0dHJbXX1cbiAqL1xuZnVuY3Rpb24gc2VsZWN0QXR0cmlidXRlcyhub2RlcywgbWF0Y2hlcikge1xuICB2YXIgYXR0cnMgPSBhcnJheUZyb20obm9kZXMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBub2RlKSB7XG4gICAgaWYgKCFub2RlLmF0dHJpYnV0ZXMpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuXG4gICAgdmFyIGFycmF5ZmllZCA9IGFycmF5RnJvbShub2RlLmF0dHJpYnV0ZXMpO1xuICAgIHZhciBtYXRjaGVkID0gbWF0Y2hlciA/IGFycmF5ZmllZC5maWx0ZXIobWF0Y2hlcikgOiBhcnJheWZpZWQ7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQobWF0Y2hlZCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gYXR0cnM7XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlTGlzdHxOb2RlfSBub2Rlc1xuICogQHBhcmFtIHtib29sZWFufSBbY2xvbmU9dHJ1ZV1cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG52YXIgeExpbmtOUyA9IG5hbWVzcGFjZXNfMS54bGluay51cmk7XG52YXIgeExpbmtBdHRyTmFtZSA9ICd4bGluazpocmVmJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG52YXIgc3BlY2lhbFVybENoYXJzUGF0dGVybiA9IC9be318XFxcXFxcXlxcW1xcXWBcIjw+XS9nO1xuXG5mdW5jdGlvbiBlbmNvZGVyKHVybCkge1xuICByZXR1cm4gdXJsLnJlcGxhY2Uoc3BlY2lhbFVybENoYXJzUGF0dGVybiwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIChcIiVcIiArIChtYXRjaFswXS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csIFwiXFxcXCQmXCIpOyAvLyAkJiBtZWFucyB0aGUgd2hvbGUgbWF0Y2hlZCBzdHJpbmdcbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGVMaXN0fSBub2Rlc1xuICogQHBhcmFtIHtzdHJpbmd9IHN0YXJ0c1dpdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXBsYWNlV2l0aFxuICogQHJldHVybiB7Tm9kZUxpc3R9XG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVJlZmVyZW5jZXMobm9kZXMsIHN0YXJ0c1dpdGgsIHJlcGxhY2VXaXRoKSB7XG4gIGFycmF5RnJvbShub2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciBocmVmID0gbm9kZS5nZXRBdHRyaWJ1dGUoeExpbmtBdHRyTmFtZSk7XG4gICAgaWYgKGhyZWYgJiYgaHJlZi5pbmRleE9mKHN0YXJ0c1dpdGgpID09PSAwKSB7XG4gICAgICB2YXIgbmV3VXJsID0gaHJlZi5yZXBsYWNlKHN0YXJ0c1dpdGgsIHJlcGxhY2VXaXRoKTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMoeExpbmtOUywgeExpbmtBdHRyTmFtZSwgbmV3VXJsKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBub2Rlcztcbn1cblxuLyoqXG4gKiBMaXN0IG9mIFNWRyBhdHRyaWJ1dGVzIHRvIHVwZGF0ZSB1cmwoKSB0YXJnZXQgaW4gdGhlbVxuICovXG52YXIgYXR0TGlzdCA9IFtcbiAgJ2NsaXBQYXRoJyxcbiAgJ2NvbG9yUHJvZmlsZScsXG4gICdzcmMnLFxuICAnY3Vyc29yJyxcbiAgJ2ZpbGwnLFxuICAnZmlsdGVyJyxcbiAgJ21hcmtlcicsXG4gICdtYXJrZXJTdGFydCcsXG4gICdtYXJrZXJNaWQnLFxuICAnbWFya2VyRW5kJyxcbiAgJ21hc2snLFxuICAnc3Ryb2tlJyxcbiAgJ3N0eWxlJ1xuXTtcblxudmFyIGF0dFNlbGVjdG9yID0gYXR0TGlzdC5tYXAoZnVuY3Rpb24gKGF0dHIpIHsgcmV0dXJuIChcIltcIiArIGF0dHIgKyBcIl1cIik7IH0pLmpvaW4oJywnKTtcblxuLyoqXG4gKiBVcGRhdGUgVVJMcyBpbiBzdmcgaW1hZ2UgKGxpa2UgYGZpbGw9XCJ1cmwoLi4uKVwiYCkgYW5kIHVwZGF0ZSByZWZlcmVuY2luZyBlbGVtZW50c1xuICogQHBhcmFtIHtFbGVtZW50fSBzdmdcbiAqIEBwYXJhbSB7Tm9kZUxpc3R9IHJlZmVyZW5jZXNcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gc3RhcnRzV2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VXaXRoXG4gKiBAcmV0dXJuIHt2b2lkfVxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBzcHJpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdmcuc3ByaXRlJyk7XG4gKiBjb25zdCB1c2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1c2UnKTtcbiAqIHVwZGF0ZVVybHMoc3ByaXRlLCB1c2FnZXMsICcjJywgJ3ByZWZpeCMnKTtcbiAqL1xudmFyIHVwZGF0ZVVybHMgPSBmdW5jdGlvbiAoc3ZnLCByZWZlcmVuY2VzLCBzdGFydHNXaXRoLCByZXBsYWNlV2l0aCkge1xuICB2YXIgc3RhcnRzV2l0aEVuY29kZWQgPSBlbmNvZGVyKHN0YXJ0c1dpdGgpO1xuICB2YXIgcmVwbGFjZVdpdGhFbmNvZGVkID0gZW5jb2RlcihyZXBsYWNlV2l0aCk7XG5cbiAgdmFyIG5vZGVzID0gc3ZnLnF1ZXJ5U2VsZWN0b3JBbGwoYXR0U2VsZWN0b3IpO1xuICB2YXIgYXR0cnMgPSBzZWxlY3RBdHRyaWJ1dGVzKG5vZGVzLCBmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGxvY2FsTmFtZSA9IHJlZi5sb2NhbE5hbWU7XG4gICAgdmFyIHZhbHVlID0gcmVmLnZhbHVlO1xuXG4gICAgcmV0dXJuIGF0dExpc3QuaW5kZXhPZihsb2NhbE5hbWUpICE9PSAtMSAmJiB2YWx1ZS5pbmRleE9mKChcInVybChcIiArIHN0YXJ0c1dpdGhFbmNvZGVkKSkgIT09IC0xO1xuICB9KTtcblxuICBhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7IHJldHVybiBhdHRyLnZhbHVlID0gYXR0ci52YWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKHN0YXJ0c1dpdGhFbmNvZGVkKSwgJ2cnKSwgcmVwbGFjZVdpdGhFbmNvZGVkKTsgfSk7XG4gIHVwZGF0ZVJlZmVyZW5jZXMocmVmZXJlbmNlcywgc3RhcnRzV2l0aEVuY29kZWQsIHJlcGxhY2VXaXRoRW5jb2RlZCk7XG59O1xuXG4vKipcbiAqIEludGVybmFsIGVtaXR0ZXIgZXZlbnRzXG4gKiBAZW51bVxuICogQHByaXZhdGVcbiAqL1xudmFyIEV2ZW50cyA9IHtcbiAgTU9VTlQ6ICdtb3VudCcsXG4gIFNZTUJPTF9NT1VOVDogJ3N5bWJvbF9tb3VudCdcbn07XG5cbnZhciBCcm93c2VyU3ByaXRlID0gKGZ1bmN0aW9uIChTcHJpdGUkJDEpIHtcbiAgZnVuY3Rpb24gQnJvd3NlclNwcml0ZShjZmcpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcbiAgICBpZiAoIGNmZyA9PT0gdm9pZCAwICkgY2ZnID0ge307XG5cbiAgICBTcHJpdGUkJDEuY2FsbCh0aGlzLCBkZWVwbWVyZ2UoZGVmYXVsdENvbmZpZyQxLCBjZmcpKTtcblxuICAgIHZhciBlbWl0dGVyID0gbWl0dCgpO1xuICAgIHRoaXMuX2VtaXR0ZXIgPSBlbWl0dGVyO1xuICAgIHRoaXMubm9kZSA9IG51bGw7XG5cbiAgICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgY29uZmlnID0gcmVmLmNvbmZpZztcblxuICAgIGlmIChjb25maWcuYXV0b0NvbmZpZ3VyZSkge1xuICAgICAgdGhpcy5fYXV0b0NvbmZpZ3VyZShjZmcpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuc3luY1VybHNXaXRoQmFzZVRhZykge1xuICAgICAgdmFyIGJhc2VVcmwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpWzBdLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgZW1pdHRlci5vbihFdmVudHMuTU9VTlQsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMkMS51cGRhdGVVcmxzKCcjJywgYmFzZVVybCk7IH0pO1xuICAgIH1cblxuICAgIHZhciBoYW5kbGVMb2NhdGlvbkNoYW5nZSA9IHRoaXMuX2hhbmRsZUxvY2F0aW9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5faGFuZGxlTG9jYXRpb25DaGFuZ2UgPSBoYW5kbGVMb2NhdGlvbkNoYW5nZTtcblxuICAgIC8vIFByb3ZpZGUgd2F5IHRvIHVwZGF0ZSBzcHJpdGUgdXJscyBleHRlcm5hbGx5IHZpYSBkaXNwYXRjaGluZyBjdXN0b20gd2luZG93IGV2ZW50XG4gICAgaWYgKGNvbmZpZy5saXN0ZW5Mb2NhdGlvbkNoYW5nZUV2ZW50KSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihjb25maWcubG9jYXRpb25DaGFuZ2VFdmVudCwgaGFuZGxlTG9jYXRpb25DaGFuZ2UpO1xuICAgIH1cblxuICAgIC8vIEVtaXQgbG9jYXRpb24gY2hhbmdlIGV2ZW50IGluIEFuZ3VsYXIgYXV0b21hdGljYWxseVxuICAgIGlmIChjb25maWcubG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlcikge1xuICAgICAgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlcihjb25maWcubG9jYXRpb25DaGFuZ2VFdmVudCk7XG4gICAgfVxuXG4gICAgLy8gQWZ0ZXIgc3ByaXRlIG1vdW50ZWRcbiAgICBlbWl0dGVyLm9uKEV2ZW50cy5NT1VOVCwgZnVuY3Rpb24gKHNwcml0ZU5vZGUpIHtcbiAgICAgIGlmIChjb25maWcubW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2wpIHtcbiAgICAgICAgbW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2woc3ByaXRlTm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBZnRlciBzeW1ib2wgbW91bnRlZCBpbnRvIHNwcml0ZVxuICAgIGVtaXR0ZXIub24oRXZlbnRzLlNZTUJPTF9NT1VOVCwgZnVuY3Rpb24gKHN5bWJvbE5vZGUpIHtcbiAgICAgIGlmIChjb25maWcubW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2wpIHtcbiAgICAgICAgbW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2woc3ltYm9sTm9kZS5wYXJlbnROb2RlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJyb3dzZXIuaXNJRSgpIHx8IGJyb3dzZXIuaXNFZGdlKCkpIHtcbiAgICAgICAgZXZhbFN0eWxlc0lFV29ya2Fyb3VuZChzeW1ib2xOb2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmICggU3ByaXRlJCQxICkgQnJvd3NlclNwcml0ZS5fX3Byb3RvX18gPSBTcHJpdGUkJDE7XG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggU3ByaXRlJCQxICYmIFNwcml0ZSQkMS5wcm90b3R5cGUgKTtcbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCcm93c2VyU3ByaXRlO1xuXG4gIHZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGlzTW91bnRlZDoge30gfTtcblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHByb3RvdHlwZUFjY2Vzc29ycy5pc01vdW50ZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXRoaXMubm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQXV0b21hdGljYWxseSBjb25maWd1cmUgZm9sbG93aW5nIG9wdGlvbnNcbiAgICogLSBgc3luY1VybHNXaXRoQmFzZVRhZ2BcbiAgICogLSBgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlcmBcbiAgICogLSBgbW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2xgXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjZmdcbiAgICogQHByaXZhdGVcbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLl9hdXRvQ29uZmlndXJlID0gZnVuY3Rpb24gX2F1dG9Db25maWd1cmUgKGNmZykge1xuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBjb25maWcgPSByZWYuY29uZmlnO1xuXG4gICAgaWYgKHR5cGVvZiBjZmcuc3luY1VybHNXaXRoQmFzZVRhZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZy5zeW5jVXJsc1dpdGhCYXNlVGFnID0gdHlwZW9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0gIT09ICd1bmRlZmluZWQnO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2ZnLmxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbmZpZy5sb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyID0gdHlwZW9mIHdpbmRvdy5hbmd1bGFyICE9PSAndW5kZWZpbmVkJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNmZy5tb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZy5tb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbCA9IGJyb3dzZXIuaXNGaXJlZm94KCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQuZGV0YWlsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudC5kZXRhaWwub2xkVXJsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudC5kZXRhaWwubmV3VXJsXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5faGFuZGxlTG9jYXRpb25DaGFuZ2UgPSBmdW5jdGlvbiBfaGFuZGxlTG9jYXRpb25DaGFuZ2UgKGV2ZW50KSB7XG4gICAgdmFyIHJlZiA9IGV2ZW50LmRldGFpbDtcbiAgICB2YXIgb2xkVXJsID0gcmVmLm9sZFVybDtcbiAgICB2YXIgbmV3VXJsID0gcmVmLm5ld1VybDtcbiAgICB0aGlzLnVwZGF0ZVVybHMob2xkVXJsLCBuZXdVcmwpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgbmV3IHN5bWJvbC4gSWYgc3ltYm9sIHdpdGggdGhlIHNhbWUgaWQgZXhpc3RzIGl0IHdpbGwgYmUgcmVwbGFjZWQuXG4gICAqIElmIHNwcml0ZSBhbHJlYWR5IG1vdW50ZWQgLSBgc3ltYm9sLm1vdW50KHNwcml0ZS5ub2RlKWAgd2lsbCBiZSBjYWxsZWQuXG4gICAqIEBmaXJlcyBFdmVudHMjU1lNQk9MX01PVU5UXG4gICAqIEBwYXJhbSB7QnJvd3NlclNwcml0ZVN5bWJvbH0gc3ltYm9sXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCAtIHN5bWJvbCB3YXMgYWRkZWQsIGBmYWxzZWAgLSByZXBsYWNlZFxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChzeW1ib2wpIHtcbiAgICB2YXIgc3ByaXRlID0gdGhpcztcbiAgICB2YXIgaXNOZXdTeW1ib2wgPSBTcHJpdGUkJDEucHJvdG90eXBlLmFkZC5jYWxsKHRoaXMsIHN5bWJvbCk7XG5cbiAgICBpZiAodGhpcy5pc01vdW50ZWQgJiYgaXNOZXdTeW1ib2wpIHtcbiAgICAgIHN5bWJvbC5tb3VudChzcHJpdGUubm9kZSk7XG4gICAgICB0aGlzLl9lbWl0dGVyLmVtaXQoRXZlbnRzLlNZTUJPTF9NT1VOVCwgc3ltYm9sLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBpc05ld1N5bWJvbDtcbiAgfTtcblxuICAvKipcbiAgICogQXR0YWNoIHRvIGV4aXN0aW5nIERPTSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfEVsZW1lbnR9IHRhcmdldFxuICAgKiBAcmV0dXJuIHtFbGVtZW50fG51bGx9IGF0dGFjaGVkIERPTSBFbGVtZW50LiBudWxsIGlmIG5vZGUgdG8gYXR0YWNoIG5vdCBmb3VuZC5cbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uIGF0dGFjaCAodGFyZ2V0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgc3ByaXRlID0gdGhpcztcblxuICAgIGlmIChzcHJpdGUuaXNNb3VudGVkKSB7XG4gICAgICByZXR1cm4gc3ByaXRlLm5vZGU7XG4gICAgfVxuXG4gICAgLyoqIEB0eXBlIEVsZW1lbnQgKi9cbiAgICB2YXIgbm9kZSA9IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpIDogdGFyZ2V0O1xuICAgIHNwcml0ZS5ub2RlID0gbm9kZTtcblxuICAgIC8vIEFscmVhZHkgYWRkZWQgc3ltYm9scyBuZWVkcyB0byBiZSBtb3VudGVkXG4gICAgdGhpcy5zeW1ib2xzLmZvckVhY2goZnVuY3Rpb24gKHN5bWJvbCkge1xuICAgICAgc3ltYm9sLm1vdW50KHNwcml0ZS5ub2RlKTtcbiAgICAgIHRoaXMkMS5fZW1pdHRlci5lbWl0KEV2ZW50cy5TWU1CT0xfTU9VTlQsIHN5bWJvbC5ub2RlKTtcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBzeW1ib2xzIGZyb20gZXhpc3RpbmcgRE9NIG5vZGVzLCBhZGQgYW5kIG1vdW50IHRoZW1cbiAgICBhcnJheUZyb20obm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdzeW1ib2wnKSlcbiAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChzeW1ib2xOb2RlKSB7XG4gICAgICAgIHZhciBzeW1ib2wgPSBCcm93c2VyU3ByaXRlU3ltYm9sLmNyZWF0ZUZyb21FeGlzdGluZ05vZGUoc3ltYm9sTm9kZSk7XG4gICAgICAgIHN5bWJvbC5ub2RlID0gc3ltYm9sTm9kZTsgLy8gaGFjayB0byBwcmV2ZW50IHN5bWJvbCBtb3VudGluZyB0byBzcHJpdGUgd2hlbiBhZGRpbmdcbiAgICAgICAgc3ByaXRlLmFkZChzeW1ib2wpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLl9lbWl0dGVyLmVtaXQoRXZlbnRzLk1PVU5ULCBub2RlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgY29uZmlnID0gcmVmLmNvbmZpZztcbiAgICB2YXIgc3ltYm9scyA9IHJlZi5zeW1ib2xzO1xuICAgIHZhciBfZW1pdHRlciA9IHJlZi5fZW1pdHRlcjtcblxuICAgIHN5bWJvbHMuZm9yRWFjaChmdW5jdGlvbiAocykgeyByZXR1cm4gcy5kZXN0cm95KCk7IH0pO1xuXG4gICAgX2VtaXR0ZXIub2ZmKCcqJyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoY29uZmlnLmxvY2F0aW9uQ2hhbmdlRXZlbnQsIHRoaXMuX2hhbmRsZUxvY2F0aW9uQ2hhbmdlKTtcblxuICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgdGhpcy51bm1vdW50KCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAZmlyZXMgRXZlbnRzI01PVU5UXG4gICAqIEBwYXJhbSB7c3RyaW5nfEVsZW1lbnR9IFt0YXJnZXRdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZXBlbmQ9ZmFsc2VdXG4gICAqIEByZXR1cm4ge0VsZW1lbnR8bnVsbH0gcmVuZGVyZWQgc3ByaXRlIG5vZGUuIG51bGwgaWYgbW91bnQgbm9kZSBub3QgZm91bmQuXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uIG1vdW50ICh0YXJnZXQsIHByZXBlbmQpIHtcbiAgICBpZiAoIHRhcmdldCA9PT0gdm9pZCAwICkgdGFyZ2V0ID0gdGhpcy5jb25maWcubW91bnRUbztcbiAgICBpZiAoIHByZXBlbmQgPT09IHZvaWQgMCApIHByZXBlbmQgPSBmYWxzZTtcblxuICAgIHZhciBzcHJpdGUgPSB0aGlzO1xuXG4gICAgaWYgKHNwcml0ZS5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiBzcHJpdGUubm9kZTtcbiAgICB9XG5cbiAgICB2YXIgbW91bnROb2RlID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgdmFyIG5vZGUgPSBzcHJpdGUucmVuZGVyKCk7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcblxuICAgIGlmIChwcmVwZW5kICYmIG1vdW50Tm9kZS5jaGlsZE5vZGVzWzBdKSB7XG4gICAgICBtb3VudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIG1vdW50Tm9kZS5jaGlsZE5vZGVzWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW91bnROb2RlLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cblxuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChFdmVudHMuTU9VTlQsIG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIHJldHVybiBwYXJzZSh0aGlzLnN0cmluZ2lmeSgpKTtcbiAgfTtcblxuICAvKipcbiAgICogRGV0YWNoIHNwcml0ZSBmcm9tIHRoZSBET01cbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLnVubW91bnQgPSBmdW5jdGlvbiB1bm1vdW50ICgpIHtcbiAgICB0aGlzLm5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgVVJMcyBpbiBzcHJpdGUgYW5kIHVzYWdlIGVsZW1lbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvbGRVcmxcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1VybFxuICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgLSBVUkxzIHdhcyB1cGRhdGVkLCBgZmFsc2VgIC0gc3ByaXRlIGlzIG5vdCBtb3VudGVkXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS51cGRhdGVVcmxzID0gZnVuY3Rpb24gdXBkYXRlVXJscyQxIChvbGRVcmwsIG5ld1VybCkge1xuICAgIGlmICghdGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdXNhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbmZpZy51c2FnZXNUb1VwZGF0ZSk7XG5cbiAgICB1cGRhdGVVcmxzKFxuICAgICAgdGhpcy5ub2RlLFxuICAgICAgdXNhZ2VzLFxuICAgICAgKChnZXRVcmxXaXRob3V0RnJhZ21lbnQob2xkVXJsKSkgKyBcIiNcIiksXG4gICAgICAoKGdldFVybFdpdGhvdXRGcmFnbWVudChuZXdVcmwpKSArIFwiI1wiKVxuICAgICk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyggQnJvd3NlclNwcml0ZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG4gIHJldHVybiBCcm93c2VyU3ByaXRlO1xufShTcHJpdGUpKTtcblxudmFyIHJlYWR5JDEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG4vKiFcbiAgKiBkb21yZWFkeSAoYykgRHVzdGluIERpYXogMjAxNCAtIExpY2Vuc2UgTUlUXG4gICovXG4hZnVuY3Rpb24gKG5hbWUsIGRlZmluaXRpb24pIHtcblxuICB7IG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpOyB9XG5cbn0oJ2RvbXJlYWR5JywgZnVuY3Rpb24gKCkge1xuXG4gIHZhciBmbnMgPSBbXSwgbGlzdGVuZXJcbiAgICAsIGRvYyA9IGRvY3VtZW50XG4gICAgLCBoYWNrID0gZG9jLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbFxuICAgICwgZG9tQ29udGVudExvYWRlZCA9ICdET01Db250ZW50TG9hZGVkJ1xuICAgICwgbG9hZGVkID0gKGhhY2sgPyAvXmxvYWRlZHxeYy8gOiAvXmxvYWRlZHxeaXxeYy8pLnRlc3QoZG9jLnJlYWR5U3RhdGUpO1xuXG5cbiAgaWYgKCFsb2FkZWQpXG4gIHsgZG9jLmFkZEV2ZW50TGlzdGVuZXIoZG9tQ29udGVudExvYWRlZCwgbGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoZG9tQ29udGVudExvYWRlZCwgbGlzdGVuZXIpO1xuICAgIGxvYWRlZCA9IDE7XG4gICAgd2hpbGUgKGxpc3RlbmVyID0gZm5zLnNoaWZ0KCkpIHsgbGlzdGVuZXIoKTsgfVxuICB9KTsgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICBsb2FkZWQgPyBzZXRUaW1lb3V0KGZuLCAwKSA6IGZucy5wdXNoKGZuKTtcbiAgfVxuXG59KTtcbn0pO1xuXG52YXIgc3ByaXRlTm9kZUlkID0gJ19fU1ZHX1NQUklURV9OT0RFX18nO1xudmFyIHNwcml0ZUdsb2JhbFZhck5hbWUgPSAnX19TVkdfU1BSSVRFX18nO1xudmFyIGlzU3ByaXRlRXhpc3RzID0gISF3aW5kb3dbc3ByaXRlR2xvYmFsVmFyTmFtZV07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG52YXIgc3ByaXRlO1xuXG5pZiAoaXNTcHJpdGVFeGlzdHMpIHtcbiAgc3ByaXRlID0gd2luZG93W3Nwcml0ZUdsb2JhbFZhck5hbWVdO1xufSBlbHNlIHtcbiAgc3ByaXRlID0gbmV3IEJyb3dzZXJTcHJpdGUoe1xuICAgIGF0dHJzOiB7XG4gICAgICBpZDogc3ByaXRlTm9kZUlkLFxuICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgfVxuICB9KTtcbiAgd2luZG93W3Nwcml0ZUdsb2JhbFZhck5hbWVdID0gc3ByaXRlO1xufVxuXG52YXIgbG9hZFNwcml0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENoZWNrIGZvciBwYWdlIGFscmVhZHkgY29udGFpbnMgc3ByaXRlIG5vZGVcbiAgICogSWYgZm91bmQgLSBhdHRhY2ggdG8gYW5kIHJldXNlIGl0J3MgY29udGVudFxuICAgKiBJZiBub3QgLSByZW5kZXIgYW5kIG1vdW50IHRoZSBuZXcgc3ByaXRlXG4gICAqL1xuICB2YXIgZXhpc3RpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzcHJpdGVOb2RlSWQpO1xuXG4gIGlmIChleGlzdGluZykge1xuICAgIHNwcml0ZS5hdHRhY2goZXhpc3RpbmcpO1xuICB9IGVsc2Uge1xuICAgIHNwcml0ZS5tb3VudChkb2N1bWVudC5ib2R5LCB0cnVlKTtcbiAgfVxufTtcblxuaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgbG9hZFNwcml0ZSgpO1xufSBlbHNlIHtcbiAgcmVhZHkkMShsb2FkU3ByaXRlKTtcbn1cblxudmFyIHNwcml0ZSQxID0gc3ByaXRlO1xuXG5yZXR1cm4gc3ByaXRlJDE7XG5cbn0pKSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgbG9hZFZpZXdzIGZyb20gJy4vbW9kdWxlcy9oYW5kbGVycy9oYW5kbGVycyc7XG5cbmNvbnN0IHN0YXJ0QXBwID0gKCkgPT4ge1xuICBsb2FkVmlld3MoJyNjb250ZW50Jyk7XG59O1xuXG5zdGFydEFwcCgpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUh0bWxFbGVtZW50IiwidHlwZSIsImlkIiwiYXJyYXlDbGFzc2VzIiwiY29udGVudCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJmb3JFYWNoIiwibXlDbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImRpc3BsYXlXZWF0aGVyQ2FyZCIsImdldEVsZW1lbnQiLCJzZWxlY3RvciIsInBhcmVudE5vZGUiLCJxdWVyeVNlbGVjdG9yIiwiaGFuZGxlU2VhcmNoIiwibWFpbkNvbnRlbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZWFyY2hUZXJtIiwidmFsdWUiLCJjaGlsZE5vZGVzIiwibm9kZSIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJsb2FkVmlld3MiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiZG9jdW1lbnRFbGVtZW50IiwicmVtb3ZlIiwic3VuIiwibW9vbiIsImNsb3VkeSIsImNsb3VkeW5pZ2h0IiwiY2xvdWQiLCJjbG91ZHMiLCJyYWluY2xvdWQiLCJyYWluIiwic3Rvcm0iLCJzbm93IiwibWlzdCIsImljb25SZWZlcmVuY2UiLCJpY29uIiwiZ2V0SWNvbiIsImNvZGUiLCJ1cmwiLCJnZW9Db2RlIiwiY3JlYXRlU2VhcmNoQmFyIiwiZ2V0V2VhdGhlciIsImNvb3JkcyIsImZldGNodXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJ0aGVXZWF0aGVyIiwianNvbiIsInNlYXJjaEJhckVsZW1lbnQiLCJ3ZWF0aGVySWNvbiIsInJlbmRlcmVkIiwiY3VycmVudCIsIndlYXRoZXIiLCJ2aWV3Qm94IiwicGFyZW50RWxlbWVudCIsImh1bWlkaXR5RWxlbWVudCIsImh1bWlkaXR5RGF0YSIsImh1bWlkaXR5IiwicHJlc3N1cmVFbGVtZW50IiwicHJlc3N1cmVEYXRhIiwicHJlc3N1cmUiLCJ3aW5kc3BlZWRFbGVtZW50Iiwid2luZFNwZWVkRGF0YSIsIk1hdGgiLCJyb3VuZCIsIndpbmRfc3BlZWQiLCJ3aW5kZGlyRWxlbWVudCIsIndpbmREaXJEYXRhIiwid2luZF9kZWciLCJjdXJyZW50VGVtcCIsInRlbXAiLCJlcnJvciIsImNvbnNvbGUiLCJnZXRDaXR5IiwiY2l0eSIsInN0cmluZyIsImxhdCIsImxvbiIsImNpdHlFbGVtZW50IiwibmFtZSIsImRpc3BsYXlTdW5yaXNlU3Vuc2V0IiwiY3JlYXRlRGV0YWlsc0NoaWxkIiwiZGlzcGxheURldGFpbHMiLCJkaXNwbGF5U2VhcmNoQmFyIiwiZGlzcGxheUN1cnJlbnRUZW1wZXJhdHVyZSIsImRpc3BsYXlDaXR5TmFtZSIsImRpc3BsYXlXZWF0aGVySWNvbiIsInNlYXJjaENpdHkiLCJ3YXJuIiwidGhlbiIsInN0YXJ0QXBwIl0sInNvdXJjZVJvb3QiOiIifQ==