'use strict';

var angular = require('angular');
var angularUIRouter = require('angular-ui-router');
var templateUrl = require('./view1.html');
var versionDirective = require('directives/version/vr-version');

module.exports = angular.module('aver.stack_overflow_test.view1',
  [angularUIRouter, versionDirective]
)

.config(function($stateProvider) {

  var view1State = {
    name: 'view1',
    url: '/view1',
    controller: 'View1Ctrl',
    controllerAs: 'View1Ctrl',
    templateUrl: templateUrl
  };
  $stateProvider.state(view1State);

})

.controller('View1Ctrl', function() {

})

.name;
