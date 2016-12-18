import DefineMap from 'can-define/map/';
import providerIcons from '../provider-icons/index';

export const ViewModel = DefineMap.extend({
  seal: false
}, {
  ui: {
    value: 'compact'
  },

  /*
   * Specifies the type of local authentication used. For now, the only option is
   * 'password', but 'passwordless' will be supported in the future.
   */
  local: 'string',

  /**
   * Determines if signup controls are visible in the UI. Any value other than
   * `false` will be interpreted as `true`.
   */
  localSignup: {
    value: false,
    set (val) {
      return !!val;
    }
  },

  /**
   * Tabs should only show if local login is set to password and signup is enabled.
   */
  tabsShouldShow: {
    get () {
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
   * An array of provider objects with name and template for the passed-in providers.
   * It is used to put the icons in the correct order.
   */
  providerList: {
    get () {
      let providerList;

      if (this.providers) {
        providerList = this.providers.split(',')
          // filter out any unsupported providers.
          .filter(provider => {
            return Object.keys(providerIcons).indexOf(provider.trim()) > -1;
          })
          .map(provider => {
            provider = provider.trim();
            return {
              name: provider,
              url: this[`${provider}Url`] || `auth/${provider}`,
              template: providerIcons[provider]
            };
          });
      }
      return providerList;
    }
  },

  providerMap: {
    get () {
      let providerMap = {};
      this.providerList.forEach(provider => {
        providerMap[provider.name] = provider;
      });
      return providerMap;
    }
  },

  /*
   * An object containing svg logos of the providers, keyed by name.
   */
  providerIcons: {
    value: providerIcons
  },

  /**
   * Returns an integer representing the number of SSO providers that have
   * been enabled.
   */
  providerCount: {
    get () {
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
    get () {
      if (this.providerList) {
        switch (this.providerList.length) {
          case 1:
            return 'one';
          case 2:
            return 'two';
          default:
            return 'many';
        }
      }
      return this.providerList && this.providerList.length;
    }
  },

  /**
   * The `session` is bound out to the appstate's `session`, so we can update
   * the appstate's session once the user has logged in.
   * TODO: eliminate the need for this by implementing streams in app.js
   */
  session: '*',

  /*
   * The Session can-connect model.
   */
  sessionModel: {},

  /*
   * A pass-through parameter that used by the auth ui components to determine
   * the behavior when clicking a social login button.
   */
  oauthFlow: 'string',

  /**
   * The name of the currently active auth view. Bind this to a route attribute to change
   * the tab based on the route. If signup is enabled, 'signup' is the default value,
   * otherwise it's 'login'.
   */
  subpage: {
    value () {
      if (this.localSignup) {
        return 'signup';
      }
      return 'login';
    }
  },

  /*
   * These are pass-through attributes for the ui's OAuth popup.
   */
  popupHeight: 'number',
  popupWidth: 'number',

  login (ev, email, password) {
    ev.preventDefault();
    var self = this;

    let Session = this.sessionModel;
    if (!Session) {
      console.error('A session-model must be provided to the auth-component.');
    }

    return new Session({
      type: 'local',
      email,
      password
    }).save().then(response => {
      response.password = undefined;
      self.session = response;
    });
  }
});
