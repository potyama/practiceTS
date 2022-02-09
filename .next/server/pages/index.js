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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/addArea.tsx":
/*!************************************!*\
  !*** ./src/components/addArea.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_supabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/supabase */ \"./src/libs/supabase.ts\");\n\n\nfunction Login() {\n    const { 0: session1 , 1: setSession  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const { data: authListener  } = _libs_supabase__WEBPACK_IMPORTED_MODULE_1__.client.auth.onAuthStateChange((event, session)=>{\n            setSession(session);\n        });\n        return ()=>{\n            authListener.unsubscribe();\n        };\n    }, []);\n    function signInWithGithub() {\n        _libs_supabase__WEBPACK_IMPORTED_MODULE_1__.client.auth.signIn({\n            provider: \"github\"\n        });\n    }\n    function signOut() {\n        _libs_supabase__WEBPACK_IMPORTED_MODULE_1__.client.auth.signOut();\n    }\n    return {\n        session: session1,\n        signInWithGithub,\n        signOut\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hZGRBcmVhLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ0Y7QUFFMUIsUUFBUSxDQUFDRyxLQUFLLEdBQUcsQ0FBQztJQUM3QixLQUFLLE1BQUVDLFFBQU8sTUFBRUMsVUFBVSxNQUFJSiwrQ0FBUTtJQUV0Q0QsZ0RBQVMsS0FBTyxDQUFDO1FBQ2IsS0FBSyxDQUFDLENBQUMsQ0FBQ00sSUFBSSxFQUFFQyxZQUFZLEVBQUMsQ0FBQyxHQUFHTCx5RUFBNkIsRUFDdkRRLEtBQUssRUFBRU4sT0FBTyxHQUFLLENBQUM7WUFDakJDLFVBQVUsQ0FBQ0QsT0FBTztRQUN0QixDQUFDO1FBR0wsTUFBTSxLQUFPLENBQUM7WUFDVkcsWUFBWSxDQUFDSSxXQUFXO1FBQzVCLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBRUlDLGdCQUFnQixHQUFHLENBQUM7UUFDekJWLDhEQUFrQixDQUFDLENBQUM7WUFBQ1ksUUFBUSxFQUFFLENBQVE7UUFBQyxDQUFDO0lBQzdDLENBQUM7YUFFUUMsT0FBTyxHQUFHLENBQUM7UUFDaEJiLCtEQUFtQjtJQUN2QixDQUFDO0lBRUQsTUFBTSxDQUFDLENBQUM7UUFDSkUsT0FBTyxFQUFQQSxRQUFPO1FBQ1BRLGdCQUFnQjtRQUNoQkcsT0FBTztJQUNYLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdDEvLi9zcmMvY29tcG9uZW50cy9hZGRBcmVhLnRzeD9kYjNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gXCIuLi9saWJzL3N1cGFiYXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICAgIGNvbnN0IFtzZXNzaW9uLCBzZXRTZXNzaW9uXSA9IHVzZVN0YXRlKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGRhdGE6IGF1dGhMaXN0ZW5lciB9ID0gY2xpZW50LmF1dGgub25BdXRoU3RhdGVDaGFuZ2UoXG4gICAgICAgICAgICAoZXZlbnQsIHNlc3Npb24pID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTZXNzaW9uKHNlc3Npb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBhdXRoTGlzdGVuZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICBmdW5jdGlvbiBzaWduSW5XaXRoR2l0aHViKCkge1xuICAgICAgICBjbGllbnQuYXV0aC5zaWduSW4oeyBwcm92aWRlcjogXCJnaXRodWJcIiB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaWduT3V0KCkge1xuICAgICAgICBjbGllbnQuYXV0aC5zaWduT3V0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2Vzc2lvbixcbiAgICAgICAgc2lnbkluV2l0aEdpdGh1YixcbiAgICAgICAgc2lnbk91dCxcbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY2xpZW50IiwiTG9naW4iLCJzZXNzaW9uIiwic2V0U2Vzc2lvbiIsImRhdGEiLCJhdXRoTGlzdGVuZXIiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2UiLCJldmVudCIsInVuc3Vic2NyaWJlIiwic2lnbkluV2l0aEdpdGh1YiIsInNpZ25JbiIsInByb3ZpZGVyIiwic2lnbk91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/addArea.tsx\n");

/***/ }),

