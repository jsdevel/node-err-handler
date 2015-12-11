'use strict';

module.exports = errHandler;

function errHandler(handler, cb){
  return function(err){
    if (err && !handler(err)) {
      return;
    }

    cb.apply(null, [].slice.call(arguments));
  };
}
