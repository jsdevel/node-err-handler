'use strict';

describe('err-handler', function(){
  var errHandler = require('./');
  var sinon = require('sinon');
  
  it('passes errors to handler', function(){
    var handler = sinon.stub();
    errHandler(handler, function(){})(5);
    sinon.assert.calledWith(handler, 5);
  });

  it('calls cb when no error', function(done){
    var handler = sinon.stub();
    errHandler(handler, done)(null);
  });
});
