'use strict';

/**
 * @ngdoc overview
 * @name adminAngularFirebaseApp
 * @description
 * # adminAngularFirebaseApp
 *
 * Main module of the application.
 */
angular
  .module('adminAngularFirebaseApp', [
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
  });
