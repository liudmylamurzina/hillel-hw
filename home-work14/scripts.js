'use strict';
const SIZE_SMALL={
	price:50,
	calories:20,
	type:'hamType',
};
const SIZE_MIDDLE={
	price:75,
	calories:30,
	type:'hamType',
};
const SIZE_BIG={
	price:100,
	calories:40,
	type:'hamType',
};
const TOPPING_CHEESE={
	price:10,	
	calories:20,
	type:'toppingType',
};
const TOPPING_SALAD={
	price:20,	
	calories:5,
	type:'toppingType',
};
const TOPPING_POTATO={
	price:15,	
	calories:10,
	type:'toppingType',
};
const TOPPING_SEASONING={
	price:15,	
	calories:0,
	type:'toppingType',
};
const TOPPING_MAYO={
	price:20,	
	calories:5,
	type:'toppingType',
};

class Hamburger {
	constructor(hamType) {	
			this.hamType = hamType;			
			this.topping = [];		
	}		 	
	get bigSize () { 	
    return SIZE_BIG;		
	}
	get middleSize () { 
    return SIZE_MIDDLE;		
	}
	get smallSize () { 
    return SIZE_SMALL;		
	}
	get toppingCheese () { 
    return TOPPING_CHEESE;		
	}
	get toppingSalad () { 
    return TOPPING_SALAD;		
	}
	get toppingPotato () { 
    return TOPPING_POTATO;		
	}
	get toppingSeasoning () { 
    return TOPPING_SEASONING;		
	}
	get toppingMayo () { 
    return TOPPING_MAYO;		
	}
	addTopping(topping) {
    this.topping.push(topping);
  }
  getPrice() { 
	 const reducer = (accumulator, item) => accumulator + item.price;
	 let result = this.hamType.price;
	 return result + this.topping.reduce(reducer, 0);
  }
  getCalories() {
	 const reducer = (accumulator, item) => accumulator + item.calories;
	 let result = this.hamType.calories;
	 return result + this.topping.reduce(reducer, 0);
  }
}

//const hamburger = new Hamburger(SIZE_BIG);
const hamburger = new Hamburger(SIZE_MIDDLE);
hamburger.addTopping(TOPPING_MAYO);
hamburger.addTopping(TOPPING_MAYO);
hamburger.addTopping(TOPPING_POTATO);
hamburger.addTopping(TOPPING_CHEESE);

console.log ('Price with sauce:' + hamburger.getPrice());
console.log ('Calories with sauce:' + hamburger.getCalories());
