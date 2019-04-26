let express = require("express");
let bodyParser = require("body-parser");
// let persons = require('./persons');
let router = express.Router();

let counter = persons.length + 1;

router.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
    .use((req, res) => {
        res.status(400);
        res.json({error: "Bad request"});
    })
;


module.exports = router;