app.controller('homeCtrl',function($scope, $rootScope, $location){
	$rootScope.activeTab = $location.path();
});