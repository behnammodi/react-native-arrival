"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var undef = undefined;
var defaultOptions = {
  method: 'spring',
  toValue: 1,
  delay: undef,
  useNativeDriver: true,
  "extends": _react["default"].Component,
  timing: {},
  spring: {}
};
var abbreviations = {
  p: 'perspective',
  r: 'rotate',
  rx: 'rotateX',
  ry: 'rotateY',
  rz: 'rotateZ',
  s: 'scale',
  sx: 'scaleX',
  sy: 'scaleY',
  x: 'translateX',
  y: 'translateY'
};

var _default = function _default(Component, transform, options) {
  var _temp;

  options = _objectSpread(_objectSpread({}, defaultOptions), options);
  var opacity = transform.opacity;
  delete transform.opacity;
  transform = Object.keys(transform).reduce(function (a, b) {
    return _objectSpread(_objectSpread({}, a), {}, _defineProperty({}, abbreviations[b] || b, transform[b]));
  }, {});

  var AnimatedComponent = _reactNative.Animated.createAnimatedComponent(Component);

  return _temp = function (_options$extends) {
    _inherits(_temp, _options$extends);

    var _super = _createSuper(_temp);

    function _temp() {
      var _this;

      _classCallCheck(this, _temp);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "isMount", new _reactNative.Animated.Value(0));

      _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
        _reactNative.Animated[options.method](_this.isMount, _objectSpread({
          toValue: options.toValue,
          useNativeDriver: options.useNativeDriver
        }, options[options.method])).start();
      });

      return _this;
    }

    _createClass(_temp, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        return _react["default"].createElement(AnimatedComponent, _extends({}, this.props, {
          style: _objectSpread(_objectSpread({}, opacity && {
            opacity: this.isMount.interpolate({
              inputRange: [0, 1],
              outputRange: [opacity.from, opacity.to]
            })
          }), {}, {
            transform: Object.keys(transform).map(function (key) {
              return _defineProperty({}, key, _this2.isMount.interpolate({
                inputRange: [0, 1],
                outputRange: [transform[key].from, transform[key].to]
              }));
            })
          })
        }));
      }
    }]);

    return _temp;
  }(options["extends"]), _temp;
};

exports["default"] = _default;