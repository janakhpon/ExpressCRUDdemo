var mongoose = require('mongoose');

var MemberSchema = new mongoose.Schema({
  name: String,
  email: String,
  bdate: String,
  experience: String,
  language: String,
  rank: String,
  sdate:String,
  code: Number,
  phone:Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Member', MemberSchema);
