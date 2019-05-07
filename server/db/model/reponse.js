var dbReponse = require('../mongoose').dbReponse;

module.exports = class Reponse{

    createReponse(reponses) {
        dbReponse.push(reponses);
        dbReponse.save();
    }

    getReponseByFields(fields){

    }
};