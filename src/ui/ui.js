import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './ui.less!';
import template from './ui.stache!';

export const ViewModel = Map.extend({
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
