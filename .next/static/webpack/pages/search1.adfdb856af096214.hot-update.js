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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ProductItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductItem */ \"./components/ProductItem.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction search1(param) {\n    var products = param.products;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), query = ref[0], setQuery = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var submitHandler = function() {\n        router.push(\"/search?query=\".concat(query));\n    };\n    // var data;\n    // useEffect(() => {\n    //   const changing = () => {\n    //     data = products.filter((product) => {\n    //       const searchItem = query.toLowerCase();\n    //       const fullName = product.name.toLowerCase();\n    //       const brand = product.brand.toLowerCase();\n    //       return searchItem && (fullName.startsWith(searchItem) || brand.);\n    //     });\n    //   };\n    //   changing();\n    //   console.log(data);\n    // }, [query]);\n    // var mySet1 = new Set();\n    var change = function(name) {\n        setQuery(\"\");\n        console.log(query);\n        submitHandler();\n    };\n    var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        inputRef.current.focus();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"Place Order\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-2 ml-1\",\n                children: \"Search Products\"\n            }, void 0, false, {\n                fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: submitHandler,\n                className: \"flex justify-center w-screen mt-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: function(e) {\n                            return setQuery(e.target.value);\n                        },\n                        type: \"text\",\n                        className: \"w-screen ml-1\",\n                        placeholder: \"Search products\",\n                        ref: inputRef,\n                        autoFocus: true\n                    }, void 0, false, {\n                        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" ml-2 px-1 relative right-10\",\n                        type: \"submit\",\n                        id: \"button-addon2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.SearchIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: products.filter(function(product) {\n                    var searchItem = query.toLowerCase();\n                    var fullName = product.name.toLowerCase();\n                    var brandName = product.brand.toLowerCase();\n                    var categoryName = product.category.toLowerCase();\n                    var reg = new RegExp(\"\".concat(searchItem, \".\"), \"gi\");\n                    return searchItem && (fullName.match(reg) || brandName.match(reg));\n                }).map(function(e) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-full border\",\n                        onClick: function() {\n                            return change(e.mix);\n                        },\n                        children: e.name\n                    }, void 0, false, {\n                        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                        lineNumber: 83,\n                        columnNumber: 15\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(search1, \"0pe48cq58EfkFaLxi6AUmEA+esw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (search1);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNFLFFBQVEsQ0FBQ08sS0FBSyxDQUFDRixHQUFHLENBQUMsSUFBSUosU0FBUyxDQUFDTSxLQUFLLENBQUNGLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3BFLENBQUMsQ0FDREcsR0FBRyxDQUFDLFNBQUNyQixDQUFDLEVBQUs7b0JBQ1YscUJBQ0UsOERBQUNPLFFBQU07d0JBQUNaLFNBQVMsRUFBQyxlQUFlO3dCQUFDMkIsT0FBTyxFQUFFO21DQUFNcEMsTUFBTSxDQUFDYyxDQUFDLENBQUN1QixHQUFHLENBQUM7eUJBQUE7a0NBQzNEdkIsQ0FBQyxDQUFDYixJQUFJOzs7Ozs2QkFDQSxDQUNUO2lCQUNILENBQUM7Ozs7O29CQUNBOzs7Ozs7WUFDQyxDQUNUO0NBQ0g7R0FsRlFSLE9BQU87O1FBRUNULGtEQUFTOzs7O0FBa0YxQiwrREFBZVMsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlYXJjaDEuanM/ZTUwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFNlYXJjaEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uL21vZGVscy9Qcm9kdWN0XCI7XG5pbXBvcnQgZGIgZnJvbSBcIi4uL3V0aWxzL2RiXCI7XG5pbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW1cIjtcblxuZnVuY3Rpb24gc2VhcmNoMSh7IHByb2R1Y3RzIH0pIHtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goYC9zZWFyY2g/cXVlcnk9JHtxdWVyeX1gKTtcbiAgfTtcblxuICAvLyB2YXIgZGF0YTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnN0IGNoYW5naW5nID0gKCkgPT4ge1xuICAvLyAgICAgZGF0YSA9IHByb2R1Y3RzLmZpbHRlcigocHJvZHVjdCkgPT4ge1xuICAvLyAgICAgICBjb25zdCBzZWFyY2hJdGVtID0gcXVlcnkudG9Mb3dlckNhc2UoKTtcbiAgLy8gICAgICAgY29uc3QgZnVsbE5hbWUgPSBwcm9kdWN0Lm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgLy8gICAgICAgY29uc3QgYnJhbmQgPSBwcm9kdWN0LmJyYW5kLnRvTG93ZXJDYXNlKCk7XG5cbiAgLy8gICAgICAgcmV0dXJuIHNlYXJjaEl0ZW0gJiYgKGZ1bGxOYW1lLnN0YXJ0c1dpdGgoc2VhcmNoSXRlbSkgfHwgYnJhbmQuKTtcbiAgLy8gICAgIH0pO1xuICAvLyAgIH07XG4gIC8vICAgY2hhbmdpbmcoKTtcbiAgLy8gICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgLy8gfSwgW3F1ZXJ5XSk7XG5cbiAgLy8gdmFyIG15U2V0MSA9IG5ldyBTZXQoKTtcblxuICBjb25zdCBjaGFuZ2UgPSAobmFtZSkgPT4ge1xuICAgIHNldFF1ZXJ5KFwiXCIpO1xuICAgIGNvbnNvbGUubG9nKHF1ZXJ5KTtcbiAgICBzdWJtaXRIYW5kbGVyKCk7XG4gIH07XG5cbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cIlBsYWNlIE9yZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgbWwtMVwiPlNlYXJjaCBQcm9kdWN0czwvZGl2PlxuICAgICAgPGZvcm1cbiAgICAgICAgb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1zY3JlZW4gbXQtMlwiXG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LXNjcmVlbiBtbC0xXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBwcm9kdWN0c1wiXG4gICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBtbC0yIHB4LTEgcmVsYXRpdmUgcmlnaHQtMTBcIlxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGlkPVwiYnV0dG9uLWFkZG9uMlwiXG4gICAgICAgID5cbiAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01XCI+PC9TZWFyY2hJY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtwcm9kdWN0c1xuICAgICAgICAgIC5maWx0ZXIoKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaEl0ZW0gPSBxdWVyeS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgY29uc3QgZnVsbE5hbWUgPSBwcm9kdWN0Lm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGNvbnN0IGJyYW5kTmFtZSA9IHByb2R1Y3QuYnJhbmQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5TmFtZSA9IHByb2R1Y3QuY2F0ZWdvcnkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoYCR7c2VhcmNoSXRlbX0uYCwgXCJnaVwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaEl0ZW0gJiYgKGZ1bGxOYW1lLm1hdGNoKHJlZykgfHwgYnJhbmROYW1lLm1hdGNoKHJlZykpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLm1hcCgoZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyXCIgb25DbGljaz17KCkgPT4gY2hhbmdlKGUubWl4KX0+XG4gICAgICAgICAgICAgICAge2UubmFtZX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDE7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGF3YWl0IGRiLmNvbm5lY3QoKTtcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBQcm9kdWN0LmZpbmQoKS5sZWFuKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cy5tYXAoZGIuY29udmVydERvY1RvT2JqKSxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlNlYXJjaEljb24iLCJMYXlvdXQiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIlByb2R1Y3RJdGVtIiwic2VhcmNoMSIsInByb2R1Y3RzIiwicXVlcnkiLCJzZXRRdWVyeSIsInJvdXRlciIsInN1Ym1pdEhhbmRsZXIiLCJwdXNoIiwiY2hhbmdlIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJpbnB1dFJlZiIsImN1cnJlbnQiLCJmb2N1cyIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlZiIsImF1dG9Gb2N1cyIsImJ1dHRvbiIsImlkIiwiZmlsdGVyIiwicHJvZHVjdCIsInNlYXJjaEl0ZW0iLCJ0b0xvd2VyQ2FzZSIsImZ1bGxOYW1lIiwiYnJhbmROYW1lIiwiYnJhbmQiLCJjYXRlZ29yeU5hbWUiLCJjYXRlZ29yeSIsInJlZyIsIlJlZ0V4cCIsIm1hdGNoIiwibWFwIiwib25DbGljayIsIm1peCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/search1.js\n");

/***/ })

});