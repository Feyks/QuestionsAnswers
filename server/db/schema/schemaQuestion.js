const Schema = require('mongoose').Schema;
const schemaReponse = require('./schemaReponse').schemaReponse;

const schemaQuestion = Schema({
    text: String,
    reponses: [schemaReponse]
}, {versionKey: false,_id:false});

module.exports.schemaQuestion = schemaQuestion;