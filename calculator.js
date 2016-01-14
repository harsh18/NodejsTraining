var calculator = new calCulatorApp();

//Calculator Class
function calCulatorApp(a, b){}	

calCulatorApp.prototype.addition = function(a, b) {
	console.log("Addition task", a + b);
};
calCulatorApp.prototype.subtract = function(a, b) {
	console.log("Subtraction task", a - b);
};
calCulatorApp.prototype.multiply = function(a, b) {
	console.log("Multiply task", a * b);
};
calCulatorApp.prototype.divide = function(a, b) {
	console.log("Division task", a / b);
};

//making things public and shareable
module.exports = calculator;