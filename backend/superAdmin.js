const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User'); 

require('dotenv').config(); 

const createSuperuser = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.srvzl.mongodb.net/maystore`);

    const existingUser = await User.findOne({ username: 'superuser' });
    if (existingUser) {
      console.log('Superuser already exists.');
      return;
    }

console.log(process.env.ADMIN_PASSWORD)
    const superuser = new User({
      username: process.env.ADMIN_USERNAME,
      email: 'superuser@example.com',
      password: process.env.ADMIN_PASSWORD,
      role: 'superuser',
      isVerified: true,
    });

    await superuser.save();
    console.log('Superuser created.');
  } catch (error) {
    console.error('Error creating superuser:', error);
  } finally {
    mongoose.connection.close();
  }
};

createSuperuser();
