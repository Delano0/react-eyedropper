'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _html2canvas = require('html2canvas');

var _html2canvas2 = _interopRequireDefault(_html2canvas);

var _getCanvasPixelColor2 = require('get-canvas-pixel-color');

var _getCanvasPixelColor3 = _interopRequireDefault(_getCanvasPixelColor2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EyeDropper = function (_Component) {
  _inherits(EyeDropper, _Component);

  function EyeDropper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EyeDropper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EyeDropper.__proto__ || Object.getPrototypeOf(EyeDropper)).call.apply(_ref, [this].concat(args))), _this), _this.eyeDropper = function (e) {
      var initializedColor = _this.props.initializedColor;

      var removeEventListener = function removeEventListener() {
        document.removeEventListener('click', _this.eyeDropper);
      };
      (0, _html2canvas2.default)(e.toElement, {
        onrendered: function onrendered(canvas) {
          var x = e.offsetX == undefined ? e.layerX : e.offsetX;
          var y = e.offsetY == undefined ? e.layerY : e.offsetY;

          var _getCanvasPixelColor = (0, _getCanvasPixelColor3.default)(canvas, x, y),
              r = _getCanvasPixelColor.r,
              g = _getCanvasPixelColor.g,
              b = _getCanvasPixelColor.b,
              a = _getCanvasPixelColor.a;

          a === 0 ? initializedColor({ r: 255, g: 255, b: 255 }) : initializedColor({ r: r, g: b, b: g });
          removeEventListener();
        }
      });
      document.body.style.cursor = 'default';
    }, _this.initEyeDropper = function (event) {
      _this.props.onInit && _this.props.onInit();
      document.body.style.cursor = 'cell';
      document.addEventListener('click', _this.eyeDropper);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EyeDropper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          title = _props.title;

      var classNameComponent = className ? className : "eye dropper";
      var titleComponent = title ? title : '+';
      return _react2.default.createElement(
        'div',
        { className: classNameComponent, onClick: this.initEyeDropper },
        titleComponent
      );
    }
  }]);

  return EyeDropper;
}(_react.Component);

EyeDropper.propTypes = {
  title: _react.PropTypes.string,
  className: _react.PropTypes.string,
  initializedColor: _react.PropTypes.func.isRequired,
  onInit: _react.PropTypes.func
};
exports.default = EyeDropper;
