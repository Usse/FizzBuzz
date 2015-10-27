var fizzBuzz = (function() {
	'use strict';

	var fizzBuzz = {
		doFB : function(num) {
			var s = '';
		  if(num % 3 == 0) { s+= 'Fizz' }
		  if(num % 5 == 0) { s+= 'Buzz' }
		  if(s === '') { s+= num; }
		  return s;
		},
		getNumber : function(input) {
			var nums = (input.toString()).split(',');
			if(nums.length > 1) {
				var r = ''
				for (var i = 0; i < nums.length; i++) {
					r+= this.doFB(nums[i]);
				}
				return r;
			} else {
				return this.doFB(input);
			}
		}
	};

	return fizzBuzz;
}());
