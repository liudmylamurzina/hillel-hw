const set=require('./set');
const add=require('./add');
const sub=require('./sub');
const mult=require('./mult');
const div=require('./div');
function calculator(base) {
	set(b);
	add(b);
	sub(b);
	mult(b);
  div(b);
};
module.exports={
	calculator:calculator,
	set:set,
	add:add,
	sub:sub,
	mult:mult,
	div:div,
};
