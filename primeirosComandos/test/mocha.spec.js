import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

const app = require('../app');
const expect = chai.expect

const request = chai.request(app);

describe("Suite", () => {
    it('Deve retornar mensagem olá', (done) => {
        request
            .get('/hello')
            .end((err, res) => {
                expect(res).to.have.status(200)
                expect(res.body.message).to.equals('Olá, Nodejs com express na nova pasta')
                done()
            })
    })
})

