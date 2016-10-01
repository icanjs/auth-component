/*auth-component@3.1.1#auth/auth.stache!steal-stache@3.0.0-pre.3#steal-stache*/
var stache = require('can-stache');
var mustacheCore = require('can-stache/src/mustache_core');
require('can-view-import@3.0.0-pre.4#can-view-import');
require('can-stache-bindings@3.0.0-pre.23#can-stache-bindings');
require('./auth.less.css');
var renderer = stache([
    {
        'tokenType': 'start',
        'args': [
            'can-import',
            true
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['from']
    },
    {
        'tokenType': 'attrValue',
        'args': ['auth-component/auth/auth.less']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['from']
    },
    {
        'tokenType': 'end',
        'args': [
            'can-import',
            true
        ]
    },
    {
        'tokenType': 'special',
        'args': ['#switch ui']
    },
    {
        'tokenType': 'chars',
        'args': ['\n\t']
    },
    {
        'tokenType': 'special',
        'args': ['#case \'compact\'']
    },
    {
        'tokenType': 'chars',
        'args': ['\n\t\t']
    },
    {
        'tokenType': 'start',
        'args': [
            'auth-ui',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['{base-url}']
    },
    {
        'tokenType': 'attrValue',
        'args': ['baseUrl']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['{base-url}']
    },
    {
        'tokenType': 'attrStart',
        'args': ['{(subpage)}']
    },
    {
        'tokenType': 'attrValue',
        'args': ['subpage']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['{(subpage)}']
    },
    {
        'tokenType': 'end',
        'args': [
            'auth-ui',
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
            'content',
            false
        ]
    },
    {
        'tokenType': 'end',
        'args': [
            'content',
            false
        ]
    },
    {
        'tokenType': 'close',
        'args': ['content']
    },
    {
        'tokenType': 'chars',
        'args': ['\n\t\t']
    },
    {
        'tokenType': 'close',
        'args': ['auth-ui']
    },
    {
        'tokenType': 'special',
        'args': ['/case']
    },
    {
        'tokenType': 'chars',
        'args': ['\n']
    },
    {
        'tokenType': 'special',
        'args': ['#case \'wide\'']
    },
    {
        'tokenType': 'chars',
        'args': ['\n\t\t']
    },
    {
        'tokenType': 'comment',
        'args': [' Wide mode not yet implemented. ']
    },
    {
        'tokenType': 'special',
        'args': ['/case']
    },
    {
        'tokenType': 'chars',
        'args': ['\n']
    },
    {
        'tokenType': 'special',
        'args': ['/switch']
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