import { connect } from 'react-view-models';
import DefineMap from 'can-define/map/map';
import debounce from 'lodash.debounce';
import View from './async-validator.jsx';

export const ViewModel = DefineMap.extend({
  /**
   * To prevent the query from running in an endless loop, the params
   * are cached here. This allows the query to only run when the params
   * have actually changed.
   */
  cachedParams: 'any',
  updateCachedParams (params) {
    this.cachedParams = params;
  },

  /**
   * The `params` are passed to the validate as the first argument.
   * {Object}
   */
  params: {
    type: 'any',
    value: {}
  },

  /**
   * The `otherArgs` will be applied to the query as arguments after the params.
   * {Array}
   */
  otherArgs: {
    type: 'any',
    value: [],
    set (otherArgs) {
      if (!Array.isArray(otherArgs)) {
        throw new Error('otherArgs must be an array.');
      }
      return otherArgs;
    }
  },

  /**
   * The query is a debounced version of the validate function with all of the
   * passed-in arguments.
   */
  runQuery: {
    type: 'any',
    value () {
      return debounce(this.query, this.debounce);
    }
  },

  query (params, otherArgs) {
    if (!params) {
      console.warn('no params were provided to the async form field validator.');
    }
    var args = otherArgs.splice();
    args.unshift(params);
    return this.validate.apply(undefined, args);
  },

  /**
   * The number of milliseconds the query will be debounced.
   * Defaults to 250.
   * {Integer}
   */
  debounce: {
    type: 'number',
    value: 250
  },

  /**
   * The `validate` is the function passed in to performs the async operation.
   * It must return a promise.
   * {Function}
   */
  validate: 'any'
});

export default connect(ViewModel, View);
