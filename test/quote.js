var should = require('should'); 
var assert = require('assert');
var request = require('supertest');

describe('Routing', function() {
  var url = 'http://localhost:3000/';

  before(function(done) {						
    done();
  });

  describe('Quote API', function() {
    it('should return error trying to request without quote name', function(done) {
      request(url)
    	.get('api/quote')
    	.end(function(err, res) {
          if (err) {
            throw err;
          }
          assert.equal(res.status, 404);
          done();
      });
    });
    it('should return data trying to request with quote name', function(done) {
      request(url)
      .get('api/quote/NASDAQ')
      .end(function(err, res) {
          if (err) {
            throw err;
          }
          assert.equal(res.status, 200);
          var data = eval(res.body);
          assert.notEqual(data.length, 0);
          for (var i=0; i<data.length; i++) {
            should(data[i]).have.property('Date');
            should(data[i]).have.property('Close');
          }
          done();
      });
    });
  });
});