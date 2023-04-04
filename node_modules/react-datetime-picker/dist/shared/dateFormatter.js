"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDate = void 0;
exports.getFormatter = getFormatter;
exports.getNumberFormatter = getNumberFormatter;
var _getUserLocale = _interopRequireDefault(require("get-user-locale"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var formatterCache = new Map();
function getFormatter(options) {
  return function (locale, date) {
    var localeWithDefault = locale || (0, _getUserLocale["default"])();
    if (!formatterCache.has(localeWithDefault)) {
      formatterCache.set(localeWithDefault, new Map());
    }
    var formatterCacheLocale = formatterCache.get(localeWithDefault);
    if (!formatterCacheLocale.has(options)) {
      formatterCacheLocale.set(options, new Intl.DateTimeFormat(localeWithDefault, options).format);
    }
    return formatterCacheLocale.get(options)(date);
  };
}
var numberFormatterCache = new Map();
function getNumberFormatter(options) {
  return function (locale, date) {
    var localeWithDefault = locale || (0, _getUserLocale["default"])();
    if (!numberFormatterCache.has(localeWithDefault)) {
      numberFormatterCache.set(localeWithDefault, new Map());
    }
    var numberFormatterCacheLocale = numberFormatterCache.get(localeWithDefault);
    if (!numberFormatterCacheLocale.has(options)) {
      numberFormatterCacheLocale.set(options, new Intl.NumberFormat(localeWithDefault, options).format);
    }
    return numberFormatterCacheLocale.get(options)(date);
  };
}
var formatDateOptions = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
};
var formatDate = getFormatter(formatDateOptions);
exports.formatDate = formatDate;