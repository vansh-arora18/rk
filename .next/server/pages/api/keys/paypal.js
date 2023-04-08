"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/keys/paypal";
exports.ids = ["pages/api/keys/paypal"];
exports.modules = {

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./pages/api/keys/paypal.js":
/*!**********************************!*\
  !*** ./pages/api/keys/paypal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handler = async (req, res)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    if (!session) {\n        return res.status(401).send(\"signin required\");\n    }\n    res.send(process.env.PAYPAL_CLIENT_ID || \"sb\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkva2V5cy9wYXlwYWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBRTdDLE1BQU1DLE9BQU8sR0FBRyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNsQyxNQUFNQyxPQUFPLEdBQUcsTUFBTUosMkRBQVUsQ0FBQztRQUFFRSxHQUFHO0tBQUUsQ0FBQztJQUN6QyxJQUFJLENBQUNFLE9BQU8sRUFBRTtRQUNaLE9BQU9ELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUNoRDtJQUNESCxHQUFHLENBQUNHLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxDQUFDO0NBQ2hEO0FBQ0QsaUVBQWVSLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdGFpbHdpbmQtYW1hem9uYS8uL3BhZ2VzL2FwaS9rZXlzL3BheXBhbC5qcz8zZTgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pO1xuICBpZiAoIXNlc3Npb24pIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLnNlbmQoJ3NpZ25pbiByZXF1aXJlZCcpO1xuICB9XG4gIHJlcy5zZW5kKHByb2Nlc3MuZW52LlBBWVBBTF9DTElFTlRfSUQgfHwgJ3NiJyk7XG59O1xuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNlc3Npb24iLCJzdGF0dXMiLCJzZW5kIiwicHJvY2VzcyIsImVudiIsIlBBWVBBTF9DTElFTlRfSUQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/keys/paypal.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/keys/paypal.js"));
module.exports = __webpack_exports__;

})();