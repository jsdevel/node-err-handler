'use strict';

var sinon = require('sinon');

describe('err-handler', function(){
  var errHandler = require('./');
  var sinon = require('sinon');

  describe('when an error occurs', function() {
    it('should pass errors to handler', function(){
      var err = new Error();
      var handler = sinon.stub();
      errHandler(handler, function(){})(err);
      sinon.assert.calledWith(handler, err);
    });

    describe('when the handler does not return undefined', function() {
      it('should pass the error back to the callback', function() {
        var err = new Error();
        var handler = sinon.stub().returns(err);
        var callback = sinon.stub();
        errHandler(handler, callback)(err);
        sinon.assert.calledWith(callback, err);
      });
    });
  });

  describe('when no error occurs', function() {
    it('calls cb with arguments', function(){
      var handler = sinon.stub();
      var callback = sinon.stub();
      errHandler(handler, callback)(null, 5);
      sinon.assert.calledWith(callback, null, 5);
    });
  });

  describe('when the callback throws an error', function() {
    it('should pass the thrown error to the handler', function() {
      var handler = sinon.stub();
      var callback = sinon.stub().throws(6);
      errHandler(handler, callback)(null, 5);
      sinon.assert.calledWith(handler, 6);
    });
  });
});
