'use strict';


var angular = require('angular');
var angularUIRouter = require('angular-ui-router');
var viewsModule = require('./views/index.views');

// Declare app level module which depends on views, and components
angular.module('aver.stack_overflow_test', [
    angularUIRouter,
    viewsModule
])

.config(function($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode({
        enabled: true
    });
    $urlRouterProvider.otherwise('/questions');
});