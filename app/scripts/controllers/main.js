'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var todosInStore = localStorageService.get('todos');
    
    $scope.todos = todosInStore || [];
    $scope.$watch('todos', function() {
      localStorageService.set('todos', $scope.todos);
    }, true);
    
    //Fix later to error check blank entries and duplicate entries
    $scope.addTodo = function() {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    
    $scope.removeTodo = function(index) {
      $scope.todos.splice(index, 1);
    };
    
  });
