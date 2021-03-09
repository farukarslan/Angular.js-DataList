/// <reference path="angular.js" />
var uygulamam = angular.module("repeatmodule", []);
var kontrolur = function ($scope) {

    var isciler = [
        
        { name: "aliaaaaaaaa", soyname: "çakır", maas: 1300, cinsiyete: "e" },
        { name: "betüş", soyname: "arslan", maas: 1400, cinsiyete: "k" },
        { name: "eçüş", soyname: "saygın", maas: 1900, cinsiyete: "k" },
        { name: "büçüş", soyname: "öger", maas: 3300, cinsiyete: "e" }

    ];
    $scope.isciler = isciler;
    $scope.satirsayisi = 3;

};


uygulamam.controller("kontrolur", kontrolur);