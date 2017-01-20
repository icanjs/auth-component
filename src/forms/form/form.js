import { connect } from 'react-view-models';
import DefineMap from 'can-define/map/';
import {devWarning} from 'auth-component/utils';
import View from './form.jsx';

export const ViewModel = DefineMap.extend({
  '*': {
    serialize: true
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
   * `service` is a FeathersJS service. Its create method will be used to submit
   * data to the server.
   */
  service: 'any',

  /**
   * There are a few warnings that will show up by default. They can be turned
   * off by setting `suppressWarnings` to true.
   */
  suppressWarnings: {
    value: false
  },

  /**
   * When an error is returned from the server, it will end up here.
   */
  error: 'string',

  /**
   * Clears the error message.
   */
  clearError () {
    this.error = undefined;
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
   * `formSubmitted` is the handler for the form. It calls `onSubmit`
   * with the auth data.
   */
  formSubmitted (values) {
    if (this.strategy) {
      values.strategy = this.strategy;
    }
    this.clearError();
    this.onSubmit(values)
      .then(response => this.onSuccess(response))
      .catch(error => this.uiError(error));
  },

  /**
   * The default `onSubmit` function uses the Model or service to submit
   * data to the server. This function can be overwritten.
   */
  onSubmit (data) {
    // If a can-connect Model was provided
    if (this.Model) {
      return new this.Model(data).save();
    // If a Feathers service was provided.
    } else if (this.service) {
      return this.service.create(data);
    // A onSubmit function has to be provided.
    } else {
      return Promise.reject(new Error(`${this.formName}: You must provide a Model or service attribute, or overwrite the onSubmit function.`));
    }
  },

  /**
   * `onSuccess` function gets run when a successful onSubmit response was received.
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
    this.error = error.message || error;
    this.onError(error);
  },

  /**
   * When submit fails, the `onError` callback can be used to handle custom
   * logic in your app.
   */
  onError (error) {
    this.warn(error);
  }
});

export default connect(ViewModel, View);
