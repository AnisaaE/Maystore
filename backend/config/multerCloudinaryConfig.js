const cloudinary = require('./cloudinaryConfig');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads/images',  // Cloudinary folder where images will be stored
    allowed_formats: ['jpg', 'jpeg', 'png'],  // Allowed file formats
  },
});

const upload = multer({ storage: storage });

module.exports = upload;


// const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "./upload/images");
//     },
//     filename: (req, file, cb) => {
//        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}` );
//     },
// });

// const upload = multer({storage: storage});

// module.exports = upload;