app.controller('certificadoHapkidoCtrl',function($scope, $rootScope, $location){
	var graduacoes = {
		"Hapkido":[
			{nome: "Branca"},
			{nome: "Cinza"},
			{nome: "Amarela"},
			{nome: "Ponta Verde"},
			{nome: "Verde"},
			{nome: "Ponta Azul"},
			{nome: "Azul"},
			{nome: "Ponta Vermelha"},
			{nome: "Vermelha"},
			{nome: "Ponta Preta"},
			{nome: "Preta"},
			{nome: "1º Dan"},
			{nome: "2º Dan"},
			{nome: "3º Dan"},
			{nome: "4º Dan"}
		],
		"Taekwondo":[
			{nome: "Branca"},
			{nome: "Ponta Amarela"},
			{nome: "Amarela"},
			{nome: "Ponta Verde"},
			{nome: "Verde"},
			{nome: "Ponta Azul"},
			{nome: "Azul"},
			{nome: "Ponta Vermelha"},
			{nome: "Vermelha"},
			{nome: "Ponta Preta"},
			{nome: "Preta"},
			{nome: "1º Dan"},
			{nome: "2º Dan"},
			{nome: "3º Dan"},
			{nome: "4º Dan"}
		],
		"Muay Thai":[
			{nome: "Branco e Cinza"},
			{nome: "Branco"},
			{nome: "Branco e Vermelho"},
			{nome: "Vermelho"},
			{nome: "Vermelho e azul claro"},
			{nome: "Azul claro"},
			{nome: "Azul claro e Azul escuro"},
			{nome: "Azul escuro"},
			{nome: "Azul escuro e Preto"},
			{nome: "Preto"}
		],
	};
	$scope.artes = [{nome: "Hapkido", imagem: "certificado_hapkido.jpg"}, {nome: "Muay Thai", imagem: "certificado_muay_thai.jpg"}, {nome: "Taekwondo", imagem: "certificado_taekwondo.jpg"}];
	$scope.certificados = [];
	//Seta uma variável global para armazenar o menu ativo
	$rootScope.activeTab = $location.path();

	$scope.addCertificado = function(certificado){
		$scope.certificados.push(angular.copy(certificado));
		delete $scope.certificado.nome;
		$("#nome").focus();
	}

	$scope.filterGraduacao = function(arte){
		$scope.graduacoes = graduacoes[arte.nome];
	}
});
