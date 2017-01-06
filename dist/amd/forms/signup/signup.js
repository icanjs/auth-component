/*auth-component@4.0.2#forms/signup/signup*/
define([
    'exports',
    'react-view-models',
    '../form-base-vm',
    './signup.jsx',
    'css!../forms.less.css'
], function (exports, _reactViewModels, _formBaseVm, _signup) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ViewModel = undefined;
    var _formBaseVm2 = _interopRequireDefault(_formBaseVm);
    var _signup2 = _interopRequireDefault(_signup);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    var ViewModel = exports.ViewModel = _formBaseVm2.default.extend({
        formName: { value: 'SignupForm' },
        buttonText: { value: 'Sign Up' }
    });
    exports.default = (0, _reactViewModels.connect)(ViewModel, _signup2.default);
});