var dbQuizz = require('../mongoose').dbQuizz;

module.exports = class Quizz {

    getAllQuizz(req, res) {
        dbQuizz.find().exec((error, data) => {
            if (error) {
                res.status(404).json({error: 'failed getting all Quizz'})
            } else {
                res.status(200).json(data)
            }
        })
    };

    getQuizzById(req, res) {
        const id = req.params.id;
        dbQuizz.findOne({_id: id}).exec((error, data) => {
            if (error) {
                res.status(404).json({error: 'The Quizz ' + id + ' doesn\'t exist'})
            } else {
                res.status(200).json(data)
            }
        })
    };

    getQuizzByTags(req, res, next) {
        dbQuizz.find({"tags.txt": new RegExp(req.body.tag, 'i')}).exec((error, data) => {
            if (error) {
                res.status(500).json({error: 'Failed during search by tags'})
            } else if (data.length !== 0) {
                res.status(200).json(data);
            } else {
                res.status(404).json({error: 'Tag Not Found'});
            }
        })
    };

    createQuizz(req, res) {
        const quizz = new dbQuizz(req.body);
        quizz.save()
            .then(res.redirect(303,'/quizz'))
            .catch(error => res.status(400).send("unable to save to database", error));

    };

    deleteQuizz(req, res) {
        dbQuizz.findByIdAndDelete(req.params.id)
            .then(res.redirect(303,'/quizz'))
            .catch(err => res.status(400).send("unable to delete from database", error));
    }

    updateQuizz(req, res) {
        dbQuizz.replaceOne({_id:req.body._id},req.body)
            .then(res.redirect(303,"/quizz"))
            .catch(error => res.status(400).send("unable to update from database", error))
    }

    getScore(req, res) {
        const reponses = req.body.reponses;
        dbQuizz.findOne({_id: req.params.id}).exec((error, quizz) => {
            if(error){
                res.status(500).json({error: 'Failed to get quizz'})
            }
            else{
                var score = 0;
                for(var i = 0; i < quizz.questions.length; i++ ){
                    //res.status(200).json(reponses[i].rep);
                    if(quizz.questions[i].reponses[req.body.reponses[i].rep].bonne === true){
                        score++
                    }
                }
                res.status(200).json({score:score,over:quizz.questions.length})
            }
        })
    }

};

