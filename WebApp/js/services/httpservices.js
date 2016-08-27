var HttpServices = angular.module('HttpServices',[])

HttpServices.service('entityService', ['$http','$q','$rootScope','$state', function($http,$q,$rootScope,$state) {

	var instance = this;
	instance.http = function(postdata){				
			var deferred = $q.defer();		
			if(navigator.onLine){
				$http(postdata).success(function(data) {						
					deferred.resolve(data);		
				}).error(function (data, status, headers, config) {
					deferred.reject(data)
				});
			} else {
				setTimeout(function(){
					$rootScope.showAlert("Network not available", 0)
					deferred.reject(null)
				}, 200)
			}	
			return deferred.promise;
	}


	// var authServices = {
	// 	login : function(data){					
	// 		return instance.http({
	// 					url: $rootScope.server + 'auth/login',
	// 					method: 'POST',
	// 					data : data,
	// 					progress:true
	// 				});
	// 	}
	// }

	var entityServices = {
		get: function(entity){
			return instance.http({
						url: $rootScope.server + entity,
						method: 'GET',
						progress:true
					});
		},
		post : function(entity, data){
            return instance.http({
                        url: $rootScope.server + entity,
                        method: 'POST',
                        progress:true,
						headers:{
						"content-type":"application/json"
						},
                        data: data
                    });
        },
		delete : function(entity, data){
			return instance.http({
						url: $rootScope.server + entity,
						method: 'POST',
						progress:true,
						data: data
					});
		}

	}
	// return jQuery.extend(authServices, entityServices);
	return jQuery.extend(entityServices);


}])
