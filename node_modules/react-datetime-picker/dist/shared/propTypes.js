"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValueType = exports.isMinDate = exports.isMaxDate = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var allViews = ['hour', 'minute', 'second'];
var allValueTypes = [].concat(allViews);
var isMinDate = function isMinDate(props, propName, componentName) {
  var minDate = props[propName];
  if (!minDate) {
    return null;
  }
  if (!(minDate instanceof Date)) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(minDate), "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
  }
  var maxDate = props.maxDate;
  if (maxDate && minDate > maxDate) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(minDate), "` supplied to `").concat(componentName, "`, minDate cannot be larger than maxDate."));
  }
  return null;
};
exports.isMinDate = isMinDate;
var isMaxDate = function isMaxDate(props, propName, componentName) {
  var maxDate = props[propName];
  if (!maxDate) {
    return null;
  }
  if (!(maxDate instanceof Date)) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(maxDate), "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
  }
  var minDate = props.minDate;
  if (minDate && maxDate < minDate) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(maxDate), "` supplied to `").concat(componentName, "`, maxDate cannot be smaller than minDate."));
  }
  return null;
};
exports.isMaxDate = isMaxDate;
var isValueType = _propTypes["default"].oneOf(allValueTypes);
exports.isValueType = isValueType;