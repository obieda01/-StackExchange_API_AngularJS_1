'use strict';

var angular = require('angular').mock;
var moduleName = require('./questionDetail.html');

describe('Question controller', function() {

    beforeEach(function() {
        angular.module(moduleName);
        angular.inject(function($controller, $rootScope) {
            this.$controller = $controller;
            this.$rootScope = $rootScope;
        });

        var scope = this.$rootScope.$new();
        this.ctrl = this.$controller('QuestionCtrl', {
            $scope: scope
        });
    });

    it('was successfully created', function() {
        expect(this.ctrl).toBeDefined();
    });

});