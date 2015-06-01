angular.module('UserModule', ['ngResource'])
	.factory('User', ['$resource', function($resource) {
		var User = $resource(API_URL + '/users/:_id',
			{_id: '@_id'},
			{
				authenticate: {method: 'POST', url: API_URL+'/token'}
			}
		);
		return User;
	}]);