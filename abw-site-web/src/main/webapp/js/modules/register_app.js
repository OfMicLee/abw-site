/**
 * Created by MicLee on 14/11/29.
 */
registerApp = angular.module("register_app",[]);
registerApp.controller("registerController",function($scope) {
    $scope.resultmsg = "";
    $scope.formshow=false;

    $scope.addUser = function() {
        //保存数据库
        //.......

        $scope.resultmsg = "Thanks," + $scope.user.username + ", we add you! Psw:" + $scope.user.password;

        $scope.user = null;
    }
})