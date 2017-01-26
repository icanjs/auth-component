/*[global-shim-start]*/
(function(exports, global, doEval){ // jshint ignore:line
	var origDefine = global.define;

	var get = function(name){
		var parts = name.split("."),
			cur = global,
			i;
		for(i = 0 ; i < parts.length; i++){
			if(!cur) {
				break;
			}
			cur = cur[parts[i]];
		}
		return cur;
	};
	var set = function(name, val){
		var parts = name.split("."),
			cur = global,
			i, part, next;
		for(i = 0; i < parts.length - 1; i++) {
			part = parts[i];
			next = cur[part];
			if(!next) {
				next = cur[part] = {};
			}
			cur = next;
		}
		part = parts[parts.length - 1];
		cur[part] = val;
	};
	var useDefault = function(mod){
		if(!mod || !mod.__esModule) return false;
		var esProps = { __esModule: true, "default": true };
		for(var p in mod) {
			if(!esProps[p]) return false;
		}
		return true;
	};
	var modules = (global.define && global.define.modules) ||
		(global._define && global._define.modules) || {};
	var ourDefine = global.define = function(moduleName, deps, callback){
		var module;
		if(typeof deps === "function") {
			callback = deps;
			deps = [];
		}
		var args = [],
			i;
		for(i =0; i < deps.length; i++) {
			args.push( exports[deps[i]] ? get(exports[deps[i]]) : ( modules[deps[i]] || get(deps[i]) )  );
		}
		// CJS has no dependencies but 3 callback arguments
		if(!deps.length && callback.length) {
			module = { exports: {} };
			var require = function(name) {
				return exports[name] ? get(exports[name]) : modules[name];
			};
			args.push(require, module.exports, module);
		}
		// Babel uses the exports and module object.
		else if(!args[0] && deps[0] === "exports") {
			module = { exports: {} };
			args[0] = module.exports;
			if(deps[1] === "module") {
				args[1] = module;
			}
		} else if(!args[0] && deps[0] === "module") {
			args[0] = { id: moduleName };
		}

		global.define = origDefine;
		var result = callback ? callback.apply(null, args) : undefined;
		global.define = ourDefine;

		// Favor CJS module.exports over the return value
		result = module && module.exports ? module.exports : result;
		modules[moduleName] = result;

		// Set global exports
		var globalExport = exports[moduleName];
		if(globalExport && !get(globalExport)) {
			if(useDefault(result)) {
				result = result["default"];
			}
			set(globalExport, result);
		}
	};
	global.define.orig = origDefine;
	global.define.modules = modules;
	global.define.amd = true;
	ourDefine("@loader", [], function(){
		// shim for @@global-helpers
		var noop = function(){};
		return {
			get: function(){
				return { prepareGlobal: noop, retrieveGlobal: noop };
			},
			global: global,
			__exec: function(__load){
				doEval(__load.source, global);
			}
		};
	});
}
)({},window,function(__$source__, __$global__) { // jshint ignore:line
	eval("(function() { " + __$source__ + " \n }).call(__$global__);");
}
)
/*auth-component@5.0.9#auth-container/auth-container.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define('auth-component/auth-container/auth-container.jsx', [
    'exports',
    'react'
], function (exports, _react) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function (_ref) {
        var children = _ref.children;
        return _react2.default.createElement('div', { className: 'auth-component' }, _react2.default.createElement('div', { className: 'auth-ui-container' }, children));
    };
});
/*auth-component@5.0.9#auth-container/auth-container*/
define('auth-component/auth-container/auth-container', [
    'exports',
    'auth-component/auth-container/auth-container.jsx',
    'auth-component/auth-container/auth-container.less'
], function (exports, _authContainer) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _authContainer2 = _interopRequireDefault(_authContainer);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _authContainer2.default;
});
/*auth-component@5.0.9#utils*/
define('auth-component/utils', ['exports'], function (exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.devWarning = devWarning;
    function devWarning(message) {
        if (window.location.hostname === 'localhost') {
            console.warn(message + ' This message will not show in production.');
        }
    }
});
/*auth-component@5.0.9#forms/form/form.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define('auth-component/forms/form/form.jsx', [
    'exports',
    'react',
    'react-form'
], function (exports, _react, _reactForm) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
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
});
/*auth-component@5.0.9#forms/form/form*/
define('auth-component/forms/form/form', [
    'exports',
    'react-view-models',
    'can-define/map/map',
    'auth-component/utils',
    'auth-component/forms/form/form.jsx'
], function (exports, _reactViewModels, _map, _utils, _form) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ViewModel = undefined;
    var _map2 = _interopRequireDefault(_map);
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
});
/*auth-component@5.0.9#forms/form-error/form-error.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define('auth-component/forms/form-error/form-error.jsx', [
    'exports',
    'react'
], function (exports, _react) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function (_ref) {
        var error = _ref.error, clearError = _ref.clearError;
        return error && _react2.default.createElement('div', { className: 'FormError' }, error) || null;
    };
});
/*auth-component@5.0.9#forms/form-error/form-error*/
define('auth-component/forms/form-error/form-error', [
    'exports',
    'react-view-models',
    'can-define/map/map',
    'auth-component/forms/form-error/form-error.jsx'
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
/*auth-component@5.0.9#forms/async-validator/async-validator.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define('auth-component/forms/async-validator/async-validator.jsx', [
    'exports',
    'react',
    'react-form',
    'lodash.isequal'
], function (exports, _react, _reactForm, _lodash) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
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
});
/*auth-component@5.0.9#forms/async-validator/async-validator*/
define('auth-component/forms/async-validator/async-validator', [
    'exports',
    'react-view-models',
    'can-define/map/map',
    'lodash.debounce',
    'auth-component/forms/async-validator/async-validator.jsx'
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
/*auth-component@5.0.9#forms/local-login/local-login*/
define('auth-component/forms/local-login/local-login', [
    'exports',
    'react',
    'react-form',
    'auth-component/forms/form/form',
    'auth-component/forms/form-error/form-error',
    'auth-component/forms/forms.less'
], function (exports, _react, _reactForm, _form, _formError) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    var _form2 = _interopRequireDefault(_form);
    var _formError2 = _interopRequireDefault(_formError);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) {
            if (keys.indexOf(i) >= 0)
                continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i))
                continue;
            target[i] = obj[i];
        }
        return target;
    }
    exports.default = function (_ref) {
        var forgotClicked = _ref.forgotClicked, _ref$usernameField = _ref.usernameField, usernameField = _ref$usernameField === undefined ? 'email' : _ref$usernameField, _ref$usernamePlacehol = _ref.usernamePlaceholder, usernamePlaceholder = _ref$usernamePlacehol === undefined ? 'e-mail address' : _ref$usernamePlacehol, _ref$passwordField = _ref.passwordField, passwordField = _ref$passwordField === undefined ? 'password' : _ref$passwordField, _ref$passwordPlacehol = _ref.passwordPlaceholder, passwordPlaceholder = _ref$passwordPlacehol === undefined ? 'password' : _ref$passwordPlacehol, buttonText = _ref.buttonText, rest = _objectWithoutProperties(_ref, [
                'forgotClicked',
                'usernameField',
                'usernamePlaceholder',
                'passwordField',
                'passwordPlaceholder',
                'buttonText'
            ]);
        return _react2.default.createElement(_form2.default, rest, function (_ref2) {
            var error = _ref2.error, clearError = _ref2.clearError;
            return function (_ref3) {
                var values = _ref3.values, submitForm = _ref3.submitForm;
                return _react2.default.createElement('form', {
                    onSubmit: submitForm,
                    className: 'auth-component-form'
                }, _react2.default.createElement(_formError2.default, {
                    error: error,
                    clearError: clearError
                }), _react2.default.createElement(_reactForm.Text, {
                    field: usernameField,
                    placeholder: usernamePlaceholder,
                    tabIndex: '1'
                }), _react2.default.createElement(_reactForm.Text, {
                    field: passwordField,
                    type: 'password',
                    placeholder: passwordPlaceholder,
                    tabIndex: '1'
                }), _react2.default.createElement('div', { className: 'forgot-password' }, _react2.default.createElement('a', {
                    href: 'javascript://',
                    onClick: forgotClicked,
                    tabIndex: '2'
                }, 'forgot password')), _react2.default.createElement('button', {
                    type: 'submit',
                    tabIndex: '1'
                }, buttonText || 'Login'));
            };
        });
    };
});
/*auth-component@5.0.9#forms/local-signup/local-signup*/
define('auth-component/forms/local-signup/local-signup', [
    'exports',
    'react',
    'react-form',
    'auth-component/forms/async-validator/async-validator',
    'auth-component/forms/form/form',
    'auth-component/forms/form-error/form-error',
    'auth-component/forms/forms.less'
], function (exports, _react, _reactForm, _asyncValidator, _form, _formError) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    var _asyncValidator2 = _interopRequireDefault(_asyncValidator);
    var _form2 = _interopRequireDefault(_form);
    var _formError2 = _interopRequireDefault(_formError);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) {
            if (keys.indexOf(i) >= 0)
                continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i))
                continue;
            target[i] = obj[i];
        }
        return target;
    }
    exports.default = function (_ref) {
        var asyncValidation = _ref.asyncValidation, forgotClicked = _ref.forgotClicked, buttonText = _ref.buttonText, _ref$usernameField = _ref.usernameField, usernameField = _ref$usernameField === undefined ? 'email' : _ref$usernameField, _ref$usernamePlacehol = _ref.usernamePlaceholder, usernamePlaceholder = _ref$usernamePlacehol === undefined ? 'e-mail address' : _ref$usernamePlacehol, _ref$passwordField = _ref.passwordField, passwordField = _ref$passwordField === undefined ? 'password' : _ref$passwordField, _ref$passwordPlacehol = _ref.passwordPlaceholder, passwordPlaceholder = _ref$passwordPlacehol === undefined ? 'password' : _ref$passwordPlacehol, rest = _objectWithoutProperties(_ref, [
                'asyncValidation',
                'forgotClicked',
                'buttonText',
                'usernameField',
                'usernamePlaceholder',
                'passwordField',
                'passwordPlaceholder'
            ]);
        return _react2.default.createElement(_form2.default, rest, function (_ref2) {
            var error = _ref2.error, clearError = _ref2.clearError;
            return function (_ref3) {
                var values = _ref3.values, submitForm = _ref3.submitForm;
                var queryParams = { email: values.email };
                return _react2.default.createElement('form', {
                    onSubmit: submitForm,
                    className: 'auth-component-form'
                }, _react2.default.createElement(_formError2.default, {
                    error: error,
                    clearError: clearError
                }), _react2.default.createElement(_reactForm.Text, {
                    field: usernameField,
                    placeholder: usernamePlaceholder,
                    tabIndex: '1'
                }), _react2.default.createElement(_reactForm.Text, {
                    field: passwordField,
                    type: 'password',
                    placeholder: passwordPlaceholder,
                    tabIndex: '1'
                }), asyncValidation && _react2.default.createElement(_asyncValidator2.default, {
                    field: 'emailError',
                    params: queryParams,
                    validate: asyncValidation
                }), _react2.default.createElement('div', { className: 'forgot-password' }), _react2.default.createElement('button', {
                    type: 'submit',
                    tabIndex: '1'
                }, buttonText || 'Signup'));
            };
        });
    };
});
/*auth-component@5.0.9#buttons/button.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define('auth-component/buttons/button.jsx', [
    'exports',
    'react',
    'feathers-authentication-popups/handler',
    'react-svg-inline',
    'auth-component/buttons/button.less'
], function (exports, _react, _handler, _reactSvgInline) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    var _handler2 = _interopRequireDefault(_handler);
    var _reactSvgInline2 = _interopRequireDefault(_reactSvgInline);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function (_ref) {
        var name = _ref.name, classSuffix = _ref.classSuffix, url = _ref.url, img = _ref.img, alt = _ref.alt, text = _ref.text, popup = _ref.popup, svg = _ref.svg;
        return _react2.default.createElement('button', {
            className: 'auth-button oauth-' + (classSuffix || name.toLowerCase().replace(' ', '')),
            title: 'Login with ' + name
        }, _react2.default.createElement('a', {
            href: url,
            onClick: popup ? (0, _handler2.default)(url) : null
        }, svg ? _react2.default.createElement(_reactSvgInline2.default, { svg: svg }) : _react2.default.createElement('img', {
            className: 'logo',
            src: img,
            alt: alt
        }), text && _react2.default.createElement('span', { className: 'auth-button-text' }, text)));
    };
});
/*auth-component@5.0.9#buttons/button*/
define('auth-component/buttons/button', [
    'exports',
    'auth-component/buttons/button.jsx',
    'auth-component/buttons/button.less'
], function (exports, _button) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _button2 = _interopRequireDefault(_button);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _button2.default;
});
/*auth-component@5.0.9#buttons/amazon/amazon.svg!steal-svg@0.0.5#steal-svg*/
define('auth-component/buttons/amazon/amazon.svg', ['exports'], function (exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = '\n<svg viewBox="0 0 28 26"  >\n  <title>amazon</title>\n  <g id="Amazon" transform="translate(-31.000000, -13.000000)" fill="#000000">\n    <path d="M47.5643278,19.5741457 C46.886471,19.6277839 46.0978241,19.6814808 45.3161456,19.7876448 C44.1214639,19.9404788 42.920985,20.1516356 41.9340053,20.6229616 C40.0066573,21.4034691 38.7000145,23.0741028 38.7000145,25.5310996 C38.7000145,28.6052881 40.6810008,30.1778973 43.1811542,30.1778973 C44.016471,30.1778973 44.6943279,30.069391 45.3161456,29.9107598 C46.3124944,29.6027496 47.1396133,29.0311153 48.1371333,27.9764436 C48.7111098,28.7662616 48.8593178,29.122113 49.8486398,29.9656278 C50.1134935,30.0706207 50.3771175,30.0706207 50.5813061,29.9108184 C51.2066372,29.3869667 52.3021232,28.4547964 52.8761584,27.9216341 C53.1421832,27.7186167 53.0919998,27.4001247 52.9297966,27.1469824 C52.3558201,26.4108027 51.7841272,25.7901562 51.7841272,24.3831465 L51.7841272,19.6826519 C51.7841272,17.69581 51.9451007,15.8676577 50.4786555,14.5178583 C49.2874872,13.42003 47.4103227,13 45.952017,13 L45.3255147,13 C42.6643293,13.1598608 39.8573368,14.3066428 39.2273796,17.5955017 C39.1223868,18.0120182 39.4338519,18.1694782 39.6415539,18.2196617 L42.559395,18.5848237 C42.8709187,18.5334691 43.0283787,18.2721288 43.0785622,18.0131308 C43.3434159,16.8662903 44.2755861,16.2899714 45.3162041,16.188492 L45.5308744,16.188492 C46.1503498,16.188492 46.8340624,16.4463188 47.1933687,16.9701705 C47.6052007,17.5966728 47.5632153,18.4319897 47.5632153,19.1623137 L47.5643278,19.5741457 L47.5643278,19.5741457 L47.5643278,19.5741457 Z M47.5643278,22.6074613 C47.5643278,23.8091113 47.6063133,24.7436239 46.9903513,25.7866427 C46.6205047,26.5181379 45.9940024,26.9894639 45.3162041,27.1469824 C45.2158958,27.1469824 45.0630618,27.2006207 44.9020299,27.2006207 C43.7563604,27.2006207 43.0785622,26.3104359 43.0785622,25.0049642 C43.0785622,23.3366142 44.0690553,22.553823 45.3162041,22.1874899 C45.9928898,22.0311425 46.7768521,21.9786753 47.5643864,21.9786753 C47.5643278,21.9786168 47.5643278,22.6074613 47.5643278,22.6074613 L47.5643278,22.6074613 Z M57.1636497,37.2607283 C58.4329917,36.1780664 58.9731223,34.2250704 59,33.2007312 L59,33.0280464 C59,32.8086915 58.9428483,32.6418624 58.8879803,32.5543781 C58.6278112,32.2382284 56.7611283,31.954695 55.1464752,32.4318767 C54.6972838,32.5847107 54.2959921,32.778359 53.9377983,33.0339021 C53.6461255,33.2287215 53.7009935,33.4924041 53.9926078,33.4597292 C54.2994469,33.4072035 54.7019098,33.376871 55.1475878,33.3115798 C56.1392521,33.2287215 57.3047723,33.2030735 57.5812203,33.5740912 C57.9825706,34.0477595 57.1332001,36.1535895 56.7587275,37.0554272 C56.647996,37.3459289 56.8999672,37.4578901 57.1636497,37.2607283 L57.1636497,37.2607283 Z M31.1424026,33.2007898 C34.7905677,36.5257783 39.6030233,38.5032512 44.9860593,38.5032512 C48.3308987,38.5032512 52.1703698,37.5710809 55.1441915,35.7872564 C55.55251,35.5667304 55.938694,35.3019352 56.3108829,35.0195729 C56.8160549,34.6520687 56.3668634,34.0897449 55.8570654,34.3125547 C55.6342557,34.3954129 55.369402,34.5050318 55.14425,34.5925747 C51.8961469,35.8723984 48.469679,36.4685681 45.2975244,36.4685681 C40.2552322,36.4685681 35.3867374,35.0767247 31.451584,32.7795887 C31.0817374,32.582427 30.8273654,32.9464178 31.1424026,33.2007898 L31.1424026,33.2007898 Z" id="amazon"></path>\n  </g>\n</svg>\n';
});
/*auth-component@5.0.9#buttons/amazon/amazon.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define('auth-component/buttons/amazon/amazon.jsx', [
    'exports',
    'react',
    'auth-component/buttons/button',
    'auth-component/buttons/amazon/amazon.svg',
    'auth-component/buttons/amazon/amazon.less'
], function (exports, _react, _button, _amazon) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    var _button2 = _interopRequireDefault(_button);
    var _amazon2 = _interopRequireDefault(_amazon);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function (_ref) {
        var name = _ref.name, url = _ref.url, img = _ref.img, alt = _ref.alt, text = _ref.text, popup = _ref.popup;
        return _react2.default.createElement(_button2.default, {
            name: name || 'Amazon',
            url: url || '/auth/amazon',
            svg: _amazon2.default,
            alt: alt,
            text: text,
            popup: popup
        });
    };
});
/*auth-component@5.0.9#buttons/amazon/amazon*/
define('auth-component/buttons/amazon/amazon', [
    'exports',
    'auth-component/buttons/amazon/amazon.jsx',
    'auth-component/buttons/amazon/amazon.less'
], function (exports, _amazon) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _amazon2 = _interopRequireDefault(_amazon);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _amazon2.default;
});
/*auth-component@5.0.9#buttons/dropbox/dropbox.svg!steal-svg@0.0.5#steal-svg*/
define('auth-component/buttons/dropbox/dropbox.svg', ['exports'], function (exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = '\n<svg viewBox="0 0 30 28" version="1.1"  >\n  <title>dropbox</title>\n  <g id="Dropbox" transform="translate(-31.000000, -12.000000)" fill="#FFFFFF">\n    <g id="dropbox" transform="translate(31.000000, 12.000000)">\n      <polygon id="Shape" points="8.81716387 21.329237 14.9709454 16.1860858 6.0819958 10.6820316 0 15.5726772"></polygon>\n      <polygon id="Shape" points="14.9709454 16.1856433 21.1428782 21.3287946 29.9418908 15.5722348 23.860084 10.6820316"></polygon>\n      <polygon id="Shape" points="15.0069958 17.3047585 15.0069958 17.2684786 14.9890966 17.2866185 14.9709454 17.2684786 14.9709454 17.3047585 8.81716387 22.4297698 6.17193277 20.6974357 6.17193277 22.6460587 14.9709454 27.9336975 14.9709454 27.9516479 14.9890966 27.9336975 15.0069958 27.9516479 15.0069958 27.9336975 23.8240336 22.6460587 23.8240336 20.6974357 21.1787395 22.4297698"></polygon>\n      <polygon id="Shape" points="0 5.80965237 6.0819958 10.6820316 14.9709454 5.19624379 8.81716387 0.0532189616"></polygon>\n      <polygon id="Shape" points="21.1428782 0.0532189616 14.9709454 5.19624379 23.860084 10.6820316 29.9418908 5.80965237"></polygon>\n    </g>\n  </g>\n</svg>\n';
});
/*auth-component@5.0.9#buttons/dropbox/dropbox.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define('auth-component/buttons/dropbox/dropbox.jsx', [
    'exports',
    'react',
    'auth-component/buttons/button.jsx',
    'auth-component/buttons/dropbox/dropbox.svg'
], function (exports, _react, _button, _dropbox) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    var _button2 = _interopRequireDefault(_button);
    var _dropbox2 = _interopRequireDefault(_dropbox);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function (_ref) {
        var name = _ref.name, url = _ref.url, img = _ref.img, alt = _ref.alt, text = _ref.text, popup = _ref.popup;
        return _react2.default.createElement(_button2.default, {
            name: name || 'Dropbox',
            url: url || '/auth/dropbox',
            svg: _dropbox2.default,
            alt: alt,
            text: text,
            popup: popup
        });
    };
});
/*auth-component@5.0.9#buttons/dropbox/dropbox*/
define('auth-component/buttons/dropbox/dropbox', [
    'exports',
    'auth-component/buttons/dropbox/dropbox.jsx',
    'auth-component/buttons/dropbox/dropbox.less'
], function (exports, _dropbox) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _dropbox2 = _interopRequireDefault(_dropbox);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _dropbox2.default;
});
/*auth-component@5.0.9#buttons/evernote/evernote.svg!steal-svg@0.0.5#steal-svg*/
define('auth-component/buttons/evernote/evernote.svg', ['exports'], function (exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = '\n<svg viewBox="0 0 25 29" version="1.1"  >\n  <title>evernote</title>\n  <g id="Evernote" transform="translate(-34.000000, -12.000000)" fill="#FFFFFF">\n    <path d="M39.8821667,18.2498222 L35.1815889,18.2443444 L41.0708444,12.319 L41.0724556,17.0978778 L39.8821667,18.2498222 L39.8821667,18.2498222 Z M56.5342889,15.8959889 C56.0329111,15.0324333 53.4126,14.0374111 52.0515333,14.0374111 L48.5460778,14.0374111 C48.5460778,14.0374111 47.4205556,12 44.7741444,12 C42.1261222,12 42.3039889,13.1803 42.3039889,14.1882111 L42.3039889,18.2630333 L41.1037111,19.5300111 L35.5614889,19.5300111 C35.5614889,19.5300111 34,20.5627333 34,22.7950889 C34,25.0277667 34.6927778,32.8065333 39.3440556,33.5267 C44.8476111,34.3793 45.7901111,31.8211778 45.7901111,31.5141 C45.7901111,30.2184444 45.8229778,28.2561111 45.8229778,28.2561111 C45.8229778,28.2561111 47.4344111,31.3352667 49.8684778,31.3352667 C52.3022222,31.3352667 53.7171,32.7333889 53.7171,34.1734 L53.7171,36.8375333 C53.7171,36.8375333 53.6265556,38.5050333 52.1958889,38.5050333 L49.1415444,38.5050333 C49.1415444,38.5050333 48.1391111,37.7242889 48.1391111,36.6451667 C48.1391111,35.5654 48.6292111,35.2718556 49.2014778,35.2718556 C49.7737444,35.2718556 50.2432222,35.3382333 50.2432222,35.3382333 L50.2432222,33.0672111 C50.2432222,33.0672111 45.6341556,33.0372444 45.6341556,36.5665444 C45.6344778,40.0939111 48.0447,41 49.9773889,41 L53.1258222,41 C53.1258222,41 58.8111111,40.2685556 58.8111111,29.0375 C58.8111111,17.8051556 57.0350222,16.7601889 56.5342889,15.8959889 L56.5342889,15.8959889 Z M50.8809,25.9641444 C50.8809,25.9641444 51.1573667,24.1120111 52.2313333,24.1120111 C53.3053,24.1120111 54.7804333,26.5857111 54.7804333,26.5857111 C54.7804333,26.5857111 51.4157889,25.9641444 50.8809,25.9641444 L50.8809,25.9641444 Z" id="evernote"></path>\n  </g>\n</svg>\n';
});
/*auth-component@5.0.9#buttons/evernote/evernote.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define('auth-component/buttons/evernote/evernote.jsx', [
    'exports',
    'react',
    'auth-component/buttons/button.jsx',
    'auth-component/buttons/evernote/evernote.svg'
], function (exports, _react, _button, _evernote) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    var _button2 = _interopRequireDefault(_button);
    var _evernote2 = _interopRequireDefault(_evernote);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function (_ref) {
        var name = _ref.name, url = _ref.url, img = _ref.img, alt = _ref.alt, text = _ref.text, popup = _ref.popup;
        return _react2.default.createElement(_button2.default, {
            name: name || 'Evernote',
            url: url || '/auth/evernote',
            svg: _evernote2.default,
            alt: alt,
            text: text,
            popup: popup
        });
    };
});
/*auth-component@5.0.9#buttons/evernote/evernote*/
define('auth-component/buttons/evernote/evernote', [
    'exports',
    'auth-component/buttons/evernote/evernote.jsx',
    'auth-component/buttons/evernote/evernote.less'
], function (exports, _evernote) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _evernote2 = _interopRequireDefault(_evernote);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _evernote2.default;
});
/*auth-component@5.0.9#buttons/facebook/facebook.svg!steal-svg@0.0.5#steal-svg*/
define('auth-component/buttons/facebook/facebook.svg', ['exports'], function (exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = '\n<svg viewBox="0 0 30 30" version="1.1"  >\n  <title>facebook</title>\n  <g id="Facebook" transform="translate(-31.000000, -11.000000)" fill="#FFFFFF">\n    <path d="M31.5335249,11.4771433 C31.0629733,11.9542866 31,12.6858064 31,13.0358952 L31,38.5855823 C31,38.889671 31,39.5388564 31.5335249,40.0360003 C32.0670498,40.5331441 32.5878912,40.4314221 32.9098788,40.4314221 L46.6920694,40.4314221 L46.6920694,29.0626772 L42.8560779,29.0626772 L42.8560779,24.4216404 L46.6920694,24.4216404 L46.6920694,20.5239935 C46.6920694,17.6893471 48.9926299,15.3914319 51.8305394,15.3914319 L55.8407766,15.3914319 L55.8407766,19.5647744 L52.9712507,19.5647744 C52.069505,19.5647744 51.3384489,20.2949898 51.3384489,21.1956987 L51.3384489,24.421705 L55.7686861,24.421705 L55.1564016,29.0627418 L51.3384489,29.0627418 L51.3384489,40.4314221 L58.5921788,40.4314221 C58.9008446,40.4314221 59.5763095,40.4959488 60.0446429,40.0360003 C60.5129763,39.5760518 60.4653026,38.9018905 60.4653026,38.5918341 L60.4653026,12.9524436 C60.4653026,12.6192633 60.4817712,11.9542866 60.0446429,11.4771433 C59.6075146,11 58.9110589,11 58.6090781,11 L32.9241743,11 C32.6136603,11 32.0040765,11 31.5335249,11.4771433 Z" id="facebook"></path>\n  </g>\n</svg>\n';
});
/*auth-component@5.0.9#buttons/facebook/facebook.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define('auth-component/buttons/facebook/facebook.jsx', [
    'exports',
    'react',
    'auth-component/buttons/button.jsx',
    'auth-component/buttons/facebook/facebook.svg'
], function (exports, _react, _button, _facebook) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    var _button2 = _interopRequireDefault(_button);
    var _facebook2 = _interopRequireDefault(_facebook);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function (_ref) {
        var name = _ref.name, url = _ref.url, img = _ref.img, alt = _ref.alt, text = _ref.text, popup = _ref.popup;
        return _react2.default.createElement(_button2.default, {
            name: name || 'Facebook',
            url: url || '/auth/facebook',
            svg: _facebook2.default,
            alt: alt,
            text: text,
            popup: popup
        });
    };
});
/*auth-component@5.0.9#buttons/facebook/facebook*/
define('auth-component/buttons/facebook/facebook', [
    'exports',
    'auth-component/buttons/facebook/facebook.jsx',
    'auth-component/buttons/facebook/facebook.less'
], function (exports, _facebook) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _facebook2 = _interopRequireDefault(_facebook);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _facebook2.default;
});
/*auth-component@5.0.9#buttons/github/github.svg!steal-svg@0.0.5#steal-svg*/
define('auth-component/buttons/github/github.svg', ['exports'], function (exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = '\n<svg viewBox="0 0 30 30" version="1.1"  >\n  <title>github</title>\n  <g id="GitHub" transform="translate(-31.000000, -11.000000)" fill="#FFFFFF">\n    <path d="M58.8161306,12.6177246 C57.7365364,11.5393086 56.4369154,11 54.9162609,11 L36.5191268,11 C34.9989421,11 33.6988513,11.5393086 32.61919,12.6177246 C31.5397971,13.6963419 31,14.9952561 31,16.5141321 L31,34.8948855 C31,36.4138285 31.5397971,37.7126087 32.61919,38.7910247 C33.6987842,39.8696419 34.9989421,40.4089505 36.5191268,40.4089505 L40.8117959,40.4089505 C41.0926354,40.4089505 41.3036006,40.3992937 41.4440875,40.3805164 C41.5845072,40.3612027 41.724927,40.2781806 41.8655481,40.1312488 C42.0062363,39.9845853 42.0763119,39.7707262 42.0763119,39.4900067 C42.0763119,39.4519158 42.0729558,39.0174914 42.0666463,38.1878735 C42.0601355,37.3579874 42.0569807,36.7007176 42.0569807,36.2155947 L41.6161889,36.292246 C41.3351481,36.3432128 40.9806084,36.3656784 40.5525698,36.3592405 C40.1247326,36.3528026 39.6806518,36.3082737 39.2207973,36.2252516 C38.7606743,36.1421624 38.3328371,35.9507688 37.9367487,35.651071 C37.5408617,35.3508366 37.2598208,34.9584598 37.0936932,34.473538 L36.9019921,34.0328769 C36.7742585,33.7396169 36.5731602,33.4139663 36.2984289,33.0568638 C36.0236975,32.6992918 35.7458785,32.4567304 35.4648377,32.3291123 L35.3306603,32.2333485 C35.2413206,32.169573 35.1582904,32.0926535 35.0815696,32.0033946 C35.0049831,31.9138675 34.9475265,31.8244075 34.9091997,31.7353498 C34.8708729,31.6458227 34.9026888,31.5723903 35.0049831,31.5147845 C35.1072774,31.4574469 35.2923335,31.4290128 35.5607554,31.4290128 L35.9438891,31.4863504 C36.1994907,31.5373172 36.5155022,31.6903515 36.892595,31.9457888 C37.2694193,32.2010249 37.5791885,32.5328452 37.8219696,32.9411827 C38.1159651,33.4646648 38.4701692,33.8632784 38.8855888,34.1377611 C39.3006727,34.4125121 39.71918,34.5497199 40.1407077,34.5497199 C40.5622354,34.5497199 40.9263065,34.5177986 41.2330551,34.4542243 C41.5394682,34.3902477 41.8269528,34.2942826 42.0953746,34.1666646 C42.210355,33.3115634 42.5234132,32.6538241 43.0342806,32.1943858 C42.3061385,32.1177345 41.6514281,32.0029923 41.0699481,31.8496897 C40.4888036,31.6963871 39.8882609,31.4476559 39.2687226,31.1028928 C38.6489157,30.7581966 38.1347593,30.3308807 37.7259177,29.8200062 C37.3171432,29.3091317 36.9816662,28.6390531 36.7199566,27.8096364 C36.4581127,26.9797503 36.3271572,26.0223133 36.3271572,24.9374593 C36.3271572,23.3931 36.8319836,22.078158 37.8412337,20.9933041 C37.3684246,19.8317988 37.4130609,18.5300009 37.9752768,17.087508 C38.3457916,16.9725646 38.8952544,17.0588056 39.6233965,17.3460301 C40.3516729,17.6334557 40.884892,17.8792361 41.2235909,18.0831701 C41.5622897,18.2871712 41.833665,18.4596534 42.0381194,18.6002143 C43.2265188,18.2683269 44.4529093,18.1024168 45.7176267,18.1024168 C46.982277,18.1024168 48.2088689,18.2683269 49.3973355,18.6002143 L50.1255447,18.1407089 C50.6239945,17.8342378 51.2115827,17.5534513 51.888779,17.2982823 C52.5659083,17.0430462 53.0832194,16.9727657 53.4411153,17.0877092 C54.0158159,18.5302021 54.0672316,19.832 53.5940869,20.9934382 C54.603337,22.0784262 55.1082976,23.3933011 55.1082976,24.9376605 C55.1082976,26.0227156 54.9773421,26.9833717 54.7154983,27.8192262 C54.4538557,28.655282 54.1154925,29.3256288 53.6999386,29.8297972 C53.2848547,30.3340326 52.7673421,30.7581296 52.1478038,31.1030269 C51.5281312,31.4475218 50.9276556,31.6967224 50.3462427,31.8495555 C49.7648969,32.0028581 49.1102536,32.1180698 48.3820443,32.1947211 C49.0459505,32.7689017 49.3780714,33.6749026 49.3780714,34.9132603 L49.3780714,39.4894032 C49.3780714,39.7064813 49.4097531,39.8818471 49.4736535,40.0159031 C49.5379566,40.1498919 49.6399824,40.2421686 49.7804692,40.2936047 C49.9215602,40.3445715 50.045535,40.3764257 50.1544073,40.3891003 C50.2632796,40.4019091 50.419473,40.408347 50.6239274,40.408347 L54.9165965,40.408347 C56.4367812,40.408347 57.7369391,39.8690384 58.8160635,38.7904211 C59.8956577,37.7118039 60.4354548,36.4128226 60.4354548,34.8940137 L60.4354548,16.5141321 C60.4353206,14.9952561 59.8955235,13.6961407 58.8161306,12.6177246 L58.8161306,12.6177246 Z" id="github"></path>\n  </g>\n</svg>\n';
});
/*auth-component@5.0.9#buttons/github/github.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define('auth-component/buttons/github/github.jsx', [
    'exports',
    'react',
    'auth-component/buttons/button.jsx',
    'auth-component/buttons/github/github.svg'
], function (exports, _react, _button, _github) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    var _button2 = _interopRequireDefault(_button);
    var _github2 = _interopRequireDefault(_github);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function (_ref) {
        var name = _ref.name, url = _ref.url, img = _ref.img, alt = _ref.alt, text = _ref.text, popup = _ref.popup;
        return _react2.default.createElement(_button2.default, {
            name: name || 'GitHub',
            url: url || '/auth/github',
            svg: _github2.default,
            alt: alt,
            text: text,
            popup: popup
        });
    };
});
/*auth-component@5.0.9#buttons/github/github*/
define('auth-component/buttons/github/github', [
    'exports',
    'auth-component/buttons/github/github.jsx',
    'auth-component/buttons/github/github.less'
], function (exports, _github) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _github2 = _interopRequireDefault(_github);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _github2.default;
});
/*auth-component@5.0.9#buttons/google/google.svg!steal-svg@0.0.5#steal-svg*/
define('auth-component/buttons/google/google.svg', ['exports'], function (exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = '\n<svg viewBox="0 0 27 28" version="1.1"  >\n  <title>google</title>\n  <g id="Google+" transform="translate(-32.000000, -12.000000)" fill="#FFFFFF">\n    <path d="M58.6005981,28.3534847 C57.5425642,35.2984962 52.3606013,39.2800007 45.6516646,39.2800007 C38.1123756,39.2800007 32,33.1724224 32,25.6390507 C32,18.1075783 38.1123756,12 45.6516646,12 C49.2986434,12 52.4941962,13.300443 54.8201601,15.5578363 L50.9023257,19.4725957 C49.5754727,18.136881 47.7597221,17.4249338 45.6516646,17.4249338 C41.213706,17.4249338 37.6157391,21.2063389 37.6157391,25.6389151 C37.6157391,30.0754254 41.213706,33.747081 45.6516646,33.747081 C49.3712789,33.747081 52.1880412,31.9505269 53.0006079,28.3534847 L45.6516646,28.3534847 L45.6516646,22.8755076 L58.5673351,22.8755076 C58.7223813,23.7581158 58.8008547,24.6818292 58.8008547,25.6389151 C58.800719,26.5882683 58.7320207,27.4924466 58.6005981,28.3534847 L58.6005981,28.3534847 Z" id="google"></path>\n  </g>\n</svg>\n';
});
/*auth-component@5.0.9#buttons/google/google.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define('auth-component/buttons/google/google.jsx', [
    'exports',
    'react',
    'auth-component/buttons/button.jsx',
    'auth-component/buttons/google/google.svg'
], function (exports, _react, _button, _google) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    var _button2 = _interopRequireDefault(_button);
    var _google2 = _interopRequireDefault(_google);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function (_ref) {
        var name = _ref.name, url = _ref.url, img = _ref.img, alt = _ref.alt, text = _ref.text, popup = _ref.popup;
        return _react2.default.createElement(_button2.default, {
            name: name || 'Google',
            url: url || '/auth/google',
            svg: _google2.default,
            alt: alt,
            text: text,
            popup: popup
        });
    };
});
/*auth-component@5.0.9#buttons/google/google*/
define('auth-component/buttons/google/google', [
    'exports',
    'auth-component/buttons/google/google.jsx',
    'auth-component/buttons/google/google.less'
], function (exports, _google) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _google2 = _interopRequireDefault(_google);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _google2.default;
});
/*auth-component@5.0.9#buttons/linkedin/linkedin.svg!steal-svg@0.0.5#steal-svg*/
define('auth-component/buttons/linkedin/linkedin.svg', ['exports'], function (exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = '\n<svg viewBox="0 0 27 27" version="1.1"  >\n  <title>linkedin</title>\n  <g id="Linkedin" transform="translate(-33.000000, -13.000000)" fill="#FFFFFF">\n    <g id="linkedin" transform="translate(33.000000, 13.000000)">\n      <path d="M3.33286391,0.2409939 C5.09814689,0.2409939 6.53208386,1.67518932 6.53208386,3.44073067 C6.53208386,5.20756431 5.09814689,6.64227664 3.33286391,6.64227664 C1.56396265,6.64227664 0.131834968,5.20756431 0.131834968,3.44073067 C0.131834968,1.67518932 1.56396265,0.2409939 3.33286391,0.2409939 L3.33286391,0.2409939 L3.33286391,0.2409939 Z M0.571734191,9.07025135 L6.09192613,9.07025135 L6.09192613,26.831892 L0.571734191,26.831892 L0.571734191,9.07025135 L0.571734191,9.07025135 Z" id="Shape"></path>\n      <path d="M9.55425849,9.07025135 L14.8498486,9.07025135 L14.8498486,11.4969338 L14.9232513,11.4969338 C15.6598627,10.100732 17.460813,8.6282845 20.146214,8.6282845 C25.7361903,8.6282845 26.7682219,12.3069479 26.7682219,17.0892362 L26.7682219,26.831892 L21.2519068,26.831892 L21.2519068,18.1944118 C21.2519068,16.133709 21.2139129,13.4844924 18.3832573,13.4844924 C15.5104729,13.4844924 15.0705736,15.7284435 15.0705736,18.0452803 L15.0705736,26.831892 L9.55425849,26.831892 L9.55425849,9.07025135" id="Shape"></path>\n    </g>\n  </g>\n</svg>\n';
});
/*auth-component@5.0.9#buttons/linkedin/linkedin.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define('auth-component/buttons/linkedin/linkedin.jsx', [
    'exports',
    'react',
    'auth-component/buttons/button.jsx',
    'auth-component/buttons/linkedin/linkedin.svg'
], function (exports, _react, _button, _linkedin) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    var _button2 = _interopRequireDefault(_button);
    var _linkedin2 = _interopRequireDefault(_linkedin);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function (_ref) {
        var name = _ref.name, url = _ref.url, img = _ref.img, alt = _ref.alt, text = _ref.text, popup = _ref.popup;
        return _react2.default.createElement(_button2.default, {
            name: name || 'LinkedIn',
            url: url || '/auth/linkedin',
            svg: _linkedin2.default,
            alt: alt,
            text: text,
            popup: popup
        });
    };
});
/*auth-component@5.0.9#buttons/linkedin/linkedin*/
define('auth-component/buttons/linkedin/linkedin', [
    'exports',
    'auth-component/buttons/linkedin/linkedin.jsx',
    'auth-component/buttons/linkedin/linkedin.less'
], function (exports, _linkedin) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _linkedin2 = _interopRequireDefault(_linkedin);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _linkedin2.default;
});
/*auth-component@5.0.9#buttons/microsoft/microsoft.svg!steal-svg@0.0.5#steal-svg*/
define('auth-component/buttons/microsoft/microsoft.svg', ['exports'], function (exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = '\n<svg viewBox="0 0 27 27" version="1.1"  >\n  <title>microsoft</title>\n  <g id="Microsoft" transform="translate(-32.000000, -13.000000)" fill="#FFFFFF">\n    <path d="M44.8319709,25.8295725 L32,25.8295725 L32,13 L44.8319709,13 L44.8319709,25.8295725 Z M59,25.8295725 L46.168182,25.8295725 L46.168182,13 L59,13 L59,25.8295725 Z M44.831665,40 L32,40 L32,27.1704276 L44.831665,27.1704276 L44.831665,40 Z M59,40 L46.168182,40 L46.168182,27.1704276 L59,27.1704276 L59,40 Z" id="microsoft"></path>\n  </g>\n</svg>\n';
});
/*auth-component@5.0.9#buttons/microsoft/microsoft.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define('auth-component/buttons/microsoft/microsoft.jsx', [
    'exports',
    'react',
    'auth-component/buttons/button.jsx',
    'auth-component/buttons/microsoft/microsoft.svg'
], function (exports, _react, _button, _microsoft) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    var _button2 = _interopRequireDefault(_button);
    var _microsoft2 = _interopRequireDefault(_microsoft);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function (_ref) {
        var name = _ref.name, url = _ref.url, img = _ref.img, alt = _ref.alt, text = _ref.text, popup = _ref.popup;
        return _react2.default.createElement(_button2.default, {
            name: name || 'Microsoft',
            url: url || '/auth/microsoft',
            svg: _microsoft2.default,
            alt: alt,
            text: text,
            popup: popup
        });
    };
});
/*auth-component@5.0.9#buttons/microsoft/microsoft*/
define('auth-component/buttons/microsoft/microsoft', [
    'exports',
    'auth-component/buttons/microsoft/microsoft.jsx',
    'auth-component/buttons/microsoft/microsoft.less'
], function (exports, _microsoft) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _microsoft2 = _interopRequireDefault(_microsoft);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _microsoft2.default;
});
/*auth-component@5.0.9#buttons/openid/openid.svg!steal-svg@0.0.5#steal-svg*/
define('auth-component/buttons/openid/openid.svg', ['exports'], function (exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = '\n<svg viewBox="0 0 28 26" version="1.1"  >\n  <title>openid</title>\n  <g id="OpenID" transform="translate(-32.000000, -13.000000)" fill="#FFFFFF">\n    <path d="M59.9218421,26.3116178 L58.1582256,22.012441 L56.661119,23.0650999 C54.3787917,21.6609585 51.7539364,20.8685577 49.082576,20.5761028 L49.082576,13 L44.3873494,15.9120282 L44.3873494,20.5564269 C37.7630553,21.2066249 32,24.6391692 32,29.0492463 C32,36.2407753 44.3873494,38.4400005 44.3873494,38.4400005 L49.082576,35.5279723 L49.082576,23.230556 C51.6519829,23.7555439 53.3780377,24.8198294 53.7831687,25.089031 L52.0419103,26.3125121 L59.9218421,26.3125121 L59.9218421,26.3116178 Z M42.7391013,23.3548717 C43.3025285,23.2162463 43.8516464,23.1187613 44.3873494,23.0516845 L44.3873494,35.3338968 C31.2943745,33.0917424 35.6381299,25.0935028 42.7391013,23.3548717 L42.7391013,23.3548717 Z" id="openid"></path>\n  </g>\n</svg>\n';
});
/*auth-component@5.0.9#buttons/openid/openid.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define('auth-component/buttons/openid/openid.jsx', [
    'exports',
    'react',
    'auth-component/buttons/button.jsx',
    'auth-component/buttons/openid/openid.svg'
], function (exports, _react, _button, _openid) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    var _button2 = _interopRequireDefault(_button);
    var _openid2 = _interopRequireDefault(_openid);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function (_ref) {
        var name = _ref.name, url = _ref.url, img = _ref.img, alt = _ref.alt, text = _ref.text, popup = _ref.popup;
        return _react2.default.createElement(_button2.default, {
            name: name || 'OpenID',
            url: url || '/auth/openid',
            svg: _openid2.default,
            alt: alt,
            text: text,
            popup: popup
        });
    };
});
/*auth-component@5.0.9#buttons/openid/openid*/
define('auth-component/buttons/openid/openid', [
    'exports',
    'auth-component/buttons/openid/openid.jsx',
    'auth-component/buttons/openid/openid.less'
], function (exports, _openid) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _openid2 = _interopRequireDefault(_openid);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _openid2.default;
});
/*auth-component@5.0.9#buttons/paypal/paypal.svg!steal-svg@0.0.5#steal-svg*/
define('auth-component/buttons/paypal/paypal.svg', ['exports'], function (exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = '\n<svg viewBox="0 0 25 28" version="1.1"  >\n  <title>paypal</title>\n  <g id="PayPal" transform="translate(-33.000000, -12.000000)">\n    <g id="paypal" transform="translate(33.000000, 12.000000)">\n      <path d="M20.5857618,2.17945831 C19.2648969,0.706934776 16.8772403,0.0756327598 13.8228389,0.0756327598 L4.95789441,0.0756327598 C4.33296909,0.0756327598 3.80194037,0.520168164 3.70409852,1.12291496 L0.0129360578,24.0203471 C-0.0604453251,24.4718284 0.296993024,24.8808627 0.76489797,24.8808627 L6.23772885,24.8808627 L7.61224894,16.3536549 L7.5696404,16.6206848 C7.66748225,16.017938 8.19456573,15.5734027 8.818702,15.5734027 L11.4194014,15.5734027 C16.5284815,15.5734027 20.5289504,13.5436664 21.6975293,7.67209454 C21.7322473,7.49844791 21.7622311,7.32943184 21.7882696,7.16427459 C21.6407179,7.08787006 21.6407179,7.08787006 21.7882696,7.16427459 C22.1362394,4.99407744 21.7859025,3.51692333 20.5857618,2.17945831" id="Shape" fill="#27346A"></path>\n      <path d="M9.70638002,6.38247881 C9.85235378,6.31456368 10.0148974,6.2767473 10.1853316,6.2767473 L17.1352588,6.2767473 C17.9582349,6.2767473 18.7259777,6.32922718 19.4274406,6.43958926 C19.6286477,6.47123154 19.8235423,6.50750439 20.0129136,6.54917959 C20.2022849,6.59008302 20.3861329,6.63638879 20.5644576,6.68732514 C20.6536198,6.71279332 20.7412041,6.73903325 20.8272102,6.76681671 C21.1720238,6.87949409 21.493166,7.01069377 21.7882696,7.16427459 C22.1362394,4.99330567 21.7859025,3.51692333 20.5857618,2.17945831 C19.2641078,0.706934776 16.8772403,0.0756327598 13.8228389,0.0756327598 L4.95710536,0.0756327598 C4.33296909,0.0756327598 3.80194037,0.520168164 3.70409852,1.12291496 L0.0129360578,24.0195754 C-0.0604453251,24.4718284 0.296993024,24.8800909 0.764108923,24.8800909 L6.23772885,24.8800909 L9.08934517,7.19282982 C9.14773466,6.83010127 9.38602689,6.53297257 9.70638002,6.38247881 L9.70638002,6.38247881 Z" id="Shape" fill="#D3D3D3"></path>\n      <path d="M21.6975293,7.67209454 C20.5289504,13.5428946 16.5284815,15.5734027 11.4194014,15.5734027 L8.81791296,15.5734027 C8.19377668,15.5734027 7.66669319,16.017938 7.5696404,16.6206848 L5.85977528,27.223163 C5.79586246,27.6183056 6.10832512,27.9764035 6.51705154,27.9764035 L11.1306101,27.9764035 C11.6766307,27.9764035 12.1413794,27.587435 12.2265966,27.060321 L12.2715722,26.8303357 L13.1411021,21.4403439 L13.1971245,21.1424434 C13.2823416,20.6153294 13.7470904,20.2263609 14.2931109,20.2263609 L14.9835272,20.2263609 C19.4526902,20.2263609 22.9521141,18.4505345 23.9747192,13.3144528 C24.4015937,11.1681803 24.1806606,9.37614694 23.0515341,8.11740171 C22.7090876,7.73615086 22.2837913,7.42127162 21.7882696,7.16427459 C21.7614421,7.3302036 21.7322473,7.49844791 21.6975293,7.67209454 L21.6975293,7.67209454 L21.6975293,7.67209454 Z" id="Shape" fill="#FFFFFF"></path>\n      <path d="M20.5652466,6.68732514 C20.386922,6.63638879 20.203074,6.59008302 20.0137026,6.54917959 C19.8243313,6.50827615 19.6286477,6.4720033 19.4282297,6.44036102 C18.7259777,6.32922718 17.9590239,6.2767473 17.1352588,6.2767473 L10.1861206,6.2767473 C10.0148974,6.2767473 9.85235378,6.31456368 9.70716906,6.38325057 C9.38602689,6.53374433 9.1485237,6.83010127 9.09013422,7.19360158 L7.61303799,16.3536549 L7.57042945,16.6206848 C7.66748225,16.017938 8.19456573,15.5734027 8.818702,15.5734027 L11.4201904,15.5734027 C16.5292705,15.5734027 20.5297394,13.5436664 21.6983183,7.67209454 C21.7330363,7.49844791 21.7622311,7.3302036 21.7890587,7.16427459 C21.493166,7.01146554 21.1728128,6.87949409 20.8279992,6.76758848 C20.7419931,6.73980501 20.6544089,6.71279332 20.5652466,6.68732514" id="Shape" fill="#EEEEEE"></path>\n    </g>\n  </g>\n</svg>\n';
});
/*auth-component@5.0.9#buttons/paypal/paypal.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define('auth-component/buttons/paypal/paypal.jsx', [
    'exports',
    'react',
    'auth-component/buttons/button.jsx',
    'auth-component/buttons/paypal/paypal.svg'
], function (exports, _react, _button, _paypal) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    var _button2 = _interopRequireDefault(_button);
    var _paypal2 = _interopRequireDefault(_paypal);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function (_ref) {
        var name = _ref.name, url = _ref.url, img = _ref.img, alt = _ref.alt, text = _ref.text, popup = _ref.popup;
        return _react2.default.createElement(_button2.default, {
            name: name || 'Paypal',
            url: url || '/auth/paypal',
            svg: _paypal2.default,
            alt: alt,
            text: text,
            popup: popup
        });
    };
});
/*auth-component@5.0.9#buttons/paypal/paypal*/
define('auth-component/buttons/paypal/paypal', [
    'exports',
    'auth-component/buttons/paypal/paypal.jsx',
    'auth-component/buttons/paypal/paypal.less'
], function (exports, _paypal) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _paypal2 = _interopRequireDefault(_paypal);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _paypal2.default;
});
/*auth-component@5.0.9#buttons/skype/skype.svg!steal-svg@0.0.5#steal-svg*/
define('auth-component/buttons/skype/skype.svg', ['exports'], function (exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = '\n<svg viewBox="0 0 28 28" version="1.1"  >\n  <title>skype</title>\n  <g id="Skype" transform="translate(-32.000000, -12.000000)" fill="#FFFFFF">\n    <path d="M58.8312093,28.0272857 C58.9356935,27.3662037 58.9907023,26.6898884 58.9907023,25.9995768 C58.9907023,18.8246716 53.1746121,13.0087117 45.9995117,13.0087117 C45.3110228,13.0087117 44.6327546,13.065413 43.9722584,13.1687254 C42.7758007,12.4284176 41.3636695,12 39.8503091,12 C35.5147694,12 32,15.5143137 32,19.8503091 C32,21.363344 32.428678,22.7743034 33.1686603,23.9731698 C33.0662593,24.6353585 33.0098834,25.3095255 33.0098834,25.9998372 C33.0098834,33.1752631 38.8258434,38.9894654 45.9992513,38.9894654 C46.688326,38.9894654 47.3667896,38.9363445 48.0272206,38.8321207 C49.2249152,39.5709963 50.6358746,40.0005857 52.1489096,40.0005857 C56.4856211,40.0005857 59.9999998,36.4853607 59.9999998,32.1494955 C60.0003253,30.6358746 59.5719077,29.2252407 58.8312093,28.0272857 L58.8312093,28.0272857 Z M52.1674628,31.9079775 C51.6178956,32.6991278 50.8106008,33.3173746 49.7557338,33.7619368 C48.6987186,34.2076709 47.4494004,34.4294637 46.0066726,34.4294637 C44.2775084,34.4294637 42.8458474,34.1268828 41.7157909,33.515862 C40.9147456,33.0783304 40.2632331,32.4913963 39.7623601,31.7594863 C39.2604455,31.0269905 39.0059728,30.3096627 39.0059728,29.6102372 C39.0059728,29.1976386 39.1633175,28.838812 39.4696091,28.5462563 C39.7790906,28.2515524 40.1776928,28.1038424 40.6481645,28.1038424 C41.0335516,28.1038424 41.3645809,28.2199142 41.6340914,28.4499096 C41.9015839,28.6798398 42.1259808,29.0141241 42.3094953,29.4552361 C42.5294654,29.9662646 42.7683794,30.3934453 43.0225917,30.7343046 C43.2752415,31.0709324 43.6308132,31.3519655 44.0913248,31.5719356 C44.5467586,31.7924916 45.1528969,31.9027696 45.9113674,31.9027696 C46.9493737,31.9027696 47.7882416,31.6782426 48.4302496,31.2353078 C49.0755126,30.7883369 49.3854498,30.2444984 49.3854498,29.5873874 C49.3854498,29.063274 49.2183402,28.6470299 48.8756581,28.3225105 C48.5298513,27.9937597 48.083271,27.7433883 47.5290818,27.5687272 C46.9727443,27.3922433 46.2257964,27.2050832 45.2897354,27.0078978 C44.0328006,26.7335699 42.9815792,26.4142585 42.1302773,26.0475549 C41.2778688,25.6794841 40.5990146,25.1763326 40.0958631,24.5407694 C39.59167,23.8989567 39.340257,23.1012315 39.340257,22.1563821 C39.340257,21.2554096 39.6056664,20.4496771 40.1370058,19.7484288 C40.6680848,19.0452276 41.4364504,18.5069877 42.4383266,18.1320815 C43.4366875,17.7573056 44.612053,17.56982 45.9585643,17.56982 C47.0353697,17.56982 47.9668086,17.6944198 48.7552247,17.9423174 C49.5414925,18.1920379 50.1969109,18.5215699 50.7209593,18.9350798 C51.2416875,19.3476784 51.6248612,19.7828663 51.867551,20.239537 C52.1100454,20.6975748 52.2321714,21.1449363 52.2321714,21.5814913 C52.2321714,21.9873846 52.0748267,22.3555205 51.7682096,22.6781519 C51.4616576,23.0012391 51.0695002,23.16594 50.6115275,23.1644428 C50.1986686,23.1644428 49.8748002,23.0692027 49.6502081,22.8675905 C49.4314749,22.6725534 49.2017399,22.3620304 48.9532564,21.9292511 C48.6391529,21.3253912 48.2629447,20.8549195 47.8254783,20.5184218 C47.3995344,20.1881738 46.6967889,20.0162468 45.7189342,20.01833 C44.814186,20.01833 44.0902832,20.2032117 43.5439058,20.5647725 C42.9941433,20.9321271 42.731338,21.3583314 42.7301011,21.8577071 C42.7310125,22.1706388 42.8209795,22.4344858 43.0020203,22.6601195 C43.1858604,22.8878364 43.441635,23.085152 43.7703858,23.2514804 C44.0992669,23.4204127 44.4338115,23.5510667 44.7699836,23.6450699 C45.1101268,23.7414818 45.6744715,23.8808591 46.4589165,24.0654153 C47.4426952,24.2774433 48.3350095,24.5143392 49.136836,24.7725225 C49.9371001,25.0320078 50.6200555,25.3449395 51.1842701,25.7177625 C51.7529764,26.0894787 52.1974736,26.5634007 52.5147669,27.1358177 C52.8343387,27.7091461 52.9935062,28.4094179 52.9935062,29.2334432 C52.9947431,30.2256848 52.718332,31.1180642 52.1674628,31.9079775 L52.1674628,31.9079775 Z" id="skype"></path>\n  </g>\n</svg>\n';
});
/*auth-component@5.0.9#buttons/skype/skype.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define('auth-component/buttons/skype/skype.jsx', [
    'exports',
    'react',
    'auth-component/buttons/button.jsx',
    'auth-component/buttons/skype/skype.svg'
], function (exports, _react, _button, _skype) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    var _button2 = _interopRequireDefault(_button);
    var _skype2 = _interopRequireDefault(_skype);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function (_ref) {
        var name = _ref.name, url = _ref.url, img = _ref.img, alt = _ref.alt, text = _ref.text, popup = _ref.popup;
        return _react2.default.createElement(_button2.default, {
            name: name || 'Skype',
            url: url || '/auth/skype',
            svg: _skype2.default,
            alt: alt,
            text: text,
            popup: popup
        });
    };
});
/*auth-component@5.0.9#buttons/skype/skype*/
define('auth-component/buttons/skype/skype', [
    'exports',
    'auth-component/buttons/skype/skype.jsx',
    'auth-component/buttons/skype/skype.less'
], function (exports, _skype) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _skype2 = _interopRequireDefault(_skype);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _skype2.default;
});
/*auth-component@5.0.9#buttons/slack/slack.svg!steal-svg@0.0.5#steal-svg*/
define('auth-component/buttons/slack/slack.svg', ['exports'], function (exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = '\n<svg viewBox="0 0 29 29" version="1.1"  >\n    <title>slack</title>\n    <g id="Stack-Overflow" transform="translate(-14.000000, -12.000000)">\n      <g id="slack" transform="translate(14.000000, 12.000000)">\n        <path d="M18.8005574,1.79419672 C18.3598524,0.437614754 16.902959,-0.304737705 15.5466148,0.136204919 C14.1900328,0.576909836 13.4476803,2.03380328 13.8886229,3.39014754 L20.5662295,23.935459 C21.0247623,25.202664 22.393705,25.9148279 23.7077377,25.5366393 C25.0783443,25.1420492 25.9138771,23.6863443 25.4765,22.3402214 C25.4598607,22.2888771 18.8005574,1.79419672 18.8005574,1.79419672" id="Shape" fill="#FFFFFF"></path>\n        <path d="M8.45373771,5.15605738 C8.01279508,3.79971312 6.55590164,3.05736066 5.19955738,3.49806557 C3.84297541,3.9387705 3.10062295,5.39566393 3.54156557,6.7522459 L10.2191721,27.2975574 C10.6777049,28.5647623 12.0466476,29.2769262 13.3606803,28.8985 C14.7312869,28.5041476 15.5668197,27.0484426 15.1294426,25.7020819 C15.1128033,25.6509754 8.45373771,5.15605738 8.45373771,5.15605738" id="Shape" fill="#F7F7F7"></path>\n        <path d="M27.2058033,18.8098279 C28.5623852,18.3691229 29.3045,16.9122295 28.863795,15.5556476 C28.4230902,14.1993033 26.9661967,13.4569508 25.6098524,13.8976557 L5.06454098,20.5755 C3.79733607,21.033795 3.08517214,22.4027377 3.46336066,23.7167705 C3.85795081,25.0873771 5.31365574,25.9229098 6.65977869,25.4855328 C6.71112295,25.4688934 27.2058033,18.8098279 27.2058033,18.8098279" id="Shape" fill="#F2F2F2"></path>\n        <path d="M9.34655738,24.6126803 C10.6838852,24.1781557 12.4074836,23.6181229 14.2570655,23.017205 C13.822541,21.6798771 13.2625081,19.956041 12.6613524,18.1062214 L7.75060655,19.7024098 L9.34655738,24.6126803" id="Shape" fill="#EEEEEE"></path>\n        <path d="M19.6936148,21.2505819 C21.5500902,20.6475246 23.2755902,20.0867786 24.6041229,19.6551066 C24.1695983,18.3177786 23.6093279,16.5934672 23.0081721,14.7431721 L18.0974262,16.3393607 L19.6936148,21.2505819" id="Shape" fill="#EEEEEE"></path>\n        <path d="M23.8439426,8.4627705 C25.2002869,8.02206557 25.9426393,6.56517214 25.5019345,5.20859017 C25.0612295,3.8522459 23.604336,3.10989345 22.2477541,3.55059836 L1.70244262,10.2284426 C0.435237705,10.6867377 -0.276926229,12.0556803 0.1015,13.3697131 C0.495852459,14.7403197 1.95155738,15.5758524 3.29791803,15.1384754 C3.34902459,15.121836 23.8439426,8.4627705 23.8439426,8.4627705" id="Shape" fill="#F3F3F3"></path>\n        <path d="M5.9837459,14.2658607 C7.32107377,13.831336 9.04514754,13.2710655 10.8949672,12.6701476 C10.2919098,10.8134344 9.73116393,9.08793443 9.29949181,7.75916393 L4.38755738,9.35559017 L5.9837459,14.2658607" id="Shape" fill="#EEEEEE"></path>\n        <path d="M16.3305655,10.904 C18.1875164,10.3007049 19.9132541,9.73995902 21.2420246,9.30804919 C20.6387295,7.45109836 20.0779836,5.72512295 19.6460738,4.39611476 L14.7343771,5.99254098 L16.3305655,10.904" id="Shape" fill="#EEEEEE"></path>\n      </g>\n    </g>\n</svg>\n';
});
/*auth-component@5.0.9#buttons/slack/slack.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define('auth-component/buttons/slack/slack.jsx', [
    'exports',
    'react',
    'auth-component/buttons/button.jsx',
    'auth-component/buttons/slack/slack.svg'
], function (exports, _react, _button, _slack) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    var _button2 = _interopRequireDefault(_button);
    var _slack2 = _interopRequireDefault(_slack);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function (_ref) {
        var name = _ref.name, url = _ref.url, img = _ref.img, alt = _ref.alt, text = _ref.text, popup = _ref.popup;
        return _react2.default.createElement(_button2.default, {
            name: name || 'Slack',
            url: url || '/auth/slack',
            svg: _slack2.default,
            alt: alt,
            text: text,
            popup: popup
        });
    };
});
/*auth-component@5.0.9#buttons/slack/slack*/
define('auth-component/buttons/slack/slack', [
    'exports',
    'auth-component/buttons/slack/slack.jsx',
    'auth-component/buttons/slack/slack.less'
], function (exports, _slack) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _slack2 = _interopRequireDefault(_slack);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _slack2.default;
});
/*auth-component@5.0.9#buttons/stackoverflow/stackoverflow.svg!steal-svg@0.0.5#steal-svg*/
define('auth-component/buttons/stackoverflow/stackoverflow.svg', ['exports'], function (exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = '\n<svg viewBox="0 0 23 28" version="1.1"  >\n  <title>stackoverflow</title>\n  <g id="Stack-Overflow" transform="translate(-17.000000, -12.000000)" fill="#FFFFFF">\n    <g id="stackoverflow" transform="translate(17.000000, 12.000000)">\n      <polyline id="Shape" points="15.7163796 17.9728427 4.93072194 15.3858954 5.45395751 13.2527643 16.2396151 15.8395499 15.7163796 17.9728427"></polyline>\n      <polyline id="Shape" points="16.4394495 15.4208541 6.55656561 10.4269322 7.56653956 8.47231737 17.4494235 13.4662393 16.4394495 15.4208541"></polyline>\n      <polyline id="Shape" points="17.9616935 12.7772606 9.60383589 5.55649881 11.064051 3.90356503 19.4220723 11.124165 17.9616935 12.7772606"></polyline>\n      <polyline id="Shape" points="20.2610168 10.453475 14.028507 1.37245456 15.8651506 0.139834993 22.0976604 9.22085539 20.2610168 10.453475"></polyline>\n      <polyline id="Shape" points="15.5437135 20.640875 4.46182301 20.0425301 4.58277111 17.850649 15.6646616 18.4491557 15.5437135 20.640875"></polyline>\n      <polyline id="Shape" points="17.8414001 25.8039261 17.8414001 16.7104435 20.0590548 16.7104435 20.0606914 27.9993678 0 27.9993678 0.000490993656 16.7008946 2.22010964 16.7008946 2.22010964 25.8039261 17.8414001 25.8039261"></polyline>\n      <polygon id="Shape" points="4.43105407 21.4225914 15.6047603 21.4225914 15.6047603 23.6175477 4.43105407 23.6175477"></polygon>\n    </g>\n  </g>\n</svg>\n';
});
/*auth-component@5.0.9#buttons/stackoverflow/stackoverflow.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define('auth-component/buttons/stackoverflow/stackoverflow.jsx', [
    'exports',
    'react',
    'auth-component/buttons/button.jsx',
    'auth-component/buttons/stackoverflow/stackoverflow.svg'
], function (exports, _react, _button, _stackoverflow) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    var _button2 = _interopRequireDefault(_button);
    var _stackoverflow2 = _interopRequireDefault(_stackoverflow);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function (_ref) {
        var name = _ref.name, url = _ref.url, img = _ref.img, alt = _ref.alt, text = _ref.text, popup = _ref.popup;
        return _react2.default.createElement(_button2.default, {
            name: name || 'Stack Overflow',
            url: url || '/auth/stackoverflow',
            svg: _stackoverflow2.default,
            alt: alt,
            text: text,
            popup: popup
        });
    };
});
/*auth-component@5.0.9#buttons/stackoverflow/stackoverflow*/
define('auth-component/buttons/stackoverflow/stackoverflow', [
    'exports',
    'auth-component/buttons/stackoverflow/stackoverflow.jsx',
    'auth-component/buttons/stackoverflow/stackoverflow.less'
], function (exports, _stackoverflow) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _stackoverflow2 = _interopRequireDefault(_stackoverflow);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _stackoverflow2.default;
});
/*auth-component@5.0.9#buttons/twitter/twitter.svg!steal-svg@0.0.5#steal-svg*/
define('auth-component/buttons/twitter/twitter.svg', ['exports'], function (exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = '\n<svg viewBox="0 -2 32 26" version="1.1"  >\n  <title>twitter</title>\n  <g id="Twitter" transform="translate(-31.000000, -14.000000)" fill="#FFFFFF">\n    <path d="M31.0016712,35.247161 C33.6694164,36.9375766 36.8339446,37.9158313 40.2261942,37.9158313 C49.7562808,37.9158313 57.4816594,30.1965652 57.4816594,20.6759819 C57.4816594,20.4382727 57.4766458,20.202321 57.4674983,19.9670724 C57.812203,19.6960575 59.9441123,17.9888572 60.4666667,16.8913525 C60.4666667,16.8913525 58.7354029,17.6101921 57.0409933,17.7795325 C57.0376509,17.7795325 57.0335169,17.7803234 57.0301745,17.7803234 C57.0301745,17.7803234 57.0335169,17.7786537 57.0393221,17.7745235 C57.1954463,17.6703005 59.3781949,16.1857823 59.6737315,14.4169797 C59.6737315,14.4169797 58.4491898,15.069999 56.734638,15.641292 C56.4507997,15.7354969 56.1536799,15.82812 55.8473246,15.9139766 C54.742141,14.7355364 53.1712234,14 51.4274697,14 C48.0827171,14 45.3724005,16.7070729 45.3724005,20.0462502 C45.3724005,20.5174505 45.4266702,20.9760842 45.5293164,21.4164395 C45.0619112,21.3972821 37.9441417,20.9985809 33.1019159,15.1399497 C33.1019159,15.1399497 30.2079444,19.0871528 34.8264949,23.1460486 C34.8264949,23.1460486 33.4225203,23.0901584 32.2112601,22.3671005 C32.2112601,22.3671005 31.766372,27.1490541 36.9967535,28.3716967 C36.9967535,28.3716967 35.967565,28.7611707 34.3256659,28.4834771 C34.3256659,28.4834771 35.2438523,32.3472844 39.8908129,32.7083739 C39.8908129,32.7083739 36.2162204,36.0248787 31,35.2467216 L31.0016712,35.247161 L31.0016712,35.247161 Z" id="twitter"></path>\n  </g>\n</svg>\n';
});
/*auth-component@5.0.9#buttons/twitter/twitter.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define('auth-component/buttons/twitter/twitter.jsx', [
    'exports',
    'react',
    'auth-component/buttons/button.jsx',
    'auth-component/buttons/twitter/twitter.svg'
], function (exports, _react, _button, _twitter) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    var _button2 = _interopRequireDefault(_button);
    var _twitter2 = _interopRequireDefault(_twitter);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function (_ref) {
        var name = _ref.name, url = _ref.url, img = _ref.img, alt = _ref.alt, text = _ref.text, popup = _ref.popup;
        return _react2.default.createElement(_button2.default, {
            name: name || 'Twitter',
            url: url || '/auth/twitter',
            svg: _twitter2.default,
            alt: alt,
            text: text,
            popup: popup
        });
    };
});
/*auth-component@5.0.9#buttons/twitter/twitter*/
define('auth-component/buttons/twitter/twitter', [
    'exports',
    'auth-component/buttons/twitter/twitter.jsx',
    'auth-component/buttons/twitter/twitter.less'
], function (exports, _twitter) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _twitter2 = _interopRequireDefault(_twitter);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _twitter2.default;
});
/*auth-component@5.0.9#buttons/yahoo/yahoo.svg!steal-svg@0.0.5#steal-svg*/
define('auth-component/buttons/yahoo/yahoo.svg', ['exports'], function (exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = '\n<svg viewBox="0 0 28 26" version="1.1"  >\n  <title>yahoo</title>\n  <g id="Yahoo" transform="translate(-32.000000, -13.000000)" fill="#FFFFFF">\n    <polygon id="yahoo" points="59.2918327 18.3307059 55.8768306 19.080355 48.0472943 28.4506713 48.7135829 36.6549329 53.2529594 36.9881764 53.4611622 38.9872407 37.8858471 38.9872407 38.3022527 37.0715369 43.299715 36.2385273 43.3275019 28.2702553 35.9979302 15.6653529 32 14.887917 32 13 45.3267647 13 45.2572976 14.707501 41.0926464 15.2906276 46.6315551 26.2436026 51.9205807 18.9555127 48.8805024 18.2475438 48.6722996 16.33184 60 16.33184"></polygon>\n  </g>\n</svg>\n';
});
/*auth-component@5.0.9#buttons/yahoo/yahoo.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define('auth-component/buttons/yahoo/yahoo.jsx', [
    'exports',
    'react',
    'auth-component/buttons/button.jsx',
    'auth-component/buttons/yahoo/yahoo.svg'
], function (exports, _react, _button, _yahoo) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    var _button2 = _interopRequireDefault(_button);
    var _yahoo2 = _interopRequireDefault(_yahoo);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function (_ref) {
        var name = _ref.name, url = _ref.url, img = _ref.img, alt = _ref.alt, text = _ref.text, popup = _ref.popup;
        return _react2.default.createElement(_button2.default, {
            name: name || 'Yahoo',
            url: url || '/auth/yahoo',
            svg: _yahoo2.default,
            alt: alt,
            text: text,
            popup: popup
        });
    };
});
/*auth-component@5.0.9#buttons/yahoo/yahoo*/
define('auth-component/buttons/yahoo/yahoo', [
    'exports',
    'auth-component/buttons/yahoo/yahoo.jsx',
    'auth-component/buttons/yahoo/yahoo.less'
], function (exports, _yahoo) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _yahoo2 = _interopRequireDefault(_yahoo);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _yahoo2.default;
});
/*auth-component@5.0.9#auth-component*/
define('auth-component', [
    'exports',
    'auth-component/auth-container/auth-container',
    'auth-component/forms/form/form',
    'auth-component/forms/form-error/form-error',
    'auth-component/forms/async-validator/async-validator',
    'auth-component/forms/local-login/local-login',
    'auth-component/forms/local-signup/local-signup',
    'auth-component/buttons/button',
    'auth-component/buttons/amazon/amazon',
    'auth-component/buttons/dropbox/dropbox',
    'auth-component/buttons/evernote/evernote',
    'auth-component/buttons/facebook/facebook',
    'auth-component/buttons/github/github',
    'auth-component/buttons/google/google',
    'auth-component/buttons/linkedin/linkedin',
    'auth-component/buttons/microsoft/microsoft',
    'auth-component/buttons/openid/openid',
    'auth-component/buttons/paypal/paypal',
    'auth-component/buttons/skype/skype',
    'auth-component/buttons/slack/slack',
    'auth-component/buttons/stackoverflow/stackoverflow',
    'auth-component/buttons/twitter/twitter',
    'auth-component/buttons/yahoo/yahoo'
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
/*[global-shim-end]*/
(function(){ // jshint ignore:line
	window._define = window.define;
	window.define = window.define.orig;
}
)();