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
exports.id = "pages/api/products/[id]";
exports.ids = ["pages/api/products/[id]"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst productSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    slug: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    category: {\n        type: String,\n        required: true\n    },\n    image: {\n        type: String,\n        required: true\n    },\n    price: {\n        type: Number,\n        required: true\n    },\n    cutPrice: {\n        type: Number,\n        required: true\n    },\n    brand: {\n        type: String,\n        required: true\n    },\n    rating: {\n        type: Number,\n        required: true,\n        default: 0\n    },\n    numReviews: {\n        type: Number,\n        required: true,\n        default: 0\n    },\n    countInStock: {\n        type: Number,\n        required: true,\n        default: 0\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    isFeatured: {\n        type: Boolean,\n        default: false\n    },\n    banner: String\n}, {\n    timestamps: true\n});\nconst Product = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Product\", productSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxHQUFHLElBQUlELHdEQUFlLENBQ3ZDO0lBQ0VHLElBQUksRUFBRTtRQUFFQyxJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBRTtJQUN0Q0MsSUFBSSxFQUFFO1FBQUVILElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtRQUFFRSxNQUFNLEVBQUUsSUFBSTtLQUFFO0lBQ3BEQyxRQUFRLEVBQUU7UUFBRUwsSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO0tBQUU7SUFDMUNJLEtBQUssRUFBRTtRQUFFTixJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBRTtJQUN2Q0ssS0FBSyxFQUFFO1FBQUVQLElBQUksRUFBRVEsTUFBTTtRQUFFTixRQUFRLEVBQUUsSUFBSTtLQUFFO0lBQ3ZDTyxRQUFRLEVBQUU7UUFBRVQsSUFBSSxFQUFFUSxNQUFNO1FBQUVOLFFBQVEsRUFBRSxJQUFJO0tBQUU7SUFDMUNRLEtBQUssRUFBRTtRQUFFVixJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBRTtJQUN2Q1MsTUFBTSxFQUFFO1FBQUVYLElBQUksRUFBRVEsTUFBTTtRQUFFTixRQUFRLEVBQUUsSUFBSTtRQUFFVSxPQUFPLEVBQUUsQ0FBQztLQUFFO0lBQ3BEQyxVQUFVLEVBQUU7UUFBRWIsSUFBSSxFQUFFUSxNQUFNO1FBQUVOLFFBQVEsRUFBRSxJQUFJO1FBQUVVLE9BQU8sRUFBRSxDQUFDO0tBQUU7SUFDeERFLFlBQVksRUFBRTtRQUFFZCxJQUFJLEVBQUVRLE1BQU07UUFBRU4sUUFBUSxFQUFFLElBQUk7UUFBRVUsT0FBTyxFQUFFLENBQUM7S0FBRTtJQUMxREcsV0FBVyxFQUFFO1FBQUVmLElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtLQUFFO0lBQzdDYyxVQUFVLEVBQUU7UUFBRWhCLElBQUksRUFBRWlCLE9BQU87UUFBRUwsT0FBTyxFQUFFLEtBQUs7S0FBRTtJQUM3Q00sTUFBTSxFQUFFakIsTUFBTTtDQUNmLEVBQ0Q7SUFDRWtCLFVBQVUsRUFBRSxJQUFJO0NBQ2pCLENBQ0Y7QUFFRCxNQUFNQyxPQUFPLEdBQ1h4QixnRUFBdUIsSUFBSUEscURBQWMsQ0FBQyxTQUFTLEVBQUVDLGFBQWEsQ0FBQztBQUNyRSxpRUFBZXVCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdGFpbHdpbmQtYW1hem9uYS8uL21vZGVscy9Qcm9kdWN0LmpzPzA5YzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBwcm9kdWN0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIHNsdWc6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXG4gICAgY2F0ZWdvcnk6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGltYWdlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBwcmljZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgY3V0UHJpY2U6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGJyYW5kOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICByYXRpbmc6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogMCB9LFxuICAgIG51bVJldmlld3M6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogMCB9LFxuICAgIGNvdW50SW5TdG9jazogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAwIH0sXG4gICAgZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGlzRmVhdHVyZWQ6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcbiAgICBiYW5uZXI6IFN0cmluZyxcbiAgfSxcbiAge1xuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gIH1cbik7XG5cbmNvbnN0IFByb2R1Y3QgPVxuICBtb25nb29zZS5tb2RlbHMuUHJvZHVjdCB8fCBtb25nb29zZS5tb2RlbChcIlByb2R1Y3RcIiwgcHJvZHVjdFNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicHJvZHVjdFNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJzbHVnIiwidW5pcXVlIiwiY2F0ZWdvcnkiLCJpbWFnZSIsInByaWNlIiwiTnVtYmVyIiwiY3V0UHJpY2UiLCJicmFuZCIsInJhdGluZyIsImRlZmF1bHQiLCJudW1SZXZpZXdzIiwiY291bnRJblN0b2NrIiwiZGVzY3JpcHRpb24iLCJpc0ZlYXR1cmVkIiwiQm9vbGVhbiIsImJhbm5lciIsInRpbWVzdGFtcHMiLCJQcm9kdWN0IiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/Product.js\n");

