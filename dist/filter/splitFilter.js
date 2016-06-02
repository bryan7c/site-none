app.filter("split", function(){
	return function(input, separator){
		if(Object.prototype.toString.call( input ) === '[object Array]'){
			var input = input.join(separator);
		}
		return input;
	}
})