import QUnit from 'steal-qunit';
import { ViewModel } from './auth';
import providerIcons from '../provider-icons/index';

// ViewModel unit tests
QUnit.module('auth-component/auth');

QUnit.test('Default Values', function () {
  var vm = new ViewModel();
  QUnit.equal(vm.ui, 'compact', 'Default UI is compact.');
  QUnit.equal(vm.local, undefined, 'Local auth off.');
  QUnit.equal(vm.tabsShouldShow, false, 'Tabs off.');
  QUnit.equal(vm.providers, undefined, 'No default auth providers.');
  QUnit.deepEqual(vm.providerIcons.toObject(), providerIcons, 'Icons in place');
  QUnit.equal(vm.providerCount, 0, 'Default providerCount is 0.');
  QUnit.equal(vm.providerCountClass, undefined, 'No provider count class by default');
  QUnit.equal(vm.localSignup, false, 'Signup disabled by default');
  QUnit.equal(vm.subpage, 'login', 'Default subpage attribute is "login".');
  QUnit.equal(vm.email, undefined, 'No default email.');
  QUnit.equal(vm.password, undefined, 'No default password.');
  QUnit.equal(typeof vm.login, 'function', 'Login function is in place.');
});
