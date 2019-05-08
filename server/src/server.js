const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const port = process.env.PORT || 8081;

let router = require('./router');

app
    .use(fileUpload({
        useTempFiles: true,
        tempFileDir: '/tmp/'
    }))
    .use('/static',express.static('resources'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use(router)
    .listen(port, () => {
        console.log('Example app listening on port ' + port);
    });

module.exports = app;
