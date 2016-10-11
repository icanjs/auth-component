/*auth-component@3.2.0#auth/auth*/
'use strict';
var $__can_45_component__, $__can_45_define_47_map_47___, $__auth_46_less_33___, $__auth_46_stache__, $___46__46__47_provider_45_icons_47_index__;
var Component = ($__can_45_component__ = require('can-component'), $__can_45_component__ && $__can_45_component__.__esModule && $__can_45_component__ || { default: $__can_45_component__ }).default;
var DefineMap = ($__can_45_define_47_map_47___ = require('can-define/map/map'), $__can_45_define_47_map_47___ && $__can_45_define_47_map_47___.__esModule && $__can_45_define_47_map_47___ || { default: $__can_45_define_47_map_47___ }).default;
$__auth_46_less_33___ = require('./auth.less.css'), $__auth_46_less_33___ && $__auth_46_less_33___.__esModule && $__auth_46_less_33___ || { default: $__auth_46_less_33___ };
var template = ($__auth_46_stache__ = require('./auth.stache.js'), $__auth_46_stache__ && $__auth_46_stache__.__esModule && $__auth_46_stache__ || { default: $__auth_46_stache__ }).default;
var providerIcons = ($___46__46__47_provider_45_icons_47_index__ = require('../provider-icons/index.js'), $___46__46__47_provider_45_icons_47_index__ && $___46__46__47_provider_45_icons_47_index__.__esModule && $___46__46__47_provider_45_icons_47_index__ || { default: $___46__46__47_provider_45_icons_47_index__ }).default;
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
            var $__7 = this;
            var providerList;
            if (this.providers) {
                providerList = this.providers.split(',').filter(function (provider) {
                    return Object.keys(providerIcons).indexOf(provider.trim()) > -1;
                }).map(function (provider) {
                    provider = provider.trim();
                    return {
                        name: provider,
                        url: $__7[provider + 'Url'] || 'auth/' + provider,
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
Object.defineProperties(module.exports, {
    ViewModel: {
        get: function () {
            return ViewModel;
        }
    },
    default: {
        get: function () {
            return $__default;
        }
    },
    __esModule: { value: true }
});