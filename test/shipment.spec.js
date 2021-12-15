const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);
const {Request, Response} = require('./mock');
const shipment = require('../routes/shipment');
const server = require('../app');

describe('Shipment tests', () =>{
    it('Create shipment works', function (done) {
        chai.request(server)
        .get('/shipment/create')
        .end(function(err, res) {
            expect(res).to.have.status(201)
            done()
        })
    })
    it('Change shipment works', function (done) {
        chai.request(server)
        .get('/shipment/change')
        .end(function(err, res) {
            expect(res).to.have.status(201)
            done()
        })
    })
})