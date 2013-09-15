ToDoModule = angular.module( 'toDo.todo', [
  'ui.state',
  'titleService'
  ])

.run(function(titleService){
	titleService.setTitle( 'NewToDo' );
})
.factory('todoList',function(){
	var todoListObject = {};
	todoListObject.todoListArray = [];
	todoListObject.pushItem = function(item){
		if(item && item !== ""){
			todoListObject.todoListArray.push(item);
		}
	};
	todoListObject.getItems = function(){
		return todoListObject.todoListArray;
	};
	return todoListObject;
})

.directive('createtodo',function(){
	console.log("inside directive");
	return {
		restrict: "E",
		scope: {
			newToDo: "@"
		},
		templateUrl: "todo/add-todo.tpl.html",
		controller: function($scope,todoList){
			$scope.addItem = function(){
				todoList.pushItem($scope.newToDo);
				$scope.newToDo = "";
			};
				
		}
	};
})



.config(function config($stateProvider) {
	$stateProvider.state('todos', {
		url: '/todos',
		views: {
			"todo-list": {
				templateUrl: 'todo/todo.tpl.html',
				controller: "ToDoController"
			}
		}
	});
})

.controller("ToDoController",["$scope","todoList", function($scope,todoList){
	$scope.items = todoList.getItems();

}])
;