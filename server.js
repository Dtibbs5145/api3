const express = require('express');

const productsRouter = require('./products/products-router');
const suppliersRouter = require('./suppliers/suppliers-router');
const server = express();


//global middleware goes here
server.use(express.json());
//server.use(uppercase); // using custom middleware globally


//we can use middleware locally
server.use('/products', productsRouter);
server.use('/suppliers', suppliersRouter);

//route handlers
server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
});

module.exports = server;