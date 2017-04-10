var app = angular.module('halfmarathon', []);

var people = null;

app.controller('votingController', function($scope, $http) {

  $scope.totalVotes = 0;

  $http.get('http://mtpweekend.com/halfmarathon/php/getScores.php').
    success(function(data, status, headers, config) {
      if(data != null) {
        $scope.people = data;

        for(var i = 0; i < data.length; i++) {
          $scope.totalVotes = $scope.totalVotes + parseInt(data[i].votes);
        }
      }
    }).
    error(function(data, status, headers, config) {
    });

  $scope.voteFor = function() {
    $http.post('http://mtpweekend.com/halfmarathon/php/voteFor.php', {name: $scope.selectPeople.name}).
      success(function(data, status, headers, config) {
        for(var i = 0; i < $scope.people.length; i++) {
          if($scope.people[i].name == $scope.selectPeople.name) {
            $scope.people[i].votes = parseInt($scope.people[i].votes) + 1;
            $scope.totalVotes = parseInt($scope.totalVotes) + 1;
          }
      }
      }).
      error(function(data, status, headers, config) {
         alert("Sorry there seems to be an error :(");
      });
  };

});


$(document).ready(function(){


  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


});
