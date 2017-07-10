var mongoose = require('mongoose');

// Create the Schema
var CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  earning: {
    type: Number,
    required: true
  }
});


module.exports = mongoose.model('company', CompanySchema);