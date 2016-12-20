import { connect } from 'react-view-models';
import DefineMap from 'can-define/map/';
import Template from './tabs.jsx';
import route from 'can-route';
import './tabs.less';

export const ViewModel = DefineMap.extend({
  tab: {
    type: 'string',
    set (val) {
      if (this.routeAttr) {
        route.data[this.routeAttr] = val;
      }
      return val;
    }
  },

  routeAttr: 'string',

  setTab (tab) {
    return function () {
      this.tab = tab;
    }.bind(this);
  }
});

export default connect(ViewModel, Template);
