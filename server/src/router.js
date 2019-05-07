let express = require("express");
let bodyParser = require("body-parser");
const db = require('./../db/mongoose');
let router = express.Router();


const Quizz = require('../db/model/quizz');
quizz = new Quizz();

router.post("/tag",quizz.getQuizzByTags);
router.get("/quizz",quizz.getAllQuizz);
router.get("/quizz/:id",quizz.getQuizzById);
router.post("/quizz",quizz.createQuizz);
router.delete("/quizz/:id",quizz.deleteQuizz);
router.patch("/quizz",quizz.updateQuizz);
router.post("/quizz/:id/score",quizz.getScore);

router.use((req, res) => {
        res.status(400);
        res.json({error: "Bad request"});
    })
;


module.exports = router;