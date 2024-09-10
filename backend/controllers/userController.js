require('dotenv').config();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Транспортерът не е конфигуриран правилно:', error);
  } else {
    console.log('Транспортерът е готов да изпраща съобщения:', success);
  }
});
const register = async (req, res) => {
  const { username, email, password } = req.body;
  const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
  
  try {
    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });
    if (existingUser) {
      const errorMessage = existingUser.email === email
        ? 'Имейлът вече е използван.'
        : 'Потребителското име е заето.';
      return res.status(400).json({ message: errorMessage });
    }

    const user = new User({
      username,
      email,
      password,
      verificationCode,
    });

    await user.save();
    const mailOptions = {
      from: process.env.EMAIL_USER, 
      to: email, 
      subject: 'Потвърдете вашата регистрация',
      text: `Здравейте ${username},\n\nВашият код за потвърждение е: ${verificationCode}.\n\nМоля, въведете този код, за да потвърдите регистрацията си.\n\nБлагодарим ви!`, // Съдържанието на съобщението
    };

    // Изпращане на имейла
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Грешка при изпращането на имейла:', error);
        return res.status(500).json({ message: 'Възникна грешка при изпращането на имейла за потвърждение. Моля, опитайте отново.' });
      } else {
        console.log('Имейлът е изпратен:', info.response);
        res.status(201).json({
          message: 'Регистрацията е успешна! Моля, проверете вашия имейл за код за потвърждение.',
        });
      }
    });
    res.status(201).json({
      message:
        'Регистрацията е успешна! Моля, проверете вашия имейл за код за потвърждение.',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Възникна грешка при регистрацията. Моля, опитайте отново.',
    });
  }
};


const verifyEmail = async (req, res) => {
  const { email, verificationCode } = req.body;
console.log(email, verificationCode)
  try {
    const user = await User.findOne({ email, verificationCode });

    if (!user) {
      return res.status(400).json({ message: 'Invalid verification code.' });
    }

    user.isVerified = true;
    user.verificationCode = ''; // Clear code after verification
    await user.save();

    res.json({ message: 'Email verified successfully.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });

    if (!user || !user.isVerified) {
      return res.status(400).json({ message: 'Invalid credentials or account not verified.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
console.log(isMatch)
    if (!isMatch) {
      console.log(password + " " + user.password)
      return res.status(400).json({ message: 'Invalid credentials.' });
    }
console.log("user",user)
    const accessToken = jwt.sign({ _id: user._id, username: user.username, role: user.role, favourites: user.favourites, cartList: user.cartList, email: user.email }, process.env.SECRET_KEY);

    res.json({ accessToken, cartList: user.cartList, fav: user.favourites, role:user.role });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
const promote = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.role = 'admin';
    await user.save();
    res.json({ message: 'User promoted to admin' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}
const updateCart = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.cartList = req.body;
   await User.findByIdAndUpdate(req.user._id, user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' }); 
  }
}
const updateFavourites = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.favourites = req.body;
   await User.findByIdAndUpdate(req.user._id, user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' }); 
  }
}
module.exports = {
  login,
  getCurrentUser,
  getUsers,
  promote,
  register,
  verifyEmail,
  updateCart,
  updateFavourites
};
