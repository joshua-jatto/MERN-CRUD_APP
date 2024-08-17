

const express = require('express')
// const product = require('../modules/products.module')
const router = express.Router();
const Product = require('../modules/products.module')
const {getProducts,getProduct,postProduct,putProduct,deleteProduct} = require('./products.controller')


router.post('/', postProduct);
router.get('/', getProducts);
router.get('/:id', getProduct)
router.put('/:id', putProduct)
router.delete('/:id', deleteProduct)

module.exports = router