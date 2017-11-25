'use strict';

function get_integer_interval_2(number_a, number_b) {
  var result = [];
  if(number_a > number_b){//this is --
    var key = number_a;
    for(var i = 0; key >= number_b;i++){
      if(key%2===0){
        result.push(key);
        key-=2;
      }else{
        key--;
      }
    }
    console.log(result);
    return result;
  }else if(number_a < number_b){
    var key2 = number_a;
    for(var j = 0; key2 <= number_b; j++){
      if(key2%2===0){
        result.push(key2);
        key2+=2;
      }else {
        key2++;
      }
    }
    console.log(result);
    return result;
  }else{
    if(number_b%2===0){
      result = [number_b];
    }else {
      result = [];
    }
    //result = [number_a];
    console.log(result);
    return result;
  }
}

module.exports = get_integer_interval_2;
