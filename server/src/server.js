const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const port = process.env.PORT || 8081;

let router = require('./router');

app
    .use(fileUpload({
        useTempFiles: true,
        tempFileDir: '/tmp/'
    }))
    .use('/static',express.static('resources'))
    .use(bodyParser.json())
    .use(cors())
    .use(bodyParser.urlencoded({extended: true}))
    .use(router)
    .listen(port, () => {
        console.log('Example app listening on port ' + port);
    });

module.exports = app;
