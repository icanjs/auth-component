/*auth-component@5.0.3#utils*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.devWarning = devWarning;
function devWarning(message) {
    if (window.location.hostname === 'localhost') {
        console.warn(message + ' This message will not show in production.');
    }
}