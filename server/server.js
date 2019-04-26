const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

let router = require('./router');

app.use(router)
    .listen(port);