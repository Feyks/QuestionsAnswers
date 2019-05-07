var chaiHttp = require('chai-http');
var chai = require('chai');
var dbQuizz = require('../../db/mongoose').dbQuizz;
var server = require('../../src/server');
var should = chai.should();

chai.use(chaiHttp);

quizzTest = [{
    name: "Quizz de Test 1",
    icone: "/icone/test1",
    tags: [{txt: "test"}, {txt: "prout"}],
    description: "Ceci est un quizz de test",
    questions: []
}];

describe('Quizz', function () {
    beforeEach(function (done) {
        dbQuizz.deleteMany().exec();
        done();
    });
    afterEach(function (done) {
        dbQuizz.deleteMany().exec();
        done();
    });

    it('should have stored quizz on POST /quizz', function (done) {
        chai.request(server).post('/quizz').send(quizzTest).then(function (res) {
            res.should.have.status(200);
            done();
        })
    });

    it('should list ALL quizz on /quizz GET', function (done) {
        chai.request(server).post('/quizz').send(quizzTest).then(function () {
            chai.request(server).get('/quizz').end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].name.should.equal('Quizz de Test');
                done();
            });
        });

    });

    it('should return proper score')
});