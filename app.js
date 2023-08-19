const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use('/add-product', (req, res, next) => {
    res.send('<body><form action="/product" method="POST"><input type="text" name="name"><input type="text" name="size"><button type="submit">Add Product</button></form></body>');
})

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.send(req.body);
})

app.use('/', (req, res, next) => {
    res.send('<h1> Welcome to the express app</h1>');
})

app.listen(3000);