/*auth-component@3.0.2#auth/auth*/
'use strict';
var $__can_45_component__, $__can_45_define_47_map_47___, $__can_45_route__, $__auth_46_less_33___, $__auth_46_stache__, $___46__46__47_provider_45_icons_47_index__;
var Component = ($__can_45_component__ = require('can-component'), $__can_45_component__ && $__can_45_component__.__esModule && $__can_45_component__ || { default: $__can_45_component__ }).default;
var DefineMap = ($__can_45_define_47_map_47___ = require('can-define/map/map'), $__can_45_define_47_map_47___ && $__can_45_define_47_map_47___.__esModule && $__can_45_define_47_map_47___ || { default: $__can_45_define_47_map_47___ }).default;
var route = ($__can_45_route__ = require('can-route'), $__can_45_route__ && $__can_45_route__.__esModule && $__can_45_route__ || { default: $__can_45_route__ }).default;
$__auth_46_less_33___ = require('./auth.less.css'), $__auth_46_less_33___ && $__auth_46_less_33___.__esModule && $__auth_46_less_33___ || { default: $__auth_46_less_33___ };
var template = ($__auth_46_stache__ = require('./auth.stache.js'), $__auth_46_stache__ && $__auth_46_stache__.__esModule && $__auth_46_stache__ || { default: $__auth_46_stache__ }).default;
var providerIcons = ($___46__46__47_provider_45_icons_47_index__ = require('../provider-icons/index.js'), $___46__46__47_provider_45_icons_47_index__ && $___46__46__47_provider_45_icons_47_index__.__esModule && $___46__46__47_provider_45_icons_47_index__ || { default: $___46__46__47_provider_45_icons_47_index__ }).default;
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