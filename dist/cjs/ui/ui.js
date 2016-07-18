/*auth-component@3.0.1#ui/ui*/
'use strict';
var $__can_45_component__, $__can_45_define_47_map_47___, $__ui_46_less_33___, $__ui_46_stache_33___;
var Component = ($__can_45_component__ = require('can-component'), $__can_45_component__ && $__can_45_component__.__esModule && $__can_45_component__ || { default: $__can_45_component__ }).default;
var DefineMap = ($__can_45_define_47_map_47___ = require('can-define/map/map'), $__can_45_define_47_map_47___ && $__can_45_define_47_map_47___.__esModule && $__can_45_define_47_map_47___ || { default: $__can_45_define_47_map_47___ }).default;
$__ui_46_less_33___ = require('./ui.less.css'), $__ui_46_less_33___ && $__ui_46_less_33___.__esModule && $__ui_46_less_33___ || { default: $__ui_46_less_33___ };
var template = ($__ui_46_stache_33___ = require('./ui.stache.js'), $__ui_46_stache_33___ && $__ui_46_stache_33___.__esModule && $__ui_46_stache_33___ || { default: $__ui_46_stache_33___ }).default;
var ViewModel = DefineMap.extend({ define: { baseUrl: { value: '' } } });
var $__default = Component.extend({
    tag: 'auth-ui',
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