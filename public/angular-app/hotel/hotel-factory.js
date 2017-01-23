angular.module("hoBook").factory("hotelFactory", hotelFactory);

function hotelFactory($http) {
  return {
    hotelGetAll : hotelGetAll,
    hotelGetOne : hotelGetOne,
    reviewAddOne : reviewAddOne
  }

  function hotelGetAll() {
  	return $http.get("/api/hotels").then(complete).catch(error);
  }

  function hotelGetOne(hotelId){
    return $http.get("/api/hotels/"+hotelId).then(complete).catch(error);
  }

  function reviewAddOne(hotelId, postData){
    return $http.post("/api/hotels/"+hotelId+"/reviews", postData).then(complete).catch(error);
  }

  function complete(response) {
  	return response;
  }

  function error(err) {
  	return err;
  }
}
