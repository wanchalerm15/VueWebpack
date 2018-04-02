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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./applicationJS/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./applicationJS/components/home/home.html":
/*!*************************************************!*\
  !*** ./applicationJS/components/home/home.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<section>\\r\\n    <div class=\\\"container\\\">\\r\\n        <h5>Home page</h5>\\r\\n    </div>\\r\\n</section>\"\n\n//# sourceURL=webpack:///./applicationJS/components/home/home.html?");

/***/ }),

/***/ "./applicationJS/components/home/home.js":
/*!***********************************************!*\
  !*** ./applicationJS/components/home/home.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    template: __webpack_require__(/*! ./home.html */ \"./applicationJS/components/home/home.html\")\r\n});\n\n//# sourceURL=webpack:///./applicationJS/components/home/home.js?");

/***/ }),

/***/ "./applicationJS/components/login/login.html":
/*!***************************************************!*\
  !*** ./applicationJS/components/login/login.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<section>\\r\\n    <div class=\\\"container\\\">\\r\\n        <form action=\\\"\\\">\\r\\n            <div class=\\\"row\\\">\\r\\n                <div class=\\\"col\\\"></div>\\r\\n                <div class=\\\"col\\\">\\r\\n                    <div class=\\\"form-group\\\">\\r\\n                        <label for=\\\"\\\">Username</label>\\r\\n                        <input type=\\\"text\\\" class=\\\"form-control\\\">\\r\\n                    </div>\\r\\n\\r\\n                    <div class=\\\"form-group\\\">\\r\\n                        <label for=\\\"\\\">Password</label>\\r\\n                        <input type=\\\"password\\\" class=\\\"form-control\\\">\\r\\n                    </div>\\r\\n\\r\\n                    <div class=\\\"form-group\\\">\\r\\n                        <button class=\\\"btn btn-primary btn-block\\\">\\r\\n                            Login\\r\\n                        </button>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\\"col\\\"></div>\\r\\n            </div>\\r\\n        </form>\\r\\n    </div>\\r\\n</section>\"\n\n//# sourceURL=webpack:///./applicationJS/components/login/login.html?");

/***/ }),

/***/ "./applicationJS/components/login/login.js":
/*!*************************************************!*\
  !*** ./applicationJS/components/login/login.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    template: __webpack_require__(/*! ./login.html */ \"./applicationJS/components/login/login.html\")\r\n});\n\n//# sourceURL=webpack:///./applicationJS/components/login/login.js?");

/***/ }),

/***/ "./applicationJS/components/navbar/navbar.html":
/*!*****************************************************!*\
  !*** ./applicationJS/components/navbar/navbar.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<nav class=\\\"navbar navbar-expand-lg navbar-dark bg-primary\\\">\\r\\n    <div class=\\\"container\\\">\\r\\n        <router-link class=\\\"navbar-brand\\\" to=\\\"/\\\">{{ message }}</router-link>\\r\\n\\r\\n        <div class=\\\"collapse navbar-collapse\\\" id=\\\"navbarSupportedContent\\\">\\r\\n            <ul class=\\\"navbar-nav mr-auto\\\">\\r\\n                <li class=\\\"nav-item\\\">\\r\\n                    <router-link class=\\\"nav-link\\\" to=\\\"/login\\\">Login</router-link>\\r\\n                </li>\\r\\n                <li class=\\\"nav-item\\\">\\r\\n                    <router-link class=\\\"nav-link\\\" to=\\\"/register\\\">Register</router-link>\\r\\n                </li>\\r\\n            </ul>\\r\\n        </div>\\r\\n    </div>\\r\\n</nav>\"\n\n//# sourceURL=webpack:///./applicationJS/components/navbar/navbar.html?");

/***/ }),

