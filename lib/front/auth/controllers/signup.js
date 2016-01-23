'use strict';

module.exports = function () {
  var vm = this;
  var s = document.createElement('script'); // use global document since Angular's $document is weak
  s.src = 'https://www.google.com/recaptcha/api.js?onload=vcRecaptchaApiLoaded&render=explicit&hl=fa';
  document.body.appendChild(s);
  vm.setResponse = function (res) {
    vm.captcha = res;
  };
};
