"use strict";
exports.id = 224;
exports.ids = [224];
exports.modules = {

/***/ 2186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9810);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([immer__WEBPACK_IMPORTED_MODULE_1__, zustand__WEBPACK_IMPORTED_MODULE_0__]);
([immer__WEBPACK_IMPORTED_MODULE_1__, zustand__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


const useNotificationStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set, _get) => ({
  notifications: [],
  set: fn => set((0,immer__WEBPACK_IMPORTED_MODULE_1__["default"])(fn))
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useNotificationStore);
});

/***/ }),

/***/ 2224:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ notify)
/* harmony export */ });
/* harmony import */ var _stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2186);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_0__]);
_stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function notify(newNotification) {
  const {
    notifications,
    set: setNotificationStore
  } = _stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getState */ .Z.getState();
  setNotificationStore(state => {
    state.notifications = [...notifications, _objectSpread({
      type: 'success'
    }, newNotification)];
  });
}
});

/***/ })

};
;