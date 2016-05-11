import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './ui.less!';
import template from './ui.stache!';

export const ViewModel = Map.extend({
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
