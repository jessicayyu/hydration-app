var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hydration', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to HydrationDB');
});

const petSchema = new mongoose.Schema({
  owner: String,
  name: String,
  age: Number,
  type: String,
  stage: Number,
});

const userSchema = new mongoose.Schema({
  id: Number,
  history: [Number],
});

const PetInventory = mongoose.model('Pets', petSchema);
const User = mongoose.model('User', userSchema)

module.exports = {
  db,
  PetInventory,
  User
};