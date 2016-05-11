import QUnit from 'steal-qunit';
import { ViewModel } from './ui';

// ViewModel unit tests
QUnit.module('auth-component/ui');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the auth-component-ui component');
});
