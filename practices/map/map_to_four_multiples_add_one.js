'use strict';
var map_to_four_multiples_add_one = function(collection){
  var result = [];
  for(let i in collection){
    result.push(collection[i]*4+1);
  }
  console.log(result);
  return result;
};

module.exports = map_to_four_multiples_add_one;
