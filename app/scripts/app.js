'use strict';

/**
 * @ngdoc overview
 * @name adminAngularFirebaseApp
 * @description
 * # adminAngularFirebaseApp
 *
 * Main module of the application.
 */
angular.module('adminAngularFirebaseApp', [
  'ngMessages',
  'ngRoute',
  'ngSanitize',
  'ngMaterial'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
    .otherwise({
      redirectTo: '/'
    });
})
.run(function ($rootScope, $mdSidenav, $mdDialog, $window) {
  $rootScope.toggleSidenav = function () {
    $mdSidenav('left').toggle();
  };

  $rootScope.showConfirm = function () {
    var confirm = $mdDialog.confirm()
      .title('Abandonando el administrador')
      .textContent('¿Desea abandonar la página de administración para ir a la página?')
      .ok('Veamos esos cambios!')
      .cancel('Aún tengo cosas por hacer');

    $mdDialog.show(confirm).then(function() {
      $window.location.href = 'http://www.google.com';
    }, function () {});
  };
});
