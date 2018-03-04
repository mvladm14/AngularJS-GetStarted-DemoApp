'use strict';

eventsApp.directive('dateKeys', function ($compile) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, controller) {
            element.on('keydown', function (event) {
                if (isNumericKeyCode(event.keyCode) || isForwardSlashKeyCode(event.keycode) || isNavigationKeyCode(event.keycode)) {
                    return true;
                }
                return false;
            });
        }
    }

    function isNumericKeyCode(keyCode) {
        return (event.keyCode >= 48 && event.keyCode <= 57)
            || (event.keyCode >= 96 && event.keyCode <= 105);
    }

    function isForwardSlashKeyCode(keycode) {
        return event.keyCode === 191;
    }

    function isNavigationKeyCode(keycode) {
        if (keycode === 8 || (keycode >= 35 && keycode <= 40) ||
            keycode === 45 || keycode === 46) {
            return true;
        }
        return false;
    }
});