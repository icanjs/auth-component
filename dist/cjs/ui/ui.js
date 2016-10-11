/*auth-component@3.2.0#ui/ui*/
'use strict';
var $__can_45_component__, $__can_45_define_47_map_47___, $__ui_46_less_33___, $__ui_46_stache_33___;
var Component = ($__can_45_component__ = require('can-component'), $__can_45_component__ && $__can_45_component__.__esModule && $__can_45_component__ || { default: $__can_45_component__ }).default;
var DefineMap = ($__can_45_define_47_map_47___ = require('can-define/map/map'), $__can_45_define_47_map_47___ && $__can_45_define_47_map_47___.__esModule && $__can_45_define_47_map_47___ || { default: $__can_45_define_47_map_47___ }).default;
$__ui_46_less_33___ = require('./ui.less.css'), $__ui_46_less_33___ && $__ui_46_less_33___.__esModule && $__ui_46_less_33___ || { default: $__ui_46_less_33___ };
var template = ($__ui_46_stache_33___ = require('./ui.stache.js'), $__ui_46_stache_33___ && $__ui_46_stache_33___.__esModule && $__ui_46_stache_33___ || { default: $__ui_46_stache_33___ }).default;
var ViewModel = DefineMap.extend({
    email: 'string',
    password: 'string',
    baseUrl: { value: '' },
    subpage: 'string',
    setSubpage: function (tabName) {
        this.subpage = tabName;
    },
    providers: '*',
    providerUrl: function (provider) {
        if (provider.url.includes('://')) {
            return provider.url;
        }
        return this.baseUrl + '/' + provider.url;
    },
    authWindow: '*',
    oauthFlow: {
        type: 'string',
        value: 'redirect'
    },
    popupWidth: {
        type: 'number',
        value: 1024
    },
    popupHeight: {
        type: 'number',
        value: 630
    },
    getCenterCoordinates: function (window, popupWidth, popupHeight) {
        return {
            left: window.screenX + (window.outerWidth - popupWidth) / 2,
            top: window.screenY + (window.outerHeight - popupHeight) / 2
        };
    },
    openOauthPopup: function (ev, provider) {
        if (this.oauthFlow === 'popup') {
            ev.preventDefault();
        }
        var url = this.providerUrl(provider), coords = this.getCenterCoordinates(window, this.popupWidth, this.popupHeight);
        this.authWindow = window.open(url, 'authWindow', 'width=' + this.popupWidth + ', height=' + this.popupHeight + ', top=' + coords.top + ', left=' + coords.left);
    }
});
var $__default = Component.extend({
    tag: 'auth-ui',
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