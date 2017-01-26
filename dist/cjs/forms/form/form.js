/*auth-component@5.0.7#forms/form/form*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ViewModel = undefined;
var _reactViewModels = require('react-view-models');
var _map = require('can-define/map/map');
var _map2 = _interopRequireDefault(_map);
var _utils = require('../../utils.js');
var _form = require('./form.jsx.js');
var _form2 = _interopRequireDefault(_form);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
var ViewModel = exports.ViewModel = _map2.default.extend({
    '*': { serialize: true },
    strategy: 'string',
    Model: 'any',
    service: 'any',
    suppressWarnings: { value: false },
    error: 'string',
    clearError: function clearError() {
        this.error = undefined;
    },
    warn: function warn(message) {
        if (this.suppressWarnings !== true) {
            (0, _utils.devWarning)(message);
            return message;
        }
    },
    formSubmitted: function formSubmitted(values) {
        var _this = this;
        if (this.strategy) {
            values.strategy = this.strategy;
        }
        this.clearError();
        this.onSubmit(values).then(function (response) {
            return _this.onSuccess(response);
        }).catch(function (error) {
            return _this.uiError(error);
        });
    },
    onSubmit: function onSubmit(data) {
        if (this.Model) {
            return new this.Model(data).save();
        } else if (this.service) {
            return this.service.create(data);
        } else {
            return Promise.reject(new Error(this.formName + ': You must provide a Model or service attribute, or overwrite the onSubmit function.'));
        }
    },
    onSuccess: function onSuccess(data) {
        this.warn('Pass an "onSuccess" function to the ' + this.formName + ' to handle success.');
    },
    uiError: function uiError(error) {
        this.error = error.message || error;
        this.onError(error);
    },
    onError: function onError(error) {
        this.warn(error);
    }
});
exports.default = (0, _reactViewModels.connect)(ViewModel, _form2.default);