/***/ "./applicationJS/components/navbar/navbar.js":
/*!***************************************************!*\
  !*** ./applicationJS/components/navbar/navbar.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    template: __webpack_require__(/*! ./navbar.html */ \"./applicationJS/components/navbar/navbar.html\"),\r\n    data() {\r\n        return {\r\n            message: 'Hello App'\r\n        }\r\n    }\r\n});\n\n//# sourceURL=webpack:///./applicationJS/components/navbar/navbar.js?");

/***/ }),

/***/ "./applicationJS/components/register/register.html":
/*!*********************************************************!*\
  !*** ./applicationJS/components/register/register.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<section>\\r\\n    <div class=\\\"container\\\">\\r\\n        <form action=\\\"\\\">\\r\\n            <div class=\\\"row\\\">\\r\\n                <div class=\\\"col\\\"></div>\\r\\n                <div class=\\\"col\\\">\\r\\n                    <div class=\\\"form-group\\\">\\r\\n                        <label for=\\\"\\\">Username</label>\\r\\n                        <input type=\\\"text\\\" class=\\\"form-control\\\">\\r\\n                    </div>\\r\\n\\r\\n                    <div class=\\\"form-group\\\">\\r\\n                        <label for=\\\"\\\">Password</label>\\r\\n                        <input type=\\\"password\\\" class=\\\"form-control\\\">\\r\\n                    </div>\\r\\n\\r\\n                    <div class=\\\"form-group\\\">\\r\\n                        <label for=\\\"\\\">Confirm Password</label>\\r\\n                        <input type=\\\"password\\\" class=\\\"form-control\\\">\\r\\n                    </div>\\r\\n\\r\\n                    <div class=\\\"form-group\\\">\\r\\n                        <button class=\\\"btn btn-primary btn-block\\\">\\r\\n                            Login\\r\\n                        </button>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\\"col\\\"></div>\\r\\n            </div>\\r\\n        </form>\\r\\n    </div>\\r\\n    </div>\\r\\n</section>\"\n\n//# sourceURL=webpack:///./applicationJS/components/register/register.html?");

/***/ }),

/***/ "./applicationJS/components/register/register.js":
/*!*******************************************************!*\
  !*** ./applicationJS/components/register/register.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    template: __webpack_require__(/*! ./register.html */ \"./applicationJS/components/register/register.html\")\r\n});\n\n//# sourceURL=webpack:///./applicationJS/components/register/register.js?");

/***/ }),

/***/ "./applicationJS/index.js":
/*!********************************!*\
  !*** ./applicationJS/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar */ \"./applicationJS/components/navbar/navbar.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ \"./applicationJS/router.js\");\n\r\n\r\n\r\nnew Vue({\r\n    el: '#app',\r\n    router: _router__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n    components: { Navbar: _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_0__[\"default\"] },\r\n    template: `\r\n        <div>\r\n            <Navbar class=\"form-group\"></Navbar>\r\n            <router-view></router-view>\r\n        </div>\r\n    `\r\n});\n\n//# sourceURL=webpack:///./applicationJS/index.js?");

/***/ }),

/***/ "./applicationJS/router.js":
/*!*********************************!*\
  !*** ./applicationJS/router.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_home_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home */ \"./applicationJS/components/home/home.js\");\n/* harmony import */ var _components_login_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login */ \"./applicationJS/components/login/login.js\");\n/* harmony import */ var _components_register_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/register/register */ \"./applicationJS/components/register/register.js\");\n\r\n\r\n\r\n\r\nvar routes = [\r\n    { path: '', component: _components_home_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"] },\r\n    { path: '/login', component: _components_login_login__WEBPACK_IMPORTED_MODULE_1__[\"default\"] },\r\n    { path: '/register', component: _components_register_register__WEBPACK_IMPORTED_MODULE_2__[\"default\"] },\r\n];\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new VueRouter({\r\n    // mode: 'history',\r\n    routes,\r\n    linkActiveClass: 'active'\r\n}));\n\n//# sourceURL=webpack:///./applicationJS/router.js?");

/***/ })

/******/ });