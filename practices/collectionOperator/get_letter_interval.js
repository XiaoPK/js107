'use strict';

function get_letter_interval(number_a, number_b) {
  var result = [];
  if(number_a > number_b){//this is --
    var key = number_a + 96;
    for(var i = 0;  i < (number_a - number_b + 1);i++){
      result.push(String.fromCharCode(key));
      key--;
    }
    //console.log(result);
    return result;
  }else if(number_a < number_b){
    var key2 = number_a+96;
    for(var j = 0; j<(number_b - number_a+1); j++){
      result.push(String.fromCharCode(key2));//把ascall码转成字符
      key2++;
    }
    //console.log(result);
    return result;
  }else{
    result.push(String.fromCharCode(96+number_a));
    //console.log(result);
    return result;
  }
}

module.exports = get_letter_interval;
