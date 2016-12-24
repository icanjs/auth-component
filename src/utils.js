/**
 * `devWarning` is a logging utility that does a console.warn in localhost (dev environment).
 */
export function devWarning (message) {
  if (window.location.hostname === 'localhost') {
    console.warn(`${message} This message will not show in production.`);
  }
}
