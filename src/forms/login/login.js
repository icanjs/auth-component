import { connect } from 'react-view-models';
import DefineMap from 'can-define/map/';
import Template from './login.jsx';
import '../forms.less';

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
   * This is a can-connect compatible Model. Passing a model will create a new
   * model instance and save it to the server.
   */
  Model: 'any',

  /**
   * This is the handler for the form submit. It calls `handleLogin` 
   * with the auth data.
   */
  loginFn (event) {
    event.preventDefault();
    this.handleLogin(this.username, this.password);
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
      new this.Model(authData).save().then(this.onSuccess);
    // If a Feathers service was provided.
    } else if (this.service) {
      this.service.create(authData).then(this.onSuccess);
    } else {
      console.warn(`You must provide a Model or service attribute, or overwrite the handleLogin function to use the login form.`);
    }
  },

  /**
   * This function gets run when a successful login response was received. In most
   * cases, it will probably need to be overwritten to handle custom requirements
   * after login.
   */
  onSuccess (data) {
    console.warn(`Pass an "onSuccess" attribute to the login form to handle successful login.`);
  }
});

export default connect(ViewModel, Template);
