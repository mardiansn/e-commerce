const route = require('express').Router()
const TransactionController = require('../controllers/transactionController');
const UserController = require('../controllers/userController');
const {authenticate, authorize} = require('../middlewares/auth');

route.use(authenticate)
route.get('/', TransactionController.find)
route.get('/:id', authorize ,TransactionController.findById)
route.patch('/:id', authorize ,TransactionController.update)
route.post('/', TransactionController.create, UserController.checkout)

module.exports = route
