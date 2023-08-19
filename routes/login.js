const express = require('express');

const loginRouter = express.Router();


loginRouter.get('/login', (treq, res, next) => {
    res.send('<body><form action="/login" method="POST"><input type="text" name="username"><button type="submit">login</button></form></body>');
})

loginRouter.post('/login', (req, res, next) => {
    const data = req.body;
    req.session.username = data.username;
    console.log(req.session.username);
    res.redirect('/');
})

module.exports = loginRouter;