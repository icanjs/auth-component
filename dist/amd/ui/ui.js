/*auth-component@3.2.0#ui/ui*/
define([
    'can-component',
    'can-define/map',
    'css!./ui.less.css',
    './ui.stache'
], function ($__0, $__2, $__4, $__5) {
    'use strict';
    if (!$__0 || !$__0.__esModule)
        $__0 = { default: $__0 };
    if (!$__2 || !$__2.__esModule)
        $__2 = { default: $__2 };
    if (!$__4 || !$__4.__esModule)
        $__4 = { default: $__4 };
    if (!$__5 || !$__5.__esModule)
        $__5 = { default: $__5 };
    var Component = $__0.default;
    var DefineMap = $__2.default;
    $__4;
    var template = $__5.default;
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