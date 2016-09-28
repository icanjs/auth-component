/*auth-component@3.1.0#ui/ui*/
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
        activeTab: 'string',
        setActiveTab: function (tabName) {
            this.activeTab = tabName;
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