define(function (require) {
  if (typeof __webpack_public_path__ !== ' undefined') {
    __webpack_public_path__ = '../www-packed/';
  }

  // Load any app-specific modules
  // with a relative require call,
  // like:
  var messages = require('./messages');

  // Load library/vendor modules using
  // full IDs, like:
  var print = require('print');

  print(messages.getHello());

  var timeIn = Date.now();
  setTimeout(function () {
    require(['generated/index'], function (x) {
      print('RESULT IS', x);
      alert('done in: ' + (Date.now() - timeIn)+'ms');
    })
  }, 1);
});
