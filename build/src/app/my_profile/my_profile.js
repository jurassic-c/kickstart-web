angular.module( 'my_profile', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'UserModule'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'my_profile', {
    url: '/my_profile',
    views: {
      "main": {
        controller: 'MyProfileCtrl',
        templateUrl: 'my_profile/my_profile.tpl.html'
      }
    },
    data:{ pageTitle: 'My Profile' }
  });
})

.controller( 'MyProfileCtrl', function AboutCtrl( $scope, $rootScope, User, appStorage ) {
  $scope.form_submitting = false;
  $scope.save = function() {
    $scope.form_submitting = true;
    var user = new User($rootScope.user);
    user.$save({},
      function(response) {
        console.log(response);
        $scope.form_submitting = false;
        $scope.form.$setPristine();
        response.password = "";
        $rootScope.user = response;
        appStorage('healthbot').set('user', $rootScope.user);
      },
      function(response) {
        console.log(response);
        if(response.data && response.data.errors) {
          if(response.data.errors.email) { $scope.form.user_email.$setValidity(false); }
        }
        $scope.form_submitting = false;
      });
  };
})

;
