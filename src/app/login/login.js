angular.module( 'login', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'login', {
    url: '/login',
    views: {
      "main": {
        controller: 'LoginCtrl',
        templateUrl: 'login/login.tpl.html'
      }
    }
  });
})

.controller( 'LoginCtrl', function LoginCtrl( $scope, $rootScope, $state, $timeout, $http, appStorage ) {
  $rootScope.authenticated = false;
  var storage = appStorage('healthbot');
  $scope.phone = "";
  $scope.country_code = 1;
  if(storage.get('login_phone_country') !== undefined) {
    $scope.country_code = storage.get('login_phone_country');
  }
  $scope.code = "";
  $scope.form_type = "phone_form";
  if(storage.get('login_form_type') !== undefined) {
    $scope.form_type = storage.get('login_form_type');
  }
  $scope.form_collapsed = false;

  $scope.send_phone_code = function() {
    $scope.form_collapsed = true;
    var number = $scope.country_code + $scope.phone;
    storage.set('login_phone_country', $scope.country_code);
    $http.post(API_URL + "/login_code", {"login_type": "phone", "login_user": number})
      .success(function(data) {
        $scope.set_login_type('phone_code');
      })
      .error(function(data) {})
    ;
  };

  $scope.send_email_code = function() {
    $http.post(API_URL + "/login_code", {"login_type": "email", "login_user": $scope.email})
      .success(function(data) {
        $scope.set_login_type('email_code');
      })
      .error(function(data) {})
    ;
  };

  $scope.login_code = function() {
    $scope.form_collapsed = true;
    $http.post(API_URL + "/token", {"code": $scope.code.toLowerCase()})
      .success(function(data) {
        data.user.password = "";
        appStorage('healthbot').set('token', data.token);
        appStorage('healthbot').set('user', data.user);
        $rootScope.token = data.token;
        $rootScope.user = data.user;
        $rootScope.authenticated = true;
        $timeout(function() { $state.go("home"); }, 1000);
      })
      .error(function(data) {
        $scope.phone_login.login_code.$setValidity(false);
        $scope.email_login.login_code.$setValidity(false);
        $timeout(function() { $scope.form_collapsed = false;}, 1000);
      })
    ;
  };

  $scope.set_login_type = function(type) {
    if(type == $scope.form_type) {return;}
    if(['phone_form', 'email_form', 'password'].indexOf(type) > -1) {
      storage.set('login_form_type', type); 
    }
    $scope.form_collapsed = true;
    $timeout(function() {
      $scope.form_type = type;
      $timeout(function() {
        $scope.form_collapsed = false;
      }, 500);
    }, 500);
    $scope.phone_login.$setPristine();
    $scope.email_login.$setPristine();
    $scope.password_login.$setPristine();
  };

  $scope.login_password = function() {
    $scope.form_collapsed = true;
    $http.post(API_URL + "/token", {"email": $scope.email, "password": $scope.password})
      .success(function(data) {
        data.user.password = "";
        appStorage('healthbot').set('token', data.token);
        appStorage('healthbot').set('user', data.user);
        $rootScope.token = data.token;
        $rootScope.user = data.user;
        $rootScope.authenticated = true;
        $timeout(function() { $state.go("home"); }, 1000);
      })
      .error(function(data) {
        $scope.password_login.$setValidity(false);
        $timeout(function() { $scope.form_collapsed = false;}, 1000);
      })
    ;
  };
})

;
