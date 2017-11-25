'use strict';

function grouping_count(collection) {
  /*var result = [];
  result[0] = collection[0];
  result[0].count = 0;
  for(var i = 0; i < collection.length; i++){
    if(result.indexOf(collection[i]) === -1){
      result[collection[i]].count++;
    }else{
      result[collection[i]].count++;
    }
    console.log(result[collection[i]] + "\t" + result[collection[i]].count);
  }
  console.log(result);*/
  return collection.reduce((p,k) => (p[k]++ || (p[k] = 1),p),{});//well,i don't understand now!!!
  //在这里写入代码
}

module.exports = grouping_count;
