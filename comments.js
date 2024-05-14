// create web server
const http = require('http');
const fs = require('fs');
const qs = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./comments.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        } } else if (req.method === 'POST') {
            let body = '';
            req.on('data', (data) => {
                body += data;
            });
            req.on('end', () => {
                let post = qs.parse(body);
                console.log(post);
                res.end('ok');
            });
        }
});
