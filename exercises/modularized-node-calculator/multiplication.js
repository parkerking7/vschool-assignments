function multiply(one,two){
	this.multiplyFunc = function(one,two){
		console.log(one * two);
	}
}

module.exports = new multiply();