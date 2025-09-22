process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, connectDB } = require('../server');
const should = chai.should();

chai.use(chaiHttp);

describe('Photos', function() {

    // Connect to DB before running tests
    before(async function() {
        this.timeout(10000);
        await connectDB();
    });

    it('should list ALL photos on / GET', function(done) {
        this.timeout(10000);
        chai.request(app)
            .get('/')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.html;
                done();
            });
    });
});
