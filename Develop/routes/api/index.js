// Create a router with Express
const router = require('express').Router();

// Creating routes for Categories, Products, and Tags
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

// Exporting the router
module.exports = router;
