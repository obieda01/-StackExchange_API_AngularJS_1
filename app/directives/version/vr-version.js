'use strict';

var versionService = require('services/version/version');
var angular = require('angular');

module.exports = angular.module('aver.demoApp.vr-version', [versionService])

.directive('vrVersion', function(version) {
  return function(scope, elm) {
    elm.text(version);
  };
})

.name;
