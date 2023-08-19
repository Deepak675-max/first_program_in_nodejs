const express = require('express');

const chatRouter = express.Router();

const fs = require('fs');

chatRouter.get('/', (req, res, next) => {
    let msg = '<h3>No message exist</h3><br>';
    if (fs.existsSync('message.txt')) {
        const fileData = fs.readFileSync('message.txt', 'utf-8');
        msg = `<h3>${fileData}</h3><br>`;
    }
    res.send(`<body>${msg}<form action="/message" method="POST"><input type="text" name="message"><button type="submit">submit</button></form></body>`);
})

chatRouter.post('/message', (req, res, next) => {
    const username = req.session.username
    const message = `${username}: ${req.body.message} \n`;
    fs.writeFile("message.txt", message, { flag: 'a' }, err => {
        if (err) {
            console.log(err);
        }
    })
    res.redirect('/');
});

module.exports = chatRouter;