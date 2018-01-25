const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CharacterSchema = new Schema({
  name: String,
  weapon: String,
  occupation: String,
  debt: Boolean,
});

const Character = mongoose.model('Character', CharacterSchema);

module.exports = Character;