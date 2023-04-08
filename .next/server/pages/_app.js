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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @paypal/react-paypal-js */ \"@paypal/react-paypal-js\");\n/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_Store__WEBPACK_IMPORTED_MODULE_3__]);\n_utils_Store__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_Store__WEBPACK_IMPORTED_MODULE_3__.StoreProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5__.PayPalScriptProvider, {\n                deferLoading: true,\n                children: Component.auth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Auth, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/_app.js\",\n                        lineNumber: 14,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/_app.js\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/_app.js\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/_app.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/_app.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\nfunction Auth({ children  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)({\n        required: true,\n        onUnauthenticated () {\n            router.push(\"/unauthorized?message=login required\");\n        }\n    });\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/vansharora/Desktop/rk/rk/rk/pages/_app.js\",\n            lineNumber: 34,\n            columnNumber: 12\n        }, this);\n    }\n    return children;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQytCO0FBQ2Y7QUFDUDtBQUN1QjtBQUUvRCxTQUFTSyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEVBQUUsRUFBRUMsT0FBTyxHQUFFLEdBQUdELFNBQVMsRUFBRSxHQUFFLEVBQUU7SUFDbEUscUJBQ0UsOERBQUNQLDREQUFlO1FBQUNRLE9BQU8sRUFBRUEsT0FBTztrQkFDL0IsNEVBQUNOLHVEQUFhO3NCQUNaLDRFQUFDRSx5RUFBb0I7Z0JBQUNLLFlBQVksRUFBRSxJQUFJOzBCQUNyQ0gsU0FBUyxDQUFDSSxJQUFJLGlCQUNiLDhEQUFDQyxJQUFJOzhCQUNILDRFQUFDTCxTQUFTO3dCQUFFLEdBQUdDLFNBQVM7Ozs7OzRCQUFJOzs7Ozt3QkFDdkIsaUJBRVAsOERBQUNELFNBQVM7b0JBQUUsR0FBR0MsU0FBUzs7Ozs7d0JBQUk7Ozs7O29CQUVUOzs7OztnQkFDVDs7Ozs7WUFDQSxDQUNsQjtDQUNIO0FBRUQsU0FBU0ksSUFBSSxDQUFDLEVBQUVDLFFBQVEsR0FBRSxFQUFFO0lBQzFCLE1BQU1DLE1BQU0sR0FBR1Ysc0RBQVMsRUFBRTtJQUMxQixNQUFNLEVBQUVXLE1BQU0sR0FBRSxHQUFHYiwyREFBVSxDQUFDO1FBQzVCYyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxpQkFBaUIsSUFBRztZQUNsQkgsTUFBTSxDQUFDSSxJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQztTQUNyRDtLQUNGLENBQUM7SUFDRixJQUFJSCxNQUFNLEtBQUssU0FBUyxFQUFFO1FBQ3hCLHFCQUFPLDhEQUFDSSxLQUFHO3NCQUFDLFlBQVU7Ozs7O2dCQUFNLENBQUM7S0FDOUI7SUFFRCxPQUFPTixRQUFRLENBQUM7Q0FDakI7QUFFRCxpRUFBZVAsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10YWlsd2luZC1hbWF6b25hLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyLCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgU3RvcmVQcm92aWRlciB9IGZyb20gXCIuLi91dGlscy9TdG9yZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBQYXlQYWxTY3JpcHRQcm92aWRlciB9IGZyb20gXCJAcGF5cGFsL3JlYWN0LXBheXBhbC1qc1wiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxuICAgICAgPFN0b3JlUHJvdmlkZXI+XG4gICAgICAgIDxQYXlQYWxTY3JpcHRQcm92aWRlciBkZWZlckxvYWRpbmc9e3RydWV9PlxuICAgICAgICAgIHtDb21wb25lbnQuYXV0aCA/IChcbiAgICAgICAgICAgIDxBdXRoPlxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0F1dGg+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1BheVBhbFNjcmlwdFByb3ZpZGVyPlxuICAgICAgPC9TdG9yZVByb3ZpZGVyPlxuICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICApO1xufVxuXG5mdW5jdGlvbiBBdXRoKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBzdGF0dXMgfSA9IHVzZVNlc3Npb24oe1xuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIG9uVW5hdXRoZW50aWNhdGVkKCkge1xuICAgICAgcm91dGVyLnB1c2goXCIvdW5hdXRob3JpemVkP21lc3NhZ2U9bG9naW4gcmVxdWlyZWRcIik7XG4gICAgfSxcbiAgfSk7XG4gIGlmIChzdGF0dXMgPT09IFwibG9hZGluZ1wiKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiU2Vzc2lvblByb3ZpZGVyIiwidXNlU2Vzc2lvbiIsIlN0b3JlUHJvdmlkZXIiLCJ1c2VSb3V0ZXIiLCJQYXlQYWxTY3JpcHRQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiIsImRlZmVyTG9hZGluZyIsImF1dGgiLCJBdXRoIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJzdGF0dXMiLCJyZXF1aXJlZCIsIm9uVW5hdXRoZW50aWNhdGVkIiwicHVzaCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./utils/Store.js":
/*!************************!*\
  !*** ./utils/Store.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Store\": () => (/* binding */ Store),\n/* harmony export */   \"StoreProvider\": () => (/* binding */ StoreProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Store = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst initialState = {\n    cart: js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"cart\") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"cart\")) : {\n        cartItems: [],\n        shippingAddress: {},\n        paymentMethod: \"\"\n    }\n};\nfunction reducer(state, action) {\n    switch(action.type){\n        case \"CART_ADD_ITEM\":\n            {\n                const newItem = action.payload;\n                const existItem = state.cart.cartItems.find((item)=>item.slug === newItem.slug\n                );\n                const cartItems = existItem ? state.cart.cartItems.map((item)=>item.name === existItem.name ? newItem : item\n                ) : [\n                    ...state.cart.cartItems,\n                    newItem\n                ];\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"cart\", JSON.stringify({\n                    ...state.cart,\n                    cartItems\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        case \"CART_REMOVE_ITEM\":\n            {\n                const cartItems = state.cart.cartItems.filter((item)=>item.slug !== action.payload.slug\n                );\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"cart\", JSON.stringify({\n                    ...state.cart,\n                    cartItems\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        case \"CART_RESET\":\n            return {\n                ...state,\n                cart: {\n                    cartItems: [],\n                    shippingAddress: {\n                        location: {}\n                    },\n                    paymentMethod: \"\"\n                }\n            };\n        case \"CART_CLEAR_ITEMS\":\n            return {\n                ...state,\n                cart: {\n                    ...state.cart,\n                    cartItems: []\n                }\n            };\n        case \"SAVE_SHIPPING_ADDRESS\":\n            return {\n                ...state,\n                cart: {\n                    ...state.cart,\n                    shippingAddress: {\n                        ...state.cart.shippingAddress,\n                        ...action.payload\n                    }\n                }\n            };\n        case \"SAVE_PAYMENT_METHOD\":\n            return {\n                ...state,\n                cart: {\n                    ...state.cart,\n                    paymentMethod: action.payload\n                }\n            };\n        default:\n            return state;\n    }\n}\nfunction StoreProvider({ children  }) {\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    const value = {\n        state,\n        dispatch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Store.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/vansharora/Desktop/rk/rk/rk/utils/Store.js\",\n        lineNumber: 74,\n        columnNumber: 10\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNSLElBQUk7b0JBQ2JLLGVBQWUsRUFBRTt3QkFDZixHQUFHRyxLQUFLLENBQUNSLElBQUksQ0FBQ0ssZUFBZTt3QkFDN0IsR0FBR0ksTUFBTSxDQUFDRyxPQUFPO3FCQUNsQjtpQkFDRjthQUNGLENBQUM7UUFDSixLQUFLLHFCQUFxQjtZQUN4QixPQUFPO2dCQUNMLEdBQUdKLEtBQUs7Z0JBQ1JSLElBQUksRUFBRTtvQkFDSixHQUFHUSxLQUFLLENBQUNSLElBQUk7b0JBQ2JNLGFBQWEsRUFBRUcsTUFBTSxDQUFDRyxPQUFPO2lCQUM5QjthQUNGLENBQUM7UUFDSjtZQUNFLE9BQU9KLEtBQUssQ0FBQztLQUNoQjtDQUNGO0FBRU0sU0FBU2UsYUFBYSxDQUFDLEVBQUVDLFFBQVEsR0FBRSxFQUFFO0lBQzFDLE1BQU0sRUF2RVIsR0F1RVNoQixLQUFLLEdBdkVkLEdBdUVnQmlCLFFBQVEsTUFBSTdCLGlEQUFVLENBQUNXLE9BQU8sRUFBRVIsWUFBWSxDQUFDO0lBQzNELE1BQU0yQixLQUFLLEdBQUc7UUFBRWxCLEtBQUs7UUFBRWlCLFFBQVE7S0FBRTtJQUNqQyxxQkFBTyw4REFBQzNCLEtBQUssQ0FBQzZCLFFBQVE7UUFBQ0QsS0FBSyxFQUFFQSxLQUFLO2tCQUFHRixRQUFROzs7OztZQUFrQixDQUFDO0NBQ2xFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10YWlsd2luZC1hbWF6b25hLy4vdXRpbHMvU3RvcmUuanM/OGI4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcblxuZXhwb3J0IGNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGNhcnQ6IENvb2tpZXMuZ2V0KCdjYXJ0JylcbiAgICA/IEpTT04ucGFyc2UoQ29va2llcy5nZXQoJ2NhcnQnKSlcbiAgICA6IHsgY2FydEl0ZW1zOiBbXSwgc2hpcHBpbmdBZGRyZXNzOiB7fSwgcGF5bWVudE1ldGhvZDogJycgfSxcbn07XG5cblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdDQVJUX0FERF9JVEVNJzoge1xuICAgICAgY29uc3QgbmV3SXRlbSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgZXhpc3RJdGVtID0gc3RhdGUuY2FydC5jYXJ0SXRlbXMuZmluZChcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uc2x1ZyA9PT0gbmV3SXRlbS5zbHVnXG4gICAgICApO1xuICAgICAgY29uc3QgY2FydEl0ZW1zID0gZXhpc3RJdGVtXG4gICAgICAgID8gc3RhdGUuY2FydC5jYXJ0SXRlbXMubWFwKChpdGVtKSA9PlxuICAgICAgICAgICAgaXRlbS5uYW1lID09PSBleGlzdEl0ZW0ubmFtZSA/IG5ld0l0ZW0gOiBpdGVtXG4gICAgICAgICAgKVxuICAgICAgICA6IFsuLi5zdGF0ZS5jYXJ0LmNhcnRJdGVtcywgbmV3SXRlbV07XG4gICAgICBDb29raWVzLnNldCgnY2FydCcsIEpTT04uc3RyaW5naWZ5KHsgLi4uc3RhdGUuY2FydCwgY2FydEl0ZW1zIH0pKTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXJ0OiB7IC4uLnN0YXRlLmNhcnQsIGNhcnRJdGVtcyB9IH07XG4gICAgfVxuICAgIGNhc2UgJ0NBUlRfUkVNT1ZFX0lURU0nOiB7XG4gICAgICBjb25zdCBjYXJ0SXRlbXMgPSBzdGF0ZS5jYXJ0LmNhcnRJdGVtcy5maWx0ZXIoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLnNsdWcgIT09IGFjdGlvbi5wYXlsb2FkLnNsdWdcbiAgICAgICk7XG4gICAgICBDb29raWVzLnNldCgnY2FydCcsIEpTT04uc3RyaW5naWZ5KHsgLi4uc3RhdGUuY2FydCwgY2FydEl0ZW1zIH0pKTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXJ0OiB7IC4uLnN0YXRlLmNhcnQsIGNhcnRJdGVtcyB9IH07XG4gICAgfVxuICAgIGNhc2UgJ0NBUlRfUkVTRVQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnQ6IHtcbiAgICAgICAgICBjYXJ0SXRlbXM6IFtdLFxuICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczogeyBsb2NhdGlvbjoge30gfSxcbiAgICAgICAgICBwYXltZW50TWV0aG9kOiAnJyxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSAnQ0FSVF9DTEVBUl9JVEVNUyc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXM6IFtdIH0gfTtcblxuICAgIGNhc2UgJ1NBVkVfU0hJUFBJTkdfQUREUkVTUyc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydDoge1xuICAgICAgICAgIC4uLnN0YXRlLmNhcnQsXG4gICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7XG4gICAgICAgICAgICAuLi5zdGF0ZS5jYXJ0LnNoaXBwaW5nQWRkcmVzcyxcbiAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgJ1NBVkVfUEFZTUVOVF9NRVRIT0QnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnQ6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5jYXJ0LFxuICAgICAgICAgIHBheW1lbnRNZXRob2Q6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTdG9yZVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcbiAgY29uc3QgdmFsdWUgPSB7IHN0YXRlLCBkaXNwYXRjaCB9O1xuICByZXR1cm4gPFN0b3JlLlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvU3RvcmUuUHJvdmlkZXI+O1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwiQ29va2llcyIsIlN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiY2FydCIsImdldCIsIkpTT04iLCJwYXJzZSIsImNhcnRJdGVtcyIsInNoaXBwaW5nQWRkcmVzcyIsInBheW1lbnRNZXRob2QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibmV3SXRlbSIsInBheWxvYWQiLCJleGlzdEl0ZW0iLCJmaW5kIiwiaXRlbSIsInNsdWciLCJtYXAiLCJuYW1lIiwic2V0Iiwic3RyaW5naWZ5IiwiZmlsdGVyIiwibG9jYXRpb24iLCJTdG9yZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInZhbHVlIiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/Store.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@paypal/react-paypal-js":
/*!******************************************!*\
  !*** external "@paypal/react-paypal-js" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@paypal/react-paypal-js");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();