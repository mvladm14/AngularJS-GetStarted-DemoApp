'use strict';

eventsApp.controller('MainMenuController',
    function MainMenuController($scope, $location) {
        
        console.log('absUrl: ', $location.absUrl());
        console.log('protocol: ', $location.protocol());
        console.log('port: ', $location.port());

        $scope.createEvent = function() {
            $location.url('/newEvent');
        }
    }
);