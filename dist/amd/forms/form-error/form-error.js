/*auth-component@4.0.3#forms/form-error/form-error*/
define([
    'exports',
    'react-view-models',
    'can-define/map',
    './form-error.jsx'
], function (exports, _reactViewModels, _map, _formError) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ViewModel = undefined;
    var _map2 = _interopRequireDefault(_map);
    var _formError2 = _interopRequireDefault(_formError);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    var ViewModel = exports.ViewModel = _map2.default.extend({
        error: 'string',
        clearError: 'any'
    });
    exports.default = (0, _reactViewModels.connect)(ViewModel, _formError2.default);
});