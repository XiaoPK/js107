'use strict';

function get_integer_interval(number_a, number_b) {
  var result = [];
  if(number_a > number_b){//this is --
    var key = number_a;
    for(var i = 0; i < (number_a - number_b + 1);i++){
      result.push(key--);
      //number_a--;
    }
    //console.log(result);
    return result;
  }else if(number_a < number_b){
    var key = number_a;
    for(var j = 0; j < (number_b-number_a + 1); j++){
      result.push(key++);
    }
    //console.log(result);
    return result;
  }else{
    result = [number_a];
    //console.log(result);
    return result;
  }
}

module.exports = get_integer_interval;

