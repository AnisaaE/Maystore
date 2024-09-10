const router = require('express').Router();
const {authenticateToken} = require('./middlewares/authMiddleware');
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const orderController = require('./controllers/orderController');
const upload = require('./config/multerConfig');

const isSuperuser = (req, res, next) => {
  console.log('User:', req.user); // Проверка на съдържанието на req.user
  if (!req.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (req.user.role !== 'superuser') {
    return res.status(403).json({ message: 'Access denied' });
  }

  next();
};

router.post('/upload', upload.single('product'), productController.uploadImage);

router.post('/add', upload.array('images'), productController.addProduct);
router.post('/removeProduct', productController.removeProduct);
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getOneProduct);

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

router.post('/users/verify-email', userController.verifyEmail);
router.post('/users/register', userController.register);
router.post('/users/login', userController.login);
router.post("/users/updateCart", userController.updateCart);
router.post('/users/updateFavorites', userController.updateFavourites);

router.get('/me',  userController.getCurrentUser);
router.get('/users', isSuperuser, userController.getUsers);
router.post('/users/:userId/promote', isSuperuser, userController.promote);

module.exports = router