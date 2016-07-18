/*auth-component@3.0.1#auth/auth.stache!steal-stache@3.0.0-pre.3#steal-stache*/
define([
    'module',
    'can-stache',
    'can-stache/src/mustache_core',
    'can-view-import@3.0.0-pre.2#can-view-import',
    'can-stache-bindings@3.0.0-pre.8#can-stache-bindings',
    'css!./auth.less.css'
], function (module, stache, mustacheCore) {
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
            'args': [' <can-import from="./auth.less"/> ']
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
            'args': ['#case \'none\'']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t']
        },
        {
            'tokenType': 'comment',
            'args': [' <can-import from="./auth.less"/> ']
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
    return function (scope, options, nodeList) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions), nodeList);
    };
});