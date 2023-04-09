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
exports.id = "pages/api/admin/products";
exports.ids = ["pages/api/admin/products"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst productSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    slug: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    category: {\n        type: String,\n        required: true\n    },\n    image: {\n        type: String,\n        required: true\n    },\n    price: {\n        type: Number,\n        required: true\n    },\n    cutPrice: {\n        type: Number,\n        required: true\n    },\n    brand: {\n        type: String,\n        required: true\n    },\n    rating: {\n        type: Number,\n        required: true,\n        default: 0\n    },\n    numReviews: {\n        type: Number,\n        required: true,\n        default: 0\n    },\n    countInStock: {\n        type: Number,\n        required: true,\n        default: 0\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    mix: {\n        type: String\n    },\n    isFeatured: {\n        type: Boolean,\n        default: false\n    },\n    banner: String\n}, {\n    timestamps: true\n});\nconst Product = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Product\", productSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxHQUFHLElBQUlELHdEQUFlLENBQ3ZDO0lBQ0VHLElBQUksRUFBRTtRQUFFQyxJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBRTtJQUN0Q0MsSUFBSSxFQUFFO1FBQUVILElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtRQUFFRSxNQUFNLEVBQUUsSUFBSTtLQUFFO0lBQ3BEQyxRQUFRLEVBQUU7UUFBRUwsSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO0tBQUU7SUFDMUNJLEtBQUssRUFBRTtRQUFFTixJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBRTtJQUN2Q0ssS0FBSyxFQUFFO1FBQUVQLElBQUksRUFBRVEsTUFBTTtRQUFFTixRQUFRLEVBQUUsSUFBSTtLQUFFO0lBQ3ZDTyxRQUFRLEVBQUU7UUFBRVQsSUFBSSxFQUFFUSxNQUFNO1FBQUVOLFFBQVEsRUFBRSxJQUFJO0tBQUU7SUFDMUNRLEtBQUssRUFBRTtRQUFFVixJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBRTtJQUN2Q1MsTUFBTSxFQUFFO1FBQUVYLElBQUksRUFBRVEsTUFBTTtRQUFFTixRQUFRLEVBQUUsSUFBSTtRQUFFVSxPQUFPLEVBQUUsQ0FBQztLQUFFO0lBQ3BEQyxVQUFVLEVBQUU7UUFBRWIsSUFBSSxFQUFFUSxNQUFNO1FBQUVOLFFBQVEsRUFBRSxJQUFJO1FBQUVVLE9BQU8sRUFBRSxDQUFDO0tBQUU7SUFDeERFLFlBQVksRUFBRTtRQUFFZCxJQUFJLEVBQUVRLE1BQU07UUFBRU4sUUFBUSxFQUFFLElBQUk7UUFBRVUsT0FBTyxFQUFFLENBQUM7S0FBRTtJQUMxREcsV0FBVyxFQUFFO1FBQUVmLElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtLQUFFO0lBQzdDYyxHQUFHLEVBQUU7UUFBRWhCLElBQUksRUFBRUMsTUFBTTtLQUFFO0lBQ3JCZ0IsVUFBVSxFQUFFO1FBQUVqQixJQUFJLEVBQUVrQixPQUFPO1FBQUVOLE9BQU8sRUFBRSxLQUFLO0tBQUU7SUFDN0NPLE1BQU0sRUFBRWxCLE1BQU07Q0FDZixFQUNEO0lBQ0VtQixVQUFVLEVBQUUsSUFBSTtDQUNqQixDQUNGO0FBRUQsTUFBTUMsT0FBTyxHQUNYekIsZ0VBQXVCLElBQUlBLHFEQUFjLENBQUMsU0FBUyxFQUFFQyxhQUFhLENBQUM7QUFDckUsaUVBQWV3QixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRhaWx3aW5kLWFtYXpvbmEvLi9tb2RlbHMvUHJvZHVjdC5qcz8wOWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgcHJvZHVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBzbHVnOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxuICAgIGNhdGVnb3J5OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBpbWFnZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgcHJpY2U6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGN1dFByaWNlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBicmFuZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgcmF0aW5nOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IDAgfSxcbiAgICBudW1SZXZpZXdzOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IDAgfSxcbiAgICBjb3VudEluU3RvY2s6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogMCB9LFxuICAgIGRlc2NyaXB0aW9uOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBtaXg6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgaXNGZWF0dXJlZDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxuICAgIGJhbm5lcjogU3RyaW5nLFxuICB9LFxuICB7XG4gICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgfVxuKTtcblxuY29uc3QgUHJvZHVjdCA9XG4gIG1vbmdvb3NlLm1vZGVscy5Qcm9kdWN0IHx8IG1vbmdvb3NlLm1vZGVsKFwiUHJvZHVjdFwiLCBwcm9kdWN0U2NoZW1hKTtcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJwcm9kdWN0U2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInNsdWciLCJ1bmlxdWUiLCJjYXRlZ29yeSIsImltYWdlIiwicHJpY2UiLCJOdW1iZXIiLCJjdXRQcmljZSIsImJyYW5kIiwicmF0aW5nIiwiZGVmYXVsdCIsIm51bVJldmlld3MiLCJjb3VudEluU3RvY2siLCJkZXNjcmlwdGlvbiIsIm1peCIsImlzRmVhdHVyZWQiLCJCb29sZWFuIiwiYmFubmVyIiwidGltZXN0YW1wcyIsIlByb2R1Y3QiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Product.js\n");

