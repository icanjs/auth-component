/* global describe, it */
import 'steal-mocha';
import assert from 'assert';
import FormVM from './form-base-vm';
import DefineMap from 'can-define/map/map';

describe('Forms Base ViewModel', function () {
  it('exports the ViewModel.', function () {
    assert(FormVM.prototype instanceof DefineMap);
  });

  describe('well-formed viewModel instance', function () {
    it('has all default props in place.', function () {
      const vm = new FormVM({});
      const defaults = {
        usernameField: 'email',
        usernamePlaceholder: 'e-mail address',
        username: '',
        passwordField: 'password',
        password: '',
        passwordPlaceholder: 'password',
        suppressWarnings: false
      };
      Object.keys(defaults).map(key => {
        assert(vm[key] === defaults[key]);
      });
    });

    it('has all functions in place', function () {
      const vm = new FormVM({});
      const functions = [
        'usernameChanged',
        'passwordChanged',
        'warn',
        'submitClicked',
        'prepareData',
        'handleSubmit',
        'onSuccess',
        'uiError',
        'onError'
      ];
      functions.map(fnName => {
        assert(typeof vm[fnName] === 'function');
      });
    });

    it('can have a strategy property', function () {
      const vm = new FormVM({
        strategy: 'local'
      });
      assert(vm.strategy === 'local');
    });

    it('can have a Model property', function () {
      const vm = new FormVM({
        Model: function () {}
      });
      assert(typeof vm.Model === 'function');
    });

    it('can have a service property', function () {
      const vm = new FormVM({
        service: {}
      });
      assert(typeof vm.service === 'object');
    });

    it('can have a buttonText property', function () {
      const vm = new FormVM({
        buttonText: 'yellow lamp'
      });
      assert(vm.buttonText === 'yellow lamp');
    });
  });

  describe('usernameChanged handler', function () {
    it('properly sets the username', function () {
      const vm = new FormVM({});
      vm.usernameChanged({
        target: {
          value: 'marshall'
        }
      });
      assert(vm.username === 'marshall');
    });
  });

  describe('passwordChanged handler', function () {
    it('properly sets the password', function () {
      const vm = new FormVM({});
      vm.passwordChanged({
        target: {
          value: 'so-secret'
        }
      });
      assert(vm.password === 'so-secret');
    });
  });

  describe('console warnings', function () {
    it('have a suppressWarnings property', function () {
      const vm = new FormVM({
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

  describe('submitClicked handler', function () {
    it('calls the handleSubmit function with data', function () {
      let email = 'marshall@bitovi.com';
      let password = '1234';
      const vm = new FormVM({
        username: email,
        password: password,
        handleSubmit (data) {
          assert(data.email === email);
          assert(data.password === password);
          return Promise.resolve();
        },
        onSuccess () {}
      });
      vm.submitClicked({
        preventDefault: () => {}
      });
    });

    it('calls the onSuccess callback with data', function () {
      let email = 'marshall@bitovi.com';
      let password = '1234';
      const vm = new FormVM({
        username: email,
        password: password,
        handleSubmit (data) {
          return Promise.resolve(data);
        },
        onSuccess (data) {
          assert(data.email === email);
          assert(data.password === password);
        }
      });
      vm.submitClicked({
        preventDefault: () => {}
      });
    });

    it('calls the uiError function on error', function () {
      const vm = new FormVM({
        handleSubmit () {
          let error = new Error('fail bus');
          return Promise.reject(error);
        },
        onSuccess (data) {
          console.log(data);
        },
        uiError (error) {
          assert(error);
        }
      });
      vm.submitClicked({
        preventDefault: () => {}
      });
    });

    it('calls the onError callback on error', function () {
      const vm = new FormVM({
        handleSubmit () {
          let error = new Error('fail bus');
          return Promise.reject(error);
        },
        onSuccess (data) {
          console.log(data);
        },
        onError (error) {
          assert(error);
        }
      });
      vm.submitClicked({
        preventDefault: () => {}
      });
    });

    it('adds the strategy to data', function () {
      let email = 'marshall@bitovi.com';
      let password = '1234';
      const vm = new FormVM({
        username: email,
        password: password,
        strategy: 'local',
        handleSubmit (data) {
          assert(data.strategy === 'local');
          return Promise.resolve();
        },
        onSuccess () {}
      });
      vm.submitClicked({
        preventDefault: () => {}
      });
    });

    it('calls the prepareData callback', function () {
      let email = 'marshall@bitovi.com';
      let password = '1234';
      const vm = new FormVM({
        username: email,
        password: password,
        strategy: 'local',
        handleSubmit (data) {
          return Promise.resolve(data);
        },
        prepareData (data) {
          assert(data.strategy === 'local');
          return data;
        },
        onSuccess () {}
      });
      vm.submitClicked({
        preventDefault: () => {}
      });
    });
  });
});
