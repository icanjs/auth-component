/*auth-component@4.0.2#forms/login/login.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
exports.default = function (_ref) {
    var usernameField = _ref.usernameField, usernamePlaceholder = _ref.usernamePlaceholder, username = _ref.username, usernameChanged = _ref.usernameChanged, password = _ref.password, passwordPlaceholder = _ref.passwordPlaceholder, passwordChanged = _ref.passwordChanged, submitClicked = _ref.submitClicked, forgotClicked = _ref.forgotClicked, buttonText = _ref.buttonText;
    return _react2.default.createElement('form', {
        className: 'auth-component-form',
        onSubmit: submitClicked
    }, _react2.default.createElement('div', { className: 'messages' }), _react2.default.createElement('input', {
        className: 'auth-component-input',
        type: usernameField === 'email' ? 'email' : 'text',
        placeholder: usernamePlaceholder,
        value: username,
        required: true,
        tabIndex: '1',
        onChange: usernameChanged
    }), _react2.default.createElement('input', {
        className: 'auth-component-input',
        type: 'password',
        placeholder: 'password',
        value: password,
        required: true,
        tabIndex: '1',
        onChange: passwordChanged
    }), _react2.default.createElement('div', { className: 'forgot-password' }, _react2.default.createElement('a', {
        href: 'javascript://',
        onClick: forgotClicked,
        tabIndex: '2'
    }, 'forgot password')), _react2.default.createElement('button', {
        type: 'submit',
        tabIndex: '1'
    }, buttonText));
};