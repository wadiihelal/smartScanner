/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/TCPUDP";
exports.ids = ["pages/TCPUDP"];
exports.modules = {

/***/ "./pages/TCPUDP.js":
/*!*************************!*\
  !*** ./pages/TCPUDP.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_portscan2_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/portscan2.json */ \"./src/portscan2.json\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ \"react-bootstrap/Button\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/wadii_helal/Desktop/pythonProject/front/pages/TCPUDP.js\";\n\n\n\n\nfunction osdetect() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    style: {\n      marginTop: \"50px\",\n      fontSize: '20px',\n      width: '100%',\n      height: '100%',\n      display: 'flex',\n      justifyContent: 'center',\n      alignItems: 'center',\n      flexDirection: 'column'\n    },\n    children: _src_portscan2_json__WEBPACK_IMPORTED_MODULE_1__ && _src_portscan2_json__WEBPACK_IMPORTED_MODULE_1__.map(post => {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n          marginTop: \"20px\",\n          fontSize: '40px',\n          width: '100%',\n          height: '100%',\n          display: 'flex',\n          justifyContent: 'center',\n          alignItems: 'center',\n          flexDirection: 'column'\n        },\n        children: _src_portscan2_json__WEBPACK_IMPORTED_MODULE_1__.map(post => {\n          const i = post;\n          console.log(post);\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              style: {\n                marginLeft: '110px'\n              },\n              children: [\" Ip address :   \", post.IPaddr]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 18,\n              columnNumber: 13\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 19,\n              columnNumber: 13\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              style: {\n                fontFamily: 'lucida grande',\n                fontSize: '45px',\n                color: ' #141823'\n              },\n              children: [\"Protocols in use are :\", post.Protocols[0], \" / \", post.Protocols[1]]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 19,\n              columnNumber: 22\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              style: {\n                display: 'flex'\n              },\n              children: \" \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 19,\n              columnNumber: 165\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              style: {\n                marginLeft: '300px'\n              },\n              children: [\" \", post.Ports.map(test => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                children: test\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 21,\n                columnNumber: 17\n              }, this))]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 20,\n              columnNumber: 13\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default()), {\n              href: \"http://127.0.0.1:5000 \",\n              variant: \"outline-warning\",\n              size: \"lg\",\n              style: {\n                width: '100%',\n                height: '30%',\n                justifyContent: 'center',\n                alignItems: 'center'\n              },\n              children: \"Go for a specific scan\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 13\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 13\n          }, this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 13\n      }, this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (osdetect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJlYW1saW5lLy4vcGFnZXMvVENQVURQLmpzPzY3ZWQiXSwibmFtZXMiOlsib3NkZXRlY3QiLCJtYXJnaW5Ub3AiLCJmb250U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJkYXRhIiwicG9zdCIsImkiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luTGVmdCIsIklQYWRkciIsImZvbnRGYW1pbHkiLCJjb2xvciIsIlByb3RvY29scyIsIlBvcnRzIiwibWFwIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQSxRQUFULEdBQW9CO0FBRWxCLHNCQUNFO0FBQUssU0FBSyxFQUFFO0FBQUNDLGVBQVMsRUFBQyxNQUFYO0FBQWtCQyxjQUFRLEVBQUMsTUFBM0I7QUFBa0NDLFdBQUssRUFBQyxNQUF4QztBQUErQ0MsWUFBTSxFQUFDLE1BQXREO0FBQTZEQyxhQUFPLEVBQUMsTUFBckU7QUFBNEVDLG9CQUFjLEVBQUMsUUFBM0Y7QUFBb0dDLGdCQUFVLEVBQUMsUUFBL0c7QUFBd0hDLG1CQUFhLEVBQUM7QUFBdEksS0FBWjtBQUFBLGNBQ0tDLGdEQUFJLElBQUlBLG9EQUFBLENBQVNDLElBQUksSUFBRTtBQUN4QiwwQkFDSTtBQUFLLGFBQUssRUFBRTtBQUFFVCxtQkFBUyxFQUFDLE1BQVo7QUFBbUJDLGtCQUFRLEVBQUMsTUFBNUI7QUFBbUNDLGVBQUssRUFBQyxNQUF6QztBQUFnREMsZ0JBQU0sRUFBQyxNQUF2RDtBQUE4REMsaUJBQU8sRUFBQyxNQUF0RTtBQUE2RUMsd0JBQWMsRUFBQyxRQUE1RjtBQUFxR0Msb0JBQVUsRUFBQyxRQUFoSDtBQUF5SEMsdUJBQWEsRUFBQztBQUF2SSxTQUFaO0FBQUEsa0JBQ0NDLG9EQUFBLENBQVVDLElBQUksSUFDakI7QUFBRSxnQkFBTUMsQ0FBQyxHQUFJRCxJQUFYO0FBQ0FFLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtBQUNBLDhCQUVBO0FBQUEsb0NBRUE7QUFBSSxtQkFBSyxFQUFFO0FBQUNJLDBCQUFVLEVBQUM7QUFBWixlQUFYO0FBQUEsNkNBQWtESixJQUFJLENBQUNLLE1BQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGQSxlQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEEsZUFHUztBQUFJLG1CQUFLLEVBQUU7QUFBQ0MsMEJBQVUsRUFBRSxlQUFiO0FBQTZCZCx3QkFBUSxFQUFDLE1BQXRDO0FBQTZDZSxxQkFBSyxFQUFDO0FBQW5ELGVBQVg7QUFBQSxtREFBa0dQLElBQUksQ0FBQ1EsU0FBTCxDQUFlLENBQWYsQ0FBbEcsU0FBd0hSLElBQUksQ0FBQ1EsU0FBTCxDQUFlLENBQWYsQ0FBeEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhULGVBR3dKO0FBQUksbUJBQUssRUFBRTtBQUFDYix1QkFBTyxFQUFDO0FBQVQsZUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIeEosZUFJQTtBQUFJLG1CQUFLLEVBQUU7QUFBQ1MsMEJBQVUsRUFBQztBQUFaLGVBQVg7QUFBQSw4QkFBbUNKLElBQUksQ0FBQ1MsS0FBTCxDQUFXQyxHQUFYLENBQWdCQyxJQUFJLGlCQUNuRDtBQUFBLDBCQUFLQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRCtCLENBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKQSxlQVVBLDhEQUFDLCtEQUFEO0FBQVEsa0JBQUksRUFBQyx3QkFBYjtBQUFzQyxxQkFBTyxFQUFDLGlCQUE5QztBQUFnRSxrQkFBSSxFQUFDLElBQXJFO0FBQTBFLG1CQUFLLEVBQUU7QUFBQ2xCLHFCQUFLLEVBQUUsTUFBUjtBQUFlQyxzQkFBTSxFQUFFLEtBQXZCO0FBQTZCRSw4QkFBYyxFQUFFLFFBQTdDO0FBQXNEQywwQkFBVSxFQUFFO0FBQWxFLGVBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGQTtBQWtCRCxTQXJCRTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQTZCQyxLQTlCUTtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFDRDs7QUFFRCwrREFBZVAsUUFBZiIsImZpbGUiOiIuL3BhZ2VzL1RDUFVEUC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXRhIGZyb20gJy4uL3NyYy9wb3J0c2NhbjIuanNvbidcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5mdW5jdGlvbiBvc2RldGVjdCgpIHtcbiAgICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiNTBweFwiLGZvbnRTaXplOicyMHB4Jyx3aWR0aDonMTAwJScsaGVpZ2h0OicxMDAlJyxkaXNwbGF5OidmbGV4JyxqdXN0aWZ5Q29udGVudDonY2VudGVyJyxhbGlnbkl0ZW1zOidjZW50ZXInLGZsZXhEaXJlY3Rpb246J2NvbHVtbid9fT5cbiAgICAgICAge2RhdGEgJiYgZGF0YS5tYXAocG9zdD0+e1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6XCIyMHB4XCIsZm9udFNpemU6JzQwcHgnLHdpZHRoOicxMDAlJyxoZWlnaHQ6JzEwMCUnLGRpc3BsYXk6J2ZsZXgnLGp1c3RpZnlDb250ZW50OidjZW50ZXInLGFsaWduSXRlbXM6J2NlbnRlcicsZmxleERpcmVjdGlvbjonY29sdW1uJ319PlxuICAgICAgICAgICAge2RhdGEubWFwIChwb3N0ID0+IFxuICAgICAgICAgIHsgY29uc3QgaSAgPSBwb3N0XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwb3N0KVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPGxpIHN0eWxlPXt7bWFyZ2luTGVmdDonMTEwcHgnfX0+IElwIGFkZHJlc3MgOiAgIHtwb3N0LklQYWRkcn08L2xpPiBcbiAgICAgICAgICAgIDxicj48L2JyPjxsaSBzdHlsZT17e2ZvbnRGYW1pbHk6ICdsdWNpZGEgZ3JhbmRlJyxmb250U2l6ZTonNDVweCcsY29sb3I6JyAjMTQxODIzJ319PlByb3RvY29scyBpbiB1c2UgYXJlIDp7cG9zdC5Qcm90b2NvbHNbMF19IC8ge3Bvc3QuUHJvdG9jb2xzWzFdfTwvbGk+PGxpIHN0eWxlPXt7ZGlzcGxheTonZmxleCcsfX0+IDwvbGk+IFxuICAgICAgICAgICAgPGxpIHN0eWxlPXt7bWFyZ2luTGVmdDonMzAwcHgnfX0+IHtwb3N0LlBvcnRzLm1hcCAodGVzdCA9PlxuICAgICAgICAgICAgICAgIDxvbD57dGVzdH08L29sPlxuXG4pfTwvbGk+IFxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxCdXR0b24gaHJlZj1cImh0dHA6Ly8xMjcuMC4wLjE6NTAwMCBcIiB2YXJpYW50PVwib3V0bGluZS13YXJuaW5nXCIgc2l6ZT0nbGcnIHN0eWxlPXt7d2lkdGg6ICcxMDAlJyxoZWlnaHQ6ICczMCUnLGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgICBHbyBmb3IgYSBzcGVjaWZpYyBzY2FuXG4gICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgKVxuXG4gICAgICAgIH1cbiAgICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgKTsgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBvc2RldGVjdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/TCPUDP.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (function() {



/***/ }),

/***/ "./src/portscan2.json":
/*!****************************!*\
  !*** ./src/portscan2.json ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[{"IPaddr":"192.168.8.107","Protocols":["tcp","udp"],"Ports":[22,80,631,5353]}]');

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Button");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/TCPUDP.js"));
module.exports = __webpack_exports__;

})();