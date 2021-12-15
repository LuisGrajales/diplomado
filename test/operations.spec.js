const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);
const server = require('../app');

describe('operations tests', () =>{
    it('operation = sum', function (done) {
        chai.request(server)
        .get('/operation/sum')
        .end(function(err, res) {
            expect(res).to.have.status(201)
            done()
        })
    })
    it('operation = substract', function (done) {
        chai.request(server)
        .get('/operation/substract')
        .end(function(err, res) {
            expect(res).to.have.status(201)
            done()
        })
    })
    it('operation = multiply', function (done) {
        chai.request(server)
        .get('/operation/multiply')
        .end(function(err, res) {
            expect(res).to.have.status(201)
            done()
        })
    })
    it('operation = divide', function (done) {
        chai.request(server)
        .get('/operation/divide')
        .end(function(err, res) {
            expect(res).to.have.status(201)
            done()
        })
    })
    
})