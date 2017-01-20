/* global describe, it */
import 'steal-mocha';
import assert from 'assert';
import {ViewModel as FormVM} from './form';
import DefineMap from 'can-define/map/map';

describe('Form ViewModel', function () {
  it('exports the ViewModel.', function () {
    assert(FormVM.prototype instanceof DefineMap);
  });

  describe('well-formed viewModel instance', function () {
    it('has all default props in place.', function () {
      const vm = new FormVM({});
      const defaults = {
        suppressWarnings: false
      };
      Object.keys(defaults).map(key => {
        assert(vm[key] === defaults[key]);
      });
    });

    it('has all functions in place', function () {
      const vm = new FormVM({});
      const functions = [
        'clearError',
        'warn',
        'formSubmitted',
        'onSubmit',
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
  });

  describe('formSubmitted handler', function () {
    it('calls the onSubmit function with data', function (done) {
      let email = 'marshall@bitovi.com';
      let password = '1234';
      const vm = new FormVM({
        onSubmit (data) {
          assert(data.email === email);
          assert(data.password === password);
          done();
          return Promise.resolve();
        },
        onSuccess () {}
      });
      vm.formSubmitted({email, password});
    });

    it('calls the onSuccess callback with data', function (done) {
      let email = 'marshall@bitovi.com';
      let password = '1234';
      const vm = new FormVM({
        username: email,
        password: password,
        onSubmit (data) {
          return Promise.resolve(data);
        },
        onSuccess (data) {
          assert(data.email === email);
          assert(data.password === password);
          done();
        }
      });
      vm.formSubmitted({email, password});
    });

    it('calls the uiError function on error', function (done) {
      const vm = new FormVM({
        onSubmit () {
          let error = new Error('fail bus');
          return Promise.reject(error);
        },
        onSuccess (data) {
          console.log(data);
        },
        uiError (error) {
          assert(error);
          done();
        }
      });
      vm.formSubmitted({});
    });

    it('calls the onError callback on error', function (done) {
      const vm = new FormVM({
        onSubmit () {
          let error = new Error('fail bus');
          return Promise.reject(error);
        },
        onSuccess (data) {
          console.log(data);
        },
        onError (error) {
          assert(error);
          done();
        }
      });
      vm.formSubmitted({});
    });

    it('adds the strategy to data', function (done) {
      let email = 'marshall@bitovi.com';
      let password = '1234';
      const vm = new FormVM({
        strategy: 'local',
        onSubmit (data) {
          assert(data.strategy === 'local');
          return Promise.resolve();
        },
        onSuccess () {
          done();
        }
      });
      vm.formSubmitted({email, password});
    });
  });

  describe('Error Messages', function () {
    it('can have an error property', function () {
      const vm = new FormVM({
        error: 'there was an error'
      });
      assert(vm.error === 'there was an error');
    });

    it('can clear the error message', function () {
      const vm = new FormVM({
        error: 'message'
      });
      vm.clearError();
      assert(vm.error === undefined);
    });
  });
});
