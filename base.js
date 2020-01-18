var $body = $("body"),
    $searchGhost = $("#search-ghost"),
    $menuAnchor = $(".menu-anchor"),
    appModules = ['duScroll', 'ui.bootstrap'],
    app = angular.module("resourcesApp", appModules),
    searchHeight;

app.controller("resourcesCtrl", function($scope, $http) {

  var toolsList = "https://raw.githubusercontent.com/thalitar/acervos.github.io/master/dados2.json";

  $http.get(toolsList).success(function(data) {
    $scope.resources = data;
  });

}).value('duScrollDuration', 1000).value('duScrollOffset', 80);

$(window).load(function() {
  setGhostHeight();
}).on('resize', function() {
  setGhostHeight();
});

function setGhostHeight() {
  setTimeout(function() {
    $searchGhost.css('height', $("#search").outerHeight());
  }, 250);
}
