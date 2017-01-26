/*auth-component@5.0.6#forms/async-validator/async-validator*/
define([
    'exports',
    'react-view-models',
    'can-define/map',
    'lodash.debounce',
    './async-validator.jsx'
], function (exports, _reactViewModels, _map, _lodash, _asyncValidator) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ViewModel = undefined;
    var _map2 = _interopRequireDefault(_map);
    var _lodash2 = _interopRequireDefault(_lodash);
    var _asyncValidator2 = _interopRequireDefault(_asyncValidator);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    var ViewModel = exports.ViewModel = _map2.default.extend({
        cachedParams: 'any',
        updateCachedParams: function updateCachedParams(params) {
            this.cachedParams = params;
        },
        params: {
            type: 'any',
            value: {}
        },
        otherArgs: {
            type: 'any',
            value: [],
            set: function set(otherArgs) {
                if (!Array.isArray(otherArgs)) {
                    throw new Error('otherArgs must be an array.');
                }
                return otherArgs;
            }
        },
        runQuery: {
            type: 'any',
            value: function value() {
                return (0, _lodash2.default)(this.query, this.debounce);
            }
        },
        query: function query(params, otherArgs) {
            if (!params) {
                console.warn('no params were provided to the async form field validator.');
            }
            var args = otherArgs.splice();
            args.unshift(params);
            return this.validate.apply(undefined, args);
        },
        debounce: {
            type: 'number',
            value: 250
        },
        validate: 'any'
    });
    exports.default = (0, _reactViewModels.connect)(ViewModel, _asyncValidator2.default);
});