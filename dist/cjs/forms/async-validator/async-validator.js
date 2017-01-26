/*auth-component@5.0.7#forms/async-validator/async-validator*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ViewModel = undefined;
var _reactViewModels = require('react-view-models');
var _map = require('can-define/map/map');
var _map2 = _interopRequireDefault(_map);
var _lodash = require('lodash.debounce');
var _lodash2 = _interopRequireDefault(_lodash);
var _asyncValidator = require('./async-validator.jsx.js');
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