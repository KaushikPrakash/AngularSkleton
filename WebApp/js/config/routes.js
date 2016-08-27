var appStates = {
	login :  {
		 name: 'login',
		 url: "/login", 
		 templateUrl:"templates/login.html",
		 controller:'loginController'
	},
	home :  {
		name: 'home',
		url: "/home", 
		templateUrl:"templates/home.html",
		controller:'homeController'
	}
	
};

var appRoute = ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	for(var state in appStates){
		$stateProvider.state(appStates[state])	
	}
	
	$urlRouterProvider.otherwise('login')
}];
