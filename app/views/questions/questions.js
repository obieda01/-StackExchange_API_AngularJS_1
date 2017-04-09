'use strict';
var stackoverflow = require('services/questionsService/stackoverflow');
var stackoverflowquestion = require('services/stackoverflow_questionDetail/stackoverflow');

var angular = require('angular');
var angularUIRouter = require('angular-ui-router');
var templateUrl = require('./questions.html');

module.exports = angular.module('aver.stack_overflow_test.questions', [angularUIRouter, stackoverflow, stackoverflowquestion])

.config(function($stateProvider, $controllerProvider) {

    var questionsState = {
        name: 'questions',
        url: '/questions',
        controller: 'QuestionsCtrl',
        controllerAs: 'QuestionsCtrl',
        templateUrl: templateUrl
    };
    $stateProvider.state(questionsState);


})

.controller('QuestionsCtrl', function($scope, StackOverflow) {
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