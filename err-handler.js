'use strict';

module.exports = errHandler;

function errHandler(handler, cb){
  return function(){
    var args = [].slice.call(arguments);
    var err = args[0];

    if (err && !handler(err)) {
      return;
    }

    cb.apply(null, args);
  };
}
