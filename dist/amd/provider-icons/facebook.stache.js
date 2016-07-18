/*auth-component@3.0.1#provider-icons/facebook.stache!steal-stache@3.0.0-pre.3#steal-stache*/
define([
    'module',
    'can-stache',
    'can-stache/src/mustache_core',
    'can-view-import@3.0.0-pre.2#can-view-import',
    'can-stache-bindings@3.0.0-pre.8#can-stache-bindings'
], function (module, stache, mustacheCore) {
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
            'args': ['sso-facebook ']
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
            'args': ['Login with Facebook']
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
            'args': ['/auth/facebook']
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
            'args': ['0 0 30 30']
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
            'args': ['facebook']
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
            'args': ['Facebook']
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
            'args': ['translate(-31.000000, -11.000000)']
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
            'args': ['M31.5335249,11.4771433 C31.0629733,11.9542866 31,12.6858064 31,13.0358952 L31,38.5855823 C31,38.889671 31,39.5388564 31.5335249,40.0360003 C32.0670498,40.5331441 32.5878912,40.4314221 32.9098788,40.4314221 L46.6920694,40.4314221 L46.6920694,29.0626772 L42.8560779,29.0626772 L42.8560779,24.4216404 L46.6920694,24.4216404 L46.6920694,20.5239935 C46.6920694,17.6893471 48.9926299,15.3914319 51.8305394,15.3914319 L55.8407766,15.3914319 L55.8407766,19.5647744 L52.9712507,19.5647744 C52.069505,19.5647744 51.3384489,20.2949898 51.3384489,21.1956987 L51.3384489,24.421705 L55.7686861,24.421705 L55.1564016,29.0627418 L51.3384489,29.0627418 L51.3384489,40.4314221 L58.5921788,40.4314221 C58.9008446,40.4314221 59.5763095,40.4959488 60.0446429,40.0360003 C60.5129763,39.5760518 60.4653026,38.9018905 60.4653026,38.5918341 L60.4653026,12.9524436 C60.4653026,12.6192633 60.4817712,11.9542866 60.0446429,11.4771433 C59.6075146,11 58.9110589,11 58.6090781,11 L32.9241743,11 C32.6136603,11 32.0040765,11 31.5335249,11.4771433 Z']
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
            'args': ['facebook']
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
            'args': ['Login with Facebook']
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
            'args': ['Facebook Login']
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
    return function (scope, options, nodeList) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions), nodeList);
    };
});