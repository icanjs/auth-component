/*auth-component@4.0.2#forms/login/login*/
define([
    'exports',
    'react-view-models',
    '../form-base-vm',
    './login.jsx',
    'css!../forms.less.css'
], function (exports, _reactViewModels, _formBaseVm, _login) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ViewModel = undefined;
    var _formBaseVm2 = _interopRequireDefault(_formBaseVm);
    var _login2 = _interopRequireDefault(_login);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    var ViewModel = exports.ViewModel = _formBaseVm2.default.extend({
        formName: { value: 'LoginForm' },
        forgotClicked: function forgotClicked(event) {
            event.preventDefault();
            this.onForgot(this.username, this.password);
        },
        onForgot: function onForgot() {
            this.warn('Pass an "onForgot" function to the ' + this.formName + ' to handle "forgot password" clicks.');
        },
        buttonText: { value: 'Login' }
    });
    exports.default = (0, _reactViewModels.connect)(ViewModel, _login2.default);
});