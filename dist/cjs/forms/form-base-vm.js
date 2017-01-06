/*auth-component@4.0.2#forms/form-base-vm*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var _map = require('can-define/map/map');
var _map2 = _interopRequireDefault(_map);
var _utils = require('../utils.js');
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
exports.default = _map2.default.extend({
    '*': { serialize: true },
    usernameField: {
        type: 'string',
        value: 'email'
    },
    usernamePlaceholder: {
        type: 'string',
        value: 'e-mail address'
    },
    username: {
        type: 'string',
        value: ''
    },
    usernameChanged: function usernameChanged(event) {
        this.username = event.target.value;
    },
    passwordField: {
        type: 'string',
        value: 'password'
    },
    password: {
        type: 'string',
        value: ''
    },
    passwordPlaceholder: {
        type: 'string',
        value: 'password'
    },
    passwordChanged: function passwordChanged(event) {
        this.password = event.target.value;
    },
    strategy: 'string',
    Model: 'any',
    suppressWarnings: { value: false },
    warn: function warn(message) {
        if (this.suppressWarnings !== true) {
            (0, _utils.devWarning)(message);
            return message;
        }
    },
    submitClicked: function submitClicked(event) {
        var _authData, _this = this;
        event.preventDefault();
        var authData = (_authData = {}, _defineProperty(_authData, this.usernameField, this.username), _defineProperty(_authData, this.passwordField, this.password), _authData);
        if (this.strategy) {
            authData.strategy = this.strategy;
        }
        authData = this.prepareData(authData);
        this.handleSubmit(authData).then(function (response) {
            return _this.onSuccess(response);
        }).catch(function (error) {
            return _this.uiError(error);
        });
    },
    prepareData: function prepareData(data) {
        return data;
    },
    handleSubmit: function handleSubmit(data) {
        if (this.Model) {
            return new this.Model(data).save();
        } else if (this.service) {
            return this.service.create(data);
        } else {
            return Promise.reject(new Error(this.formName + ': You must provide a Model or service attribute, or overwrite the handleSubmit function.'));
        }
    },
    onSuccess: function onSuccess(data) {
        this.warn('Pass an "onSuccess" function to the ' + this.formName + ' to handle success.');
    },
    uiError: function uiError(error) {
        this.onError(error);
    },
    onError: function onError(error) {
        this.warn(error);
    },
    buttonText: { type: 'string' }
});