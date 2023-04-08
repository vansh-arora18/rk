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
exports.id = "pages/api/orders/[id]";
exports.ids = ["pages/api/orders/[id]"];
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

/***/ "(api)/./models/Order.js":
/*!*************************!*\
  !*** ./models/Order.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst orderSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    user: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n        ref: \"User\",\n        required: true\n    },\n    orderItems: [\n        {\n            name: {\n                type: String,\n                required: true\n            },\n            quantity: {\n                type: Number,\n                required: true\n            },\n            image: {\n                type: String,\n                required: true\n            },\n            cutPrice: {\n                type: Number,\n                required: true\n            }\n        }, \n    ],\n    shippingAddress: {\n        fullName: {\n            type: String,\n            required: true\n        },\n        number: {\n            type: Number,\n            required: true\n        },\n        address: {\n            type: String,\n            required: true\n        },\n        city: {\n            type: String,\n            required: true\n        },\n        postalCode: {\n            type: String,\n            required: true\n        },\n        country: {\n            type: String,\n            required: true\n        }\n    },\n    paymentMethod: {\n        type: String,\n        required: true\n    },\n    paymentResult: {\n        id: String,\n        status: String,\n        email_address: String\n    },\n    itemsPrice: {\n        type: Number,\n        required: true\n    },\n    shippingPrice: {\n        type: Number,\n        required: true\n    },\n    taxPrice: {\n        type: Number,\n        required: true\n    },\n    totalPrice: {\n        type: Number,\n        required: true\n    },\n    isPaid: {\n        type: Boolean,\n        required: true,\n        default: false\n    },\n    isDelivered: {\n        type: Boolean,\n        required: true,\n        default: false\n    },\n    paidAt: {\n        type: Date\n    },\n    deliveredAt: {\n        type: Date\n    }\n}, {\n    timestamps: true\n});\nconst Order = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Order) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Order\", orderSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T3JkZXIuanM/ZWIyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IG9yZGVyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIHVzZXI6IHsgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6IFwiVXNlclwiLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIG9yZGVySXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgIHF1YW50aXR5OiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgaW1hZ2U6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICBjdXRQcmljZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgc2hpcHBpbmdBZGRyZXNzOiB7XG4gICAgICBmdWxsTmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICBudW1iZXI6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgYWRkcmVzczogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICBjaXR5OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgIHBvc3RhbENvZGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgY291bnRyeTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgfSxcbiAgICBwYXltZW50TWV0aG9kOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBwYXltZW50UmVzdWx0OiB7IGlkOiBTdHJpbmcsIHN0YXR1czogU3RyaW5nLCBlbWFpbF9hZGRyZXNzOiBTdHJpbmcgfSxcbiAgICBpdGVtc1ByaWNlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBzaGlwcGluZ1ByaWNlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICB0YXhQcmljZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgdG90YWxQcmljZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgaXNQYWlkOiB7IHR5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiBmYWxzZSB9LFxuICAgIGlzRGVsaXZlcmVkOiB7IHR5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiBmYWxzZSB9LFxuICAgIHBhaWRBdDogeyB0eXBlOiBEYXRlIH0sXG4gICAgZGVsaXZlcmVkQXQ6IHsgdHlwZTogRGF0ZSB9LFxuICB9LFxuICB7XG4gICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgfVxuKTtcblxuY29uc3QgT3JkZXIgPSBtb25nb29zZS5tb2RlbHMuT3JkZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJPcmRlclwiLCBvcmRlclNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBPcmRlcjtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIm9yZGVyU2NoZW1hIiwiU2NoZW1hIiwidXNlciIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicmVxdWlyZWQiLCJvcmRlckl0ZW1zIiwibmFtZSIsIlN0cmluZyIsInF1YW50aXR5IiwiTnVtYmVyIiwiaW1hZ2UiLCJjdXRQcmljZSIsInNoaXBwaW5nQWRkcmVzcyIsImZ1bGxOYW1lIiwibnVtYmVyIiwiYWRkcmVzcyIsImNpdHkiLCJwb3N0YWxDb2RlIiwiY291bnRyeSIsInBheW1lbnRNZXRob2QiLCJwYXltZW50UmVzdWx0IiwiaWQiLCJzdGF0dXMiLCJlbWFpbF9hZGRyZXNzIiwiaXRlbXNQcmljZSIsInNoaXBwaW5nUHJpY2UiLCJ0YXhQcmljZSIsInRvdGFsUHJpY2UiLCJpc1BhaWQiLCJCb29sZWFuIiwiZGVmYXVsdCIsImlzRGVsaXZlcmVkIiwicGFpZEF0IiwiRGF0ZSIsImRlbGl2ZXJlZEF0IiwidGltZXN0YW1wcyIsIk9yZGVyIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/Order.js\n");

/***/ }),

/***/ "(api)/./pages/api/orders/[id]/index.js":
/*!****************************************!*\
  !*** ./pages/api/orders/[id]/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/Order */ \"(api)/./models/Order.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/db */ \"(api)/./utils/db.js\");\n// /api/orders/:id\n\n\n\nconst handler = async (req, res)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    if (!session) {\n        return res.status(401).send(\"signin required\");\n    }\n    await _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].connect();\n    const order = await _models_Order__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(req.query.id);\n    await _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].disconnect();\n    res.send(order);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXJzL1tpZF0vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxrQkFBa0I7QUFDMkI7QUFDQTtBQUNQO0FBRXRDLE1BQU1HLE9BQU8sR0FBRyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNsQyxNQUFNQyxPQUFPLEdBQUcsTUFBTU4sMkRBQVUsQ0FBQztRQUFFSSxHQUFHO0tBQUUsQ0FBQztJQUN6QyxJQUFJLENBQUNFLE9BQU8sRUFBRTtRQUNaLE9BQU9ELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUNoRDtJQUVELE1BQU1OLHlEQUFVLEVBQUUsQ0FBQztJQUVuQixNQUFNUSxLQUFLLEdBQUcsTUFBTVQsOERBQWMsQ0FBQ0csR0FBRyxDQUFDUSxLQUFLLENBQUNDLEVBQUUsQ0FBQztJQUNoRCxNQUFNWCw0REFBYSxFQUFFLENBQUM7SUFDdEJHLEdBQUcsQ0FBQ0csSUFBSSxDQUFDRSxLQUFLLENBQUMsQ0FBQztDQUNqQjtBQUVELGlFQUFlUCxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRhaWx3aW5kLWFtYXpvbmEvLi9wYWdlcy9hcGkvb3JkZXJzL1tpZF0vaW5kZXguanM/ZTg0YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvYXBpL29yZGVycy86aWRcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IE9yZGVyIGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9PcmRlcic7XG5pbXBvcnQgZGIgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvZGInO1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pO1xuICBpZiAoIXNlc3Npb24pIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLnNlbmQoJ3NpZ25pbiByZXF1aXJlZCcpO1xuICB9XG5cbiAgYXdhaXQgZGIuY29ubmVjdCgpO1xuXG4gIGNvbnN0IG9yZGVyID0gYXdhaXQgT3JkZXIuZmluZEJ5SWQocmVxLnF1ZXJ5LmlkKTtcbiAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xuICByZXMuc2VuZChvcmRlcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJPcmRlciIsImRiIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNlc3Npb24iLCJzdGF0dXMiLCJzZW5kIiwiY29ubmVjdCIsIm9yZGVyIiwiZmluZEJ5SWQiLCJxdWVyeSIsImlkIiwiZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/orders/[id]/index.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/orders/[id]/index.js"));
module.exports = __webpack_exports__;

})();