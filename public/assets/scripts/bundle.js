/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\nconst map = new ga.Map({\n        \n  // Define the div where the map is placed\n  target: 'map',\n  \n  // Create a view\n  view: new ol.View({\n    \n    // Define the default resolution\n    // 10 means that one pixel is 10m width and height\n    // List of resolution of the WMTS layers:\n    // 650, 500, 250, 100, 50, 20, 10, 5, 2.5, 2, 1, 0.5, 0.25, 0.1\n    resolution: 650,\n    \n    // Define a coordinate CH1903+ (EPSG:2056) for the center of the view\n    center: [2660000, 1190000]\n  })\n});\n\n// Create a background layer\nvar lyr1 = ga.layer.create('ch.swisstopo.pixelkarte-farbe');\n\n// Add the layers in the map\nmap.addLayer(lyr1);\n\nvar position = [2709136, 1270186];\n\n// Zoom on the position\nmap.getView().setCenter(position);\nmap.getView().setResolution(10);\n\n// Create the layer with the icon\nvar vectorLayer = new ol.layer.Vector({\n  source: new ol.source.Vector({\n    features: [new ol.Feature({\n      geometry: new ol.geom.Point(position)\n    })]\n  }),\n  style: new ol.style.Style({\n    image: new ol.style.Icon({\n      anchor: [0.5, 0.5],\n      anchorXUnits: 'fraction',\n      anchorYUnits: 'fraction',\n      src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oLCAwhG8L1qXwAAAJ1SURBVDjLTZPBThRBEIa/6uleYtDVA8QHUGIw4ehVb3Ii+AK+guGid696Ud/AN4BAiFw9ePUAbmK4SIAo7OxuZtnZmZ7umfLQED1U0of6qur/q1oA9PgYWVlBBwNHCGt4v8Ws3GRa9BmPoSimDIc7jEYfqOtD+fw56MYGsruL6GCAPH6Mqjq+f9+jbZ9T1zArYVoo4zFMJsJoBMMh5PkBT55syNu3QZ89QwD07MxxcjJBZJEQFGME7+H8HC4vIc+5LqSMRsJsVuDcsnz7Fozu7zuOjvYoy0WKqeKccP8+3LkDvoHJJEVRwHQqVJVydXWXP392dXXVWcpyjbZ9DiggGIGmgdNTOPkFFxc3MMxmUJaCb5TQrBPCmmU43AKg64QQElhVMBrDZJzgsryBoaohBiFGEHllyfNNOoW2BV9DNU8G3gBlCfM51HWCQ4BOQQxo98Ly+3cfa5UQJCVVCZjP07uuUzQNhAhdB5kBI4qau5Y8hyxLlb3/B3gPtU9gDBDbZJPNQIRr2Viqaor3fWJMyU2T3G8aaGOS1ikYAZOBMSlAiLGwVNUOV1cvaVuIMU0S22uwTbvJDFgLCwsJjhFUQXXbEOMHQoC6VrxPBdr4H5wl8N49WFqC27eh11NcD5z7ZFjoHaJ6QIhCjErbpe4qSa+zcOsWLC4mCaqKdYK1X/D1YTrlN68de/s51byPqoIImUnde700Qa8HoIgIIRT8OFqWeRWMrq8j794HHj1YQuQA1XSNxkCWKSJK26YVqgqdfuHnz2WZV0EfPrz+TE+fIl+/oqurDu/XMGYLkU2c62MtwJQs28aYj1TVoQwGQVdWkONj/gL3ho+XUT2DTgAAAABJRU5ErkJggg=='\n    })\n  })\n});\nmap.addLayer(vectorLayer);\n\n// Create the popup\nvar popup = new ol.Overlay({\n  position: position,\n  element: $(\n    '<div class=\"popup\">' +\n      '<div class=\"title\"<h3>Kdo FU WaffenplÃ¤tze</h3></div>' +\n      '<div class=\"subtitle\">' +\n        '<br>Kaserne Auenfeld<br>' +\n        '<div class=\"middle\">' +\n          '<br>8500 Frauenfeld<br>' +\n        '</div>' +\n      '</div>' +\n      '<div class=\"close\">' +\n        '<div type=\"button\" onclick=\"$(\\'.popup\\').hide()\"<span aria-hidden=\"true\">X</span></div>' +\n      '</div>' +\n    '</div>')\n});\nmap.addOverlay(popup);\n*/\n// Create a GeoAdmin Map\nvar map = new ga.Map({\n  // Define the div where the map is placed\n  target: 'map',\n  // Create a view\n  view: new ol.View({\n    // Define the default resolution\n    // 10 means that one pixel is 10m width and height\n    // List of resolution of the WMTS layers:\n    // 650, 500, 250, 100, 50, 20, 10, 5, 2.5, 2, 1, 0.5, 0.25, 0.1\n    resolution: 20,\n    // Define a coordinate CH1903+ (EPSG:2056) for the center of the view\n    //center: [268340, 1190000]\n    center: [2682160, 1247971]\n  })\n}); // Create a background layer\n\nvar lyr1 = ga.layer.create('ch.swisstopo.pixelkarte-farbe'); // Add the background layer in the map\n\nmap.addLayer(lyr1); // Create the KML Layer\n\nvar vector = new ol.layer.Vector({\n  source: new ol.source.Vector({\n    //url: 'https://api3.geo.admin.ch/examples/bln-style.kml',\n    url: 'https://res.cloudinary.com/ngti/raw/upload/v1545129598/klmdata/zurich-doc.kml',\n    format: new ol.format.KML({\n      projection: 'EPSG:21781'\n    })\n  })\n});\nmap.addLayer(vector); // Popup showing the position the user clicked\n\nvar popup = new ol.Overlay({\n  element: $('<div title=\"KML\"></div>')[0]\n});\nmap.addOverlay(popup); // On click we display the feature informations\n\nmap.on('singleclick', function (evt) {\n  var pixel = evt.pixel;\n  var coordinate = evt.coordinate;\n  var feature = map.forEachFeatureAtPixel(pixel, function (feature, layer) {\n    return feature;\n  });\n  var element = $(popup.getElement());\n  element.popover('destroy');\n\n  if (feature) {\n    popup.setPosition(coordinate);\n    element.popover({\n      'placement': 'top',\n      'animation': false,\n      'html': true,\n      'content': feature.get('description')\n    });\n    element.popover('show');\n  }\n}); // Change cursor style when cursor is hover a feature\n\nmap.on('pointermove', function (evt) {\n  var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {\n    return feature;\n  });\n  map.getTargetElement().style.cursor = feature ? 'pointer' : '';\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (map);\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./src/scripts/main.js ./src/styles/main.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/scripts/main.js */\"./src/scripts/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/styles/main.scss */\"./src/styles/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/main.js_./src/styles/main.scss?");

/***/ })

/******/ });