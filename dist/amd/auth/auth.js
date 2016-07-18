/*auth-component@3.0.3#auth/auth*/
define([
    'can-component',
    'can-define/map',
    'can-route',
    'css!./auth.less.css',
    './auth.stache',
    '../provider-icons/index'
], function ($__0, $__2, $__4, $__6, $__7, $__9) {
    'use strict';
    if (!$__0 || !$__0.__esModule)
        $__0 = { default: $__0 };
    if (!$__2 || !$__2.__esModule)
        $__2 = { default: $__2 };
    if (!$__4 || !$__4.__esModule)
        $__4 = { default: $__4 };
    if (!$__6 || !$__6.__esModule)
        $__6 = { default: $__6 };
    if (!$__7 || !$__7.__esModule)
        $__7 = { default: $__7 };
    if (!$__9 || !$__9.__esModule)
        $__9 = { default: $__9 };
    var Component = $__0.default;
    var DefineMap = $__2.default;
    var route = $__4.default;
    $__6;
    var template = $__7.default;
    var providerIcons = $__9.default;
    var ViewModel = DefineMap.extend({
        ui: { value: 'compact' },
        local: {
            set: function (val) {
                val = val || 'password';
                return val;
            }
        },
        tabsShouldShow: {
            get: function () {
                return this.local === 'password' && this.localSignup;
            }
        },
        providers: { type: 'string' },
        providerList: {
            get: function () {
                var providerList;
                if (this.providers) {
                    providerList = this.providers.split(',').filter(function (provider) {
                        var providerArray = Object.keys(providerIcons);
                        return providerArray.indexOf(provider.trim()) > -1;
                    }).map(function (provider) {
                        if (provider) {
                            provider = provider.trim();
                            return {
                                name: provider,
                                template: providerIcons[provider]
                            };
                        }
                    });
                }
                return providerList;
            }
        },
        providerIcons: { value: providerIcons },
        providerCount: {
            get: function () {
                return this.providerList && this.providerList.length || 0;
            }
        },
        providerCountClass: {
            get: function () {
                if (this.providerList) {
                    if (this.providerList.length === 1) {
                        return 'one';
                    }
                    if (this.providerList && this.providerList.length === 2) {
                        return 'two';
                    }
                    if (this.providerList.length > 2) {
                        return 'many';
                    }
                }
                return this.providerList && this.providerList.length;
            }
        },
        localSignup: {
            value: false,
            set: function (val) {
                if (val === 'none' || val === 'false') {
                    val = false;
                } else {
                    val = true;
                }
                return val;
            }
        },
        session: {},
        sessionModel: {},
        routeAttrName: { value: 'subpage' },
        routeAttr: {
            get: function () {
                return route[this.routeAttrName];
            }
        },
        email: { type: 'string' },
        password: { type: 'string' },
        login: function (ev, email, password) {
            ev.preventDefault();
            var Session = this.sessionModel;
            if (!Session) {
                console.error('A session model must be provided to the auth-component.');
            }
            return new Session({
                type: 'local',
                email: email,
                password: password
            }).save();
        }
    });
    var $__default = Component.extend({
        tag: 'auth-component',
        ViewModel: ViewModel,
        template: template,
        leakScope: true
    });
    return {
        get ViewModel() {
            return ViewModel;
        },
        get default() {
            return $__default;
        },
        __esModule: true
    };
});