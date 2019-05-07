const Schema = require('mongoose').Schema;
const schemaQuestion = require('./schemaQuestion').schemaQuestion;


const schemaQuizz = Schema({
    name: String,
    icone: String,
    tags: [Object],
    description: String,
    questions: [schemaQuestion]
}, {versionKey: false});

module.exports.schemaQuizz = schemaQuizz;