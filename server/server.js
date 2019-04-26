const express = require("express");
const app = express();

const port = process.env.PORT || 8081;

let router = require('./router');

app.use(router)
    .listen(port);