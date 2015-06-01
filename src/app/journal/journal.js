angular.module( 'journal', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'journal', {
    url: '/journal',
    views: {
      "main": {
        controller: 'JournalCtrl',
        templateUrl: 'journal/journal.tpl.html'
      }
    },
    data:{ pageTitle: 'journal' }
  });

  $stateProvider.state('journal_add', {
    url: '/journal/add',
    views: {
      "main": {
        templateUrl: 'journal/add.tpl.html',
        controller: 'JournalAddCtrl'
      }
    }
  });
})

.controller( 'JournalCtrl', function JournalCtrl( $scope, $rootScope ) {
})

.controller( 'JournalAddCtrl', function JournalAddCtrl( $scope, $rootScope ) {
})

;
