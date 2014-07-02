var $ = require('jquery');
var _ = require('underscore');

var arr = [1,2,3,4,5,6,7,8,9,0];

var evens = _.filter(arr, function(num){
  return num % 2 === 0;
});

console.log(evens);
