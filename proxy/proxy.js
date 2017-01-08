const express = require('express');
const app = express();
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({ws: true});

require('dotenv').config();

const config = require('./config.json');

var server = app.listen(process.env.PORT, '0.0.0.0', function () { //start web server
    console.log('listening on port ' + process.env.PORT);
}).on('error', function (err) {
    console.log(err);
});

app.use(function (req, res, next) {

    for (var domain in config) {
        if (req.headers.host == domain) {
            var target = 'http://127.0.0.1:' + config[domain].port;
            req._target = target;
            proxy.web(req, res, {target: target, xfwd: true}, function (err) {
                console.log(err);
            });

            return;
        }
    }
});

server.on('upgrade', function (req, socket, head) {

    for (var domain in config) {
        if (req.headers.host == domain) {
            var target = 'ws://127.0.0.1:' + config[domain].port;
            req._target = target;
            proxy.ws(req, socket, head, {target: target, xfwd: true}, function (err) {
                console.log(err);
            });

            return;
        }
    }
});
