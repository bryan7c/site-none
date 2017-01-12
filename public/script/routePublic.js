app.config(function($routeProvider, $locationProvider) {
    // remove o # da url
    $locationProvider.html5Mode(true);

    $routeProvider

    // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
        .when('/none', {
            templateUrl: 'views/none.html',
            controller: 'noneCtrl',
        })
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeCtrl',
        })

    // caso não seja nenhum desses, redirecione para a rota '/'
    .otherwise({ redirectTo: '/' });
});
