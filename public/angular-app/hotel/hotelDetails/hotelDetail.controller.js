angular.module("hoBook").controller("hotelDetailController",hotelDetailController);

function hotelDetailController($route, $routeParams, hotelFactory) {
  var hd = this;
  var hotelId = $routeParams.hotelId;

  console.log('coucou');
  hd.refresh = function(){
    hotelFactory.hotelGetOne(hotelId).then(function(response){
      hd.hotel = response.data;
      console.log(hd.hotel);
    });
  };
  hd.refresh();

  /*On initie une variable isSubmitted à false = le formulaire est initialement vide*/
  hd.isSubmitted = false;

  /*Fonction de création d'un nouveau commentaire*/
  hd.addReview = function() {
    /*On remplit la donnée selon les données remplies dans le formulaire*/
    var postData = {
      name : hd.name,
      rating : hd.rating,
      review : hd.review
    };
    console.log(postData);
    /*Si le remplissage du formulaire est valide*/
    if (hd.hotelForm.$valid) {
      /*On ajoute la donnée en back*/
      hotelFactory.reviewAddOne(hotelId, postData).then(function(response) {
        console.log(response.data);
        /*Si le réponse est bien envoyé on va à la création détaillée de la formation*/
        if (response.status === 201) {
          $route.reload();
        }
      }).catch(function(error) {
        console.log(error);
      });
    } else {
      /*On passe la variable isSubmitted à true = le formulaire est remplie*/
      hd.isSubmitted = true;
    }
  }

  hd.tabRating= function(rating){
    var tabRat = []
    for(let i=1; i<=rating; i++){
      tabRat.push(i);
      console.log(tabRat);
    }
    return tabRat;
  }
}
