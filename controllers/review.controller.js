var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');


  var _addReview = function(req, res, hotel){
    console.log("j'entre");
    hotel.reviews.push({
      name : req.body.name,
      review : req.body.review,
      rating : req.body.rating
    });


    hotel.save(function(err, updateHotel){
      if (err){
        res
          .status(500)
          .json(err);
      } else {
        res
          .status(200)
          .json(updateHotel.reviews[updateHotel.reviews.length - 1]);
      }
    });
  };

  module.exports.reviewAddOne = function(req, res){
    console.log('par ici');
    var hotelId = req.params.hotelId;
    Hotel
      .findById(hotelId)
      .select('reviews')
      .exec(function(err, review){
        var response = {
          status : 200,
          message : review
        };
        if (err) {
          console.log("Error finding hotel");
          response.status = 500;
          response.message = {
            "message" : "Hotel ID not found" + hotelId
          };
        }
        if (review) {
          console.log('ici');
          _addReview(req, res, review);
        } else {
          res
            .status(response.status)
            .json(response.message);
        }
      });
  };
