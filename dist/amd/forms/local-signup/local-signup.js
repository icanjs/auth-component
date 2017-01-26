/*auth-component@5.0.6#forms/local-signup/local-signup*/
define([
    'exports',
    'react',
    'react-form',
    '../async-validator/async-validator',
    '../form/form',
    '../form-error/form-error',
    'css!../forms.less.css'
], function (exports, _react, _reactForm, _asyncValidator, _form, _formError) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    var _asyncValidator2 = _interopRequireDefault(_asyncValidator);
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
        var asyncValidation = _ref.asyncValidation, forgotClicked = _ref.forgotClicked, buttonText = _ref.buttonText, _ref$usernameField = _ref.usernameField, usernameField = _ref$usernameField === undefined ? 'email' : _ref$usernameField, _ref$usernamePlacehol = _ref.usernamePlaceholder, usernamePlaceholder = _ref$usernamePlacehol === undefined ? 'e-mail address' : _ref$usernamePlacehol, _ref$passwordField = _ref.passwordField, passwordField = _ref$passwordField === undefined ? 'password' : _ref$passwordField, _ref$passwordPlacehol = _ref.passwordPlaceholder, passwordPlaceholder = _ref$passwordPlacehol === undefined ? 'password' : _ref$passwordPlacehol, rest = _objectWithoutProperties(_ref, [
                'asyncValidation',
                'forgotClicked',
                'buttonText',
                'usernameField',
                'usernamePlaceholder',
                'passwordField',
                'passwordPlaceholder'
            ]);
        return _react2.default.createElement(_form2.default, rest, function (_ref2) {
            var error = _ref2.error, clearError = _ref2.clearError;
            return function (_ref3) {
                var values = _ref3.values, submitForm = _ref3.submitForm;
                var queryParams = { email: values.email };
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
                }), asyncValidation && _react2.default.createElement(_asyncValidator2.default, {
                    field: 'emailError',
                    params: queryParams,
                    validate: asyncValidation
                }), _react2.default.createElement('div', { className: 'forgot-password' }), _react2.default.createElement('button', {
                    type: 'submit',
                    tabIndex: '1'
                }, buttonText || 'Signup'));
            };
        });
    };
});