/*auth-component@3.0.2#provider-icons/openid.stache!steal-stache@3.0.0-pre.3#steal-stache*/
var stache = require('can-stache');
var mustacheCore = require('can-stache/src/mustache_core');
require('can-view-import@3.0.0-pre.2#can-view-import');
require('can-stache-bindings@3.0.0-pre.8#can-stache-bindings');
var renderer = stache([
    {
        'tokenType': 'start',
        'args': [
            'li',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['sso-openid ']
    },
    {
        'tokenType': 'special',
        'args': ['providerCountClass']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'attrStart',
        'args': ['title']
    },
    {
        'tokenType': 'attrValue',
        'args': ['Login with OpenID']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['title']
    },
    {
        'tokenType': 'end',
        'args': [
            'li',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n\t']
    },
    {
        'tokenType': 'start',
        'args': [
            'a',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['href']
    },
    {
        'tokenType': 'special',
        'args': ['baseUrl']
    },
    {
        'tokenType': 'attrValue',
        'args': ['/auth/openid']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['href']
    },
    {
        'tokenType': 'end',
        'args': [
            'a',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n\t\t']
    },
    {
        'tokenType': 'start',
        'args': [
            'svg',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['viewBox']
    },
    {
        'tokenType': 'attrValue',
        'args': ['0 0 28 26']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['viewBox']
    },
    {
        'tokenType': 'attrStart',
        'args': ['version']
    },
    {
        'tokenType': 'attrValue',
        'args': ['1.1']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['version']
    },
    {
        'tokenType': 'end',
        'args': [
            'svg',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n\t\t\t']
    },
    {
        'tokenType': 'start',
        'args': [
            'title',
            false
        ]
    },
    {
        'tokenType': 'end',
        'args': [
            'title',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['openid']
    },
    {
        'tokenType': 'close',
        'args': ['title']
    },
    {
        'tokenType': 'chars',
        'args': ['\n\t\t\t']
    },
    {
        'tokenType': 'start',
        'args': [
            'g',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['id']
    },
    {
        'tokenType': 'attrValue',
        'args': ['OpenID']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['id']
    },
    {
        'tokenType': 'attrStart',
        'args': ['transform']
    },
    {
        'tokenType': 'attrValue',
        'args': ['translate(-32.000000, -13.000000)']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['transform']
    },
    {
        'tokenType': 'attrStart',
        'args': ['fill']
    },
    {
        'tokenType': 'attrValue',
        'args': ['#FFFFFF']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['fill']
    },
    {
        'tokenType': 'end',
        'args': [
            'g',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n\t\t\t\t']
    },
    {
        'tokenType': 'start',
        'args': [
            'path',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['d']
    },
    {
        'tokenType': 'attrValue',
        'args': ['M59.9218421,26.3116178 L58.1582256,22.012441 L56.661119,23.0650999 C54.3787917,21.6609585 51.7539364,20.8685577 49.082576,20.5761028 L49.082576,13 L44.3873494,15.9120282 L44.3873494,20.5564269 C37.7630553,21.2066249 32,24.6391692 32,29.0492463 C32,36.2407753 44.3873494,38.4400005 44.3873494,38.4400005 L49.082576,35.5279723 L49.082576,23.230556 C51.6519829,23.7555439 53.3780377,24.8198294 53.7831687,25.089031 L52.0419103,26.3125121 L59.9218421,26.3125121 L59.9218421,26.3116178 Z M42.7391013,23.3548717 C43.3025285,23.2162463 43.8516464,23.1187613 44.3873494,23.0516845 L44.3873494,35.3338968 C31.2943745,33.0917424 35.6381299,25.0935028 42.7391013,23.3548717 L42.7391013,23.3548717 Z']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['d']
    },
    {
        'tokenType': 'attrStart',
        'args': ['id']
    },
    {
        'tokenType': 'attrValue',
        'args': ['openid']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['id']
    },
    {
        'tokenType': 'end',
        'args': [
            'path',
            false
        ]
    },
    {
        'tokenType': 'close',
        'args': ['path']
    },
    {
        'tokenType': 'chars',
        'args': ['\n\t\t\t']
    },
    {
        'tokenType': 'close',
        'args': ['g']
    },
    {
        'tokenType': 'chars',
        'args': ['\n\t\t']
    },
    {
        'tokenType': 'close',
        'args': ['svg']
    },
    {
        'tokenType': 'special',
        'args': ['#is providerCountClass \'one\'']
    },
    {
        'tokenType': 'chars',
        'args': ['\n\t\t\t']
    },
    {
        'tokenType': 'start',
        'args': [
            'span',
            false
        ]
    },
    {
        'tokenType': 'end',
        'args': [
            'span',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['Login with OpenID']
    },
    {
        'tokenType': 'close',
        'args': ['span']
    },
    {
        'tokenType': 'special',
        'args': ['/is']
    },
    {
        'tokenType': 'chars',
        'args': ['\n\t\t']
    },
    {
        'tokenType': 'special',
        'args': ['#is providerCountClass \'two\'']
    },
    {
        'tokenType': 'chars',
        'args': ['\n\t\t\t']
    },
    {
        'tokenType': 'start',
        'args': [
            'span',
            false
        ]
    },
    {
        'tokenType': 'end',
        'args': [
            'span',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['OpenID Login']
    },
    {
        'tokenType': 'close',
        'args': ['span']
    },
    {
        'tokenType': 'special',
        'args': ['/is']
    },
    {
        'tokenType': 'chars',
        'args': ['\n\t']
    },
    {
        'tokenType': 'close',
        'args': ['a']
    },
    {
        'tokenType': 'chars',
        'args': ['\n']
    },
    {
        'tokenType': 'close',
        'args': ['li']
    },
    {
        'tokenType': 'chars',
        'args': ['\n']
    },
    {
        'tokenType': 'done',
        'args': []
    }
]);
module.exports = function (scope, options, nodeList) {
    var moduleOptions = { module: module };
    if (!(options instanceof mustacheCore.Options)) {
        options = new mustacheCore.Options(options || {});
    }
    return renderer(scope, options.add(moduleOptions), nodeList);
};