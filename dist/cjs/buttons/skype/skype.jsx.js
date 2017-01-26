/*auth-component@5.0.9#buttons/skype/skype.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _button = require('../button.jsx.js');
var _button2 = _interopRequireDefault(_button);
var _skype = require('./skype.svg.js');
var _skype2 = _interopRequireDefault(_skype);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
exports.default = function (_ref) {
    var name = _ref.name, url = _ref.url, img = _ref.img, alt = _ref.alt, text = _ref.text, popup = _ref.popup;
    return _react2.default.createElement(_button2.default, {
        name: name || 'Skype',
        url: url || '/auth/skype',
        svg: _skype2.default,
        alt: alt,
        text: text,
        popup: popup
    });
};