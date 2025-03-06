const express = require('express');
const cookieParser = require('cookie-parser');
const products = require('./products');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/products', (req, res) => {
    console.log(req);
    res.json(products);
});

app.post('/cart', (req, res) => {
    console.log(req);
    const productId = req.body.productId;
    let cart = req.cookies.cart ? JSON.parse(req.cookies.cart) : [];

    cart.push(productId);
    res.cookie('cart', JSON.stringify(cart), { httpOnly: true });

    res.status(200).json({ message: 'Product added to cart' });

    console.log('Cart:', cart);
});

app.get('/cart', (req, res) => {
    const cart = req.cookies.cart ? JSON.parse(req.cookies.cart) : [];
    res.json(cart);
});