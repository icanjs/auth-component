/*auth-component@3.1.0#provider-icons/slack.stache!steal-stache@3.0.0-pre.3#steal-stache*/
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
            'args': ['sso-slack ']
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
            'args': ['Login with Slack']
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
            'args': ['/auth/slack']
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
            'args': ['0 0 29 29']
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
            'args': ['slack']
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
            'args': ['Stack-Overflow']
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
            'args': ['translate(-14.000000, -12.000000)']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['transform']
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
            'args': ['slack']
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
            'args': ['translate(14.000000, 12.000000)']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['transform']
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
            'args': ['\n\t\t\t\t\t']
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
            'args': ['M18.8005574,1.79419672 C18.3598524,0.437614754 16.902959,-0.304737705 15.5466148,0.136204919 C14.1900328,0.576909836 13.4476803,2.03380328 13.8886229,3.39014754 L20.5662295,23.935459 C21.0247623,25.202664 22.393705,25.9148279 23.7077377,25.5366393 C25.0783443,25.1420492 25.9138771,23.6863443 25.4765,22.3402214 C25.4598607,22.2888771 18.8005574,1.79419672 18.8005574,1.79419672']
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
            'args': ['Shape']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['id']
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
            'args': ['\n\t\t\t\t\t']
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
            'args': ['M8.45373771,5.15605738 C8.01279508,3.79971312 6.55590164,3.05736066 5.19955738,3.49806557 C3.84297541,3.9387705 3.10062295,5.39566393 3.54156557,6.7522459 L10.2191721,27.2975574 C10.6777049,28.5647623 12.0466476,29.2769262 13.3606803,28.8985 C14.7312869,28.5041476 15.5668197,27.0484426 15.1294426,25.7020819 C15.1128033,25.6509754 8.45373771,5.15605738 8.45373771,5.15605738']
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
            'args': ['Shape']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['id']
        },
        {
            'tokenType': 'attrStart',
            'args': ['fill']
        },
        {
            'tokenType': 'attrValue',
            'args': ['#F7F7F7']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['fill']
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
            'args': ['\n\t\t\t\t\t']
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
            'args': ['M27.2058033,18.8098279 C28.5623852,18.3691229 29.3045,16.9122295 28.863795,15.5556476 C28.4230902,14.1993033 26.9661967,13.4569508 25.6098524,13.8976557 L5.06454098,20.5755 C3.79733607,21.033795 3.08517214,22.4027377 3.46336066,23.7167705 C3.85795081,25.0873771 5.31365574,25.9229098 6.65977869,25.4855328 C6.71112295,25.4688934 27.2058033,18.8098279 27.2058033,18.8098279']
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
            'args': ['Shape']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['id']
        },
        {
            'tokenType': 'attrStart',
            'args': ['fill']
        },
        {
            'tokenType': 'attrValue',
            'args': ['#F2F2F2']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['fill']
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
            'args': ['\n\t\t\t\t\t']
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
            'args': ['M9.34655738,24.6126803 C10.6838852,24.1781557 12.4074836,23.6181229 14.2570655,23.017205 C13.822541,21.6798771 13.2625081,19.956041 12.6613524,18.1062214 L7.75060655,19.7024098 L9.34655738,24.6126803']
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
            'args': ['Shape']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['id']
        },
        {
            'tokenType': 'attrStart',
            'args': ['fill']
        },
        {
            'tokenType': 'attrValue',
            'args': ['#EEEEEE']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['fill']
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
            'args': ['\n\t\t\t\t\t']
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
            'args': ['M19.6936148,21.2505819 C21.5500902,20.6475246 23.2755902,20.0867786 24.6041229,19.6551066 C24.1695983,18.3177786 23.6093279,16.5934672 23.0081721,14.7431721 L18.0974262,16.3393607 L19.6936148,21.2505819']
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
            'args': ['Shape']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['id']
        },
        {
            'tokenType': 'attrStart',
            'args': ['fill']
        },
        {
            'tokenType': 'attrValue',
            'args': ['#EEEEEE']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['fill']
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
            'args': ['\n\t\t\t\t\t']
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
            'args': ['M23.8439426,8.4627705 C25.2002869,8.02206557 25.9426393,6.56517214 25.5019345,5.20859017 C25.0612295,3.8522459 23.604336,3.10989345 22.2477541,3.55059836 L1.70244262,10.2284426 C0.435237705,10.6867377 -0.276926229,12.0556803 0.1015,13.3697131 C0.495852459,14.7403197 1.95155738,15.5758524 3.29791803,15.1384754 C3.34902459,15.121836 23.8439426,8.4627705 23.8439426,8.4627705']
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
            'args': ['Shape']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['id']
        },
        {
            'tokenType': 'attrStart',
            'args': ['fill']
        },
        {
            'tokenType': 'attrValue',
            'args': ['#F3F3F3']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['fill']
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
            'args': ['\n\t\t\t\t\t']
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
            'args': ['M5.9837459,14.2658607 C7.32107377,13.831336 9.04514754,13.2710655 10.8949672,12.6701476 C10.2919098,10.8134344 9.73116393,9.08793443 9.29949181,7.75916393 L4.38755738,9.35559017 L5.9837459,14.2658607']
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
            'args': ['Shape']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['id']
        },
        {
            'tokenType': 'attrStart',
            'args': ['fill']
        },
        {
            'tokenType': 'attrValue',
            'args': ['#EEEEEE']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['fill']
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
            'args': ['\n\t\t\t\t\t']
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
            'args': ['M16.3305655,10.904 C18.1875164,10.3007049 19.9132541,9.73995902 21.2420246,9.30804919 C20.6387295,7.45109836 20.0779836,5.72512295 19.6460738,4.39611476 L14.7343771,5.99254098 L16.3305655,10.904']
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
            'args': ['Shape']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['id']
        },
        {
            'tokenType': 'attrStart',
            'args': ['fill']
        },
        {
            'tokenType': 'attrValue',
            'args': ['#EEEEEE']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['fill']
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
            'args': ['\n\t\t\t\t']
        },
        {
            'tokenType': 'close',
            'args': ['g']
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
            'args': ['Login with Slack']
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
            'args': ['Slack Login']
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