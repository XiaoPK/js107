'use strict';

function get_union(collection_a, collection_b) {
  var result = collection_a;
  for(var i = 0; i<collection_b.length; i++){
    if(result.indexOf(collection_b[i])===-1){
      result.push(collection_b[i]);
    }
    }
    return result;
  }
  //在这里写入代码

module.exports = get_union;

