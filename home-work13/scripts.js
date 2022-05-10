'use strict'
function Calculator(base) {
	this.result = base;
}

Calculator.prototype.sum = function (b) {
	return (this.result += b);
};
Calculator.prototype.mult = function (b) {
	return (this.result *= b);
};
Calculator.prototype.sub = function (b) {
	return (this.result -= b);
};
Calculator.prototype.div = function (b) {
	return (this.result /= b);
};
Calculator.prototype.set = function (b) {
	return (this.result = b);
};
	
const calc = new Calculator(10);

/*calc.sum(5); /// 15
calc.mult(10); // 150
calc.sub(40); // 110
calc.div(10); // 11

calc.result // 11 */
