'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FlexBandItem = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultMargin = 0;

function objectWithout(object, exclude) {
    var i = void 0,
        j = void 0;
    for (i in exclude) {
        if (typeof object[i] !== 'undefined') {
            var newObject = {};
            for (j in object) {
                if (!exclude[j]) {
                    newObject[j] = object[j];
                }
            }
            return newObject;
        }
    }
    return object;
}

var FlexBand = function (_Component) {
    _inherits(FlexBand, _Component);

    function FlexBand() {
        _classCallCheck(this, FlexBand);

        return _possibleConstructorReturn(this, (FlexBand.__proto__ || Object.getPrototypeOf(FlexBand)).apply(this, arguments));
    }

    _createClass(FlexBand, [{
        key: 'render',
        value: function render() {
            var style = { display: "flex", flexWrap: "wrap" };
            var _props = this.props,
                direction = _props.direction,
                align = _props.align,
                justify = _props.justify,
                flow = _props.flow,
                wrap = _props.wrap,
                alignItems = _props.alignItems,
                fullWidth = _props.fullWidth,
                fullHeight = _props.fullHeight;


            var other = objectWithout(this.props, FlexBand.propTypes);

            var pStyle = this.props.style;

            if (pStyle) {
                for (var i in pStyle) {
                    style[i] = pStyle[i];
                }
            }

            if (direction) {
                style.flexDirection = direction;
            }

            if (fullWidth) {
                style.width = "100%";
            }

            if (fullHeight) {
                style.height = "100%";
            }

            if (align) {
                style.alignContent = align;
            }

            if (alignItems) {
                style.alignItems = alignItems;
            }

            if (justify) {
                style.justifyContent = justify;
            }

            if (wrap) {
                style.flexWrap = wrap;
            }

            if (flow) {
                style.flexFlow = flow;
            }

            return _react2.default.createElement(
                'div',
                _extends({}, other, { style: style }),
                this.props.children
            );
        }
    }]);

    return FlexBand;
}(_react.Component);

exports.default = FlexBand;


FlexBand.propTypes = {
    direction: _propTypes2.default.string,
    align: _propTypes2.default.string,
    justify: _propTypes2.default.string,
    flow: _propTypes2.default.string,
    wrap: _propTypes2.default.string,
    alignItems: _propTypes2.default.string,
    fullWidth: _propTypes2.default.bool,
    fullHeight: _propTypes2.default.bool
};

var FlexBandItem = exports.FlexBandItem = function (_Component2) {
    _inherits(FlexBandItem, _Component2);

    function FlexBandItem() {
        _classCallCheck(this, FlexBandItem);

        return _possibleConstructorReturn(this, (FlexBandItem.__proto__ || Object.getPrototypeOf(FlexBandItem)).apply(this, arguments));
    }

    _createClass(FlexBandItem, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                margin = _props2.margin,
                minWidth = _props2.minWidth,
                width = _props2.width,
                style = _props2.style,
                grow = _props2.grow,
                shrink = _props2.shrink,
                basis = _props2.basis,
                align = _props2.align,
                order = _props2.order;


            var other = objectWithout(this.props, FlexBandItem.propTypes);

            var pStyle = { display: "inline-block", width: width, minWidth: minWidth };

            if (margin || !other || !other.className) pStyle.margin = margin || defaultMargin;

            if (style) {
                for (var i in style) {
                    pStyle[i] = style[i];
                }
            }

            if (grow) pStyle.flexGrow = grow;

            if (align) pStyle.alignSelf = align;

            if (basis) pStyle.flexBasis = basis;

            if (shrink) pStyle.flexShrink = shrink;

            if (order) pStyle.order = order;

            return _react2.default.createElement(
                'div',
                _extends({}, other, { style: pStyle }),
                this.props.children
            );
        }
    }]);

    return FlexBandItem;
}(_react.Component);

FlexBandItem.propTypes = {
    margin: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    minWidth: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    grow: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    shrink: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    basis: _propTypes2.default.string,
    align: _propTypes2.default.string,
    order: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};