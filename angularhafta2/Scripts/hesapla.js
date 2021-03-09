/// <reference path="D:\angularhafta2\angularhafta2\Scripts/angular.js" />
var uygulamam = angular.module("hesapmodule", []);
var kontrolur = function ($scope) {

    $scope.sayi1 = 0;
    $scope.sayi2 = 0;
    $scope.sonuc = 0;

    $scope.topla = function () {
        $scope.sonuc = $scope.sayi2 + $scope.sayi1;
    };

    $scope.carp = function () {
        $scope.sonuc = $scope.sayi2 * $scope.sayi1;
    };
};
uygulamam.controller("kontrolur", kontrolur);