/***/ }),

/***/ "(api)/./pages/api/products/[id].js":
/*!************************************!*\
  !*** ./pages/api/products/[id].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/Product */ \"(api)/./models/Product.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/db */ \"(api)/./utils/db.js\");\n\n\nconst handler = async (req, res)=>{\n    await _utils_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].connect();\n    const product = await _models_Product__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(req.query.id);\n    await _utils_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].disconnect();\n    res.send(product);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFDWDtBQUVuQyxNQUFNRSxPQUFPLEdBQUcsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDbEMsTUFBTUgseURBQVUsRUFBRSxDQUFDO0lBQ25CLE1BQU1LLE9BQU8sR0FBRyxNQUFNTixnRUFBZ0IsQ0FBQ0csR0FBRyxDQUFDSyxLQUFLLENBQUNDLEVBQUUsQ0FBQztJQUNwRCxNQUFNUiw0REFBYSxFQUFFLENBQUM7SUFDdEJHLEdBQUcsQ0FBQ08sSUFBSSxDQUFDTCxPQUFPLENBQUMsQ0FBQztDQUNuQjtBQUVELGlFQUFlSixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRhaWx3aW5kLWFtYXpvbmEvLi9wYWdlcy9hcGkvcHJvZHVjdHMvW2lkXS5qcz84MmU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0IGZyb20gJy4uLy4uLy4uL21vZGVscy9Qcm9kdWN0JztcbmltcG9ydCBkYiBmcm9tICcuLi8uLi8uLi91dGlscy9kYic7XG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgYXdhaXQgZGIuY29ubmVjdCgpO1xuICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgUHJvZHVjdC5maW5kQnlJZChyZXEucXVlcnkuaWQpO1xuICBhd2FpdCBkYi5kaXNjb25uZWN0KCk7XG4gIHJlcy5zZW5kKHByb2R1Y3QpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJQcm9kdWN0IiwiZGIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29ubmVjdCIsInByb2R1Y3QiLCJmaW5kQnlJZCIsInF1ZXJ5IiwiaWQiLCJkaXNjb25uZWN0Iiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/[id].js\n");

/***/ }),

