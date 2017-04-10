'use strict';

var angular = require('angular');
var StackOverflowAnswerService = angular.module('aver.stack_overflow_test.question', []);

StackOverflowAnswerService.factory('StackOverflowAnswer', ['$http', '$q', function($http, $q) {
    var urlFull = 'https://api.stackexchange.com/2.2/questions/' + id + '/answers?site=serverfault';
    var urlMain = 'https://api.stackexchange.com/2.2';
    var StackOverflowAnswer = {};
    StackOverflowAnswer.getInfo = function() {
        return $http.get(urlFull).then(function(resp) {
            return resp.data;
        }, function(error) {
            return $q.reject(error.data);
        });
    };
    StackOverflowAnswer.getTags = function() {
        return $http.get(urlMain + '/tags');
    };
    return StackOverflowAnswer;
}]);

module.exports = StackOverflowAnswerService.name;