/***/ "./src/libs/supabase.ts":
/*!******************************!*\
  !*** ./src/libs/supabase.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SUPABASE_URL = \"https://usftxoejayfdcbwagqhx.supabase.co\";\nconst SUPABASE_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0Mzc5MTk4OSwiZXhwIjoxOTU5MzY3OTg5fQ.vTby7lZ776d7lBOViL99hv3chM6VOCV_tqxMonLMD8U\";\nif (!SUPABASE_URL) {\n    throw new Error(\"Missing env.NEXT_PUBLIC_SUPABASE_URL\");\n}\nif (!SUPABASE_KEY) {\n    throw new Error(\"Missing env.NEXT_PUBLIC_SUPABASE_KEY\");\n}\nconst client = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(SUPABASE_URL, SUPABASE_KEY);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9zdXBhYmFzZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0Q7QUFFcEQsS0FBSyxDQUFDQyxZQUFZLEdBQUdDLDBDQUFvQztBQUN6RCxLQUFLLENBQUNHLFlBQVksR0FBR0gscUpBQW9DO0FBRXpELEVBQUUsR0FBR0QsWUFBWSxFQUFFLENBQUM7SUFDaEIsS0FBSyxDQUFDLEdBQUcsQ0FBQ00sS0FBSyxDQUFDLENBQXNDO0FBQzFELENBQUM7QUFDRCxFQUFFLEdBQUdGLFlBQVksRUFBRSxDQUFDO0lBQ2hCLEtBQUssQ0FBQyxHQUFHLENBQUNFLEtBQUssQ0FBQyxDQUFzQztBQUMxRCxDQUFDO0FBRU0sS0FBSyxDQUFDQyxNQUFNLEdBQUdSLG1FQUFZLENBQUNDLFlBQVksRUFBRUksWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QxLy4vc3JjL2xpYnMvc3VwYWJhc2UudHM/MzE0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XG5cbmNvbnN0IFNVUEFCQVNFX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTDtcbmNvbnN0IFNVUEFCQVNFX0tFWSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0tFWTtcblxuaWYgKCFTVVBBQkFTRV9VUkwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkxcIik7XG59XG5pZiAoIVNVUEFCQVNFX0tFWSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0tFWVwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudChTVVBBQkFTRV9VUkwsIFNVUEFCQVNFX0tFWSk7Il0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsIlNVUEFCQVNFX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJTVVBBQkFTRV9LRVkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9LRVkiLCJFcnJvciIsImNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/supabase.ts\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_addArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/addArea */ \"./src/components/addArea.tsx\");\n\n\nfunction Home() {\n    const { session , signOut , signInWithGithub  } = (0,_components_addArea__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: ()=>signOut()\n            ,\n            children: \"サインアウト\"\n        }, void 0, false, {\n            fileName: \"/home/potyama/practiceTS/src/pages/index.tsx\",\n            lineNumber: 9,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: ()=>signInWithGithub()\n            ,\n            children: \"GitHubでログイン\"\n        }, void 0, false, {\n            fileName: \"/home/potyama/practiceTS/src/pages/index.tsx\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, this)\n    }, void 0, false));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlDO0FBRTFCLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLENBQUM7SUFDOUIsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxHQUFFQyxPQUFPLEdBQUVDLGdCQUFnQixFQUFDLENBQUMsR0FBR0osK0RBQUs7SUFFcEQsTUFBTTtrQkFFREUsT0FBTywrRUFDTEcsQ0FBTTtZQUFDQyxPQUFPLE1BQVFILE9BQU87O3NCQUFJLENBQU07Ozs7OytGQUUzQkUsQ0FBTjtZQUFDQyxPQUFPLE1BQVFGLGdCQUFnQjs7c0JBQUksQ0FBVzs7Ozs7OztBQUk5RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdDEvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ2luIGZyb20gXCIuLi9jb21wb25lbnRzL2FkZEFyZWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBzZXNzaW9uLCBzaWduT3V0LCBzaWduSW5XaXRoR2l0aHViIH0gPSBMb2dpbigpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzZXNzaW9uID8gKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+44K144Kk44Oz44Ki44Km44OIPC9idXR0b24+XG4gICAgICApIDogKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25JbldpdGhHaXRodWIoKX0+R2l0SHVi44Gn44Ot44Kw44Kk44OzPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJMb2dpbiIsIkhvbWUiLCJzZXNzaW9uIiwic2lnbk91dCIsInNpZ25JbldpdGhHaXRodWIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();