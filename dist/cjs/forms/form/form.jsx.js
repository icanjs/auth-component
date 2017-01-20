/*auth-component@5.0.1#forms/form/form.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _reactForm = require('react-form');
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
exports.default = function (_ref) {
    var children = _ref.children, defaultValues = _ref.defaultValues, loadState = _ref.loadState, preValidate = _ref.preValidate, validate = _ref.validate, onValidationFail = _ref.onValidationFail, onChange = _ref.onChange, saveState = _ref.saveState, willUnmount = _ref.willUnmount, preSubmit = _ref.preSubmit, formSubmitted = _ref.formSubmitted, postSubmit = _ref.postSubmit, error = _ref.error, clearError = _ref.clearError;
    return _react2.default.createElement('div', null, _react2.default.createElement(_reactForm.Form, {
        onSubmit: formSubmitted,
        defaultValues: defaultValues,
        validate: validate,
        preValidate: preValidate,
        onValidationFail: onValidationFail,
        onChange: onChange,
        preSubmit: preSubmit,
        postSubmit: postSubmit,
        loadState: loadState,
        saveState: saveState,
        willUnmount: willUnmount
    }, children({
        error: error,
        clearError: clearError
    })));
};