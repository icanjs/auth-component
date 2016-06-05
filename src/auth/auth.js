import Component from 'can/component/';
import Map from 'can/map/';
import can from 'can';
import 'can/map/define/';
import './auth.less!';
import template from './auth.stache';
import providerIcons from '../provider-icons/index';

export const ViewModel = Map.extend({
  define: {

      ui: {
        value: 'compact'
      },

      local: {
        set(val){
          val = val || 'password';
          return val;
        }
      },

      /**
       * Tabs should only show if local login is set to password and signup is enabled.
       */
      tabsShouldShow: {
        get(){
          return this.attr('local') === 'password' && this.attr('localSignup');
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
          let providerString = this.attr('providers'),
            providerList;

          if (providerString) {
            providerList = providerString.split(',')
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
          let providers = this.attr('providerList');
          return providers.length || 0;
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
          let providers = this.attr('providerList');
          if (providers){
            if(providers.length === 1) {
              return 'one';
            }
            if (providers && providers.length === 2) {
              return 'two';
            }
            if (providers.length > 2) {
              return 'many';
            }
          }
          return providers && providers.length;
        }
      },

      /**
       * Determines if signup controls are visible in the UI. Valid values include
       * `none` and `false`.
       */
      localSignup: {
        value: true,
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
       * The `session` is bound out to the appstate's `session`, so we can update
       * the appstate's session once the user has logged in.
       */
      session: {},

      sessionModel: {},

      /**
       * Set the `routeAttrName` to the attribute in the route that the component
       * should watch to determine which tab to show and to handle OAuth login failure.
       */
      routeAttrName: {
        value: 'subpage'
      },

      /**
       * `routeAttr` returns the value held in the `routeAttrName` of can.route.
       */
      routeAttr: {
        get(){
          let attrName = this.attr('routeAttrName');
          return can.route.attr(attrName);
        }
      },

      email: {
        type: 'string'
      },

      password: {
        type: 'string'
      }
    },

    login(ev, email, password) {
      ev.preventDefault();

      let Session = this.attr('sessionModel');
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
  viewModel: ViewModel,
  template,
  leakScope: true
});
