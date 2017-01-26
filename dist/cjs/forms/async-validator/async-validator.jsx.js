/*auth-component@5.0.7#forms/async-validator/async-validator.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _reactForm = require('react-form');
var _lodash = require('lodash.isequal');
var _lodash2 = _interopRequireDefault(_lodash);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
exports.default = function (_ref) {
    var field = _ref.field, query = _ref.query, params = _ref.params, cachedParams = _ref.cachedParams, updateCachedParams = _ref.updateCachedParams, otherArgs = _ref.otherArgs;
    return _react2.default.createElement(_reactForm.FormField, { field: field }, function (_ref2) {
        var setValue = _ref2.setValue, getValue = _ref2.getValue;
        if (!(0, _lodash2.default)(params, cachedParams)) {
            setTimeout(function () {
                updateCachedParams(params);
                query(params, otherArgs).then(function (response) {
                    setValue('');
                }).catch(function (error) {
                    setValue(error.message || error);
                });
            });
        }
        return _react2.default.createElement('input', {
            type: 'hidden',
            value: getValue()
        });
    });
};