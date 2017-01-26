/*auth-component@5.0.9#forms/local-login/local-login*/
define([
    'exports',
    'react',
    'react-form',
    '../form/form',
    '../form-error/form-error',
    'css!../forms.less.css'
], function (exports, _react, _reactForm, _form, _formError) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    var _form2 = _interopRequireDefault(_form);
    var _formError2 = _interopRequireDefault(_formError);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) {
            if (keys.indexOf(i) >= 0)
                continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i))
                continue;
            target[i] = obj[i];
        }
        return target;
    }
    exports.default = function (_ref) {
        var forgotClicked = _ref.forgotClicked, _ref$usernameField = _ref.usernameField, usernameField = _ref$usernameField === undefined ? 'email' : _ref$usernameField, _ref$usernamePlacehol = _ref.usernamePlaceholder, usernamePlaceholder = _ref$usernamePlacehol === undefined ? 'e-mail address' : _ref$usernamePlacehol, _ref$passwordField = _ref.passwordField, passwordField = _ref$passwordField === undefined ? 'password' : _ref$passwordField, _ref$passwordPlacehol = _ref.passwordPlaceholder, passwordPlaceholder = _ref$passwordPlacehol === undefined ? 'password' : _ref$passwordPlacehol, buttonText = _ref.buttonText, rest = _objectWithoutProperties(_ref, [
                'forgotClicked',
                'usernameField',
                'usernamePlaceholder',
                'passwordField',
                'passwordPlaceholder',
                'buttonText'
            ]);
        return _react2.default.createElement(_form2.default, rest, function (_ref2) {
            var error = _ref2.error, clearError = _ref2.clearError;
            return function (_ref3) {
                var values = _ref3.values, submitForm = _ref3.submitForm;
                return _react2.default.createElement('form', {
                    onSubmit: submitForm,
                    className: 'auth-component-form'
                }, _react2.default.createElement(_formError2.default, {
                    error: error,
                    clearError: clearError
                }), _react2.default.createElement(_reactForm.Text, {
                    field: usernameField,
                    placeholder: usernamePlaceholder,
                    tabIndex: '1'
                }), _react2.default.createElement(_reactForm.Text, {
                    field: passwordField,
                    type: 'password',
                    placeholder: passwordPlaceholder,
                    tabIndex: '1'
                }), _react2.default.createElement('div', { className: 'forgot-password' }, _react2.default.createElement('a', {
                    href: 'javascript://',
                    onClick: forgotClicked,
                    tabIndex: '2'
                }, 'forgot password')), _react2.default.createElement('button', {
                    type: 'submit',
                    tabIndex: '1'
                }, buttonText || 'Login'));
            };
        });
    };
});