const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

const {getAllProducts, getProductById} = require('../controller/productControllers');

//Get all products from DB
//route GET /api/products
router.get('/', getAllProducts);

//Get a product by id from DB
//route GET /api/products/:id
router.get('/:id', getProductById);


module.exports = router;