/***/ "(api)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function connect() {\n    if (connection.isConnected) {\n        console.log(\"already connected\");\n        return;\n    }\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections.length) > 0) {\n        connection.isConnected = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState);\n        if (connection.isConnected === 1) {\n            console.log(\"use previous connection\");\n            return;\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();\n    }\n    const db1 = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n    console.log(\"new connection\");\n    connection.isConnected = db1.connections[0].readyState;\n}\nasync function disconnect() {\n    if (connection.isConnected) {\n        if (false) {} else {\n            console.log(\"not disconnected\");\n        }\n    }\n}\nfunction convertDocToObj(doc) {\n    doc._id = doc._id.toString();\n    doc.createdAt = doc.createdAt.toString();\n    doc.updatedAt = doc.updatedAt.toString();\n    return doc;\n}\nconst db = {\n    connect,\n    disconnect,\n    convertDocToObj\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsVUFBVSxHQUFHLEVBQUU7QUFFckIsZUFBZUMsT0FBTyxHQUFHO0lBQ3ZCLElBQUlELFVBQVUsQ0FBQ0UsV0FBVyxFQUFFO1FBQzFCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLE9BQU87S0FDUjtJQUNELElBQUlMLG9FQUEyQixHQUFHLENBQUMsRUFBRTtRQUNuQ0MsVUFBVSxDQUFDRSxXQUFXLEdBQUdILDJFQUFrQyxDQUFDO1FBQzVELElBQUlDLFVBQVUsQ0FBQ0UsV0FBVyxLQUFLLENBQUMsRUFBRTtZQUNoQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN2QyxPQUFPO1NBQ1I7UUFDRCxNQUFNTCwwREFBbUIsRUFBRSxDQUFDO0tBQzdCO0lBQ0QsTUFBTVUsR0FBRSxHQUFHLE1BQU1WLHVEQUFnQixDQUFDVyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDO0lBQzFEVCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzlCSixVQUFVLENBQUNFLFdBQVcsR0FBR08sR0FBRSxDQUFDSixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNFLFVBQVUsQ0FBQztDQUN2RDtBQUVELGVBQWVDLFVBQVUsR0FBRztJQUMxQixJQUFJUixVQUFVLENBQUNFLFdBQVcsRUFBRTtRQUMxQixJQUFJUSxLQUFxQyxFQUFFLEVBRzFDLE1BQU07WUFDTFAsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUNqQztLQUNGO0NBQ0Y7QUFDRCxTQUFTUyxlQUFlLENBQUNDLEdBQUcsRUFBRTtJQUM1QkEsR0FBRyxDQUFDQyxHQUFHLEdBQUdELEdBQUcsQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLEVBQUUsQ0FBQztJQUM3QkYsR0FBRyxDQUFDRyxTQUFTLEdBQUdILEdBQUcsQ0FBQ0csU0FBUyxDQUFDRCxRQUFRLEVBQUUsQ0FBQztJQUN6Q0YsR0FBRyxDQUFDSSxTQUFTLEdBQUdKLEdBQUcsQ0FBQ0ksU0FBUyxDQUFDRixRQUFRLEVBQUUsQ0FBQztJQUN6QyxPQUFPRixHQUFHLENBQUM7Q0FDWjtBQUVELE1BQU1MLEVBQUUsR0FBRztJQUFFUixPQUFPO0lBQUVPLFVBQVU7SUFBRUssZUFBZTtDQUFFO0FBQ25ELGlFQUFlSixFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRhaWx3aW5kLWFtYXpvbmEvLi91dGlscy9kYi5qcz83Y2IyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcblxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcbiAgICBjb25zb2xlLmxvZygnYWxyZWFkeSBjb25uZWN0ZWQnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gbW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcbiAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9PT0gMSkge1xuICAgICAgY29uc29sZS5sb2coJ3VzZSBwcmV2aW91cyBjb25uZWN0aW9uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IG1vbmdvb3NlLmRpc2Nvbm5lY3QoKTtcbiAgfVxuICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpO1xuICBjb25zb2xlLmxvZygnbmV3IGNvbm5lY3Rpb24nKTtcbiAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGF3YWl0IG1vbmdvb3NlLmRpc2Nvbm5lY3QoKTtcbiAgICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ25vdCBkaXNjb25uZWN0ZWQnKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNvbnZlcnREb2NUb09iaihkb2MpIHtcbiAgZG9jLl9pZCA9IGRvYy5faWQudG9TdHJpbmcoKTtcbiAgZG9jLmNyZWF0ZWRBdCA9IGRvYy5jcmVhdGVkQXQudG9TdHJpbmcoKTtcbiAgZG9jLnVwZGF0ZWRBdCA9IGRvYy51cGRhdGVkQXQudG9TdHJpbmcoKTtcbiAgcmV0dXJuIGRvYztcbn1cblxuY29uc3QgZGIgPSB7IGNvbm5lY3QsIGRpc2Nvbm5lY3QsIGNvbnZlcnREb2NUb09iaiB9O1xuZXhwb3J0IGRlZmF1bHQgZGI7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0aW9uIiwiY29ubmVjdCIsImlzQ29ubmVjdGVkIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3Rpb25zIiwibGVuZ3RoIiwicmVhZHlTdGF0ZSIsImRpc2Nvbm5lY3QiLCJkYiIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNvbnZlcnREb2NUb09iaiIsImRvYyIsIl9pZCIsInRvU3RyaW5nIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/[id].js"));
module.exports = __webpack_exports__;

})();