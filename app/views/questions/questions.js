'use strict';
var stackoverflow = require('stackoverflow_questions/stackoverflow');
var angular = require('angular');
var angularUIRouter = require('angular-ui-router');
var templateUrl = require('./questions.html');
import { QuestionComponent } from './question.component';

module.exports = angular.module('aver.stack_overflow_test.questions', [angularUIRouter, stackoverflow])

.config(function($stateProvider, $controllerProvider) {

    var questionsState = {
        name: 'questions',
        url: '/questions',
        controller: 'QuestionsCtrl',
        controllerAs: 'QuestionsCtrl',
        templateUrl: templateUrl
    };
    $stateProvider
        .state(questionsState);

    var questionState = {
        name: 'question',
        url: '/questions/:id',
        controller: 'QuestionCtrl',
        controllerAs: 'QuestionCtrl',
        templateUrl: templateUrl
    };
    $stateProvider.state(questionState);
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