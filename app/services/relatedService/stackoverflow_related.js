'use strict';

var angular = require('angular');
var StackOverflowDetailService = angular.module('aver.stack_overflow_test.question', []);

StackOverflowDetailService.factory('StackOverflowDetail', ['$http', '$q', function($http, $q) {
    var urlFull = 'https://api.stackexchange.com/2.2/questions/' + id + '/related?site=serverfault';
    var urlMain = 'https://api.stackexchange.com/2.2';
    var StackOverflowDetail = {};

    StackOverflowDetail.getInfo = function() {
        return $http.get(urlFull).then(function(resp) {
            return resp.data;
        }, function(error) {
            return $q.reject(error.data);
        });
    };
    StackOverflowDetail.getTags = function() {
        return $http.get(urlMain + '/tags');
    };


    return StackOverflowDetail;

}]);

module.exports = StackOverflowDetailService.name;