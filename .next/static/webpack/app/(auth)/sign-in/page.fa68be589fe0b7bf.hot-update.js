"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/sign-in/page",{

/***/ "(app-pages-browser)/./components/ui/CustomInput.tsx":
/*!***************************************!*\
  !*** ./components/ui/CustomInput.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ \"(app-pages-browser)/./components/ui/form.tsx\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n\n\n\n\n\nconst formSchema = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.authFormSchema)(\"sign-up\");\nconst CustomInput = (param)=>{\n    let { control, name, label, placeholder } = param;\n    console.log(name);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form__WEBPACK_IMPORTED_MODULE_2__.FormField, {\n        control: control,\n        name: name,\n        render: (param)=>{\n            let { field } = param;\n            return(//     Shad cn copy paste form\n            //   <FormItem>\n            //     <div className=\"form-item\">\n            //       <FormLabel>Email</FormLabel>\n            //     </div>\n            //     <FormControl>\n            //       <Input placeholder=\"email\" {...field} />\n            //     </FormControl>\n            //     <FormDescription>\n            //       This is your public display name.\n            //     </FormDescription>\n            //     <FormMessage />\n            //   </FormItem>\n            // Custom made form field\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                        className: \"form-label\",\n                        htmlFor: name,\n                        children: label\n                    }, void 0, false, {\n                        fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\CustomInput.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, void 0),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    id: name,\n                                    placeholder: placeholder,\n                                    className: \"input-class\",\n                                    type: name === \"password\" ? \"password\" : \"text\",\n                                    ...field\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\CustomInput.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, void 0)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\CustomInput.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, void 0),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form__WEBPACK_IMPORTED_MODULE_2__.FormMessage, {\n                                className: \"form-message mt-2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\CustomInput.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, void 0)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\CustomInput.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, void 0)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\CustomInput.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, void 0));\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\CustomInput.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CustomInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomInput);\nvar _c;\n$RefreshReg$(_c, \"CustomInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvQ3VzdG9tSW5wdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQzhDO0FBQ3hDO0FBR2E7QUFFN0MsTUFBTU8sYUFBYUQsMERBQWNBLENBQUM7QUFhbEMsTUFBTUUsY0FBYztRQUFDLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBZTtJQUNyRUMsUUFBUUMsR0FBRyxDQUFDSjtJQUNaLHFCQUNFLDhEQUFDUiw0Q0FBU0E7UUFDUk8sU0FBU0E7UUFDVEMsTUFBTUE7UUFDTkssUUFBUTtnQkFBQyxFQUFFQyxLQUFLLEVBQUU7bUJBQ2hCLDhCQUE4QjtZQUM5QixlQUFlO1lBQ2Ysa0NBQWtDO1lBQ2xDLHFDQUFxQztZQUNyQyxhQUFhO1lBQ2Isb0JBQW9CO1lBQ3BCLGlEQUFpRDtZQUNqRCxxQkFBcUI7WUFDckIsd0JBQXdCO1lBQ3hCLDBDQUEwQztZQUMxQyx5QkFBeUI7WUFDekIsc0JBQXNCO1lBQ3RCLGdCQUFnQjtZQUVoQix5QkFBeUI7MEJBQ3pCLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNmLDRDQUFTQTt3QkFBQ2UsV0FBVTt3QkFBYUMsU0FBU1Q7a0NBQ3hDQzs7Ozs7O2tDQUVILDhEQUFDTTt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNqQiw4Q0FBV0E7MENBQ1YsNEVBQUNJLHlDQUFLQTtvQ0FDSmUsSUFBSVY7b0NBQ0pFLGFBQWFBO29DQUNiTSxXQUFVO29DQUNWRyxNQUFNWCxTQUFTLGFBQWEsYUFBYTtvQ0FDeEMsR0FBR00sS0FBSzs7Ozs7Ozs7Ozs7MENBR2IsOERBQUNaLDhDQUFXQTtnQ0FBQ2MsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5DO0tBMUNNVjtBQTRDTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL0N1c3RvbUlucHV0LnRzeD8xYjMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1GaWVsZCwgRm9ybUxhYmVsLCBGb3JtTWVzc2FnZSB9IGZyb20gXCIuL2Zvcm1cIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi9pbnB1dFwiO1xyXG5pbXBvcnQgeyBDb250cm9sLCBGaWVsZFBhdGggfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XHJcbmltcG9ydCB7IGF1dGhGb3JtU2NoZW1hIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XHJcblxyXG5jb25zdCBmb3JtU2NoZW1hID0gYXV0aEZvcm1TY2hlbWEoXCJzaWduLXVwXCIpO1xyXG5cclxuaW50ZXJmYWNlIEN1c3RvbUlucHV0IHtcclxuICBjb250cm9sOiBDb250cm9sPHouaW5mZXI8dHlwZW9mIGZvcm1TY2hlbWE+PjtcclxuICAvLyAgIHRoaXMgd2F5IHdlIGhhdmUgdG8gcHV0IGV2ZXJ5IHR5cGUgb2YgJ25hbWUnIHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIGl0IChsaWtlIGVtYWlsLHBhc3N3b3JkLHVzZXJuYW1lLCBkb2IsIGFkZHJlc3MsIG1vYmlsZSBubyApJ3MgdHlwZSlcclxuICAvLyAgIG5hbWU6IFwiZW1haWxcIiB8IFwicGFzc3dvcmRcIjtcclxuXHJcbiAgLy8gICB0aHVzIHRoaXMgbWV0aG9kIGlzIHVzZWRcclxuICBuYW1lOiBGaWVsZFBhdGg8ei5pbmZlcjx0eXBlb2YgZm9ybVNjaGVtYT4+O1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQ3VzdG9tSW5wdXQgPSAoeyBjb250cm9sLCBuYW1lLCBsYWJlbCwgcGxhY2Vob2xkZXIgfTogQ3VzdG9tSW5wdXQpID0+IHtcclxuICBjb25zb2xlLmxvZyhuYW1lKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1GaWVsZFxyXG4gICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcclxuICAgICAgICAvLyAgICAgU2hhZCBjbiBjb3B5IHBhc3RlIGZvcm1cclxuICAgICAgICAvLyAgIDxGb3JtSXRlbT5cclxuICAgICAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWl0ZW1cIj5cclxuICAgICAgICAvLyAgICAgICA8Rm9ybUxhYmVsPkVtYWlsPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgLy8gICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgLy8gICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiZW1haWxcIiB7Li4uZmllbGR9IC8+XHJcbiAgICAgICAgLy8gICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgLy8gICAgIDxGb3JtRGVzY3JpcHRpb24+XHJcbiAgICAgICAgLy8gICAgICAgVGhpcyBpcyB5b3VyIHB1YmxpYyBkaXNwbGF5IG5hbWUuXHJcbiAgICAgICAgLy8gICAgIDwvRm9ybURlc2NyaXB0aW9uPlxyXG4gICAgICAgIC8vICAgICA8Rm9ybU1lc3NhZ2UgLz5cclxuICAgICAgICAvLyAgIDwvRm9ybUl0ZW0+XHJcblxyXG4gICAgICAgIC8vIEN1c3RvbSBtYWRlIGZvcm0gZmllbGRcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taXRlbVwiPlxyXG4gICAgICAgICAgPEZvcm1MYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCIgaHRtbEZvcj17bmFtZX0+XHJcbiAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBpZD17bmFtZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWNsYXNzXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9e25hbWUgPT09IFwicGFzc3dvcmRcIiA/IFwicGFzc3dvcmRcIiA6IFwidGV4dFwifVxyXG4gICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDxGb3JtTWVzc2FnZSBjbGFzc05hbWU9XCJmb3JtLW1lc3NhZ2UgbXQtMlwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUlucHV0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtQ29udHJvbCIsIkZvcm1GaWVsZCIsIkZvcm1MYWJlbCIsIkZvcm1NZXNzYWdlIiwiSW5wdXQiLCJhdXRoRm9ybVNjaGVtYSIsImZvcm1TY2hlbWEiLCJDdXN0b21JbnB1dCIsImNvbnRyb2wiLCJuYW1lIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJmaWVsZCIsImRpdiIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJpZCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/CustomInput.tsx\n"));

/***/ })

});