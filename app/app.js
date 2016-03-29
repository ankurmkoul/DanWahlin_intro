var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.config(function($routeProvider) {
	$routeProvider
		.when('/view1', 
			{
				controller: 'SimpleController',
				templateUrl: 'views/view1.html'
			})
		.when('/view2', 
			{
				controller: 'SimpleController',
				templateUrl: 'views/view2.html'
			})
		.otherwise({ redirecTo: '/view1' });
});
