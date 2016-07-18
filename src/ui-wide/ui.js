import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './ui.less!';
import template from './ui.stache!';

export const ViewModel = DefineMap.extend({
  define: {
    message: {
      value: 'This is the auth-ui-wide component'
    }
  }
});

export default Component.extend({
  tag: 'auth-ui-wide',
  viewModel: ViewModel,
  template
});
