'use strict';
function map_to_even(collection){
  var result = [];
  for(let i in collection){
    result.push(collection[i]*2);
  }
  console.log(result);
  return result;
}
module.exports = map_to_even;
