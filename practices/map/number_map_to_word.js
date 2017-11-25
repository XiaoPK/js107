'use strict';
var number_map_to_word = function(collection){
  var result = [];
  for(var i in collection){
    result.push(String.fromCharCode(collection[i]+96));
  }
  console.log(result);
  return result;
};

module.exports = number_map_to_word;
