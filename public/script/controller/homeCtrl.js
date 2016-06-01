app.controller('homeCtrl',function($scope, $rootScope, $location, $firebaseArray){
	var url = 'https://lanchonete.firebaseio.com';
	var fireRef = new Firebase(url);
	$scope.ingredientes = ["Ovo", "Alface", "Tomate", "Amburguer", "Mostarda", "Kechup", "Maionese"];
	$scope.output = [];

	function lanche(nome, valor, ingredientes){
		this.nome = nome;
		this.valor = valor;
		this.ingredientes = ingredientes.split(" ");
	}

	// Bind the todos to the firebase provider.
	$scope.lanches = $firebaseArray(fireRef);

	$scope.addLanche = function(lanche){
		$scope.lanches.$add(lanche);
	}

	//Seta uma variável global para armazenar o menu ativo
	$rootScope.activeTab = $location.path();

});