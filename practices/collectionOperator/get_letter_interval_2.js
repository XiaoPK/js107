'use strict';

function get_letter_interval_2(number_a, number_b) {
  var result = [];
  if(number_a > number_b){//this is --
    var key = number_a + 96;
    for(var i = 0;  i < (number_a - number_b + 1);i++){
      if(key <= 122){
        result.push(String.fromCharCode(key));
      }else if(key > 122){
        if((key-96)%26===0){
          result.push(String.fromCharCode((key-96)/26+95) + String.fromCharCode(122))
        }else {
          result.push(String.fromCharCode((key-96)/26+96) + String.fromCharCode((key-96)%26+96));
        }
      }
      key --;
    }
    console.log(result);
    return result;
  }else if(number_a < number_b){
    var key2 = number_a+96;
    for(var j = 0; j <number_b-number_a+1; j++){
      if(key2 <= 122){
        result.push(String.fromCharCode(key2));
      }else if(key2 > 122){
        if((key2-96)%26===0){
          result.push(String.fromCharCode((key2-96)/26+95) + String.fromCharCode(122))
        }else {
          result.push(String.fromCharCode((key2-96)/26+96) + String.fromCharCode((key2-96)%26+96));
        }
      }
    key2 ++ ;
    }
    console.log(result);
    return result;
  }else{
    number_a = number_a+96;
    if(number_a <= 122){
      result.push(String.fromCharCode(number_a));
    }else if(number_a > 122){
      if((number_a-96)%26===0){
        result.push(String.fromCharCode((number_a-96)/26+95) + String.fromCharCode(122));
      }else {
        result.push(String.fromCharCode((number_a-96)/26+96) + String.fromCharCode((number_a-96)%26+96));
      }
    }
    console.log(result);
    return result;
  }
}

module.exports = get_letter_interval_2;

