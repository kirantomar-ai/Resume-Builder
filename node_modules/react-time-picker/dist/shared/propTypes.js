"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValueType = exports.isTime = exports.isRef = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var allViews = ['hour', 'minute', 'second'];
var allValueTypes = [].concat(allViews);
var hourOptionalSecondsRegExp = /^(([0-1])?[0-9]|2[0-3]):[0-5][0-9](:([0-5][0-9]))?$/;
var isTime = function isTime(props, propName, componentName) {
  var time = props[propName];
  if (time) {
    if (!hourOptionalSecondsRegExp.test(time)) {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof minDate === "undefined" ? "undefined" : _typeof(minDate), "` supplied to `").concat(componentName, "`, expected time in HH:mm(:ss) format."));
    }
  }

  // Everything is fine
  return null;
};
exports.isTime = isTime;
var isValueType = _propTypes["default"].oneOf(allValueTypes);
exports.isValueType = isValueType;
var isRef = _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
  current: _propTypes["default"].any
})]);
exports.isRef = isRef;