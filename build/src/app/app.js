angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'appStorage',
  'angular-jwt',
  'UserModule',
  'ui.router',
  'ui.bootstrap',
  'ui.mask',
  'login',
  'food',
  'health',
  'journal',
  'my_profile'
])

.config( function myAppConfig ( $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.factory('authInterceptor', function ($rootScope, $q, $window, $location, appStorage) {
  var storage = appStorage('healthbot');
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if (storage.get('token')) {
        config.headers.Authorization = 'Bearer ' + storage.get('token');
      }
      return config;
    },
    response: function (response) {
      if (response.status === 401) {
        $rootScope.authenticated = false;
        $rootScope.user_id = null;
        $rootScope.user = null;
        $location.path('/');
      }
      return response || $q.when(response);
    }
  };
})

.config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
})

.run( function run ($rootScope, appStorage, $state, User) {
  var storage = appStorage('healthbot');
  var token = storage.get('token');
  var user = storage.get('user');
  $rootScope.authenticated = false;
  if(token) {
    $rootScope.token = token;
    $rootScope.authenticated = true;
    if(user) {
      var u = User.get({_id: user._id}, function() {
        u.password = "";
        $rootScope.user = u;
        $rootScope.authenticated = true;
      });
    }
  }

  $rootScope.logout = function() {
    storage.set('token', null);
    storage.set('user', null);
    $rootScope.token = null;
    $rootScope.user = null;
    $rootScope.authenticated = false;
    $state.go('login');
  };
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $rootScope, $state ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
      $scope.menuCollapsed = true;
    }

    if(!$rootScope.authenticated) {
      $state.go('login');
    }
  });
})

.directive('capitalize', function() {
   return {
     require: 'ngModel',
     link: function(scope, element, attrs, modelCtrl) {
        var capitalize = function(inputValue) {
           if(inputValue === undefined) {
            inputValue = '';
          }
           var capitalized = inputValue.toUpperCase();
           if(capitalized !== inputValue) {
              modelCtrl.$setViewValue(capitalized);
              modelCtrl.$render();
            }         
            return capitalized;
         };
         modelCtrl.$parsers.push(capitalize);
         capitalize(scope[attrs.ngModel]);  // capitalize initial value
     }
   };
})

.directive('pwMatch', [function () {
return {
  scope: {
    pwMatch: '='
  },
  require: 'ngModel',
  link: function (scope, elem, attrs, ctrl) {
    elem.on('keyup', function(el) {
      scope.$apply(function() {
        ctrl.$setValidity('pwmatch', !(scope.pwMatch && elem.val() && elem.val() != scope.pwMatch));
      });
    });
  }
};
}])

;

