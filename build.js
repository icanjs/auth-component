var stealTools = require('steal-tools');
var path = require('path');

stealTools.export({
  steal: {
    config: path.join(__dirname, '/package.json!npm')
  },
  outputs: {
    '+cjs': {},
    '+amd': {},
    '+global-js': {}
  }
}).catch(function (e) {
  setTimeout(function () {
    throw e;
  }, 1);
});
