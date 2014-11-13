(function() {
	var app = angular.module('toDo', ['ngAnimate']);
	
	// Controller holds the todo infomation
	app.controller('TodoCtrl', ['$scope', function($scope) {
		$scope.todos = [
		{
			'msg': 'This is a demo, to remove this one check "complete" below and then click clear.',
			'for' : 'bill',
			'priority' : 'low',
			'date': '29121980',
			'done': false
		}];
	
	// On form submit, add data from form to the controller
		$scope.addtodo = function(){
			$scope.todos.push({'msg':$scope.newtodomsg, 'priority':$scope.newtodopriority, 'date':$scope.newtododate, 'for':$scope.newtodofor,'done':false});
			$scope.newtodo = '';
			$scope.newtodotitle = '';
		};
	// When 'clear' is clicked, filter the controller data and return results which are done is false
		$scope.cleartodo = function(){
			$scope.todos = $scope.todos.filter(function(item){
				return !item.done;
			});
		};
	}]);
})();