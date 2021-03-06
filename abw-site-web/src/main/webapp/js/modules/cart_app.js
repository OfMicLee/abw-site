/**
 * Created by MicLee on 14/11/29.
 */
angular.module('cart_app',[]).controller('CartController',function($scope){
    $scope.items = [
        {title: "itemAAA", number: "5", price: "10"},
        {title: "itemBBB", number: "10", price: "2"},
        {title: "itemCCC", number: "15", price: "3"}
    ];

    $scope.remove = function (index) {
        $scope.items.splice(index, 1);
    }

    $scope.totalPrice = function() {
        var total = 0;
        for(var i = 0, len = $scope.items.length; i < len; i++) {
            total += $scope.items[i].price * $scope.items[i].number
        }
        return total;
    }

    $scope.subPrice = function() {
        return $scope.totalPrice() - $scope.discount;
    }

    //discount没有绑定数据模型，所以需要增加监控
    function calculateDiscount(newValue, oldValue, scope) {
        $scope.discount = newValue >= 100 ? 10 : 0;
    }
    $scope.$watch($scope.totalPrice, calculateDiscount);

    /**
     *
     * 两种方式：
     * 1）视图上定义函数 Discount:{{discount() | currency}}
     *    JS定义
     *    $scope.discount() = function() {
                 *      return $scope.totalPrice() > 100 > 10 : 0;
                 *    }
     *
     * 2）视图上定义变量 Discount:{{discount | currency}}
     *    JS设置变量监视
     *    $scope.$watch($scope.totalPrice, calculateDiscount);
     function calculateDiscount(newValue, oldValue, scope) {
                        $scope.discount = $scope.totalPrice() > 100 ? 10 : 0;
                      }
     *
     */
})