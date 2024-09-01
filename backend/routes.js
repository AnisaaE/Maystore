const router = require('express').Router();
const productController = require('./controllers/productController');

const upload = require('./config/multerConfig');

router.post('/upload', upload.single('product'), productController.uploadImage);

//router.post('/addProduct', productController.addProduct);

router.post('/add', upload.array('images'), productController.addProduct);
  
router.post('/removeProduct', productController.removeProduct);

router.get('/getAllProducts', productController.getAllProducts);

module.exports = router