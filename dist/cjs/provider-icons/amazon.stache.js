/*auth-component@3.0.0#provider-icons/amazon.stache!steal-stache@3.0.0-pre.2#steal-stache*/
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
        'args': ['sso-amazon ']
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
        'args': ['Login with Amazon']
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
        'args': ['/auth/amazon']
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
        'args': ['amazon']
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
        'args': ['Amazon']
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
        'args': ['translate(-31.000000, -13.000000)']
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
        'args': ['#000000']
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
        'args': ['M47.5643278,19.5741457 C46.886471,19.6277839 46.0978241,19.6814808 45.3161456,19.7876448 C44.1214639,19.9404788 42.920985,20.1516356 41.9340053,20.6229616 C40.0066573,21.4034691 38.7000145,23.0741028 38.7000145,25.5310996 C38.7000145,28.6052881 40.6810008,30.1778973 43.1811542,30.1778973 C44.016471,30.1778973 44.6943279,30.069391 45.3161456,29.9107598 C46.3124944,29.6027496 47.1396133,29.0311153 48.1371333,27.9764436 C48.7111098,28.7662616 48.8593178,29.122113 49.8486398,29.9656278 C50.1134935,30.0706207 50.3771175,30.0706207 50.5813061,29.9108184 C51.2066372,29.3869667 52.3021232,28.4547964 52.8761584,27.9216341 C53.1421832,27.7186167 53.0919998,27.4001247 52.9297966,27.1469824 C52.3558201,26.4108027 51.7841272,25.7901562 51.7841272,24.3831465 L51.7841272,19.6826519 C51.7841272,17.69581 51.9451007,15.8676577 50.4786555,14.5178583 C49.2874872,13.42003 47.4103227,13 45.952017,13 L45.3255147,13 C42.6643293,13.1598608 39.8573368,14.3066428 39.2273796,17.5955017 C39.1223868,18.0120182 39.4338519,18.1694782 39.6415539,18.2196617 L42.559395,18.5848237 C42.8709187,18.5334691 43.0283787,18.2721288 43.0785622,18.0131308 C43.3434159,16.8662903 44.2755861,16.2899714 45.3162041,16.188492 L45.5308744,16.188492 C46.1503498,16.188492 46.8340624,16.4463188 47.1933687,16.9701705 C47.6052007,17.5966728 47.5632153,18.4319897 47.5632153,19.1623137 L47.5643278,19.5741457 L47.5643278,19.5741457 L47.5643278,19.5741457 Z M47.5643278,22.6074613 C47.5643278,23.8091113 47.6063133,24.7436239 46.9903513,25.7866427 C46.6205047,26.5181379 45.9940024,26.9894639 45.3162041,27.1469824 C45.2158958,27.1469824 45.0630618,27.2006207 44.9020299,27.2006207 C43.7563604,27.2006207 43.0785622,26.3104359 43.0785622,25.0049642 C43.0785622,23.3366142 44.0690553,22.553823 45.3162041,22.1874899 C45.9928898,22.0311425 46.7768521,21.9786753 47.5643864,21.9786753 C47.5643278,21.9786168 47.5643278,22.6074613 47.5643278,22.6074613 L47.5643278,22.6074613 Z M57.1636497,37.2607283 C58.4329917,36.1780664 58.9731223,34.2250704 59,33.2007312 L59,33.0280464 C59,32.8086915 58.9428483,32.6418624 58.8879803,32.5543781 C58.6278112,32.2382284 56.7611283,31.954695 55.1464752,32.4318767 C54.6972838,32.5847107 54.2959921,32.778359 53.9377983,33.0339021 C53.6461255,33.2287215 53.7009935,33.4924041 53.9926078,33.4597292 C54.2994469,33.4072035 54.7019098,33.376871 55.1475878,33.3115798 C56.1392521,33.2287215 57.3047723,33.2030735 57.5812203,33.5740912 C57.9825706,34.0477595 57.1332001,36.1535895 56.7587275,37.0554272 C56.647996,37.3459289 56.8999672,37.4578901 57.1636497,37.2607283 L57.1636497,37.2607283 Z M31.1424026,33.2007898 C34.7905677,36.5257783 39.6030233,38.5032512 44.9860593,38.5032512 C48.3308987,38.5032512 52.1703698,37.5710809 55.1441915,35.7872564 C55.55251,35.5667304 55.938694,35.3019352 56.3108829,35.0195729 C56.8160549,34.6520687 56.3668634,34.0897449 55.8570654,34.3125547 C55.6342557,34.3954129 55.369402,34.5050318 55.14425,34.5925747 C51.8961469,35.8723984 48.469679,36.4685681 45.2975244,36.4685681 C40.2552322,36.4685681 35.3867374,35.0767247 31.451584,32.7795887 C31.0817374,32.582427 30.8273654,32.9464178 31.1424026,33.2007898 L31.1424026,33.2007898 Z']
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
        'args': ['amazon']
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
        'args': ['Login with Amazon']
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
        'args': ['Amazon Login']
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