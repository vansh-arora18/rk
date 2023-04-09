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
exports.id = "pages/api/admin/products/[id]";
exports.ids = ["pages/api/admin/products/[id]"];
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

/***/ "(api)/./pages/api/admin/products/[id]/index.js":
/*!************************************************!*\
  !*** ./pages/api/admin/products/[id]/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../models/Product */ \"(api)/./models/Product.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utils/db */ \"(api)/./utils/db.js\");\n\n\n\nconst handler = async (req, res)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    if (!session || session && !session.user.isAdmin) {\n        return res.status(401).send(\"signin required\");\n    }\n    const { user  } = session;\n    if (req.method === \"GET\") {\n        return getHandler(req, res, user);\n    } else if (req.method === \"PUT\") {\n        return putHandler(req, res, user);\n    } else if (req.method === \"DELETE\") {\n        return deleteHandler(req, res, user);\n    } else {\n        return res.status(400).send({\n            message: \"Method not allowed\"\n        });\n    }\n};\nconst getHandler = async (req, res)=>{\n    await _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].connect();\n    const product = await _models_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(req.query.id);\n    await _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].disconnect();\n    res.send(product);\n};\nconst deleteHandler = async (req, res)=>{\n    await _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].connect();\n    const product = await _models_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(req.query.id);\n    if (product) {\n        await product.remove();\n        await _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].disconnect();\n        res.send({\n            message: \"Product deleted successfully\"\n        });\n    } else {\n        await _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].disconnect();\n        res.status(404).send({\n            message: \"Product not found\"\n        });\n    }\n};\nconst putHandler = async (req, res)=>{\n    await _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].connect();\n    const product = await _models_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(req.query.id);\n    if (product) {\n        product.name = req.body.name;\n        product.slug = req.body.slug;\n        product.price = req.body.price;\n        product.cutPrice = req.body.cutPrice;\n        product.category = req.body.category;\n        product.image = req.body.image;\n        product.brand = req.body.brand;\n        product.countInStock = req.body.countInStock;\n        product.description = req.body.description;\n        product.mix = req.body.brand + req.body.category;\n        await product.save();\n        await _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].disconnect();\n        res.send({\n            message: \"Product updated successfully\"\n        });\n    } else {\n        await _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].disconnect();\n        res.status(404).send({\n            message: \"Product not found\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRtaW4vcHJvZHVjdHMvW2lkXS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2QztBQUNPO0FBQ1g7QUFFekMsTUFBTUcsT0FBTyxHQUFHLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ2xDLE1BQU1DLE9BQU8sR0FBRyxNQUFNTiwyREFBVSxDQUFDO1FBQUVJLEdBQUc7S0FBRSxDQUFDO0lBQ3pDLElBQUksQ0FBQ0UsT0FBTyxJQUFLQSxPQUFPLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxJQUFJLENBQUNDLE9BQU8sRUFBRztRQUNsRCxPQUFPSCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDaEQ7SUFFRCxNQUFNLEVBQUVILElBQUksR0FBRSxHQUFHRCxPQUFPO0lBQ3hCLElBQUlGLEdBQUcsQ0FBQ08sTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QixPQUFPQyxVQUFVLENBQUNSLEdBQUcsRUFBRUMsR0FBRyxFQUFFRSxJQUFJLENBQUMsQ0FBQztLQUNuQyxNQUFNLElBQUlILEdBQUcsQ0FBQ08sTUFBTSxLQUFLLEtBQUssRUFBRTtRQUMvQixPQUFPRSxVQUFVLENBQUNULEdBQUcsRUFBRUMsR0FBRyxFQUFFRSxJQUFJLENBQUMsQ0FBQztLQUNuQyxNQUFNLElBQUlILEdBQUcsQ0FBQ08sTUFBTSxLQUFLLFFBQVEsRUFBRTtRQUNsQyxPQUFPRyxhQUFhLENBQUNWLEdBQUcsRUFBRUMsR0FBRyxFQUFFRSxJQUFJLENBQUMsQ0FBQztLQUN0QyxNQUFNO1FBQ0wsT0FBT0YsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFSyxPQUFPLEVBQUUsb0JBQW9CO1NBQUUsQ0FBQyxDQUFDO0tBQ2hFO0NBQ0Y7QUFDRCxNQUFNSCxVQUFVLEdBQUcsT0FBT1IsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFD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YS8uL3BhZ2VzL2FwaS9hZG1pbi9wcm9kdWN0cy9baWRdL2luZGV4LmpzPzg5YjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9tb2RlbHMvUHJvZHVjdFwiO1xuaW1wb3J0IGRiIGZyb20gXCIuLi8uLi8uLi8uLi8uLi91dGlscy9kYlwiO1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pO1xuICBpZiAoIXNlc3Npb24gfHwgKHNlc3Npb24gJiYgIXNlc3Npb24udXNlci5pc0FkbWluKSkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuc2VuZChcInNpZ25pbiByZXF1aXJlZFwiKTtcbiAgfVxuXG4gIGNvbnN0IHsgdXNlciB9ID0gc2Vzc2lvbjtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICByZXR1cm4gZ2V0SGFuZGxlcihyZXEsIHJlcywgdXNlcik7XG4gIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gXCJQVVRcIikge1xuICAgIHJldHVybiBwdXRIYW5kbGVyKHJlcSwgcmVzLCB1c2VyKTtcbiAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSBcIkRFTEVURVwiKSB7XG4gICAgcmV0dXJuIGRlbGV0ZUhhbmRsZXIocmVxLCByZXMsIHVzZXIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XG4gIH1cbn07XG5jb25zdCBnZXRIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGF3YWl0IGRiLmNvbm5lY3QoKTtcbiAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IFByb2R1Y3QuZmluZEJ5SWQocmVxLnF1ZXJ5LmlkKTtcbiAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xuICByZXMuc2VuZChwcm9kdWN0KTtcbn07XG5jb25zdCBkZWxldGVIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGF3YWl0IGRiLmNvbm5lY3QoKTtcbiAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IFByb2R1Y3QuZmluZEJ5SWQocmVxLnF1ZXJ5LmlkKTtcbiAgaWYgKHByb2R1Y3QpIHtcbiAgICBhd2FpdCBwcm9kdWN0LnJlbW92ZSgpO1xuICAgIGF3YWl0IGRiLmRpc2Nvbm5lY3QoKTtcbiAgICByZXMuc2VuZCh7IG1lc3NhZ2U6IFwiUHJvZHVjdCBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiIH0pO1xuICB9IGVsc2Uge1xuICAgIGF3YWl0IGRiLmRpc2Nvbm5lY3QoKTtcbiAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IG1lc3NhZ2U6IFwiUHJvZHVjdCBub3QgZm91bmRcIiB9KTtcbiAgfVxufTtcbmNvbnN0IHB1dEhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgYXdhaXQgZGIuY29ubmVjdCgpO1xuICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgUHJvZHVjdC5maW5kQnlJZChyZXEucXVlcnkuaWQpO1xuICBpZiAocHJvZHVjdCkge1xuICAgIHByb2R1Y3QubmFtZSA9IHJlcS5ib2R5Lm5hbWU7XG4gICAgcHJvZHVjdC5zbHVnID0gcmVxLmJvZHkuc2x1ZztcbiAgICBwcm9kdWN0LnByaWNlID0gcmVxLmJvZHkucHJpY2U7XG4gICAgcHJvZHVjdC5jdXRQcmljZSA9IHJlcS5ib2R5LmN1dFByaWNlO1xuICAgIHByb2R1Y3QuY2F0ZWdvcnkgPSByZXEuYm9keS5jYXRlZ29yeTtcbiAgICBwcm9kdWN0LmltYWdlID0gcmVxLmJvZHkuaW1hZ2U7XG4gICAgcHJvZHVjdC5icmFuZCA9IHJlcS5ib2R5LmJyYW5kO1xuICAgIHByb2R1Y3QuY291bnRJblN0b2NrID0gcmVxLmJvZHkuY291bnRJblN0b2NrO1xuICAgIHByb2R1Y3QuZGVzY3JpcHRpb24gPSByZXEuYm9keS5kZXNjcmlwdGlvbjtcbiAgICBwcm9kdWN0Lm1peCA9IHJlcS5ib2R5LmJyYW5kICsgcmVxLmJvZHkuY2F0ZWdvcnk7XG4gICAgYXdhaXQgcHJvZHVjdC5zYXZlKCk7XG4gICAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xuICAgIHJlcy5zZW5kKHsgbWVzc2FnZTogXCJQcm9kdWN0IHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIgfSk7XG4gIH0gZWxzZSB7XG4gICAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xuICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgbWVzc2FnZTogXCJQcm9kdWN0IG5vdCBmb3VuZFwiIH0pO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwiUHJvZHVjdCIsImRiIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNlc3Npb24iLCJ1c2VyIiwiaXNBZG1pbiIsInN0YXR1cyIsInNlbmQiLCJtZXRob2QiLCJnZXRIYW5kbGVyIiwicHV0SGFuZGxlciIsImRlbGV0ZUhhbmRsZXIiLCJtZXNzYWdlIiwiY29ubmVjdCIsInByb2R1Y3QiLCJmaW5kQnlJZCIsInF1ZXJ5IiwiaWQiLCJkaXNjb25uZWN0IiwicmVtb3ZlIiwibmFtZSIsImJvZHkiLCJzbHVnIiwicHJpY2UiLCJjdXRQcmljZSIsImNhdGVnb3J5IiwiaW1hZ2UiLCJicmFuZCIsImNvdW50SW5TdG9jayIsImRlc2NyaXB0aW9uIiwibWl4Iiwic2F2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/admin/products/[id]/index.js\n");

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
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/admin/products/[id]/index.js"));
module.exports = __webpack_exports__;

})();