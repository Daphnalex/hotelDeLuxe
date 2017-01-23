var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');

module.exports.hotelGetAll = function(req, res) {
  Hotel
    .find() // prend tout
    .exec(function(err, hotel) {
      if(err) {
        console.log("Impossible de récupérer les hotels");
        res
          .status(500)
          .json(err);
      } else {
        res
          .json(hotel);
      }
  });
}

module.exports.hotelGetOne = function(req, res){
  var hotelId = req.params.hotelId;
  console.log(hotelId);
  Hotel
    .findById(hotelId)
    .exec(function(err, hotel) {
      var response = {
        status : 200,
        message : hotel
      };
      if (err) {
        response.status = 500;
        response.message = err;
      } else if(!hotel) {
        response.status = 404;
        response.message = {
          "message" : "Hotel ID not found " + hotelId
        };
      }
      res
        .status(response.status)
        .json(response.message);
    });
};

module.exports.updateHotel= function(req, res){
  var hotelId = req.params.hotelId;
  Formation
    .findById(hotelId)
    .select('-reviews')
    .exec(function(err, hotel){
      if (err){
        res
          .status(500)
          .json(err);
      } else if (!hotel){
        res
          .status(404)
          .json({
            "message" : "Hotel ID not found " +hotelId
          });
      }
      hotel.name = req.body.name;
      hotel.description = req.body.description;
      hotel.stars = req.body.stars;
      hotel.reviews = req.body.reviews;

      hotel
        .save(function(err, hotelUpdateOne){
          if (err){
            res
              .status(500)
              .json(err);
          } else {
            res
              .status(204)
              .json();
          }
        });
    });
}
