import { connect } from 'react-view-models';
import DefineMap from 'can-define/map/map';
import View from './input.jsx';
import './input.less';
import {devWarning} from 'auth-component/utils';

export const ViewModel = DefineMap.extend({
  '*': {
    serialize: true
  },

  /**
   * The `type` of input.
   */
  type: {
    type: 'string',
    value: 'text'
  },

  /**
   * Since we're using the placeholder like a label, it needs to be customizable.
   */
  placeholder: {
    type: 'string',
    value: ''
  },

  /**
   * Holds the `value` of the input.
   */
  value: {
    type: 'string',
    value: ''
  },

  /**
   * The input calls this function onChange to update this viewModel.
   */
  handleValueChange (event) {
    let value = event.target.value;
    this.value = value;
    this.onChange(event);
    this.onValueChange(value)
      .then(value => this.uiSuccess(value))
      .catch(error => this.uiError(error));
  },

  /**
   * A callback function for binding out to another component.
   * Gets called by `handleValueChange`.
   */
  onChange (value) {},

  /**
   * The `onValueChange` callback gets called right after the value
   * is updated. It can be used to asynchronously check if a value
   * is valid.
   */
  onValueChange (value) {
    if (value === 'test') {
      return Promise.reject({message: 'username unavailable'});
    }
    return Promise.resolve(value);
  },

  /**
   * If there is a problem with the value, `error` can be set with an
   * object that contains a 'message' attribute.
   */
  error: 'any',

  /**
   * Clears any error message.
   */
  uiSuccess (value) {
    this.error = undefined;
  },

  /**
   * When the value fails validation, this sets the `error` attribute
   * which displays a message in the UI.
   */
  uiError (error) {
    this.warn(error.message);
    this.error = {message: error.message};
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
  }
});

export default connect(ViewModel, View);
