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
});

export default Component.extend({
  tag: 'auth-ui',
  ViewModel,
  template,
  leakScope: true
});
