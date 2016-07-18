import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './ui.less!';
import template from './ui.stache!';

export const ViewModel = DefineMap.extend({
  define: {
    // The baseUrl of the OAuth server to which you're authenticating.
    baseUrl: {
      value: ''
    }
  }
});

export default Component.extend({
  tag: 'auth-ui',
  viewModel: ViewModel,
  template
});
