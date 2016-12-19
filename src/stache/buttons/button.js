import DefineMap from 'can-define/map/map';
import Component from 'can-component';
import view from './button.stache';
import './button.less';
import openPopup from 'feathers-authentication-popups';

export const ViewModel = DefineMap.extend({
  name: 'string',
  classSuffix: {
    type: 'string',
    get (lastSet) {
      return lastSet || this.name.toLowerCase().replace(' ', '');
    }
  },
  url: 'string',
  img: 'string',
  alt: 'string',
  text: 'string',
  popup: 'string',
  logo: 'string',
  openPopup (ev, url) {
    ev.preventDefault();
    openPopup(url);
  }
});

export default Component.extend({
  tag: 'auth-button',
  ViewModel,
  view
});
