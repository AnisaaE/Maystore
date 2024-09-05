const router = require('express').Router();
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const orderController = require('./controllers/orderController');
const upload = require('./config/multerConfig');

router.post('/upload', upload.single('product'), productController.uploadImage);

router.post('/add', upload.array('images'), productController.addProduct);
router.post('/removeProduct', productController.removeProduct);
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getOneProduct);

router.post('/register', userController.register);

router.post('/econt/validate', orderController.validateOrder);
router.post('/econt/create', orderController.createOrder);
router.post('/econt/getCities', orderController.getCitiesController);
router.post('/econt/getOffices/:id', orderController.getOfficesController);
router.post('/econt/sendOrder', orderController.sendOrder);

router.get('/orders', orderController.getAllOrders);
router.get('/orders/:id', orderController.getOrderById);
router.post('/orders/:id/createLabel', orderController.createLabel);
router.delete('/orders/:id/deleteLabel', orderController.deleteLabel);
router.delete('/orders/:id', orderController.deleteOrder);

module.exports = router