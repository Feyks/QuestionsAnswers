const Schema = require('mongoose').Schema;

const schemaReponse = Schema({
    reponse: String,
    image: Boolean,
    bonne: Boolean
}, {versionKey: false,_id:false});

module.exports.schemaReponse = schemaReponse;