/***/ }),

/***/ "(api)/./pages/api/admin/products/index.js":
/*!*******************************************!*\
  !*** ./pages/api/admin/products/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/Product */ \"(api)/./models/Product.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/db */ \"(api)/./utils/db.js\");\n\n\n\nconst handler = async (req, res)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    if (!session || !session.user.isAdmin) {\n        return res.status(401).send(\"admin signin required\");\n    }\n    // const { user } = session;\n    if (req.method === \"GET\") {\n        return getHandler(req, res);\n    } else if (req.method === \"POST\") {\n        return postHandler(req, res);\n    } else {\n        return res.status(400).send({\n            message: \"Method not allowed\"\n        });\n    }\n};\nconst postHandler = async (req, res)=>{\n    await _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].connect();\n    const newProduct = new _models_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        name: \"sample name\",\n        slug: \"sample-name-\" + Math.random(),\n        image: \"/images/bakery.jpg\",\n        price: 0,\n        cutPrice: 0,\n        category: \"sample category\",\n        brand: \"sample brand\",\n        countInStock: 0,\n        description: \"sample description\",\n        mix: \"brand+category\",\n        rating: 0,\n        numReviews: 0\n    });\n    const product = await newProduct.save();\n    await _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].disconnect();\n    res.send({\n        message: \"Product created successfully\",\n        product\n    });\n};\nconst getHandler = async (req, res)=>{\n    await _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].connect();\n    const products = await _models_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n    await _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].disconnect();\n    res.send(products);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRtaW4vcHJvZHVjdHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkM7QUFDSTtBQUNYO0FBRXRDLE1BQU1HLE9BQU8sR0FBRyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNsQyxNQUFNQyxPQUFPLEdBQUcsTUFBTU4sMkRBQVUsQ0FBQztRQUFFSSxHQUFHO0tBQUUsQ0FBQztJQUN6QyxJQUFJLENBQUNFLE9BQU8sSUFBSSxDQUFDQSxPQUFPLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxFQUFFO1FBQ3JDLE9BQU9ILEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztLQUN0RDtJQUNELDRCQUE0QjtJQUM1QixJQUFJTixHQUFHLENBQUNPLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsT0FBT0MsVUFBVSxDQUFDUixHQUFHLEVBQUVDLEdBQUcsQ0FBQyxDQUFDO0tBQzdCLE1BQU0sSUFBSUQsR0FBRyxDQUFDTyxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ2hDLE9BQU9FLFdBQVcsQ0FBQ1QsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztLQUM5QixNQUFNO1FBQ0wsT0FBT0EsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFSSxPQUFPLEVBQUUsb0JBQW9CO1NBQUUsQ0FBQyxDQUFDO0tBQ2hFO0NBQ0Y7QUFFRCxNQUFNRCxXQUFXLEdBQUcsT0FBT1QsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDdEMsTUFBTUgseURBQVUsRUFBRSxDQUFDO0lBQ25CLE1BQU1jLFVBQVUsR0FBRyxJQUFJZix1REFBTyxDQUFDO1FBQzdCZ0IsSUFBSSxFQUFFLGFBQWE7UUFDbkJDLElBQUksRUFBRSxjQUFjLEdBQUdDLElBQUksQ0FBQ0MsTUFBTSxFQUFFO1FBQ3BDQyxLQUFLLEVBQUUsb0JBQW9CO1FBQzNCQyxLQUFLLEVBQUUsQ0FBQztRQUNSQyxRQUFRLEVBQUUsQ0FBQztRQUNYQyxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCQyxLQUFLLEVBQUUsY0FBYztRQUNyQkMsWUFBWSxFQUFFLENBQUM7UUFDZkMsV0FBVyxFQUFFLG9CQUFvQjtRQUNqQ0MsR0FBRyxFQUFFLGdCQUFnQjtRQUNyQkMsTUFBTSxFQUFFLENBQUM7UUFDVEMsVUFBVSxFQUFFLENBQUM7S0FDZCxDQUFDO0lBRUYsTUFBTUMsT0FBTyxHQUFHLE1BQU1mLFVBQVUsQ0FBQ2dCLElBQUksRUFBRTtJQUN2QyxNQUFNOUIsNERBQWEsRUFBRSxDQUFDO0lBQ3RCRyxHQUFHLENBQUNLLElBQUksQ0FBQztRQUFFSSxPQUFPLEVBQUUsOEJBQThCO1FBQUVpQixPQUFPO0tBQUUsQ0FBQyxDQUFDO0NBQ2hFO0FBRUQsTUFBTW5CLFVBQVUsR0FBRyxPQUFPUixHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNyQyxNQUFNSCx5REFBVSxFQUFFLENBQUM7SUFDbkIsTUFBTWdDLFFBQVEsR0FBRyxNQUFNakMsNERBQVksQ0FBQyxFQUFFLENBQUM7SUFDdkMsTUFBTUMsNERBQWEsRUFBRSxDQUFDO0lBQ3RCRyxHQUFHLENBQUNLLElBQUksQ0FBQ3dCLFFBQVEsQ0FBQyxDQUFDO0NBQ3BCO0FBQ0QsaUVBQWUvQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRhaWx3aW5kLWFtYXpvbmEvLi9wYWdlcy9hcGkvYWRtaW4vcHJvZHVjdHMvaW5kZXguanM/NDhlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uLy4uLy4uLy4uL21vZGVscy9Qcm9kdWN0XCI7XG5pbXBvcnQgZGIgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxzL2RiXCI7XG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSk7XG4gIGlmICghc2Vzc2lvbiB8fCAhc2Vzc2lvbi51c2VyLmlzQWRtaW4pIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLnNlbmQoXCJhZG1pbiBzaWduaW4gcmVxdWlyZWRcIik7XG4gIH1cbiAgLy8gY29uc3QgeyB1c2VyIH0gPSBzZXNzaW9uO1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIHJldHVybiBnZXRIYW5kbGVyKHJlcSwgcmVzKTtcbiAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHJldHVybiBwb3N0SGFuZGxlcihyZXEsIHJlcyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogXCJNZXRob2Qgbm90IGFsbG93ZWRcIiB9KTtcbiAgfVxufTtcblxuY29uc3QgcG9zdEhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgYXdhaXQgZGIuY29ubmVjdCgpO1xuICBjb25zdCBuZXdQcm9kdWN0ID0gbmV3IFByb2R1Y3Qoe1xuICAgIG5hbWU6IFwic2FtcGxlIG5hbWVcIixcbiAgICBzbHVnOiBcInNhbXBsZS1uYW1lLVwiICsgTWF0aC5yYW5kb20oKSxcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2Jha2VyeS5qcGdcIixcbiAgICBwcmljZTogMCxcbiAgICBjdXRQcmljZTogMCxcbiAgICBjYXRlZ29yeTogXCJzYW1wbGUgY2F0ZWdvcnlcIixcbiAgICBicmFuZDogXCJzYW1wbGUgYnJhbmRcIixcbiAgICBjb3VudEluU3RvY2s6IDAsXG4gICAgZGVzY3JpcHRpb246IFwic2FtcGxlIGRlc2NyaXB0aW9uXCIsXG4gICAgbWl4OiBcImJyYW5kK2NhdGVnb3J5XCIsXG4gICAgcmF0aW5nOiAwLFxuICAgIG51bVJldmlld3M6IDAsXG4gIH0pO1xuXG4gIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBuZXdQcm9kdWN0LnNhdmUoKTtcbiAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xuICByZXMuc2VuZCh7IG1lc3NhZ2U6IFwiUHJvZHVjdCBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiLCBwcm9kdWN0IH0pO1xufTtcblxuY29uc3QgZ2V0SGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBhd2FpdCBkYi5jb25uZWN0KCk7XG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgUHJvZHVjdC5maW5kKHt9KTtcbiAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xuICByZXMuc2VuZChwcm9kdWN0cyk7XG59O1xuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwiUHJvZHVjdCIsImRiIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNlc3Npb24iLCJ1c2VyIiwiaXNBZG1pbiIsInN0YXR1cyIsInNlbmQiLCJtZXRob2QiLCJnZXRIYW5kbGVyIiwicG9zdEhhbmRsZXIiLCJtZXNzYWdlIiwiY29ubmVjdCIsIm5ld1Byb2R1Y3QiLCJuYW1lIiwic2x1ZyIsIk1hdGgiLCJyYW5kb20iLCJpbWFnZSIsInByaWNlIiwiY3V0UHJpY2UiLCJjYXRlZ29yeSIsImJyYW5kIiwiY291bnRJblN0b2NrIiwiZGVzY3JpcHRpb24iLCJtaXgiLCJyYXRpbmciLCJudW1SZXZpZXdzIiwicHJvZHVjdCIsInNhdmUiLCJkaXNjb25uZWN0IiwicHJvZHVjdHMiLCJmaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/admin/products/index.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/admin/products/index.js"));
module.exports = __webpack_exports__;

})();