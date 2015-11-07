'use strict';

/**
 * @ngdoc overview
 * @name showcaseApp
 * @description
 * # showcaseApp
 *
 * Main module of the application.
 */
angular
  .module('showcaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/l-evenement', {
        templateUrl: 'views/evenement.html',
        controller: 'EvenementCtrl',
        controllerAs: 'Evenement'
      })
      .when('/la-saison', {
        templateUrl: 'views/saison.html',
        controller: 'SaisonCtrl',
        controllerAs: 'Saison'
      })
      .when('/la-compagnie', {
        templateUrl: 'views/compagnie.html',
        controller: 'CompagnieCtrl',
        controllerAs: 'Compagnie'
      })
      .when('/les-creations', {
        templateUrl: 'views/creation.html',
        controller: 'CreationCtrl',
        controllerAs: 'Creation'
      })
      .when('/creation-spectacles-jeunes', {
        templateUrl: 'views/jeune.html',
        controller: 'JeuneCtrl',
        controllerAs: 'Jeune'
      })
      .when('/creation-spectacles-adultes', {
        templateUrl: 'views/adulte.html',
        controller: 'AdulteCtrl',
        controllerAs: 'Adulte'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
