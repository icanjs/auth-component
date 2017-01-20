/*auth-component@5.0.4#buttons/amazon/amazon.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define([
    'exports',
    'react',
    '../button',
    './amazon.svg',
    'css!./amazon.less.css'
], function (exports, _react, _button, _amazon) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    var _button2 = _interopRequireDefault(_button);
    var _amazon2 = _interopRequireDefault(_amazon);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function (_ref) {
        var name = _ref.name, url = _ref.url, img = _ref.img, alt = _ref.alt, text = _ref.text, popup = _ref.popup;
        return _react2.default.createElement(_button2.default, {
            name: name || 'Amazon',
            url: url || '/auth/amazon',
            svg: _amazon2.default,
            alt: alt,
            text: text,
            popup: popup
        });
    };
});