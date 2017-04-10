'use strict';

var angular = require('angular');

var StackOverflowQuestionDetailService = angular.module('aver.stack_overflow_test.question', []);

StackOverflowQuestionDetailService.factory('StackOverflowQuestionDetail', ['$http', '$q', function($http, $q) {
    var urlFull = 'https://api.stackexchange.com/2.2/questions/' + id + '?site=serverfault';
    var urlMain = 'https://api.stackexchange.com/2.2';
    var StackOverflowQuestionDetail = {};
    StackOverflowQuestionDetail.getInfo = function() {
        return $http.get(urlFull).then(function(resp) {
            return resp.data;
        }, function(error) {
            return $q.reject(error.data);
        });
    };
    StackOverflowQuestionDetail.getTags = function() {
        return $http.get(urlMain + '/tags');
    };
    return StackOverflowQuestionDetail;
}]);

module.exports = StackOverflowQuestionDetailService.name;