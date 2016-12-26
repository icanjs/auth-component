import { connect } from 'react-view-models';
import DefineMap from 'can-define/map/';
import View from './tabs.jsx';
import route from 'can-route';
import './tabs.less';

export const ViewModel = DefineMap.extend({
  activeTab: {
    type: 'string',
    set (val) {
      if (this.routeAttr) {
        route.data[this.routeAttr] = val;
      }
      return val;
    }
  },

  routeAttr: 'string',

  signupClicked () {
    this.activeTab = 'signup';
  },

  loginClicked () {
    this.activeTab = 'login';
  }
});

export default connect(ViewModel, View);
