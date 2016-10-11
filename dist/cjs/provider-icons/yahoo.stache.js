/*auth-component@3.2.0#provider-icons/yahoo.stache!steal-stache@3.0.0-pre.3#steal-stache*/
var stache = require('can-stache');
var mustacheCore = require('can-stache/src/mustache_core');
require('can-view-import@3.0.0-pre.4#can-view-import');
require('can-stache-bindings@3.0.0-pre.23#can-stache-bindings');
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
        'args': ['sso-yahoo ']
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
        'args': ['Login with Yahoo']
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
        'args': ['\n\n\t']
    },
    {
        'tokenType': 'start',
        'args': [
            'a',
            false
        ]
    },
    {
        'tokenType': 'special',
        'args': ['#is oauthFlow \'redirect\'']
    },
    {
        'tokenType': 'attrStart',
        'args': ['href']
    },
    {
        'tokenType': 'special',
        'args': ['providerUrl(providers.yahoo)']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['href']
    },
    {
        'tokenType': 'special',
        'args': ['/is']
    },
    {
        'tokenType': 'special',
        'args': ['#is oauthFlow \'popup\'']
    },
    {
        'tokenType': 'attrStart',
        'args': ['href']
    },
    {
        'tokenType': 'attrValue',
        'args': ['javascript://']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['href']
    },
    {
        'tokenType': 'attrStart',
        'args': ['($click)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['openOauthPopup(%event, providers.yahoo)']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['($click)']
    },
    {
        'tokenType': 'special',
        'args': ['/is']
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
        'args': ['\n\n\t\t']
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
        'args': ['yahoo']
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
        'args': ['Yahoo']
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
            'polygon',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['id']
    },
    {
        'tokenType': 'attrValue',
        'args': ['yahoo']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['id']
    },
    {
        'tokenType': 'attrStart',
        'args': ['points']
    },
    {
        'tokenType': 'attrValue',
        'args': ['59.2918327 18.3307059 55.8768306 19.080355 48.0472943 28.4506713 48.7135829 36.6549329 53.2529594 36.9881764 53.4611622 38.9872407 37.8858471 38.9872407 38.3022527 37.0715369 43.299715 36.2385273 43.3275019 28.2702553 35.9979302 15.6653529 32 14.887917 32 13 45.3267647 13 45.2572976 14.707501 41.0926464 15.2906276 46.6315551 26.2436026 51.9205807 18.9555127 48.8805024 18.2475438 48.6722996 16.33184 60 16.33184']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['points']
    },
    {
        'tokenType': 'end',
        'args': [
            'polygon',
            false
        ]
    },
    {
        'tokenType': 'close',
        'args': ['polygon']
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
        'args': ['Login with Yahoo']
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
        'args': ['Yahoo Login']
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