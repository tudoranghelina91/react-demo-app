const express = require('express');
const cookieParser = require('cookie-parser');
const products = require('./products');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.use(cookieParser());

app.post('/cart', (req, res) => {
    const productId = req.body.productId;
    let cart = req.cookies.cart ? JSON.parse(req.cookies.cart) : [];

    cart.push(productId);
    res.cookie('cart', JSON.stringify(cart), { httpOnly: true });

    res.status(200).json({ message: 'Product added to cart' });
});

app.get('/cart', (req, res) => {
    const cart = req.cookies.cart ? JSON.parse(req.cookies.cart) : [];
    res.json(cart);
});