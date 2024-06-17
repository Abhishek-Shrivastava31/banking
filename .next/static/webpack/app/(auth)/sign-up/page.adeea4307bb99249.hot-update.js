"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/sign-up/page",{

/***/ "(app-pages-browser)/./components/ui/AuthForm.tsx":
/*!************************************!*\
  !*** ./components/ui/AuthForm.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! zod */ \"(app-pages-browser)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/form */ \"(app-pages-browser)/./components/ui/form.tsx\");\n/* harmony import */ var _CustomInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomInput */ \"(app-pages-browser)/./components/ui/CustomInput.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst formSchema = zod__WEBPACK_IMPORTED_MODULE_8__.z.object({\n    email: zod__WEBPACK_IMPORTED_MODULE_8__.z.string().email()\n});\nconst AuthForm = (param)=>{\n    let { type } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    // 1. Define your form.\n    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_4__.zodResolver)(formSchema),\n        defaultValues: {\n            email: \"\"\n        }\n    });\n    // 2. Define a submit handler.\n    function onSubmit(values) {\n        // Do something with the form values.\n        // ✅ This will be type-safe and validated.\n        console.log(values);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"auth-form\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"flex flex-col gap-5 md:gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/\",\n                        className: \" cursor-pointer flex items-center gap-1 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                src: \"/icons/logo.svg\",\n                                width: 34,\n                                height: 34,\n                                alt: \"Horizon Logo\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\AuthForm.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-26 font-ibm-plex-serif font-bold text-black-1 \",\n                                children: \"Horizon\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\AuthForm.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\AuthForm.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-1 md:gap-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-24 lg:text-36 font-semibold text-gray-900\",\n                                children: user ? \"Link Account\" : type === \"sign-in\" ? \"Sign-In\" : \"Sign-Up\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\AuthForm.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-16  font-normal text-gray-600\",\n                                children: user ? \"Link Your account to get started\" : \"Please enter your details\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\AuthForm.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\AuthForm.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\AuthForm.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-4\"\n            }, void 0, false, {\n                fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\AuthForm.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    ...form,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: form.handleSubmit(onSubmit),\n                        className: \"space-y-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomInput__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                control: form.control,\n                                name: \"email\",\n                                label: \"Email\",\n                                placeholder: \"Enter your Email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\AuthForm.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomInput__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                control: form.control,\n                                name: \"password\",\n                                label: \"Password\",\n                                placeholder: \"Enter your Password\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\AuthForm.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                type: \"submit\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\AuthForm.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\AuthForm.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\AuthForm.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\AuthForm.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthForm, \"ARGI7YtAWSJWPfUWEasldGu4CMs=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm\n    ];\n});\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nAuthForm;\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvQXV0aEZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQytCO0FBQ0Y7QUFDVztBQUNoQjtBQUM4QjtBQUNaO0FBQ007QUFTbEI7QUFFVTtBQUV4QyxNQUFNVSxhQUFhTixrQ0FBQ0EsQ0FBQ08sTUFBTSxDQUFDO0lBQzFCQyxPQUFPUixrQ0FBQ0EsQ0FBQ1MsTUFBTSxHQUFHRCxLQUFLO0FBQ3pCO0FBRUEsTUFBTUUsV0FBVztRQUFDLEVBQUVDLElBQUksRUFBb0I7O0lBQzFDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUVqQyx1QkFBdUI7SUFDdkIsTUFBTWUsT0FBT1osd0RBQU9BLENBQTZCO1FBQy9DYSxVQUFVZCxvRUFBV0EsQ0FBQ0s7UUFDdEJVLGVBQWU7WUFDYlIsT0FBTztRQUNUO0lBQ0Y7SUFFQSw4QkFBOEI7SUFDOUIsU0FBU1MsU0FBU0MsTUFBa0M7UUFDbEQscUNBQXFDO1FBQ3JDLDBDQUEwQztRQUMxQ0MsUUFBUUMsR0FBRyxDQUFDRjtJQUNkO0lBRUEscUJBQ0UsOERBQUNHO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ0M7Z0JBQU9ELFdBQVU7O2tDQUNoQiw4REFBQ3pCLGlEQUFJQTt3QkFBQzJCLE1BQUs7d0JBQUlGLFdBQVU7OzBDQUN2Qiw4REFBQzFCLGtEQUFLQTtnQ0FDSjZCLEtBQUk7Z0NBQ0pDLE9BQU87Z0NBQ1BDLFFBQVE7Z0NBQ1JDLEtBQUk7Ozs7OzswQ0FFTiw4REFBQ0M7Z0NBQUdQLFdBQVU7MENBQXNEOzs7Ozs7Ozs7Ozs7a0NBS3RFLDhEQUFDUTt3QkFBSVIsV0FBVTs7MENBQ2IsOERBQUNPO2dDQUFHUCxXQUFVOzBDQUNYVixPQUFPLGlCQUFpQkQsU0FBUyxZQUFZLFlBQVk7Ozs7OzswQ0FFNUQsOERBQUNvQjtnQ0FBRVQsV0FBVTswQ0FDVlYsT0FDRyxxQ0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSVRBLHFCQUNDLDhEQUFDa0I7Z0JBQUlSLFdBQVU7Ozs7OzBDQUlmOzBCQUNFLDRFQUFDbEIscURBQUlBO29CQUFFLEdBQUdVLElBQUk7OEJBQ1osNEVBQUNBO3dCQUFLRyxVQUFVSCxLQUFLa0IsWUFBWSxDQUFDZjt3QkFBV0ssV0FBVTs7MENBQ3JELDhEQUFDakIsb0RBQVdBO2dDQUNWNEIsU0FBU25CLEtBQUttQixPQUFPO2dDQUNyQkMsTUFBSztnQ0FDTEMsT0FBTTtnQ0FDTkMsYUFBWTs7Ozs7OzBDQUVkLDhEQUFDL0Isb0RBQVdBO2dDQUNWNEIsU0FBU25CLEtBQUttQixPQUFPO2dDQUNyQkMsTUFBSztnQ0FDTEMsT0FBTTtnQ0FDTkMsYUFBWTs7Ozs7OzBDQUVkLDhEQUFDakMseURBQU1BO2dDQUFDUSxNQUFLOzBDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEM7R0F2RU1EOztRQUlTUixvREFBT0E7OztLQUpoQlE7QUF5RU4sK0RBQWVBLFFBQVFBLEVBQUM7QUFDeEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvQXV0aEZvcm0udHN4PzlkMDQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xyXG5pbXBvcnQgeyB6b2RSZXNvbHZlciB9IGZyb20gXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3pvZFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybURlc2NyaXB0aW9uLFxyXG4gIEZvcm1GaWVsZCxcclxuICBGb3JtSXRlbSxcclxuICBGb3JtTGFiZWwsXHJcbiAgRm9ybU1lc3NhZ2UsXHJcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9mb3JtXCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xyXG5pbXBvcnQgQ3VzdG9tSW5wdXQgZnJvbSBcIi4vQ3VzdG9tSW5wdXRcIjtcclxuXHJcbmNvbnN0IGZvcm1TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcclxufSk7XHJcblxyXG5jb25zdCBBdXRoRm9ybSA9ICh7IHR5cGUgfTogeyB0eXBlOiBzdHJpbmcgfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyAxLiBEZWZpbmUgeW91ciBmb3JtLlxyXG4gIGNvbnN0IGZvcm0gPSB1c2VGb3JtPHouaW5mZXI8dHlwZW9mIGZvcm1TY2hlbWE+Pih7XHJcbiAgICByZXNvbHZlcjogem9kUmVzb2x2ZXIoZm9ybVNjaGVtYSksXHJcbiAgICBkZWZhdWx0VmFsdWVzOiB7XHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gMi4gRGVmaW5lIGEgc3VibWl0IGhhbmRsZXIuXHJcbiAgZnVuY3Rpb24gb25TdWJtaXQodmFsdWVzOiB6LmluZmVyPHR5cGVvZiBmb3JtU2NoZW1hPikge1xyXG4gICAgLy8gRG8gc29tZXRoaW5nIHdpdGggdGhlIGZvcm0gdmFsdWVzLlxyXG4gICAgLy8g4pyFIFRoaXMgd2lsbCBiZSB0eXBlLXNhZmUgYW5kIHZhbGlkYXRlZC5cclxuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXV0aC1mb3JtXCI+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNSBtZDpnYXAtOFwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xIFwiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9pY29ucy9sb2dvLnN2Z1wiXHJcbiAgICAgICAgICAgIHdpZHRoPXszNH1cclxuICAgICAgICAgICAgaGVpZ2h0PXszNH1cclxuICAgICAgICAgICAgYWx0PVwiSG9yaXpvbiBMb2dvXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yNiBmb250LWlibS1wbGV4LXNlcmlmIGZvbnQtYm9sZCB0ZXh0LWJsYWNrLTEgXCI+XHJcbiAgICAgICAgICAgIEhvcml6b25cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTEgbWQ6Z2FwLTNcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTI0IGxnOnRleHQtMzYgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgIHt1c2VyID8gXCJMaW5rIEFjY291bnRcIiA6IHR5cGUgPT09IFwic2lnbi1pblwiID8gXCJTaWduLUluXCIgOiBcIlNpZ24tVXBcIn1cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTE2ICBmb250LW5vcm1hbCB0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgIHt1c2VyXHJcbiAgICAgICAgICAgICAgPyBcIkxpbmsgWW91ciBhY2NvdW50IHRvIGdldCBzdGFydGVkXCJcclxuICAgICAgICAgICAgICA6IFwiUGxlYXNlIGVudGVyIHlvdXIgZGV0YWlsc1wifVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XHJcbiAgICAgICAgICB7LyogUGxhaWQgTGluayB0byBsaW5rIGJhbmsgYWNjb3VudCAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEZvcm0gey4uLmZvcm19PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybS5oYW5kbGVTdWJtaXQob25TdWJtaXQpfSBjbGFzc05hbWU9XCJzcGFjZS15LThcIj5cclxuICAgICAgICAgICAgICA8Q3VzdG9tSW5wdXRcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e2Zvcm0uY29udHJvbH1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBFbWFpbFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Q3VzdG9tSW5wdXRcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e2Zvcm0uY29udHJvbH1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybTtcclxuQXV0aEZvcm07XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwieiIsInpvZFJlc29sdmVyIiwidXNlRm9ybSIsIkJ1dHRvbiIsIkZvcm0iLCJDdXN0b21JbnB1dCIsImZvcm1TY2hlbWEiLCJvYmplY3QiLCJlbWFpbCIsInN0cmluZyIsIkF1dGhGb3JtIiwidHlwZSIsInVzZXIiLCJzZXRVc2VyIiwiZm9ybSIsInJlc29sdmVyIiwiZGVmYXVsdFZhbHVlcyIsIm9uU3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJocmVmIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJoMSIsImRpdiIsInAiLCJoYW5kbGVTdWJtaXQiLCJjb250cm9sIiwibmFtZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/AuthForm.tsx\n"));

/***/ })

});