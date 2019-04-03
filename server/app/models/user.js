const mongoose = require('mongoose');
const schema = mongoose.Schema;

let User = new mongoose.Schema({

  name: { type: String, required: true },
  email: { type: String, required: true },
  id: { type: String, required: true },
  idToken: { type: String, required: true },
  image: { type: String, required: true },
  provider: { type: String, required: true },
  token: { type: String, required: true }


});

module.exports = mongoose.model('User', User);
