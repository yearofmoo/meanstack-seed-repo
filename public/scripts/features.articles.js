angular.module('mean.features.articles', ['mean.config', 'ngRoute', 'restangular'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/articles', {
      controller : 'ArticlesCtrl',
      templateUrl : './templates/articles/index.html'
    });
  }])

  .config(['RestangularProvider', function(RestangularProvider) {
    RestangularProvider.setBaseUrl('/api');
  }])

  .controller('ArticlesCtrl', ['$scope', 'Restangular', function($scope, Restangular) {
    Restangular.one('articles').getList().then(function(articles) {
      $scope.articles = articles;
    });
  }])

  .controller('ArticleFormCtrl', ['$scope', 'Restangular', function($scope, Restangular) {
    var articles = Restangular.all('articles');

    $scope.article = {};
    $scope.submit = function() {
      articles.post($scope.article).then(function(article) {
        console.log(article);
      });
    };
  }]);
