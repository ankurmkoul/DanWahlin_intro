/* 1- Adicionando uma função anônima à declaração do controller*/
demoApp.controller('SimpleController', function($scope) {
	$scope.customers = [
		{name: 'Mariana Loureiro', city: 'Sorocaba'},
		{name: 'Marco Souza', city: 'Milão'},
		{name: 'Eduardo Loureiro', city: 'São Paulo'}
	];

	$scope.addCustomer = function() {
		$scope.customers.push(
			{name: $scope.newCustomer.name, city: $scope.newCustomer.city}
		);
	};
});

/* Maneiras diferentes de criar Controllers*/

/* 2- Criando uma função externa e passando para o Controller*/
/*function SimpleController($scope) {
	$scope.customers = [
		{name: 'Mariana Loureiro', city: 'Sorocaba'},
		{name: 'Marco Souza', city: 'Milão'},
		{name: 'Eduardo Loureiro', city: 'São Paulo'}
	];
}

demoApp.controller('SimpleController', SimpleController);*/

/* 3- Criando um objeto que guarda todos os Controllers de um módulo*/
/*var controllers = {};

controllers.SimpleController = function($scope) {
	$scope.customers = [
		{name: 'Mariana Loureiro', city: 'Sorocaba'},
		{name: 'Marco Souza', city: 'Milão'},
		{name: 'Eduardo Loureiro', city: 'São Paulo'}
	];
};

demoApp.controller(controllers);*/

