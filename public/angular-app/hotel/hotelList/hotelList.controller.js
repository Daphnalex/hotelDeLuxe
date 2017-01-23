angular.module("hoBook").controller("hotelListController",hotelListController);

function hotelListController($route, $location, $routeParams, hotelFactory) {

  var hl = this;

  hotelFactory.hotelGetAll().then(function(response){
    hl.hotels = response.data;
    console.log(hl.hotels);
  });

  hl.tabRating= function(rating){
    var tabRat = []
    for(let i=1; i<=rating; i++){
      tabRat.push(i);
      console.log(tabRat);
    }
    return tabRat;
  }

  hl.pageHotel= function(hotel){
    var id=hotel._id;
    $location.path('/hotels/'+id);
  }
}
