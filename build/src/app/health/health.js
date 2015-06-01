angular.module( 'health', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'health', {
    url: '/health',
    views: {
      "main": {
        controller: 'HealthCtrl',
        templateUrl: 'health/health.tpl.html'
      }
    },
    data:{ pageTitle: 'health' }
  });

  $stateProvider.state('health_add', {
    url: '/health/add',
    views: {
      "main": {
        templateUrl: 'health/add.tpl.html',
        controller: 'HealthAddCtrl'
      }
    }
  });

  $stateProvider.state('health_add_sleep', {
    url: '/health/add/sleep',
    views: {
      "main": {
        templateUrl: 'health/add_sleep.tpl.html',
        controller: 'HealthAddSleepCtrl'
      }
    }
  });

  $stateProvider.state('health_add_toilet', {
    url: '/health/add/toilet',
    views: {
      "main": {
        templateUrl: 'health/add_toilet.tpl.html',
        controller: 'HealthAddToiletCtrl'
      }
    }
  });

  $stateProvider.state('health_add_treatment', {
    url: '/health/add/treatment',
    views: {
      "main": {
        templateUrl: 'health/add_treatment.tpl.html',
        controller: 'HealthAddTreatmentCtrl'
      }
    }
  });

  $stateProvider.state('health_add_mental', {
    url: '/health/add/mental',
    views: {
      "main": {
        templateUrl: 'health/add_mental.tpl.html',
        controller: 'HealthAddMentalCtrl'
      }
    }
  });

  $stateProvider.state('health_add_symptom', {
    url: '/health/add/symptom',
    views: {
      "main": {
        templateUrl: 'health/add_symptom.tpl.html',
        controller: 'HealthAddSymptomCtrl'
      }
    }
  });
})

.controller( 'HealthCtrl', function HealthCtrl( $scope, $rootScope ) {
})

.controller( 'HealthAddCtrl', function HealthAddCtrl( $scope, $rootScope ) {
})

.controller( 'HealthAddSleepCtrl', function HealthAddSleepCtrl( $scope, $rootScope ) {
})

.controller( 'HealthAddToiletCtrl', function HealthAddToiletCtrl( $scope, $rootScope ) {
})

.controller( 'HealthAddTreatmentCtrl', function HealthAddTreatmentCtrl( $scope, $rootScope ) {
})

.controller( 'HealthAddMentalCtrl', function HealthAddMentalCtrl( $scope, $rootScope ) {
})

.controller( 'HealthAddSymptomCtrl', function HealthAddSymptomCtrl( $scope, $rootScope ) {
})

;
