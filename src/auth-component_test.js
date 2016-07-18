import QUnit from 'steal-qunit';
import plugin from './auth/';

QUnit.module('auth-component');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
});
