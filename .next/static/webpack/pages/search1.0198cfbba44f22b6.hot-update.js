"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search1",{

/***/ "./pages/search1.js":
/*!**************************!*\
  !*** ./pages/search1.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction search1() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), query = ref[0], setQuery = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var submitHandler = function(e) {\n        e.preventDefault();\n        router.push(\"/search?query=\".concat(query));\n    };\n    var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        inputRef.current.focus();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"Place Order\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-2 ml-1\",\n                children: \"Search Products\"\n            }, void 0, false, {\n                fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: submitHandler,\n                className: \"flex justify-center w-screen mt-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: function(e) {\n                            return setQuery(e.target.value);\n                        },\n                        type: \"text\",\n                        className: \"w-screen ml-1\",\n                        placeholder: \"Search products\",\n                        ref: inputRef\n                    }, void 0, false, {\n                        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" ml-2 px-1 relative right-10\",\n                        type: \"submit\",\n                        id: \"button-addon2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.SearchIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h- bg-red-400\",\n                children: \"Keep on searching\"\n            }, void 0, false, {\n                fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(search1, \"0pe48cq58EfkFaLxi6AUmEA+esw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (search1);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2gxLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ2M7QUFDWjtBQUM2Qjs7QUFFdkUsU0FBU1EsT0FBTyxHQUFHOztJQUNqQixJQUEwQkYsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQU54QyxLQU1jLEdBQWNBLEdBQVksR0FBMUIsRUFOZCxRQU13QixHQUFJQSxHQUFZLEdBQWhCO0lBQ3RCLElBQU1LLE1BQU0sR0FBR1gsc0RBQVMsRUFBRTtJQUMxQixJQUFNWSxhQUFhLEdBQUcsU0FBQ0MsQ0FBQyxFQUFLO1FBQzNCQSxDQUFDLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBQ25CSCxNQUFNLENBQUNJLElBQUksQ0FBQyxnQkFBZSxDQUFRLE9BQU5OLEtBQUssQ0FBRSxDQUFDLENBQUM7S0FDdkM7SUFFRCxJQUFNTyxRQUFRLEdBQUdULDZDQUFNLEVBQUU7SUFFekJGLGdEQUFTLENBQUMsV0FBTTtRQUNkVyxRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFLENBQUM7S0FDMUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDaEIsMERBQU07UUFBQ2lCLEtBQUssRUFBQyxhQUFhOzswQkFDekIsOERBQUNDLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxXQUFXOzBCQUFDLGlCQUFlOzs7OztvQkFBTTswQkFDaEQsOERBQUNDLE1BQUk7Z0JBQ0hDLFFBQVEsRUFBRVgsYUFBYTtnQkFDdkJTLFNBQVMsRUFBQyxtQ0FBbUM7O2tDQUU3Qyw4REFBQ0csT0FBSzt3QkFDSkMsUUFBUSxFQUFFLFNBQUNaLENBQUM7bUNBQUtILFFBQVEsQ0FBQ0csQ0FBQyxDQUFDYSxNQUFNLENBQUNDLEtBQUssQ0FBQzt5QkFBQTt3QkFDekNDLElBQUksRUFBQyxNQUFNO3dCQUNYUCxTQUFTLEVBQUMsZUFBZTt3QkFDekJRLFdBQVcsRUFBQyxpQkFBaUI7d0JBQzdCQyxHQUFHLEVBQUVkLFFBQVE7Ozs7OzRCQUNiO2tDQUNGLDhEQUFDZSxRQUFNO3dCQUNMVixTQUFTLEVBQUMsOEJBQThCO3dCQUN4Q08sSUFBSSxFQUFDLFFBQVE7d0JBQ2JJLEVBQUUsRUFBQyxlQUFlO2tDQUVsQiw0RUFBQy9CLGdFQUFVOzRCQUFDb0IsU0FBUyxFQUFDLFNBQVM7Ozs7O2dDQUFjOzs7Ozs0QkFDdEM7Ozs7OztvQkFDSjswQkFDUCw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGVBQWU7MEJBQUMsbUJBQWlCOzs7OztvQkFBTTs7Ozs7O1lBQy9DLENBQ1Q7Q0FDSDtHQXZDUWIsT0FBTzs7UUFFQ1Isa0RBQVM7OztBQXVDMUIsK0RBQWVRLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZWFyY2gxLmpzP2U1MDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gc2VhcmNoMSgpIHtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByb3V0ZXIucHVzaChgL3NlYXJjaD9xdWVyeT0ke3F1ZXJ5fWApO1xuICB9O1xuXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9XCJQbGFjZSBPcmRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIG1sLTFcIj5TZWFyY2ggUHJvZHVjdHM8L2Rpdj5cbiAgICAgIDxmb3JtXG4gICAgICAgIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfVxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctc2NyZWVuIG10LTJcIlxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1zY3JlZW4gbWwtMVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggcHJvZHVjdHNcIlxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCIgbWwtMiBweC0xIHJlbGF0aXZlIHJpZ2h0LTEwXCJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICBpZD1cImJ1dHRvbi1hZGRvbjJcIlxuICAgICAgICA+XG4gICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPVwiaC01IHctNVwiPjwvU2VhcmNoSWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtIGJnLXJlZC00MDBcIj5LZWVwIG9uIHNlYXJjaGluZzwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2gxO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlNlYXJjaEljb24iLCJMYXlvdXQiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInNlYXJjaDEiLCJxdWVyeSIsInNldFF1ZXJ5Iiwicm91dGVyIiwic3VibWl0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJpbnB1dFJlZiIsImN1cnJlbnQiLCJmb2N1cyIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVmIiwiYnV0dG9uIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/search1.js\n");

/***/ })

});