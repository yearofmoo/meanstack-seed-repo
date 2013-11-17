angular.module('mean.app',
  ['mean.features.articles'])

  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.when('/', {
      redirectTo : '/articles'
    });
  }]);
