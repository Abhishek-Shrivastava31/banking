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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ \"(app-pages-browser)/./components/ui/form.tsx\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n\n\n\n\nconst CustomInput = (param)=>{\n    let { control, name, label, placeholder } = param;\n    console.log(name);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form__WEBPACK_IMPORTED_MODULE_2__.FormField, {\n        control: control,\n        name: name,\n        render: (param)=>{\n            let { field } = param;\n            return(//     Shad cn copy paste form\n            //   <FormItem>\n            //     <div className=\"form-item\">\n            //       <FormLabel>Email</FormLabel>\n            //     </div>\n            //     <FormControl>\n            //       <Input placeholder=\"email\" {...field} />\n            //     </FormControl>\n            //     <FormDescription>\n            //       This is your public display name.\n            //     </FormDescription>\n            //     <FormMessage />\n            //   </FormItem>\n            // Custom made form field\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                        className: \"form-label\",\n                        htmlFor: name,\n                        children: label\n                    }, void 0, false, {\n                        fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\CustomInput.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, void 0),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    id: name,\n                                    placeholder: placeholder,\n                                    className: \"input-class\",\n                                    type: name === \"password\" ? \"text\" : \"password\",\n                                    ...field\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\CustomInput.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, void 0)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\CustomInput.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, void 0),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form__WEBPACK_IMPORTED_MODULE_2__.FormMessage, {\n                                className: \"form-message mt-2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\CustomInput.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, void 0)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\CustomInput.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, void 0)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\CustomInput.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, void 0));\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\zzzzzzzzzzz\\\\Coding\\\\React JS\\\\nextjs_banking\\\\banking\\\\components\\\\ui\\\\CustomInput.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CustomInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomInput);\nvar _c;\n$RefreshReg$(_c, \"CustomInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvQ3VzdG9tSW5wdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFDOEM7QUFDeEM7QUFlaEMsTUFBTU0sY0FBYztRQUFDLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBZTtJQUNyRUMsUUFBUUMsR0FBRyxDQUFDSjtJQUNaLHFCQUNFLDhEQUFDTiw0Q0FBU0E7UUFDUkssU0FBU0E7UUFDVEMsTUFBTUE7UUFDTkssUUFBUTtnQkFBQyxFQUFFQyxLQUFLLEVBQUU7bUJBQ2hCLDhCQUE4QjtZQUM5QixlQUFlO1lBQ2Ysa0NBQWtDO1lBQ2xDLHFDQUFxQztZQUNyQyxhQUFhO1lBQ2Isb0JBQW9CO1lBQ3BCLGlEQUFpRDtZQUNqRCxxQkFBcUI7WUFDckIsd0JBQXdCO1lBQ3hCLDBDQUEwQztZQUMxQyx5QkFBeUI7WUFDekIsc0JBQXNCO1lBQ3RCLGdCQUFnQjtZQUVoQix5QkFBeUI7MEJBQ3pCLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNiLDRDQUFTQTt3QkFBQ2EsV0FBVTt3QkFBYUMsU0FBU1Q7a0NBQ3hDQzs7Ozs7O2tDQUVILDhEQUFDTTt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNmLDhDQUFXQTswQ0FDViw0RUFBQ0kseUNBQUtBO29DQUNKYSxJQUFJVjtvQ0FDSkUsYUFBYUE7b0NBQ2JNLFdBQVU7b0NBQ1ZHLE1BQU1YLFNBQVMsYUFBYSxTQUFTO29DQUNwQyxHQUFHTSxLQUFLOzs7Ozs7Ozs7OzswQ0FHYiw4REFBQ1YsOENBQVdBO2dDQUFDWSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkM7S0ExQ01WO0FBNENOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvQ3VzdG9tSW5wdXQudHN4PzFiMzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUZpZWxkLCBGb3JtTGFiZWwsIEZvcm1NZXNzYWdlIH0gZnJvbSBcIi4vZm9ybVwiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuL2lucHV0XCI7XHJcbmltcG9ydCB7IENvbnRyb2wsIEZpZWxkUGF0aCB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuaW1wb3J0IHsgYXV0aEZvcm1TY2hlbWEgfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcclxuaW50ZXJmYWNlIEN1c3RvbUlucHV0IHtcclxuICBjb250cm9sOiBDb250cm9sPHouaW5mZXI8dHlwZW9mIGF1dGhGb3JtU2NoZW1hPj47XHJcbiAgLy8gICB0aGlzIHdheSB3ZSBoYXZlIHRvIHB1dCBldmVyeSB0eXBlIG9mICduYW1lJyB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byBpdCAobGlrZSBlbWFpbCxwYXNzd29yZCx1c2VybmFtZSwgZG9iLCBhZGRyZXNzLCBtb2JpbGUgbm8gKSdzIHR5cGUpXHJcbiAgLy8gICBuYW1lOiBcImVtYWlsXCIgfCBcInBhc3N3b3JkXCI7XHJcblxyXG4gIC8vICAgdGh1cyB0aGlzIG1ldGhvZCBpcyB1c2VkXHJcbiAgbmFtZTogRmllbGRQYXRoPHouaW5mZXI8dHlwZW9mIGF1dGhGb3JtU2NoZW1hPj47XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBDdXN0b21JbnB1dCA9ICh7IGNvbnRyb2wsIG5hbWUsIGxhYmVsLCBwbGFjZWhvbGRlciB9OiBDdXN0b21JbnB1dCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKG5hbWUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUZpZWxkXHJcbiAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxyXG4gICAgICAgIC8vICAgICBTaGFkIGNuIGNvcHkgcGFzdGUgZm9ybVxyXG4gICAgICAgIC8vICAgPEZvcm1JdGVtPlxyXG4gICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taXRlbVwiPlxyXG4gICAgICAgIC8vICAgICAgIDxGb3JtTGFiZWw+RW1haWw8L0Zvcm1MYWJlbD5cclxuICAgICAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAvLyAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIHsuLi5maWVsZH0gLz5cclxuICAgICAgICAvLyAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAvLyAgICAgPEZvcm1EZXNjcmlwdGlvbj5cclxuICAgICAgICAvLyAgICAgICBUaGlzIGlzIHlvdXIgcHVibGljIGRpc3BsYXkgbmFtZS5cclxuICAgICAgICAvLyAgICAgPC9Gb3JtRGVzY3JpcHRpb24+XHJcbiAgICAgICAgLy8gICAgIDxGb3JtTWVzc2FnZSAvPlxyXG4gICAgICAgIC8vICAgPC9Gb3JtSXRlbT5cclxuXHJcbiAgICAgICAgLy8gQ3VzdG9tIG1hZGUgZm9ybSBmaWVsZFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pdGVtXCI+XHJcbiAgICAgICAgICA8Rm9ybUxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIiBodG1sRm9yPXtuYW1lfT5cclxuICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGlkPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtY2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT17bmFtZSA9PT0gXCJwYXNzd29yZFwiID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPEZvcm1NZXNzYWdlIGNsYXNzTmFtZT1cImZvcm0tbWVzc2FnZSBtdC0yXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tSW5wdXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZvcm1Db250cm9sIiwiRm9ybUZpZWxkIiwiRm9ybUxhYmVsIiwiRm9ybU1lc3NhZ2UiLCJJbnB1dCIsIkN1c3RvbUlucHV0IiwiY29udHJvbCIsIm5hbWUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsImZpZWxkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsImlkIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/CustomInput.tsx\n"));

/***/ })

});