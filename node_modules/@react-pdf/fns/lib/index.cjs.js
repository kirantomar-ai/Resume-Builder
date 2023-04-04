'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _regeneratorRuntime = require('@babel/runtime/helpers/regeneratorRuntime');
var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);

/**
 * Applies a function to the value at the given index of an array

 * @param {number} index
 * @param {function} fn
 * @param {array} collection
 * @returns copy of the array with the element at the given index replaced with the result of the function application.
 */
var adjust = function adjust(index, fn, collection) {
  var _Object$assign;
  if (index >= 0 && index >= collection.length) return collection;
  if (index < 0 && Math.abs(index) > collection.length) return collection;
  var i = index < 0 ? collection.length + index : index;
  return Object.assign([], collection, (_Object$assign = {}, _Object$assign[i] = fn(collection[i]), _Object$assign));
};

var reverse = function reverse(list) {
  return Array.prototype.slice.call(list, 0).reverse();
};

/**
 * Performs right-to-left function composition with async functions support
 *
 * @param  {...any} functions
 */
var asyncCompose = function asyncCompose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"]().mark(function _callee(value) {
      var result,
        reversedFns,
        _len2,
        args,
        _key2,
        i,
        fn,
        _args = arguments;
      return _regeneratorRuntime__default["default"]().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            result = value;
            reversedFns = reverse(fns);
            for (_len2 = _args.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = _args[_key2];
            }
            i = 0;
          case 4:
            if (!(i < reversedFns.length)) {
              _context.next = 12;
              break;
            }
            fn = reversedFns[i];
            _context.next = 8;
            return fn.apply(void 0, [result].concat(args));
          case 8:
            result = _context.sent;
          case 9:
            i += 1;
            _context.next = 4;
            break;
          case 12:
            return _context.abrupt("return", result);
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/**
 * Capitalize first letter of each word
 *
 * @param {String} string
 * @returns {String} capitalized string
 */
var capitalize = function capitalize(value) {
  if (!value) return value;
  return value.replace(/(^|\s)\S/g, function (l) {
    return l.toUpperCase();
  });
};

/**
 * Casts value to array
 *
 * @param {any} value
 * @returns {Array} casted value
 */
var castArray = function castArray(value) {
  return Array.isArray(value) ? value : [value];
};

/* eslint-disable no-await-in-loop */

/**
 * Performs right-to-left function composition
 *
 * @param  {...any} functions
 */
var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function (value) {
    var result = value;
    var reversedFns = reverse(fns);
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    for (var i = 0; i < reversedFns.length; i += 1) {
      var fn = reversedFns[i];
      result = fn.apply(void 0, [result].concat(args));
    }
    return result;
  };
};

var dropLast = function dropLast(array) {
  return array.slice(0, array.length - 1);
};

var evolve = function evolve(transformations, object) {
  var result = object instanceof Array ? [] : {};
  var keys = Object.keys(object);
  for (var i = 0; i < keys.length; i += 1) {
    var key = keys[i];
    var transformation = transformations[key];
    var type = typeof transformation;
    if (type === 'function') {
      result[key] = transformation(object[key]);
    } else if (transformation && type === 'object') {
      result[key] = evolve(transformation, object[key]);
    } else result[key] = object[key];
  }
  return result;
};

var isNil = function isNil(value) {
  return value === null || value === undefined;
};

var get = function get(target, path, defaultValue) {
  if (isNil(target)) return defaultValue;
  var _path = castArray(path);
  var result = target;
  for (var i = 0; i < _path.length; i += 1) {
    if (isNil(result)) return undefined;
    result = result[_path[i]];
  }
  return isNil(result) ? defaultValue : result;
};

var last = function last(value) {
  return value === '' ? '' : value[value.length - 1];
};

var mapValues = function mapValues(object, fn) {
  var entries = Object.entries(object);
  return entries.reduce(function (acc, _ref, index) {
    var key = _ref[0],
      value = _ref[1];
    acc[key] = fn(value, key, index);
    return acc;
  }, {});
};

var isPercent = function isPercent(value) {
  return /((-)?\d+\.?\d*)%/g.exec(value);
};

/**
 * Get percentage value of input
 *
 * @param {String} value
 * @returns {Object} percent value (if matches)
 */
var matchPercent = function matchPercent(value) {
  var match = isPercent(value);
  if (match) {
    var f = parseFloat(match[1], 10);
    var percent = f / 100;
    return {
      percent: percent,
      value: f
    };
  }
  return null;
};

var omit = function omit(keys, object) {
  var _keys = castArray(keys);
  var copy = Object.assign({}, object);
  _keys.forEach(function (key) {
    delete copy[key];
  });
  return copy;
};

var pick = function pick(keys, obj) {
  var result = {};
  for (var i = 0; i < keys.length; i += 1) {
    var key = keys[i];
    if (key in obj) result[key] = obj[key];
  }
  return result;
};

/**
 * Capitalize first letter of string
 *
 * @param {String} string
 * @returns {String} capitalized string
 */
var upperFirst = function upperFirst(value) {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
};

exports.adjust = adjust;
exports.asyncCompose = asyncCompose;
exports.capitalize = capitalize;
exports.castArray = castArray;
exports.compose = compose;
exports.dropLast = dropLast;
exports.evolve = evolve;
exports.get = get;
exports.isNil = isNil;
exports.last = last;
exports.mapValues = mapValues;
exports.matchPercent = matchPercent;
exports.omit = omit;
exports.pick = pick;
exports.reverse = reverse;
exports.upperFirst = upperFirst;
