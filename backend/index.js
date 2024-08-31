const port = 4000;
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwb = require("jsonwebtoken");
const path = require("path");
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.use ("/images", express.static('upload/images'));

mongoose.connect("mongodb+srv://anisa:kWaftKWtcAhB567M@cluster0.srvzl.mongodb.net/maystore", {
    useNewUrlParser: true,
    useUnifiedTopology: true
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


