import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './auth.less!';
import template from './auth.stache';
import providerIcons from '../provider-icons/index';

export const ViewModel = DefineMap.extend({
  ui: {
    value: 'compact'
  },

  local: {
    type: 'string'
  },

  /**
   * Determines if signup controls are visible in the UI. Any values other than
   * `none` and `false` will be interpreted as `true`.
   */
  localSignup: {
    value: false,
    set(val){
      if (val === 'none' || val === 'false') {
        val = false;
      } else {
        val = true;
      }
      return val;
    }
  },

  /**
   * Tabs should only show if local login is set to password and signup is enabled.
   */
  tabsShouldShow: {
    get(){
      return this.local === 'password' && this.localSignup;
    }
  },

  /**
   * A comma-separated string of SSO providers to enable. The icons will show
   * in the UI based on the order they they are provided here.
   */
  providers: {
    type: 'string'
  },

  /**
   * An array of the passed-in providers. Used to put the icons in the correct
   * order.
   */
  providerList: {
    get(){
      let providerList;

      if (this.providers) {
        providerList = this.providers.split(',')
          // filter out any duds.
          .filter(provider => {
            let providerArray = Object.keys(providerIcons);
            return providerArray.indexOf(provider.trim()) > -1;
          })
          .map(provider => {
            if (provider) {
              provider = provider.trim();
              return {
                name: provider,
                template: providerIcons[provider]
              };
            }
          });
      }
      return providerList;
    }
  },

  providerIcons: {
    value: providerIcons
  },

  /**
   * Returns an integer representing the number of SSO providers that have
   * been enabled.
   */
  providerCount: {
    get(){
      return this.providerList && this.providerList.length || 0;
    }
  },

  /**
   * This returns a word to be used in a class to help with the button sizing
   * for configured SSO provider(s).  If there is only one SSO provider
   * configured, the button will be larger and centered.  For two providers,
   * there will be two centered buttons.  For more than 2 providers, there
   * will be an icon representing each one (with no text to the side of
   * the icon.)
   */
  providerCountClass: {
    get(){
      if (this.providerList){
        if(this.providerList.length === 1) {
          return 'one';
        }
        if (this.providerList && this.providerList.length === 2) {
          return 'two';
        }
        if (this.providerList.length > 2) {
          return 'many';
        }
      }
      return this.providerList && this.providerList.length;
    }
  },

  /**
   * The `session` is bound out to the appstate's `session`, so we can update
   * the appstate's session once the user has logged in.
   */
  session: {
    type: '*'
  },

  sessionModel: {},

  /**
   * The name of the currently active tab. Bind this to an attribute in your routes
   * to make it update the route.
   */
  activeTab: {
    value() {
      if(this.localSignup){
        return 'signup';
      }
      return 'login';
    } 
  },

  email: {
    type: 'string'
  },

  password: {
    type: 'string'
  },

  login(ev, email, password) {
    ev.preventDefault();

    let Session = this.sessionModel;
    if (!Session) {
      console.error('A session model must be provided to the auth-component.');
    }

    return new Session({
      type: 'local',
      email,
      password
    }).save();
  }
});

export default Component.extend({
  tag: 'auth-component',
  ViewModel,
  template
});
