/*auth-component@3.0.3#provider-icons/skype.stache!steal-stache@3.0.0-pre.3#steal-stache*/
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
        'args': ['sso-skype ']
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
        'args': ['Login with Skype']
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
        'args': ['/auth/skype']
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
        'args': ['0 0 28 28']
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
        'args': ['skype']
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
        'args': ['Skype']
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
        'args': ['translate(-32.000000, -12.000000)']
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
        'args': ['M58.8312093,28.0272857 C58.9356935,27.3662037 58.9907023,26.6898884 58.9907023,25.9995768 C58.9907023,18.8246716 53.1746121,13.0087117 45.9995117,13.0087117 C45.3110228,13.0087117 44.6327546,13.065413 43.9722584,13.1687254 C42.7758007,12.4284176 41.3636695,12 39.8503091,12 C35.5147694,12 32,15.5143137 32,19.8503091 C32,21.363344 32.428678,22.7743034 33.1686603,23.9731698 C33.0662593,24.6353585 33.0098834,25.3095255 33.0098834,25.9998372 C33.0098834,33.1752631 38.8258434,38.9894654 45.9992513,38.9894654 C46.688326,38.9894654 47.3667896,38.9363445 48.0272206,38.8321207 C49.2249152,39.5709963 50.6358746,40.0005857 52.1489096,40.0005857 C56.4856211,40.0005857 59.9999998,36.4853607 59.9999998,32.1494955 C60.0003253,30.6358746 59.5719077,29.2252407 58.8312093,28.0272857 L58.8312093,28.0272857 Z M52.1674628,31.9079775 C51.6178956,32.6991278 50.8106008,33.3173746 49.7557338,33.7619368 C48.6987186,34.2076709 47.4494004,34.4294637 46.0066726,34.4294637 C44.2775084,34.4294637 42.8458474,34.1268828 41.7157909,33.515862 C40.9147456,33.0783304 40.2632331,32.4913963 39.7623601,31.7594863 C39.2604455,31.0269905 39.0059728,30.3096627 39.0059728,29.6102372 C39.0059728,29.1976386 39.1633175,28.838812 39.4696091,28.5462563 C39.7790906,28.2515524 40.1776928,28.1038424 40.6481645,28.1038424 C41.0335516,28.1038424 41.3645809,28.2199142 41.6340914,28.4499096 C41.9015839,28.6798398 42.1259808,29.0141241 42.3094953,29.4552361 C42.5294654,29.9662646 42.7683794,30.3934453 43.0225917,30.7343046 C43.2752415,31.0709324 43.6308132,31.3519655 44.0913248,31.5719356 C44.5467586,31.7924916 45.1528969,31.9027696 45.9113674,31.9027696 C46.9493737,31.9027696 47.7882416,31.6782426 48.4302496,31.2353078 C49.0755126,30.7883369 49.3854498,30.2444984 49.3854498,29.5873874 C49.3854498,29.063274 49.2183402,28.6470299 48.8756581,28.3225105 C48.5298513,27.9937597 48.083271,27.7433883 47.5290818,27.5687272 C46.9727443,27.3922433 46.2257964,27.2050832 45.2897354,27.0078978 C44.0328006,26.7335699 42.9815792,26.4142585 42.1302773,26.0475549 C41.2778688,25.6794841 40.5990146,25.1763326 40.0958631,24.5407694 C39.59167,23.8989567 39.340257,23.1012315 39.340257,22.1563821 C39.340257,21.2554096 39.6056664,20.4496771 40.1370058,19.7484288 C40.6680848,19.0452276 41.4364504,18.5069877 42.4383266,18.1320815 C43.4366875,17.7573056 44.612053,17.56982 45.9585643,17.56982 C47.0353697,17.56982 47.9668086,17.6944198 48.7552247,17.9423174 C49.5414925,18.1920379 50.1969109,18.5215699 50.7209593,18.9350798 C51.2416875,19.3476784 51.6248612,19.7828663 51.867551,20.239537 C52.1100454,20.6975748 52.2321714,21.1449363 52.2321714,21.5814913 C52.2321714,21.9873846 52.0748267,22.3555205 51.7682096,22.6781519 C51.4616576,23.0012391 51.0695002,23.16594 50.6115275,23.1644428 C50.1986686,23.1644428 49.8748002,23.0692027 49.6502081,22.8675905 C49.4314749,22.6725534 49.2017399,22.3620304 48.9532564,21.9292511 C48.6391529,21.3253912 48.2629447,20.8549195 47.8254783,20.5184218 C47.3995344,20.1881738 46.6967889,20.0162468 45.7189342,20.01833 C44.814186,20.01833 44.0902832,20.2032117 43.5439058,20.5647725 C42.9941433,20.9321271 42.731338,21.3583314 42.7301011,21.8577071 C42.7310125,22.1706388 42.8209795,22.4344858 43.0020203,22.6601195 C43.1858604,22.8878364 43.441635,23.085152 43.7703858,23.2514804 C44.0992669,23.4204127 44.4338115,23.5510667 44.7699836,23.6450699 C45.1101268,23.7414818 45.6744715,23.8808591 46.4589165,24.0654153 C47.4426952,24.2774433 48.3350095,24.5143392 49.136836,24.7725225 C49.9371001,25.0320078 50.6200555,25.3449395 51.1842701,25.7177625 C51.7529764,26.0894787 52.1974736,26.5634007 52.5147669,27.1358177 C52.8343387,27.7091461 52.9935062,28.4094179 52.9935062,29.2334432 C52.9947431,30.2256848 52.718332,31.1180642 52.1674628,31.9079775 L52.1674628,31.9079775 Z']
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
        'args': ['skype']
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
        'args': ['Login with Skype']
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
        'args': ['Skype Login']
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