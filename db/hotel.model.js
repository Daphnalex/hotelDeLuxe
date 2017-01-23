var mongoose = require('mongoose');

var Room = new mongoose.Schema({
  type : String,
  number : Number,
  description : String,
  photos : [String],
  price : Number
});

var Review = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  review : {
    type : String,
    required : true
  },
  rating : {
    type : Number,
    required : true
  }
});

var Hotel = new mongoose.Schema({
  name : {
    type : String,
    required: true
  },
  stars : Number,
  description : String,
  photos : [String],
  currency : String,
  rooms : [Room],
  reviews : [Review]
});

mongoose.model('Hotel', Hotel);
