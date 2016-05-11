import QUnit from 'steal-qunit';
import plugin from './auth-component';

QUnit.module('auth-component');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the auth-component plugin');
});
