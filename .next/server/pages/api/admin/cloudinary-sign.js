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
exports.id = "pages/api/admin/cloudinary-sign";
exports.ids = ["pages/api/admin/cloudinary-sign"];
exports.modules = {

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ "(api)/./pages/api/admin/cloudinary-sign.js":
/*!********************************************!*\
  !*** ./pages/api/admin/cloudinary-sign.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ signature)\n/* harmony export */ });\nconst cloudinary = (__webpack_require__(/*! cloudinary */ \"cloudinary\").v2);\nfunction signature(req, res) {\n    const timestamp = Math.round(new Date().getTime() / 1000);\n    const signature1 = cloudinary.utils.api_sign_request({\n        timestamp: timestamp\n    }, process.env.CLOUDINARY_SECRET);\n    res.statusCode = 200;\n    res.json({\n        signature: signature1,\n        timestamp\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRtaW4vY2xvdWRpbmFyeS1zaWduLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxVQUFVLEdBQUdDLHdEQUF3QjtBQUU1QixTQUFTRSxTQUFTLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzFDLE1BQU1DLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSUMsSUFBSSxFQUFFLENBQUNDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQztJQUN6RCxNQUFNUCxVQUFTLEdBQUdILFVBQVUsQ0FBQ1csS0FBSyxDQUFDQyxnQkFBZ0IsQ0FDakQ7UUFDRU4sU0FBUyxFQUFFQSxTQUFTO0tBQ3JCLEVBQ0RPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxpQkFBaUIsQ0FDOUI7SUFFRFYsR0FBRyxDQUFDVyxVQUFVLEdBQUcsR0FBRyxDQUFDO0lBQ3JCWCxHQUFHLENBQUNZLElBQUksQ0FBQztRQUFFZCxTQUFTLEVBQVRBLFVBQVM7UUFBRUcsU0FBUztLQUFFLENBQUMsQ0FBQztDQUNwQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdGFpbHdpbmQtYW1hem9uYS8uL3BhZ2VzL2FwaS9hZG1pbi9jbG91ZGluYXJ5LXNpZ24uanM/ZTYwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjbG91ZGluYXJ5ID0gcmVxdWlyZShcImNsb3VkaW5hcnlcIikudjI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZ25hdHVyZShyZXEsIHJlcykge1xuICBjb25zdCB0aW1lc3RhbXAgPSBNYXRoLnJvdW5kKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XG4gIGNvbnN0IHNpZ25hdHVyZSA9IGNsb3VkaW5hcnkudXRpbHMuYXBpX3NpZ25fcmVxdWVzdChcbiAgICB7XG4gICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICB9LFxuICAgIHByb2Nlc3MuZW52LkNMT1VESU5BUllfU0VDUkVUXG4gICk7XG5cbiAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7XG4gIHJlcy5qc29uKHsgc2lnbmF0dXJlLCB0aW1lc3RhbXAgfSk7XG59XG4iXSwibmFtZXMiOlsiY2xvdWRpbmFyeSIsInJlcXVpcmUiLCJ2MiIsInNpZ25hdHVyZSIsInJlcSIsInJlcyIsInRpbWVzdGFtcCIsIk1hdGgiLCJyb3VuZCIsIkRhdGUiLCJnZXRUaW1lIiwidXRpbHMiLCJhcGlfc2lnbl9yZXF1ZXN0IiwicHJvY2VzcyIsImVudiIsIkNMT1VESU5BUllfU0VDUkVUIiwic3RhdHVzQ29kZSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/admin/cloudinary-sign.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/admin/cloudinary-sign.js"));
module.exports = __webpack_exports__;

})();