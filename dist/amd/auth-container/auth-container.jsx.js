/*auth-component@5.0.7#auth-container/auth-container.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define([
    'exports',
    'react'
], function (exports, _react) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function (_ref) {
        var children = _ref.children;
        return _react2.default.createElement('div', { className: 'auth-component' }, _react2.default.createElement('div', { className: 'auth-ui-container' }, children));
    };
});