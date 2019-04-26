const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/exemple01', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("connected to", db.client.s.url);
});

const personsSchema = Schema({
    name: String
},{versionKey:false});

const Persons = mongoose.model('Persons', personsSchema);

module.exports = {};
module.exports.persons = Persons;