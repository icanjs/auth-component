/*auth-component@4.0.3#auth-component*/
define([
    'exports',
    './auth-container/auth-container',
    './forms/form/form',
    './forms/form-error/form-error',
    './forms/async-validator/async-validator',
    './forms/local-login/local-login',
    './forms/local-signup/local-signup',
    './buttons/button',
    './buttons/amazon/amazon',
    './buttons/dropbox/dropbox',
    './buttons/evernote/evernote',
    './buttons/facebook/facebook',
    './buttons/github/github',
    './buttons/google/google',
    './buttons/linkedin/linkedin',
    './buttons/microsoft/microsoft',
    './buttons/openid/openid',
    './buttons/paypal/paypal',
    './buttons/skype/skype',
    './buttons/slack/slack',
    './buttons/stackoverflow/stackoverflow',
    './buttons/twitter/twitter',
    './buttons/yahoo/yahoo'
], function (exports, _authContainer, _form, _formError, _asyncValidator, _localLogin, _localSignup, _button, _amazon, _dropbox, _evernote, _facebook, _github, _google, _linkedin, _microsoft, _openid, _paypal, _skype, _slack, _stackoverflow, _twitter, _yahoo) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.YahooButton = exports.TwitterButton = exports.StackOverflowButton = exports.SlackButton = exports.SkypeButton = exports.PayPalButton = exports.OpenIDButton = exports.MicrosoftButton = exports.LinkedInButton = exports.GoogleButton = exports.GithubButton = exports.FacebookButton = exports.EvernoteButton = exports.DropboxButton = exports.AmazonButton = exports.GenericButton = exports.LocalSignupForm = exports.LocalLoginForm = exports.AsyncValidator = exports.FormError = exports.Form = exports.AuthContainer = undefined;
    var _authContainer2 = _interopRequireDefault(_authContainer);
    var _form2 = _interopRequireDefault(_form);
    var _formError2 = _interopRequireDefault(_formError);
    var _asyncValidator2 = _interopRequireDefault(_asyncValidator);
    var _localLogin2 = _interopRequireDefault(_localLogin);
    var _localSignup2 = _interopRequireDefault(_localSignup);
    var _button2 = _interopRequireDefault(_button);
    var _amazon2 = _interopRequireDefault(_amazon);
    var _dropbox2 = _interopRequireDefault(_dropbox);
    var _evernote2 = _interopRequireDefault(_evernote);
    var _facebook2 = _interopRequireDefault(_facebook);
    var _github2 = _interopRequireDefault(_github);
    var _google2 = _interopRequireDefault(_google);
    var _linkedin2 = _interopRequireDefault(_linkedin);
    var _microsoft2 = _interopRequireDefault(_microsoft);
    var _openid2 = _interopRequireDefault(_openid);
    var _paypal2 = _interopRequireDefault(_paypal);
    var _skype2 = _interopRequireDefault(_skype);
    var _slack2 = _interopRequireDefault(_slack);
    var _stackoverflow2 = _interopRequireDefault(_stackoverflow);
    var _twitter2 = _interopRequireDefault(_twitter);
    var _yahoo2 = _interopRequireDefault(_yahoo);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.AuthContainer = _authContainer2.default;
    exports.Form = _form2.default;
    exports.FormError = _formError2.default;
    exports.AsyncValidator = _asyncValidator2.default;
    exports.LocalLoginForm = _localLogin2.default;
    exports.LocalSignupForm = _localSignup2.default;
    exports.GenericButton = _button2.default;
    exports.AmazonButton = _amazon2.default;
    exports.DropboxButton = _dropbox2.default;
    exports.EvernoteButton = _evernote2.default;
    exports.FacebookButton = _facebook2.default;
    exports.GithubButton = _github2.default;
    exports.GoogleButton = _google2.default;
    exports.LinkedInButton = _linkedin2.default;
    exports.MicrosoftButton = _microsoft2.default;
    exports.OpenIDButton = _openid2.default;
    exports.PayPalButton = _paypal2.default;
    exports.SkypeButton = _skype2.default;
    exports.SlackButton = _slack2.default;
    exports.StackOverflowButton = _stackoverflow2.default;
    exports.TwitterButton = _twitter2.default;
    exports.YahooButton = _yahoo2.default;
    exports.default = {
        AuthContainer: _authContainer2.default,
        Form: _form2.default,
        FormError: _formError2.default,
        AsyncValidator: _asyncValidator2.default,
        LocalLoginForm: _localLogin2.default,
        LocalSignupForm: _localSignup2.default,
        buttons: {
            Generic: _button2.default,
            Amazon: _amazon2.default,
            Dropbox: _dropbox2.default,
            Evernote: _evernote2.default,
            Facebook: _facebook2.default,
            Github: _github2.default,
            Google: _google2.default,
            LinkedIn: _linkedin2.default,
            Microsoft: _microsoft2.default,
            OpenID: _openid2.default,
            PayPal: _paypal2.default,
            Skype: _skype2.default,
            Slack: _slack2.default,
            StackOverflow: _stackoverflow2.default,
            Twitter: _twitter2.default,
            Yahoo: _yahoo2.default
        }
    };
});