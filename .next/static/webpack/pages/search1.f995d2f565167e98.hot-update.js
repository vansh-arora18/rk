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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ProductItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductItem */ \"./components/ProductItem.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction search1(param) {\n    var products = param.products;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), query = ref[0], setQuery = ref[1];\n    var _use = _slicedToArray(use, 2), final = _use[0], setFinal = _use[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var submitHandler = function() {\n        router.push(\"/search?query=\".concat(query));\n    };\n    // var data;\n    // useEffect(() => {\n    //   const changing = () => {\n    //     data = products.filter((product) => {\n    //       const searchItem = query.toLowerCase();\n    //       const fullName = product.name.toLowerCase();\n    //       const brand = product.brand.toLowerCase();\n    //       return searchItem && (fullName.startsWith(searchItem) || brand.);\n    //     });\n    //   };\n    //   changing();\n    //   console.log(data);\n    // }, [query]);\n    // var mySet1 = new Set();\n    var change = function(name) {\n        setQuery(\"\");\n        console.log(query);\n        submitHandler();\n    };\n    var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        inputRef.current.focus();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"Place Order\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-2 ml-1\",\n                children: \"Search Products\"\n            }, void 0, false, {\n                fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: submitHandler,\n                className: \"flex justify-center w-screen mt-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: function(e) {\n                            return setQuery(e.target.value);\n                        },\n                        type: \"text\",\n                        className: \"w-screen ml-1\",\n                        placeholder: \"Search products\",\n                        ref: inputRef,\n                        autoFocus: true\n                    }, void 0, false, {\n                        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" ml-2 px-1 relative right-10\",\n                        type: \"submit\",\n                        id: \"button-addon2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.SearchIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: products.filter(function(product) {\n                    var searchItem = query.toLowerCase();\n                    var fullName = product.name.toLowerCase();\n                    var brandName = product.brand.toLowerCase();\n                    var categoryName = product.category.toLowerCase();\n                    var reg = new RegExp(\"\".concat(searchItem, \".\"), \"gi\");\n                    return searchItem && (fullName.match(reg) || brandName.match(reg));\n                }).map(function(e) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-full border\",\n                        onClick: function() {\n                            return change(e.mix);\n                        },\n                        children: e.name\n                    }, void 0, false, {\n                        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                        lineNumber: 84,\n                        columnNumber: 15\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/search1.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(search1, \"0pe48cq58EfkFaLxi6AUmEA+esw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (search1);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNMLFdBQVcsRUFBRTtvQkFFbkQsSUFBSU0sR0FBRyxHQUFHLElBQUlDLE1BQU0sQ0FBQyxFQUFDLENBQWEsTUFBQyxDQUFaUixVQUFVLEVBQUMsR0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO29CQUU1QyxPQUFPQSxVQUFVLElBQUksQ0FBQ0UsUUFBUSxDQUFDTyxLQUFLLENBQUNGLEdBQUcsQ0FBQyxJQUFJSixTQUFTLENBQUNNLEtBQUssQ0FBQ0YsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDcEUsQ0FBQyxDQUNERyxHQUFHLENBQUMsU0FBQ3JCLENBQUMsRUFBSztvQkFDVixxQkFDRSw4REFBQ08sUUFBTTt3QkFBQ1osU0FBUyxFQUFDLGVBQWU7d0JBQUMyQixPQUFPLEVBQUU7bUNBQU1wQyxNQUFNLENBQUNjLENBQUMsQ0FBQ3VCLEdBQUcsQ0FBQzt5QkFBQTtrQ0FDM0R2QixDQUFDLENBQUNiLElBQUk7Ozs7OzZCQUNBLENBQ1Q7aUJBQ0gsQ0FBQzs7Ozs7b0JBQ0E7Ozs7OztZQUNDLENBQ1Q7Q0FDSDtHQW5GUVgsT0FBTzs7UUFHQ1Qsa0RBQVM7Ozs7QUFrRjFCLCtEQUFlUyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoMS5qcz9lNTA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgU2VhcmNoSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vbW9kZWxzL1Byb2R1Y3RcIjtcbmltcG9ydCBkYiBmcm9tIFwiLi4vdXRpbHMvZGJcIjtcbmltcG9ydCBQcm9kdWN0SXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0SXRlbVwiO1xuXG5mdW5jdGlvbiBzZWFyY2gxKHsgcHJvZHVjdHMgfSkge1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZmluYWwsIHNldEZpbmFsXSA9IHVzZVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaChgL3NlYXJjaD9xdWVyeT0ke3F1ZXJ5fWApO1xuICB9O1xuXG4gIC8vIHZhciBkYXRhO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc3QgY2hhbmdpbmcgPSAoKSA9PiB7XG4gIC8vICAgICBkYXRhID0gcHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PiB7XG4gIC8vICAgICAgIGNvbnN0IHNlYXJjaEl0ZW0gPSBxdWVyeS50b0xvd2VyQ2FzZSgpO1xuICAvLyAgICAgICBjb25zdCBmdWxsTmFtZSA9IHByb2R1Y3QubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAvLyAgICAgICBjb25zdCBicmFuZCA9IHByb2R1Y3QuYnJhbmQudG9Mb3dlckNhc2UoKTtcblxuICAvLyAgICAgICByZXR1cm4gc2VhcmNoSXRlbSAmJiAoZnVsbE5hbWUuc3RhcnRzV2l0aChzZWFyY2hJdGVtKSB8fCBicmFuZC4pO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfTtcbiAgLy8gICBjaGFuZ2luZygpO1xuICAvLyAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAvLyB9LCBbcXVlcnldKTtcblxuICAvLyB2YXIgbXlTZXQxID0gbmV3IFNldCgpO1xuXG4gIGNvbnN0IGNoYW5nZSA9IChuYW1lKSA9PiB7XG4gICAgc2V0UXVlcnkoXCJcIik7XG4gICAgY29uc29sZS5sb2cocXVlcnkpO1xuICAgIHN1Ym1pdEhhbmRsZXIoKTtcbiAgfTtcblxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPVwiUGxhY2UgT3JkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBtbC0xXCI+U2VhcmNoIFByb2R1Y3RzPC9kaXY+XG4gICAgICA8Zm9ybVxuICAgICAgICBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn1cbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LXNjcmVlbiBtdC0yXCJcbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctc2NyZWVuIG1sLTFcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHByb2R1Y3RzXCJcbiAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIG1sLTIgcHgtMSByZWxhdGl2ZSByaWdodC0xMFwiXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgaWQ9XCJidXR0b24tYWRkb24yXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT1cImgtNSB3LTVcIj48L1NlYXJjaEljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdj5cbiAgICAgICAge3Byb2R1Y3RzXG4gICAgICAgICAgLmZpbHRlcigocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VhcmNoSXRlbSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBjb25zdCBmdWxsTmFtZSA9IHByb2R1Y3QubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgY29uc3QgYnJhbmROYW1lID0gcHJvZHVjdC5icmFuZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlOYW1lID0gcHJvZHVjdC5jYXRlZ29yeS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChgJHtzZWFyY2hJdGVtfS5gLCBcImdpXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoSXRlbSAmJiAoZnVsbE5hbWUubWF0Y2gocmVnKSB8fCBicmFuZE5hbWUubWF0Y2gocmVnKSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAubWFwKChlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXJcIiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2UoZS5taXgpfT5cbiAgICAgICAgICAgICAgICB7ZS5uYW1lfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoMTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgYXdhaXQgZGIuY29ubmVjdCgpO1xuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IFByb2R1Y3QuZmluZCgpLmxlYW4oKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzLm1hcChkYi5jb252ZXJ0RG9jVG9PYmopLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiU2VhcmNoSWNvbiIsIkxheW91dCIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiUHJvZHVjdEl0ZW0iLCJzZWFyY2gxIiwicHJvZHVjdHMiLCJxdWVyeSIsInNldFF1ZXJ5IiwidXNlIiwiZmluYWwiLCJzZXRGaW5hbCIsInJvdXRlciIsInN1Ym1pdEhhbmRsZXIiLCJwdXNoIiwiY2hhbmdlIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJpbnB1dFJlZiIsImN1cnJlbnQiLCJmb2N1cyIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlZiIsImF1dG9Gb2N1cyIsImJ1dHRvbiIsImlkIiwiZmlsdGVyIiwicHJvZHVjdCIsInNlYXJjaEl0ZW0iLCJ0b0xvd2VyQ2FzZSIsImZ1bGxOYW1lIiwiYnJhbmROYW1lIiwiYnJhbmQiLCJjYXRlZ29yeU5hbWUiLCJjYXRlZ29yeSIsInJlZyIsIlJlZ0V4cCIsIm1hdGNoIiwibWFwIiwib25DbGljayIsIm1peCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/search1.js\n");

/***/ })

});