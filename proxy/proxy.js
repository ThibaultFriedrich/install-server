const express = require('express');
const app = express();
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({ws: true});
const bodyParser = require('body-parser');


require('dotenv').config();

const config = require('./config.json');

var server = app.listen(process.env.PORT, '0.0.0.0', function () { //start web server
    console.log('listening on port ' + process.env.PORT);
}).on('error', function (err) {
    console.log(err);
});


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
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
    next();
});

app.post('/webhook/:repository', function (req, res, next) {
    if (req.headers.host == process.env.WEBHOOK_DOMAIN) {
        console.log('repository: ', req.params.repository);
        console.log('event', req.headers['X-GitHub-Event']);
        console.log('event', req.headers['X-Hub-Signature']);
        console.log('branch', req.body.ref.split(2));

        // console.log(req.body);
        res.sendStatus(200);

    } else {
        next();
    }
});

app.get('/', function (req, res, next) {
    res.send('Hello World');
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
//
// handler.on('push', function (event) {
//         var comps = event.payload.ref.split('/');
//         if(comps[2] != 'production') {
//               console.log('Received a push on %s and no build has is triggered', comps[2]);
//               return;
//         }
//         console.log('Received a push on production, build started...');
//         exec('./scripts/deploy', function(error, stdout, stderr) {
//                 console.log(stdout);
//                 if(error != null) {
//                         console.log('Error during the execution of redeploy: ' + stderr);
//                 }
//         });
// });
