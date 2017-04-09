'use strict';
var stackoverflow = require('services/stackoverflow-questions/stackoverflow');
var angular = require('angular');
var angularUIRouter = require('angular-ui-router');
var templateUrl = require('./question.html');
module.exports = angular.module('aver.stack_overflow_test.question', [angularUIRouter, stackoverflow])

.config(function($stateProvider) {

    var questionState = {
        name: 'question',
        url: '/questions/:id',
        controller: 'QuestionCtrl',
        controllerAs: 'QuestionCtrl',
        templateUrl: templateUrl
    };
    $stateProvider.state(questionState);

})

.controller('QuestionCtrl', function($scope, StackOverflow, $http, $stateParams) {
    $scope.id = $stateParams.id;
    var vm = this;
    vm.title = 'View 2 Title';
    StackOverflow.getInfo()
        .then(function(data) {
            vm.siteInfo = data;
        }, function(error) {
            vm.stackOverflowError = error;
        });
})

.name;