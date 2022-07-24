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

var loadViews = function loadViews(selector) {
  var mainContent = getElement(selector);
  mainContent.appendChild((0,_views_weather__WEBPACK_IMPORTED_MODULE_0__["default"])());
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
    "icon": _images_icons8_sun_50_svg__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  // clear sky day
  '01n': {
    "icon": _images_icons8_moon_and_stars_50_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  // clear sky night
  '02d': {
    "icon": _images_icons8_partly_cloudy_day_50_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  // few clouds day
  '02n': {
    "icon": _images_icons8_night_50_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  // few clouds night
  '03d': {
    "icon": _images_icons8_cloud_50_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  // clouds day
  '03n': {
    "icon": _images_icons8_cloud_50_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  // clouds night
  '04d': {
    "icon": _images_icons8_clouds_50_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  // broken clouds day
  '04n': {
    "icon": _images_icons8_clouds_50_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  // broken clouds night
  '09d': {
    "icon": _images_icons8_rain_cloud_50_svg__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  // shower rain day
  '09n': {
    "icon": _images_icons8_rain_cloud_50_svg__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  // shower rain night (shows sun)
  '10d': {
    "icon": _images_icons8_rain_50_svg__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  // rain day
  '10n': {
    "icon": _images_icons8_rain_50_svg__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  // rain night
  '11d': {
    "icon": _images_icons8_storm_50_svg__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  // storm day
  '11n': {
    "icon": _images_icons8_storm_50_svg__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  // storm night
  '13d': {
    "icon": _images_icons8_snow_50_svg__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  // snow day
  '13n': {
    "icon": _images_icons8_snow_50_svg__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  // snow night
  '50d': {
    "icon": _images_icons8_haze_50_svg__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  // mist day
  '50n': {
    "icon": _images_icons8_haze_50_svg__WEBPACK_IMPORTED_MODULE_10__["default"]
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


var url = 'https://api.openweathermap.org/data/2.5/weather?q=Brisbane&units=metric&appid=90318285a062f251bf658d4369021fd6'; // const forecasturl = 'http://api.openweathermap.org/data/2.5/forecast?lat=-27.4679&lon=153.0281&cnt=5&units=metric&appid=90318285a062f251bf658d4369021fd6';

var getWeather = async function getWeather(fetchurl) {
  try {
    var response = await fetch(fetchurl, {
      mode: 'cors'
    });
    var theWeather = await response.json(); // Weather Icon

    var weatherIcon = document.getElementById('weatherIcon');
    var rendered = "\n      <svg viewBox=\"".concat((0,_modules_handlers_loadIcon__WEBPACK_IMPORTED_MODULE_1__["default"])(theWeather.weather[0].icon).viewBox, "\">\n        <use href=\"#").concat((0,_modules_handlers_loadIcon__WEBPACK_IMPORTED_MODULE_1__["default"])(theWeather.weather[0].icon).id, "\" />\n      </svg>");
    weatherIcon.innerHTML = rendered; // console.warn(theWeather.weather[0].icon);

    document.getElementById('weatherIcon').parentElement.classList.remove(['animate-pulse']);
    document.getElementById('weatherIcon').classList.remove('bg-gray-300'); // City Name

    var cityElement = document.getElementById('cityName');
    cityElement.innerHTML = theWeather.name;
    cityElement.classList.remove('bg-gray-300'); // // Description
    // const descElement = document.getElementById('description');
    // descElement.innerHTML = theWeather.weather[0].description;
    // descElement.classList.remove('bg-gray-300');
    // Humidity

    var humidityElement = document.getElementById('humidity');
    var humidityData = theWeather.main.humidity;
    humidityData += '%';
    humidityElement.appendChild((0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', null, ['text-sm', 'text-gray-600'], "Humidity"));
    humidityElement.appendChild((0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', null, [], humidityData));
    humidityElement.classList.remove('bg-gray-300'); // Pressure

    var pressureElement = document.getElementById('pressure');
    var pressureData = theWeather.main.pressure;
    pressureElement.appendChild((0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', null, ['text-sm', 'text-gray-600'], "Pressure"));
    pressureElement.appendChild((0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', null, [], pressureData));
    pressureElement.classList.remove('bg-gray-300'); // Wind Speed

    var windspeedElement = document.getElementById('windspeed');
    var windSpeedData = Math.round(theWeather.wind.speed * 10) / 10;
    windspeedElement.appendChild((0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', null, ['text-sm', 'text-gray-600'], "Wind Spd"));
    windspeedElement.appendChild((0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', null, [], windSpeedData));
    windspeedElement.classList.remove('bg-gray-300'); // Wind Dir

    var winddirElement = document.getElementById('winddir');
    var windDirData = theWeather.wind.deg;
    winddirElement.appendChild((0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', null, ['text-sm', 'text-gray-600'], "Wind Dir"));
    winddirElement.appendChild((0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', null, [], windDirData));
    winddirElement.classList.remove('bg-gray-300'); // Current Temperature

    var currentTemp = document.getElementById('currentTemperature');
    currentTemp.innerHTML = Math.round(theWeather.main.temp * 10) / 10;
    currentTemp.innerHTML += '&deg;';
    currentTemp.classList.remove('bg-gray-300');
  } catch (error) {
    console.error("Unable to fetch data");
  }
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
  var element = (0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'details', ['flex', 'justify-start', 'self-center', 'bg-gray-100', 'gap-2', 'w-80', 'h-20', 'rounded-md'], null);
  element.appendChild(createDetailsChild("humidity"));
  element.appendChild(createDetailsChild("pressure"));
  element.appendChild(createDetailsChild("windspeed"));
  element.appendChild(createDetailsChild("winddir"));
  return element;
};

var displaySearchBar = function displaySearchBar() {
  var element = (0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'searchBar', ['flex', 'justify-center', 'items-center', 'self-center', 'w-72', 'h-12', 'rounded-md', 'bg-gray-300'], '&nbsp;');
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

var displayWeatherCard = function displayWeatherCard() {
  var element = (0,_modules_handlers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', null, ['animate-pulse', 'flex', 'flex-col', 'p-4', 'pt-8', 'max-w-sm', 'w-full', 'mx-auto', 'gap-4'], null);
  element.appendChild(displaySearchBar());
  element.appendChild(displayWeatherIcon());
  element.appendChild(displayCityName());
  element.appendChild(displayCurrentTemperature());
  element.appendChild(displayDetails());
  element.appendChild(displaySunriseSunset());
  getWeather(url);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EscUNBQXFDO0FBQ3JDLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRCxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDOzs7Ozs7O1VDai9CRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBLElBQU1tRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0VBQ3JCOUQsc0VBQVMsQ0FBQyxVQUFELENBQVQ7QUFDRCxDQUZEOztBQUlBOEQsUUFBUSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9tb2R1bGVzL2hhbmRsZXJzL2NyZWF0ZUh0bWxFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvbW9kdWxlcy9oYW5kbGVycy9oYW5kbGVycy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21vZHVsZXMvaGFuZGxlcnMvbG9hZEljb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy92aWV3cy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGVzLmNzcz81MjMxIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWFnZXMvaWNvbnM4LWNsb3VkLTUwLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltYWdlcy9pY29uczgtY2xvdWRzLTUwLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltYWdlcy9pY29uczgtaGF6ZS01MC5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWFnZXMvaWNvbnM4LW1vb24tYW5kLXN0YXJzLTUwLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltYWdlcy9pY29uczgtbmlnaHQtNTAuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1hZ2VzL2ljb25zOC1wYXJ0bHktY2xvdWR5LWRheS01MC5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWFnZXMvaWNvbnM4LXJhaW4tNTAuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1hZ2VzL2ljb25zOC1yYWluLWNsb3VkLTUwLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltYWdlcy9pY29uczgtc25vdy01MC5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWFnZXMvaWNvbnM4LXN0b3JtLTUwLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltYWdlcy9pY29uczgtc3VuLTUwLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSHRtbEVsZW1lbnQodHlwZSwgaWQsIGFycmF5Q2xhc3NlcywgY29udGVudCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgaWYgKGlkKSBlbGVtZW50LmlkID0gaWQ7XG4gIGlmIChhcnJheUNsYXNzZXMpIHtcbiAgICBhcnJheUNsYXNzZXMuZm9yRWFjaCgobXlDbGFzcykgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKG15Q2xhc3MpKTtcbiAgfVxuICBpZiAoY29udGVudCkgZWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50O1xuXG4gIHJldHVybiBlbGVtZW50O1xufSIsImltcG9ydCBkaXNwbGF5V2VhdGhlckNhcmQgZnJvbSAnLi4vLi4vdmlld3Mvd2VhdGhlcic7XG5cbmNvbnN0IGdldEVsZW1lbnQgPSAoc2VsZWN0b3IsIHBhcmVudE5vZGUgPSBkb2N1bWVudCkgPT5cbiAgcGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuY29uc3QgbG9hZFZpZXdzID0gKHNlbGVjdG9yKSA9PiB7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZ2V0RWxlbWVudChzZWxlY3Rvcik7XG5cbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlzcGxheVdlYXRoZXJDYXJkKCkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGxvYWRWaWV3czsiLCJpbXBvcnQgc3VuIGZyb20gJy4uLy4uL2ltYWdlcy9pY29uczgtc3VuLTUwLnN2Zyc7XG5pbXBvcnQgbW9vbiBmcm9tICcuLi8uLi9pbWFnZXMvaWNvbnM4LW1vb24tYW5kLXN0YXJzLTUwLnN2Zyc7XG5pbXBvcnQgY2xvdWR5IGZyb20gJy4uLy4uL2ltYWdlcy9pY29uczgtcGFydGx5LWNsb3VkeS1kYXktNTAuc3ZnJztcbmltcG9ydCBjbG91ZHluaWdodCBmcm9tICcuLi8uLi9pbWFnZXMvaWNvbnM4LW5pZ2h0LTUwLnN2Zyc7XG5pbXBvcnQgY2xvdWQgZnJvbSAnLi4vLi4vaW1hZ2VzL2ljb25zOC1jbG91ZC01MC5zdmcnO1xuaW1wb3J0IGNsb3VkcyBmcm9tICcuLi8uLi9pbWFnZXMvaWNvbnM4LWNsb3Vkcy01MC5zdmcnO1xuaW1wb3J0IHJhaW5jbG91ZCBmcm9tICcuLi8uLi9pbWFnZXMvaWNvbnM4LXJhaW4tY2xvdWQtNTAuc3ZnJztcbmltcG9ydCByYWluIGZyb20gJy4uLy4uL2ltYWdlcy9pY29uczgtcmFpbi01MC5zdmcnO1xuaW1wb3J0IHN0b3JtIGZyb20gJy4uLy4uL2ltYWdlcy9pY29uczgtc3Rvcm0tNTAuc3ZnJztcbmltcG9ydCBzbm93IGZyb20gJy4uLy4uL2ltYWdlcy9pY29uczgtc25vdy01MC5zdmcnO1xuaW1wb3J0IG1pc3QgZnJvbSAnLi4vLi4vaW1hZ2VzL2ljb25zOC1oYXplLTUwLnN2Zyc7XG5cblxuY29uc3QgaWNvblJlZmVyZW5jZSA9IHtcbiAgJzAxZCc6IHtcImljb25cIjogc3VufSwgLy8gY2xlYXIgc2t5IGRheVxuICAnMDFuJzoge1wiaWNvblwiOiBtb29ufSwgLy8gY2xlYXIgc2t5IG5pZ2h0XG4gICcwMmQnOiB7XCJpY29uXCI6IGNsb3VkeX0sIC8vIGZldyBjbG91ZHMgZGF5XG4gICcwMm4nOiB7XCJpY29uXCI6IGNsb3VkeW5pZ2h0fSwgLy8gZmV3IGNsb3VkcyBuaWdodFxuICAnMDNkJzoge1wiaWNvblwiOiBjbG91ZH0sIC8vIGNsb3VkcyBkYXlcbiAgJzAzbic6IHtcImljb25cIjogY2xvdWR9LCAvLyBjbG91ZHMgbmlnaHRcbiAgJzA0ZCc6IHtcImljb25cIjogY2xvdWRzfSwgLy8gYnJva2VuIGNsb3VkcyBkYXlcbiAgJzA0bic6IHtcImljb25cIjogY2xvdWRzfSwgLy8gYnJva2VuIGNsb3VkcyBuaWdodFxuICAnMDlkJzoge1wiaWNvblwiOiByYWluY2xvdWR9LCAvLyBzaG93ZXIgcmFpbiBkYXlcbiAgJzA5bic6IHtcImljb25cIjogcmFpbmNsb3VkfSwgLy8gc2hvd2VyIHJhaW4gbmlnaHQgKHNob3dzIHN1bilcbiAgJzEwZCc6IHtcImljb25cIjogcmFpbn0sIC8vIHJhaW4gZGF5XG4gICcxMG4nOiB7XCJpY29uXCI6IHJhaW59LCAvLyByYWluIG5pZ2h0XG4gICcxMWQnOiB7XCJpY29uXCI6IHN0b3JtfSwgLy8gc3Rvcm0gZGF5XG4gICcxMW4nOiB7XCJpY29uXCI6IHN0b3JtfSwgLy8gc3Rvcm0gbmlnaHRcbiAgJzEzZCc6IHtcImljb25cIjogc25vd30sIC8vIHNub3cgZGF5XG4gICcxM24nOiB7XCJpY29uXCI6IHNub3d9LCAvLyBzbm93IG5pZ2h0XG4gICc1MGQnOiB7XCJpY29uXCI6IG1pc3R9LCAvLyBtaXN0IGRheVxuICAnNTBuJzoge1wiaWNvblwiOiBtaXN0fSwgLy8gbWlzdCBuaWdodFxufTtcblxuY29uc3QgZ2V0SWNvbiA9IChjb2RlKSA9PiBpY29uUmVmZXJlbmNlW2NvZGVdLmljb247XG5leHBvcnQgZGVmYXVsdCBnZXRJY29uO1xuXG4iLCJpbXBvcnQgY3JlYXRlSHRtbEVsZW1lbnQgZnJvbSBcIi4uL21vZHVsZXMvaGFuZGxlcnMvY3JlYXRlSHRtbEVsZW1lbnRcIjtcbmltcG9ydCBnZXRJY29uIGZyb20gXCIuLi9tb2R1bGVzL2hhbmRsZXJzL2xvYWRJY29uXCI7XG5cbmNvbnN0IHVybCA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPUJyaXNiYW5lJnVuaXRzPW1ldHJpYyZhcHBpZD05MDMxODI4NWEwNjJmMjUxYmY2NThkNDM2OTAyMWZkNic7XG5cbi8vIGNvbnN0IGZvcmVjYXN0dXJsID0gJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0tMjcuNDY3OSZsb249MTUzLjAyODEmY250PTUmdW5pdHM9bWV0cmljJmFwcGlkPTkwMzE4Mjg1YTA2MmYyNTFiZjY1OGQ0MzY5MDIxZmQ2JztcblxuXG5jb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKGZldGNodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmZXRjaHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgY29uc3QgdGhlV2VhdGhlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIC8vIFdlYXRoZXIgSWNvblxuICAgIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJJY29uJyk7XG4gICAgY29uc3QgcmVuZGVyZWQgPSBgXG4gICAgICA8c3ZnIHZpZXdCb3g9XCIke2dldEljb24odGhlV2VhdGhlci53ZWF0aGVyWzBdLmljb24pLnZpZXdCb3h9XCI+XG4gICAgICAgIDx1c2UgaHJlZj1cIiMke2dldEljb24odGhlV2VhdGhlci53ZWF0aGVyWzBdLmljb24pLmlkfVwiIC8+XG4gICAgICA8L3N2Zz5gO1xuICAgIHdlYXRoZXJJY29uLmlubmVySFRNTCA9IHJlbmRlcmVkO1xuICAgIC8vIGNvbnNvbGUud2Fybih0aGVXZWF0aGVyLndlYXRoZXJbMF0uaWNvbik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJJY29uJykucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFsnYW5pbWF0ZS1wdWxzZSddKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlckljb24nKS5jbGFzc0xpc3QucmVtb3ZlKCdiZy1ncmF5LTMwMCcpO1xuXG4gICAgLy8gQ2l0eSBOYW1lXG4gICAgY29uc3QgY2l0eUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eU5hbWUnKTtcbiAgICBjaXR5RWxlbWVudC5pbm5lckhUTUwgPSB0aGVXZWF0aGVyLm5hbWU7XG4gICAgY2l0eUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYmctZ3JheS0zMDAnKTtcblxuICAgIC8vIC8vIERlc2NyaXB0aW9uXG4gICAgLy8gY29uc3QgZGVzY0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcbiAgICAvLyBkZXNjRWxlbWVudC5pbm5lckhUTUwgPSB0aGVXZWF0aGVyLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgLy8gZGVzY0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYmctZ3JheS0zMDAnKTtcblxuICAgIC8vIEh1bWlkaXR5XG4gICAgY29uc3QgaHVtaWRpdHlFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5Jyk7XG4gICAgbGV0IGh1bWlkaXR5RGF0YSA9IHRoZVdlYXRoZXIubWFpbi5odW1pZGl0eTtcbiAgICBodW1pZGl0eURhdGEgKz0gJyUnO1xuICAgIGh1bWlkaXR5RWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVIdG1sRWxlbWVudCgnc3BhbicsIG51bGwsIFsndGV4dC1zbScsICd0ZXh0LWdyYXktNjAwJ10sIFwiSHVtaWRpdHlcIikpO1xuICAgIGh1bWlkaXR5RWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVIdG1sRWxlbWVudCgnc3BhbicsIG51bGwsIFtdLCBodW1pZGl0eURhdGEpKVxuICAgIGh1bWlkaXR5RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdiZy1ncmF5LTMwMCcpO1xuXG4gICAgLy8gUHJlc3N1cmVcbiAgICBjb25zdCBwcmVzc3VyZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlc3N1cmUnKTtcbiAgICBjb25zdCBwcmVzc3VyZURhdGEgPSB0aGVXZWF0aGVyLm1haW4ucHJlc3N1cmU7XG4gICAgcHJlc3N1cmVFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUh0bWxFbGVtZW50KCdzcGFuJywgbnVsbCwgWyd0ZXh0LXNtJywgJ3RleHQtZ3JheS02MDAnXSwgXCJQcmVzc3VyZVwiKSk7XG4gICAgcHJlc3N1cmVFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUh0bWxFbGVtZW50KCdzcGFuJywgbnVsbCwgW10sIHByZXNzdXJlRGF0YSkpO1xuICAgIHByZXNzdXJlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdiZy1ncmF5LTMwMCcpO1xuXG4gICAgLy8gV2luZCBTcGVlZFxuICAgIGNvbnN0IHdpbmRzcGVlZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZHNwZWVkJyk7XG4gICAgY29uc3Qgd2luZFNwZWVkRGF0YSA9IE1hdGgucm91bmQodGhlV2VhdGhlci53aW5kLnNwZWVkICogMTApIC8gMTA7XG4gICAgd2luZHNwZWVkRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVIdG1sRWxlbWVudCgnc3BhbicsIG51bGwsIFsndGV4dC1zbScsICd0ZXh0LWdyYXktNjAwJ10sIFwiV2luZCBTcGRcIikpO1xuICAgIHdpbmRzcGVlZEVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSHRtbEVsZW1lbnQoJ3NwYW4nLCBudWxsLCBbXSwgd2luZFNwZWVkRGF0YSkpOyBcbiAgICB3aW5kc3BlZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2JnLWdyYXktMzAwJyk7XG5cbiAgICAvLyBXaW5kIERpclxuICAgIGNvbnN0IHdpbmRkaXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRkaXInKTtcbiAgICBjb25zdCB3aW5kRGlyRGF0YSA9IHRoZVdlYXRoZXIud2luZC5kZWc7XG4gICAgd2luZGRpckVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSHRtbEVsZW1lbnQoJ3NwYW4nLCBudWxsLCBbJ3RleHQtc20nLCAndGV4dC1ncmF5LTYwMCddLCBcIldpbmQgRGlyXCIpKTtcbiAgICB3aW5kZGlyRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVIdG1sRWxlbWVudCgnc3BhbicsIG51bGwsIFtdLCB3aW5kRGlyRGF0YSkpOyBcbiAgICB3aW5kZGlyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdiZy1ncmF5LTMwMCcpO1xuICAgIFxuXG4gICAgLy8gQ3VycmVudCBUZW1wZXJhdHVyZVxuICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRUZW1wZXJhdHVyZScpO1xuICAgIGN1cnJlbnRUZW1wLmlubmVySFRNTCA9IE1hdGgucm91bmQodGhlV2VhdGhlci5tYWluLnRlbXAgKiAxMCkgLyAxMDtcbiAgICBjdXJyZW50VGVtcC5pbm5lckhUTUwgKz0gJyZkZWc7JztcbiAgICBjdXJyZW50VGVtcC5jbGFzc0xpc3QucmVtb3ZlKCdiZy1ncmF5LTMwMCcpO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBmZXRjaCBkYXRhXCIpO1xuICB9XG59O1xuXG5cbi8vIHByZXNzdXJlLCBodW1pZGl0eSwgd2luZCBzcGVlZCwgd2luZCBkaXIsXG5cbmNvbnN0IGRpc3BsYXlTdW5yaXNlU3Vuc2V0ID0gKCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdzdW5yaXNlU3Vuc2V0JywgWydmbGV4JywgJ2p1c3RpZnktY2VudGVyJywgJ2l0ZW1zLWNlbnRlcicsICdzZWxmLWNlbnRlcicsICd3LTgwJywgJ2gtNDgnLCAncm91bmRlZC1tZCcsICdiZy1ncmF5LTMwMCddLCAnJm5ic3A7Jyk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVEZXRhaWxzQ2hpbGQgPSAoaWQpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBpZCwgWydmbGV4JywgJ2ZsZXgtY29sJywgJ2p1c3RpZnktZXZlbmx5JywgJ2l0ZW1zLWNlbnRlcicsICd0ZXh0LTJ4bCcsICd3LTEvNCcsICdoLWZ1bGwnLCAncm91bmRlZC1tZCcsICdiZy1ncmF5LTMwMCddLCBudWxsKTtcblxuICByZXR1cm4gZWxlbWVudFxufTtcblxuXG5jb25zdCBkaXNwbGF5RGV0YWlscyA9ICgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnZGV0YWlscycsIFsnZmxleCcsICdqdXN0aWZ5LXN0YXJ0JywgJ3NlbGYtY2VudGVyJywgJ2JnLWdyYXktMTAwJywgJ2dhcC0yJywgJ3ctODAnLCAnaC0yMCcsICdyb3VuZGVkLW1kJ10sIG51bGwpO1xuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRGV0YWlsc0NoaWxkKFwiaHVtaWRpdHlcIikpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZURldGFpbHNDaGlsZChcInByZXNzdXJlXCIpKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVEZXRhaWxzQ2hpbGQoXCJ3aW5kc3BlZWRcIikpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZURldGFpbHNDaGlsZChcIndpbmRkaXJcIikpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuXG5jb25zdCBkaXNwbGF5U2VhcmNoQmFyID0gKCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdzZWFyY2hCYXInLCBbJ2ZsZXgnLCAnanVzdGlmeS1jZW50ZXInLCAnaXRlbXMtY2VudGVyJywgJ3NlbGYtY2VudGVyJywgJ3ctNzInLCAnaC0xMicsICdyb3VuZGVkLW1kJywgJ2JnLWdyYXktMzAwJ10sICcmbmJzcDsnKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cblxuY29uc3QgZGlzcGxheUN1cnJlbnRUZW1wZXJhdHVyZSA9ICgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnY3VycmVudFRlbXBlcmF0dXJlJywgWydmbGV4JywgJ2p1c3RpZnktY2VudGVyJywgJ2l0ZW1zLWNlbnRlcicsICdzZWxmLWNlbnRlcicsICdmb250LWJvbGQnLCAndGV4dC03eGwnLCAndy0yOCcsICdoLTI0JywgJ3JvdW5kZWQtbWQnLCAnYmctZ3JheS0zMDAnXSwgJyZuYnNwOycpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgZGlzcGxheUNpdHlOYW1lID0gKCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdjaXR5TmFtZScsIFsnZmxleCcsICdqdXN0aWZ5LWNlbnRlcicsICdpdGVtcy1jZW50ZXInLCAnc2VsZi1jZW50ZXInLCAnZm9udC1ib2xkJywgJ3RleHQtNHhsJywgJ3ctNjQnLCAnaC0xMCcsICdyb3VuZGVkLW1kJywgJ2JnLWdyYXktMzAwJ10sICcmbmJzcDsnKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IGRpc3BsYXlXZWF0aGVySWNvbiA9ICgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnd2VhdGhlckljb24nLCBbJ2ZsZXgnLCAnanVzdGlmeS1jZW50ZXInLCAnaXRlbXMtY2VudGVyJywgJ3NlbGYtY2VudGVyJywgJ3ctMzYnLCAnaC0zNicsICdyb3VuZGVkLW1kJywgJ2JnLWdyYXktMzAwJ10sICcmbmJzcDsnKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cblxuY29uc3QgZGlzcGxheVdlYXRoZXJDYXJkID0gKCkgPT4geyAgXG5cbiAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBudWxsLCBbJ2FuaW1hdGUtcHVsc2UnLCAnZmxleCcsICdmbGV4LWNvbCcsICdwLTQnLCAncHQtOCcsICdtYXgtdy1zbScsICd3LWZ1bGwnLCAnbXgtYXV0bycsICdnYXAtNCddLCBudWxsKTtcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKGRpc3BsYXlTZWFyY2hCYXIoKSk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGlzcGxheVdlYXRoZXJJY29uKCkpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGRpc3BsYXlDaXR5TmFtZSgpKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChkaXNwbGF5Q3VycmVudFRlbXBlcmF0dXJlKCkpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGRpc3BsYXlEZXRhaWxzKCkpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGRpc3BsYXlTdW5yaXNlU3Vuc2V0KCkpO1xuXG4gIGdldFdlYXRoZXIodXJsKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5V2VhdGhlckNhcmQ7XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0KGdsb2JhbC5Ccm93c2VyU3ByaXRlU3ltYm9sID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgU3ByaXRlU3ltYm9sID0gZnVuY3Rpb24gU3ByaXRlU3ltYm9sKHJlZikge1xuICB2YXIgaWQgPSByZWYuaWQ7XG4gIHZhciB2aWV3Qm94ID0gcmVmLnZpZXdCb3g7XG4gIHZhciBjb250ZW50ID0gcmVmLmNvbnRlbnQ7XG5cbiAgdGhpcy5pZCA9IGlkO1xuICB0aGlzLnZpZXdCb3ggPSB2aWV3Qm94O1xuICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUuc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5ICgpIHtcbiAgcmV0dXJuIHRoaXMuY29udGVudDtcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5TcHJpdGVTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICByZXR1cm4gdGhpcy5zdHJpbmdpZnkoKTtcbn07XG5cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIFsnaWQnLCAndmlld0JveCcsICdjb250ZW50J10uZm9yRWFjaChmdW5jdGlvbiAocHJvcCkgeyByZXR1cm4gZGVsZXRlIHRoaXMkMVtwcm9wXTsgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG52YXIgcGFyc2UgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICB2YXIgaGFzSW1wb3J0Tm9kZSA9ICEhZG9jdW1lbnQuaW1wb3J0Tm9kZTtcbiAgdmFyIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoY29udGVudCwgJ2ltYWdlL3N2Zyt4bWwnKS5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIEZpeCBmb3IgYnJvd3NlciB3aGljaCBhcmUgdGhyb3dpbmcgV3JvbmdEb2N1bWVudEVycm9yXG4gICAqIGlmIHlvdSBpbnNlcnQgYW4gZWxlbWVudCB3aGljaCBpcyBub3QgcGFydCBvZiB0aGUgZG9jdW1lbnRcbiAgICogQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83OTg2NTE5LzQ2MjQ0MDNcbiAgICovXG4gIGlmIChoYXNJbXBvcnROb2RlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmltcG9ydE5vZGUoZG9jLCB0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBkb2M7XG59O1xuXG52YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9O1xuXG5cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcblx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xufVxuXG52YXIgZGVlcG1lcmdlID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiB1bmRlZmluZWQgPT09ICdmdW5jdGlvbicgJiYgdW5kZWZpbmVkLmFtZCkge1xuICAgICAgICB1bmRlZmluZWQoZmFjdG9yeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfVxufShjb21tb25qc0dsb2JhbCwgZnVuY3Rpb24gKCkge1xuXG5mdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWwpIHtcbiAgICB2YXIgbm9uTnVsbE9iamVjdCA9IHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JztcblxuICAgIHJldHVybiBub25OdWxsT2JqZWN0XG4gICAgICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBSZWdFeHBdJ1xuICAgICAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgRGF0ZV0nXG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFyZ2V0KHZhbCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyBbXSA6IHt9XG59XG5cbmZ1bmN0aW9uIGNsb25lSWZOZWNlc3NhcnkodmFsdWUsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBjbG9uZSA9IG9wdGlvbnNBcmd1bWVudCAmJiBvcHRpb25zQXJndW1lbnQuY2xvbmUgPT09IHRydWU7XG4gICAgcmV0dXJuIChjbG9uZSAmJiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkpID8gZGVlcG1lcmdlKGVtcHR5VGFyZ2V0KHZhbHVlKSwgdmFsdWUsIG9wdGlvbnNBcmd1bWVudCkgOiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0QXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0gdGFyZ2V0LnNsaWNlKCk7XG4gICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24oZSwgaSkge1xuICAgICAgICBpZiAodHlwZW9mIGRlc3RpbmF0aW9uW2ldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZGVzdGluYXRpb25baV0gPSBjbG9uZUlmTmVjZXNzYXJ5KGUsIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNNZXJnZWFibGVPYmplY3QoZSkpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gZGVlcG1lcmdlKHRhcmdldFtpXSwgZSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuaW5kZXhPZihlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLnB1c2goY2xvbmVJZk5lY2Vzc2FyeShlLCBvcHRpb25zQXJndW1lbnQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0ge307XG4gICAgaWYgKGlzTWVyZ2VhYmxlT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZUlmTmVjZXNzYXJ5KHRhcmdldFtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCFpc01lcmdlYWJsZU9iamVjdChzb3VyY2Vba2V5XSkgfHwgIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVJZk5lY2Vzc2FyeShzb3VyY2Vba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShzb3VyY2UpO1xuICAgIHZhciBvcHRpb25zID0gb3B0aW9uc0FyZ3VtZW50IHx8IHsgYXJyYXlNZXJnZTogZGVmYXVsdEFycmF5TWVyZ2UgfTtcbiAgICB2YXIgYXJyYXlNZXJnZSA9IG9wdGlvbnMuYXJyYXlNZXJnZSB8fCBkZWZhdWx0QXJyYXlNZXJnZTtcblxuICAgIGlmIChhcnJheSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0YXJnZXQpID8gYXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSA6IGNsb25lSWZOZWNlc3Nhcnkoc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG4gICAgfVxufVxuXG5kZWVwbWVyZ2UuYWxsID0gZnVuY3Rpb24gZGVlcG1lcmdlQWxsKGFycmF5LCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpIHx8IGFycmF5Lmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaXJzdCBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXkgd2l0aCBhdCBsZWFzdCB0d28gZWxlbWVudHMnKVxuICAgIH1cblxuICAgIC8vIHdlIGFyZSBzdXJlIHRoZXJlIGFyZSBhdCBsZWFzdCAyIHZhbHVlcywgc28gaXQgaXMgc2FmZSB0byBoYXZlIG5vIGluaXRpYWwgdmFsdWVcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcbiAgICAgICAgcmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zQXJndW1lbnQpXG4gICAgfSlcbn07XG5cbnJldHVybiBkZWVwbWVyZ2VcblxufSkpO1xufSk7XG5cbnZhciBuYW1lc3BhY2VzXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG52YXIgbmFtZXNwYWNlcyA9IHtcbiAgc3ZnOiB7XG4gICAgbmFtZTogJ3htbG5zJyxcbiAgICB1cmk6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgfSxcbiAgeGxpbms6IHtcbiAgICBuYW1lOiAneG1sbnM6eGxpbmsnLFxuICAgIHVyaTogJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnXG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5hbWVzcGFjZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbn0pO1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgb2JqZWN0VG9BdHRyc1N0cmluZyA9IGZ1bmN0aW9uIChhdHRycykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cnMpLm1hcChmdW5jdGlvbiAoYXR0cikge1xuICAgIHZhciB2YWx1ZSA9IGF0dHJzW2F0dHJdLnRvU3RyaW5nKCkucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuICAgIHJldHVybiAoYXR0ciArIFwiPVxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCIpO1xuICB9KS5qb2luKCcgJyk7XG59O1xuXG52YXIgc3ZnID0gbmFtZXNwYWNlc18xLnN2ZztcbnZhciB4bGluayA9IG5hbWVzcGFjZXNfMS54bGluaztcblxudmFyIGRlZmF1bHRBdHRycyA9IHt9O1xuZGVmYXVsdEF0dHJzW3N2Zy5uYW1lXSA9IHN2Zy51cmk7XG5kZWZhdWx0QXR0cnNbeGxpbmsubmFtZV0gPSB4bGluay51cmk7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb250ZW50XVxuICogQHBhcmFtIHtPYmplY3R9IFthdHRyaWJ1dGVzXVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgd3JhcEluU3ZnU3RyaW5nID0gZnVuY3Rpb24gKGNvbnRlbnQsIGF0dHJpYnV0ZXMpIHtcbiAgaWYgKCBjb250ZW50ID09PSB2b2lkIDAgKSBjb250ZW50ID0gJyc7XG5cbiAgdmFyIGF0dHJzID0gZGVlcG1lcmdlKGRlZmF1bHRBdHRycywgYXR0cmlidXRlcyB8fCB7fSk7XG4gIHZhciBhdHRyc1JlbmRlcmVkID0gb2JqZWN0VG9BdHRyc1N0cmluZyhhdHRycyk7XG4gIHJldHVybiAoXCI8c3ZnIFwiICsgYXR0cnNSZW5kZXJlZCArIFwiPlwiICsgY29udGVudCArIFwiPC9zdmc+XCIpO1xufTtcblxudmFyIEJyb3dzZXJTcHJpdGVTeW1ib2wgPSAoZnVuY3Rpb24gKFNwcml0ZVN5bWJvbCQkMSkge1xuICBmdW5jdGlvbiBCcm93c2VyU3ByaXRlU3ltYm9sICgpIHtcbiAgICBTcHJpdGVTeW1ib2wkJDEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGlmICggU3ByaXRlU3ltYm9sJCQxICkgQnJvd3NlclNwcml0ZVN5bWJvbC5fX3Byb3RvX18gPSBTcHJpdGVTeW1ib2wkJDE7XG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggU3ByaXRlU3ltYm9sJCQxICYmIFNwcml0ZVN5bWJvbCQkMS5wcm90b3R5cGUgKTtcbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCcm93c2VyU3ByaXRlU3ltYm9sO1xuXG4gIHZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGlzTW91bnRlZDoge30gfTtcblxuICBwcm90b3R5cGVBY2Nlc3NvcnMuaXNNb3VudGVkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISF0aGlzLm5vZGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuICAgKiBAcmV0dXJuIHtCcm93c2VyU3ByaXRlU3ltYm9sfVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5jcmVhdGVGcm9tRXhpc3RpbmdOb2RlID0gZnVuY3Rpb24gY3JlYXRlRnJvbUV4aXN0aW5nTm9kZSAobm9kZSkge1xuICAgIHJldHVybiBuZXcgQnJvd3NlclNwcml0ZVN5bWJvbCh7XG4gICAgICBpZDogbm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJyksXG4gICAgICB2aWV3Qm94OiBub2RlLmdldEF0dHJpYnV0ZSgndmlld0JveCcpLFxuICAgICAgY29udGVudDogbm9kZS5vdXRlckhUTUxcbiAgICB9KTtcbiAgfTtcblxuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICB0aGlzLnVubW91bnQoKTtcbiAgICB9XG4gICAgU3ByaXRlU3ltYm9sJCQxLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudHxzdHJpbmd9IHRhcmdldFxuICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUubW91bnQgPSBmdW5jdGlvbiBtb3VudCAodGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cblxuICAgIHZhciBtb3VudFRhcmdldCA9IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpIDogdGFyZ2V0O1xuICAgIHZhciBub2RlID0gdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuXG4gICAgbW91bnRUYXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICovXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAoKSB7XG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLnN0cmluZ2lmeSgpO1xuICAgIHJldHVybiBwYXJzZSh3cmFwSW5TdmdTdHJpbmcoY29udGVudCkpLmNoaWxkTm9kZXNbMF07XG4gIH07XG5cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUudW5tb3VudCA9IGZ1bmN0aW9uIHVubW91bnQgKCkge1xuICAgIHRoaXMubm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxuICByZXR1cm4gQnJvd3NlclNwcml0ZVN5bWJvbDtcbn0oU3ByaXRlU3ltYm9sKSk7XG5cbnJldHVybiBCcm93c2VyU3ByaXRlU3ltYm9sO1xuXG59KSkpO1xuIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sLmpzXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZC5qc1wiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiaWNvbnM4LWNsb3VkLTUwXCIsXG4gIFwidXNlXCI6IFwiaWNvbnM4LWNsb3VkLTUwLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAxMDAgMTAwXCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgaWQ9XFxcImljb25zOC1jbG91ZC01MFxcXCI+PHBhdGggZD1cXFwiTTIxLjA2ODAwMDgsODRjLTAuMTUwOTk5MSwwLTAuMzAxMDAwNi0wLjAwNDk5NzMtMC40NTAwMDA4LTAuMDE1OTk4OCBjLTguNjY2OTk5OC0wLjI0NDAwMzMtMTUuNjg3MDAwMy03LjQ2NzAwMjktMTUuNjg3MDAwMy0xNi4xOTEwMDE5YzAtNi42MTcwMDA2LDQuMDA2MDAwNS0xMi40MTc5OTkzLDkuODI0MDAwNC0xNC45MDY5OTc3IGMwLjMyNDk5OTgtMi42MTcwMDA2LDEuMjI1MDAwNC01LjE1ODAwMDksMi42OTI5OTk4LTcuNTkxOTk5MWMyLjc5ODk5OTgtNC42NDQwMDEsNy4zMDUwMDAzLTcuODkyMDAyMSwxMi4zNjEwMDAxLTguOTA5OTk5OCBDMzEuMDg2MDAwNCwzNi4xMjkwMDE2LDMyLjM4MiwzNiwzMy42NjQwMDE1LDM2YzAuMDY5OTk5NywwLDAuMTM5OTk5NCwwLDAuMjA4OTk5NiwwLjAwMDk5OTUgYzEuODQ1MDAxMi00LjYwMjAwMTIsNS4wMjUwMDE1LTguNTQ4OTk5OCw5LjIzNTAwMDYtMTEuMzgxMDAwNWM0LjEwNTk5OS0yLjc2MDk5OTcsOC44NzMwMDExLTQuMjIxMDAwNywxMy43ODkwMDE1LTQuMjIxMDAwNyBjMi40NTUwMDE4LDAsNC45MzUwMDE0LDAuMzYxOTk5NSw3LjM3MDAwMjcsMS4wNzUwMDA4YzcuMzA5OTk3NiwyLjEzOTk5OTQsMTMuMjUyOTk4NCw3LjcxMjk5OTMsMTUuOTAwMDAxNSwxNC45MDkwMDA0IGMwLjkwODk5NjYsMi40NzQ5OTg1LDEuNDQwMDAyNCw1LjA0MDAwMDksMS41ODMwMDAyLDcuNjA0MDAwMWMxLjg4ODAwMDUsMC4yNTk5OTgzLDMuNzUyOTk4NCwwLjc5Mjk5OTMsNS41NjkwMDAyLDEuNTk0MDAxOCBjNS4zMzQ5OTkxLDIuMzQ5OTk4NSw5LjQ0MjAwMTMsNy4wOTk5OTg1LDEwLjk4Nzk5OSwxMi43MDYwMDEzYzEuNzEyOTk3NCw2LjIxNzAwMjksMC41MjQwMDIxLDEyLjY3MDk5NzYtMy4yNjMwMDA1LDE3LjcwODAwMDIgYy0zLjY3NTAwMzEsNC44ODcwMDEtOS4yNTU5OTY3LDcuNzkxMDAwNC0xNS4zMzY5OTgsNy45ODc5OTlDNzkuNTQ2OTk3MSw4My45OTQwMDMzLDc5LjM4NjAwMTYsODQsNzkuMjI0OTk4NSw4NEgyMS4wNjgwMDA4elxcXCIgb3BhY2l0eT1cXFwiLjM1XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiNGMkYyRjJcXFwiIGQ9XFxcIk0xOS4wNjgwMDA4LDgyYy0wLjE1MDk5OTEsMC0wLjMwMTAwMDYtMC4wMDQ5OTczLTAuNDUwMDAwOC0wLjAxNTk5ODggQzkuOTUxOTk5Nyw4MS43NDA5OTczLDIuOTMxOTk5OSw3NC41MTY5OTgzLDIuOTMxOTk5OSw2NS43OTM5OTg3YzAtNi42MTcwMDA2LDQuMDA1OTk5Ni0xMi40MTc5OTkzLDkuODI0MDAwNC0xNC45MDY5OTc3IGMwLjMyNDk5OTgtMi42MTcwMDA2LDEuMjI1MDAwNC01LjE1ODAwMDksMi42OTI5OTk4LTcuNTkxOTk5MWMyLjc5OTAwMDctNC42NDQwMDEsNy4zMDQ5OTk0LTcuODkyMDAyMSwxMi4zNjEwMDEtOC45MDk5OTk4IEMyOS4wODYwMDA0LDM0LjEyOTAwMTYsMzAuMzgyLDM0LDMxLjY2Mzk5OTYsMzRjMC4wNjk5OTk3LDAsMC4xMzk5OTk0LDAsMC4yMDg5OTk2LDAuMDAwOTk5NSBjMS44NDQ5OTkzLTQuNjAyMDAxMiw1LjAyNDk5OTYtOC41NDg5OTk4LDkuMjM0OTk4Ny0xMS4zODEwMDA1YzQuMTA1OTk5LTIuNzYwOTk5Nyw4Ljg3MzAwMTEtNC4yMjEwMDA3LDEzLjc4ODk5NzctNC4yMjEwMDA3IGMyLjQ1NTAwMTgsMCw0LjkzNTAwMTQsMC4zNjE5OTk1LDcuMzY5OTk4OSwxLjA3NTAwMDhjNy4zMTAwMDE0LDIuMTM5OTk5NCwxMy4yNTMwMDIyLDcuNzEyOTk5MywxNS44OTk5OTc3LDE0LjkwOTAwMDQgYzAuOTA4OTk2NiwyLjQ3NDk5ODUsMS40NDAwMDI0LDUuMDQwMDAwOSwxLjU4MzAwMDIsNy42MDQwMDAxYzEuODg4MDAwNSwwLjI1OTk5ODMsMy43NTI5OTg0LDAuNzkyOTk5Myw1LjU2OTAwMDIsMS41OTQwMDE4IGM1LjMzNDk5OTEsMi4zNDk5OTg1LDkuNDQyMDAxMyw3LjA5OTk5ODUsMTAuOTg3OTk5LDEyLjcwNjAwMTNjMS43MTI5OTc0LDYuMjE2OTk5MSwwLjUyNDAwMjEsMTIuNjcwOTk3Ni0zLjI2MzAwMDUsMTcuNzA4MDAwMiBjLTMuNjc1MDAzMSw0Ljg4NzAwMS05LjI1NTk5NjcsNy43OTEwMDA0LTE1LjMzNjk5OCw3Ljk4Nzk5OUM3Ny41NDY5OTcxLDgxLjk5NDAwMzMsNzcuMzg2MDAxNiw4Miw3Ny4yMjQ5OTg1LDgySDE5LjA2ODAwMDh6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiM3MEJGRkZcXFwiIGQ9XFxcIk04Mi45NTMwMDI5LDQ5LjI0NTk5ODRjLTMuNzE3MDAyOS0xLjYzODAwMDUtNy4yNjg5OTcyLTEuNTMwOTk4Mi0xMC4zNDEwMDM0LTAuNDE1MDAwOSBjMS4yMTgwMDIzLTMuNzkxOTk5OCwxLjI5NTk5NzYtOC4wOTc5OTk2LTAuMzQyMDAyOS0xMi41NTQwMDA5Yy0xLjk1MDk5NjQtNS4zMDY5OTkyLTYuMzQxMDAzNC05LjQ0MjAwMTMtMTEuNzQzLTExLjAyNDAwMDIgYy0xMS45NDQwMDAyLTMuNDk3OTk5Mi0yMi44NzI5OTczLDQuNzUyMDAwOC0yNC4wMDk5OTgzLDE1LjkxOTAwMDZjLTIuMjY1OTk4OC0wLjk3NDk5ODUtNC44Njk5OTg5LTEuMzEwMDAxNC03LjU5MDAwMDItMC43NjMwMDA1IGMtMy40MzE5OTkyLDAuNjg5OTk4Ni02LjM1NDAwMDEsMi45NDkwMDEzLTguMTY4OTk4Nyw1Ljk1ODk5OTZjLTIuMDczOTk5NCwzLjQ0MTAwMTktMi4yNDIwMDA2LDYuNjM5OTk5NC0xLjU2Mjk5OTcsOS41MTAwMDIxIGMtMC4xMTgtMC4wMDQwMDE2LTAuMjMzOTk5My0wLjAxODAwMTYtMC4zNTMwMDA2LTAuMDE4MDAxNmMtNS4zODk5OTk0LDAtOS43NTg5OTk4LDQuMzk1MDAwNS05Ljc1ODk5OTgsOS44MTU5OTgxIGMwLDUuNDE5OTk4Miw0LjM2OCw5LjgxNDAwMyw5Ljc1NTk5OTYsOS44MTYwMDE5TDE4LjgzNzk5OTMsNzUuNWg1OC41ODMwMDAybC0wLjAwMDk5OTUtMC4wMDkwMDI3IGM4LjczMzAwMTctMC4xMTAwMDA2LDE1LjQ5NzAwMTYtOC40NDY5OTg2LDEyLjk1NjAwMTMtMTcuNjY2MDAwNCBDODkuMzIzOTk3NSw1NC4wMDc5OTk0LDg2LjU1OTk5NzYsNTAuODM1OTk4NSw4Mi45NTMwMDI5LDQ5LjI0NTk5ODR6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiM0MDM5NkVcXFwiIGQ9XFxcIk03Ny40MjA5OTc2LDc3SDE4LjgzNzk5OTNjLTAuMDYxMDAwOCwwLTAuMTIwMDAwOC0wLjAwMjk5ODQtMC4xODAwMDAzLTAuMDExMDAxNiBjLTYuMTIzMDAwMS0wLjA5OTk5ODUtMTEuMDc0OTk5OC01LjEzODAwMDUtMTEuMDc0OTk5OC0xMS4zMTQwMDNjMC01Ljc1Nzk5OTQsNC4zMDA5OTk2LTEwLjUyNTAwMTUsOS44NDM5OTg5LTExLjIyNzAwMTIgYy0wLjM0MDAwMDItMy4wNjI5OTk3LDAuMzQ2MDAwNy02LjAzNDAwMDQsMi4wNDcwMDA5LTguODU0OTk5NWMyLjA5Nzk5OTYtMy40Nzk5OTk1LDUuNDM2MDAwOC01LjkwNTk5ODIsOS4xNTY5OTk2LTYuNjU0OTk4OCBjMi4yNS0wLjQ1MTk5OTcsNC41MjIwMDEzLTAuMzc0MDAwNSw2LjY3MDk5OTUsMC4yMjAwMDEyYzEuMDI1MDAxNS01LjIxOTAwMTgsNC4wNjQ5OTg2LTkuODIxOTk4Niw4LjUyODk5OTMtMTIuODI1MDAwOCBjNS4wMzEwMDItMy4zODQwMDA4LDExLjEwNzk5NzktNC4yNzc5OTk5LDE3LjExNzAwMDYtMi41MTkwMDFjNS44NTA5OTc5LDEuNzEyOTk5MywxMC42MDgwMDE3LDYuMTc5MDAwOSwxMi43MjkwMDM5LDExLjk0NTk5OTEgYzEuMzI1OTk2NCwzLjYxMDAwMDYsMS42NjQwMDE1LDcuMzU0OTk5NSwxLjAwMzk5NzgsMTAuOTY5MDAxOGMyLjk1NDAwMjQtMC41MTkwMDEsNS45NzU5OTc5LTAuMTMyOTk5NCw4Ljg3NTk5OTUsMS4xNDUwMDA1IGM0LjAxMzk5OTksMS43NjkwMDEsNy4xMDM5OTYzLDUuMzM5MDAwNyw4LjI2NDk5OTQsOS41NTE5OTgxYzEuMzEwOTk3LDQuNzU3LDAuNDEyMDAyNiw5LjY3OTAwMDktMi40NjM5OTY5LDEzLjUwNDk5NzMgYy0yLjgxNzAwMTMsMy43NDcwMDE2LTcuMDkzMDAyMyw1Ljk0Nzk5OC0xMS43NTA5OTk1LDYuMDU2OTk5MkM3Ny41NDU5OTc2LDc2Ljk5NjAwMjIsNzcuNDgzMDAxNyw3Nyw3Ny40MjA5OTc2LDc3eiBNMTkuMDA3LDc0IGg1OC4yNTIwMDI3YzAuMDQ2OTk3MS0wLjAwNDk5NzMsMC4wOTUwMDEyLTAuMDA4MDAzMiwwLjE0Mjk5NzctMC4wMDkwMDI3IGMzLjc4NjAwMzEtMC4wNDY5OTcxLDcuMjcxMDAzNy0xLjgxOTk5OTcsOS41NTg5OTgxLTQuODYyOTk5YzIuMzEzMDAzNS0zLjA3NTk5NjQsMy4wMzA5OTgyLTcuMDUwOTk4NywxLjk3MDAwMTItMTAuOTA0OTk4OCBjLTAuOTI0MDAzNi0zLjM1MzAwMDYtMy4zODUwMDIxLTYuMTk0OTk5Ny02LjU4MjAwMDctNy42MDQwMDAxaC0wLjAwMDk5OTUgYy0zLjA3NTk5NjQtMS4zNTU5OTktNi4xODA5OTk4LTEuNDgzMDAxNy05LjIyMjk5OTYtMC4zNzc5OTg0Yy0wLjUzOTAwMTUsMC4xOTQ5OTk3LTEuMTQwOTk4OCwwLjA2ODAwMDgtMS41NTMwMDE0LTAuMzI4OTk4NiBjLTAuNDEzMDAyLTAuMzk2OTk5NC0wLjU2MzAwMzUtMC45OTM5OTk1LTAuMzg4MDAwNS0xLjUzOTAwMTVDNzIuMzgyOTk1Niw0NC42MzYwMDE2LDcyLjI3Mjk5NSw0MC42MzIsNzAuODYxOTk5NSwzNi43OTUwMDIgYy0xLjc5Mjk5OTMtNC44NzgwMDAzLTUuODE0MDAzLTguNjU0OTk4OC0xMC43NTctMTAuMTAyMDAxMmMtNS4xMzYwMDE2LTEuNTA0OTk5Mi0xMC4zMjE5OTg2LTAuNzQ3OTk5Mi0xNC41OTg5OTksMi4xMjg5OTk3IGMtNC4yNDU5OTg0LDIuODU2MDAwOS02Ljk3OTAwMDEsNy40MTM5OTk2LTcuNDk3MDAxNiwxMi41MDIwMDA4Yy0wLjA0ODAwMDMsMC40NzYwMDE3LTAuMzE5OTk5NywwLjg5ODk5ODMtMC43MzE5OTg0LDEuMTQwOTk4OCBjLTAuNDEwOTk5MywwLjI0MjAwMDYtMC45MTUwMDA5LDAuMjczOTk4My0xLjM1MzAwMDYsMC4wODQ5OTkxYy0yLjA5Mjk5ODUtMC45MDEwMDEtNC40MDkwMDA0LTEuMTMyLTYuNzAxMDAwMi0wLjY2OTk5ODIgYy0yLjg5ODAwMDcsMC41ODMwMDAyLTUuNTE1OTk4OCwyLjUwMDk5OTUtNy4xODAwMDAzLDUuMjYzMDAwNWMtMS42MzEwMDA1LDIuNzA0OTk4LTIuMDg0OTk5MSw1LjQ0OTAwMTMtMS4zODgwMDA1LDguMzg5OTk5NCBjMC4xMDcwMDA0LDAuNDU2MDAxMy0wLjAwMzk5OTcsMC45MzYwMDA4LTAuMzAxMDAwNiwxLjI5ODAwMDNzLTAuNzQzOTk5NSwwLjU1Nzk5ODctMS4yMTUwMDAyLDAuNTQ3MDAwOWwtMC4yOTgwMDAzLTAuMDE2OTk4MyBjLTQuNTUzOTk5OSwwLTguMjU4OTk5OCwzLjcyOTk5OTUtOC4yNTg5OTk4LDguMzE0OTk4NmMwLDQuNTgzOTk5NiwzLjcwMzk5OTUsOC4zMTQwMDMsOC4yNTgwMDA0LDguMzE2MDAxOSBDMTguODk1OTk5OSw3My45OTA5OTczLDE4Ljk1MTAwMDIsNzMuOTk0MDAzMywxOS4wMDcsNzR6XFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2wiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2wuanNcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkLmpzXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJpY29uczgtY2xvdWRzLTUwXCIsXG4gIFwidXNlXCI6IFwiaWNvbnM4LWNsb3Vkcy01MC11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAwIDEwMFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIGlkPVxcXCJpY29uczgtY2xvdWRzLTUwXFxcIj48cGF0aCBkPVxcXCJNODAuNTcyLDMzLjM3OEM3OC4zOTgsMjEuNzkzLDY4LjIwNywxMyw1NiwxM1xcdGMtMTAuNDg5LDAtMTkuNjU4LDYuNTAzLTIzLjMxMywxNmMtOS45NCwwLjAzMi0xOC4xMzEsNy42MzgtMTkuMDkyLDE3LjMzN0M3LjkwNCw0OC44MjgsNCw1NC41MTcsNCw2MVxcdGMwLDguNDc0LDYuNjIyLDE1LjQzMSwxNC45NjIsMTUuOTY3QzIxLjQ4Nyw4NC41NTUsMjguNjgyLDkwLDM3LDkwaDM4YzkuMzc0LDAsMTctNy42MjYsMTctMTdjMC0wLjc2MS0wLjA1MS0xLjUxNy0wLjE1MS0yLjI2NFxcdEM5Ni4wNjMsNjYuNjI0LDk4LjUsNjAuOTU0LDk4LjUsNTVDOTguNSw0NC4yNiw5MC43NjUsMzUuMjkyLDgwLjU3MiwzMy4zNzh6XFxcIiBvcGFjaXR5PVxcXCIuMzVcXFwiIC8+PHBhdGggZmlsbD1cXFwiI2YyZjJmMlxcXCIgZD1cXFwiTTc4LjU3MiwzMS4zNzhDNzYuMzk4LDE5Ljc5Myw2Ni4yMDcsMTEsNTQsMTFjLTEwLjQ4OSwwLTE5LjY1OCw2LjUwMy0yMy4zMTMsMTZcXHRjLTkuOTQsMC4wMzItMTguMTMxLDcuNjM4LTE5LjA5MiwxNy4zMzdDNS45MDQsNDYuODI4LDIsNTIuNTE3LDIsNTljMCw4LjQ3NCw2LjYyMiwxNS40MzEsMTQuOTYyLDE1Ljk2N1xcdEMxOS40ODcsODIuNTU1LDI2LjY4Miw4OCwzNSw4OGgzOGM5LjM3NCwwLDE3LTcuNjI2LDE3LTE3YzAtMC43NjEtMC4wNTEtMS41MTctMC4xNTEtMi4yNjRDOTQuMDYzLDY0LjYyNCw5Ni41LDU4Ljk1NCw5Ni41LDUzXFx0Qzk2LjUsNDIuMjYsODguNzY1LDMzLjI5Miw3OC41NzIsMzEuMzc4elxcXCIgLz48cGF0aCBmaWxsPVxcXCIjNzBiZmZmXFxcIiBkPVxcXCJNOTAsNTNjMC04LjU2LTYuOTQtMTUuNS0xNS41LTE1LjVjLTAuNzA4LDAtMS40LDAuMDY0LTIuMDg0LDAuMTU2QzcyLjQ2NSwzNy4xMSw3Mi41LDM2LjU1OSw3Mi41LDM2XFx0YzAtMTAuMjE3LTguMjgzLTE4LjUtMTguNS0xOC41Yy05LjY5NSwwLTE3LjYzNCw3LjQ2MS0xOC40MjIsMTYuOTUzYy0xLjQ5LTAuNjEtMy4xMTgtMC45NTMtNC44MjgtMC45NTNcXHRDMjMuNzA4LDMzLjUsMTgsMzkuMjA4LDE4LDQ2LjI1YzAsMS4xMzMsMC4xNjIsMi4yMjYsMC40NCwzLjI3MkMxOC4yOTMsNDkuNTE2LDE4LjE0OCw0OS41LDE4LDQ5LjVjLTUuMjQ3LDAtOS41LDQuMjUzLTkuNSw5LjVcXHRzNC4yNTMsOS41LDkuNSw5LjVoNC41MjVDMjIuNTE5LDY4LjY2NywyMi41LDY4LjgzMSwyMi41LDY5YzAsNi45MDQsNS41OTYsMTIuNSwxMi41LDEyLjVoMzhjNS43OTksMCwxMC41LTQuNzAxLDEwLjUtMTAuNVxcdGMwLTEuNjgyLTAuNDA2LTMuMjY3LTEuMTA5LTQuNjc2Qzg2Ljk0MSw2My42MjMsOTAsNTguNjc1LDkwLDUzelxcXCIgLz48cGF0aCBmaWxsPVxcXCIjZDllZWZmXFxcIiBkPVxcXCJNODIsNzFjMCw0Ljk2LTQuMDQsOS05LDlIMzVjLTYuMDcsMC0xMS00LjkzLTExLTExczQuOTMtMTEsMTEtMTFjMC42NiwwLDEuMzUsMC4wNywyLjA1LDAuMlxcdHMxLjQtMC4yNSwxLjY3LTAuOTFDNDEuMjYsNTEuMDQsNDcuMjYsNDcsNTQsNDdjOC4xMSwwLDE0Ljk1LDUuODEsMTYuMjYsMTMuODJjMC4xMywwLjgsMC44NiwxLjM1LDEuNjYsMS4yNVxcdEM3Mi4zMyw2Mi4wMiw3Mi42OCw2Miw3Myw2MkM3Ny45Niw2Miw4Miw2Ni4wNCw4Miw3MXpcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzQwMzk2ZVxcXCIgZD1cXFwiTTczLDgzSDM1Yy03LjM4MywwLTEzLjQ1LTUuNzQ1LTEzLjk2NS0xM0gxOGMtNi4wNjUsMC0xMS00LjkzNS0xMS0xMVxcdGMwLTUuNiw0LjIwNy0xMC4yMzUsOS42MjUtMTAuOTE0Yy0wLjA4My0wLjYxNy0wLjEyNS0xLjIyOS0wLjEyNS0xLjgzNkMxNi41LDM4LjM5MywyMi44OTMsMzIsMzAuNzUsMzJcXHRjMS4yMTYsMCwyLjQxNCwwLjE1MywzLjU3OSwwLjQ1N0MzNi4wMiwyMy4wOTEsNDQuMzIsMTYsNTQsMTZjMTEuMDI4LDAsMjAsOC45NzIsMjAsMjBjMCwwLjAwMywwLDAuMDA2LDAsMC4wMDlcXHRDNzQuMTY5LDM2LjAwMyw3NC4zMzUsMzYsNzQuNSwzNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3YzAsNS41MTgtMi43NCwxMC43MjctNy4yMzEsMTMuODk0Qzg0Ljc1NSw2OC4yMTEsODUsNjkuNTg3LDg1LDcxXFx0Qzg1LDc3LjYxNyw3OS42MTcsODMsNzMsODN6IE0xOCw1MWMtNC40MTEsMC04LDMuNTg5LTgsOHMzLjU4OSw4LDgsOGg0LjUyNWMwLjQwOSwwLDAuNzk5LDAuMTY3LDEuMDgyLDAuNDYxXFx0YzAuMjgzLDAuMjk1LDAuNDM0LDAuNjkyLDAuNDE3LDEuMTAxbC0wLjAxNCwwLjIzNEMyNC4wMDYsNjguODYzLDI0LDY4LjkzMSwyNCw2OWMwLDYuMDY1LDQuOTM1LDExLDExLDExaDM4YzQuOTYyLDAsOS00LjAzNyw5LTlcXHRjMC0xLjM5NC0wLjMyLTIuNzQxLTAuOTUxLTQuMDA2Yy0wLjM1MS0wLjcwMy0wLjA5OS0xLjU1OSwwLjU3Ny0xLjk2Qzg1LjkzLDYyLjQ3OSw4OC41LDU3Ljk3OSw4OC41LDUzYzAtNy43Mi02LjI4LTE0LTE0LTE0XFx0Yy0wLjU2LDAtMS4xNTgsMC4wNDUtMS44ODQsMC4xNDNjLTAuNDUyLDAuMDU4LTAuOTA3LTAuMDg4LTEuMjM2LTAuNDAyYy0wLjMzLTAuMzE0LTAuNDk4LTAuNzYyLTAuNDU4LTEuMjE2XFx0QzcwLjk3NSwzNi45MjUsNzEsMzYuNDQsNzEsMzZjMC05LjM3NC03LjYyNi0xNy0xNy0xN2MtOC43NjcsMC0xNi4yMDIsNi44NDMtMTYuOTI3LDE1LjU3N2MtMC4wNCwwLjQ3Ny0wLjMwNCwwLjkwNS0wLjcxMSwxLjE1NVxcdGMtMC40MDksMC4yNS0wLjkxMSwwLjI4OS0xLjM1MywwLjEwOEMzMy42NDksMzUuMjgzLDMyLjIxNiwzNSwzMC43NSwzNWMtNi4yMDMsMC0xMS4yNSw1LjA0Ny0xMS4yNSwxMS4yNVxcdGMwLDAuOTQyLDAuMTMxLDEuOTE0LDAuMzg5LDIuODg4YzAuMTIzLDAuNDYyLDAuMDE4LDAuOTU1LTAuMjgzLDEuMzI3Yy0wLjMsMC4zNzEtMC43NSwwLjU3Ny0xLjIzNywwLjU1NmwtMC4xOS0wLjAxMVxcdEMxOC4xMiw1MS4wMDUsMTguMDYxLDUxLDE4LDUxelxcXCIgLz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sLmpzXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZC5qc1wiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiaWNvbnM4LWhhemUtNTBcIixcbiAgXCJ1c2VcIjogXCJpY29uczgtaGF6ZS01MC11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAwIDEwMFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIGlkPVxcXCJpY29uczgtaGF6ZS01MFxcXCI+PHBhdGggZD1cXFwiTTk0LjkzNyw0NS43MjdsLTUuODM5LTIuNzY2YzEuMjU1LTEuODc2LDEuNTk2LTQuMjU3LDAuODc1LTYuNDJcXHRjLTAuODI1LTIuNDk3LTIuOTM4LTQuMzc3LTUuNTExLTQuOTA2bC0wLjU5Ni0wLjEyMmwyLjE5OC02LjE1NGMxLjEwMi0zLjA4LTAuMjE2LTYuNDY0LTMuMTItOC4wNFxcdGMtMC45NTEtMC41Mi0yLjAyNi0wLjc5NC0zLjExLTAuNzk0Yy0wLjc4NSwwLTEuNTU2LDAuMTQxLTIuMjgsMC40MTRsLTUuNjgxLDIuMTI3TDY5LDIwLjE3OWMtMC43MTgtMy40NjItMC44MjQtNy4wMjUtNC4zNjItNy4wMjVcXHRjLTEuMzczLDAtMi43MDgsMC4zODUtMy44NTksMS4wOTdsLTQuMTU3LTAuMjA2Yy0xLjA5Ny0yLjE5NC0xLjk5Ni04Ljk3OS00LjQ3Mi05LjAzN2wtMC4xMTYtMC4wMDFcXHRjLTIuNDIsMC00LjY0NiwxLjMyOC01Ljg0NCwzLjUyN2wtMy4xMTIsNS45MTRjLTEuMjIyLTAuODQtMi42NjgtMS4yOTQtNC4xNTktMS4yOTRjLTMuNTM5LDAtNi41MTMsMi40MTktNy4yMyw1Ljg4NmwtMC4wMjQsMC4xMTlcXHRsLTYuMzAyLTIuMjVjLTAuNzAxLTAuMjQ5LTEuNDMzLTAuMzc1LTIuMTc2LTAuMzc1Yy0wLjQzNCwwLTAuODY5LDAuMDQ0LTEuMjk5LDAuMTMxbC0wLjEwMiwwLjAyMVxcdGMtMS4yMTYsMC4yNDctMi4zMzEsMC44MzQtMy4yMjUsMS42OTdjLTEuODEyLDEuNzUxLTIuNDY3LDQuMzI5LTEuNzE4LDYuNzA3bDIuMDQ2LDYuNTljLTIuNTExLDAuNTg5LTQuNDg2LDIuMzk0LTUuMzIsNC44OTZcXHRjLTAuNjc1LDIuMDg0LTAuMzc4LDQuMzU3LDAuNzU4LDYuMTgzbC02LjI2NSwyLjk2N2MtMi4yNDEsMS4wNjItMy42NjYsMy4yNjItMy43MTcsNS43NDFjLTAuMDUxLDIuNDgzLDEuMjg0LDQuNzQsMy40OCw1Ljg5XFx0bDQuNzY1LDIuNDk5QzEyLjIwNCw2MS4wMTQsMTIsNjIuMjQxLDEyLDYzLjVjMCwwLjcsMC4wNjIsMS4zOTIsMC4xODUsMi4wNjdDMTAuMTg3LDY3LjY2NSw5LDcwLjQ4OSw5LDczLjVcXHRjMCw1Ljg2Miw0LjQwOSwxMC43MTUsMTAuMDg2LDExLjQxNEMxOS43ODUsOTAuNTkxLDI0LjYzOCw5NSwzMC41LDk1aDM3YzUuODM1LDAsMTAuNjY5LTQuMzY4LDExLjQwMy0xMC4wMDdcXHRDODUuMDU5LDg0Ljc3OSw5MCw3OS43MDYsOTAsNzMuNWMwLTEuNjM3LTAuMzU1LTMuMjI5LTEuMDA4LTQuNjgxYzAuNDIxLTAuNTgzLDAuNzU1LTEuMjIyLDAuOTc4LTEuODk2XFx0YzAuNzQ4LTIuMjQ4LDAuMzU5LTQuNzE5LTEuMDAxLTYuNjIxbDUuOTctMi44MjhjMi4yNTctMS4wNywzLjcxNi0zLjM3NiwzLjcxNi01Ljg3NFM5Ny4xOTUsNDYuNzk3LDk0LjkzNyw0NS43Mjd6XFxcIiBvcGFjaXR5PVxcXCIuMzVcXFwiIC8+PHBhdGggZmlsbD1cXFwiI2YyZjJmMlxcXCIgZD1cXFwiTTkyLjkzNyw0My43MjdsLTUuODM5LTIuNzY2YzEuMjU1LTEuODc2LDEuNTk2LTQuMjU3LDAuODc1LTYuNDJcXHRjLTAuODI1LTIuNDk3LTIuOTM4LTQuMzc3LTUuNTExLTQuOTA2bC0wLjU5Ni0wLjEyMmwyLjE5OC02LjE1NGMxLjEwMi0zLjA4LTAuMjE2LTYuNDY0LTMuMTItOC4wNFxcdGMtMC45NTEtMC41Mi0yLjAyNi0wLjc5NC0zLjExLTAuNzk0Yy0wLjc4NSwwLTEuNTU2LDAuMTQxLTIuMjgsMC40MTRsLTUuNjgxLDIuMTI3bC0wLjAwNy0wLjAzMlxcdGMtMC43MTgtMy40NjItMy42OTEtNS44NzktNy4yMjktNS44NzljLTEuMzczLDAtMi43MDgsMC4zODUtMy44NTksMS4wOTdMNTUuOTQsNi42NThjLTEuMDk3LTIuMTk0LTMuMzE1LTMuNTkzLTUuNzkxLTMuNjVcXHRsLTAuMTE2LTAuMDAxYy0yLjQyLDAtNC42NDYsMS4zMjgtNS44NDQsMy41MjdsLTMuMTEyLDUuOTE0Yy0xLjIyMi0wLjg0LTIuNjY4LTEuMjk0LTQuMTU5LTEuMjk0Yy0zLjUzOSwwLTYuNTEzLDIuNDE5LTcuMjMsNS44ODZcXHRsLTAuMDI0LDAuMTE5bC02LjMwMi0yLjI1Yy0wLjcwMS0wLjI0OS0xLjQzMy0wLjM3NS0yLjE3Ni0wLjM3NWMtMC40MzQsMC0wLjg2OSwwLjA0NC0xLjI5OSwwLjEzMWwtMC4xMDIsMC4wMjFcXHRjLTEuMjE2LDAuMjQ3LTIuMzMxLDAuODM0LTMuMjI1LDEuNjk3Yy0xLjgxMiwxLjc1MS0yLjQ2Nyw0LjMyOS0xLjcxOCw2LjcwN2wyLjA0Niw2LjU5Yy0yLjUxMSwwLjU4OS00LjQ4NiwyLjM5NC01LjMyLDQuODk2XFx0Yy0wLjY3NSwyLjA4NC0wLjM3OCw0LjM1NywwLjc1OCw2LjE4M2wtNi4yNjUsMi45NjdjLTIuMjQxLDEuMDYyLTMuNjY2LDMuMjYyLTMuNzE3LDUuNzQxYy0wLjA1MSwyLjQ4MywxLjI4NCw0Ljc0LDMuNDgsNS44OVxcdGw0Ljc2NSwyLjQ5OUMxMC4yMDQsNTkuMDE0LDEwLDYwLjI0MSwxMCw2MS41YzAsMC43LDAuMDYyLDEuMzkyLDAuMTg1LDIuMDY3QzguMTg3LDY1LjY2NSw3LDY4LjQ4OSw3LDcxLjVcXHRjMCw1Ljg2Miw0LjQwOSwxMC43MTUsMTAuMDg2LDExLjQxNEMxNy43ODUsODguNTkxLDIyLjYzOCw5MywyOC41LDkzaDM3YzUuODM1LDAsMTAuNjY5LTQuMzY4LDExLjQwMy0xMC4wMDdcXHRDODMuMDU5LDgyLjc3OSw4OCw3Ny43MDYsODgsNzEuNWMwLTEuNjM3LTAuMzU1LTMuMjI5LTEuMDA4LTQuNjgxYzAuNDIxLTAuNTgzLDAuNzU1LTEuMjIyLDAuOTc4LTEuODk2XFx0YzAuNzQ4LTIuMjQ4LDAuMzU5LTQuNzE5LTEuMDAxLTYuNjIxbDUuOTctMi44MjhjMi4yNTctMS4wNywzLjcxNi0zLjM3NiwzLjcxNi01Ljg3NFM5NS4xOTUsNDQuNzk3LDkyLjkzNyw0My43Mjd6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiNmZmM1NzFcXFwiIGQ9XFxcIk03Ny43MTYsNTcuNjE5Yy0wLjMxMy0wLjM1NC0wLjQ0My0wLjgzMy0wLjM0OS0xLjI5NnMwLjQtMC44NTQsMC44MjctMS4wNTdsMTEuOTYtNS42NjZcXHRsLTExLjgwMi01LjU5Yy0wLjQyOC0wLjIwMi0wLjczNC0wLjU5NC0wLjgyOC0xLjA1N2MtMC4wOTUtMC40NjMsMC4wMzUtMC45NDIsMC4zNDktMS4yOTZsMy43NTQtNC4yMjFcXHRjMC4zMDMtMC4zNCwwLjIyNS0wLjcxMSwwLjE3Ny0wLjg1NGMtMC4wNDgtMC4xNDUtMC4yMDctMC40ODktMC42NTItMC41ODFsLTYuMjI5LTEuMjg0Yy0wLjQyNi0wLjA4Ny0wLjc5Mi0wLjM1NS0xLjAwNS0wLjczM1xcdGMtMC4yMTMtMC4zNzktMC4yNTEtMC44MzEtMC4xMDUtMS4yNGw0LjEzNS0xMS41NzVjMC4wMTQtMC4wMzgsMC4wMDQtMC4wOC0wLjExMS0wLjE0M0w2Ni42ODMsMjUuMlxcdGMtMC4xNzEsMC4wNjQtMC4zNDksMC4wOTYtMC41MjYsMC4wOTZjLTAuMjUxLDAtMC41MDEtMC4wNjMtMC43MjYtMC4xODdjLTAuMzgzLTAuMjEyLTAuNjU1LTAuNTgxLTAuNzQzLTEuMDExbC0xLjE4NS01Ljc0NVxcdGMtMC4xLTAuNDgtMC41MTktMC42OTktMC44NjUtMC42OTljLTAuMjEyLDAtMC40MDQsMC4wNzUtMC41NywwLjIyNEw1OC4yLDIxLjMxN2MtMC4yNzcsMC4yNDYtMC42MzMsMC4zNzktMC45OTcsMC4zNzlcXHRjLTAuMDkzLDAtMC4xODctMC4wMDktMC4yNzktMC4wMjZjLTAuNDU3LTAuMDg2LTAuODQ4LTAuMzgtMS4wNTktMC43OTVsLTUuNzM3LTExLjMxYy0wLjAxOC0wLjAzNS0wLjA1Mi0wLjA1OC0wLjA5NC0wLjA1OVxcdGMtMC4wMzgsMC0wLjA3NCwwLjAyMi0wLjA5MiwwLjA1NWwtNi4wNiwxMS41MTNjLTAuMjE1LDAuNDA4LTAuNjA1LDAuNjk1LTEuMDU5LDAuNzc3Yy0wLjA5LDAuMDE3LTAuMTgsMC4wMjQtMC4yNjksMC4wMjRcXHRjLTAuMzY0LDAtMC43Mi0wLjEzMy0wLjk5Ny0wLjM3OWwtNC4wNjktMy42MmMtMC4xNjYtMC4xNDctMC4zNTgtMC4yMjMtMC41Ny0wLjIyM2MtMC4zNDcsMC0wLjc2NiwwLjIxOS0wLjg2NSwwLjY5OWwtMS4xODcsNS43NTJcXHRjLTAuMDg4LDAuNDI2LTAuMzU1LDAuNzkyLTAuNzMzLDEuMDA1Yy0wLjIyOCwwLjEyOC0wLjQ4LDAuMTkyLTAuNzM1LDAuMTkyYy0wLjE3LDAtMC4zNDEtMC4wMjktMC41MDUtMC4wODhsLTExLjcwOC00LjE4MVxcdGwtMC4xMDUsMC4wMjFjLTAuMDI5LDAuMDI4LTAuMDQsMC4wNy0wLjAyOCwwLjEwN2wzLjY4LDExLjg1NGMwLjEyNSwwLjQwNCwwLjA3NCwwLjg0My0wLjE0MSwxLjIwN1xcdGMtMC4yMTYsMC4zNjQtMC41NzQsMC42MjEtMC45ODksMC43MDZsLTUuMTk2LDEuMDcxYy0wLjQ0NSwwLjA5Mi0wLjYwNCwwLjQzNy0wLjY1MiwwLjU4Yy0wLjA0NywwLjE0NS0wLjEyNSwwLjUxNiwwLjE3OCwwLjg1NVxcdGwzLjU4OCw0LjAzNWMwLjMxMywwLjM1NCwwLjQ0MywwLjgzMywwLjM0OSwxLjI5NnMtMC40LDAuODU0LTAuODI4LDEuMDU3bC0xMi4xOTcsNS43OEwyMiw1Ni41aC0wLjVjLTIuNzYxLDAtNSwyLjIzOS01LDVcXHRzMi4yMzksNSw1LDVoLTNjLTIuNzYxLDAtNSwyLjIzOS01LDVzMi4yMzksNSw1LDVoMTBjLTIuNzYxLDAtNSwyLjIzOS01LDVzMi4yMzksNSw1LDVoMzdjMi43NjEsMCw1LTIuMjM5LDUtNXMtMi4yMzktNS01LTVoMTFcXHRjMi43NjEsMCw1LTIuMjM5LDUtNXMtMi4yMzktNS01LTVINzRjMC0wLjUsMC41NzQtMC45MTMsMS0xbDYtMmMwLjQ0NS0wLjA5MiwwLjc1NS0wLjQ4NSwwLjgwMy0wLjYzXFx0YzAuMDQ4LTAuMTQ0LDAuMTI2LTAuNTE1LTAuMTc3LTAuODU0TDc3LjcxNiw1Ny42MTl6XFxcIiAvPjxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTAuMDA1XFxcIiByPVxcXCIxOVxcXCIgZmlsbD1cXFwiI2ZmZTM4NVxcXCIgLz48cGF0aCBmaWxsPVxcXCIjZDllZWZmXFxcIiBkPVxcXCJNMjguNSw4NWMtMS45MywwLTMuNS0xLjU3LTMuNS0zLjVzMS41Ny0zLjUsMy41LTMuNWMwLjgyOCwwLDEuNS0wLjY3MiwxLjUtMS41UzI5LjMyOCw3NSwyOC41LDc1XFx0aC0xMGMtMS45MywwLTMuNS0xLjU3LTMuNS0zLjVzMS41Ny0zLjUsMy41LTMuNWgzYzAuODI4LDAsMS41LTAuNjcyLDEuNS0xLjVTMjIuMzI4LDY1LDIxLjUsNjVjLTEuOTMsMC0zLjUtMS41Ny0zLjUtMy41XFx0czEuNTctMy41LDMuNS0zLjVoNDNjMS45MywwLDMuNSwxLjU3LDMuNSwzLjVTNjYuNDMsNjUsNjQuNSw2NWMtMC44MjgsMC0xLjUsMC42NzItMS41LDEuNXMwLjY3MiwxLjUsMS41LDEuNWgxMlxcdGMxLjkzLDAsMy41LDEuNTcsMy41LDMuNVM3OC40Myw3NSw3Ni41LDc1aC0xMWMtMC44MjgsMC0xLjUsMC42NzItMS41LDEuNXMwLjY3MiwxLjUsMS41LDEuNWMxLjkzLDAsMy41LDEuNTcsMy41LDMuNVxcdFM2Ny40Myw4NSw2NS41LDg1SDI4LjV6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiNmMmYyZjJcXFwiIGQ9XFxcIk0zMi43ODIsNThjMy4wMiw2LjQ5Myw5LjU4NCwxMS4wMDUsMTcuMjE4LDExLjAwNWM3LjI4NiwwLDEzLjYwNy00LjEwNiwxNi43OTUtMTAuMTI2XFx0QzY2LjE3OSw1OC4zMzksNjUuMzgyLDU4LDY0LjUsNThIMzIuNzgyelxcXCIgLz48cGF0aCBmaWxsPVxcXCIjNDAzOTZlXFxcIiBkPVxcXCJNNjUuNSw4OGgtMzdjLTMuNTg0LDAtNi41LTIuOTE2LTYuNS02LjVjMC0xLjI4NywwLjM3Ni0yLjQ4OSwxLjAyNC0zLjVIMTguNVxcdGMtMy41ODQsMC02LjUtMi45MTYtNi41LTYuNWMwLTIuODEsMS43OTItNS4yMDgsNC4yOTMtNi4xMTRDMTUuNDgsNjQuMzAxLDE1LDYyLjk1NiwxNSw2MS41YzAtMi4yNzEsMS4xNy00LjI3MywyLjkzOS01LjQzNlxcdGwtOS43OTItNS4xMzZjLTAuNTA0LTAuMjY0LTAuODE1LTAuNzktMC44MDQtMS4zNThzMC4zNDQtMS4wODIsMC44NTctMS4zMjVsMTIuMTk0LTUuNzc2bC0zLjU4Ny00LjAzNVxcdGMtMC41NjYtMC42MzYtMC43NDctMS41MDItMC40ODMtMi4zMTVjMC4yNzQtMC44MjQsMC45MzgtMS40MTMsMS43NzYtMS41ODZsNS4xOTYtMS4wNzFsLTMuNjgtMTEuODU0XFx0Yy0wLjE4Mi0wLjU3Ni0wLjAyMi0xLjIwNCwwLjQxOC0xLjYzYzAuMjA2LTAuMTk5LDAuNDY0LTAuMzM1LDAuNzQzLTAuMzkybDAuMTA1LTAuMDIxYzAuMjctMC4wNTUsMC41NDYtMC4wMzQsMC44MDUsMC4wNTdcXHRsMTEuNzA4LDQuMTgxbDEuMTg3LTUuNzUxYzAuMjMxLTEuMTE3LDEuMTkxLTEuODk2LDIuMzM0LTEuODk2YzAuNTgyLDAsMS4xMjQsMC4yMDgsMS41NjYsMC42MDJsNC4wNywzLjYybDYuMDYtMTEuNTEzXFx0YzAuMjkyLTAuNTM2LDAuODMxLTAuODU2LDEuNDE5LTAuODU2YzAuNjMyLDAuMDE1LDEuMTY5LDAuMzU0LDEuNDM2LDAuODg4TDU3LjIsMjAuMTk5bDMuODY4LTMuNDM5XFx0YzAuNDQtMC4zOTQsMC45ODMtMC42MDMsMS41NjctMC42MDNjMS4xNDMsMCwyLjEwMywwLjc3OSwyLjMzNCwxLjg5NWwxLjE4NSw1Ljc0N2wxMS4xNTEtNC4xNzVjMC40MDktMC4xNTQsMC44Ni0wLjEyMiwxLjI0MSwwLjA4NlxcdGMwLjg3MSwwLjQ3MywxLjAyOSwxLjM1MSwwLjgwOSwxLjk2OEw3NS4yMiwzMy4yNTFsNi4yMywxLjI4NGMwLjg0MSwwLjE3MywxLjUwNCwwLjc2MywxLjc3MywxLjU3OFxcdGMwLjI3MSwwLjgxMywwLjA5MiwxLjY4Mi0wLjQ4LDIuMzI0bC0zLjc1Myw0LjIybDExLjgwNCw1LjU5MWMwLjUyMywwLjI0OCwwLjg1NywwLjc3NSwwLjg1NywxLjM1NXMtMC4zMzQsMS4xMDctMC44NTcsMS4zNTVcXHRsLTExLjk2LDUuNjY2bC0xLjEyMSwwLjk5N2wxLjEyMS0wLjk5N2wzLjkxLDQuMzk2YzAuNTcxLDAuNjQyLDAuNzUsMS41MTEsMC40NzksMi4zMjZjLTAuMjA4LDAuNjI5LTAuODk0LDEuMzY3LTEuODE2LDEuNlxcdGwtMi4wOTMsMC42OThDODEuNDk0LDY2LjY5Myw4Myw2OC45MjQsODMsNzEuNWMwLDMuNTg0LTIuOTE2LDYuNS02LjUsNi41aC01LjUyNEM3MS42MjQsNzkuMDExLDcyLDgwLjIxMyw3Miw4MS41XFx0QzcyLDg1LjA4NCw2OS4wODQsODgsNjUuNSw4OHogTTI4LjUsNzhjLTEuOTMsMC0zLjUsMS41Ny0zLjUsMy41czEuNTcsMy41LDMuNSwzLjVoMzdjMS45MywwLDMuNS0xLjU3LDMuNS0zLjVTNjcuNDMsNzgsNjUuNSw3OFxcdGMtMC44MjgsMC0xLjUtMC42NzItMS41LTEuNXMwLjY3Mi0xLjUsMS41LTEuNWgxMWMxLjkzLDAsMy41LTEuNTcsMy41LTMuNVM3OC40Myw2OCw3Ni41LDY4SDc0Yy0wLjgyOCwwLTEuNS0wLjY3Mi0xLjUtMS41XFx0YzAtMS4yMjMsMS4wNDYtMi4xODQsMi4wOTItMi40NDVsNS4yNzYtMS43NTlsLTMuMjczLTMuNjhjMC0wLjAwMS0wLjAwMS0wLjAwMS0wLjAwMS0wLjAwMmMtMC42MjQtMC43MDMtMC44ODQtMS42NzMtMC42OTYtMi41OTJcXHRjMC4xODctMC45MTksMC44MDUtMS43MDksMS42NTQtMi4xMTFsOS4wOTktNC4zMTFsLTguOTQxLTQuMjM1Yy0wLjg1LTAuNDAxLTEuNDY5LTEuMTkyLTEuNjU1LTIuMTE0XFx0Yy0wLjE4OC0wLjkxNiwwLjA3Mi0xLjg4NiwwLjY5Ni0yLjU4OWwzLjAzNC0zLjQxMWwtNS4xNjYtMS4wNjVjLTAuODQ5LTAuMTczLTEuNTgyLTAuNzA3LTIuMDA5LTEuNDY2XFx0Yy0wLjQyNi0wLjc1OC0wLjUwMy0xLjY2MS0wLjIxMi0yLjQ3OWwzLjEyNS04Ljc0OGwtOC4zMTMsMy4xMTJjLTAuODA0LDAuMzA0LTEuNzQ1LDAuMjM3LTIuNTAzLTAuMTgyXFx0Yy0wLjc3MS0wLjQyNy0xLjMxMy0xLjE2NC0xLjQ4OC0yLjAyM2wtMC45NjUtNC42OGwtMy4wNTcsMi43MTljLTAuNjksMC42MTMtMS42MzMsMC44ODEtMi41NTMsMC43MDVcXHRjLTAuOTA1LTAuMTctMS42OTctMC43NjUtMi4xMTYtMS41ODlsLTQuNTE3LTguOTAzbC00LjgwMiw5LjEyMWMtMC40MzMsMC44MjMtMS4yMDUsMS4zOS0yLjExOCwxLjU1NVxcdGMtMC44OTcsMC4xNjktMS44NDUtMC4xMDItMi41MjgtMC43MDhsLTMuMjYtMi44OTlsLTAuOTY4LDQuNjg4Yy0wLjE3NSwwLjg1MS0wLjcxLDEuNTgzLTEuNDY2LDIuMDA5XFx0Yy0wLjc0OSwwLjQyMi0xLjY2NywwLjUwMS0yLjQ4MSwwLjIxMWwtOS4wNzYtMy4yNDFsMi44NTIsOS4xODZjMC4yNSwwLjgwOCwwLjE0NywxLjY4OC0wLjI4MSwyLjQxM1xcdGMtMC40MzMsMC43My0xLjE1NCwxLjI0NS0xLjk4LDEuNDE0bC00LjEzLDAuODUybDIuODY3LDMuMjI0YzAuNjI1LDAuNzA1LDAuODg1LDEuNjc1LDAuNjk3LDIuNTk0XFx0Yy0wLjE4NywwLjkxOS0wLjgwNiwxLjcxLTEuNjU3LDIuMTEybC05LjQ3NSw0LjQ4OGwxMC40OTIsNS41MDNjMC42MTEsMC4zMiwwLjkyNSwxLjAxNywwLjc2LDEuNjg3QzIzLjI5MSw1Ny41MjksMjIuNjksNTgsMjIsNThcXHRoLTAuNWMtMS45MywwLTMuNSwxLjU3LTMuNSwzLjVzMS41NywzLjUsMy41LDMuNWMwLjgyOCwwLDEuNSwwLjY3MiwxLjUsMS41UzIyLjMyOCw2OCwyMS41LDY4aC0zYy0xLjkzLDAtMy41LDEuNTctMy41LDMuNVxcdHMxLjU3LDMuNSwzLjUsMy41aDEwYzAuODI4LDAsMS41LDAuNjcyLDEuNSwxLjVTMjkuMzI4LDc4LDI4LjUsNzh6IE04MC41MDYsNjMuMDE0aDAuMDFIODAuNTA2eiBNODAuNjk3LDYyLjAzMVxcdGMtMC4wMTcsMC4wMDMtMC4wMzIsMC4wMDctMC4wNDksMC4wMTFDODAuNjY1LDYyLjAzOCw4MC42ODEsNjIuMDM0LDgwLjY5Nyw2Mi4wMzF6IE0yMi40ODEsMjAuNzExbDAuMDA0LDAuMDE0XFx0QzIyLjQ4NCwyMC43MjEsMjIuNDgyLDIwLjcxNiwyMi40ODEsMjAuNzExeiBNNzYuNTMzLDIwLjY2M2MtMC4wMDEsMC4wMDItMC4wMDIsMC4wMDMtMC4wMDIsMC4wMDVMNzYuNTMzLDIwLjY2M3ogTTYzLjA2NywxOC45OTZcXHRsLTAuMDAyLDAuMDAyQzYzLjA2NiwxOC45OTcsNjMuMDY2LDE4Ljk5Nyw2My4wNjcsMTguOTk2eiBNNDguNzg5LDEwLjI0NGMwLjAwMywwLjAwNSwwLjAwNSwwLjAxLDAuMDA4LDAuMDE0TDQ4Ljc4OSwxMC4yNDR6XFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2wiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2wuanNcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkLmpzXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJpY29uczgtbW9vbi1hbmQtc3RhcnMtNTBcIixcbiAgXCJ1c2VcIjogXCJpY29uczgtbW9vbi1hbmQtc3RhcnMtNTAtdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwMCAxMDBcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBpZD1cXFwiaWNvbnM4LW1vb24tYW5kLXN0YXJzLTUwXFxcIj48cGF0aCBkPVxcXCJNMjAuMTc4LDI3LjE5NUMxMi43NSwzNC45MTcsOC43ODIsNDUuMDY0LDkuMDA0LDU1Ljc2NWMwLjI1OCwxMi40MzgsNi4xNCwyMy44OTMsMTYuMzc3LDMxLjQ4MVxcdGM1LjczMSw0LjI0OCwxMi41NjUsNi44NjcsMTkuNjY1LDcuNTU1YzEyLjU2OCwxLjIxOCwyNC40ODItMy4yMDMsMzMuMDYxLTEyLjEyMmM1LjEwNS01LjMwOCw4LjY0My0xMS44OTQsMTAuMjMtMTkuMDQ4XFx0bDEuOTI1LTguNjc2YzAuMTc3LTAuNzk3LTAuNTUzLTEuNDk5LTEuMzQzLTEuMjlsLTEuMjUxLDAuMzMxbDEuNjY1LTUuNDA0bDkuMDY0LTYuODhjMC44MDItMC42MDksMC44MDItMS44MTUsMC0yLjQyNFxcdGwtOS4wNzItNi44ODRMMjAuMTc4LDI3LjE5NXpcXFwiIG9wYWNpdHk9XFxcIi4zNVxcXCIgLz48cGF0aCBmaWxsPVxcXCIjZjJmMmYyXFxcIiBkPVxcXCJNODcuMzM5LDQ2LjYwMWw5LjA2NC02Ljg4YzAuODAyLTAuNjA5LDAuODAyLTEuODE1LDAtMi40MjRsLTkuMDcyLTYuODg0bC03LjYzMS0xMC40NDVcXHRjLTAuNDUzLTAuNjItMS4xMDktMS4wNjItMS44NTMtMS4yNDlsLTMuMjg3LTAuODI1bC0xMC4wNDctMy42NjNMNTguMTgsNS42MTVjLTAuNTg1LTAuNzk2LTEuNzc1LTAuNzk2LTIuMzYsMC4wMDFsLTYuMzI5LDguNjJcXHRsLTMuMjE0LDEuMTc1bDAuMzcyLTEuNjc1YzAuMjI3LTEuMDIyLTAuNzEtMS45MjItMS43MjItMS42NTRsLTguMTAyLDIuMTQ0Yy03LjA5NCwxLjg3Ny0xMy41NCw1LjY3My0xOC42NDMsMTAuOTc5XFx0Yy03LjQyOCw3LjcyMi0xMS4zOTYsMTcuODY5LTExLjE3NCwyOC41N2MwLjI1OCwxMi40MzgsNi4xNCwyMy44OTMsMTYuMzc3LDMxLjQ4MWM1LjczMSw0LjI0OCwxMi41NjUsNi44NjcsMTkuNjY1LDcuNTU1XFx0YzEyLjU2OCwxLjIxOCwyNC40ODItMy4yMDMsMzMuMDYxLTEyLjEyMmM1LjEwNS01LjMwOCw4LjY0My0xMS44OTQsMTAuMjMtMTkuMDQ4bDEuOTI1LTguNjc2YzAuMTc3LTAuNzk3LTAuNTUzLTEuNDk5LTEuMzQzLTEuMjlcXHRsLTEuMjUxLDAuMzMxTDg3LjMzOSw0Ni42MDF6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiNmZmUzODVcXFwiIGQ9XFxcIk00OC4wNDQsNTIuMDE0Yy04Ljc5My04LjQxNS0xMi4wMS0yMC40NDctOS41NTUtMzEuNTA1Yy01Ljc2MywxLjUyNS0xMS4xOTIsNC41OTYtMTUuNjIxLDkuMjAxXFx0Yy0xMi44NjUsMTMuMzc2LTEyLjQyMywzNC42MjIsMC45ODYsNDcuNDU1YzEzLjQxLDEyLjgzMywzNC43MSwxMi4zOTIsNDcuNTc1LTAuOTg0YzQuNDI5LTQuNjA1LDcuMjgxLTEwLjE0Myw4LjU2OS0xNS45NVxcdEM2OS4wMjIsNjMuMTM2LDU2LjgzNyw2MC40MjksNDguMDQ0LDUyLjAxNHpcXFwiIC8+PHBvbHlnb24gZmlsbD1cXFwiIzk0Y2ZmZlxcXCIgcG9pbnRzPVxcXCI1Ny4wMiwzMS4wMDkgNTkuMjczLDIzLjc3OCA2NS40OTcsMjEuNTA5IDU5LjI3MywxOS4yMzkgNTcuMDAzLDEyLjAwOSA1NC43MzMsMTkuMjM5IDQ4LjUwOSwyMS41MTQgNTQuNzMzLDIzLjc3OFxcXCIgLz48cGF0aCBmaWxsPVxcXCIjNDAzOTZlXFxcIiBkPVxcXCJNNTcuMDIsMzIuNTA5Yy0wLjY1NCwwLTEuMjMzLTAuNDI0LTEuNDMtMS4wNDhsLTIuMDY0LTYuNTI1bC01LjUzLTIuMDExIGMtMC41OTItMC4yMTUtMC45ODctMC43NzgtMC45ODctMS40MDhjMC0wLjYzLDAuMzkzLTEuMTk0LDAuOTg1LTEuNDFsNS41My0yLjAyMWwyLjA0OC02LjUyNWMwLjE5Ni0wLjYyNSwwLjc3Ni0xLjA1MSwxLjQzMS0xLjA1MSBzMS4yMzUsMC40MjUsMS40MzEsMS4wNTFsMi4wNDgsNi41MjRsNS41MjksMi4wMTZjMC41OTIsMC4yMTYsMC45ODYsMC43NzksMC45ODYsMS40MDlzLTAuMzk0LDEuMTkzLTAuOTg2LDEuNDA5bC01LjUyNywyLjAxNSBsLTIuMDMyLDYuNTIyYy0wLjE5NSwwLjYyNS0wLjc3MywxLjA1Mi0xLjQyOSwxLjA1NEM1Ny4wMjIsMzIuNTA5LDU3LjAyMSwzMi41MDksNTcuMDIsMzIuNTA5eiBNNTIuODg4LDIxLjUxMWwyLjM1OCwwLjg1NyBjMC40MzgsMC4xNTksMC43NzcsMC41MTMsMC45MTcsMC45NThMNTcuMDA5LDI2bDAuODMyLTIuNjY4YzAuMTM5LTAuNDQ3LDAuNDc5LTAuODAzLDAuOTE4LTAuOTYzbDIuMzU5LTAuODZsLTIuMzU5LTAuODYgYy0wLjQzOC0wLjE2LTAuNzc4LTAuNTE1LTAuOTE3LTAuOTZsLTAuODM5LTIuNjcxbC0wLjgzOCwyLjY3MWMtMC4xNCwwLjQ0NS0wLjQ3OCwwLjc5OS0wLjkxNiwwLjk1OUw1Mi44ODgsMjEuNTExelxcXCIgLz48cG9seWdvbiBmaWxsPVxcXCIjOTRjZmZmXFxcIiBwb2ludHM9XFxcIjc5LjAyNiw1MS41MDkgODIuMDc0LDQxLjYxNSA5MC40OTcsMzguNTA5IDgyLjA3NCwzNS40MDMgNzkuMDAzLDI1LjUwOSA3NS45MzIsMzUuNDAzIDY3LjUwOSwzOC41MTcgNzUuOTMyLDQxLjYxNVxcXCIgLz48cGF0aCBmaWxsPVxcXCIjNDAzOTZlXFxcIiBkPVxcXCJNNzkuMDI2LDUzLjAwOWMtMC42NTYsMC0xLjIzNi0wLjQyNi0xLjQzMi0xLjA1MmwtMi44NzQtOS4xODlsLTcuNzI5LTIuODQzIGMtMC41OS0wLjIxNy0wLjk4Mi0wLjc3OC0wLjk4Mi0xLjQwN2MwLTAuNjI4LDAuMzkxLTEuMTksMC45OC0xLjQwOGw3LjcyOS0yLjg1N2wyLjg1Mi05LjE4OGMwLjE5NS0wLjYyNywwLjc3NS0xLjA1NSwxLjQzMy0xLjA1NSBzMS4yMzgsMC40MjgsMS40MzMsMS4wNTVsMi44NTIsOS4xODhsNy43MjksMi44NWMwLjU4OSwwLjIxNywwLjk4MSwwLjc3OSwwLjk4MSwxLjQwN3MtMC4zOTIsMS4xOS0wLjk4MSwxLjQwN2wtNy43MjgsMi44NSBsLTIuODMsOS4xODVjLTAuMTkzLDAuNjI4LTAuNzczLDEuMDU3LTEuNDMxLDEuMDU4Qzc5LjAyOCw1My4wMDksNzkuMDI3LDUzLjAwOSw3OS4wMjYsNTMuMDA5eiBNNzEuODQ1LDM4LjUxM2w0LjYwNCwxLjY5NCBjMC40MzgsMC4xNjEsMC43NzUsMC41MTYsMC45MTQsMC45NmwxLjY1Miw1LjI4MmwxLjYyNS01LjI3NmMwLjEzOC0wLjQ0NywwLjQ3Ni0wLjgwNCwwLjkxNS0wLjk2NWw0LjYwNi0xLjY5OWwtNC42MDYtMS42OTggYy0wLjQzOC0wLjE2MS0wLjc3NS0wLjUxNy0wLjkxNC0wLjk2MmwtMS42MzktNS4yNzlsLTEuNjM5LDUuMjc5Yy0wLjEzOCwwLjQ0NS0wLjQ3NiwwLjgwMS0wLjkxMywwLjk2Mkw3MS44NDUsMzguNTEzelxcXCIgLz48Zz48cGF0aCBmaWxsPVxcXCIjZmZlMzg1XFxcIiBkPVxcXCJNNDguMDQ0LDUyLjAxNGMtOC43OTMtOC40MTUtMTIuMDEtMjAuNDQ3LTkuNTU1LTMxLjUwNWMtNS43NjMsMS41MjUtMTEuMTkyLDQuNTk2LTE1LjYyMSw5LjIwMSBjLTEyLjg2NSwxMy4zNzYtMTIuNDIzLDM0LjYyMiwwLjk4Niw0Ny40NTVjMTMuNDEsMTIuODMzLDM0LjcxLDEyLjM5Miw0Ny41NzUtMC45ODRjNC40MjktNC42MDUsNy4yODEtMTAuMTQzLDguNTY5LTE1Ljk1IEM2OS4wMjIsNjMuMTM2LDU2LjgzNyw2MC40MjksNDguMDQ0LDUyLjAxNHpcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzQwMzk2ZVxcXCIgZD1cXFwiTTQ3LjE0MSw4Ny45OTJjLTguNzU1LDAtMTcuNTIyLTMuMjM0LTI0LjMyNC05Ljc0NGMtNi43NzYtNi40ODQtMTAuNjE1LTE1LjIxMy0xMC44MDktMjQuNTc4IGMtMC4xOTQtOS4zNjQsMy4yNzktMTguMjQyLDkuNzc5LTI1YzQuNDY4LTQuNjQ1LDEwLjExMS03Ljk2OSwxNi4zMTgtOS42MTFjMC41MDYtMC4xMzUsMS4wNDYsMC4wMDUsMS40MjMsMC4zNjggYzAuMzc3LDAuMzYzLDAuNTM5LDAuODk2LDAuNDI1LDEuNDA3Yy0yLjQ0OCwxMS4wMzMsMC45NjQsMjIuMjg0LDkuMTI4LDMwLjA5NnYwYzguMTY1LDcuODE0LDE5LjU4MSwxMC43NDksMzAuNTMzLDcuODUxIGMwLjUwNy0wLjEzMiwxLjA0NiwwLjAwNiwxLjQyMywwLjM2OGMwLjM3NywwLjM2MywwLjUzOSwwLjg5NiwwLjQyNSwxLjQwN2MtMS4zODksNi4yNTctNC40ODQsMTIuMDE5LTguOTUzLDE2LjY2NSBDNjUuNjE5LDg0LjM4Niw1Ni4zODYsODcuOTkyLDQ3LjE0MSw4Ny45OTJ6IE0zNi41NjMsMjIuNjY0Yy00Ljc2NSwxLjY1NS05LjA5LDQuNDItMTIuNjE1LDguMDg2IGMtNS45NDMsNi4xNzktOS4xMTksMTQuMjk3LTguOTQxLDIyLjg1OGMwLjE3OCw4LjU2MiwzLjY4OCwxNi41NDMsOS44ODQsMjIuNDczYzEyLjc5MiwxMi4yNDIsMzMuMTgzLDExLjgyMSw0NS40NTctMC45NCBjMy41MjMtMy42NjQsNi4xMTMtOC4wODQsNy41NzQtMTIuODk5Yy0xMS4yMDEsMi4xNDEtMjIuNTk4LTEuMTg3LTMwLjkxNC05LjE0NGwwLDBDMzguNjg5LDQ1LjEzOSwzNC44ODIsMzMuOTE3LDM2LjU2MywyMi42NjR6XFxcIiAvPjwvZz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sLmpzXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZC5qc1wiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiaWNvbnM4LW5pZ2h0LTUwXCIsXG4gIFwidXNlXCI6IFwiaWNvbnM4LW5pZ2h0LTUwLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAxMDAgMTAwXCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgaWQ9XFxcImljb25zOC1uaWdodC01MFxcXCI+PHBhdGggZD1cXFwiTTk3LjEyMSw0NC42ODVjLTEuMjE2LTEuMTY2LTIuODE0LTEuODA5LTQuNS0xLjgwOWMtMC41NTcsMC0xLjExMywwLjA3Mi0xLjY2NSwwLjIxN2MtMS42NzEsMC40NDMtMy4zOCwwLjY2Ny01LjA4MiwwLjY2OCBjLTQuOTk0LDAtOS43NTYtMS45MjktMTMuNDA3LTUuNDMyYy00Ljk0My00Ljc0Mi03LjAwOS0xMS41NzQtNS41MjctMTguMjcxYzAuNDg4LTIuMi0wLjIxOS00LjUzNi0xLjg1Mi02LjEwNCBjLTEuMjE2LTEuMTYyLTIuODEzLTEuODAzLTQuNDk3LTEuODAzYy0wLjU0OSwwLTEuMDk4LDAuMDY5LTEuNjY1LDAuMjE2Yy01LjczOCwxLjUyMi0xMC45NTEsNC42MDEtMTUuMDc2LDguOSBjLTEuOTc4LDIuMDYyLTMuNjYsNC4zNy01LjAxNiw2Ljg0N2MtMC41NzEtMC40ODItMS4yMi0wLjg4MS0xLjk0Ni0xLjE0NWwtMy4yMS0xLjE3MWwtMS4zMDktNC4xNyBjLTAuODU1LTIuNzI0LTMuMzQ4LTQuNTUzLTYuMjAyLTQuNTUzcy01LjM0NiwxLjgyOS02LjIwMiw0LjU1NGwtMS4zMSw0LjE3MmwtMy4yMTgsMS4xNzZjLTIuNTUzLDAuOTM2LTQuMjY3LDMuMzkxLTQuMjY1LDYuMTA5IGMwLjAwMiwyLjcyMywxLjcyMyw1LjE3Nyw0LjI3Nyw2LjEwM2wzLjIxNiwxLjE3MWwxLjMyLDQuMTc1YzAuODA0LDIuNTQxLDMuMDQsNC4yODIsNS42NTgsNC40OTggYy0xLjIyNywxLjU0Ny0yLjMwMSwzLjIyMi0zLjE2Miw1LjAyNmMtMi4xMTksMC4xNjUtNC4xOTgsMC43MDYtNi4xOTksMS42MTRjLTYuODEsMy4wOTMtMTEuMjg4LDkuNzY5LTExLjQwNywxNy4wMSBjLTAuMDg0LDUuMTM2LDEuODUyLDkuOTgsNS40NTMsMTMuNjQyQzEzLjkzMyw4OS45ODQsMTguNzQ0LDkyLDIzLjg3Nyw5Mmg0NC42NjFjOS42ODMsMCwxNy45MjQtNy4wNzgsMTkuMTctMTYuNDYzIGMwLjI4NS0yLjE0NiwwLjIwNS00LjMwNC0wLjIyOC02LjM4OWMxLjEzNy0wLjkwNCwyLjIxMy0xLjg4NSwzLjIyLTIuOTM2YzQuMTI2LTQuMjk5LDYuOTg1LTkuNjM1LDguMjY3LTE1LjQzIEM5OS40NTYsNDguNTgzLDk4Ljc1LDQ2LjI0Nyw5Ny4xMjEsNDQuNjg1elxcXCIgb3BhY2l0eT1cXFwiLjM1XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiNmMmYyZjJcXFwiIGQ9XFxcIk05NS4xMjEsNDIuNjg1Yy0xLjIxNi0xLjE2Ni0yLjgxNC0xLjgwOS00LjUtMS44MDljLTAuNTU3LDAtMS4xMTMsMC4wNzItMS42NjUsMC4yMTcgYy0xLjY3MSwwLjQ0My0zLjM4LDAuNjY3LTUuMDgyLDAuNjY4Yy00Ljk5NCwwLTkuNzU2LTEuOTI5LTEzLjQwNy01LjQzMmMtNC45NDMtNC43NDItNy4wMDktMTEuNTc0LTUuNTI3LTE4LjI3MSBjMC40ODgtMi4yLTAuMjE5LTQuNTM2LTEuODUyLTYuMTA0Yy0xLjIxNi0xLjE2Mi0yLjgxMy0xLjgwMy00LjQ5Ny0xLjgwM2MtMC41NDksMC0xLjA5OCwwLjA2OS0xLjY2NSwwLjIxNiBjLTUuNzM4LDEuNTIyLTEwLjk1MSw0LjYwMS0xNS4wNzYsOC45Yy0xLjk3OCwyLjA2Mi0zLjY2LDQuMzctNS4wMTYsNi44NDdjLTAuNTcxLTAuNDgyLTEuMjItMC44ODEtMS45NDYtMS4xNDVsLTMuMjEtMS4xNzEgbC0xLjMwOS00LjE3Yy0wLjg1NS0yLjcyNC0zLjM0OC00LjU1My02LjIwMi00LjU1M3MtNS4zNDYsMS44MjktNi4yMDIsNC41NTRsLTEuMzEsNC4xNzJsLTMuMjE4LDEuMTc2IGMtMi41NTMsMC45MzYtNC4yNjcsMy4zOTEtNC4yNjUsNi4xMDljMC4wMDIsMi43MjMsMS43MjMsNS4xNzcsNC4yNzcsNi4xMDNsMy4yMTYsMS4xNzFsMS4zMiw0LjE3NSBjMC44MDQsMi41NDEsMy4wNCw0LjI4Miw1LjY1OCw0LjQ5OGMtMS4yMjcsMS41NDctMi4zMDEsMy4yMjItMy4xNjIsNS4wMjZjLTIuMTE5LDAuMTY1LTQuMTk4LDAuNzA2LTYuMTk5LDEuNjE0IGMtNi44MSwzLjA5My0xMS4yODgsOS43NjktMTEuNDA3LDE3LjAxYy0wLjA4NCw1LjEzNiwxLjg1Miw5Ljk4LDUuNDUzLDEzLjY0MkMxMS45MzMsODcuOTg0LDE2Ljc0NCw5MCwyMS44NzcsOTBoNDQuNjYxIGM5LjY4MywwLDE3LjkyNC03LjA3OCwxOS4xNy0xNi40NjNjMC4yODUtMi4xNDYsMC4yMDUtNC4zMDQtMC4yMjgtNi4zODljMS4xMzctMC45MDQsMi4yMTMtMS44ODUsMy4yMi0yLjkzNiBjNC4xMjYtNC4yOTksNi45ODUtOS42MzUsOC4yNjctMTUuNDNDOTcuNDU2LDQ2LjU4Myw5Ni43NSw0NC4yNDcsOTUuMTIxLDQyLjY4NXpcXFwiIC8+PHBhdGggZmlsbD1cXFwiI2ZmZTM4NVxcXCIgZD1cXFwiTTY1Ljk2OCw0MC45NDVjLTYuNzg0LTYuNTA5LTkuMjY2LTE1LjgxNi03LjM3My0yNC4zN2MtNC40NDYsMS4xNzktOC42MzUsMy41NTUtMTIuMDUzLDcuMTE3IGMtOS45MjYsMTAuMzQ2LTkuNTg1LDI2Ljc4MSwwLjc2MSwzNi43MDdjMTAuMzQ2LDkuOTI2LDI2Ljc4MSw5LjU4NSwzNi43MDctMC43NjFjMy40MTctMy41NjIsNS42MTctNy44NDYsNi42MTItMTIuMzM3IEM4Mi4xNTQsNDkuNTQ3LDcyLjc1Myw0Ny40NTMsNjUuOTY4LDQwLjk0NXpcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzk0Y2ZmZlxcXCIgZD1cXFwiTTY2LjEwMiw1OS41NTVjLTEuMDI1LDAtMi4wMTQsMC4xNC0yLjk2NSwwLjM3OWMtMi4wMjItOC41MjYtOS42OTQtMTQuODc5LTE4Ljg3Mi0xNC44Nzkgcy0xNi44NSw2LjM1Mi0xOC44NzIsMTQuODc5Yy0wLjk1MS0wLjIzOC0xLjk0LTAuMzc5LTIuOTY1LTAuMzc5Yy02LjcsMC0xMi4xMzIsNS40MS0xMi4xMzIsMTIuMDgzczUuNDMyLDEyLjA4MywxMi4xMzIsMTIuMDgzIGMzLjgwNSwwLDE3LjExMywwLDIxLjgzNywwczE4LjAzMiwwLDIxLjgzNywwYzYuNywwLDEyLjEzMi01LjQxLDEyLjEzMi0xMi4wODNTNzIuODAzLDU5LjU1NSw2Ni4xMDIsNTkuNTU1elxcXCIgLz48cG9seWdvbiBmaWxsPVxcXCIjOTRjZmZmXFxcIiBwb2ludHM9XFxcIjI0LjE4OCw0MC41NzcgMjYuNDQsMzMuMzQ2IDMyLjY2NSwzMS4wNzcgMjYuNDQsMjguODA3IDI0LjE3MSwyMS41NzcgMjEuOTAxLDI4LjgwNyAxNS42NzYsMzEuMDgyIDIxLjkwMSwzMy4zNDZcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzQwMzk2ZVxcXCIgZD1cXFwiTTI0LjE4OCw0Mi4wNzZjLTAuNjU0LDAtMS4yMzMtMC40MjQtMS40My0xLjA0OGwtMi4wNjMtNi41MjRsLTUuNTMtMi4wMTMgYy0wLjU5Mi0wLjIxNS0wLjk4Ny0wLjc3Ny0wLjk4Ny0xLjQwOGMwLTAuNjMsMC4zOTMtMS4xOTMsMC45ODUtMS40MWw1LjUzMS0yLjAyMWwyLjA0OC02LjUyNCBjMC4xOTYtMC42MjUsMC43NzYtMS4wNTEsMS40MzEtMS4wNTFzMS4yMzUsMC40MjYsMS40MzEsMS4wNTFsMi4wNDgsNi41MjRsNS41MjksMi4wMTZjMC41OTIsMC4yMTYsMC45ODYsMC43NzksMC45ODYsMS40MDkgcy0wLjM5NCwxLjE5My0wLjk4NiwxLjQwOWwtNS41MjcsMi4wMTdsLTIuMDMyLDYuNTIxYy0wLjE5NSwwLjYyNi0wLjc3MywxLjA1My0xLjQyOSwxLjA1NCBDMjQuMTg5LDQyLjA3NiwyNC4xODgsNDIuMDc2LDI0LjE4OCw0Mi4wNzZ6IE0yMC4wNTUsMzEuMDc5bDIuMzU5LDAuODU4YzAuNDM4LDAuMTU5LDAuNzc3LDAuNTEzLDAuOTE3LDAuOTU3bDAuODQ2LDIuNjc0IGwwLjgzMS0yLjY2OGMwLjEzOS0wLjQ0NiwwLjQ3OS0wLjgwMywwLjkxOC0wLjk2M2wyLjM2MS0wLjg2MWwtMi4zNi0wLjg2Yy0wLjQzOC0wLjE2LTAuNzc4LTAuNTE1LTAuOTE3LTAuOTZsLTAuODM4LTIuNjcxIGwtMC44MzgsMi42NzFjLTAuMTQsMC40NDUtMC40NzgsMC44LTAuOTE2LDAuOTZMMjAuMDU1LDMxLjA3OXpcXFwiIC8+PGc+PHBhdGggZmlsbD1cXFwiIzQwMzk2ZVxcXCIgZD1cXFwiTTY2LjUzOSw4NUgyMS44NzdjLTMuNzgzLDAtNy4zMjgtMS40ODUtOS45ODEtNC4xODNDOS4yNDQsNzguMTIsNy44MTcsNzQuNTUsNy44NzksNzAuNzY1IGMwLjA4OC01LjMxOSwzLjQxNS0xMC4yNDEsOC40NzUtMTIuNTM5YzIuNDA4LTEuMDkzLDQuOTI1LTEuNDU1LDcuNDk4LTEuMDc3YzIuMDcyLTYuNzM1LDcuMjgxLTExLjk5OCwxNC4wMDEtMTQuMTMyIGMtMC4zNDktNy41MTIsMi4zODctMTQuODQ2LDcuNjA4LTIwLjI4N2MzLjQ5LTMuNjM5LDcuODk5LTYuMjQyLDEyLjc1LTcuNTI5YzAuNTA4LTAuMTMxLDEuMDQ0LDAuMDA2LDEuNDIzLDAuMzY4IGMwLjM3NywwLjM2MiwwLjUzOSwwLjg5NiwwLjQyNiwxLjQwNmMtMS44NjMsOC40MTgsMC43MzMsMTcuMDAyLDYuOTQ3LDIyLjk2M2M2LjIxMyw1Ljk2LDE0Ljg5OCw4LjE5NywyMy4yMzEsNS45ODggYzAuNTA2LTAuMTMzLDEuMDQ1LDAuMDA2LDEuNDIzLDAuMzY4YzAuMzc3LDAuMzYyLDAuNTM5LDAuODk2LDAuNDI2LDEuNDA2Yy0xLjA4NCw0LjktMy41MDMsOS40MTQtNi45OTMsMTMuMDUxIGMtMS42MzksMS43MDktMy40ODMsMy4xOTItNS40OTYsNC40MjNjMS4xMSwyLjQwMSwxLjUwOSw1LjAzNywxLjE1NCw3LjcwNEM3OS44MzUsNzkuNzg5LDczLjcyNCw4NSw2Ni41MzksODV6IE0yMS44NzYsNjAgYy0xLjQ1OCwwLTIuODc1LDAuMzE4LTQuMjgyLDAuOTU3Yy00LjAxMSwxLjgyMS02LjY0Nyw1LjY5LTYuNzE2LDkuODU2Yy0wLjA0OSwyLjk3NiwxLjA3Miw1Ljc4MSwzLjE1Niw3Ljg5OSBDMTYuMTIsODAuODMzLDE4LjkwNSw4MiwyMS44NzcsODJoNDQuNjYxYzUuNjg4LDAsMTAuNTItNC4wOTIsMTEuMjQtOS41MTdjMC4zMzItMi40OTktMC4xNzYtNC45Ni0xLjQ2OS03LjExOCBjLTAuMjEtMC4zNTItMC4yNjgtMC43NzMtMC4xNTktMS4xNjhzMC4zNzQtMC43MjksMC43MzQtMC45MjNjMi4yNDQtMS4yMSw0LjI3Ny0yLjc1OCw2LjA0NC00LjYgYzIuNTUxLTIuNjU5LDQuNDU5LTUuODQyLDUuNTk1LTkuMzA5Yy04LjU2NSwxLjQ2My0xNy4yMzQtMS4xNjItMjMuNTk0LTcuMjY1Yy02LjM1OS02LjEtOS4zNDQtMTQuNjQ5LTguMjM2LTIzLjI3MSBjLTMuNDE3LDEuMjc4LTYuNTE3LDMuMzE3LTkuMDY4LDUuOTc2Yy00LjkwNyw1LjExNS03LjM0OSwxMi4xMDYtNi43LDE5LjE4MmMwLjA2NywwLjczMy0wLjQwOSwxLjQwOC0xLjEyMywxLjU5IGMtNi42ODUsMS43MDUtMTEuODI0LDYuOTM5LTEzLjQxMSwxMy42NTljLTAuMDkyLDAuMzkxLTAuMzM4LDAuNzI5LTAuNjgxLDAuOTM4Yy0wLjM0NCwwLjIwOC0wLjc1NiwwLjI3MS0xLjE0NiwwLjE3MyBDMjMuNjUsNjAuMTE1LDIyLjc1NSw2MCwyMS44NzYsNjB6XFxcIiAvPjwvZz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sLmpzXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZC5qc1wiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiaWNvbnM4LXBhcnRseS1jbG91ZHktZGF5LTUwXCIsXG4gIFwidXNlXCI6IFwiaWNvbnM4LXBhcnRseS1jbG91ZHktZGF5LTUwLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAxMDAgMTAwXCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgaWQ9XFxcImljb25zOC1wYXJ0bHktY2xvdWR5LWRheS01MFxcXCI+PHBhdGggZD1cXFwiTTk1LjM2MiwzNi43MjNsLTAuNzAyLTAuMzMxYzAuNDM3LTEuNDAzLDAuNDM3LTIuOTIzLTAuMDQxLTQuMzI4XFx0Yy0wLjYyOC0xLjkxNC0yLjAzNi0zLjQ1NC0zLjgzMy00LjI3MWwwLjI2OS0wLjc1N2MwLjk3OS0yLjc2OCwwLjI5MS01Ljc3LTEuNzk1LTcuODMxYy0xLjQxNC0xLjQwMS0zLjI4NS0yLjE3My01LjI2OC0yLjE3M1xcdGMtMC44OCwwLTEuNzQ5LDAuMTUzLTIuNTk2LDAuNDYybC0xLjk5LDAuNDU5Yy0xLjIwNC0yLjMwMi0yLjEzNC00LjA1MS00Ljg2NS00LjA1MWMtMC42ODEsMC0xLjM1MywwLjA5OC0xLjk5NywwLjI4N2wtMi4xODYtMC41MjRcXHRjLTEuMjgtMi40OTEtMi4xMTctNC40NzktNC45NzMtNC41Yy0yLjc3NCwwLTUuMzEsMS41MjEtNi42MTcsMy45N2wtMC42MDgsMS4xNGMtMC43MjctMC4yNDUtMS40OTMtMC4zNzMtMi4yNzItMC4zNzNcXHRjLTIuNzYzLDAtNS4xNjgsMS41MjMtNi4zNTksMy44NzNsLTEuMDk5LTAuMzg2Yy0wLjgwNi0wLjI4NS0xLjY0Ny0wLjQzLTIuNS0wLjQzYy0xLjk0LDAtMy43ODMsMC43NDItNS4xOTIsMi4wOTVcXHRjLTIuMDUsMS45NzEtMi44MDcsNC44ODUtMS45NzQsNy42MDRsMC40MTksMS4zNjZjLTEuNTY5LDAuODU3LTIuNzkzLDIuMjk0LTMuMzc1LDQuMDUyYy0wLjMxOCwwLjk3Ni0wLjQxNSwxLjk5NC0wLjMwNSwyLjk4NlxcdGMtNi44MjYsMi43OTktMTIuNDEzLDguMjU2LTE1LjMxNiwxNS4xMTFjLTIuMjg4LDAuMjk2LTQuNTA3LDEuMDExLTYuNjIyLDIuMTM1QzYuOTY5LDU1LjgxMywyLjkyMiw2Mi40ODQsMy4wMDEsNjkuNzE2XFx0QzMuMTE3LDgwLjM0OSwxMS44NjQsODksMjIuNSw4OUg2OWMwLjA3NywwLDAuMTU0LTAuMDAxLDAuMjMxLTAuMDA0QzY5LjMyLDg4Ljk5OSw2OS40MSw4OSw2OS41LDg5Qzc5LjcwMSw4OSw4OCw4MC43MDEsODgsNzAuNVxcdGMwLTAuNTQ2LTAuMDI0LTEuMDkyLTAuMDcyLTEuNjM1YzAuNDc0LTAuMjk0LDAuOTE5LTAuNjQ0LDEuMzI4LTEuMDQ2YzIuMDg3LTIuMDY0LDIuNzc3LTUuMDY1LDEuNzk5LTcuODM1bC0wLjI3MS0wLjc2N1xcdGMxLjc5My0wLjgxMywzLjE5Ny0yLjMzOCwzLjgxMi00LjIwNGMwLjQ5MS0xLjQ0MywwLjQ5Ni0yLjk4MSwwLjA2MS00LjM5NmwwLjcwMy0wLjMzMmMyLjY1Mi0xLjI1MSw0LjMtMy44NSw0LjMtNi43ODJcXHRDOTkuNjU5LDQwLjU3Myw5OC4wMTMsMzcuOTc2LDk1LjM2MiwzNi43MjN6XFxcIiBvcGFjaXR5PVxcXCIuMzVcXFwiIC8+PHBhdGggZmlsbD1cXFwiI2YyZjJmMlxcXCIgZD1cXFwiTTkzLjM2MiwzNC43MjNsLTAuNzAyLTAuMzMxYzAuNDM3LTEuNDAzLDAuNDM3LTIuOTIzLTAuMDQxLTQuMzI4XFx0Yy0wLjYyOC0xLjkxNC0yLjAzNi0zLjQ1NC0zLjgzMy00LjI3MWwwLjI2OS0wLjc1N2MwLjk3OS0yLjc2OCwwLjI5MS01Ljc3LTEuNzk1LTcuODMxYy0xLjQxNC0xLjQwMS0zLjI4NS0yLjE3My01LjI2OC0yLjE3M1xcdGMtMC44OCwwLTEuNzQ5LDAuMTUzLTIuNTk2LDAuNDYybC0wLjUzNywwLjE5N2MtMS4yMDQtMi4zMDItMy41ODctMy43OS02LjMxNy0zLjc5Yy0wLjY4MSwwLTEuMzUzLDAuMDk4LTEuOTk3LDAuMjg3bC0wLjQ4OC0wLjk1MVxcdGMtMS4yOC0yLjQ5MS0zLjgxNC00LjA1Mi02LjY3MS00LjA3MmMtMi43NzQsMC01LjMxLDEuNTIxLTYuNjE3LDMuOTdsLTAuNjA4LDEuMTRjLTAuNzI3LTAuMjQ1LTEuNDkzLTAuMzczLTIuMjcyLTAuMzczXFx0Yy0yLjc2MywwLTUuMTY4LDEuNTIzLTYuMzU5LDMuODczbC0xLjA5OS0wLjM4NmMtMC44MDYtMC4yODUtMS42NDctMC40My0yLjUtMC40M2MtMS45NCwwLTMuNzgzLDAuNzQyLTUuMTkyLDIuMDk1XFx0Yy0yLjA1LDEuOTcxLTIuODA3LDQuODg1LTEuOTc0LDcuNjA0bDAuNDE5LDEuMzY2Yy0xLjU2OSwwLjg1Ny0yLjc5MywyLjI5NC0zLjM3NSw0LjA1MmMtMC4zMTgsMC45NzYtMC40MTUsMS45OTQtMC4zMDUsMi45ODZcXHRjLTYuODI2LDIuNzk5LTEyLjQxMyw4LjI1Ni0xNS4zMTYsMTUuMTExYy0yLjI4OCwwLjI5Ni00LjUwNywxLjAxMS02LjYyMiwyLjEzNUM0Ljk2OSw1My44MTMsMC45MjIsNjAuNDg0LDEuMDAxLDY3LjcxNlxcdEMxLjExNyw3OC4zNDksOS44NjQsODcsMjAuNSw4N0g2N2MwLjA3NywwLDAuMTU0LTAuMDAxLDAuMjMxLTAuMDA0QzY3LjMyLDg2Ljk5OSw2Ny40MSw4Nyw2Ny41LDg3Qzc3LjcwMSw4Nyw4Niw3OC43MDEsODYsNjguNVxcdGMwLTAuNTQ2LTAuMDI0LTEuMDkyLTAuMDcyLTEuNjM1YzAuNDc0LTAuMjk0LDAuOTE5LTAuNjQ0LDEuMzI4LTEuMDQ2YzIuMDg3LTIuMDY0LDIuNzc3LTUuMDY1LDEuNzk5LTcuODM1bC0wLjI3MS0wLjc2N1xcdGMxLjc5My0wLjgxMywzLjE5Ny0yLjMzOCwzLjgxMi00LjIwNGMwLjQ5MS0xLjQ0MywwLjQ5Ni0yLjk4MSwwLjA2MS00LjM5NmwwLjcwMy0wLjMzMmMyLjY1Mi0xLjI1MSw0LjMtMy44NSw0LjMtNi43ODJcXHRDOTcuNjU5LDM4LjU3Myw5Ni4wMTMsMzUuOTc2LDkzLjM2MiwzNC43MjN6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiNmOWI4NGZcXFwiIGQ9XFxcIk04My41OTIsNDcuMjVjLTAuMjI3LTAuMjU2LTAuMzIyLTAuNjAyLTAuMjUzLTAuOTM3YzAuMDY4LTAuMzM1LDAuMjktMC42MTgsMC42LTAuNzY0bDYuNjQ3LTMuMTRcXHRjMC43NjQtMC4zNjEsMC43NjQtMS40NDgsMC0xLjgwOGwtNi42NDctMy4xNGMtMC4zMS0wLjE0Ni0wLjUzMi0wLjQyOS0wLjYtMC43NjRjLTAuMDY5LTAuMzM1LDAuMDI2LTAuNjgyLDAuMjUzLTAuOTM3bDIuNzIzLTMuMDUyXFx0YzAuMjItMC4yNDYsMC4xNjMtMC41MTQsMC4xMjgtMC42MThzLTAuMTUtMC4zNTQtMC40NzMtMC40MmwtNC41MTgtMC45MjljLTAuMzA5LTAuMDYzLTAuNTc0LTAuMjU3LTAuNzI5LTAuNTNcXHRjLTAuMTU0LTAuMjc0LTAuMTgyLTAuNjAxLTAuMDc2LTAuODk3bDIuMjgxLTYuNDQ1YzAuMjgyLTAuNzk4LTAuNDkzLTEuNTY0LTEuMjg3LTEuMjcybC02LjE2MywyLjI2M1xcdGMtMC4xMjQsMC4wNDctMC4yNTMsMC4wNjktMC4zODIsMC4wNjljLTAuMTgyLDAtMC4zNjMtMC4wNDUtMC41MjYtMC4xMzVjLTAuMjc4LTAuMTUzLTAuNDc1LTAuNDItMC41MzktMC43MzFsLTAuODU5LTQuMTU2XFx0Yy0wLjA3Mi0wLjM0Ny0wLjM3NS0wLjUwNS0wLjYyOC0wLjUwNWMtMC4xNTQsMC0wLjI5MywwLjA1NC0wLjQxNCwwLjE2MWwtMi44MDYsMi40ODhjLTAuMjAxLDAuMTc4LTAuNDU5LDAuMjc0LTAuNzIzLDAuMjc0XFx0Yy0wLjA2NywwLTAuMTM1LTAuMDA2LTAuMjAzLTAuMDE5Yy0wLjMzMS0wLjA2Mi0wLjYxNS0wLjI3NS0wLjc2OC0wLjU3NWwtMy4zNTUtNi41MjRjLTAuMzY5LTAuNzE3LTEuMzkyLTAuNzI1LTEuNzcyLTAuMDEzXFx0bC0zLjU2NCw2LjY4MWMtMC4xNTYsMC4yOTUtMC40MzksMC41MDMtMC43NjgsMC41NjJjLTAuMDY0LDAuMDEyLTAuMTMsMC4wMTgtMC4xOTQsMC4wMThjLTAuMjY0LDAtMC41MjItMC4wOTYtMC43MjMtMC4yNzRcXHRsLTIuOTUxLTIuNjE4Yy0wLjEyLTAuMTA3LTAuMjYtMC4xNjEtMC40MTQtMC4xNjFjLTAuMjUyLDAtMC41NTUsMC4xNTgtMC42MjgsMC41MDVsLTAuODYxLDQuMTZcXHRjLTAuMDY0LDAuMzA4LTAuMjU4LDAuNTczLTAuNTMyLDAuNzI3Yy0wLjE2NSwwLjA5My0wLjM0OSwwLjEzOS0wLjUzMywwLjEzOWMtMC4xMjMsMC0wLjI0Ny0wLjAyMS0wLjM2Ni0wLjA2M2wtNi43MDMtMi4zNTJcXHRjLTAuNzc0LTAuMjcyLTEuNTI3LDAuNDUyLTEuMjg3LDEuMjM2bDIuMDcsNi43NThjMC4wOTEsMC4yOTIsMC4wNTQsMC42MDktMC4xMDIsMC44NzNjLTAuMTU2LDAuMjYzLTAuNDE3LDAuNDQ5LTAuNzE3LDAuNTExXFx0bC0zLjc2OSwwLjc3NGMtMC4zMjMsMC4wNjYtMC40MzgsMC4zMTYtMC40NzMsMC40MmMtMC4wMzQsMC4xMDQtMC4wOTEsMC4zNzIsMC4xMjksMC42MThsMi42MDIsMi45MThcXHRjMC4yMjcsMC4yNTYsMC4zMjIsMC42MDIsMC4yNTMsMC45MzdjLTAuMDY4LDAuMzM1LTAuMjksMC42MTgtMC42LDAuNzY0TDQxLjgsMzcuNjExYy05LjQxOCwwLjk1Ny0xNy4wMzUsNy45OTQtMTguODczLDE3LjEyM1xcdGMtMi41MTItMC40NzUtNS4zOTItMC4yNC04LjMxMiwxLjMxMmMtNC4zNDQsMi4zMDktNy4xNjcsNi42NzktNy4xMTMsMTEuNTk4QzcuNTc4LDc0Ljc1OCwxMy4zNjksODAuNSwyMC41LDgwLjVINjd2LTAuMDI1XFx0YzAuMTY3LDAuMDA3LDAuMzMxLDAuMDI1LDAuNSwwLjAyNWM2LjYyNywwLDEyLTUuMzczLDEyLTEyYzAtMy44MTItMS43ODMtNy4yMDItNC41NTQtOS40YzAuMDUtMC4wMDcsMC4wOTktMC4wMTksMC4xNDktMC4wMTlcXHRjMC4xMjksMCwwLjI1OCwwLjAyMywwLjM4MiwwLjA2OWw2LjE2MiwyLjI3MmMwLjc5NSwwLjI5MywxLjU3MS0wLjQ3MywxLjI4OS0xLjI3MWwtMi4yOC02LjQ1NVxcdGMtMC4xMDYtMC4yOTYtMC4wNzgtMC42MjMsMC4wNzYtMC44OTdjMC4xNTQtMC4yNzMsMC40Mi0wLjQ2OCwwLjcyOS0wLjUzbDQuNTE4LTAuOTI5YzAuMzIzLTAuMDY2LDAuNDM4LTAuMzE2LDAuNDczLTAuNDJcXHRjMC4wMzUtMC4xMDQsMC4wOTEtMC4zNzItMC4xMjgtMC42MThMODMuNTkyLDQ3LjI1elxcXCIgLz48Y2lyY2xlIGN4PVxcXCI2My4yNVxcXCIgY3k9XFxcIjQyXFxcIiByPVxcXCIxMi41XFxcIiBmaWxsPVxcXCIjZmZjNTcxXFxcIiAvPjxwYXRoIGZpbGw9XFxcIiM5NGNmZmZcXFwiIGQ9XFxcIk03OCw2OC41Qzc4LDc0LjI5LDczLjI5LDc5LDY3LjUsNzljLTAuMDcsMC0wLjE0LTAuMDEtMC4yLTAuMDFsLTAuMjQtMC4wMVxcdGMtMC4wMi0wLjAxLTAuMDQtMC4wMS0wLjA2LTAuMDFjLTAuMDksMC0wLjE3LDAuMDEtMC4yNiwwLjAzSDIwLjVDMTQuMTYsNzksOSw3My44NCw5LDY3LjVTMTQuMTYsNTYsMjAuNSw1NlxcdGMwLjY5LDAsMS40MiwwLjA3LDIuMTUsMC4yMWMwLjgsMC4xNiwxLjU4LTAuMzcsMS43NS0xLjE4QzI2LjI3LDQ1Ljc0LDM0LjUxLDM5LDQ0LDM5YzEwLjI1LDAsMTguOCw3LjY4LDE5Ljg4LDE3Ljg2XFx0YzAuMDUsMC40MSwwLjI2LDAuNzksMC41OSwxLjA0YzAuMzQsMC4yNSwwLjc2LDAuMzUsMS4xNywwLjI4QzY2LjMsNTguMDYsNjYuOTEsNTgsNjcuNSw1OEM3My4yOSw1OCw3OCw2Mi43MSw3OCw2OC41elxcXCIgLz48cGF0aCBmaWxsPVxcXCIjNDAzOTZlXFxcIiBkPVxcXCJNOTEuMjMsMzkuMjRsLTYuMTUtMi45bDIuMzUtMi42M2MwLjUyLTAuNTgsMC42OC0xLjM3LDAuNDQtMi4wOWMtMC4yNC0wLjczLTAuODQtMS4yNy0xLjYtMS40MlxcdGwtMS40OC0wLjNsLTIuNTctMC41M2wyLjEyLTZjMC4zMy0wLjkyLDAuMS0xLjkzLTAuNi0yLjYxYy0wLjY5LTAuNjktMS43LTAuOTEtMi42Mi0wLjU3bC01LjcyLDIuMWwtMC43Ni0zLjY5XFx0Yy0wLjIxLTEtMS4wNy0xLjctMi4xLTEuN2MtMC41MSwwLTEuMDEsMC4xOS0xLjQxLDAuNTRsLTIuNDEsMi4xNGwtMy4xMS02LjA2Yy0wLjQzLTAuODMtMS4yNy0xLjM1LTIuMi0xLjM2Yy0wLjAxLDAtMC4wMiwwLTAuMDIsMFxcdGMtMC45MywwLTEuNzcsMC41MS0yLjIxLDEuMzNsLTMuMzIsNi4yMmwtMi41Ni0yLjI3Yy0wLjQtMC4zNS0wLjg5LTAuNTQtMS40MS0wLjU0Yy0xLjAzLDAtMS44OSwwLjctMi4xLDEuN2wtMC43NiwzLjdsLTYuMjctMi4yXFx0Yy0wLjg5LTAuMzEtMS44Ny0wLjEtMi41NiwwLjU2Yy0wLjY4LDAuNjUtMC45MywxLjYzLTAuNjYsMi41M2wxLjk0LDYuMzNsLTMuMzIsMC42OGMtMC43NiwwLjE1LTEuMzUsMC42OC0xLjYsMS40MlxcdGMtMC4yNCwwLjczLTAuMDcsMS41MSwwLjQ0LDIuMDlsMi4xOSwyLjQ2Yy05LjI1LDEuMTMtMTcuMDIsNy45NC0xOS40MSwxNi45Yy0wLjY2LTAuMDYtMS4zMi0wLjA3LTEuOTgtMC4wMlxcdGMtMC4yNCwwLjAxLTAuNDgsMC4wMy0wLjcyLDAuMDZjLTEuNzcsMC4xOS0zLjUyLDAuNzMtNS4xNywxLjYxQzguOTcsNTcuMzUsNS45NCw2Mi4zLDYsNjcuNjZDNi4wOSw3NS41NywxMi41OSw4MiwyMC41LDgySDY3XFx0YzAuMDYsMCwwLjEyLDAsMC4xOC0wLjAxQzY3LjI5LDgyLDY3LjM5LDgyLDY3LjUsODJDNzQuOTQsODIsODEsNzUuOTQsODEsNjguNWMwLTIuMjMtMC41NC00LjM4LTEuNTUtNi4yOWwxLjY3LDAuNjJcXHRjMC45MiwwLjM0LDEuOTIsMC4xMiwyLjYyLTAuNTdjMC43LTAuNjgsMC45My0xLjY5LDAuNi0yLjYxbC0yLjEyLTYuMDFsMy4zMi0wLjY4bDAuNzMtMC4xNWMwLjc2LTAuMTYsMS4zNS0wLjY5LDEuNTktMS40MVxcdGMwLjI1LTAuNzMsMC4wOS0xLjUyLTAuNDMtMi4xbC0yLjM1LTIuNjNsNi4xNS0yLjkxYzAuODgtMC40MSwxLjQzLTEuMjgsMS40My0yLjI2QzkyLjY2LDQwLjUzLDkyLjExLDM5LjY2LDkxLjIzLDM5LjI0eiBNODMuMyw0NC4xOWMtMC43NCwwLjM1LTEuMjcsMS4wMy0xLjQzLDEuODJjLTAuMDMsMC4xNy0wLjA1LDAuMzQtMC4wNSwwLjUyYzAsMC42MywwLjIzLDEuMjQsMC42NSwxLjcybDEuNzIsMS45MmwtMy4wNCwwLjYzXFx0Yy0wLjczLDAuMTUtMS4zNiwwLjYxLTEuNzMsMS4yNmMtMC4zNywwLjY2LTAuNDQsMS40NC0wLjE5LDIuMTRsMS45Myw1LjQ1bC01LjE1LTEuOWMtMC40MS0wLjE1LTAuODQtMC4yMS0xLjI3LTAuMTRcXHRjLTAuNTksMC4wOS0xLjA4LDAuNTEtMS4yNCwxLjA5Yy0wLjE2LDAuNTgsMC4wNCwxLjIsMC41MSwxLjU3Qzc2LjU1LDYyLjI4LDc4LDY1LjI4LDc4LDY4LjVDNzgsNzQuMjksNzMuMjksNzksNjcuNSw3OVxcdGMtMC4wNywwLTAuMTQtMC4wMS0wLjItMC4wMWwtMC4yNC0wLjAxYy0wLjAyLTAuMDEtMC4wNC0wLjAxLTAuMDYtMC4wMWMtMC4wOSwwLTAuMTcsMC4wMS0wLjI2LDAuMDNIMjAuNVxcdEMxNC4yMyw3OSw5LjA3LDczLjksOSw2Ny42M2MtMC4wNS00LjIzLDIuMzgtOC4xNiw2LjMyLTEwLjI2YzEuMy0wLjY5LDIuNjMtMS4xMiwzLjk5LTEuMjljMC4yLTAuMDIsMC4zOS0wLjA0LDAuNTktMC4wNVxcdGMwLjkxLTAuMDYsMS44MywwLDIuNzUsMC4xOGMwLjgsMC4xNSwxLjU4LTAuMzcsMS43NS0xLjE4YzEuNzEtOC41LDguOTMtMTUuMDUsMTcuNTUtMTUuOTNjMC4xOC0wLjAyLDAuMzYtMC4wNywwLjUyLTAuMTVcXHRsMC41NC0wLjI3YzAuNzQtMC4zNSwxLjI3LTEuMDMsMS40My0xLjgycy0wLjA2LTEuNjItMC42LTIuMjNsLTEuNi0xLjhsMi4yOS0wLjQ3YzAuNzEtMC4xNCwxLjM0LTAuNTksMS43MS0xLjIxXFx0YzAuMzctMC42MywwLjQ2LTEuMzksMC4yNC0yLjA4bC0xLjc4LTUuODFsNS43OCwyLjAzYzAuNywwLjI0LDEuNDgsMC4xNywyLjEyLTAuMTljMC42Ni0wLjM3LDEuMTItMSwxLjI3LTEuNzNsMC41Ni0yLjY5bDEuODMsMS42MlxcdGMwLjU4LDAuNTMsMS40LDAuNzUsMi4xOCwwLjYxYzAuNzktMC4xNCwxLjQ1LTAuNjMsMS44Mi0xLjMzbDMuMTItNS44NGwyLjkxLDUuNjdjMC4zNiwwLjcxLDEuMDUsMS4yMiwxLjgzLDEuMzdcXHRjMC43OSwwLjE1LDEuNjEtMC4wOCwyLjItMC42MUw3MiwyMC42OGwwLjU2LDIuNjhjMC4xNSwwLjc0LDAuNjIsMS4zOCwxLjI4LDEuNzRjMC42NSwwLjM2LDEuNDYsMC40MywyLjE1LDAuMTdsNS4xNy0xLjlcXHRsLTEuOTMsNS40NGMtMC4yNSwwLjctMC4xOCwxLjQ4LDAuMTksMi4xNGMwLjM2LDAuNjUsMSwxLjExLDEuNzMsMS4yNmwzLjA0LDAuNjJsLTEuNzIsMS45M2MtMC41NCwwLjYxLTAuNzYsMS40NC0wLjYsMi4yNFxcdGMwLjE2LDAuNzksMC43LDEuNDcsMS40MywxLjgybDUuNjksMi42OEw4My4zLDQ0LjE5elxcXCIgLz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sLmpzXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZC5qc1wiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiaWNvbnM4LXJhaW4tNTBcIixcbiAgXCJ1c2VcIjogXCJpY29uczgtcmFpbi01MC11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAwIDEwMFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIGlkPVxcXCJpY29uczgtcmFpbi01MFxcXCI+PHBhdGggZD1cXFwiTTc5LjA5LDYyLjU1YzEuOCwwLjc1LDMuMTgsMi4yOSwzLjczLDQuMTdjMS45Myw2LjcyLDIuMzYsMTEuNjcsMS4yNiwxNC42OVxcdGMtMS4wNSwyLjg4LTMuMTUsNS4xNy01LjkzLDYuNDdjLTEuNTMsMC43MS0zLjE2LDEuMDgtNC44NCwxLjA4Yy0xLjM0LDAtMi42Ni0wLjI0LTMuOTItMC43Yy00Ljc4LTEuNzQtNy43LTYuMzQtNy41My0xMS4xN1xcdGMtMS4xMiwyLjU0LTMuMDgsNC41Ni01LjYxLDUuNzRjLTEuNTMsMC43MS0zLjE1LDEuMDctNC44MywxLjA3Yy0xLjMzLDAtMi42NS0wLjIzLTMuOTEtMC42OWMtMi44Ny0xLjA0LTUuMTYtMy4xNC02LjQ1LTUuOTFcXHRjLTAuMTctMC4zNS0wLjMxLTAuNy0wLjQzLTEuMDZjMC4xMSwyLjA4LTAuMDYsMy44My0wLjU1LDUuMTdjLTEuMDUsMi44OC0zLjE1LDUuMTctNS45Myw2LjQ3Yy0xLjUzLDAuNzEtMy4xNiwxLjA4LTQuODQsMS4wOFxcdGMtMS4zNCwwLTIuNjYtMC4yNC0zLjkyLTAuN2MtNS45NC0yLjE2LTkuMDEtOC43NS02Ljg1LTE0LjY5YzEuMzctMy43OCw2LjQyLTcuNzYsMTAuNDEtMTAuNDRjMC4wNy0wLjA1LDAuMTUtMC4wOCwwLjIyLTAuMTNIMjlcXHRjLTEwLjQ4LDAtMTktOC41Mi0xOS0xOWMwLTkuODksNy40Mi0xOC4wMiwxNy4yNy0xOC45MmMwLjM3LTAuMDMsMC43Ny0wLjA2LDEuMTctMC4wN0MzMi42NSwxNiw0MS44MywxMCw1MiwxMHMxOS4zNSw2LDIzLjU2LDE1LjAxXFx0YzAuNDEsMC4wMSwwLjgxLDAuMDQsMS4yMiwwLjA4Qzg2LjU4LDI1Ljk4LDk0LDM0LjExLDk0LDQ0Qzk0LDUzLjA3LDg3LjYsNjAuNjcsNzkuMDksNjIuNTV6XFxcIiBvcGFjaXR5PVxcXCIuMzVcXFwiIC8+PHBhdGggZmlsbD1cXFwiI2YyZjJmMlxcXCIgZD1cXFwiTTc3LjA5LDYwLjU1YzEuOCwwLjc1LDMuMTgsMi4yOSwzLjczLDQuMTdjMS45Myw2LjcyLDIuMzYsMTEuNjcsMS4yNiwxNC42OVxcdGMtMS4wNSwyLjg4LTMuMTUsNS4xNy01LjkzLDYuNDdjLTEuNTMsMC43MS0zLjE2LDEuMDgtNC44NCwxLjA4Yy0xLjM0LDAtMi42Ni0wLjI0LTMuOTItMC43Yy00Ljc4LTEuNzQtNy43LTYuMzQtNy41My0xMS4xN1xcdGMtMS4xMiwyLjU0LTMuMDgsNC41Ni01LjYxLDUuNzRjLTEuNTMsMC43MS0zLjE1LDEuMDctNC44MywxLjA3Yy0xLjMzLDAtMi42NS0wLjIzLTMuOTEtMC42OWMtMi44Ny0xLjA0LTUuMTYtMy4xNC02LjQ1LTUuOTFcXHRjLTAuMTctMC4zNS0wLjMxLTAuNy0wLjQzLTEuMDZjMC4xMSwyLjA4LTAuMDYsMy44My0wLjU1LDUuMTdjLTEuMDUsMi44OC0zLjE1LDUuMTctNS45Myw2LjQ3Yy0xLjUzLDAuNzEtMy4xNiwxLjA4LTQuODQsMS4wOFxcdGMtMS4zNCwwLTIuNjYtMC4yNC0zLjkyLTAuN2MtNS45NC0yLjE2LTkuMDEtOC43NS02Ljg1LTE0LjY5YzEuMzctMy43OCw2LjQyLTcuNzYsMTAuNDEtMTAuNDRjMC4wNy0wLjA1LDAuMTUtMC4wOCwwLjIyLTAuMTNIMjdcXHRDMTYuNTIsNjEsOCw1Mi40OCw4LDQyYzAtOS44OSw3LjQyLTE4LjAyLDE3LjI3LTE4LjkyYzAuMzctMC4wMywwLjc3LTAuMDYsMS4xNy0wLjA3QzMwLjY1LDE0LDM5LjgzLDgsNTAsOHMxOS4zNSw2LDIzLjU2LDE1LjAxXFx0YzAuNDEsMC4wMSwwLjgxLDAuMDQsMS4yMiwwLjA4Qzg0LjU4LDIzLjk4LDkyLDMyLjExLDkyLDQyQzkyLDUxLjA3LDg1LjYsNTguNjcsNzcuMDksNjAuNTV6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiM5NGNmZmZcXFwiIGQ9XFxcIk03MywyOS41Yy0xLjM1OSwwLTIuNjYzLDAuMjI0LTMuODg4LDAuNjI0QzY3LjMxNSwyMS4yMTIsNTkuNDQyLDE0LjUsNTAsMTQuNVxcdHMtMTcuMzE1LDYuNzEyLTE5LjExMiwxNS42MjRDMjkuNjYzLDI5LjcyNCwyOC4zNTksMjkuNSwyNywyOS41Yy02LjkwNCwwLTEyLjUsNS41OTYtMTIuNSwxMi41UzIwLjA5Niw1NC41LDI3LDU0LjVcXHRjMC4xNjksMCw0NS44MzEsMCw0NiwwYzYuOTA0LDAsMTIuNS01LjU5NiwxMi41LTEyLjVTNzkuOTA0LDI5LjUsNzMsMjkuNXpcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzQwMzk2ZVxcXCIgZD1cXFwiTTczLDU2SDI3Yy03LjcyLDAtMTQtNi4yOC0xNC0xNHM2LjI4LTE0LDE0LTE0YzAuOTM3LDAsMS44NywwLjA5NSwyLjc5LDAuMjgzXFx0QzMyLjMxNSwxOS4zMzksNDAuNTc0LDEzLDUwLDEzczE3LjY4NSw2LjMzOSwyMC4yMSwxNS4yODNDNzEuMTMsMjguMDk1LDcyLjA2MywyOCw3MywyOGM3LjcyLDAsMTQsNi4yOCwxNCwxNFM4MC43Miw1Niw3Myw1NnogTTI3LDMxYy02LjA2NSwwLTExLDQuOTM1LTExLDExczQuOTM1LDExLDExLDExaDQ2YzYuMDY1LDAsMTEtNC45MzUsMTEtMTFzLTQuOTM1LTExLTExLTExYy0xLjE1NCwwLTIuMzA2LDAuMTg1LTMuNDIyLDAuNTVcXHRjLTAuNDA1LDAuMTM1LTAuODUsMC4wODUtMS4yMjItMC4xM2MtMC4zNy0wLjIxNi0wLjYzLTAuNTc5LTAuNzE1LTAuOTk5QzY1Ljk1NiwyMi4wNjQsNTguNTM3LDE2LDUwLDE2XFx0cy0xNS45NTYsNi4wNjQtMTcuNjQyLDE0LjQyMWMtMC4wODUsMC40Mi0wLjM0NSwwLjc4My0wLjcxNSwwLjk5OWMtMC4zNzEsMC4yMTctMC44MTYsMC4yNjQtMS4yMjIsMC4xM1xcdEMyOS4zMDYsMzEuMTg1LDI4LjE1NCwzMSwyNywzMXpcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzI3ODViZFxcXCIgZD1cXFwiTTU0LjA1MSw3Mi4xNTVjMC45MzEtMi41NTktMS4zOS0xMC41OTYtMS4zOS0xMC41OTZzLTYuOTQ1LDQuNjY1LTcuODc2LDcuMjI0XFx0Yy0wLjkzMSwyLjU1OSwwLjM4OCw1LjM4OCwyLjk0Nyw2LjMyQzUwLjI5LDc2LjAzMyw1My4xMiw3NC43MTQsNTQuMDUxLDcyLjE1NXpcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzQwMzk2ZVxcXCIgZD1cXFwiTTQ5LjQyMiw3Ni45MDJjLTAuNzQyLDAtMS40ODUtMC4xMy0yLjIwNC0wLjM5MmMtMS42MTMtMC41ODctMi45MDItMS43NjgtMy42MjgtMy4zMjRcXHRjLTAuNzI2LTEuNTU4LTAuODAyLTMuMzA0LTAuMjE0LTQuOTE4YzEuMDQ1LTIuODcyLDcuMjIyLTcuMTMxLDguNDQ5LTcuOTU1YzAuMzk3LTAuMjY3LDAuOS0wLjMyOCwxLjM0OS0wLjE2NFxcdGMwLjQ1LDAuMTYzLDAuNzk2LDAuNTMyLDAuOTI5LDAuOTkzYzAuNDEsMS40MiwyLjQwMyw4LjY1MSwxLjM1NywxMS41MjVsMCwwYy0wLjU4NywxLjYxNC0xLjc2OCwyLjkwMy0zLjMyNCwzLjYyOVxcdEM1MS4yNzEsNzYuNyw1MC4zNDgsNzYuOTAyLDQ5LjQyMiw3Ni45MDJ6IE01MS43NjMsNjQuMDI3Yy0yLjYzOCwxLjk0Ni01LjE4Myw0LjIwNy01LjU2OCw1LjI2OFxcdGMtMC4zMTMsMC44NjEtMC4yNzIsMS43OTMsMC4xMTQsMi42MjRjMC4zODgsMC44MywxLjA3NSwxLjQ2LDEuOTM2LDEuNzczYzAuODYxLDAuMzEzLDEuNzkzLDAuMjczLDIuNjI0LTAuMTE0XFx0YzAuODMtMC4zODgsMS40Ni0xLjA3NSwxLjc3My0xLjkzNmwwLDBDNTMuMDI3LDcwLjU4MSw1Mi41MzIsNjcuMjEzLDUxLjc2Myw2NC4wMjd6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiMyNzg1YmRcXFwiIGQ9XFxcIk03NS45Nyw3Ny4xODljMC45MzctMi41NzUtMS4zOTktMTAuNjYzLTEuMzk5LTEwLjY2M3MtNi45ODksNC42OTQtNy45MjYsNy4yNjlcXHRjLTAuOTM3LDIuNTc1LDAuMzksNS40MjIsMi45NjUsNi4zNTlDNzIuMTg1LDgxLjA5MSw3NS4wMzIsNzkuNzY0LDc1Ljk3LDc3LjE4OXpcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzQwMzk2ZVxcXCIgZD1cXFwiTTcxLjMxMiw4MS45NTdjLTAuNzQ2LDAtMS40OTMtMC4xMzEtMi4yMTQtMC4zOTRjLTMuMzQ4LTEuMjE4LTUuMDgtNC45MzQtMy44NjMtOC4yODFcXHRjMS4wNTItMi44ODksNy4yNjUtNy4xNzMsOC41LTguMDAyYzAuMzk2LTAuMjY3LDAuODk5LTAuMzI3LDEuMzQ5LTAuMTY0YzAuNDUsMC4xNjMsMC43OTYsMC41MzIsMC45MjksMC45OTNcXHRjMC40MTIsMS40MjksMi40MTgsOC43MDUsMS4zNjcsMTEuNTkybDAsMGMtMC41OSwxLjYyMi0xLjc3NiwyLjkxNy0zLjM0MSwzLjY0NkM3My4xNyw4MS43NTMsNzIuMjQyLDgxLjk1Nyw3MS4zMTIsODEuOTU3eiBNNzMuNjcyLDY4Ljk5NGMtMi42NTksMS45NjEtNS4yMjksNC4yNDMtNS42MTgsNS4zMTNjLTAuNjUyLDEuNzk0LDAuMjc2LDMuNzg0LDIuMDY5LDQuNDM4YzEuNzkzLDAuNjUxLDMuNzg0LTAuMjc1LDQuNDM4LTIuMDY5XFx0bDAsMEM3NC45NDksNzUuNjA1LDc0LjQ0OCw3Mi4yMDUsNzMuNjcyLDY4Ljk5NHogTTc1Ljk3LDc3LjE4OGgwLjAxSDc1Ljk3elxcXCIgLz48cGF0aCBmaWxsPVxcXCIjMjc4NWJkXFxcIiBkPVxcXCJNMzEuOTcsNzcuMTg5YzAuOTM3LTIuNTc1LTEuMzk5LTEwLjY2My0xLjM5OS0xMC42NjNzLTYuOTg5LDQuNjk0LTcuOTI2LDcuMjY5XFx0Yy0wLjkzNywyLjU3NSwwLjM5LDUuNDIyLDIuOTY1LDYuMzU5UzMxLjAzMiw3OS43NjQsMzEuOTcsNzcuMTg5elxcXCIgLz48cGF0aCBmaWxsPVxcXCIjNDAzOTZlXFxcIiBkPVxcXCJNMjcuMzEyLDgxLjk1N2MtMC43NDYsMC0xLjQ5My0wLjEzMS0yLjIxNC0wLjM5NGMtMy4zNDgtMS4yMTgtNS4wOC00LjkzNC0zLjg2My04LjI4MVxcdGMxLjA1Mi0yLjg4OSw3LjI2NS03LjE3Myw4LjUtOC4wMDJjMC4zOTYtMC4yNjcsMC44OTktMC4zMjcsMS4zNDktMC4xNjRjMC40NSwwLjE2MywwLjc5NiwwLjUzMiwwLjkyOSwwLjk5M1xcdGMwLjQxMiwxLjQyOSwyLjQxOCw4LjcwNSwxLjM2NywxMS41OTJsMCwwYy0wLjU5LDEuNjIyLTEuNzc2LDIuOTE3LTMuMzQxLDMuNjQ2QzI5LjE3LDgxLjc1MywyOC4yNDIsODEuOTU3LDI3LjMxMiw4MS45NTd6IE0yOS42NzIsNjguOTk0Yy0yLjY1OSwxLjk2MS01LjIyOSw0LjI0My01LjYxOCw1LjMxM2MtMC42NTIsMS43OTQsMC4yNzYsMy43ODQsMi4wNjksNC40MzhjMS43OTQsMC42NTEsMy43ODMtMC4yNzUsNC40MzgtMi4wNjlcXHRsMCwwQzMwLjk0OSw3NS42MDUsMzAuNDQ4LDcyLjIwNSwyOS42NzIsNjguOTk0eiBNMzEuOTcsNzcuMTg4aDAuMDFIMzEuOTd6XFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2wiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2wuanNcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkLmpzXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJpY29uczgtcmFpbi1jbG91ZC01MFwiLFxuICBcInVzZVwiOiBcImljb25zOC1yYWluLWNsb3VkLTUwLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAxMDAgMTAwXCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgaWQ9XFxcImljb25zOC1yYWluLWNsb3VkLTUwXFxcIj48cGF0aCBkPVxcXCJNOTcuNSw0MS43NGMwLDIuNS0xLjQ2LDQuOC0zLjczLDUuODdsLTMuMDMsMS40NWMwLjUzLDEuNDgsMC41OCwzLjEyLDAuMDcsNC42NlxcdGMtMC4zMiwwLjk3LTAuODEsMS44My0xLjQ1LDIuNTVDODkuNzgsNTcuOCw5MCw1OS40LDkwLDYxLjAyYzAsOC42Ni02LjE2LDE1LjkxLTE0LjMzLDE3LjZjMS44OSw1Ljg2LDEuMjYsOC4yNSwxLjA0LDkuMDlcXHRjLTEuMTUsNC4yOS01LjEsNy4yOC05LjU5LDcuMjhjLTAuODgsMC0xLjc2LTAuMTEtMi42Mi0wLjM0Yy0yLjU0LTAuNjgtNC42OC0yLjI4LTYuMDItNC41MWMtMC4zOC0wLjYyLTAuNjctMS4yNy0wLjktMS45NFxcdGMtMC43NywyLjM3LTIuMzgsNC4zMy00LjU5LDUuNTVDNTEuNTEsOTQuNTcsNDkuODQsOTUsNDguMTUsOTVjLTAuODgsMC0xLjc3LTAuMTItMi42Mi0wLjM1Yy0zLjQtMC45MS01LjkyLTMuNDUtNi45NC02LjU0XFx0Yy0xLjI5LDQuMDctNS4xMSw2Ljg4LTkuNDcsNi44OGMtMC44OCwwLTEuNzYtMC4xMS0yLjYxLTAuMzRjLTUuMzQtMS40My04LjUyLTYuODctNy4xMS0xMi4xMmMwLjE2LTAuNjEsMC41NS0yLjA0LDIuNS00LjM1XFx0QzE0LjEzLDc1LjgyLDguNDUsNjguNiw4LjQ1LDYwLjA3YzAtOS42MSw3LjE4LTE3LjU3LDE2LjQ1LTE4Ljc3YzEuMTUtMi42NywyLjcyLTUuMTIsNC42Ni03LjI4Yy0wLjQzLTEuNC0wLjQxLTIuOSwwLjA3LTQuMzNcXHRjMC41OC0xLjgsMS45LTMuMywzLjYxLTQuMTRsLTEuMTUtMy42OWMtMC42OS0yLjI0LTAuMDktNC43OCwxLjUzLTYuNDhjMC44OC0wLjkzLDIuMDEtMS41NywzLjI3LTEuODdsMC4yMy0wLjA1XFx0YzAuNDItMC4wNywwLjg1LTAuMTEsMS4yOC0wLjExYzAuNzksMCwxLjU0LDAuMTMsMi4yNCwwLjM4bDMuMjUsMS4xN2MxLjE1LTIuNSwzLjY0LTQuMTUsNi41Mi00LjE1YzAuODYsMCwxLjcxLDAuMTYsMi41MSwwLjQ2XFx0bDEuNjYtMy4xOGMwLjk5LTEuODksMi45My0zLjIzLDUuMDUtMy40OGwwLjExLTAuMDJjMC4yMi0wLjAyLDAuNDMtMC4wMywwLjY0LTAuMDNjMC4xOSwwLDAuMzgsMC4wMSwwLjU3LDAuMDNcXHRjMi4zMSwwLjE4LDMuMDY4LDMuNjgyLDQuMDc4LDUuNzcybDIuNzYyLDAuODA4YzAuNzItMC4yNCwxLjQ3LTAuMzYsMi4yMy0wLjM2YzIuNzksMCwzLjYzNiwxLjczMyw0LjgxNiw0LjE2M2w0LjQ4NC0xLjE2M1xcdGMwLjc0LTAuMjgsMS41MS0wLjQyLDIuMjktMC40MmMxLjAxLDAsMi4wMiwwLjI1LDIuOTMsMC43YzMuMDUsMS42LDQuMzksNS4wNywzLjI0LDguMTZsLTEuMSwzLjEyYzEuOTQsMC43OCwzLjQ0LDIuMzUsNC4xMiw0LjRcXHRjMC41MSwxLjU2LDAuNDcsMy4yMi0wLjA3LDQuN2wzLjA2LDEuNDVDOTYuMDQsMzYuOTIsOTcuNSwzOS4yMyw5Ny41LDQxLjc0elxcXCIgb3BhY2l0eT1cXFwiLjM1XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiNmMmYyZjJcXFwiIGQ9XFxcIk05NS41LDM5Ljc0YzAsMi41LTEuNDYsNC44LTMuNzMsNS44N2wtMy4wMywxLjQ1YzAuNTMsMS40OCwwLjU4LDMuMTIsMC4wNyw0LjY2XFx0Yy0wLjMyLDAuOTctMC44MSwxLjgzLTEuNDUsMi41NUM4Ny43OCw1NS44LDg4LDU3LjQsODgsNTkuMDJjMCw4LjY2LTYuMTYsMTUuOTEtMTQuMzMsMTcuNmMxLjg5LDUuODYsMS4yNiw4LjI1LDEuMDQsOS4wOVxcdGMtMS4xNSw0LjI5LTUuMSw3LjI4LTkuNTksNy4yOGMtMC44OCwwLTEuNzYtMC4xMS0yLjYyLTAuMzRjLTIuNTQtMC42OC00LjY4LTIuMjgtNi4wMi00LjUxYy0wLjM4LTAuNjItMC42Ny0xLjI3LTAuOS0xLjk0XFx0Yy0wLjc3LDIuMzctMi4zOCw0LjMzLTQuNTksNS41NUM0OS41MSw5Mi41Nyw0Ny44NCw5Myw0Ni4xNSw5M2MtMC44OCwwLTEuNzctMC4xMi0yLjYyLTAuMzVjLTMuNC0wLjkxLTUuOTItMy40NS02Ljk0LTYuNTRcXHRjLTEuMjksNC4wNy01LjExLDYuODgtOS40Nyw2Ljg4Yy0wLjg4LDAtMS43Ni0wLjExLTIuNjEtMC4zNGMtNS4zNC0xLjQzLTguNTItNi44Ny03LjExLTEyLjEyYzAuMTYtMC42MSwwLjU1LTIuMDQsMi41LTQuMzVcXHRDMTIuMTMsNzMuODIsNi40NSw2Ni42LDYuNDUsNTguMDdjMC05LjYxLDcuMTgtMTcuNTcsMTYuNDUtMTguNzdjMS4xNS0yLjY3LDIuNzItNS4xMiw0LjY2LTcuMjhjLTAuNDMtMS40LTAuNDEtMi45LDAuMDctNC4zM1xcdGMwLjU4LTEuOCwxLjktMy4zLDMuNjEtNC4xNGwtMS4xNS0zLjY5Yy0wLjY5LTIuMjQtMC4wOS00Ljc4LDEuNTMtNi40OGMwLjg4LTAuOTMsMi4wMS0xLjU3LDMuMjctMS44N2wwLjIzLTAuMDVcXHRjMC40Mi0wLjA3LDAuODUtMC4xMSwxLjI4LTAuMTFjMC43OSwwLDEuNTQsMC4xMywyLjI0LDAuMzhsMy4yNSwxLjE3YzEuMTUtMi41LDMuNjQtNC4xNSw2LjUyLTQuMTVjMC44NiwwLDEuNzEsMC4xNiwyLjUxLDAuNDZcXHRsMS42Ni0zLjE4YzAuOTktMS44OSwyLjkzLTMuMjMsNS4wNS0zLjQ4bDAuMTEtMC4wMmMwLjIyLTAuMDIsMC40My0wLjAzLDAuNjQtMC4wM2MwLjE5LDAsMC4zOCwwLjAxLDAuNTcsMC4wM1xcdGMyLjMxLDAuMTgsNC4zNiwxLjU4LDUuMzcsMy42N2wxLjQ3LDIuOTFjMC43Mi0wLjI0LDEuNDctMC4zNiwyLjIzLTAuMzZjMi43OSwwLDUuMjksMS42NCw2LjQ3LDQuMDdsMi44My0xLjA3XFx0YzAuNzQtMC4yOCwxLjUxLTAuNDIsMi4yOS0wLjQyYzEuMDEsMCwyLjAyLDAuMjUsMi45MywwLjdjMy4wNSwxLjYsNC4zOSw1LjA3LDMuMjQsOC4xNmwtMS4xLDMuMTJjMS45NCwwLjc4LDMuNDQsMi4zNSw0LjEyLDQuNFxcdGMwLjUxLDEuNTYsMC40NywzLjIyLTAuMDcsNC43bDMuMDYsMS40NUM5NC4wNCwzNC45Miw5NS41LDM3LjIzLDk1LjUsMzkuNzR6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiNmOWI4NGZcXFwiIGQ9XFxcIk03OS43NzQsNDUuOTg2bC0wLjQyOC0wLjg5M2MtMC4wMDItMC4wODYsMC4wMDQtMC4xNzMsMC4wMjItMC4yNTlcXHRjMC4wNzEtMC4zNTUsMC4zMDUtMC42NTUsMC42MzEtMC44MWw5LTQuMjg3bC05LTQuMjg3Yy0wLjMyNS0wLjE1NS0wLjU1OS0wLjQ1NS0wLjYzMS0wLjgxYy0wLjAxOC0wLjA4Ni0wLjAyNC0wLjE3My0wLjAyMi0wLjI1OVxcdGwwLjQyOC0wLjg5M2wyLjcyMi0zLjA3N2MwLjIzMS0wLjI2MSwwLjE3MS0wLjU0NSwwLjEzNS0wLjY1NWMtMC4wMzYtMC4xMS0wLjE1OC0wLjM3NS0wLjQ5Ny0wLjQ0NWwtNC43NS0wLjk4NFxcdGMtMC4zMjUtMC4wNjctMC42MDQtMC4yNzMtMC43NjYtMC41NjJjLTAuMTYyLTAuMjktMC4xOTEtMC42MzctMC4wOC0wLjk1MWwzLjE1My04Ljg3NGMwLjAxLTAuMDI4LDAuMDAzLTAuMDYxLTAuMDg1LTAuMTA3XFx0bC04LjUwMywzLjJjLTAuMTMsMC4wNDktMC4yNjYsMC4wNzMtMC40MDEsMC4wNzNjLTAuMTkxLDAtMC4zODItMC4wNDgtMC41NTMtMC4xNDNjLTAuMjkyLTAuMTYyLTAuNS0wLjQ0NS0wLjU2Ny0wLjc3NVxcdGwtMC45MDMtNC40MDVjLTAuMDc2LTAuMzY4LTAuMzk1LTAuNTM1LTAuNjYtMC41MzVjLTAuMTYyLDAtMC4zMDgsMC4wNTgtMC40MzUsMC4xNzFsLTIuOTUsMi42MzdcXHRjLTAuMjExLDAuMTg5LTAuNDgyLDAuMjktMC43NiwwLjI5Yy0wLjA3MSwwLTAuMTQyLTAuMDA3LTAuMjEzLTAuMDJjLTAuMzQ5LTAuMDY2LTAuNjQ2LTAuMjkxLTAuODA3LTAuNjA5bC00LjM3NS04LjY3MVxcdGMtMC4wMTMtMC4wMjctMC4wMzktMC4wNDMtMC4wNjktMC4wNDRjLTAuMDAzLDAtMC4wMDUsMC0wLjAwOC0wLjAwMWMtMC4wMjYsMC4wMDMtMC4wNTEsMC4wMTktMC4wNjMsMC4wNDNsLTQuNjIsOC44MjZcXHRjLTAuMTY0LDAuMzEzLTAuNDYyLDAuNTMzLTAuODA4LDAuNTk2Yy0wLjA2OCwwLjAxMy0wLjEzNiwwLjAxOS0wLjIwNCwwLjAxOWMtMC4yNzgsMC0wLjU0OS0wLjEwMi0wLjc2LTAuMjlsLTMuMTAzLTIuNzc1XFx0Yy0wLjEyNy0wLjExMy0wLjI3My0wLjE3MS0wLjQzNS0wLjE3MWMtMC4yNjUsMC0wLjU4NCwwLjE2OC0wLjY2LDAuNTM1bC0wLjkwNSw0LjQwOWMtMC4wNjcsMC4zMjYtMC4yNzEsMC42MDctMC41NTksMC43N1xcdGMtMC4xNzQsMC4wOTgtMC4zNjYsMC4xNDgtMC41NjEsMC4xNDhjLTAuMTMsMC0wLjI2LTAuMDIyLTAuMzg1LTAuMDY3bC04LjkyNy0zLjIwNWwtMC4wODIsMC4wMTdcXHRjLTAuMDIxLDAuMDIxLTAuMDI4LDAuMDUzLTAuMDIsMC4wODFsMi44MDYsOS4wODhjMC4wOTUsMC4zMSwwLjA1NywwLjY0Ni0wLjEwNywwLjkyNWMtMC4xNjUsMC4yNzktMC40MzksMC40NzYtMC43NTQsMC41NDFcXHRsLTMuOTYyLDAuODJjLTAuMzQsMC4wNy0wLjQ2MSwwLjMzNS0wLjQ5NywwLjQ0NWMtMC4wMzYsMC4xMS0wLjA5NSwwLjM5NSwwLjEzNSwwLjY1NWwyLjAzOSwyLjMwNmwwLjk4LDEuNjM2bDguMjQsMTguMTQ1XFx0bDMyLjAyOS0wLjM4NWMwLDAtMC4xNTctMC44OTksMC4xNjgtMC45NjVsNC43NS0wLjk4NGMwLjM0LTAuMDcsMC40NjEtMC4zMzUsMC40OTctMC40NDVjMC4wMzYtMC4xMSwwLjA5Ni0wLjM5NS0wLjEzNS0wLjY1NVxcdEw3OS43NzQsNDUuOTg2elxcXCIgLz48Y2lyY2xlIGN4PVxcXCI1OC40XFxcIiBjeT1cXFwiMzkuOTk3XFxcIiByPVxcXCIxMi41XFxcIiBmaWxsPVxcXCIjZmZjNTcxXFxcIiAvPjxwYXRoIGZpbGw9XFxcIiM5NGNmZmZcXFwiIGQ9XFxcIk04MCw1OS4wMmMwLDUuNS00LjQ3NSw5Ljk3NS05Ljk3NSw5Ljk3NWMtMC4wNjcsMC0wLjEzMy0wLjAxLTAuMTktMC4wMWwtMC4yMjgtMC4wMVxcdGMtMC4wMTktMC4wMS0wLjAzOC0wLjAxLTAuMDU3LTAuMDFjLTAuMDg2LDAtMC4xNjEsMC4wMS0wLjI0NywwLjAyOUgyNS4zNzVjLTYuMDIzLDAtMTAuOTI1LTQuOTAyLTEwLjkyNS0xMC45MjVcXHRjMC02LjAyMyw0LjkwMi0xMC45MjUsMTAuOTI1LTEwLjkyNWMwLjY1NiwwLDEuMzQ5LDAuMDY3LDIuMDQzLDAuMTk5YzAuNzYsMC4xNTIsMS41MDEtMC4zNTEsMS42NjMtMS4xMjFcXHRjMS43NzYtOC44MjUsOS42MDQtMTUuMjI4LDE4LjYyLTE1LjIyOGM5LjczNywwLDE3Ljg2LDcuMjk2LDE4Ljg4NiwxNi45NjdjMC4wNDcsMC4zODksMC4yNDcsMC43NSwwLjU2LDAuOTg4XFx0YzAuMzIzLDAuMjM4LDAuNzIyLDAuMzMzLDEuMTEyLDAuMjY2YzAuNjI3LTAuMTE0LDEuMjA2LTAuMTcxLDEuNzY3LTAuMTcxQzc1LjUyNSw0OS4wNDUsODAsNTMuNTE5LDgwLDU5LjAyelxcXCIgLz48cGF0aCBmaWxsPVxcXCIjNDAzOTZlXFxcIiBkPVxcXCJNNzAuMDI1LDcxLjk5NGMtMC4xMTQsMC0wLjIyNy0wLjAwNi0wLjMzNC0wLjAxNUg2OS42OWMtMC4wMDYsMC0wLjAzNy0wLjAwMS0wLjA3OC0wLjAwM1xcdGMtMC4wOTksMC4wMTMtMC4xOTQsMC4wMTgtMC4zMSwwLjAxOEgyNS4zNzVjLTcuNjc4LDAtMTMuOTI1LTYuMjQ3LTEzLjkyNS0xMy45MjVjMC04LjA0Miw2LjgzNy0xNC41NDgsMTUuMDI5LTEzLjg3OVxcdGMxLjIyOC00LjUxNSwzLjg1NC04LjQ4NCw3LjU0Mi0xMS40MDhsLTEuMjE5LTEuMzc3Yy0wLjUxNi0wLjU4NC0wLjY3OS0xLjM3NS0wLjQzNy0yLjExNmMwLjI0NS0wLjc0NywwLjg1LTEuMjg4LDEuNjE5LTEuNDQ3XFx0bDMuNTgyLTAuNzQybC0yLjY5NC04LjcyMmMtMC4xNi0wLjUyLTAuMDA2LTEuMTY2LDAuMzY5LTEuNTZjMC4yMTItMC4yMjIsMC40ODYtMC4zNzMsMC43ODctMC40MzRcXHRjMC4yNjktMC4wNTcsMC42MjgtMC4wNTEsMC44ODcsMC4wNDFsOC41MzgsMy4wNjVsMC44MjItNC4wMTFjMC4yMTItMS4wMjIsMS4wODctMS43MzQsMi4xMy0xLjczNGMwLjUyOSwwLDEuMDIzLDAuMTg5LDEuNDI5LDAuNTQ4XFx0bDIuNzY1LDIuNDczbDQuNDA3LTguNDE5YzAuMjMtMC40NCwwLjcyOC0wLjc4MSwxLjIyMS0wLjgzOGMwLjEwMy0wLjAxMiwwLjIwNC0wLjAxMywwLjMwNy0wLjAwNFxcdGMwLjU2MiwwLjA0NSwxLjA2NCwwLjM5MiwxLjMwNCwwLjkwN2w0LjE0NSw4LjIxMWwyLjYtMi4zMjVjMC40MTEtMC4zNjMsMC45MDUtMC41NTMsMS40MzYtMC41NTNjMS4wMjgsMCwxLjkyNCwwLjczLDIuMTI5LDEuNzM2XFx0bDAuODE5LDMuOTk3bDguMTEtMy4wNTJjMC40LTAuMTQ4LDAuODQ1LTAuMTIyLDEuMjIzLDAuMDc0YzAuODQ0LDAuNDQxLDEuMDM3LDEuMzI0LDAuNzkzLDEuOTY5bC0zLjAwOCw4LjQ2OWw0LjM1NCwwLjkwMlxcdGMwLjc2OSwwLjE1OSwxLjM3MywwLjcsMS42MTgsMS40NDdjMC4yNDIsMC43NDEsMC4wNzksMS41MzItMC40MzcsMi4xMTVsLTIuNTU3LDIuODkybDguNTgsNC4wODZcXHRjMC41MjIsMC4yNDksMC44NTUsMC43NzYsMC44NTUsMS4zNTRzLTAuMzMzLDEuMTA1LTAuODU0LDEuMzU0bC04LjU4Miw0LjA4N2wyLjU1OCwyLjg5MWMwLjUxNiwwLjU4NCwwLjY3OSwxLjM3NSwwLjQzNywyLjExNlxcdGMtMC4yNDgsMC43NDktMC44NTIsMS4yODgtMS42MTgsMS40NDdMODAuOSw1MS45NWMxLjM2NiwyLjA4OSwyLjEsNC41MjcsMi4xLDcuMDY5QzgzLDY2LjE3NCw3Ny4xOCw3MS45OTQsNzAuMDI1LDcxLjk5NHogTTY5LjIwOCw2OS4wMDVjMCwwLTAuMDAxLDAtMC4wMDIsMEM2OS4yMDcsNjkuMDA1LDY5LjIwOCw2OS4wMDUsNjkuMjA4LDY5LjAwNXogTTY5LjUzNSw2OC45NzRjMC4wNDEsMCwwLjA4MSwwLjAwMiwwLjExOCwwLjAwNVxcdGwwLjM3MiwwLjAxNmM1LjUsMCw5Ljk3NS00LjQ3NSw5Ljk3NS05Ljk3NWMwLTIuNjI1LTEuMDItNS4xMDctMi44NzEtNi45ODljLTAuMzg1LTAuMzkyLTAuNTI1LTAuOTYyLTAuMzY2LTEuNDg3XFx0czAuNTk0LTAuOTIyLDEuMTMxLTEuMDMzbDIuNTMxLTAuNTI0bC0xLjc3NC0yLjAwNmMtMC4wOTEtMC4xMDQtMC4xNjgtMC4yMi0wLjIyOS0wLjM0NWwtMC40MjktMC44OTNcXHRjLTAuMDkyLTAuMTkyLTAuMTQzLTAuNDAyLTAuMTQ3LTAuNjE1Yy0wLjAwNC0wLjIsMC4wMTQtMC4zOTgsMC4wNTItMC41OTFjMC4xNjQtMC44MTMsMC43MDgtMS41MTEsMS40NTctMS44NjdsNi4xNTYtMi45MzNcXHRsLTYuMTU2LTIuOTMyYy0wLjc0OS0wLjM1Ni0xLjI5NC0xLjA1Ni0xLjQ1Ny0xLjg3Yy0wLjAzOC0wLjE4Ny0wLjA1Ni0wLjM4Ny0wLjA1Mi0wLjU4OGMwLjAwNS0wLjIxMywwLjA1Ni0wLjQyMywwLjE0Ny0wLjYxNVxcdGwwLjQyOS0wLjg5M2MwLjA2MS0wLjEyNSwwLjEzOC0wLjI0LDAuMjI5LTAuMzQ1bDEuNzc0LTIuMDA2bC0zLjM0Ni0wLjY5M2MtMC43NDgtMC4xNTItMS4zOTYtMC42MjctMS43NzEtMS4zXFx0Yy0wLjM3My0wLjY2Ny0wLjQzOS0xLjQ2My0wLjE4NC0yLjE4NGwyLjEyOC01Ljk5MWwtNS42MjIsMi4xMTVjLTAuNjksMC4yNjUtMS41MzYsMC4yMTItMi4yMS0wLjE2MlxcdGMtMC42NzktMC4zNzktMS4xNTUtMS4wMjktMS4zMS0xLjc4N2wtMC42MTEtMi45ODJsLTEuODY2LDEuNjY5Yy0wLjYxLDAuNTQ1LTEuNDUxLDAuNzgxLTIuMjU5LDAuNjI1XFx0Yy0wLjgwNi0wLjE1My0xLjQ4Ni0wLjY2Ni0xLjg1OS0xLjQwNGwtMy4xMzItNi4yMDZsLTMuMzM4LDYuMzc2Yy0wLjM4MiwwLjcyOS0xLjA2MywxLjIzLTEuODcsMS4zNzZcXHRjLTAuNzc1LDAuMTQ5LTEuNjIzLTAuMDg5LTIuMjI5LTAuNjI2bC0yLjAyMi0xLjgxbC0wLjYxMiwyLjk4OWMtMC4xNTUsMC43NTItMC42MjYsMS4zOTctMS4yOSwxLjc3NFxcdGMtMC42NjYsMC4zNzQtMS40NjYsMC40NDMtMi4xODIsMC4xOWwtNi4yNjEtMi4yNDdsMS45NjgsNi4zN2MwLjIxOCwwLjcxMywwLjEyOCwxLjQ4Ni0wLjI0NywyLjEyNlxcdGMtMC4zODIsMC42NDYtMS4wMTgsMS4xMDItMS43NDUsMS4yNTJsLTIuNTU3LDAuNTI5bDEuMDkyLDEuMjM0YzAuMDU0LDAuMDYyLDAuMTAzLDAuMTI2LDAuMTQ2LDAuMTk1bDAuMjE0LDAuMzRcXHRjMC40MywwLjY4NCwwLjI0MiwxLjU4NC0wLjQyNSwyLjAzOWMtNC4xMjMsMi44MDgtNi45MzksNy4wMi03LjkzMSwxMS44NmMtMC4xNjQsMC44MDEtMC45NDUsMS4zMjUtMS43NDMsMS4xNzRcXHRjLTAuNjY4LTAuMTI0LTEuMzMzLTAuMTg3LTEuOTc2LTAuMTg3Yy02LjAyNCwwLTEwLjkyNSw0LjktMTAuOTI1LDEwLjkyNXM0LjksMTAuOTI1LDEwLjkyNSwxMC45MjVoNDMuODk2XFx0QzY5LjM1NSw2OC45ODEsNjkuNDQ4LDY4Ljk3NCw2OS41MzUsNjguOTc0eiBNODEuMzcyLDUwLjA1NmgwLjAxSDgxLjM3MnogTTc3LjY4NCwyNi44NTZoMC4wMDJcXHRDNzcuNjg2LDI2Ljg1Niw3Ny42ODUsMjYuODU2LDc3LjY4NCwyNi44NTZ6IE03MC41NjksMTkuNjI5Yy0wLjAwMiwwLjAwMS0wLjAwMywwLjAwMS0wLjAwNSwwLjAwMkw3MC41NjksMTkuNjI5eiBNNzguMjc2LDE3LjQzN1xcdGMtMC4wMDgsMC4wMTktMC4wMTQsMC4wMzctMC4wMjEsMC4wNTZMNzguMjc2LDE3LjQzN3ogTTU4LjM5OSw5aDAuMDFINTguMzk5elxcXCIgLz48cGF0aCBmaWxsPVxcXCIjZDllZWZmXFxcIiBkPVxcXCJNNjguNDI5LDg0LjAyN2MtMC40ODEsMS43OTUtMi4zODMsMi44NDQtNC4yNTEsMi4zNDNjLTEuODY4LTAuNS0yLjk5MS0yLjM2LTIuNTEtNC4xNTUgYzAuNDgxLTEuNzk1LDUuMTIyLTUuNTkyLDUuMTIyLTUuNTkyUzY4LjkxLDgyLjIzMSw2OC40MjksODQuMDI3elxcXCIgLz48cGF0aCBmaWxsPVxcXCIjNDAzOTZlXFxcIiBkPVxcXCJNNjguMTkyLDc2LjA5M2MtMC4xNzEtMC40NTItMC41NDktMC43OTQtMS4wMTYtMC45MTljLTAuNDY1LTAuMTI1LTAuOTY0LTAuMDE5LTEuMzM4LDAuMjg4IGMtMS4xNzYsMC45NjMtNS4wNTgsNC4yNjctNS42Miw2LjM2NGMtMC4zMzksMS4yNjctMC4xNDcsMi41OSwwLjUzOSwzLjcyOGMwLjY3NSwxLjExNywxLjc1MiwxLjkyMiwzLjAzMiwyLjI2NiBjMC40NDMsMC4xMTgsMC44ODgsMC4xNzUsMS4zMjUsMC4xNzVjMi4xOSwwLDQuMTg1LTEuNDIxLDQuNzYzLTMuNThDNzAuNDQsODIuMzE1LDY4LjcyOSw3Ny41MTQsNjguMTkyLDc2LjA5M3ogTTY2Ljk3OSw4My42MzggYy0wLjI2NywwLjk5Mi0xLjM1LDEuNTY5LTIuNDEzLDEuMjgzYy0wLjUyNy0wLjE0MS0wLjk2OC0wLjQ2OC0xLjI0LTAuOTE5Yy0wLjI2Mi0wLjQzMi0wLjMzNi0wLjkyOS0wLjIwOS0xLjM5OSBjMC4xNDUtMC41MzMsMS40LTEuOTM3LDIuOTc4LTMuMzlDNjYuNzM1LDgxLjI2MSw2Ny4xMjEsODMuMTA0LDY2Ljk3OSw4My42Mzh6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiNkOWVlZmZcXFwiIGQ9XFxcIk00OS40NTcsODQuMDI3Yy0wLjQ4MSwxLjc5NS0yLjM4MywyLjg0NC00LjI1MSwyLjM0M2MtMS44NjgtMC41LTIuOTkxLTIuMzYtMi41MS00LjE1NSBjMC40ODEtMS43OTUsNS4xMjItNS41OTIsNS4xMjItNS41OTJTNDkuOTM4LDgyLjIzMSw0OS40NTcsODQuMDI3elxcXCIgLz48cGF0aCBmaWxsPVxcXCIjNDAzOTZlXFxcIiBkPVxcXCJNNDkuMjIxLDc2LjA5M2MtMC4xNzEtMC40NTItMC41NDktMC43OTQtMS4wMTYtMC45MTljLTAuNDY1LTAuMTI1LTAuOTY0LTAuMDE5LTEuMzM4LDAuMjg4IGMtMS4xNzYsMC45NjMtNS4wNTgsNC4yNjYtNS42MjEsNi4zNjVjLTAuNjkzLDIuNTksMC45MDksNS4yNzcsMy41NzIsNS45OTJjMC40NDEsMC4xMTgsMC44OSwwLjE3NywxLjMzNCwwLjE3NyBjMC44NDQsMCwxLjY3NS0wLjIxMSwyLjQyNC0wLjYyNGMxLjE2My0wLjY0MSwxLjk5LTEuNjkxLDIuMzMtMi45NTdDNTEuNDY5LDgyLjMxNiw0OS43NTgsNzcuNTE1LDQ5LjIyMSw3Ni4wOTN6IE00OC4wMDgsODMuNjM4IGMtMC4xMjYsMC40Ny0wLjQzOCwwLjg2NC0wLjg4MSwxLjEwN2MtMC40NjEsMC4yNTYtMS4wMDYsMC4zMTktMS41MzIsMC4xNzZjLTEuMDY1LTAuMjg1LTEuNzE2LTEuMzI1LTEuNDUtMi4zMTcgYzAuMTQ1LTAuNTMzLDEuNC0xLjkzNywyLjk3OS0zLjM5MUM0Ny43NjQsODEuMjYxLDQ4LjE0OSw4My4xMDQsNDguMDA4LDgzLjYzOHpcXFwiIC8+PHBhdGggZmlsbD1cXFwiI2Q5ZWVmZlxcXCIgZD1cXFwiTTMwLjQzNiw4NC4wMjdjLTAuNDgxLDEuNzk1LTIuMzgzLDIuODQ0LTQuMjUxLDIuMzQzYy0xLjg2OC0wLjUtMi45OTEtMi4zNi0yLjUxLTQuMTU1IGMwLjQ4MS0xLjc5NSw1LjEyMi01LjU5Miw1LjEyMi01LjU5MlMzMC45MTcsODIuMjMxLDMwLjQzNiw4NC4wMjd6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiM0MDM5NmVcXFwiIGQ9XFxcIk0zMC4yLDc2LjA5Yy0wLjE3LTAuNDUtMC41NS0wLjc5LTEuMDEtMC45MmMtMC40Ny0wLjEyLTAuOTctMC4wMS0xLjM0LDAuMjkgYy0xLjE4LDAuOTYtNS4wNiw0LjI3LTUuNjIsNi4zN2MtMC43LDIuNTksMC45LDUuMjcsMy41Nyw1Ljk5YzAuNDQsMC4xMiwwLjg4LDAuMTcsMS4zMiwwLjE3YzIuMTksMCw0LjE5LTEuNDIsNC43Ny0zLjU3di0wLjAxIEMzMi40NSw4Mi4zMiwzMC43NCw3Ny41MSwzMC4yLDc2LjA5eiBNMjguOTksODMuNjRjLTAuMjcsMC45OS0xLjM2LDEuNTctMi40MiwxLjI4Yy0xLjA2LTAuMjgtMS43MS0xLjMyLTEuNDUtMi4zMiBjMC4xNS0wLjUzLDEuNC0xLjkzLDIuOTgtMy4zOWMwLjU1LDEuNzcsMC45MiwzLjM4LDAuOTIsNC4xNEMyOS4wMiw4My40NywyOS4wMSw4My41NywyOC45OSw4My42NHpcXFwiIC8+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbCIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbC5qc1wiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanNcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcImljb25zOC1zbm93LTUwXCIsXG4gIFwidXNlXCI6IFwiaWNvbnM4LXNub3ctNTAtdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwMCAxMDBcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBpZD1cXFwiaWNvbnM4LXNub3ctNTBcXFwiPjxwYXRoIGQ9XFxcIk05MS45OTIsNzZjMC4yNjEtMC41MjksMC40NzEtMS4wODcsMC42MjctMS42N2MwLjYyMy0yLjMyMiwwLjMwNS00Ljc0OC0wLjg5Ni02LjgyOWMtMS41MDctMi42MTEtNC4yNC00LjI5Mi03LjIzLTQuNDgyIGMtMC4yNjItMC4zOTMtMC41NjUtMC43NTYtMC44ODQtMS4xMDJDODkuNzY2LDU4Ljc3LDk0LDUyLjM3Nyw5NCw0NWMwLTcuOTkzLTQuOTYxLTE0Ljg0OC0xMS45NjUtMTcuNjUgQzgwLjAyMywyNi41NDUsNzYuMjc5LDI3LjA2Nyw3NCwyN2MtMS42MTktMy40NTktMi40MDYtNy40NjgtNS4yNjQtOS44N0M2NC4xNTMsMTMuMjc2LDU4LjI2NiwxMSw1MiwxMSBjLTEwLjE3NCwwLTE5LjM0OSw2LjAwMS0yMy41NjMsMTUuMDA4QzE4LjIyLDI2LjMwOCwxMCwzNC43MTIsMTAsNDVjMCw0LjE0OSwxLjM0LDcuOTg3LDMuNjA4LDExLjExMiBDMTUuMzcyLDU4LjU0MSwxOC4zMDYsNTguNjIzLDIxLDYwYy0wLjMxOSwwLjM0Ni0xLjIzLDIuNjI0LTEuNDkyLDMuMDE4Yy0yLjk4OSwwLjE5LTUuNzI0LDEuODcyLTcuMjMyLDQuNDg1IGMtMS4yLDIuMDgxLTEuNTE4LDQuNTA2LTAuODk1LDYuODI4YzAuMTU2LDAuNTgyLDAuMzY2LDEuMTQxLDAuNjI3LDEuNjY5Yy0wLjI2MSwwLjUyOS0wLjQ3MSwxLjA4Ny0wLjYyNywxLjY3IGMtMC42MjMsMi4zMjItMC4zMDUsNC43NDgsMC44OTYsNi44MjljMS41MDcsMi42MTEsNC4yNCw0LjI5Miw3LjIzLDQuNDgyQzIxLjEyMiw5MS40MDIsMjMuODc4LDkzLDI3LDkzczUuODc4LTEuNTk5LDcuNDkzLTQuMDIgYzIuOTg3LTAuMTkxLDUuNzItMS44Nyw3LjIzMS00LjQ4M2MxLjItMi4wODEsMS41MTgtNC41MDYsMC44OTUtNi44MjhjLTAuMTU2LTAuNTgyLTAuMzY2LTEuMTQxLTAuNjI3LTEuNjY5IGMwLjI2MS0wLjUyOSwwLjQ3MS0xLjA4NywwLjYyNy0xLjY3YzAuNDE5LTEuNTYzLDAuNDAyLTMuMTcxLTAuMDE0LTQuNjkxYzAuNjE3LDAuMTc3LDEuMjUxLDAuMzAyLDEuOTAyLDAuMzQzIEM0Ni4xMjMsNzIuNDAyLDQ4Ljg3OCw3NCw1Miw3NHM1Ljg3OC0xLjU5OCw3LjQ5Mi00LjAxOWMwLjY1MS0wLjA0MiwxLjI4NS0wLjE2NiwxLjkwMi0wLjM0NCBjLTAuNDE2LDEuNTIxLTAuNDMzLDMuMTI5LTAuMDEzLDQuNjkzYzAuMTU2LDAuNTgyLDAuMzY2LDEuMTQxLDAuNjI3LDEuNjY5Yy0wLjI2MSwwLjUyOS0wLjQ3MSwxLjA4Ny0wLjYyNywxLjY3IGMtMC42MjMsMi4zMjItMC4zMDUsNC43NDgsMC44OTYsNi44MjljMS41MDcsMi42MTEsNC4yNCw0LjI5Miw3LjIzLDQuNDgyQzcxLjEyMiw5MS40MDIsNzMuODc4LDkzLDc3LDkzczUuODc4LTEuNTk5LDcuNDkzLTQuMDIgYzIuOTg3LTAuMTkxLDUuNzItMS44Nyw3LjIzMS00LjQ4M2MxLjItMi4wODEsMS41MTgtNC41MDYsMC44OTUtNi44MjhDOTIuNDYzLDc3LjA4Nyw5Mi4yNTMsNzYuNTI4LDkxLjk5Miw3NnpcXFwiIG9wYWNpdHk9XFxcIi4zNVxcXCIgLz48cGF0aCBmaWxsPVxcXCIjZjJmMmYyXFxcIiBkPVxcXCJNODkuOTkyLDc0YzAuMjYxLTAuNTI5LDAuNDcxLTEuMDg3LDAuNjI3LTEuNjdjMC42MjMtMi4zMjIsMC4zMDUtNC43NDgtMC44OTYtNi44MjkgYy0xLjUwNy0yLjYxMS00LjI0LTQuMjkyLTcuMjMtNC40ODJjLTAuMjYyLTAuMzkzLTAuNTY1LTAuNzU2LTAuODg0LTEuMTAyQzg3Ljc2Niw1Ni43Nyw5Miw1MC4zNzcsOTIsNDMgYzAtMTAuMjg4LTguMjItMTguNjkyLTE4LjQzNy0xOC45OTJDNjkuMzQ5LDE1LjAwMSw2MC4xNzQsOSw1MCw5cy0xOS4zNDksNi4wMDEtMjMuNTYzLDE1LjAwOEMxNi4yMiwyNC4zMDgsOCwzMi43MTIsOCw0MyBjMCw3LjM3Niw0LjIzNCwxMy43NjksMTAuMzkyLDE2LjkxNmMtMC4zMTksMC4zNDYtMC42MjIsMC43MDgtMC44ODQsMS4xMDJjLTIuOTg5LDAuMTktNS43MjQsMS44NzItNy4yMzIsNC40ODUgYy0xLjIsMi4wODEtMS41MTgsNC41MDYtMC44OTUsNi44MjhjMC4xNTYsMC41ODIsMC4zNjYsMS4xNDEsMC42MjcsMS42NjljLTAuMjYxLDAuNTI5LTAuNDcxLDEuMDg3LTAuNjI3LDEuNjcgYy0wLjYyMywyLjMyMi0wLjMwNSw0Ljc0OCwwLjg5Niw2LjgyOWMxLjUwNywyLjYxMSw0LjI0LDQuMjkyLDcuMjMsNC40ODJDMTkuMTIyLDg5LjQwMiwyMS44NzgsOTEsMjUsOTFzNS44NzgtMS41OTksNy40OTMtNC4wMiBjMi45ODctMC4xOTEsNS43Mi0xLjg3LDcuMjMxLTQuNDgzYzEuMi0yLjA4MSwxLjUxOC00LjUwNiwwLjg5NS02LjgyOGMtMC4xNTYtMC41ODItMC4zNjYtMS4xNDEtMC42MjctMS42NjkgYzAuMjYxLTAuNTI5LDAuNDcxLTEuMDg3LDAuNjI3LTEuNjdjMC40MTktMS41NjMsMC40MDItMy4xNzEtMC4wMTQtNC42OTFjMC42MTcsMC4xNzcsMS4yNTEsMC4zMDIsMS45MDIsMC4zNDMgQzQ0LjEyMyw3MC40MDIsNDYuODc4LDcyLDUwLDcyczUuODc4LTEuNTk4LDcuNDkyLTQuMDE5YzAuNjUxLTAuMDQyLDEuMjg1LTAuMTY2LDEuOTAyLTAuMzQ0IGMtMC40MTYsMS41MjEtMC40MzMsMy4xMjktMC4wMTMsNC42OTNjMC4xNTYsMC41ODIsMC4zNjYsMS4xNDEsMC42MjcsMS42NjljLTAuMjYxLDAuNTI5LTAuNDcxLDEuMDg3LTAuNjI3LDEuNjcgYy0wLjYyMywyLjMyMi0wLjMwNSw0Ljc0OCwwLjg5Niw2LjgyOWMxLjUwNywyLjYxMSw0LjI0LDQuMjkyLDcuMjMsNC40ODJDNjkuMTIyLDg5LjQwMiw3MS44NzgsOTEsNzUsOTFzNS44NzgtMS41OTksNy40OTMtNC4wMiBjMi45ODctMC4xOTEsNS43Mi0xLjg3LDcuMjMxLTQuNDgzYzEuMi0yLjA4MSwxLjUxOC00LjUwNiwwLjg5NS02LjgyOEM5MC40NjMsNzUuMDg3LDkwLjI1Myw3NC41MjgsODkuOTkyLDc0elxcXCIgLz48cGF0aCBmaWxsPVxcXCIjZDllZWZmXFxcIiBkPVxcXCJNNTcuNzk0LDUwLjVMNTcuNzk0LDUwLjVjLTAuNTkyLTEuMDI1LTEuOTAyLTEuMzc2LTIuOTI3LTAuNzg0bC0yLjcyNCwxLjU3M3YtMy4xNDYgQzUyLjE0Myw0Ni45NTksNTEuMTgzLDQ2LDUwLDQ2aDBjLTEuMTgzLDAtMi4xNDMsMC45NTktMi4xNDMsMi4xNDN2My4xNDZsLTIuNzI0LTEuNTczYy0xLjAyNS0wLjU5Mi0yLjMzNS0wLjI0MS0yLjkyNywwLjc4NGwwLDAgYy0wLjU5MiwxLjAyNS0wLjI0MSwyLjMzNSwwLjc4NCwyLjkyN0w0NS43MTQsNTVsLTIuNzI0LDEuNTczYy0xLjAyNSwwLjU5Mi0xLjM3NiwxLjkwMi0wLjc4NCwyLjkyN2wwLDAgYzAuNTkyLDEuMDI1LDEuOTAyLDEuMzc2LDIuOTI3LDAuNzg0bDIuNzI0LTEuNTczdjMuMTQ2QzQ3Ljg1Nyw2My4wNDEsNDguODE3LDY0LDUwLDY0aDBjMS4xODMsMCwyLjE0My0wLjk1OSwyLjE0My0yLjE0M3YtMy4xNDYgbDIuNzI0LDEuNTczYzEuMDI1LDAuNTkyLDIuMzM1LDAuMjQxLDIuOTI3LTAuNzg0bDAsMGMwLjU5Mi0xLjAyNSwwLjI0MS0yLjMzNS0wLjc4NC0yLjkyN0w1NC4yODYsNTVsMi43MjQtMS41NzMgQzU4LjAzNSw1Mi44MzUsNTguMzg2LDUxLjUyNSw1Ny43OTQsNTAuNXpcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzk0Y2ZmZlxcXCIgZD1cXFwiTTczLDI5Yy0xLjM1OSwwLTIuNjYzLDAuMjI0LTMuODg4LDAuNjI0QzY3LjMxNSwyMC43MTIsNTkuNDQyLDE0LDUwLDE0IHMtMTcuMzE1LDYuNzEyLTE5LjExMiwxNS42MjRDMjkuNjYzLDI5LjIyNCwyOC4zNTksMjksMjcsMjljLTYuOTA0LDAtMTIuNSw1LjU5Ni0xMi41LDEyLjVTMjAuMDk2LDU0LDI3LDU0YzAuMTY5LDAsNDUuODMxLDAsNDYsMCBjNi45MDQsMCwxMi41LTUuNTk2LDEyLjUtMTIuNVM3OS45MDQsMjksNzMsMjl6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiM0MDM5NmVcXFwiIGQ9XFxcIk01MCw2N2MtMi4yMDYsMC00LTEuNzk0LTQtNHYtMS4wNzFsLTAuOTI4LDAuNTM1Yy0xLjkxLDEuMTA1LTQuMzYyLDAuNDQ2LTUuNDY1LTEuNDY0IGMtMC43MzgtMS4yOC0wLjY4OC0yLjgwMywwLjAwMi00SDI3Yy03LjcyLDAtMTQtNi4yOC0xNC0xNHM2LjI4LTE0LDE0LTE0YzAuOTM3LDAsMS44NywwLjA5NSwyLjc5LDAuMjgzIEMzMi4zMTUsMjAuMzM5LDQwLjU3NCwxNCw1MCwxNHMxNy42ODUsNi4zMzksMjAuMjEsMTUuMjgzQzcxLjEzLDI5LjA5NSw3Mi4wNjMsMjksNzMsMjljNy43MiwwLDE0LDYuMjgsMTQsMTRzLTYuMjgsMTQtMTQsMTQgSDYwLjM5MmMwLjY4OCwxLjE5NywwLjczOSwyLjcyLDAuMDAyLDMuOTk5Yy0xLjEwNSwxLjkxLTMuNTU0LDIuNTY5LTUuNDY2LDEuNDY1TDU0LDYxLjkyOVY2M0M1NCw2NS4yMDYsNTIuMjA2LDY3LDUwLDY3eiBNNDcuNSw1Ny44M2MwLjI1OSwwLDAuNTE4LDAuMDY3LDAuNzUsMC4yMDFDNDguNzE0LDU4LjI5OSw0OSw1OC43OTQsNDksNTkuMzNWNjNjMCwwLjU1MiwwLjQ0OCwxLDEsMXMxLTAuNDQ4LDEtMXYtMy42NyBjMC0wLjUzNiwwLjI4Ni0xLjAzMSwwLjc1LTEuMjk5YzAuNDY1LTAuMjY4LDEuMDM1LTAuMjY4LDEuNSwwbDMuMTc4LDEuODM1YzAuNDc3LDAuMjc0LDEuMDksMC4xMTEsMS4zNjctMC4zNjYgYzAuMjc1LTAuNDc4LDAuMTEtMS4wOS0wLjM2Ny0xLjM2NmwtMi4zMTItMS4zMzVjLTAuNTg4LTAuMzQtMC44NzUtMS4wMzEtMC42OTktMS42ODhDNTQuNTkzLDU0LjQ1Niw1NS4xODgsNTQsNTUuODY2LDU0SDczIGM2LjA2NSwwLDExLTQuOTM1LDExLTExcy00LjkzNS0xMS0xMS0xMWMtMS4xNTQsMC0yLjMwNiwwLjE4NS0zLjQyMiwwLjU1Yy0wLjQwNSwwLjEzNC0wLjg1MSwwLjA4Ni0xLjIyMi0wLjEzIGMtMC4zNy0wLjIxNi0wLjYzLTAuNTc5LTAuNzE1LTAuOTk5QzY1Ljk1NiwyMy4wNjQsNTguNTM3LDE3LDUwLDE3cy0xNS45NTYsNi4wNjQtMTcuNjQyLDE0LjQyMSBjLTAuMDg1LDAuNDItMC4zNDUsMC43ODMtMC43MTUsMC45OTljLTAuMzcyLDAuMjE3LTAuODE2LDAuMjY0LTEuMjIyLDAuMTNDMjkuMzA2LDMyLjE4NSwyOC4xNTQsMzIsMjcsMzJjLTYuMDY1LDAtMTEsNC45MzUtMTEsMTEgczQuOTM1LDExLDExLDExaDE3LjEzNGMwLjY3OSwwLDEuMjczLDAuNDU2LDEuNDQ5LDEuMTExYzAuMTc2LDAuNjU2LTAuMTExLDEuMzQ4LTAuNjk5LDEuNjg4bC0yLjMxMiwxLjMzNSBjLTAuNDc4LDAuMjc2LTAuNjQzLDAuODg5LTAuMzY2LDEuMzY3YzAuMjc0LDAuNDc2LDAuODg4LDAuNjQsMS4zNjYsMC4zNjVsMy4xNzgtMS44MzVDNDYuOTgyLDU3Ljg5Nyw0Ny4yNDEsNTcuODMsNDcuNSw1Ny44M3pcXFwiIC8+PHBhdGggZmlsbD1cXFwiI2Q5ZWVmZlxcXCIgZD1cXFwiTTM0LjA5Myw2OC43NUwzNC4wOTMsNjguNzVjLTAuNjktMS4xOTYtMi4yMTktMS42MDUtMy40MTUtMC45MTVMMjcuNSw2OS42N1Y2NiBjMC0xLjM4MS0xLjExOS0yLjUtMi41LTIuNWgwYy0xLjM4MSwwLTIuNSwxLjExOS0yLjUsMi41djMuNjdsLTMuMTc4LTEuODM1Yy0xLjE5Ni0wLjY5LTIuNzI1LTAuMjgxLTMuNDE1LDAuOTE1bDAsMCBjLTAuNjksMS4xOTYtMC4yODEsMi43MjUsMC45MTUsMy40MTVMMjAsNzRsLTMuMTc4LDEuODM1Yy0xLjE5NiwwLjY5LTEuNjA1LDIuMjE5LTAuOTE1LDMuNDE1bDAsMCBjMC42OSwxLjE5NiwyLjIxOSwxLjYwNSwzLjQxNSwwLjkxNUwyMi41LDc4LjMzVjgyYzAsMS4zODEsMS4xMTksMi41LDIuNSwyLjVoMGMxLjM4MSwwLDIuNS0xLjExOSwyLjUtMi41di0zLjY3bDMuMTc4LDEuODM1IGMxLjE5NiwwLjY5LDIuNzI1LDAuMjgxLDMuNDE1LTAuOTE1bDAsMGMwLjY5LTEuMTk2LDAuMjgxLTIuNzI1LTAuOTE1LTMuNDE1TDMwLDc0bDMuMTc4LTEuODM1IEMzNC4zNzQsNzEuNDc1LDM0Ljc4NCw2OS45NDYsMzQuMDkzLDY4Ljc1elxcXCIgLz48cGF0aCBmaWxsPVxcXCIjNDAzOTZlXFxcIiBkPVxcXCJNMjUsODZjLTIuMjA2LDAtNC0xLjc5NC00LTR2LTEuMDcxbC0wLjkyOCwwLjUzNWMtMS45MSwxLjEwNC00LjM2MiwwLjQ0Ni01LjQ2NS0xLjQ2NCBjLTEuMTAzLTEuOTExLTAuNDQ1LTQuMzYyLDEuNDY1LTUuNDY0TDE3LDc0bC0wLjkyOC0wLjUzNmMtMS45MS0xLjEwMi0yLjU2Ny0zLjU1My0xLjQ2Ni01LjQ2MyBjMS4xMDQtMS45MTEsMy41NTItMi41Nyw1LjQ2Ni0xLjQ2NUwyMSw2Ny4wNzFWNjZjMC0yLjIwNiwxLjc5NC00LDQtNHM0LDEuNzk0LDQsNHYxLjA3MWwwLjkyOC0wLjUzNSBjMC45MjYtMC41MzQsMi4wMDQtMC42NzcsMy4wMzYtMC4zOTljMS4wMzIsMC4yNzYsMS44OTUsMC45MzgsMi40MjksMS44NjRoMC4wMDFjMS4xMDIsMS45MSwwLjQ0NCw0LjM2MS0xLjQ2Niw1LjQ2M0wzMyw3NCBsMC45MjgsMC41MzZjMS45MSwxLjEwMiwyLjU2NywzLjU1MywxLjQ2Niw1LjQ2M2MtMS4xMDQsMS45MDktMy41NTMsMi41NjgtNS40NjYsMS40NjVMMjksODAuOTI5VjgyQzI5LDg0LjIwNiwyNy4yMDYsODYsMjUsODZ6IE0yMi41LDc2LjgzYzAuMjU5LDAsMC41MTgsMC4wNjcsMC43NSwwLjIwMUMyMy43MTQsNzcuMjk5LDI0LDc3Ljc5NCwyNCw3OC4zM1Y4MmMwLDAuNTUyLDAuNDQ4LDEsMSwxczEtMC40NDgsMS0xdi0zLjY3IGMwLTAuNTM2LDAuMjg2LTEuMDMxLDAuNzUtMS4yOTljMC40NjUtMC4yNjgsMS4wMzUtMC4yNjgsMS41LDBsMy4xNzgsMS44MzVjMC40NzcsMC4yNzUsMS4wOSwwLjExMSwxLjM2Ny0wLjM2NiBjMC4yNzUtMC40NzgsMC4xMS0xLjA5LTAuMzY3LTEuMzY2bC0zLjE3OC0xLjgzNUMyOC43ODYsNzUuMDMxLDI4LjUsNzQuNTM2LDI4LjUsNzRzMC4yODYtMS4wMzEsMC43NS0xLjI5OWwzLjE3OC0xLjgzNSBjMC40NzgtMC4yNzUsMC42NDItMC44ODksMC4zNjctMS4zNjZsMCwwYy0wLjI3Ny0wLjQ3OS0wLjg5MS0wLjY0My0xLjM2Ny0wLjM2NmwtMy4xNzgsMS44MzVjLTAuNDY1LDAuMjY4LTEuMDM1LDAuMjY4LTEuNSwwIEMyNi4yODYsNzAuNzAxLDI2LDcwLjIwNiwyNiw2OS42N1Y2NmMwLTAuNTUyLTAuNDQ4LTEtMS0xcy0xLDAuNDQ4LTEsMXYzLjY3YzAsMC41MzYtMC4yODYsMS4wMzEtMC43NSwxLjI5OSBjLTAuNDY1LDAuMjY4LTEuMDM1LDAuMjY4LTEuNSwwbC0zLjE3OC0xLjgzNWMtMC4yMzMtMC4xMzUtMC41MDUtMC4xNy0wLjc1OS0wLjFjLTAuMjU5LDAuMDY5LTAuNDc0LDAuMjM0LTAuNjA2LDAuNDY1IGMtMC4xMzUsMC4yMzItMC4xNywwLjUwMi0wLjEwMSwwLjc2YzAuMDY4LDAuMjU4LDAuMjM0LDAuNDc0LDAuNDY2LDAuNjA3bDMuMTc4LDEuODM1YzAuNDY0LDAuMjY4LDAuNzUsMC43NjMsMC43NSwxLjI5OSBzLTAuMjg2LDEuMDMxLTAuNzUsMS4yOTlsLTMuMTc4LDEuODM1Yy0wLjQ3OCwwLjI3Ni0wLjY0MywwLjg4OS0wLjM2NiwxLjM2N2MwLjI3NSwwLjQ3NywwLjg4OSwwLjY0MSwxLjM2NiwwLjM2NWwzLjE3OC0xLjgzNSBDMjEuOTgyLDc2Ljg5NywyMi4yNDEsNzYuODMsMjIuNSw3Ni44M3pcXFwiIC8+PGc+PHBhdGggZmlsbD1cXFwiI2Q5ZWVmZlxcXCIgZD1cXFwiTTg0LjA5Myw2OC43NUw4NC4wOTMsNjguNzVjLTAuNjktMS4xOTYtMi4yMTktMS42MDUtMy40MTUtMC45MTVMNzcuNSw2OS42N1Y2NiBjMC0xLjM4MS0xLjExOS0yLjUtMi41LTIuNWwwLDBjLTEuMzgxLDAtMi41LDEuMTE5LTIuNSwyLjV2My42N2wtMy4xNzgtMS44MzVjLTEuMTk2LTAuNjktMi43MjUtMC4yODEtMy40MTUsMC45MTV2MCBjLTAuNjksMS4xOTYtMC4yODEsMi43MjUsMC45MTUsMy40MTVMNzAsNzRsLTMuMTc4LDEuODM1Yy0xLjE5NiwwLjY5LTEuNjA1LDIuMjE5LTAuOTE1LDMuNDE1djAgYzAuNjksMS4xOTYsMi4yMTksMS42MDUsMy40MTUsMC45MTVMNzIuNSw3OC4zM1Y4MmMwLDEuMzgxLDEuMTE5LDIuNSwyLjUsMi41bDAsMGMxLjM4MSwwLDIuNS0xLjExOSwyLjUtMi41di0zLjY3bDMuMTc4LDEuODM1IGMxLjE5NiwwLjY5LDIuNzI1LDAuMjgxLDMuNDE1LTAuOTE1djBjMC42OS0xLjE5NiwwLjI4MS0yLjcyNS0wLjkxNS0zLjQxNUw4MCw3NGwzLjE3OC0xLjgzNSBDODQuMzc0LDcxLjQ3NSw4NC43ODQsNjkuOTQ2LDg0LjA5Myw2OC43NXpcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzQwMzk2ZVxcXCIgZD1cXFwiTTc1LDg2Yy0yLjIwNiwwLTQtMS43OTQtNC00di0xLjA3MWwtMC45MjgsMC41MzVDNjguMTYxLDgyLjU2OCw2NS43MSw4MS45MSw2NC42MDcsODAgYy0xLjEwMy0xLjkxMS0wLjQ0NS00LjM2MiwxLjQ2NS01LjQ2NEw2Nyw3NGwtMC45MjgtMC41MzZjLTEuOTEtMS4xMDItMi41NjctMy41NTMtMS40NjYtNS40NjMgYzEuMTA0LTEuOTExLDMuNTUyLTIuNTcsNS40NjYtMS40NjVMNzEsNjcuMDcxVjY2YzAtMi4yMDYsMS43OTQtNCw0LTRzNCwxLjc5NCw0LDR2MS4wNzFsMC45MjgtMC41MzUgYzAuOTI1LTAuNTM0LDIuMDAzLTAuNjc3LDMuMDM2LTAuMzk5YzEuMDMyLDAuMjc2LDEuODk1LDAuOTM4LDIuNDI5LDEuODY0aDAuMDAxYzEuMTAyLDEuOTEsMC40NDQsNC4zNjEtMS40NjYsNS40NjNMODMsNzQgbDAuOTI4LDAuNTM2YzEuOTEsMS4xMDIsMi41NjcsMy41NTMsMS40NjYsNS40NjNjLTEuMTA0LDEuOTA5LTMuNTU0LDIuNTY4LTUuNDY2LDEuNDY1TDc5LDgwLjkyOVY4MkM3OSw4NC4yMDYsNzcuMjA2LDg2LDc1LDg2eiBNNzIuNSw3Ni44M2MwLjI1OSwwLDAuNTE4LDAuMDY3LDAuNzUsMC4yMDFDNzMuNzE0LDc3LjI5OSw3NCw3Ny43OTQsNzQsNzguMzNWODJjMCwwLjU1MiwwLjQ0OCwxLDEsMXMxLTAuNDQ4LDEtMXYtMy42NyBjMC0wLjUzNiwwLjI4Ni0xLjAzMSwwLjc1LTEuMjk5YzAuNDY1LTAuMjY4LDEuMDM1LTAuMjY4LDEuNSwwbDMuMTc4LDEuODM1YzAuNDc2LDAuMjc1LDEuMDkxLDAuMTExLDEuMzY3LTAuMzY2IGMwLjI3NS0wLjQ3OCwwLjExLTEuMDktMC4zNjctMS4zNjZsLTMuMTc4LTEuODM1Qzc4Ljc4Niw3NS4wMzEsNzguNSw3NC41MzYsNzguNSw3NHMwLjI4Ni0xLjAzMSwwLjc1LTEuMjk5bDMuMTc4LTEuODM1IGMwLjQ3OC0wLjI3NSwwLjY0Mi0wLjg4OSwwLjM2Ny0xLjM2NmwwLDBjLTAuMjc2LTAuNDc5LTAuODkyLTAuNjQzLTEuMzY3LTAuMzY2bC0zLjE3OCwxLjgzNWMtMC40NjUsMC4yNjgtMS4wMzUsMC4yNjgtMS41LDAgQzc2LjI4Niw3MC43MDEsNzYsNzAuMjA2LDc2LDY5LjY3VjY2YzAtMC41NTItMC40NDgtMS0xLTFzLTEsMC40NDgtMSwxdjMuNjdjMCwwLjUzNi0wLjI4NiwxLjAzMS0wLjc1LDEuMjk5IGMtMC40NjUsMC4yNjgtMS4wMzUsMC4yNjgtMS41LDBsLTMuMTc4LTEuODM1Yy0wLjIzMi0wLjEzNS0wLjUwNS0wLjE3LTAuNzU5LTAuMWMtMC4yNTksMC4wNjktMC40NzQsMC4yMzQtMC42MDYsMC40NjUgYy0wLjEzNSwwLjIzMi0wLjE3LDAuNTAyLTAuMTAxLDAuNzZjMC4wNjgsMC4yNTgsMC4yMzQsMC40NzQsMC40NjYsMC42MDdsMy4xNzgsMS44MzVjMC40NjQsMC4yNjgsMC43NSwwLjc2MywwLjc1LDEuMjk5IHMtMC4yODYsMS4wMzEtMC43NSwxLjI5OWwtMy4xNzgsMS44MzVjLTAuNDc4LDAuMjc2LTAuNjQzLDAuODg5LTAuMzY2LDEuMzY3YzAuMjc0LDAuNDc3LDAuODg4LDAuNjQxLDEuMzY2LDAuMzY1bDMuMTc4LTEuODM1IEM3MS45ODIsNzYuODk3LDcyLjI0MSw3Ni44Myw3Mi41LDc2LjgzelxcXCIgLz48L2c+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbCIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbC5qc1wiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanNcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcImljb25zOC1zdG9ybS01MFwiLFxuICBcInVzZVwiOiBcImljb25zOC1zdG9ybS01MC11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAwIDEwMFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIGlkPVxcXCJpY29uczgtc3Rvcm0tNTBcXFwiPjxwYXRoIGQ9XFxcIk03NSw2M2gtMy42OGMwLjIzLDAuOTcsMC4yMywxLjk3LDAuMDEsMi45M2MwLjYyLTAuMTksMS4yNS0wLjMsMS45LTAuM2MwLjU3LDAsMS4xMywwLjA3LDEuNjgsMC4yMlxcdGMyLjAyLDAuNTQsMy42NywyLjAzLDQuNCwzLjk4YzIuODYsNy41NywyLjA5LDEwLjQ0LDEuODQsMTEuMzhDODAsODUuNSw3Ni4wNiw4OC41LDcxLjU2LDg4LjVjLTAuODgsMC0xLjc2LTAuMTItMi42MS0wLjM0XFx0Yy0yLjU0LTAuNjktNC42OC0yLjI4LTYuMDMtNC41MWMtMC45Ni0xLjU5LTEuNDMtMy4zNy0xLjQxLTUuMTZMNTAuOTIsOTAuNzVDNDkuNjksOTIuMTgsNDcuODksOTMsNDYsOTNcXHRjLTEuMDcsMC0yLjEzLTAuMjctMy4wOC0wLjc3Yy0yLjctMS40Ni00LjAxLTQuNTMtMy4xOC03LjQ4bDAuNjMtMi4yM2MtMS4wNywxLjk3LTMuMDIsMy42OS00LjkxLDQuNzRcXHRjLTEuNDcsMC44MS0zLjE1LDEuMjQtNC44MywxLjI0Yy0wLjg5LDAtMS43Ny0wLjEyLTIuNjMtMC4zNGMtMi41NC0wLjY4LTQuNjctMi4yOS02LjAyLTQuNTJjLTEuNC0yLjMxLTEuNzgtNS4wMS0xLjA5LTcuNlxcdGMwLjI1LTAuOTQsMS4wMi0zLjgxLDcuMjgtOC45NGMxLjE2LTAuOTUsMi42Mi0xLjQ3LDQuMTItMS40N2MwLjU2LDAsMS4xMywwLjA3LDEuNjgsMC4yMmMxLjM5LDAuMzcsMi42LDEuMjEsMy40NywyLjMzXFx0YzAuMDEtMC4wNCwwLjAyLTAuMDgsMC4wMy0wLjExTDM5LjUyLDYzSDI5Yy0xMC40OCwwLTE5LTguNTItMTktMTljMC0xMC4yOSw4LjIyLTE4LjY5LDE4LjQ0LTE4Ljk5QzMyLjY1LDE2LDQxLjgzLDEwLDUyLDEwXFx0czE5LjM1LDYsMjMuNTYsMTUuMDFDODUuNzgsMjUuMzEsOTQsMzMuNzEsOTQsNDRDOTQsNTQuNDgsODUuNDgsNjMsNzUsNjN6XFxcIiBvcGFjaXR5PVxcXCIuMzVcXFwiIC8+PHBhdGggZmlsbD1cXFwiI2YyZjJmMlxcXCIgZD1cXFwiTTczLDYxaC0zLjY4YzAuMjMsMC45NywwLjIzLDEuOTcsMC4wMSwyLjkzYzAuNjItMC4xOSwxLjI1LTAuMywxLjktMC4zYzAuNTcsMCwxLjEzLDAuMDcsMS42OCwwLjIyXFx0YzIuMDIsMC41NCwzLjY3LDIuMDMsNC40LDMuOThjMi44Niw3LjU3LDIuMDksMTAuNDQsMS44NCwxMS4zOEM3OCw4My41LDc0LjA2LDg2LjUsNjkuNTYsODYuNWMtMC44OCwwLTEuNzYtMC4xMi0yLjYxLTAuMzRcXHRjLTIuNTQtMC42OS00LjY4LTIuMjgtNi4wMy00LjUxYy0wLjk2LTEuNTktMS40My0zLjM3LTEuNDEtNS4xNkw0OC45Miw4OC43NUM0Ny42OSw5MC4xOCw0NS44OSw5MSw0NCw5MVxcdGMtMS4wNywwLTIuMTMtMC4yNy0zLjA4LTAuNzdjLTIuNy0xLjQ2LTQuMDEtNC41My0zLjE4LTcuNDhsMC42My0yLjIzYy0xLjA3LDEuOTctMy4wMiwzLjY5LTQuOTEsNC43NFxcdGMtMS40NywwLjgxLTMuMTUsMS4yNC00LjgzLDEuMjRjLTAuODksMC0xLjc3LTAuMTItMi42My0wLjM0Yy0yLjU0LTAuNjgtNC42Ny0yLjI5LTYuMDItNC41MmMtMS40LTIuMzEtMS43OC01LjAxLTEuMDktNy42XFx0YzAuMjUtMC45NCwxLjAyLTMuODEsNy4yOC04Ljk0YzEuMTYtMC45NSwyLjYyLTEuNDcsNC4xMi0xLjQ3YzAuNTYsMCwxLjEzLDAuMDcsMS42OCwwLjIyYzEuMzksMC4zNywyLjYsMS4yMSwzLjQ3LDIuMzNcXHRjMC4wMS0wLjA0LDAuMDItMC4wOCwwLjAzLTAuMTFMMzcuNTIsNjFIMjdDMTYuNTIsNjEsOCw1Mi40OCw4LDQyYzAtMTAuMjksOC4yMi0xOC42OSwxOC40NC0xOC45OUMzMC42NSwxNCwzOS44Myw4LDUwLDhcXHRzMTkuMzUsNiwyMy41NiwxNS4wMUM4My43OCwyMy4zMSw5MiwzMS43MSw5Miw0MkM5Miw1Mi40OCw4My40OCw2MSw3Myw2MXpcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzk0Y2ZmZlxcXCIgZD1cXFwiTTczLDI5LjVjLTEuMzU5LDAtMi42NjMsMC4yMjQtMy44ODgsMC42MjRDNjcuMzE1LDIxLjIxMiw1OS40NDIsMTQuNSw1MCwxNC41XFx0cy0xNy4zMTUsNi43MTItMTkuMTEyLDE1LjYyNEMyOS42NjMsMjkuNzI0LDI4LjM1OSwyOS41LDI3LDI5LjVjLTYuOTA0LDAtMTIuNSw1LjU5Ni0xMi41LDEyLjVTMjAuMDk2LDU0LjUsMjcsNTQuNVxcdGMwLjE2OSwwLDQ1LjgzMSwwLDQ2LDBjNi45MDQsMCwxMi41LTUuNTk2LDEyLjUtMTIuNVM3OS45MDQsMjkuNSw3MywyOS41elxcXCIgLz48cG9seWdvbiBmaWxsPVxcXCIjZmZlMzg1XFxcIiBwb2ludHM9XFxcIjYzLDYyLjUgNTUuNSw2Mi41IDU4LjkyOSw1NC41IDU4LjkyOSw1MyA0Ny4xNTksNTMgNDcuMTU5LDU0LjUgNDEuNSw2OC41IDQ4LjUsNjguNSA0NCw4NC41XFxcIiAvPjxyZWN0IHdpZHRoPVxcXCIxMi41XFxcIiBoZWlnaHQ9XFxcIjNcXFwiIHg9XFxcIjQ2LjVcXFwiIHk9XFxcIjUzXFxcIiBmaWxsPVxcXCIjNDAzOTZlXFxcIiBvcGFjaXR5PVxcXCIuMzVcXFwiIC8+PHBhdGggZmlsbD1cXFwiI2Q5ZWVmZlxcXCIgZD1cXFwiTTcyLjg3Myw3Ny41MzJjLTAuNDgxLDEuNzk1LTIuMzgzLDIuODQ0LTQuMjUxLDIuMzQzYy0xLjg2OC0wLjUtMi45OTEtMi4zNi0yLjUxLTQuMTU1XFx0YzAuNDgxLTEuNzk1LDUuMTIyLTUuNTkyLDUuMTIyLTUuNTkyUzczLjM1NCw3NS43MzcsNzIuODczLDc3LjUzMnpcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzQwMzk2ZVxcXCIgZD1cXFwiTTcyLjY0LDY5LjZjLTAuMTctMC40NS0wLjU1LTAuOC0xLjAyLTAuOTJjLTAuNDctMC4xMy0wLjk2LTAuMDItMS4zNCwwLjI5XFx0Yy0xLjE3LDAuOTYtNS4wNiw0LjI2LTUuNjIsNi4zNmMtMC4zNCwxLjI3LTAuMTUsMi41OSwwLjU0LDMuNzNjMC42OCwxLjEyLDEuNzUsMS45MiwzLjAzLDIuMjZjMC40NSwwLjEyLDAuODksMC4xOCwxLjMzLDAuMThcXHRjMi4xOSwwLDQuMTgtMS40Miw0Ljc2LTMuNThjMC4wOC0wLjI5LDAuMTEtMC42MywwLjExLTEuMDFDNzQuNDMsNzQuNTYsNzMuMSw3MC44Miw3Mi42NCw2OS42eiBNNzEuNDIsNzcuMTRcXHRjLTAuMjYsMS0xLjM0LDEuNTctMi40MSwxLjI5Yy0wLjUzLTAuMTQtMC45Ny0wLjQ3LTEuMjQtMC45MmMtMC4yNi0wLjQzLTAuMzQtMC45My0wLjIxLTEuNGMwLjE1LTAuNTMsMS40LTEuOTQsMi45OC0zLjM5XFx0QzcxLjE4LDc0Ljc3LDcxLjU2LDc2LjYxLDcxLjQyLDc3LjE0elxcXCIgLz48cGF0aCBmaWxsPVxcXCIjZDllZWZmXFxcIiBkPVxcXCJNMzEuOTI5LDc3LjUzMmMtMC40ODEsMS43OTUtMi4zODMsMi44NDQtNC4yNTEsMi4zNDNjLTEuODY4LTAuNS0yLjk5MS0yLjM2LTIuNTEtNC4xNTVcXHRzNS4xMjItNS41OTIsNS4xMjItNS41OTJTMzIuNDEsNzUuNzM3LDMxLjkyOSw3Ny41MzJ6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiM0MDM5NmVcXFwiIGQ9XFxcIk0zMS42OTIsNjkuNTk4Yy0wLjE3MS0wLjQ1Mi0wLjU0OS0wLjc5NC0xLjAxNS0wLjkxOWMtMC40NjktMC4xMjUtMC45NjUtMC4wMTktMS4zMzksMC4yODhcXHRjLTEuMTc2LDAuOTYzLTUuMDU5LDQuMjY3LTUuNjIsNi4zNjVjLTAuMzM5LDEuMjY3LTAuMTQ3LDIuNTksMC41MzksMy43MjdjMC42NzYsMS4xMTgsMS43NTIsMS45MjMsMy4wMzEsMi4yNjZcXHRjMC40NDIsMC4xMTgsMC44OTIsMC4xNzcsMS4zMzcsMC4xNzdjMC44NDMsMCwxLjY3My0wLjIxLDIuNDIyLTAuNjIzYzEuMTYzLTAuNjQxLDEuOTkxLTEuNjkxLDIuMzMtMi45NThcXHRDMzMuOTQsNzUuODIxLDMyLjIyOSw3MS4wMiwzMS42OTIsNjkuNTk4eiBNMzAuNDc5LDc3LjE0NEwzMC40NzksNzcuMTQ0Yy0wLjEyNiwwLjQ3MS0wLjQzOCwwLjg2NC0wLjg4LDEuMTA3XFx0Yy0wLjQ2MiwwLjI1Ni0xLjAwNiwwLjMxNi0xLjUzNCwwLjE3NWMtMC41MjctMC4xNDEtMC45NjgtMC40NjctMS4yNC0wLjkxOGMtMC4yNjEtMC40MzItMC4zMzUtMC45MjktMC4yMDgtMS4zOTlcXHRjMC4xNDUtMC41MzMsMS40LTEuOTM4LDIuOTc4LTMuMzkxQzMwLjIzNSw3NC43NjYsMzAuNjIxLDc2LjYwOSwzMC40NzksNzcuMTQ0elxcXCIgLz48cGF0aCBmaWxsPVxcXCIjNDAzOTZlXFxcIiBkPVxcXCJNNDMuOTk5LDg2Yy0wLjI0MSwwLTAuNDg1LTAuMDU5LTAuNzA5LTAuMTc5Yy0wLjYxOS0wLjMzMy0wLjkyNC0xLjA1MS0wLjczNC0xLjcyOEw0Ni41Miw3MEg0MS41XFx0Yy0wLjQ5OSwwLTAuOTY1LTAuMjQ4LTEuMjQzLTAuNjYxYy0wLjI3OS0wLjQxNC0wLjMzNC0wLjkzOC0wLjE0Ny0xLjQwMUw0NC45MzUsNTZIMjdjLTcuNzIsMC0xNC02LjI4LTE0LTE0czYuMjgtMTQsMTQtMTRcXHRjMC45MzcsMCwxLjg3LDAuMDk1LDIuNzksMC4yODNDMzIuMzE1LDE5LjMzOSw0MC41NzQsMTMsNTAsMTNzMTcuNjg1LDYuMzM5LDIwLjIxLDE1LjI4M0M3MS4xMywyOC4wOTUsNzIuMDYzLDI4LDczLDI4XFx0YzcuNzIsMCwxNCw2LjI4LDE0LDE0cy02LjI4LDE0LTE0LDE0SDU5LjkxOGwtMi4xNDQsNUg2M2MwLjU4NywwLDEuMTIsMC4zNDIsMS4zNjQsMC44NzZjMC4yNDQsMC41MzMsMC4xNTQsMS4xNi0wLjIyOSwxLjYwNFxcdGwtMTksMjJDNDQuODQzLDg1LjgxOSw0NC40MjQsODYsNDMuOTk5LDg2eiBNNDMuNzI0LDY3SDQ4LjVjMC40NywwLDAuOTEyLDAuMjIsMS4xOTUsMC41OTRjMC4yODQsMC4zNzUsMC4zNzYsMC44NiwwLjI0OSwxLjMxM1xcdGwtMi42NzcsOS41MTVMNTkuNzIzLDY0SDU1LjVjLTAuNTA0LDAtMC45NzUtMC4yNTMtMS4yNTItMC42NzRjLTAuMjc4LTAuNDIxLTAuMzI1LTAuOTU0LTAuMTI3LTEuNDE3bDMuNDI5LThcXHRDNTcuNzg2LDUzLjM1Nyw1OC4zMjksNTMsNTguOTI5LDUzSDczYzYuMDY1LDAsMTEtNC45MzUsMTEtMTFzLTQuOTM1LTExLTExLTExYy0xLjE1NCwwLTIuMzA2LDAuMTg1LTMuNDIyLDAuNTVcXHRjLTAuNDA1LDAuMTM1LTAuODUxLDAuMDg1LTEuMjIyLTAuMTNjLTAuMzctMC4yMTYtMC42My0wLjU3OS0wLjcxNS0wLjk5OUM2NS45NTYsMjIuMDY0LDU4LjUzNywxNiw1MCwxNlxcdHMtMTUuOTU2LDYuMDY0LTE3LjY0MiwxNC40MjFjLTAuMDg1LDAuNDItMC4zNDUsMC43ODMtMC43MTUsMC45OTljLTAuMzcxLDAuMjE3LTAuODE2LDAuMjY0LTEuMjIyLDAuMTNcXHRDMjkuMzA2LDMxLjE4NSwyOC4xNTQsMzEsMjcsMzFjLTYuMDY1LDAtMTEsNC45MzUtMTEsMTFzNC45MzUsMTEsMTEsMTFoMjAuMTU4YzAuNDk5LDAsMC45NjUsMC4yNDgsMS4yNDMsMC42NjFcXHRjMC4yNzksMC40MTQsMC4zMzQsMC45MzgsMC4xNDcsMS40MDFMNDMuNzI0LDY3elxcXCIgLz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sLmpzXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZC5qc1wiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiaWNvbnM4LXN1bi01MFwiLFxuICBcInVzZVwiOiBcImljb25zOC1zdW4tNTAtdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwMCAxMDBcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBpZD1cXFwiaWNvbnM4LXN1bi01MFxcXCI+PHBhdGggZD1cXFwiTTUyLjAxNyw5OGMtMi40MDEsMC00LjU5Mi0xLjI4OC01Ljc2LTMuMzc0bC0zLjMwMy01LjU0NWMtMS4xOTYsMC43ODctMi41OTYsMS4yMTEtNC4wMzYsMS4yMTEgYy0zLjQ4NywwLTYuNTI4LTIuNDc2LTcuMjMxLTUuODg3bC0wLjAyOS0wLjE0NmwtNi4zODYsMi4wNTljLTAuNjg2LDAuMjMyLTEuMzk4LDAuMzUxLTIuMTIxLDAuMzUxIGMtMS43MTEsMC0zLjMzNC0wLjY1Mi00LjU2OS0xLjgzNmMtMS44MTUtMS43NDItMi40ODEtNC4zMTQtMS43NDEtNi43MTVsMS45NzctNi4zNjljLTIuNDQ0LTAuNjAzLTIuMDE5LTMuNjg2LTIuODE2LTYuMDg5IGMtMC43MTktMi4xNjctMi43OTgtMy4yOS0xLjU1LTUuMTYzbC00LjUxNC01LjM2OGMtMi4xNTktMS4wMjMtNS40ODgtMC44MS01LjY0NS0zLjIwNEw0LjI3LDUxLjU5NmwwLjAyMS0wLjMyNyBjMC4xNTctMi4zOTQsMS41OTYtNC41MTcsMy43NTQtNS41MzlsNi4yODEtMi45NzdjLTEuMTQ2LTEuODM5LTEuNDM4LTQuMTI3LTAuNzQ0LTYuMjIxYzAuODA1LTIuNDI4LDIuODI2LTQuMjcyLDUuMzA3LTQuODU3IGwtMi4wNDYtNi41OTFjLTAuNzQ0LTIuNDE1LTAuMDc2LTQuOTg4LDEuNzM5LTYuNzI3YzEuMjM0LTEuMTgzLDIuODU3LTEuODM1LDQuNTY4LTEuODM1YzAuNzY2LDAsMS41MTksMC4xMzIsMi4yMzcsMC4zOTEgbDYuMjc0LDIuMjQxbDAuMDI1LTAuMTE5YzAuNzAxLTMuNDA5LDMuNzQyLTUuODg2LDcuMjMtNS44ODZjMS40OSwwLDIuOTM4LDAuNDU0LDQuMTU5LDEuMjkzbDMuMTEyLTUuOTEzIGMxLjE1LTIuMTc4LDMuMzg4LTMuNTI4LDUuODQ0LTMuNTI4aDAuMjUxbDAuMTE3LDAuMDExYzcuMjksMCwxMC41MTQsOS4yMzUsMTAuNTE0LDkuMjM1YzEuMTU0LTAuNzE0LTAuNzc2LDEuNTE5LDAuNTk2LDEuNTE5IGMzLjQ4NCwwLDUuOTU3LDMuMzE5LDguMzU4LDMuMjY2bDAuMDA2LDAuMDI4bDUuNjgxLTIuMTI3YzAuNzgtMC4yOCwxLjUzLTAuNDExLDIuMjkzLTAuNDExYzEuNzY0LDAsMy40MjIsMC42ODcsNC42NjksMS45MzUgYzEuNzk1LDEuNzksMi40MDUsNC40OTUsMS41NTEsNi44ODlsLTIuMiw2LjE2MWwwLjU5NiwwLjEyMmMyLjU3MiwwLjUzMSw0LjY4NCwyLjQwOSw1LjUxLDQuOTAyIGMwLjcyLDIuMTcxLDAuMzc5LDQuNTUtMC44NzQsNi40MjRsNS44NTQsMi43NzNjMi4xNTksMS4wMjEsMy41OTgsMy4xNDcsMy43NTIsNS41NDhsMC4wMjEsMC4zMTlsLTAuMDIxLDAuMzIgYy0wLjE1MywyLjM5Ni0xLjU4OSw0LjUyLTMuNzQ2LDUuNTQ1bC01Ljk4OSwyLjgzNmMxLjM2LDEuOTAzLDEuNzQ5LDQuMzcxLDEuMDA0LDYuNjE2Yy0wLjgyOCwyLjQ5Mi0yLjkzOSw0LjM2OS01LjUxMSw0Ljg5OCBsLTAuNTExLDAuMTA1bDIuMTE3LDUuOTI3YzAuODUzLDIuMzk0LDAuMjQzLDUuMDk4LTEuNTUxLDYuODkxYy0xLjI0NywxLjI0OC0yLjkwNSwxLjkzNS00LjY2OSwxLjkzNSBjLTAuNzMzLDAtMS40NTYtMC4xMjEtMi4xNDctMC4zNTlsLTUuODI4LTEuOTIxbC0wLjAwMywwLjAxOGMtMC43MDYsMy40MTEtMy43NDcsNS44ODYtNy4yMzEsNS44ODYgYy0xLjM1LDAtMi42NjQtMC4zNzItMy44MDgtMS4wNjVsLTIuOTUyLDUuMjEyYy0xLjExMywyLjE1Mi0zLjI4NSwzLjUxLTUuNzI0LDMuNTYxTDUyLjEwMiw5OEg1Mi4wMTd6XFxcIiBvcGFjaXR5PVxcXCIuMzVcXFwiIC8+PHBhdGggZmlsbD1cXFwiI2YyZjJmMlxcXCIgZD1cXFwiTTUwLjAxNyw5NmMtMi40MDEsMC00LjU5Mi0xLjI4OC01Ljc2LTMuMzc0bC0zLjMwMy01LjU0NWMtMS4xOTYsMC43ODctMi41OTYsMS4yMTEtNC4wMzYsMS4yMTEgYy0zLjQ4NywwLTYuNTI4LTIuNDc2LTcuMjMxLTUuODg3bC0wLjAyOS0wLjE0NmwtNi4zODYsMi4wNTljLTAuNjg2LDAuMjMyLTEuMzk4LDAuMzUxLTIuMTIxLDAuMzUxIGMtMS43MTEsMC0zLjMzNC0wLjY1Mi00LjU2OS0xLjgzNmMtMS44MTUtMS43NDItMi40ODEtNC4zMTQtMS43NDEtNi43MTVsMS45NzctNi4zNjljLTIuNDQ0LTAuNjAzLTQuNDM2LTIuNDM0LTUuMjMzLTQuODM3IGMtMC43MTktMi4xNjctMC4zODEtNC41NDMsMC44NjctNi40MTZsLTYuNDA0LTMuMDMzYy0yLjE1OS0xLjAyMy0zLjU5OC0zLjE0Ni0zLjc1NS01LjUzOUwyLjI3LDQ5LjU5NmwwLjAyMS0wLjMyNyBjMC4xNTctMi4zOTQsMS41OTYtNC41MTcsMy43NTQtNS41MzlsNi4yODEtMi45NzdjLTEuMTQ2LTEuODM5LTEuNDM4LTQuMTI3LTAuNzQ0LTYuMjIxYzAuODA1LTIuNDI4LDIuODI2LTQuMjcyLDUuMzA3LTQuODU3IGwtMi4wNDYtNi41OTFjLTAuNzQ0LTIuNDE1LTAuMDc2LTQuOTg4LDEuNzM5LTYuNzI3YzEuMjM0LTEuMTgzLDIuODU3LTEuODM1LDQuNTY4LTEuODM1YzAuNzY2LDAsMS41MTksMC4xMzIsMi4yMzcsMC4zOTEgbDYuMjc0LDIuMjQxbDAuMDI1LTAuMTE5YzAuNzAxLTMuNDA5LDMuNzQyLTUuODg2LDcuMjMtNS44ODZjMS40OSwwLDIuOTM4LDAuNDU0LDQuMTU5LDEuMjkzbDMuMTEyLTUuOTEzIGMxLjE1LTIuMTc4LDMuMzg4LTMuNTI4LDUuODQ0LTMuNTI4aDAuMjUxbDAuMTE3LDAuMDExYzIuMzk2LDAuMTMyLDQuNTA0LDEuNTI2LDUuNTYyLDMuNjg4bDIuODE0LDUuNTQ4IGMxLjE1NC0wLjcxNCwyLjQ4OC0xLjA5OCwzLjg2LTEuMDk4YzMuNDg0LDAsNi41MjUsMi40NzUsNy4yMyw1Ljg4M2wwLjAwNiwwLjAyOGw1LjY4MS0yLjEyN2MwLjc4LTAuMjgsMS41My0wLjQxMSwyLjI5My0wLjQxMSBjMS43NjQsMCwzLjQyMiwwLjY4Nyw0LjY2OSwxLjkzNWMxLjc5NSwxLjc5LDIuNDA1LDQuNDk1LDEuNTUxLDYuODg5bC0yLjIsNi4xNjFsMC41OTYsMC4xMjJjMi41NzIsMC41MzEsNC42ODQsMi40MDksNS41MSw0LjkwMiBjMC43MiwyLjE3MSwwLjM3OSw0LjU1LTAuODc0LDYuNDI0bDUuODU0LDIuNzczYzIuMTU5LDEuMDIxLDMuNTk4LDMuMTQ3LDMuNzUyLDUuNTQ4bDAuMDIxLDAuMzE5bC0wLjAyMSwwLjMyIGMtMC4xNTMsMi4zOTYtMS41ODksNC41Mi0zLjc0Niw1LjU0NWwtNS45ODksMi44MzZjMS4zNiwxLjkwMywxLjc0OSw0LjM3MSwxLjAwNCw2LjYxNmMtMC44MjgsMi40OTItMi45MzksNC4zNjktNS41MTEsNC44OTggbC0wLjUxMSwwLjEwNWwyLjExNyw1LjkyN2MwLjg1MywyLjM5NCwwLjI0Myw1LjA5OC0xLjU1MSw2Ljg5MWMtMS4yNDcsMS4yNDgtMi45MDUsMS45MzUtNC42NjksMS45MzUgYy0wLjczMywwLTEuNDU2LTAuMTIxLTIuMTQ3LTAuMzU5bC01LjgyOC0xLjkyMWwtMC4wMDMsMC4wMThjLTAuNzA2LDMuNDExLTMuNzQ3LDUuODg2LTcuMjMxLDUuODg2IGMtMS4zNSwwLTIuNjY0LTAuMzcyLTMuODA4LTEuMDY1bC0yLjk1Miw1LjIxMmMtMS4xMTMsMi4xNTItMy4yODUsMy41MS01LjcyNCwzLjU2MUw1MC4xMDIsOTZINTAuMDE3elxcXCIgLz48cGF0aCBmaWxsPVxcXCIjZjliODRmXFxcIiBkPVxcXCJNNTAuMDE3LDg5LjVjLTAuMDM4LDAtMC4wNzQtMC4wMjEtMC4wOTItMC4wNTVsLTYuNDQxLTEwLjgyMWMtMC4yMjktMC4zODUtMC42MTgtMC42NDYtMS4wNi0wLjcxNSBjLTAuMDc3LTAuMDEyLTAuMTUzLTAuMDE4LTAuMjI5LTAuMDE4Yy0wLjM2NSwwLTAuNzIxLDAuMTMzLTAuOTk3LDAuMzc5bC0zLjcwOSwzLjI5OWMtMC4xNjYsMC4xNDctMC4zNTgsMC4yMjMtMC41NywwLjIyMyBjLTAuMzQ4LDAtMC43NjYtMC4yMTktMC44NjUtMC42OThsLTEuMTU2LTUuNjA1Yy0wLjA4Ni0wLjQxOC0wLjM0Ni0wLjc3OC0wLjcxMy0wLjk5M2MtMC4yMzItMC4xMzUtMC40OTMtMC4yMDQtMC43NTYtMC4yMDQgYy0wLjE1NCwwLTAuMzEsMC4wMjMtMC40NiwwLjA3MmwtMTEuNzM4LDMuNzg0bC0wLjE1LTAuMDA3Yy0wLjAyOS0wLjAyOC0wLjA0LTAuMDY5LTAuMDI3LTAuMTA5bDMuNjA1LTExLjYxNiBjMC4xMjUtMC40MDQsMC4wNzQtMC44NDMtMC4xNDEtMS4yMDdjLTAuMjE2LTAuMzY0LTAuNTc0LTAuNjIxLTAuOTg5LTAuNzA2bC01LjEyMy0xLjA1N2MtMC40NDUtMC4wOTItMC42MDQtMC40MzctMC42NTEtMC41OCBjLTAuMDQ4LTAuMTQ0LTAuMTI3LTAuNTE1LDAuMTc2LTAuODU1bDMuNzQ2LTQuMjExYzAuMzEzLTAuMzU0LDAuNDQzLTAuODMzLDAuMzQ5LTEuMjk2Yy0wLjA5NC0wLjQ2My0wLjQtMC44NTQtMC44MjgtMS4wNTcgTDguODQ0LDQ5LjU5NmwxMi4xOTUtNS43NzdjMC40MjctMC4yMDIsMC43MzMtMC41OTQsMC44MjctMS4wNTdjMC4wOTUtMC40NjMtMC4wMzUtMC45NDItMC4zNDktMS4yOTZsLTMuNTg4LTQuMDM1IGMtMC4zMDMtMC4zNC0wLjIyNS0wLjcxMS0wLjE3OC0wLjg1NGMwLjA0OC0wLjE0NSwwLjIwNy0wLjQ4OSwwLjY1Mi0wLjU4MWw1LjE5Ni0xLjA3YzAuNDE0LTAuMDg1LDAuNzczLTAuMzQyLDAuOTg5LTAuNzA2IGMwLjIxNS0wLjM2NCwwLjI2Ni0wLjgwMywwLjE0MS0xLjIwN2wtMy42OC0xMS44NTRjLTAuMDExLTAuMDM2LTAuMDAxLTAuMDc4LDAuMDI2LTAuMTA1bDAuMTA3LTAuMDIybDExLjcwOCw0LjE4MSBjMC4xNjQsMC4wNTgsMC4zMzUsMC4wODcsMC41MDUsMC4wODdjMC4yNTUsMCwwLjUwOC0wLjA2NCwwLjczNS0wLjE5MmMwLjM3OC0wLjIxMywwLjY0Ni0wLjU3OSwwLjczMy0xLjAwNWwxLjE4Ny01Ljc1MiBjMC4xLTAuNDc5LDAuNTE4LTAuNjk4LDAuODY1LTAuNjk4YzAuMjEyLDAsMC40MDQsMC4wNzUsMC41NywwLjIyM2w0LjA2OSwzLjYyYzAuMjc3LDAuMjQ2LDAuNjMzLDAuMzc5LDAuOTk3LDAuMzc5IGMwLjA4OSwwLDAuMTc5LTAuMDA4LDAuMjY4LTAuMDI0YzAuNDU0LTAuMDgyLDAuODQ1LTAuMzY5LDEuMDYtMC43NzdsNi4wNi0xMS41MTNjMC4wMTctMC4wMywwLjA0OS0wLjA1MiwwLjA4My0wLjA1NiBjMC4wMDQsMC4wMDEsMC4wMDcsMC4wMDEsMC4wMTEsMC4wMDFjMC4wNCwwLjAwMSwwLjA3NCwwLjAyMiwwLjA5MSwwLjA1OGw1LjczOCwxMS4zMTFjMC4yMTEsMC40MTUsMC42MDIsMC43MDksMS4wNTksMC43OTUgYzAuMDkzLDAuMDE4LDAuMTg3LDAuMDI2LDAuMjc5LDAuMDI2YzAuMzY0LDAsMC43Mi0wLjEzMywwLjk5Ny0wLjM3OWwzLjg2OC0zLjQ0YzAuMTY2LTAuMTQ3LDAuMzU4LTAuMjIzLDAuNTctMC4yMjMgYzAuMzQ4LDAsMC43NjYsMC4yMTksMC44NjUsMC42OThsMS4xODUsNS43NDZjMC4wODgsMC40MywwLjM2LDAuNzk5LDAuNzQzLDEuMDExYzAuMjI1LDAuMTI0LDAuNDc1LDAuMTg3LDAuNzI2LDAuMTg3IGMwLjE3OCwwLDAuMzU1LTAuMDMxLDAuNTI2LTAuMDk2bDExLjE1MS00LjE3NGMwLjExNSwwLjA2MSwwLjEyNSwwLjEwMywwLjExMSwwLjE0bC00LjEzNSwxMS41NzYgYy0wLjE0NiwwLjQwOS0wLjEwNywwLjg2MSwwLjEwNSwxLjI0YzAuMjEzLDAuMzc4LDAuNTc5LDAuNjQ2LDEuMDA1LDAuNzMzbDYuMjI5LDEuMjg0YzAuNDQ1LDAuMDkyLDAuNjA0LDAuNDM4LDAuNjUyLDAuNTgxIHMwLjEyNiwwLjUxNS0wLjE3NywwLjg1NGwtMy43NTQsNC4yMjFjLTAuMzEzLDAuMzU0LTAuNDQzLDAuODMzLTAuMzQ5LDEuMjk2YzAuMDk0LDAuNDYzLDAuNCwwLjg1NCwwLjgyNywxLjA1N2wxMS44MDQsNS41OTIgbC0xMS45Niw1LjY2NWMtMC40MjcsMC4yMDItMC43MzMsMC41OTQtMC44MjcsMS4wNTdjLTAuMDk1LDAuNDYzLDAuMDM1LDAuOTQyLDAuMzQ5LDEuMjk2bDMuOTEsNC4zOTYgYzAuMzAzLDAuMzQsMC4yMjUsMC43MTIsMC4xNzcsMC44NTVzLTAuMjA3LDAuNDg4LTAuNjUyLDAuNThsLTYuMTQ2LDEuMjY4Yy0wLjQyNiwwLjA4Ny0wLjc5MiwwLjM1NS0xLjAwNSwwLjczMyBjLTAuMjEzLDAuMzc5LTAuMjUxLDAuODMxLTAuMTA1LDEuMjRsNC4wNTIsMTEuMzQ0YzAuMDE0LDAuMDM3LDAuMDA1LDAuMDc5LTAuMDI0LDAuMTA4Yy0wLjAwMS0wLjAwMS0wLjE0MywwLjAxMy0wLjE0NCwwLjAxMiBsLTExLjE5OS0zLjY5MmMtMC4xNTMtMC4wNS0wLjMxMi0wLjA3NS0wLjQ3LTAuMDc1Yy0wLjI2MSwwLTAuNTIxLDAuMDY4LTAuNzUxLDAuMjAxYy0wLjM3LDAuMjE1LTAuNjMyLDAuNTc3LTAuNzE4LDAuOTk2IGwtMS4xMzcsNS41MTRjLTAuMSwwLjQ3OS0wLjUxOCwwLjY5OC0wLjg2NSwwLjY5OGMtMC4yMTIsMC0wLjQwNC0wLjA3NC0wLjU3LTAuMjIzbC0zLjYwMy0zLjIwNCBjLTAuMjc3LTAuMjQ2LTAuNjMzLTAuMzc5LTAuOTk3LTAuMzc5Yy0wLjA4MiwwLTAuMTY0LDAuMDA3LTAuMjQ1LDAuMDIxYy0wLjQ0NywwLjA3NC0wLjgzNywwLjM0Ni0xLjA2MSwwLjc0TDUwLjE2LDg5LjM0NCBjLTAuMDE4LDAuMDMyLTAuMDM1LDAuMDY1LTAuMDUxLDAuMDk5cy0wLjA0OCwwLjA1NS0wLjA4NCwwLjA1OEg1MC4wMTd6XFxcIiAvPjxwYXRoIGZpbGw9XFxcIiM0MDM5NmVcXFwiIGQ9XFxcIk01MS4yNjksMTAuMjU2aDAuMDA1SDUxLjI2OSBNNTAuMDEsMTIuNjQ3bDQuNTE3LDguOTAxYzAuNDIxLDAuODMsMS4yMDMsMS40MTcsMi4xMTcsMS41OSBjMC4xODYsMC4wMzUsMC4zNzIsMC4wNTIsMC41NTgsMC4wNTJjMC43MjksMCwxLjQ0LTAuMjY2LDEuOTk0LTAuNzU4bDMuMDU3LTIuNzE4bDAuOTY1LDQuNjgyIGMwLjE3NywwLjg1OCwwLjcyMSwxLjU5NywxLjQ4OCwyLjAyYzAuNDQ5LDAuMjQ4LDAuOTQ5LDAuMzc0LDEuNDUxLDAuMzc0YzAuMzU1LDAsMC43MTItMC4wNjMsMS4wNTItMC4xOWw4LjMxNC0zLjExMyBsLTMuMTI0LDguNzQ2Yy0wLjI5MiwwLjgxOC0wLjIxNSwxLjcyMiwwLjIxLDIuNDc5czEuMTU5LDEuMjkyLDIuMDA5LDEuNDY4bDUuMTY2LDEuMDY1bC0zLjAzMiwzLjQwOSBjLTAuNjI4LDAuNzA2LTAuODg3LDEuNjY2LTAuNjk4LDIuNTkyYzAuMTg4LDAuOTI2LDAuODAyLDEuNzA5LDEuNjU2LDIuMTEzbDguOTQxLDQuMjM1bC05LjA5OCw0LjMxIGMtMC44NTQsMC40MDQtMS40NjcsMS4xODctMS42NTYsMi4xMTNzMC4wNywxLjg4NiwwLjY5OCwyLjU5MmwzLjE4OSwzLjU4NWwtNS4wODMsMS4wNDhjLTAuODUxLDAuMTc1LTEuNTgzLDAuNzExLTIuMDA5LDEuNDY4IGMtMC40MjYsMC43NTctMC41MDIsMS42NjEtMC4yMSwyLjQ3OWwzLjA5MSw4LjY1NGwtOC41MjUtMi44MWMtMC4zMDYtMC4xMDEtMC42MjMtMC4xNTEtMC45MzktMC4xNTEgYy0wLjUyMiwwLTEuMDQxLDAuMTM2LTEuNTAyLDAuNDAzYy0wLjc0MSwwLjQyOS0xLjI2MywxLjE1My0xLjQzNiwxLjk5MWwtMC45MTcsNC40NWwtMi43OTEtMi40ODIgYy0wLjU1My0wLjQ5Mi0xLjI2NC0wLjc1OC0xLjk5NC0wLjc1OGMtMC4xNjMsMC0wLjMyNywwLjAxMy0wLjQ5MSwwLjA0Yy0wLjg5NCwwLjE0OC0xLjY3MywwLjY5My0yLjEyLDEuNDgxbC00Ljg3Miw4LjYwMyBsLTUuMjEzLTguNzU0Yy0wLjQ1OC0wLjc2OS0xLjIzNS0xLjI5My0yLjExOS0xLjQzYy0wLjE1My0wLjAyNC0wLjMwNi0wLjAzNS0wLjQ1OC0wLjAzNWMtMC43MywwLTEuNDQxLDAuMjY2LTEuOTk0LDAuNzU4IGwtMi44OTgsMi41NzdsLTAuOTM2LTQuNTQyYy0wLjE3Mi0wLjgzNS0wLjY5MS0xLjU1Ny0xLjQyNy0xLjk4NmMtMC40NjQtMC4yNy0wLjk4NS0wLjQwOC0xLjUxMS0wLjQwOCBjLTAuMzA5LDAtMC42MiwwLjA0OC0wLjkyLDAuMTQ1bC05LjIyNywyLjk3NWwyLjgwOS05LjA1MWMwLjI1MS0wLjgwOCwwLjE0OS0xLjY4NS0wLjI4Mi0yLjQxNCBjLTAuNDMtMC43MjktMS4xNDktMS4yNDItMS45NzgtMS40MTNsLTQuMDU5LTAuODM3bDMuMDI0LTMuNGMwLjYyOC0wLjcwNiwwLjg4Ni0xLjY2NiwwLjY5OC0yLjU5MnMtMC44MDItMS43MDktMS42NTYtMi4xMTMgbC05LjQ5LTQuNDk1bDkuMzM0LTQuNDIxYzAuODU0LTAuNDA0LDEuNDY3LTEuMTg3LDEuNjU2LTIuMTEzYzAuMTg4LTAuOTI2LTAuMDctMS44ODYtMC42OTgtMi41OTJsLTIuODY3LTMuMjI0bDQuMTMyLTAuODUyIGMwLjgyOS0wLjE3MSwxLjU0Ny0wLjY4NCwxLjk3OC0xLjQxM2MwLjQzLTAuNzI5LDAuNTMzLTEuNjA2LDAuMjgyLTIuNDE0bC0yLjg1MS05LjE4Nmw5LjA3NywzLjI0MiBjMC4zMjcsMC4xMTcsMC42NjksMC4xNzUsMS4wMDksMC4xNzVjMC41MDksMCwxLjAxNi0wLjEzLDEuNDctMC4zODVjMC43NTctMC40MjYsMS4yOTItMS4xNTksMS40NjgtMi4wMDlsMC45NjctNC42ODkgbDMuMjU5LDIuODk4YzAuNTU0LDAuNDkzLDEuMjY1LDAuNzU4LDEuOTk0LDAuNzU4YzAuMTc4LDAsMC4zNTgtMC4wMTYsMC41MzYtMC4wNDhjMC45MDgtMC4xNjUsMS42ODktMC43MzgsMi4xMTktMS41NTQgTDUwLjAxLDEyLjY0NyBNMzcuNTIyLDE4LjY1MWgwLjAwNUgzNy41MjIgTTYzLjA2NCwxOC45OTNoMC4wMDVINjMuMDY0IE03OC4zMTksMjIuNDRoMC4wMDVINzguMzE5IE01MC4wMzMsOC4wMDEgYy0wLjU5NCwwLTEuMTQxLDAuMzI5LTEuNDE5LDAuODU3bC02LjA1OSwxMS41MTNsLTQuMDctMy42MmMtMC40NjQtMC40MTMtMS4wMi0wLjYwMi0xLjU2Ny0wLjYwMiBjLTEuMDYzLDAtMi4wOSwwLjcxNS0yLjMzNCwxLjg5NmwtMS4xODYsNS43NTJMMjEuNjksMTkuNjE2Yy0wLjE3Ny0wLjA2My0wLjM1OS0wLjA5My0wLjU0LTAuMDkzIGMtMC40MDcsMC0wLjgwNiwwLjE1NS0xLjExLDAuNDQ2Yy0wLjQzOCwwLjQyLTAuNjAxLDEuMDUyLTAuNDIyLDEuNjMzbDMuNjc5LDExLjg1NGwtNS4xOTUsMS4wNzEgYy0xLjc4OSwwLjM2OS0yLjUwOCwyLjUzNi0xLjI5NCwzLjkwMWwzLjU4OSw0LjAzNWwtMTIuMjEsNS43ODRjLTAuNTI3LDAuMjUtMC44NjgsMC43NjktMC45MDYsMS4zNDkgYzAuMDM4LDAuNTc5LDAuMzc4LDEuMDk4LDAuOTA2LDEuMzQ4bDEyLjM2Nyw1Ljg1OGwtMy43NDUsNC4yMTFjLTEuMjE0LDEuMzY1LTAuNDk1LDMuNTMyLDEuMjk0LDMuOTAxbDUuMTIyLDEuMDU2bC0zLjYwNiwxMS42MTkgYy0wLjE4LDAuNTgxLTAuMDE3LDEuMjEzLDAuNDIyLDEuNjMzYzAuMzA0LDAuMjkxLDAuNzAzLDAuNDQ2LDEuMTEsMC40NDZjMC4xODEsMCwwLjM2My0wLjAzMSwwLjU0LTAuMDkzbDExLjczOC0zLjc4NCBsMS4xNTYsNS42MDVjMC4yNDQsMS4xODEsMS4yNzEsMS44OTYsMi4zMzQsMS44OTZjMC41NDcsMCwxLjEwNC0wLjE4OSwxLjU2Ny0wLjYwMmwzLjcwOS0zLjI5OWw2LjQwNCwxMC43NTMgQzQ4Ljg3NSw5MC42NzEsNDkuNDIzLDkxLDUwLjAxNyw5MWMwLjAxMSwwLDAuMDIzLDAsMC4wMzMsMGMwLjYwOC0wLjAxMywxLjE1Ni0wLjM2NywxLjQxNi0wLjkxN2w2LjAwMi0xMC41OTdsMy42MDIsMy4yMDQgYzAuNDY0LDAuNDEyLDEuMDIsMC42MDIsMS41NjcsMC42MDJjMS4wNjMsMCwyLjA5LTAuNzE1LDIuMzM0LTEuODk2bDEuMTM3LTUuNTEzbDExLjIsMy42OTJjMC4xNzYsMC4wNjMsMC4zNTksMC4wOTMsMC41NCwwLjA5MyBjMC40MTgsMCwwLjgyOC0wLjE2NCwxLjEzNC0wLjQ3YzAuNDM4LTAuNDM4LDAuNTg1LTEuMDg5LDAuMzc3LTEuNjczbC00LjA1Mi0xMS4zNDRsNi4xNDYtMS4yNjcgYzEuNzg5LTAuMzY5LDIuNTA4LTIuNTM2LDEuMjk0LTMuOTAxbC0zLjkxMS00LjM5N2wxMS45NzUtNS42NzJjMC41MjgtMC4yNSwwLjg2NS0wLjc3LDAuOTAyLTEuMzQ4IGMtMC4wMzctMC41NzktMC4zNzQtMS4wOTgtMC45MDItMS4zNDlsLTExLjgxOC01LjU5OGwzLjc1NC00LjIyMWMxLjIxNC0xLjM2NSwwLjQ5NS0zLjUzMi0xLjI5NC0zLjkwMWwtNi4yMy0xLjI4NGw0LjEzNS0xMS41NzcgYzAuMjA4LTAuNTg0LDAuMDYyLTEuMjM1LTAuMzc3LTEuNjczYy0wLjMwNi0wLjMwNi0wLjcxNi0wLjQ3LTEuMTM0LTAuNDdjLTAuMTgxLDAtMC4zNjMsMC4wMy0wLjU0LDAuMDkzbC0xMS4xNTIsNC4xNzUgbC0xLjE4NS01Ljc0NmMtMC4yNDQtMS4xODEtMS4yNzEtMS44OTYtMi4zMzQtMS44OTZjLTAuNTQ3LDAtMS4xMDQsMC4xODktMS41NjcsMC42MDJsLTMuODY4LDMuNDRsLTUuNzItMTEuMjcyIGMtMC4yNi0wLjU0OS0wLjgwOC0wLjkwNC0xLjQxNi0wLjkxN0M1MC4wNTYsOC4wMDEsNTAuMDQ1LDguMDAxLDUwLjAzMyw4LjAwMUw1MC4wMzMsOC4wMDF6XFxcIiAvPjxnPjxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjE5XFxcIiBmaWxsPVxcXCIjZmZjNTcxXFxcIiAvPjwvZz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLkJyb3dzZXJTcHJpdGUgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbnZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDoge307XG5cblxuXG5cblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbnZhciBkZWVwbWVyZ2UgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIHVuZGVmaW5lZCA9PT0gJ2Z1bmN0aW9uJyAmJiB1bmRlZmluZWQuYW1kKSB7XG4gICAgICAgIHVuZGVmaW5lZChmYWN0b3J5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9XG59KGNvbW1vbmpzR2xvYmFsLCBmdW5jdGlvbiAoKSB7XG5cbmZ1bmN0aW9uIGlzTWVyZ2VhYmxlT2JqZWN0KHZhbCkge1xuICAgIHZhciBub25OdWxsT2JqZWN0ID0gdmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xuXG4gICAgcmV0dXJuIG5vbk51bGxPYmplY3RcbiAgICAgICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IFJlZ0V4cF0nXG4gICAgICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBEYXRlXSdcbn1cblxuZnVuY3Rpb24gZW1wdHlUYXJnZXQodmFsKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge31cbn1cblxuZnVuY3Rpb24gY2xvbmVJZk5lY2Vzc2FyeSh2YWx1ZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGNsb25lID0gb3B0aW9uc0FyZ3VtZW50ICYmIG9wdGlvbnNBcmd1bWVudC5jbG9uZSA9PT0gdHJ1ZTtcbiAgICByZXR1cm4gKGNsb25lICYmIGlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSkgPyBkZWVwbWVyZ2UoZW1wdHlUYXJnZXQodmFsdWUpLCB2YWx1ZSwgb3B0aW9uc0FyZ3VtZW50KSA6IHZhbHVlXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRBcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgZGVzdGluYXRpb24gPSB0YXJnZXQuc2xpY2UoKTtcbiAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbihlLCBpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGVzdGluYXRpb25baV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpXSA9IGNsb25lSWZOZWNlc3NhcnkoZSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChpc01lcmdlYWJsZU9iamVjdChlKSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25baV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2ldLCBlLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5pbmRleE9mKGUpID09PSAtMSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb24ucHVzaChjbG9uZUlmTmVjZXNzYXJ5KGUsIG9wdGlvbnNBcmd1bWVudCkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgZGVzdGluYXRpb24gPSB7fTtcbiAgICBpZiAoaXNNZXJnZWFibGVPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICBPYmplY3Qua2V5cyh0YXJnZXQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGNsb25lSWZOZWNlc3NhcnkodGFyZ2V0W2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIWlzTWVyZ2VhYmxlT2JqZWN0KHNvdXJjZVtrZXldKSB8fCAhdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZUlmTmVjZXNzYXJ5KHNvdXJjZVtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGRlZXBtZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGVzdGluYXRpb25cbn1cblxuZnVuY3Rpb24gZGVlcG1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgYXJyYXkgPSBBcnJheS5pc0FycmF5KHNvdXJjZSk7XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRpb25zQXJndW1lbnQgfHwgeyBhcnJheU1lcmdlOiBkZWZhdWx0QXJyYXlNZXJnZSB9O1xuICAgIHZhciBhcnJheU1lcmdlID0gb3B0aW9ucy5hcnJheU1lcmdlIHx8IGRlZmF1bHRBcnJheU1lcmdlO1xuXG4gICAgaWYgKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRhcmdldCkgPyBhcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIDogY2xvbmVJZk5lY2Vzc2FyeShzb3VyY2UsIG9wdGlvbnNBcmd1bWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudClcbiAgICB9XG59XG5cbmRlZXBtZXJnZS5hbGwgPSBmdW5jdGlvbiBkZWVwbWVyZ2VBbGwoYXJyYXksIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkgfHwgYXJyYXkubGVuZ3RoIDwgMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpcnN0IGFyZ3VtZW50IHNob3VsZCBiZSBhbiBhcnJheSB3aXRoIGF0IGxlYXN0IHR3byBlbGVtZW50cycpXG4gICAgfVxuXG4gICAgLy8gd2UgYXJlIHN1cmUgdGhlcmUgYXJlIGF0IGxlYXN0IDIgdmFsdWVzLCBzbyBpdCBpcyBzYWZlIHRvIGhhdmUgbm8gaW5pdGlhbCB2YWx1ZVxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgbmV4dCkge1xuICAgICAgICByZXR1cm4gZGVlcG1lcmdlKHByZXYsIG5leHQsIG9wdGlvbnNBcmd1bWVudClcbiAgICB9KVxufTtcblxucmV0dXJuIGRlZXBtZXJnZVxuXG59KSk7XG59KTtcblxuLy8gICAgICBcbi8vIEFuIGV2ZW50IGhhbmRsZXIgY2FuIHRha2UgYW4gb3B0aW9uYWwgZXZlbnQgYXJndW1lbnRcbi8vIGFuZCBzaG91bGQgbm90IHJldHVybiBhIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vIEFuIGFycmF5IG9mIGFsbCBjdXJyZW50bHkgcmVnaXN0ZXJlZCBldmVudCBoYW5kbGVycyBmb3IgYSB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gQSBtYXAgb2YgZXZlbnQgdHlwZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIFxuXG4vKiogTWl0dDogVGlueSAofjIwMGIpIGZ1bmN0aW9uYWwgZXZlbnQgZW1pdHRlciAvIHB1YnN1Yi5cbiAqICBAbmFtZSBtaXR0XG4gKiAgQHJldHVybnMge01pdHR9XG4gKi9cbmZ1bmN0aW9uIG1pdHQoYWxsICAgICAgICAgICAgICAgICApIHtcblx0YWxsID0gYWxsIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0cmV0dXJuIHtcblx0XHQvKipcblx0XHQgKiBSZWdpc3RlciBhbiBldmVudCBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSAge1N0cmluZ30gdHlwZVx0VHlwZSBvZiBldmVudCB0byBsaXN0ZW4gZm9yLCBvciBgXCIqXCJgIGZvciBhbGwgZXZlbnRzXG5cdFx0ICogQHBhcmFtICB7RnVuY3Rpb259IGhhbmRsZXIgRnVuY3Rpb24gdG8gY2FsbCBpbiByZXNwb25zZSB0byBnaXZlbiBldmVudFxuXHRcdCAqIEBtZW1iZXJPZiBtaXR0XG5cdFx0ICovXG5cdFx0b246IGZ1bmN0aW9uIG9uKHR5cGUgICAgICAgICwgaGFuZGxlciAgICAgICAgICAgICAgKSB7XG5cdFx0XHQoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBhbiBldmVudCBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSAge1N0cmluZ30gdHlwZVx0VHlwZSBvZiBldmVudCB0byB1bnJlZ2lzdGVyIGBoYW5kbGVyYCBmcm9tLCBvciBgXCIqXCJgXG5cdFx0ICogQHBhcmFtICB7RnVuY3Rpb259IGhhbmRsZXIgSGFuZGxlciBmdW5jdGlvbiB0byByZW1vdmVcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdG9mZjogZnVuY3Rpb24gb2ZmKHR5cGUgICAgICAgICwgaGFuZGxlciAgICAgICAgICAgICAgKSB7XG5cdFx0XHRpZiAoYWxsW3R5cGVdKSB7XG5cdFx0XHRcdGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBJbnZva2UgYWxsIGhhbmRsZXJzIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKiBJZiBwcmVzZW50LCBgXCIqXCJgIGhhbmRsZXJzIGFyZSBpbnZva2VkIGFmdGVyIHR5cGUtbWF0Y2hlZCBoYW5kbGVycy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlICBUaGUgZXZlbnQgdHlwZSB0byBpbnZva2Vcblx0XHQgKiBAcGFyYW0ge0FueX0gW2V2dF0gIEFueSB2YWx1ZSAob2JqZWN0IGlzIHJlY29tbWVuZGVkIGFuZCBwb3dlcmZ1bCksIHBhc3NlZCB0byBlYWNoIGhhbmRsZXJcblx0XHQgKiBAbWVtYmVyb2YgbWl0dFxuXHRcdCAqL1xuXHRcdGVtaXQ6IGZ1bmN0aW9uIGVtaXQodHlwZSAgICAgICAgLCBldnQgICAgICkge1xuXHRcdFx0KGFsbFt0eXBlXSB8fCBbXSkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IGhhbmRsZXIoZXZ0KTsgfSk7XG5cdFx0XHQoYWxsWycqJ10gfHwgW10pLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyBoYW5kbGVyKHR5cGUsIGV2dCk7IH0pO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIG5hbWVzcGFjZXNfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbnZhciBuYW1lc3BhY2VzID0ge1xuICBzdmc6IHtcbiAgICBuYW1lOiAneG1sbnMnLFxuICAgIHVyaTogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICB9LFxuICB4bGluazoge1xuICAgIG5hbWU6ICd4bWxuczp4bGluaycsXG4gICAgdXJpOiAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaydcbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbmFtZXNwYWNlcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xufSk7XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJzXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBvYmplY3RUb0F0dHJzU3RyaW5nID0gZnVuY3Rpb24gKGF0dHJzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhhdHRycykubWFwKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgdmFyIHZhbHVlID0gYXR0cnNbYXR0cl0udG9TdHJpbmcoKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG4gICAgcmV0dXJuIChhdHRyICsgXCI9XFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIik7XG4gIH0pLmpvaW4oJyAnKTtcbn07XG5cbnZhciBzdmcgPSBuYW1lc3BhY2VzXzEuc3ZnO1xudmFyIHhsaW5rID0gbmFtZXNwYWNlc18xLnhsaW5rO1xuXG52YXIgZGVmYXVsdEF0dHJzID0ge307XG5kZWZhdWx0QXR0cnNbc3ZnLm5hbWVdID0gc3ZnLnVyaTtcbmRlZmF1bHRBdHRyc1t4bGluay5uYW1lXSA9IHhsaW5rLnVyaTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbnRlbnRdXG4gKiBAcGFyYW0ge09iamVjdH0gW2F0dHJpYnV0ZXNdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciB3cmFwSW5TdmdTdHJpbmcgPSBmdW5jdGlvbiAoY29udGVudCwgYXR0cmlidXRlcykge1xuICBpZiAoIGNvbnRlbnQgPT09IHZvaWQgMCApIGNvbnRlbnQgPSAnJztcblxuICB2YXIgYXR0cnMgPSBkZWVwbWVyZ2UoZGVmYXVsdEF0dHJzLCBhdHRyaWJ1dGVzIHx8IHt9KTtcbiAgdmFyIGF0dHJzUmVuZGVyZWQgPSBvYmplY3RUb0F0dHJzU3RyaW5nKGF0dHJzKTtcbiAgcmV0dXJuIChcIjxzdmcgXCIgKyBhdHRyc1JlbmRlcmVkICsgXCI+XCIgKyBjb250ZW50ICsgXCI8L3N2Zz5cIik7XG59O1xuXG52YXIgc3ZnJDEgPSBuYW1lc3BhY2VzXzEuc3ZnO1xudmFyIHhsaW5rJDEgPSBuYW1lc3BhY2VzXzEueGxpbms7XG5cbnZhciBkZWZhdWx0Q29uZmlnID0ge1xuICBhdHRyczogKCBvYmogPSB7XG4gICAgc3R5bGU6IFsncG9zaXRpb246IGFic29sdXRlJywgJ3dpZHRoOiAwJywgJ2hlaWdodDogMCddLmpvaW4oJzsgJyksXG4gICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gIH0sIG9ialtzdmckMS5uYW1lXSA9IHN2ZyQxLnVyaSwgb2JqW3hsaW5rJDEubmFtZV0gPSB4bGluayQxLnVyaSwgb2JqIClcbn07XG52YXIgb2JqO1xuXG52YXIgU3ByaXRlID0gZnVuY3Rpb24gU3ByaXRlKGNvbmZpZykge1xuICB0aGlzLmNvbmZpZyA9IGRlZXBtZXJnZShkZWZhdWx0Q29uZmlnLCBjb25maWcgfHwge30pO1xuICB0aGlzLnN5bWJvbHMgPSBbXTtcbn07XG5cbi8qKlxuICogQWRkIG5ldyBzeW1ib2wuIElmIHN5bWJvbCB3aXRoIHRoZSBzYW1lIGlkIGV4aXN0cyBpdCB3aWxsIGJlIHJlcGxhY2VkLlxuICogQHBhcmFtIHtTcHJpdGVTeW1ib2x9IHN5bWJvbFxuICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIC0gc3ltYm9sIHdhcyBhZGRlZCwgYGZhbHNlYCAtIHJlcGxhY2VkXG4gKi9cblNwcml0ZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChzeW1ib2wpIHtcbiAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIHN5bWJvbHMgPSByZWYuc3ltYm9scztcbiAgdmFyIGV4aXN0aW5nID0gdGhpcy5maW5kKHN5bWJvbC5pZCk7XG5cbiAgaWYgKGV4aXN0aW5nKSB7XG4gICAgc3ltYm9sc1tzeW1ib2xzLmluZGV4T2YoZXhpc3RpbmcpXSA9IHN5bWJvbDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzeW1ib2xzLnB1c2goc3ltYm9sKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzeW1ib2wgJiBkZXN0cm95IGl0XG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCAtIHN5bWJvbCB3YXMgZm91bmQgJiBzdWNjZXNzZnVsbHkgZGVzdHJveWVkLCBgZmFsc2VgIC0gb3RoZXJ3aXNlXG4gKi9cblNwcml0ZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlIChpZCkge1xuICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgc3ltYm9scyA9IHJlZi5zeW1ib2xzO1xuICB2YXIgc3ltYm9sID0gdGhpcy5maW5kKGlkKTtcblxuICBpZiAoc3ltYm9sKSB7XG4gICAgc3ltYm9scy5zcGxpY2Uoc3ltYm9scy5pbmRleE9mKHN5bWJvbCksIDEpO1xuICAgIHN5bWJvbC5kZXN0cm95KCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7U3ByaXRlU3ltYm9sfG51bGx9XG4gKi9cblNwcml0ZS5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uIGZpbmQgKGlkKSB7XG4gIHJldHVybiB0aGlzLnN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmlkID09PSBpZDsgfSlbMF0gfHwgbnVsbDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5TcHJpdGUucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIGhhcyAoaWQpIHtcbiAgcmV0dXJuIHRoaXMuZmluZChpZCkgIT09IG51bGw7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5zdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkgKCkge1xuICB2YXIgcmVmID0gdGhpcy5jb25maWc7XG4gICAgdmFyIGF0dHJzID0gcmVmLmF0dHJzO1xuICB2YXIgc3RyaW5naWZpZWRTeW1ib2xzID0gdGhpcy5zeW1ib2xzLm1hcChmdW5jdGlvbiAocykgeyByZXR1cm4gcy5zdHJpbmdpZnkoKTsgfSkuam9pbignJyk7XG4gIHJldHVybiB3cmFwSW5TdmdTdHJpbmcoc3RyaW5naWZpZWRTeW1ib2xzLCBhdHRycyk7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KCk7XG59O1xuXG5TcHJpdGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgdGhpcy5zeW1ib2xzLmZvckVhY2goZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuZGVzdHJveSgpOyB9KTtcbn07XG5cbnZhciBTcHJpdGVTeW1ib2wgPSBmdW5jdGlvbiBTcHJpdGVTeW1ib2wocmVmKSB7XG4gIHZhciBpZCA9IHJlZi5pZDtcbiAgdmFyIHZpZXdCb3ggPSByZWYudmlld0JveDtcbiAgdmFyIGNvbnRlbnQgPSByZWYuY29udGVudDtcblxuICB0aGlzLmlkID0gaWQ7XG4gIHRoaXMudmlld0JveCA9IHZpZXdCb3g7XG4gIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5zdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkgKCkge1xuICByZXR1cm4gdGhpcy5jb250ZW50O1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpO1xufTtcblxuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgWydpZCcsICd2aWV3Qm94JywgJ2NvbnRlbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7IHJldHVybiBkZWxldGUgdGhpcyQxW3Byb3BdOyB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbnZhciBwYXJzZSA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIHZhciBoYXNJbXBvcnROb2RlID0gISFkb2N1bWVudC5pbXBvcnROb2RlO1xuICB2YXIgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhjb250ZW50LCAnaW1hZ2Uvc3ZnK3htbCcpLmRvY3VtZW50RWxlbWVudDtcblxuICAvKipcbiAgICogRml4IGZvciBicm93c2VyIHdoaWNoIGFyZSB0aHJvd2luZyBXcm9uZ0RvY3VtZW50RXJyb3JcbiAgICogaWYgeW91IGluc2VydCBhbiBlbGVtZW50IHdoaWNoIGlzIG5vdCBwYXJ0IG9mIHRoZSBkb2N1bWVudFxuICAgKiBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc5ODY1MTkvNDYyNDQwM1xuICAgKi9cbiAgaWYgKGhhc0ltcG9ydE5vZGUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuaW1wb3J0Tm9kZShkb2MsIHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIGRvYztcbn07XG5cbnZhciBCcm93c2VyU3ByaXRlU3ltYm9sID0gKGZ1bmN0aW9uIChTcHJpdGVTeW1ib2wkJDEpIHtcbiAgZnVuY3Rpb24gQnJvd3NlclNwcml0ZVN5bWJvbCAoKSB7XG4gICAgU3ByaXRlU3ltYm9sJCQxLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBpZiAoIFNwcml0ZVN5bWJvbCQkMSApIEJyb3dzZXJTcHJpdGVTeW1ib2wuX19wcm90b19fID0gU3ByaXRlU3ltYm9sJCQxO1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFNwcml0ZVN5bWJvbCQkMSAmJiBTcHJpdGVTeW1ib2wkJDEucHJvdG90eXBlICk7XG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQnJvd3NlclNwcml0ZVN5bWJvbDtcblxuICB2YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBpc01vdW50ZWQ6IHt9IH07XG5cbiAgcHJvdG90eXBlQWNjZXNzb3JzLmlzTW91bnRlZC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5ub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAgICogQHJldHVybiB7QnJvd3NlclNwcml0ZVN5bWJvbH1cbiAgICovXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wuY3JlYXRlRnJvbUV4aXN0aW5nTm9kZSA9IGZ1bmN0aW9uIGNyZWF0ZUZyb21FeGlzdGluZ05vZGUgKG5vZGUpIHtcbiAgICByZXR1cm4gbmV3IEJyb3dzZXJTcHJpdGVTeW1ib2woe1xuICAgICAgaWQ6IG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpLFxuICAgICAgdmlld0JveDogbm9kZS5nZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnKSxcbiAgICAgIGNvbnRlbnQ6IG5vZGUub3V0ZXJIVE1MXG4gICAgfSk7XG4gIH07XG5cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgdGhpcy51bm1vdW50KCk7XG4gICAgfVxuICAgIFNwcml0ZVN5bWJvbCQkMS5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR8c3RyaW5nfSB0YXJnZXRcbiAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICovXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gbW91bnQgKHRhcmdldCkge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgICB9XG5cbiAgICB2YXIgbW91bnRUYXJnZXQgPSB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSA6IHRhcmdldDtcbiAgICB2YXIgbm9kZSA9IHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcblxuICAgIG1vdW50VGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5zdHJpbmdpZnkoKTtcbiAgICByZXR1cm4gcGFyc2Uod3JhcEluU3ZnU3RyaW5nKGNvbnRlbnQpKS5jaGlsZE5vZGVzWzBdO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLnVubW91bnQgPSBmdW5jdGlvbiB1bm1vdW50ICgpIHtcbiAgICB0aGlzLm5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbiAgcmV0dXJuIEJyb3dzZXJTcHJpdGVTeW1ib2w7XG59KFNwcml0ZVN5bWJvbCkpO1xuXG52YXIgZGVmYXVsdENvbmZpZyQxID0ge1xuICAvKipcbiAgICogU2hvdWxkIGZvbGxvd2luZyBvcHRpb25zIGJlIGF1dG9tYXRpY2FsbHkgY29uZmlndXJlZDpcbiAgICogLSBgc3luY1VybHNXaXRoQmFzZVRhZ2BcbiAgICogLSBgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlcmBcbiAgICogLSBgbW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2xgXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgYXV0b0NvbmZpZ3VyZTogdHJ1ZSxcblxuICAvKipcbiAgICogRGVmYXVsdCBtb3VudGluZyBzZWxlY3RvclxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgbW91bnRUbzogJ2JvZHknLFxuXG4gIC8qKlxuICAgKiBGaXggZGlzYXBwZWFyaW5nIFNWRyBlbGVtZW50cyB3aGVuIDxiYXNlIGhyZWY+IGV4aXN0cy5cbiAgICogRXhlY3V0ZXMgd2hlbiBzcHJpdGUgbW91bnRlZC5cbiAgICogQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODI2NTMzNi83OTYxNTJcbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXZlcmRpbWVuc2lvbi9hbmd1bGFyLXN2Zy1iYXNlLWZpeFxuICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvaXNzdWVzLzg5MzQjaXNzdWVjb21tZW50LTU2NTY4NDY2XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgc3luY1VybHNXaXRoQmFzZVRhZzogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFNob3VsZCBzcHJpdGUgbGlzdGVuIGN1c3RvbSBsb2NhdGlvbiBjaGFuZ2UgZXZlbnRcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBsaXN0ZW5Mb2NhdGlvbkNoYW5nZUV2ZW50OiB0cnVlLFxuXG4gIC8qKlxuICAgKiBDdXN0b20gd2luZG93IGV2ZW50IG5hbWUgd2hpY2ggc2hvdWxkIGJlIGVtaXR0ZWQgdG8gdXBkYXRlIHNwcml0ZSB1cmxzXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBsb2NhdGlvbkNoYW5nZUV2ZW50OiAnbG9jYXRpb25DaGFuZ2UnLFxuXG4gIC8qKlxuICAgKiBFbWl0IGxvY2F0aW9uIGNoYW5nZSBldmVudCBpbiBBbmd1bGFyIGF1dG9tYXRpY2FsbHlcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBsb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyOiBmYWxzZSxcblxuICAvKipcbiAgICogU2VsZWN0b3IgdG8gZmluZCBzeW1ib2xzIHVzYWdlcyB3aGVuIHVwZGF0aW5nIHNwcml0ZSB1cmxzXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICB1c2FnZXNUb1VwZGF0ZTogJ3VzZVsqfGhyZWZdJyxcblxuICAvKipcbiAgICogRml4IEZpcmVmb3ggYnVnIHdoZW4gZ3JhZGllbnRzIGFuZCBwYXR0ZXJucyBkb24ndCB3b3JrIGlmIHRoZXkgYXJlIHdpdGhpbiBhIHN5bWJvbC5cbiAgICogRXhlY3V0ZXMgd2hlbiBzcHJpdGUgaXMgcmVuZGVyZWQsIGJ1dCBub3QgbW91bnRlZC5cbiAgICogQHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0zMDY2NzRcbiAgICogQHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0zNTM1NzVcbiAgICogQHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMjM1MzY0XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgbW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2w6IGZhbHNlXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7Kn0gYXJyYXlMaWtlXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xudmFyIGFycmF5RnJvbSA9IGZ1bmN0aW9uIChhcnJheUxpa2UpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycmF5TGlrZSwgMCk7XG59O1xuXG52YXIgYnJvd3NlciA9IHtcbiAgaXNDaHJvbWU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIC9jaHJvbWUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyB9LFxuICBpc0ZpcmVmb3g6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIC9maXJlZm94L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTsgfSxcblxuICAvLyBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTM3NTAzKHY9dnMuODUpLmFzcHhcbiAgaXNJRTogZnVuY3Rpb24gKCkgeyByZXR1cm4gL21zaWUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IC90cmlkZW50L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTsgfSxcbiAgaXNFZGdlOiBmdW5jdGlvbiAoKSB7IHJldHVybiAvZWRnZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7IH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Kn0gZGF0YVxuICovXG52YXIgZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChuYW1lLCBkYXRhKSB7XG4gIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICBldmVudC5pbml0Q3VzdG9tRXZlbnQobmFtZSwgZmFsc2UsIGZhbHNlLCBkYXRhKTtcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcblxuLyoqXG4gKiBJRSBkb2Vzbid0IGV2YWx1YXRlIDxzdHlsZT4gdGFncyBpbiBTVkdzIHRoYXQgYXJlIGR5bmFtaWNhbGx5IGFkZGVkIHRvIHRoZSBwYWdlLlxuICogVGhpcyB0cmljayB3aWxsIHRyaWdnZXIgSUUgdG8gcmVhZCBhbmQgdXNlIGFueSBleGlzdGluZyBTVkcgPHN0eWxlPiB0YWdzLlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vaWNvbmljL1NWR0luamVjdG9yL2lzc3Vlcy8yM1xuICogQHNlZSBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMDg5ODQ2OS9cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGUgRE9NIEVsZW1lbnQgdG8gc2VhcmNoIDxzdHlsZT4gdGFncyBpblxuICogQHJldHVybiB7QXJyYXk8SFRNTFN0eWxlRWxlbWVudD59XG4gKi9cbnZhciBldmFsU3R5bGVzSUVXb3JrYXJvdW5kID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIHVwZGF0ZWROb2RlcyA9IFtdO1xuXG4gIGFycmF5RnJvbShub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJykpXG4gICAgLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlKSB7XG4gICAgICBzdHlsZS50ZXh0Q29udGVudCArPSAnJztcbiAgICAgIHVwZGF0ZWROb2Rlcy5wdXNoKHN0eWxlKTtcbiAgICB9KTtcblxuICByZXR1cm4gdXBkYXRlZE5vZGVzO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VybF0gSWYgbm90IHByb3ZpZGVkIC0gY3VycmVudCBVUkwgd2lsbCBiZSB1c2VkXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBnZXRVcmxXaXRob3V0RnJhZ21lbnQgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHJldHVybiAodXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zcGxpdCgnIycpWzBdO1xufTtcblxuLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICovXG52YXIgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlciA9IGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHJvb3RTY29wZScsIGZ1bmN0aW9uICgkcm9vdFNjb3BlKSB7XG4gICAgJHJvb3RTY29wZS4kb24oJyRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3MnLCBmdW5jdGlvbiAoZSwgbmV3VXJsLCBvbGRVcmwpIHtcbiAgICAgIGRpc3BhdGNoRXZlbnQoZXZlbnROYW1lLCB7IG9sZFVybDogb2xkVXJsLCBuZXdVcmw6IG5ld1VybCB9KTtcbiAgICB9KTtcbiAgfV0pO1xufTtcblxudmFyIGRlZmF1bHRTZWxlY3RvciA9ICdsaW5lYXJHcmFkaWVudCwgcmFkaWFsR3JhZGllbnQsIHBhdHRlcm4sIG1hc2ssIGNsaXBQYXRoJztcblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHN2Z1xuICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcl1cbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbnZhciBtb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbCA9IGZ1bmN0aW9uIChzdmcsIHNlbGVjdG9yKSB7XG4gIGlmICggc2VsZWN0b3IgPT09IHZvaWQgMCApIHNlbGVjdG9yID0gZGVmYXVsdFNlbGVjdG9yO1xuXG4gIGFycmF5RnJvbShzdmcucXVlcnlTZWxlY3RvckFsbCgnc3ltYm9sJykpLmZvckVhY2goZnVuY3Rpb24gKHN5bWJvbCkge1xuICAgIGFycmF5RnJvbShzeW1ib2wucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHN5bWJvbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBzeW1ib2wpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHN2Zztcbn07XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlTGlzdH0gbm9kZXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFttYXRjaGVyXVxuICogQHJldHVybiB7QXR0cltdfVxuICovXG5mdW5jdGlvbiBzZWxlY3RBdHRyaWJ1dGVzKG5vZGVzLCBtYXRjaGVyKSB7XG4gIHZhciBhdHRycyA9IGFycmF5RnJvbShub2RlcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5vZGUpIHtcbiAgICBpZiAoIW5vZGUuYXR0cmlidXRlcykge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG5cbiAgICB2YXIgYXJyYXlmaWVkID0gYXJyYXlGcm9tKG5vZGUuYXR0cmlidXRlcyk7XG4gICAgdmFyIG1hdGNoZWQgPSBtYXRjaGVyID8gYXJyYXlmaWVkLmZpbHRlcihtYXRjaGVyKSA6IGFycmF5ZmllZDtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChtYXRjaGVkKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBhdHRycztcbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGVMaXN0fE5vZGV9IG5vZGVzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtjbG9uZT10cnVlXVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cbnZhciB4TGlua05TID0gbmFtZXNwYWNlc18xLnhsaW5rLnVyaTtcbnZhciB4TGlua0F0dHJOYW1lID0gJ3hsaW5rOmhyZWYnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbnZhciBzcGVjaWFsVXJsQ2hhcnNQYXR0ZXJuID0gL1t7fXxcXFxcXFxeXFxbXFxdYFwiPD5dL2c7XG5cbmZ1bmN0aW9uIGVuY29kZXIodXJsKSB7XG4gIHJldHVybiB1cmwucmVwbGFjZShzcGVjaWFsVXJsQ2hhcnNQYXR0ZXJuLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gKFwiJVwiICsgKG1hdGNoWzBdLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgXCJcXFxcJCZcIik7IC8vICQmIG1lYW5zIHRoZSB3aG9sZSBtYXRjaGVkIHN0cmluZ1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZUxpc3R9IG5vZGVzXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhcnRzV2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VXaXRoXG4gKiBAcmV0dXJuIHtOb2RlTGlzdH1cbiAqL1xuZnVuY3Rpb24gdXBkYXRlUmVmZXJlbmNlcyhub2Rlcywgc3RhcnRzV2l0aCwgcmVwbGFjZVdpdGgpIHtcbiAgYXJyYXlGcm9tKG5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIGhyZWYgPSBub2RlLmdldEF0dHJpYnV0ZSh4TGlua0F0dHJOYW1lKTtcbiAgICBpZiAoaHJlZiAmJiBocmVmLmluZGV4T2Yoc3RhcnRzV2l0aCkgPT09IDApIHtcbiAgICAgIHZhciBuZXdVcmwgPSBocmVmLnJlcGxhY2Uoc3RhcnRzV2l0aCwgcmVwbGFjZVdpdGgpO1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGVOUyh4TGlua05TLCB4TGlua0F0dHJOYW1lLCBuZXdVcmwpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuXG4vKipcbiAqIExpc3Qgb2YgU1ZHIGF0dHJpYnV0ZXMgdG8gdXBkYXRlIHVybCgpIHRhcmdldCBpbiB0aGVtXG4gKi9cbnZhciBhdHRMaXN0ID0gW1xuICAnY2xpcFBhdGgnLFxuICAnY29sb3JQcm9maWxlJyxcbiAgJ3NyYycsXG4gICdjdXJzb3InLFxuICAnZmlsbCcsXG4gICdmaWx0ZXInLFxuICAnbWFya2VyJyxcbiAgJ21hcmtlclN0YXJ0JyxcbiAgJ21hcmtlck1pZCcsXG4gICdtYXJrZXJFbmQnLFxuICAnbWFzaycsXG4gICdzdHJva2UnLFxuICAnc3R5bGUnXG5dO1xuXG52YXIgYXR0U2VsZWN0b3IgPSBhdHRMaXN0Lm1hcChmdW5jdGlvbiAoYXR0cikgeyByZXR1cm4gKFwiW1wiICsgYXR0ciArIFwiXVwiKTsgfSkuam9pbignLCcpO1xuXG4vKipcbiAqIFVwZGF0ZSBVUkxzIGluIHN2ZyBpbWFnZSAobGlrZSBgZmlsbD1cInVybCguLi4pXCJgKSBhbmQgdXBkYXRlIHJlZmVyZW5jaW5nIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHN2Z1xuICogQHBhcmFtIHtOb2RlTGlzdH0gcmVmZXJlbmNlc1xuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBzdGFydHNXaXRoXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZVdpdGhcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHNwcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N2Zy5zcHJpdGUnKTtcbiAqIGNvbnN0IHVzYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VzZScpO1xuICogdXBkYXRlVXJscyhzcHJpdGUsIHVzYWdlcywgJyMnLCAncHJlZml4IycpO1xuICovXG52YXIgdXBkYXRlVXJscyA9IGZ1bmN0aW9uIChzdmcsIHJlZmVyZW5jZXMsIHN0YXJ0c1dpdGgsIHJlcGxhY2VXaXRoKSB7XG4gIHZhciBzdGFydHNXaXRoRW5jb2RlZCA9IGVuY29kZXIoc3RhcnRzV2l0aCk7XG4gIHZhciByZXBsYWNlV2l0aEVuY29kZWQgPSBlbmNvZGVyKHJlcGxhY2VXaXRoKTtcblxuICB2YXIgbm9kZXMgPSBzdmcucXVlcnlTZWxlY3RvckFsbChhdHRTZWxlY3Rvcik7XG4gIHZhciBhdHRycyA9IHNlbGVjdEF0dHJpYnV0ZXMobm9kZXMsIGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIgbG9jYWxOYW1lID0gcmVmLmxvY2FsTmFtZTtcbiAgICB2YXIgdmFsdWUgPSByZWYudmFsdWU7XG5cbiAgICByZXR1cm4gYXR0TGlzdC5pbmRleE9mKGxvY2FsTmFtZSkgIT09IC0xICYmIHZhbHVlLmluZGV4T2YoKFwidXJsKFwiICsgc3RhcnRzV2l0aEVuY29kZWQpKSAhPT0gLTE7XG4gIH0pO1xuXG4gIGF0dHJzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHsgcmV0dXJuIGF0dHIudmFsdWUgPSBhdHRyLnZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAoc3RhcnRzV2l0aEVuY29kZWQpLCAnZycpLCByZXBsYWNlV2l0aEVuY29kZWQpOyB9KTtcbiAgdXBkYXRlUmVmZXJlbmNlcyhyZWZlcmVuY2VzLCBzdGFydHNXaXRoRW5jb2RlZCwgcmVwbGFjZVdpdGhFbmNvZGVkKTtcbn07XG5cbi8qKlxuICogSW50ZXJuYWwgZW1pdHRlciBldmVudHNcbiAqIEBlbnVtXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgRXZlbnRzID0ge1xuICBNT1VOVDogJ21vdW50JyxcbiAgU1lNQk9MX01PVU5UOiAnc3ltYm9sX21vdW50J1xufTtcblxudmFyIEJyb3dzZXJTcHJpdGUgPSAoZnVuY3Rpb24gKFNwcml0ZSQkMSkge1xuICBmdW5jdGlvbiBCcm93c2VyU3ByaXRlKGNmZykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgIGlmICggY2ZnID09PSB2b2lkIDAgKSBjZmcgPSB7fTtcblxuICAgIFNwcml0ZSQkMS5jYWxsKHRoaXMsIGRlZXBtZXJnZShkZWZhdWx0Q29uZmlnJDEsIGNmZykpO1xuXG4gICAgdmFyIGVtaXR0ZXIgPSBtaXR0KCk7XG4gICAgdGhpcy5fZW1pdHRlciA9IGVtaXR0ZXI7XG4gICAgdGhpcy5ub2RlID0gbnVsbDtcblxuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBjb25maWcgPSByZWYuY29uZmlnO1xuXG4gICAgaWYgKGNvbmZpZy5hdXRvQ29uZmlndXJlKSB7XG4gICAgICB0aGlzLl9hdXRvQ29uZmlndXJlKGNmZyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zeW5jVXJsc1dpdGhCYXNlVGFnKSB7XG4gICAgICB2YXIgYmFzZVVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICBlbWl0dGVyLm9uKEV2ZW50cy5NT1VOVCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcyQxLnVwZGF0ZVVybHMoJyMnLCBiYXNlVXJsKTsgfSk7XG4gICAgfVxuXG4gICAgdmFyIGhhbmRsZUxvY2F0aW9uQ2hhbmdlID0gdGhpcy5faGFuZGxlTG9jYXRpb25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVMb2NhdGlvbkNoYW5nZSA9IGhhbmRsZUxvY2F0aW9uQ2hhbmdlO1xuXG4gICAgLy8gUHJvdmlkZSB3YXkgdG8gdXBkYXRlIHNwcml0ZSB1cmxzIGV4dGVybmFsbHkgdmlhIGRpc3BhdGNoaW5nIGN1c3RvbSB3aW5kb3cgZXZlbnRcbiAgICBpZiAoY29uZmlnLmxpc3RlbkxvY2F0aW9uQ2hhbmdlRXZlbnQpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGNvbmZpZy5sb2NhdGlvbkNoYW5nZUV2ZW50LCBoYW5kbGVMb2NhdGlvbkNoYW5nZSk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCBsb2NhdGlvbiBjaGFuZ2UgZXZlbnQgaW4gQW5ndWxhciBhdXRvbWF0aWNhbGx5XG4gICAgaWYgKGNvbmZpZy5sb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyKSB7XG4gICAgICBsb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyKGNvbmZpZy5sb2NhdGlvbkNoYW5nZUV2ZW50KTtcbiAgICB9XG5cbiAgICAvLyBBZnRlciBzcHJpdGUgbW91bnRlZFxuICAgIGVtaXR0ZXIub24oRXZlbnRzLk1PVU5ULCBmdW5jdGlvbiAoc3ByaXRlTm9kZSkge1xuICAgICAgaWYgKGNvbmZpZy5tb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbCkge1xuICAgICAgICBtb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbChzcHJpdGVOb2RlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEFmdGVyIHN5bWJvbCBtb3VudGVkIGludG8gc3ByaXRlXG4gICAgZW1pdHRlci5vbihFdmVudHMuU1lNQk9MX01PVU5ULCBmdW5jdGlvbiAoc3ltYm9sTm9kZSkge1xuICAgICAgaWYgKGNvbmZpZy5tb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbCkge1xuICAgICAgICBtb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbChzeW1ib2xOb2RlLnBhcmVudE5vZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYnJvd3Nlci5pc0lFKCkgfHwgYnJvd3Nlci5pc0VkZ2UoKSkge1xuICAgICAgICBldmFsU3R5bGVzSUVXb3JrYXJvdW5kKHN5bWJvbE5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCBTcHJpdGUkJDEgKSBCcm93c2VyU3ByaXRlLl9fcHJvdG9fXyA9IFNwcml0ZSQkMTtcbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTcHJpdGUkJDEgJiYgU3ByaXRlJCQxLnByb3RvdHlwZSApO1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJyb3dzZXJTcHJpdGU7XG5cbiAgdmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgaXNNb3VudGVkOiB7fSB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgcHJvdG90eXBlQWNjZXNzb3JzLmlzTW91bnRlZC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5ub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBdXRvbWF0aWNhbGx5IGNvbmZpZ3VyZSBmb2xsb3dpbmcgb3B0aW9uc1xuICAgKiAtIGBzeW5jVXJsc1dpdGhCYXNlVGFnYFxuICAgKiAtIGBsb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyYFxuICAgKiAtIGBtb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbGBcbiAgICogQHBhcmFtIHtPYmplY3R9IGNmZ1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuX2F1dG9Db25maWd1cmUgPSBmdW5jdGlvbiBfYXV0b0NvbmZpZ3VyZSAoY2ZnKSB7XG4gICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIGNvbmZpZyA9IHJlZi5jb25maWc7XG5cbiAgICBpZiAodHlwZW9mIGNmZy5zeW5jVXJsc1dpdGhCYXNlVGFnID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLnN5bmNVcmxzV2l0aEJhc2VUYWcgPSB0eXBlb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Jhc2UnKVswXSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjZmcubG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uZmlnLmxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXIgPSB0eXBlb2Ygd2luZG93LmFuZ3VsYXIgIT09ICd1bmRlZmluZWQnO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2ZnLm1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLm1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sID0gYnJvd3Nlci5pc0ZpcmVmb3goKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudC5kZXRhaWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50LmRldGFpbC5vbGRVcmxcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50LmRldGFpbC5uZXdVcmxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLl9oYW5kbGVMb2NhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uIF9oYW5kbGVMb2NhdGlvbkNoYW5nZSAoZXZlbnQpIHtcbiAgICB2YXIgcmVmID0gZXZlbnQuZGV0YWlsO1xuICAgIHZhciBvbGRVcmwgPSByZWYub2xkVXJsO1xuICAgIHZhciBuZXdVcmwgPSByZWYubmV3VXJsO1xuICAgIHRoaXMudXBkYXRlVXJscyhvbGRVcmwsIG5ld1VybCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgc3ltYm9sLiBJZiBzeW1ib2wgd2l0aCB0aGUgc2FtZSBpZCBleGlzdHMgaXQgd2lsbCBiZSByZXBsYWNlZC5cbiAgICogSWYgc3ByaXRlIGFscmVhZHkgbW91bnRlZCAtIGBzeW1ib2wubW91bnQoc3ByaXRlLm5vZGUpYCB3aWxsIGJlIGNhbGxlZC5cbiAgICogQGZpcmVzIEV2ZW50cyNTWU1CT0xfTU9VTlRcbiAgICogQHBhcmFtIHtCcm93c2VyU3ByaXRlU3ltYm9sfSBzeW1ib2xcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIC0gc3ltYm9sIHdhcyBhZGRlZCwgYGZhbHNlYCAtIHJlcGxhY2VkXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQgKHN5bWJvbCkge1xuICAgIHZhciBzcHJpdGUgPSB0aGlzO1xuICAgIHZhciBpc05ld1N5bWJvbCA9IFNwcml0ZSQkMS5wcm90b3R5cGUuYWRkLmNhbGwodGhpcywgc3ltYm9sKTtcblxuICAgIGlmICh0aGlzLmlzTW91bnRlZCAmJiBpc05ld1N5bWJvbCkge1xuICAgICAgc3ltYm9sLm1vdW50KHNwcml0ZS5ub2RlKTtcbiAgICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChFdmVudHMuU1lNQk9MX01PVU5ULCBzeW1ib2wubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzTmV3U3ltYm9sO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBdHRhY2ggdG8gZXhpc3RpbmcgRE9NIG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmd8RWxlbWVudH0gdGFyZ2V0XG4gICAqIEByZXR1cm4ge0VsZW1lbnR8bnVsbH0gYXR0YWNoZWQgRE9NIEVsZW1lbnQuIG51bGwgaWYgbm9kZSB0byBhdHRhY2ggbm90IGZvdW5kLlxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24gYXR0YWNoICh0YXJnZXQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciBzcHJpdGUgPSB0aGlzO1xuXG4gICAgaWYgKHNwcml0ZS5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiBzcHJpdGUubm9kZTtcbiAgICB9XG5cbiAgICAvKiogQHR5cGUgRWxlbWVudCAqL1xuICAgIHZhciBub2RlID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgc3ByaXRlLm5vZGUgPSBub2RlO1xuXG4gICAgLy8gQWxyZWFkeSBhZGRlZCBzeW1ib2xzIG5lZWRzIHRvIGJlIG1vdW50ZWRcbiAgICB0aGlzLnN5bWJvbHMuZm9yRWFjaChmdW5jdGlvbiAoc3ltYm9sKSB7XG4gICAgICBzeW1ib2wubW91bnQoc3ByaXRlLm5vZGUpO1xuICAgICAgdGhpcyQxLl9lbWl0dGVyLmVtaXQoRXZlbnRzLlNZTUJPTF9NT1VOVCwgc3ltYm9sLm5vZGUpO1xuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIHN5bWJvbHMgZnJvbSBleGlzdGluZyBET00gbm9kZXMsIGFkZCBhbmQgbW91bnQgdGhlbVxuICAgIGFycmF5RnJvbShub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N5bWJvbCcpKVxuICAgICAgLmZvckVhY2goZnVuY3Rpb24gKHN5bWJvbE5vZGUpIHtcbiAgICAgICAgdmFyIHN5bWJvbCA9IEJyb3dzZXJTcHJpdGVTeW1ib2wuY3JlYXRlRnJvbUV4aXN0aW5nTm9kZShzeW1ib2xOb2RlKTtcbiAgICAgICAgc3ltYm9sLm5vZGUgPSBzeW1ib2xOb2RlOyAvLyBoYWNrIHRvIHByZXZlbnQgc3ltYm9sIG1vdW50aW5nIHRvIHNwcml0ZSB3aGVuIGFkZGluZ1xuICAgICAgICBzcHJpdGUuYWRkKHN5bWJvbCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChFdmVudHMuTU9VTlQsIG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBjb25maWcgPSByZWYuY29uZmlnO1xuICAgIHZhciBzeW1ib2xzID0gcmVmLnN5bWJvbHM7XG4gICAgdmFyIF9lbWl0dGVyID0gcmVmLl9lbWl0dGVyO1xuXG4gICAgc3ltYm9scy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmRlc3Ryb3koKTsgfSk7XG5cbiAgICBfZW1pdHRlci5vZmYoJyonKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihjb25maWcubG9jYXRpb25DaGFuZ2VFdmVudCwgdGhpcy5faGFuZGxlTG9jYXRpb25DaGFuZ2UpO1xuXG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICB0aGlzLnVubW91bnQoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmaXJlcyBFdmVudHMjTU9VTlRcbiAgICogQHBhcmFtIHtzdHJpbmd8RWxlbWVudH0gW3RhcmdldF1cbiAgICogQHBhcmFtIHtib29sZWFufSBbcHJlcGVuZD1mYWxzZV1cbiAgICogQHJldHVybiB7RWxlbWVudHxudWxsfSByZW5kZXJlZCBzcHJpdGUgbm9kZS4gbnVsbCBpZiBtb3VudCBub2RlIG5vdCBmb3VuZC5cbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gbW91bnQgKHRhcmdldCwgcHJlcGVuZCkge1xuICAgIGlmICggdGFyZ2V0ID09PSB2b2lkIDAgKSB0YXJnZXQgPSB0aGlzLmNvbmZpZy5tb3VudFRvO1xuICAgIGlmICggcHJlcGVuZCA9PT0gdm9pZCAwICkgcHJlcGVuZCA9IGZhbHNlO1xuXG4gICAgdmFyIHNwcml0ZSA9IHRoaXM7XG5cbiAgICBpZiAoc3ByaXRlLmlzTW91bnRlZCkge1xuICAgICAgcmV0dXJuIHNwcml0ZS5ub2RlO1xuICAgIH1cblxuICAgIHZhciBtb3VudE5vZGUgPSB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSA6IHRhcmdldDtcbiAgICB2YXIgbm9kZSA9IHNwcml0ZS5yZW5kZXIoKTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuXG4gICAgaWYgKHByZXBlbmQgJiYgbW91bnROb2RlLmNoaWxkTm9kZXNbMF0pIHtcbiAgICAgIG1vdW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgbW91bnROb2RlLmNoaWxkTm9kZXNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb3VudE5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZW1pdHRlci5lbWl0KEV2ZW50cy5NT1VOVCwgbm9kZSk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIHBhcnNlKHRoaXMuc3RyaW5naWZ5KCkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXRhY2ggc3ByaXRlIGZyb20gdGhlIERPTVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUudW5tb3VudCA9IGZ1bmN0aW9uIHVubW91bnQgKCkge1xuICAgIHRoaXMubm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBVUkxzIGluIHNwcml0ZSBhbmQgdXNhZ2UgZWxlbWVudHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9sZFVybFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3VXJsXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCAtIFVSTHMgd2FzIHVwZGF0ZWQsIGBmYWxzZWAgLSBzcHJpdGUgaXMgbm90IG1vdW50ZWRcbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLnVwZGF0ZVVybHMgPSBmdW5jdGlvbiB1cGRhdGVVcmxzJDEgKG9sZFVybCwgbmV3VXJsKSB7XG4gICAgaWYgKCF0aGlzLmlzTW91bnRlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB1c2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29uZmlnLnVzYWdlc1RvVXBkYXRlKTtcblxuICAgIHVwZGF0ZVVybHMoXG4gICAgICB0aGlzLm5vZGUsXG4gICAgICB1c2FnZXMsXG4gICAgICAoKGdldFVybFdpdGhvdXRGcmFnbWVudChvbGRVcmwpKSArIFwiI1wiKSxcbiAgICAgICgoZ2V0VXJsV2l0aG91dEZyYWdtZW50KG5ld1VybCkpICsgXCIjXCIpXG4gICAgKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBCcm93c2VyU3ByaXRlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbiAgcmV0dXJuIEJyb3dzZXJTcHJpdGU7XG59KFNwcml0ZSkpO1xuXG52YXIgcmVhZHkkMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbi8qIVxuICAqIGRvbXJlYWR5IChjKSBEdXN0aW4gRGlheiAyMDE0IC0gTGljZW5zZSBNSVRcbiAgKi9cbiFmdW5jdGlvbiAobmFtZSwgZGVmaW5pdGlvbikge1xuXG4gIHsgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKCk7IH1cblxufSgnZG9tcmVhZHknLCBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIGZucyA9IFtdLCBsaXN0ZW5lclxuICAgICwgZG9jID0gZG9jdW1lbnRcbiAgICAsIGhhY2sgPSBkb2MuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsXG4gICAgLCBkb21Db250ZW50TG9hZGVkID0gJ0RPTUNvbnRlbnRMb2FkZWQnXG4gICAgLCBsb2FkZWQgPSAoaGFjayA/IC9ebG9hZGVkfF5jLyA6IC9ebG9hZGVkfF5pfF5jLykudGVzdChkb2MucmVhZHlTdGF0ZSk7XG5cblxuICBpZiAoIWxvYWRlZClcbiAgeyBkb2MuYWRkRXZlbnRMaXN0ZW5lcihkb21Db250ZW50TG9hZGVkLCBsaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcihkb21Db250ZW50TG9hZGVkLCBsaXN0ZW5lcik7XG4gICAgbG9hZGVkID0gMTtcbiAgICB3aGlsZSAobGlzdGVuZXIgPSBmbnMuc2hpZnQoKSkgeyBsaXN0ZW5lcigpOyB9XG4gIH0pOyB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIGxvYWRlZCA/IHNldFRpbWVvdXQoZm4sIDApIDogZm5zLnB1c2goZm4pO1xuICB9XG5cbn0pO1xufSk7XG5cbnZhciBzcHJpdGVOb2RlSWQgPSAnX19TVkdfU1BSSVRFX05PREVfXyc7XG52YXIgc3ByaXRlR2xvYmFsVmFyTmFtZSA9ICdfX1NWR19TUFJJVEVfXyc7XG52YXIgaXNTcHJpdGVFeGlzdHMgPSAhIXdpbmRvd1tzcHJpdGVHbG9iYWxWYXJOYW1lXTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcbnZhciBzcHJpdGU7XG5cbmlmIChpc1Nwcml0ZUV4aXN0cykge1xuICBzcHJpdGUgPSB3aW5kb3dbc3ByaXRlR2xvYmFsVmFyTmFtZV07XG59IGVsc2Uge1xuICBzcHJpdGUgPSBuZXcgQnJvd3NlclNwcml0ZSh7XG4gICAgYXR0cnM6IHtcbiAgICAgIGlkOiBzcHJpdGVOb2RlSWQsXG4gICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICB9XG4gIH0pO1xuICB3aW5kb3dbc3ByaXRlR2xvYmFsVmFyTmFtZV0gPSBzcHJpdGU7XG59XG5cbnZhciBsb2FkU3ByaXRlID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQ2hlY2sgZm9yIHBhZ2UgYWxyZWFkeSBjb250YWlucyBzcHJpdGUgbm9kZVxuICAgKiBJZiBmb3VuZCAtIGF0dGFjaCB0byBhbmQgcmV1c2UgaXQncyBjb250ZW50XG4gICAqIElmIG5vdCAtIHJlbmRlciBhbmQgbW91bnQgdGhlIG5ldyBzcHJpdGVcbiAgICovXG4gIHZhciBleGlzdGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNwcml0ZU5vZGVJZCk7XG5cbiAgaWYgKGV4aXN0aW5nKSB7XG4gICAgc3ByaXRlLmF0dGFjaChleGlzdGluZyk7XG4gIH0gZWxzZSB7XG4gICAgc3ByaXRlLm1vdW50KGRvY3VtZW50LmJvZHksIHRydWUpO1xuICB9XG59O1xuXG5pZiAoZG9jdW1lbnQuYm9keSkge1xuICBsb2FkU3ByaXRlKCk7XG59IGVsc2Uge1xuICByZWFkeSQxKGxvYWRTcHJpdGUpO1xufVxuXG52YXIgc3ByaXRlJDEgPSBzcHJpdGU7XG5cbnJldHVybiBzcHJpdGUkMTtcblxufSkpKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBsb2FkVmlld3MgZnJvbSAnLi9tb2R1bGVzL2hhbmRsZXJzL2hhbmRsZXJzJztcblxuY29uc3Qgc3RhcnRBcHAgPSAoKSA9PiB7XG4gIGxvYWRWaWV3cygnI2NvbnRlbnQnKTtcbn07XG5cbnN0YXJ0QXBwKCk7XG4iXSwibmFtZXMiOlsiY3JlYXRlSHRtbEVsZW1lbnQiLCJ0eXBlIiwiaWQiLCJhcnJheUNsYXNzZXMiLCJjb250ZW50IiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImZvckVhY2giLCJteUNsYXNzIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwiZGlzcGxheVdlYXRoZXJDYXJkIiwiZ2V0RWxlbWVudCIsInNlbGVjdG9yIiwicGFyZW50Tm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJsb2FkVmlld3MiLCJtYWluQ29udGVudCIsImFwcGVuZENoaWxkIiwic3VuIiwibW9vbiIsImNsb3VkeSIsImNsb3VkeW5pZ2h0IiwiY2xvdWQiLCJjbG91ZHMiLCJyYWluY2xvdWQiLCJyYWluIiwic3Rvcm0iLCJzbm93IiwibWlzdCIsImljb25SZWZlcmVuY2UiLCJnZXRJY29uIiwiY29kZSIsImljb24iLCJ1cmwiLCJnZXRXZWF0aGVyIiwiZmV0Y2h1cmwiLCJyZXNwb25zZSIsImZldGNoIiwibW9kZSIsInRoZVdlYXRoZXIiLCJqc29uIiwid2VhdGhlckljb24iLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlcmVkIiwid2VhdGhlciIsInZpZXdCb3giLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlIiwiY2l0eUVsZW1lbnQiLCJuYW1lIiwiaHVtaWRpdHlFbGVtZW50IiwiaHVtaWRpdHlEYXRhIiwibWFpbiIsImh1bWlkaXR5IiwicHJlc3N1cmVFbGVtZW50IiwicHJlc3N1cmVEYXRhIiwicHJlc3N1cmUiLCJ3aW5kc3BlZWRFbGVtZW50Iiwid2luZFNwZWVkRGF0YSIsIk1hdGgiLCJyb3VuZCIsIndpbmQiLCJzcGVlZCIsIndpbmRkaXJFbGVtZW50Iiwid2luZERpckRhdGEiLCJkZWciLCJjdXJyZW50VGVtcCIsInRlbXAiLCJlcnJvciIsImNvbnNvbGUiLCJkaXNwbGF5U3VucmlzZVN1bnNldCIsImNyZWF0ZURldGFpbHNDaGlsZCIsImRpc3BsYXlEZXRhaWxzIiwiZGlzcGxheVNlYXJjaEJhciIsImRpc3BsYXlDdXJyZW50VGVtcGVyYXR1cmUiLCJkaXNwbGF5Q2l0eU5hbWUiLCJkaXNwbGF5V2VhdGhlckljb24iLCJzdGFydEFwcCJdLCJzb3VyY2VSb290IjoiIn0=