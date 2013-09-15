angular.module( 'toDo', [
  'templates-app',
  'templates-common',
  'ui.state',
  'ui.route',
  'titleService',
  'toDo.todo',
  'toDo.graphModule'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise("/todos");
})

.run( function run ( titleService ) {
  titleService.setSuffix( ' | ToDo' );
})

.controller( 'AppCtrl', function ToDoCtrl ( $scope, $location ) {
})

;

