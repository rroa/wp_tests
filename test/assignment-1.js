process.env.NODE_ENV = 'test';

// deps
let util = require('util');
let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

// fwd declarations
let should = chai.should();
let expect = chai.expect;

// locals
let host = process.env.HOST;
let user = process.env.PORT;
let url = util.format('http://%s/%s', host, user);

// Response
describe('Assignment 1', function () {
    describe('/GET /', function () {
        // Check status
        it('status code should be 200', function (done) {
            chai.request(url)
                .get('/')
                .set('Content-Type', 'application/json')
                .end(function (err, response) {
                    expect(response).to.have.status(200);
                    done();
                });
        });
    });
});
