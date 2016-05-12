import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './auth.less!';
import template from './auth.stache';

export const ViewModel = Map.extend({
  define: {

      ui: {
        value: 'compact'
      },

      local: {
        set(val){
          val = val || 'password';
          console.log(val);
          return val;
        }
      },

      tabsShouldShow: {
        get(){
          console.log('hi');
          return this.attr('local') === 'password' && this.attr('localSignup');
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
       * The `page` is bound out to the appstate's `page`, so we can change to
       * the `chat` page once the user has logged in.
       */
      page: {},

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

      new Session({
        type: 'local',
        email,
        password
      }).save();
      // .then(response => {
      //   this.attr('session', response);
      //   this.attr('page', 'chat');
      //   return response;
      // });
    }
});

export default Component.extend({
  tag: 'auth-component',
  viewModel: ViewModel,
  template,
  leakScope: true
});
