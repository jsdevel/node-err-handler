'use strict';

module.exports = errHandler;

function errHandler(handler, cb){
  return function(){
    var err = arguments[0];

    if (err && !handler(err)) {
      return;
    }

    cb.apply(null, [].slice.call(arguments));
  };
}
