'use strict';

var angular = require('angular');

var StackOverflowService = angular.module('aver.stack_overflow_test.question', []);

StackOverflowService.factory('StackOverflow', ['$http', '$q', function($http, $q) {
    var urlBase = 'http://api.stackexchange.com/2.2';
    var StackOverflow = {};

    StackOverflow.getInfo = function() {
        return $http.get(urlBase + '/questions?pagesize=20&order=desc&sort=activity&site=stackoverflow').then(function(resp) {


            return resp.data;
        }, function(error) {
            return $q.reject(error.data);
        });
    };
    StackOverflow.getTags = function() {
        return $http.get(urlBase + '/tags');
    };


    return StackOverflow;

}]);

module.exports = StackOverflowService.name;