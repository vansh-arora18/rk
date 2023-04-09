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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ProductItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductItem */ \"./components/ProductItem.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction search1(param) {\n    var products = param.products;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), query = ref[0], setQuery = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var submitHandler = function() {\n        router.push(\"/search?query=\".concat(query));\n    };\n    // var data;\n    // useEffect(() => {\n    //   const changing = () => {\n    //     data = products.filter((product) => {\n    //       const searchItem = query.toLowerCase();\n    //       const fullName = product.name.toLowerCase();\n    //       const brand = product.brand.toLowerCase();\n    //       return searchItem && (fullName.startsWith(searchItem) || brand.);\n    //     });\n    //   };\n    //   changing();\n    //   console.log(data);\n    // }, [query]);\n    // var mySet1 = new Set();\n    var change = function(name) {\n        setQuery(name);\n        console.log(query);\n        submitHandler();\n    };\n    var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        inputRef.current.focus();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"Place Order\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-2 ml-1\",\n                children: \"Search Products\"\n            }, void 0, false, {\n                fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: submitHandler,\n                className: \"flex justify-center w-screen mt-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: function(e) {\n                            return setQuery(e.target.value);\n                        },\n                        type: \"text\",\n                        className: \"w-screen ml-1\",\n                        placeholder: \"Search products\",\n                        ref: inputRef,\n                        value: query,\n                        autoFocus: true\n                    }, void 0, false, {\n                        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" ml-2 px-1 relative right-10\",\n                        type: \"submit\",\n                        id: \"button-addon2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.SearchIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: products.filter(function(product) {\n                    var searchItem = query.toLowerCase();\n                    var fullName = product.name.toLowerCase();\n                    var brandName = product.brand.toLowerCase();\n                    var categoryName = product.category.toLowerCase();\n                    var reg = new RegExp(\"\".concat(searchItem, \".\"), \"gi\");\n                    return searchItem && (fullName.match(reg) || brandName.match(reg));\n                }).map(function(e) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-full border\",\n                        onClick: function() {\n                            return change(e.mix);\n                        },\n                        children: e.name\n                    }, void 0, false, {\n                        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                        lineNumber: 84,\n                        columnNumber: 15\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(search1, \"0pe48cq58EfkFaLxi6AUmEA+esw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (search1);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0JBRTVDLE9BQU9BLFVBQVUsSUFBSSxDQUFDRSxRQUFRLENBQUNPLEtBQUssQ0FBQ0YsR0FBRyxDQUFDLElBQUlKLFNBQVMsQ0FBQ00sS0FBSyxDQUFDRixHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUNwRSxDQUFDLENBQ0RHLEdBQUcsQ0FBQyxTQUFDckIsQ0FBQyxFQUFLO29CQUNWLHFCQUNFLDhEQUFDTyxRQUFNO3dCQUFDWixTQUFTLEVBQUMsZUFBZTt3QkFBQzJCLE9BQU8sRUFBRTttQ0FBTXBDLE1BQU0sQ0FBQ2MsQ0FBQyxDQUFDdUIsR0FBRyxDQUFDO3lCQUFBO2tDQUMzRHZCLENBQUMsQ0FBQ2IsSUFBSTs7Ozs7NkJBQ0EsQ0FDVDtpQkFDSCxDQUFDOzs7OztvQkFDQTs7Ozs7O1lBQ0MsQ0FDVDtDQUNIO0dBbkZRUixPQUFPOztRQUVDVCxrREFBUzs7OztBQW1GMUIsK0RBQWVTLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZWFyY2gxLmpzP2U1MDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi9tb2RlbHMvUHJvZHVjdFwiO1xuaW1wb3J0IGRiIGZyb20gXCIuLi91dGlscy9kYlwiO1xuaW1wb3J0IFByb2R1Y3RJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RJdGVtXCI7XG5cbmZ1bmN0aW9uIHNlYXJjaDEoeyBwcm9kdWN0cyB9KSB7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKGAvc2VhcmNoP3F1ZXJ5PSR7cXVlcnl9YCk7XG4gIH07XG5cbiAgLy8gdmFyIGRhdGE7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCBjaGFuZ2luZyA9ICgpID0+IHtcbiAgLy8gICAgIGRhdGEgPSBwcm9kdWN0cy5maWx0ZXIoKHByb2R1Y3QpID0+IHtcbiAgLy8gICAgICAgY29uc3Qgc2VhcmNoSXRlbSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7XG4gIC8vICAgICAgIGNvbnN0IGZ1bGxOYW1lID0gcHJvZHVjdC5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gIC8vICAgICAgIGNvbnN0IGJyYW5kID0gcHJvZHVjdC5icmFuZC50b0xvd2VyQ2FzZSgpO1xuXG4gIC8vICAgICAgIHJldHVybiBzZWFyY2hJdGVtICYmIChmdWxsTmFtZS5zdGFydHNXaXRoKHNlYXJjaEl0ZW0pIHx8IGJyYW5kLik7XG4gIC8vICAgICB9KTtcbiAgLy8gICB9O1xuICAvLyAgIGNoYW5naW5nKCk7XG4gIC8vICAgY29uc29sZS5sb2coZGF0YSk7XG4gIC8vIH0sIFtxdWVyeV0pO1xuXG4gIC8vIHZhciBteVNldDEgPSBuZXcgU2V0KCk7XG5cbiAgY29uc3QgY2hhbmdlID0gKG5hbWUpID0+IHtcbiAgICBzZXRRdWVyeShuYW1lKTtcbiAgICBjb25zb2xlLmxvZyhxdWVyeSk7XG4gICAgc3VibWl0SGFuZGxlcigpO1xuICB9O1xuXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9XCJQbGFjZSBPcmRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIG1sLTFcIj5TZWFyY2ggUHJvZHVjdHM8L2Rpdj5cbiAgICAgIDxmb3JtXG4gICAgICAgIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfVxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctc2NyZWVuIG10LTJcIlxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1zY3JlZW4gbWwtMVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggcHJvZHVjdHNcIlxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIG1sLTIgcHgtMSByZWxhdGl2ZSByaWdodC0xMFwiXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgaWQ9XCJidXR0b24tYWRkb24yXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT1cImgtNSB3LTVcIj48L1NlYXJjaEljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdj5cbiAgICAgICAge3Byb2R1Y3RzXG4gICAgICAgICAgLmZpbHRlcigocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VhcmNoSXRlbSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBjb25zdCBmdWxsTmFtZSA9IHByb2R1Y3QubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgY29uc3QgYnJhbmROYW1lID0gcHJvZHVjdC5icmFuZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlOYW1lID0gcHJvZHVjdC5jYXRlZ29yeS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChgJHtzZWFyY2hJdGVtfS5gLCBcImdpXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoSXRlbSAmJiAoZnVsbE5hbWUubWF0Y2gocmVnKSB8fCBicmFuZE5hbWUubWF0Y2gocmVnKSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAubWFwKChlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXJcIiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2UoZS5taXgpfT5cbiAgICAgICAgICAgICAgICB7ZS5uYW1lfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoMTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgYXdhaXQgZGIuY29ubmVjdCgpO1xuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IFByb2R1Y3QuZmluZCgpLmxlYW4oKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzLm1hcChkYi5jb252ZXJ0RG9jVG9PYmopLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiU2VhcmNoSWNvbiIsIkxheW91dCIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiUHJvZHVjdEl0ZW0iLCJzZWFyY2gxIiwicHJvZHVjdHMiLCJxdWVyeSIsInNldFF1ZXJ5Iiwicm91dGVyIiwic3VibWl0SGFuZGxlciIsInB1c2giLCJjaGFuZ2UiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImlucHV0UmVmIiwiY3VycmVudCIsImZvY3VzIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVmIiwiYXV0b0ZvY3VzIiwiYnV0dG9uIiwiaWQiLCJmaWx0ZXIiLCJwcm9kdWN0Iiwic2VhcmNoSXRlbSIsInRvTG93ZXJDYXNlIiwiZnVsbE5hbWUiLCJicmFuZE5hbWUiLCJicmFuZCIsImNhdGVnb3J5TmFtZSIsImNhdGVnb3J5IiwicmVnIiwiUmVnRXhwIiwibWF0Y2giLCJtYXAiLCJvbkNsaWNrIiwibWl4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/search1.js\n");

/***/ })

});