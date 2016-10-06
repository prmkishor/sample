var stagoApp = angular.module('stagoApp', ['ui.router']);

stagoApp.config(function($stateProvider, $urlRouterProvider) {   

    $urlRouterProvider.otherwise('/home');  

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'app/login/login.html'
        })
        // nested views
        .state('home', {
            url: '/home',
            templateUrl: 'app/home.html'
        })

        // nested list with custom controller
        .state('home.manageUser', {
            url: '/manageUser',
            templateUrl: 'app/components/manageUser/manageUser.html',
            controller: 'manageUserController'
        })             
});

stagoApp.controller("mainController", function($scope){
    
    $scope.sample = "sample data";
    
});

