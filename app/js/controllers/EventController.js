'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $anchorScroll, $routeParams, $route) {

        $scope.sortorder = 'name';

        $scope.event = $route.current.locals.event;
        console.log($route.current.params.foo);
                
        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }

        $scope.scrollToSession = function() {
            $anchorScroll();
        }

        $scope.reload = function() {
            $route.reload();
        }
    }
);