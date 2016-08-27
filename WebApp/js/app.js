var ProjectName = angular.module('AdminiBot', ['ui.router','HttpServices','ngAria','ngAnimate','ngMaterial']);

ProjectName.config(appRoute);

ProjectName.run(function($rootScope, $state){
	$rootScope.state = $state;
	$rootScope.server = window.location.protocol + '//' + window.location.host + '/';
});

ProjectName.controller('loginController', loginController);
ProjectName.controller('homeController', homeController);
ProjectName.controller('appController', appController);


ProjectName.config(["$locationProvider", function($locationProvider) {
 $locationProvider.html5Mode(true);
}]);

ProjectName.config(['$httpProvider', function($httpProvider) {
   $httpProvider.defaults.useXDomain = true;
   delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
