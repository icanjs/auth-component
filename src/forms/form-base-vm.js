import DefineMap from 'can-define/map/';
import {devWarning} from 'auth-component/utils';

export default DefineMap.extend({
  '*': {
    serialize: true
  },

  /**
   * `usernameField` allows you to change "email" to something else in
   * outgoing data.
   */
  usernameField: {
    type: 'string',
    value: 'email'
  },
  /**
   * Since we're using placeholders like labels, you'll need to be able to customize it.
   */
  usernamePlaceholder: {
    type: 'string',
    value: 'e-mail address'
  },
  /**
   * No matter what field you pick as the `usernameField`, it will always
   * be known internally as the `username`.
   */
  username: {
    type: 'string',
    value: ''
  },
  /**
   * The username calls this function onChange to update this viewModel.
   */
  usernameChanged (event) {
    this.username = event.target.value;
    this.onUsernameChange(event.target.value)
      .then(username => this.uiUsernameSuccess(username))
      .catch(error => this.uiUsernameError(error));
  },
  /**
   * The `onUsernameChange` callback gets called right after the username
   * is updated. It can be used to check if a username is available.
   */
  onUsernameChange (username) {
    return Promise.resolve();
  },
  /**
   * If there is a problem with the username, `usernameError` can be set with an
   * object that contains a 'message' attribute.
   */
  usernameError: 'any',
  /**
   * Clears any error message on the username.
   */
  uiUsernameSuccess (username) {
    this.usernameError = undefined;
  },
  /**
   * When the username fails validation, this sets the usernameError attribute
   * which displays a message in the UI.
   */
  uiUsernameError (error) {
    this.warn(error);
    this.usernameError = {message: error.message};
  },

  /**
   * `passwordField` allows you to change "password" to something else in
   * outgoing data.
   */
  passwordField: {
    type: 'string',
    value: 'password'
  },
  /**
   * The value in the password field.
   */
  password: {
    type: 'string',
    value: ''
  },
  /**
   * Since we're using placeholders like labels, you can customize
   * the passwordPlaceholder.
   */
  passwordPlaceholder: {
    type: 'string',
    value: 'password'
  },
  /**
   * The password input calls this function onChange to update this viewModel.
   */
  passwordChanged (event) {
    this.password = event.target.value;
    this.onPasswordChange(event.target.value)
      .then(password => this.uiPasswordSuccess(password))
      .catch(error => this.uiPasswordError(error));
  },
  /**
   * The `onPasswordChange` callback gets called right after the password
   * is updated. It can be used to check if a password is valid.
   */
  onPasswordChange (password) {
    return Promise.resolve(password);
  },
  /**
   * If there is a problem with the password, `passwordError` can be set with an
   * object that contains a 'message' attribute.
   */
  passwordError: 'any',
  /**
   * Clears any error message on the password.
   */
  uiPasswordSuccess (password) {
    this.passwordError = undefined;
  },
  /**
   * When the password fails validation, this sets the passwordError attribute
   * which displays a message in the UI.
   */
  uiPasswordError (error) {
    this.warn(error);
    this.passwordError = {message: error.message};
  },

  /**
   * If a strategy attribute is provided, it will be added to the request data.
   * This is to make it easy to integrate with feathers-authentication.
   */
  strategy: 'string',

  /**
   * `Model` is a can-connect compatible Model. Passing a model will create a
   * new model instance and save it to the server.
   */
  Model: 'any',

  /**
   * There are a few warnings that will show up by default. They can be turned
   * off by setting `suppressWarnings` to true.
   */
  suppressWarnings: {
    value: false
  },

  /**
   * If warnings haven't been suppressed, `warn` uses the `devWarning` utility
   * to show a console warning message on a development machine.
   */
  warn (message) {
    if (this.suppressWarnings !== true) {
      devWarning(message);
      return message;
    }
  },

  /**
   * `submitClicked` is the handler for the form submit. It calls `handleSubmit`
   * with the auth data.
   */
  submitClicked (event) {
    event.preventDefault();
    let authData = {
      [this.usernameField]: this.username,
      [this.passwordField]: this.password
    };
    if (this.strategy) {
      authData.strategy = this.strategy;
    }
    authData = this.prepareData(authData);
    this.handleSubmit(authData)
      .then(response => this.onSuccess(response))
      .catch(error => this.uiError(error));
  },

  /**
   * `prepareData` allows access to the data before it's sent to the server.
   */
  prepareData (data) {
    return data;
  },

  /**
   * The default `handleSubmit` function uses the Model or service to submit
   * data to the server. This function can be overwritten.
   */
  handleSubmit (data) {
    // If a can-connect Model was provided
    if (this.Model) {
      return new this.Model(data).save();
    // If a Feathers service was provided.
    } else if (this.service) {
      return this.service.create(data);
    // A handleSubmit function has to be provided.
    } else {
      return Promise.reject(new Error(`${this.formName}: You must provide a Model or service attribute, or overwrite the handleSubmit function.`));
    }
  },

  /**
   * `onSuccess` function gets run when a successful handleSubmit response was received.
   * In most cases, it will need to be overwritten to handle custom requirements.
   */
  onSuccess (data) {
    this.warn(`Pass an "onSuccess" function to the ${this.formName} to handle success.`);
  },

  /**
   * `uiError` makes sure the UI responds properly to any error received.
   * It calls `onError`.
   */
  uiError (error) {
    this.onError(error);
  },

  /**
   * When submit fails, the `onError` callback can be used to handle custom
   * logic in your app.
   */
  onError (error) {
    this.warn(error);
  },

  buttonText: {
    type: 'string'
  }
});
