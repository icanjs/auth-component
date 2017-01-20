/*auth-component@5.0.4#buttons/button.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define([
    'exports',
    'react',
    'feathers-authentication-popups/handler',
    'react-svg-inline',
    'css!./button.less.css'
], function (exports, _react, _handler, _reactSvgInline) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    var _handler2 = _interopRequireDefault(_handler);
    var _reactSvgInline2 = _interopRequireDefault(_reactSvgInline);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function (_ref) {
        var name = _ref.name, classSuffix = _ref.classSuffix, url = _ref.url, img = _ref.img, alt = _ref.alt, text = _ref.text, popup = _ref.popup, svg = _ref.svg;
        return _react2.default.createElement('button', {
            className: 'auth-button oauth-' + (classSuffix || name.toLowerCase().replace(' ', '')),
            title: 'Login with ' + name
        }, _react2.default.createElement('a', {
            href: url,
            onClick: popup ? (0, _handler2.default)(url) : null
        }, svg ? _react2.default.createElement(_reactSvgInline2.default, { svg: svg }) : _react2.default.createElement('img', {
            className: 'logo',
            src: img,
            alt: alt
        }), text && _react2.default.createElement('span', { className: 'auth-button-text' }, text)));
    };
});