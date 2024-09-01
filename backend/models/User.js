const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Създаваме схема за потребител
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

// Създаваме модел от схемата
const User = mongoose.model('User', userSchema);

module.exports = User;
