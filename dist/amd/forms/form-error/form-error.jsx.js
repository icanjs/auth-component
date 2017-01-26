/*auth-component@5.0.9#forms/form-error/form-error.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
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
        var error = _ref.error, clearError = _ref.clearError;
        return error && _react2.default.createElement('div', { className: 'FormError' }, error) || null;
    };
});