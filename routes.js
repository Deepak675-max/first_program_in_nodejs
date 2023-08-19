const fs = require('fs');

const requesthandler = (req, res) => {
    if (req.url === '/') {
        if (fs.existsSync('message.txt')) {
            const fileData = fs.readFileSync('message.txt', 'utf8');
            res.write(`<h4>${fileData}</h4>`);
        }
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (req.url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[0];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })

    }
}

module.exports = requesthandler;