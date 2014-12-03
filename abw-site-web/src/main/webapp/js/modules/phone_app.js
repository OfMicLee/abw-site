/**
 * Created by MicLee on 14/11/21.
 */

angular.module('phone_app',[]).controller('PhoneListController', function($scope){
    $scope.phones = [
        {"name": "Nexus S",
            "snippet": "Fast just got faster with Nexus S.",
            "age": 2},
        {"name": "Motorola XOOM™ with Wi-Fi",
            "snippet": "The Next, Next Generation tablet.",
            "age": 0},
        {"name": "xiaomi™",
            "snippet": "The Next, Next Generation tablet.",
            "age": 3},
        {"name": "IPHONE 6",
            "snippet": "The most cool phone.",
            "age": 1}
    ];
})
