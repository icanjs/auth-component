/* global describe, it */
import 'steal-mocha';
import assert from 'assert';
import {ViewModel as InputVM} from './input';
import DefineMap from 'can-define/map/map';

describe('Input ViewModel', function () {
  it('exports the ViewModel.', function () {
    assert(InputVM.prototype instanceof DefineMap);
  });

  describe('well-formed viewModel instance', function () {
    it('has all default props in place.', function () {
      const vm = new InputVM({}).serialize();
      const defaults = {
        type: 'text',
        placeholder: '',
        value: ''
      };
      for (var prop in vm) {
        console.log(prop, vm[prop]);
        assert(vm[prop] === defaults[prop]);
      }
    });

    it('has all functions in place.', function () {
      const vm = new InputVM({});
      const defaults = [
        'handleValueChange',
        'onChange',
        'onValueChange',
        'uiSuccess',
        'uiError',
        'warn'
      ];
      defaults.map(fnName => {
        assert(typeof vm[fnName] === 'function');
      });
    });

    it('can have an error property.', function () {
      const vm = new InputVM({
        error: {
          message: 'test'
        }
      });
      assert(vm.error.message === 'test');
    });
  });

  describe('usernameChanged handler', function () {
    it('properly sets the username', function () {
      const vm = new InputVM({});
      vm.usernameChanged({
        target: {
          value: 'marshall'
        }
      });
      assert(vm.username === 'marshall');
    });

    it('calls the onUsernameChange callback', function (done) {
      let user = 'marshallswain';
      const vm = new InputVM({
        onUsernameChange (username) {
          assert.ok(username === user);
          done();
          return Promise.resolve(username);
        }
      });
      vm.usernameChanged({
        target: {
          value: user
        }
      });
    });
  });

  describe('console warnings', function () {
    it('have a suppressWarnings property', function () {
      const vm = new InputVM({
        suppressWarnings: true
      });
      assert(vm.suppressWarnings);
    });

    it('are suppressed by suppressWarnings', function () {
      const vm = new FormVM({});
      assert(vm.warn('test') === 'test');

      vm.suppressWarnings = true;
      assert(vm.warn('test') === undefined);
    });
  });
});
