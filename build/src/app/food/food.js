angular.module( 'food', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'food', {
    url: '/food',
    views: {
      "main": {
        controller: 'FoodCtrl',
        templateUrl: 'food/food.tpl.html'
      }
    },
    data:{ pageTitle: 'Food' }
  });

  $stateProvider.state('food_add', {
    url: '/food/add',
    views: {
      "main": {
        templateUrl: 'food/add.tpl.html',
        controller: 'FoodAddCtrl'
      }
    }
  });
})

.controller( 'FoodCtrl', function FoodCtrl( $scope, $rootScope ) {
})

.controller( 'FoodAddCtrl', function FoodAddCtrl( $scope, $rootScope ) {
})

;
