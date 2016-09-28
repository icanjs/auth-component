/*auth-component@3.1.0#provider-icons/twitter.stache!steal-stache@3.0.0-pre.3#steal-stache*/
define([
    'module',
    'can-stache',
    'can-stache/src/mustache_core',
    'can-view-import@3.0.0-pre.4#can-view-import',
    'can-stache-bindings@3.0.0-pre.23#can-stache-bindings'
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
            'args': ['sso-twitter ']
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
            'args': ['Login with Twitter']
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
            'args': ['/auth/twitter']
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
            'args': ['0 0 30 24']
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
            'args': ['twitter']
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
            'args': ['Twitter']
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
            'args': ['translate(-31.000000, -14.000000)']
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
            'args': ['M31.0016712,35.247161 C33.6694164,36.9375766 36.8339446,37.9158313 40.2261942,37.9158313 C49.7562808,37.9158313 57.4816594,30.1965652 57.4816594,20.6759819 C57.4816594,20.4382727 57.4766458,20.202321 57.4674983,19.9670724 C57.812203,19.6960575 59.9441123,17.9888572 60.4666667,16.8913525 C60.4666667,16.8913525 58.7354029,17.6101921 57.0409933,17.7795325 C57.0376509,17.7795325 57.0335169,17.7803234 57.0301745,17.7803234 C57.0301745,17.7803234 57.0335169,17.7786537 57.0393221,17.7745235 C57.1954463,17.6703005 59.3781949,16.1857823 59.6737315,14.4169797 C59.6737315,14.4169797 58.4491898,15.069999 56.734638,15.641292 C56.4507997,15.7354969 56.1536799,15.82812 55.8473246,15.9139766 C54.742141,14.7355364 53.1712234,14 51.4274697,14 C48.0827171,14 45.3724005,16.7070729 45.3724005,20.0462502 C45.3724005,20.5174505 45.4266702,20.9760842 45.5293164,21.4164395 C45.0619112,21.3972821 37.9441417,20.9985809 33.1019159,15.1399497 C33.1019159,15.1399497 30.2079444,19.0871528 34.8264949,23.1460486 C34.8264949,23.1460486 33.4225203,23.0901584 32.2112601,22.3671005 C32.2112601,22.3671005 31.766372,27.1490541 36.9967535,28.3716967 C36.9967535,28.3716967 35.967565,28.7611707 34.3256659,28.4834771 C34.3256659,28.4834771 35.2438523,32.3472844 39.8908129,32.7083739 C39.8908129,32.7083739 36.2162204,36.0248787 31,35.2467216 L31.0016712,35.247161 L31.0016712,35.247161 Z']
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
            'args': ['twitter']
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
            'args': ['Login with Twitter']
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
            'args': ['Twitter Login']
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