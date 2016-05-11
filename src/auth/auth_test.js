import QUnit from 'steal-qunit';
import { ViewModel } from './auth';

// ViewModel unit tests
QUnit.module('auth-component/auth');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the auth-component component');
});
