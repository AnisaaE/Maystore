const port = 4000;
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwb = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://anisa:kWaftKWtcAhB567M@cluster0.srvzl.mongodb.net/maystore");

app.listen(port, (err) => {
    if(!err){
    console.log(`Server is running on port ${port}`);
}
else {
    console.log("Error:"+ err);
}
})

//image storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./upload/images");
    },
    filename: (req, file, cb) => {
       return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}` );
    },
});

const upload = multer({storage: storage});

app.use ("/images", express.static('upload/images'));

app.post("/upload", upload.single("product"), (req, res) => {
    res.json({
        success: 1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`

    });
})