"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[slug]",{

/***/ "./pages/product/[slug].js":
/*!*********************************!*\
  !*** ./pages/product/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ ProductScreen; }\n/* harmony export */ });\n/* harmony import */ var _Users_vansharora_Desktop_rk_rk_rk_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_vansharora_Desktop_rk_rk_rk_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_vansharora_Desktop_rk_rk_rk_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/Store */ \"./utils/Store.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction ProductScreen(props) {\n    _s();\n    var product = props.product;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_9__.Store), state = ref.state, dispatch = ref.dispatch;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    if (!product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            title: \"Produt Not Found\",\n            children: \"Product Not Found\"\n        }, void 0, false, {\n            fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n            lineNumber: 17,\n            columnNumber: 12\n        }, this);\n    }\n    var addToCartHandler = function() {\n        var _ref = _asyncToGenerator(_Users_vansharora_Desktop_rk_rk_rk_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var existItem, quantity, data;\n            return _Users_vansharora_Desktop_rk_rk_rk_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        existItem = state.cart.cartItems.find(function(x) {\n                            return x.slug === product.slug;\n                        });\n                        quantity = existItem ? existItem.quantity + 1 : 1;\n                        _ctx.next = 4;\n                        return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/products/\".concat(product._id));\n                    case 4:\n                        data = _ctx.sent.data;\n                        if (!(data.countInStock < quantity)) {\n                            _ctx.next = 7;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(\"Sorry. Product is out of stock\"));\n                    case 7:\n                        dispatch({\n                            type: \"CART_ADD_ITEM\",\n                            payload: _objectSpread({}, product, {\n                                quantity: quantity\n                            })\n                        });\n                        router.push(\"/cart\");\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function addToCartHandler() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        title: product.name,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"py-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/\",\n                    children: \"back to products\"\n                }, void 0, false, {\n                    fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"grid md:grid-cols-4 md:gap-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"md:col-span-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: product.image,\n                            alt: product.name,\n                            width: 640,\n                            height: 640,\n                            layout: \"responsive\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                        className: \"text-lg text-center font-semibold\",\n                                        children: product.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                    className: \"mt-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                            className: \"font-semibold\",\n                                            children: \"Category: \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, this),\n                                        product.category\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                    className: \"mt-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                            className: \"font-semibold\",\n                                            children: \"Brand: \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                                            lineNumber: 60,\n                                            columnNumber: 15\n                                        }, this),\n                                        \" \",\n                                        product.brand\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                    className: \"\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        className: \"font-bold text-lg\",\n                                        children: [\n                                            \"\\u20B9\",\n                                            product.cutPrice,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                className: \"line-through font-normal px-1 h-1 text-sm \",\n                                                children: [\n                                                    \"\\u20B9\",\n                                                    product.price\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                                                lineNumber: 65,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                className: \"font-normal text-sm text-green-600\",\n                                                children: [\n                                                    \"(\",\n                                                    Math.round((product.price - product.cutPrice) / product.price * 100),\n                                                    \"% off)\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                                                lineNumber: 68,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                    children: [\n                                        \"Description: \",\n                                        product.description\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"card p-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"mb-2 flex justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: \"Price\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                                            lineNumber: 83,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: [\n                                                \"\\u20B9\",\n                                                product.cutPrice\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                                            lineNumber: 84,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"mb-2 flex justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: \"Status\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                                            lineNumber: 87,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: product.countInStock > 0 ? \"In stock\" : \"Unavailable\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                                            lineNumber: 88,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"primary-button w-full\",\n                                    onClick: addToCartHandler,\n                                    children: \"Add to cart\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/product/[slug].js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n};\n_s(ProductScreen, \"HedWEmzADlnhtOEM7d3OXHBnVxs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = ProductScreen;\nvar _c;\n$RefreshReg$(_c, \"ProductScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQyxPQUFLOzs7OztnREFBTTtzREFDaEIsOERBQUNBLEtBQUc7O2dEQUFDLFFBQUM7Z0RBQUN0QixPQUFPLENBQUNzQyxRQUFROzs7Ozs7Z0RBQU87Ozs7Ozt3Q0FDMUI7OENBQ04sOERBQUNoQixLQUFHO29DQUFDQyxTQUFTLEVBQUMsMkJBQTJCOztzREFDeEMsOERBQUNELEtBQUc7c0RBQUMsUUFBTTs7Ozs7Z0RBQU07c0RBQ2pCLDhEQUFDQSxLQUFHO3NEQUFFdEIsT0FBTyxDQUFDZ0IsWUFBWSxHQUFHLENBQUMsR0FBRyxVQUFVLEdBQUcsYUFBYTs7Ozs7Z0RBQU87Ozs7Ozt3Q0FDOUQ7OENBQ04sOERBQUMyQixRQUFNO29DQUNMcEIsU0FBUyxFQUFDLHVCQUF1QjtvQ0FDakNxQixPQUFPLEVBQUV2QyxnQkFBZ0I7OENBQzFCLGFBRUQ7Ozs7O3dDQUFTOzs7Ozs7Z0NBQ0w7Ozs7OzRCQUNGOzs7Ozs7b0JBQ0Y7Ozs7OztZQUNDLENBQ1Q7Q0FDSDtHQXpGdUJQLGFBQWE7O1FBR3BCTixrREFBUzs7O0FBSEZNLEtBQUFBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bc2x1Z10uanM/ZGIxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uLy4uL21vZGVscy9Qcm9kdWN0XCI7XG5pbXBvcnQgZGIgZnJvbSBcIi4uLy4uL3V0aWxzL2RiXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuLi8uLi91dGlscy9TdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0U2NyZWVuKHByb3BzKSB7XG4gIGNvbnN0IHsgcHJvZHVjdCB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KFN0b3JlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGlmICghcHJvZHVjdCkge1xuICAgIHJldHVybiA8TGF5b3V0IHRpdGxlPVwiUHJvZHV0IE5vdCBGb3VuZFwiPlByb2R1Y3QgTm90IEZvdW5kPC9MYXlvdXQ+O1xuICB9XG5cbiAgY29uc3QgYWRkVG9DYXJ0SGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBleGlzdEl0ZW0gPSBzdGF0ZS5jYXJ0LmNhcnRJdGVtcy5maW5kKCh4KSA9PiB4LnNsdWcgPT09IHByb2R1Y3Quc2x1Zyk7XG4gICAgY29uc3QgcXVhbnRpdHkgPSBleGlzdEl0ZW0gPyBleGlzdEl0ZW0ucXVhbnRpdHkgKyAxIDogMTtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9wcm9kdWN0cy8ke3Byb2R1Y3QuX2lkfWApO1xuXG4gICAgaWYgKGRhdGEuY291bnRJblN0b2NrIDwgcXVhbnRpdHkpIHtcbiAgICAgIHJldHVybiB0b2FzdC5lcnJvcihcIlNvcnJ5LiBQcm9kdWN0IGlzIG91dCBvZiBzdG9ja1wiKTtcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiQ0FSVF9BRERfSVRFTVwiLCBwYXlsb2FkOiB7IC4uLnByb2R1Y3QsIHF1YW50aXR5IH0gfSk7XG4gICAgcm91dGVyLnB1c2goXCIvY2FydFwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9e3Byb2R1Y3QubmFtZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTJcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5iYWNrIHRvIHByb2R1Y3RzPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTQgbWQ6Z2FwLTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0yXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2V9XG4gICAgICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX1cbiAgICAgICAgICAgIHdpZHRoPXs2NDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezY0MH1cbiAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgID48L0ltYWdlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtY2VudGVyIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtdC0yXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5DYXRlZ29yeTogPC9zcGFuPlxuICAgICAgICAgICAgICB7cHJvZHVjdC5jYXRlZ29yeX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+QnJhbmQ6IDwvc3Bhbj4ge3Byb2R1Y3QuYnJhbmR9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZ1wiPlxuICAgICAgICAgICAgICAgIOKCuXtwcm9kdWN0LmN1dFByaWNlfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmUtdGhyb3VnaCBmb250LW5vcm1hbCBweC0xIGgtMSB0ZXh0LXNtIFwiPlxuICAgICAgICAgICAgICAgICAg4oK5e3Byb2R1Y3QucHJpY2V9XG4gICAgICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LXNtIHRleHQtZ3JlZW4tNjAwXCI+XG4gICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICB7TWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICAgICAgKChwcm9kdWN0LnByaWNlIC0gcHJvZHVjdC5jdXRQcmljZSkgLyBwcm9kdWN0LnByaWNlKSAqIDEwMFxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICUgb2ZmKVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5EZXNjcmlwdGlvbjoge3Byb2R1Y3QuZGVzY3JpcHRpb259PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgcC01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTIgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdj5QcmljZTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PuKCuXtwcm9kdWN0LmN1dFByaWNlfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTIgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdj5TdGF0dXM8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj57cHJvZHVjdC5jb3VudEluU3RvY2sgPiAwID8gXCJJbiBzdG9ja1wiIDogXCJVbmF2YWlsYWJsZVwifTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByaW1hcnktYnV0dG9uIHctZnVsbFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZFRvQ2FydEhhbmRsZXJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFkZCB0byBjYXJ0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHsgcGFyYW1zIH0gPSBjb250ZXh0O1xuICBjb25zdCB7IHNsdWcgfSA9IHBhcmFtcztcblxuICBhd2FpdCBkYi5jb25uZWN0KCk7XG4gIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBQcm9kdWN0LmZpbmRPbmUoeyBzbHVnIH0pLmxlYW4oKTtcbiAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0OiBwcm9kdWN0ID8gZGIuY29udmVydERvY1RvT2JqKHByb2R1Y3QpIDogbnVsbCxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiSW1hZ2UiLCJMaW5rIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwidG9hc3QiLCJMYXlvdXQiLCJTdG9yZSIsIlByb2R1Y3RTY3JlZW4iLCJwcm9wcyIsInByb2R1Y3QiLCJzdGF0ZSIsImRpc3BhdGNoIiwicm91dGVyIiwidGl0bGUiLCJhZGRUb0NhcnRIYW5kbGVyIiwiZXhpc3RJdGVtIiwicXVhbnRpdHkiLCJkYXRhIiwiY2FydCIsImNhcnRJdGVtcyIsImZpbmQiLCJ4Iiwic2x1ZyIsImdldCIsIl9pZCIsImNvdW50SW5TdG9jayIsImVycm9yIiwidHlwZSIsInBheWxvYWQiLCJwdXNoIiwibmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJzcmMiLCJpbWFnZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibGF5b3V0IiwidWwiLCJsaSIsImgxIiwic3BhbiIsImNhdGVnb3J5IiwiYnJhbmQiLCJwIiwiY3V0UHJpY2UiLCJwcmljZSIsIk1hdGgiLCJyb3VuZCIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n");

/***/ })

});