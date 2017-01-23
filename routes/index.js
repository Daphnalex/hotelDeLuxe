var express = require('express');
var router = express.Router();

var ctrlHotels   = require('../controllers/hotel.controller.js');
var ctrlReview = require('../controllers/review.controller.js');
router
  .route('/hotels')
  .get(ctrlHotels.hotelGetAll);

router
  .route('/hotels/:hotelId')
  .get(ctrlHotels.hotelGetOne)
  .put(ctrlHotels.updateHotel);

router
  .route('/hotels/:hotelId/reviews')
  .post(ctrlReview.reviewAddOne);

module.exports = router;
