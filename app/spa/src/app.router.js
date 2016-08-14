/**
 * Created by Alexander on 14-Aug-16.
 */
angular.module("LiberActa")
    .config(function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/cover');

        $stateProvider.
            state('cover', {
                url: '/cover',
                template: '<cover></cover>'
            })
            .state('home', {
                url: '/home',
                template: '<home></home>'
            })
    });