/*auth-component@5.0.6#buttons/facebook/facebook.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _button = require('../button.jsx.js');
var _button2 = _interopRequireDefault(_button);
var _facebook = require('./facebook.svg.js');
var _facebook2 = _interopRequireDefault(_facebook);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
exports.default = function (_ref) {
    var name = _ref.name, url = _ref.url, img = _ref.img, alt = _ref.alt, text = _ref.text, popup = _ref.popup;
    return _react2.default.createElement(_button2.default, {
        name: name || 'Facebook',
        url: url || '/auth/facebook',
        svg: _facebook2.default,
        alt: alt,
        text: text,
        popup: popup
    });
};