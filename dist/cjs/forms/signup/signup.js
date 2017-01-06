/*auth-component@4.0.2#forms/signup/signup*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ViewModel = undefined;
var _reactViewModels = require('react-view-models');
var _formBaseVm = require('../form-base-vm.js');
var _formBaseVm2 = _interopRequireDefault(_formBaseVm);
var _signup = require('./signup.jsx.js');
var _signup2 = _interopRequireDefault(_signup);
require('../forms.less.css');
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
var ViewModel = exports.ViewModel = _formBaseVm2.default.extend({
    formName: { value: 'SignupForm' },
    buttonText: { value: 'Sign Up' }
});
exports.default = (0, _reactViewModels.connect)(ViewModel, _signup2.default);