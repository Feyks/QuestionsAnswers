const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 8081;

let router = require('./router');

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use(router)
    .listen(port, () => {
        console.log('Example app listening on port ' + port);
    });

module.exports = app;