/*auth-component@5.0.4#forms/form-error/form-error*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ViewModel = undefined;
var _reactViewModels = require('react-view-models');
var _map = require('can-define/map/map');
var _map2 = _interopRequireDefault(_map);
var _formError = require('./form-error.jsx.js');
var _formError2 = _interopRequireDefault(_formError);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
var ViewModel = exports.ViewModel = _map2.default.extend({
    error: 'string',
    clearError: 'any'
});
exports.default = (0, _reactViewModels.connect)(ViewModel, _formError2.default);