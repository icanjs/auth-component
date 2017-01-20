/*auth-component@5.0.2#buttons/paypal/paypal.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define([
    'exports',
    'react',
    '../button.jsx',
    './paypal.svg'
], function (exports, _react, _button, _paypal) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    var _button2 = _interopRequireDefault(_button);
    var _paypal2 = _interopRequireDefault(_paypal);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function (_ref) {
        var name = _ref.name, url = _ref.url, img = _ref.img, alt = _ref.alt, text = _ref.text, popup = _ref.popup;
        return _react2.default.createElement(_button2.default, {
            name: name || 'Paypal',
            url: url || '/auth/paypal',
            svg: _paypal2.default,
            alt: alt,
            text: text,
            popup: popup
        });
    };
});