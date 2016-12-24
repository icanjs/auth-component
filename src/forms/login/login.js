import { connect } from 'react-view-models';
import DefineMap from 'can-define/map/';
import View from './login.jsx';
import '../forms.less';
import {devWarning} from 'auth-component/utils';

export const ViewModel = DefineMap.extend({
  usernameField: {
    type: 'string',
    value: 'email'
  },
  usernamePlaceholder: {
    type: 'string',
    value: 'e-mail address'
  },

  username: {
    type: 'string',
    value: ''
  },
  /**
   * The username calls this function onChange to update this viewModel.
   */
  usernameChanged (event) {
    this.username = event.target.value;
  },

  password: {
    type: 'string',
    value: ''
  },
  /**
   * The password input calls this function onChange to update this viewModel.
   */
  passwordChanged (event) {
    this.password = event.target.value;
  },

  /**
   * `Model` is a can-connect compatible Model. Passing a model will create a 
   * new model instance and save it to the server.
   */
  Model: 'any',

  /**
   * There are a few warnings that will show up by default. They can be turned 
   * off by setting `suppressWarnings` to true.
   */
  suppressWarnings: false,

  /**
   * If warnings haven't been suppressed, `warn` uses the `devWarning` utility 
   * to show a console warning message on a development machine.
   */
  warn (message) {
    if (this.suppressWarnings !== true) {
      devWarning(message);
    }
  },

  /**
   * `loginClicked` is the handler for the form submit. It calls `handleLogin` 
   * with the auth data.
   */
  loginClicked (event) {
    event.preventDefault();
    this.handleLogin(this.username, this.password)
      .then(response => this.onSuccess(response))
      .catch(error => this.uiError(error));
  },

  /**
   * The default `handleLogin` function uses the Model or service to submit
   * login data to the server.  It calls back to the `onSuccess` function.
   * This function can also be overwritten by passing a function as an attribute.
   */
  handleLogin (username, password) {
    let authData = {
      [this.usernameField]: this.username,
      password: this.password
    };
    // If a can-connect Model was provided
    if (this.Model) {
      return new this.Model(authData).save();
    // If a Feathers service was provided.
    } else if (this.service) {
      return this.service.create(authData);
    // A handleLogin function has to be provided.
    } else {
      this.warn(`LoginForm: You must provide a Model or service attribute, or overwrite the handleLogin function.`);
    }
  },

  /**
   * `onSuccess` function gets run when a successful login response was received. In most
   * cases, it will need to be overwritten to handle custom requirements after login.
   */
  onSuccess (data) {
    this.warn(`Pass an "onSuccess" function to the login form to handle successful login.`);
  },

  /**
   * `uiError` makes sure the UI responds properly to any error received.
   * It calls `onError`.
   */
  uiError (error) {
    this.onError(error);
  },

  /**
   * When login fails, the `onError` callback can be used to handle custom
   * logic in your app.
   */
  onError (error) {
    this.warn(error);
  },

  /**
   * `loginClicked` is the handler for the form submit. It calls `handleLogin`
   * with the auth data.
   */
  forgotClicked (event) {
    event.preventDefault();
    this.onForgot(this.username, this.password);
  },

  /**
   * `handleForgot` is the function that gets run with the "forgot password" link is clicked.
   */
  onForgot () {
    this.warn(`Pass an "onForgot" function to the login form to handle "forgot password" clicks.`);
  }
});

export default connect(ViewModel, View);
