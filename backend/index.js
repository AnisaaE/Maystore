const port = 4000;
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwb = require("jsonwebtoken");
const path = require("path");
const routes = require("./routes");
const authenticateToken = require('./middlewares/authMiddleware');
const app = express();
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  allowedHeaders: ['Content-Type', 'X-Authorization'],
  exposedHeaders: ['X-Authorization'],
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(authenticateToken)
app.use(routes);

app.use ("/upload", express.static('upload'));

mongoose.connect(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.srvzl.mongodb.net/maystore`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Failed to connect to MongoDB:', err);
  });

app.listen(port, (err) => {
    if(!err){
    console.log(`Server is running on port ${port}`);
}
else {
    console.log("Error:"+ err);
}
})


