'use strict';

function get_intersection(collection_a, collection_b) {
  var result = [];
  for(var i = 0; i < collection_b.length; i++){
    if(collection_a.indexOf(collection_b[i])>=0){
      result.push(collection_b[i]);
      //console.log(result);
    }
  }
  //console.log(result);
  return result;
}

module.exports = get_intersection;
