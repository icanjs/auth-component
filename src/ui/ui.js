import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './ui.less!';
import template from './ui.stache!';

export const ViewModel = DefineMap.extend({
  email: 'string',
  password: 'string',

  // The baseUrl of the OAuth server to which you're authenticating.
  baseUrl: {
    value: ''
  },

  subpage: 'string',

  setSubpage(tabName) {
    this.subpage = tabName;
  },
  
  /*
   * Bound to `providerMap` in the auth-component.
   */
  providers: '*',

  /*
   * providerUrl is a template helper function that assembles the url for a provider.
   */
  providerUrl(provider){
    // Assume it's an absolute URL if '://' is included in the provider url.
    if(provider.url.includes('://')){
      return provider.url;
    }
    // If not an absolute URL, assemble one.
    return `${this.baseUrl}/${provider.url}`;
  },

  authWindow: '*',

  /*
   * Determines the behavior when clicking a social login button.  There are two modes:
   *  - `redirect` will redirect the current tab to the auth provider for auth.  The
   *    provider will then need to redirect back. This is the default behavior.
   *  - `popup` will open the auth provider in a new window.
   */
  oauthFlow: {
    type: 'string',
    value: 'redirect'
  },

  popupWidth: {
    type: 'number',
    value: 1024
  },

  popupHeight: {
    type: 'number',
    value: 630
  },

  /*
   * Returns the coordinates to center a popup window with the provided width and height args.
   */
  getCenterCoordinates(window, popupWidth, popupHeight){
    return {
      left: window.screenX + (window.outerWidth - popupWidth) / 2,
      top: window.screenY + (window.outerHeight - popupHeight) / 2
    };
  },

  /*
   * A helper template to that opens the provided OAuth provider's URL in a centered popup.
   */
  openOauthPopup(ev, provider){
    if(this.oauthFlow === 'popup'){
      ev.preventDefault();
    }
    let url = this.providerUrl(provider),
      coords = this.getCenterCoordinates(window, this.popupWidth, this.popupHeight);
    this.authWindow = window.open(url, 'authWindow', `width=${this.popupWidth}, height=${this.popupHeight}, top=${coords.top}, left=${coords.left}`);
  }
});

export default Component.extend({
  tag: 'auth-ui',
  ViewModel,
  template,
  leakScope: true
});
