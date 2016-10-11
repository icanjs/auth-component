/*auth-component@3.2.0#auth/auth*/
define([
    'can-component',
    'can-define/map',
    'css!./auth.less.css',
    './auth.stache',
    '../provider-icons/index'
], function ($__0, $__2, $__4, $__5, $__7) {
    'use strict';
    if (!$__0 || !$__0.__esModule)
        $__0 = { default: $__0 };
    if (!$__2 || !$__2.__esModule)
        $__2 = { default: $__2 };
    if (!$__4 || !$__4.__esModule)
        $__4 = { default: $__4 };
    if (!$__5 || !$__5.__esModule)
        $__5 = { default: $__5 };
    if (!$__7 || !$__7.__esModule)
        $__7 = { default: $__7 };
    var Component = $__0.default;
    var DefineMap = $__2.default;
    $__4;
    var template = $__5.default;
    var providerIcons = $__7.default;
    var ViewModel = DefineMap.extend({ seal: false }, {
        ui: { value: 'compact' },
        local: 'string',
        localSignup: {
            value: false,
            set: function (val) {
                return !!val;
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
                var $__12 = this;
                var providerList;
                if (this.providers) {
                    providerList = this.providers.split(',').filter(function (provider) {
                        return Object.keys(providerIcons).indexOf(provider.trim()) > -1;
                    }).map(function (provider) {
                        provider = provider.trim();
                        return {
                            name: provider,
                            url: $__12[provider + 'Url'] || 'auth/' + provider,
                            template: providerIcons[provider]
                        };
                    });
                }
                return providerList;
            }
        },
        providerMap: {
            get: function () {
                var providerMap = {};
                this.providerList.forEach(function (provider) {
                    providerMap[provider.name] = provider;
                });
                return providerMap;
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
                    switch (this.providerList.length) {
                    case 1:
                        return 'one';
                    case 2:
                        return 'two';
                    default:
                        return 'many';
                    }
                }
                return this.providerList && this.providerList.length;
            }
        },
        session: '*',
        sessionModel: {},
        oauthFlow: 'string',
        subpage: {
            value: function () {
                if (this.localSignup) {
                    return 'signup';
                }
                return 'login';
            }
        },
        popupHeight: 'number',
        popupWidth: 'number',
        login: function (ev, email, password) {
            ev.preventDefault();
            var self = this;
            var Session = this.sessionModel;
            if (!Session) {
                console.error('A session-model must be provided to the auth-component.');
            }
            return new Session({
                type: 'local',
                email: email,
                password: password
            }).save().then(function (response) {
                response.password = undefined;
                self.session = response;
            });
        }
    });
    var $__default = Component.extend({
        tag: 'auth-component',
        ViewModel: ViewModel,
        template: template
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