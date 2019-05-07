const mongoose = require('mongoose');
const schemaQuizz = require('./schema/schemaQuizz.js').schemaQuizz;
const schemaQuestion = require('./schema/schemaQuestion').schemaQuestion;
const schemaReponse = require('./schema/schemaReponse').schemaReponse;

mongoose.connect('mongodb://localhost/projetReact', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("connected to", db.client.s.url);
});

const dbQuizz = mongoose.model('Quizz', schemaQuizz, 'Quizz');

/*dbQuizz.deleteMany().exec();

quizz = new dbQuizz;
quizz.name = "Test";
quizz.tags = [];
quizz.tags.push({txt:"test"});
quizz.save();*/


module.exports = {};
module.exports.dbQuizz = dbQuizz;