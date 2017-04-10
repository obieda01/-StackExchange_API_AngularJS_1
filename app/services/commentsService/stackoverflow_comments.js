'use strict';

var angular = require('angular');
var StackOverflowCommentsService = angular.module('aver.stack_overflow_test.question', []);

StackOverflowCommentsService.factory('StackOverflowComment', ['$http', '$q', function($http, $q) {
    var urlFull = 'https://api.stackexchange.com/2.2/questions/' + id + '/comments?site=serverfault';
    var urlMain = 'https://api.stackexchange.com/2.2';
    var StackOverflowComment = {};
    StackOverflowComment.getInfo = function() {
        return $http.get(urlFull).then(function(resp) {
            return resp.data;
        }, function(error) {
            return $q.reject(error.data);
        });
    };
    StackOverflowComment.getTags = function() {
        return $http.get(urlMain + '/tags');
    };
    return StackOverflowComment;

}]);

module.exports = StackOverflowCommentsService.name;