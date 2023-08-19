const express = require('express');

const session = require('express-session');

const app = express();

const loginRoutes = require('./routes/login');
const chatRoutes = require('./routes/chat');


app.use(express.urlencoded({ extended: true }));

// Configure the session middleware
app.use(session({
    secret: 'your-secret-key', // Replace with your secret key
    resave: false,
    saveUninitialized: true
}));

app.use(loginRoutes);

app.use(chatRoutes);


app.listen(3000);