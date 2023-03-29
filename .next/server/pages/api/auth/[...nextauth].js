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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    isAdmin: {\n        type: Boolean,\n        required: true,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsVUFBVSxHQUFHLElBQUlELHdEQUFlLENBQ3BDO0lBQ0VHLElBQUksRUFBRTtRQUFFQyxJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBRTtJQUN0Q0MsS0FBSyxFQUFFO1FBQUVILElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtRQUFFRSxNQUFNLEVBQUUsSUFBSTtLQUFFO0lBQ3JEQyxRQUFRLEVBQUU7UUFBRUwsSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO0tBQUU7SUFDMUNJLE9BQU8sRUFBRTtRQUFFTixJQUFJLEVBQUVPLE9BQU87UUFBRUwsUUFBUSxFQUFFLElBQUk7UUFBRU0sT0FBTyxFQUFFLEtBQUs7S0FBRTtDQUMzRCxFQUNEO0lBQ0VDLFVBQVUsRUFBRSxJQUFJO0NBQ2pCLENBQ0Y7QUFFRCxNQUFNQyxJQUFJLEdBQUdkLDZEQUFvQixJQUFJQSxxREFBYyxDQUFDLE1BQU0sRUFBRUMsVUFBVSxDQUFDO0FBQ3ZFLGlFQUFlYSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRhaWx3aW5kLWFtYXpvbmEvLi9tb2RlbHMvVXNlci5qcz83MzY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICB7XG4gICAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXG4gICAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGlzQWRtaW46IHsgdHlwZTogQm9vbGVhbiwgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IGZhbHNlIH0sXG4gIH0sXG4gIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICB9XG4pO1xuXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ1VzZXInLCB1c2VyU2NoZW1hKTtcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJ1c2VyU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJpc0FkbWluIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJ0aW1lc3RhbXBzIiwiVXNlciIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/db */ \"(api)/./utils/db.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async jwt ({ token , user  }) {\n            if (user === null || user === void 0 ? void 0 : user._id) token._id = user._id;\n            if (user === null || user === void 0 ? void 0 : user.isAdmin) token.isAdmin = user.isAdmin;\n            return token;\n        },\n        async session ({ session , token  }) {\n            if (token === null || token === void 0 ? void 0 : token._id) session.user._id = token._id;\n            if (token === null || token === void 0 ? void 0 : token.isAdmin) session.user.isAdmin = token.isAdmin;\n            return session;\n        }\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            async authorize (credentials) {\n                await _utils_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"].connect();\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                    email: credentials.email\n                });\n                await _utils_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"].disconnect();\n                if (user && bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().compareSync(credentials.password, user.password)) {\n                    return {\n                        _id: user._id,\n                        name: user.name,\n                        email: user.email,\n                        image: \"f\",\n                        isAdmin: user.isAdmin\n                    };\n                }\n                throw new Error(\"Invalid email or password\");\n            }\n        }), \n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFnQztBQUNDO0FBQ2lDO0FBQzFCO0FBQ0w7QUFFbkMsaUVBQWVDLGdEQUFRLENBQUM7SUFDdEJJLE9BQU8sRUFBRTtRQUNQQyxRQUFRLEVBQUUsS0FBSztLQUNoQjtJQUNEQyxTQUFTLEVBQUU7UUFDVCxNQUFNQyxHQUFHLEVBQUMsRUFBRUMsS0FBSyxHQUFFQyxJQUFJLEdBQUUsRUFBRTtZQUN6QixJQUFJQSxJQUFJLGFBQUpBLElBQUksV0FBSyxHQUFUQSxLQUFBQSxDQUFTLEdBQVRBLElBQUksQ0FBRUMsR0FBRyxFQUFFRixLQUFLLENBQUNFLEdBQUcsR0FBR0QsSUFBSSxDQUFDQyxHQUFHLENBQUM7WUFDcEMsSUFBSUQsSUFBSSxhQUFKQSxJQUFJLFdBQVMsR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxJQUFJLENBQUVFLE9BQU8sRUFBRUgsS0FBSyxDQUFDRyxPQUFPLEdBQUdGLElBQUksQ0FBQ0UsT0FBTyxDQUFDO1lBQ2hELE9BQU9ILEtBQUssQ0FBQztTQUNkO1FBQ0QsTUFBTUosT0FBTyxFQUFDLEVBQUVBLE9BQU8sR0FBRUksS0FBSyxHQUFFLEVBQUU7WUFDaEMsSUFBSUEsS0FBSyxhQUFMQSxLQUFLLFdBQUssR0FBVkEsS0FBQUEsQ0FBVSxHQUFWQSxLQUFLLENBQUVFLEdBQUcsRUFBRU4sT0FBTyxDQUFDSyxJQUFJLENBQUNDLEdBQUcsR0FBR0YsS0FBSyxDQUFDRSxHQUFHLENBQUM7WUFDN0MsSUFBSUYsS0FBSyxhQUFMQSxLQUFLLFdBQVMsR0FBZEEsS0FBQUEsQ0FBYyxHQUFkQSxLQUFLLENBQUVHLE9BQU8sRUFBRVAsT0FBTyxDQUFDSyxJQUFJLENBQUNFLE9BQU8sR0FBR0gsS0FBSyxDQUFDRyxPQUFPLENBQUM7WUFDekQsT0FBT1AsT0FBTyxDQUFDO1NBQ2hCO0tBQ0Y7SUFDRFEsU0FBUyxFQUFFO1FBQ1RYLHNFQUFtQixDQUFDO1lBQ2xCLE1BQU1ZLFNBQVMsRUFBQ0MsV0FBVyxFQUFFO2dCQUMzQixNQUFNWCx5REFBVSxFQUFFLENBQUM7Z0JBQ25CLE1BQU1NLElBQUksR0FBRyxNQUFNUCw0REFBWSxDQUFDO29CQUM5QmUsS0FBSyxFQUFFSCxXQUFXLENBQUNHLEtBQUs7aUJBQ3pCLENBQUM7Z0JBQ0YsTUFBTWQsNERBQWEsRUFBRSxDQUFDO2dCQUN0QixJQUFJTSxJQUFJLElBQUlWLDJEQUFvQixDQUFDZSxXQUFXLENBQUNNLFFBQVEsRUFBRVgsSUFBSSxDQUFDVyxRQUFRLENBQUMsRUFBRTtvQkFDckUsT0FBTzt3QkFDTFYsR0FBRyxFQUFFRCxJQUFJLENBQUNDLEdBQUc7d0JBQ2JXLElBQUksRUFBRVosSUFBSSxDQUFDWSxJQUFJO3dCQUNmSixLQUFLLEVBQUVSLElBQUksQ0FBQ1EsS0FBSzt3QkFDakJLLEtBQUssRUFBRSxHQUFHO3dCQUNWWCxPQUFPLEVBQUVGLElBQUksQ0FBQ0UsT0FBTztxQkFDdEIsQ0FBQztpQkFDSDtnQkFDRCxNQUFNLElBQUlZLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2FBQzlDO1NBQ0YsQ0FBQztLQUNIO0NBQ0YsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10YWlsd2luZC1hbWF6b25hLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiY3J5cHRqcyBmcm9tICdiY3J5cHRqcyc7XG5pbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL1VzZXInO1xuaW1wb3J0IGRiIGZyb20gJy4uLy4uLy4uL3V0aWxzL2RiJztcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6ICdqd3QnLFxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcj8uX2lkKSB0b2tlbi5faWQgPSB1c2VyLl9pZDtcbiAgICAgIGlmICh1c2VyPy5pc0FkbWluKSB0b2tlbi5pc0FkbWluID0gdXNlci5pc0FkbWluO1xuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmICh0b2tlbj8uX2lkKSBzZXNzaW9uLnVzZXIuX2lkID0gdG9rZW4uX2lkO1xuICAgICAgaWYgKHRva2VuPy5pc0FkbWluKSBzZXNzaW9uLnVzZXIuaXNBZG1pbiA9IHRva2VuLmlzQWRtaW47XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBhd2FpdCBkYi5jb25uZWN0KCk7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe1xuICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCxcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IGRiLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgaWYgKHVzZXIgJiYgYmNyeXB0anMuY29tcGFyZVN5bmMoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIF9pZDogdXNlci5faWQsXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgIGltYWdlOiAnZicsXG4gICAgICAgICAgICBpc0FkbWluOiB1c2VyLmlzQWRtaW4sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQnKTtcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG59KTtcbiJdLCJuYW1lcyI6WyJiY3J5cHRqcyIsIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIlVzZXIiLCJkYiIsInNlc3Npb24iLCJzdHJhdGVneSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidXNlciIsIl9pZCIsImlzQWRtaW4iLCJwcm92aWRlcnMiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsImNvbm5lY3QiLCJmaW5kT25lIiwiZW1haWwiLCJkaXNjb25uZWN0IiwiY29tcGFyZVN5bmMiLCJwYXNzd29yZCIsIm5hbWUiLCJpbWFnZSIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();