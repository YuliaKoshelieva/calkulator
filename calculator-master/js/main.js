/*-----------------------------------------------------------------------------------*/
//Initialization
/*-----------------------------------------------------------------------------------*/
var arg1, arg2, operator, displayResult, displayResult2;
var clearStatus = false;

var numbers = document.getElementsByClassName("number");

var getEl = function(name){
	return document.getElementById(name);
}
var display = getEl("display");
var clear = getEl("clear");
var summ = getEl("summ");
var multi = getEl("multi");
var divide = getEl("divide");
var sqrt = getEl("sqrt");
var dot = getEl("dot");
var result = getEl("result");

var clearDisplay = function(){
		display.innerHTML = String(display.innerHTML);
		if (display.innerHTML.length > 10) {
		    display.innerHTML = display.innerHTML.slice(0,10);
		}
    }

var calc = {
	summ: function(arg1, arg2){
		return arg1 + arg2;
	},
	minus: function(arg1, arg2){
		return arg1 - arg2;
	},
	multi: function(arg1, arg2){
		return arg1 * arg2;
	},
	divide: function(arg1, arg2){
		return arg1 / arg2;
	}
}    
/*-----------------------------------------------------------------------------------*/
//Handlers
/*-----------------------------------------------------------------------------------*/

clear.addEventListener("click", function(event){
		display.innerHTML = "";
		arg1 = null;
		arg2 = null;
	});

dot.addEventListener("click", function(event){
		if (!~display.innerHTML.indexOf(".") && display.innerHTML != ""){
			display.innerHTML += ".";
			clearStatus = false;
		}
		
	});

summ.addEventListener("click", function(event){
		arg1 = Number(display.innerHTML);
		clearStatus = true;
		operator = "summ";
	});

minus.addEventListener("click", function(event){
		if(display.innerHTML == ""){
			display.innerHTML = "-";
			clearStatus = false;
			return;
		}
		arg1 = Number(display.innerHTML);
		clearStatus = true;
		operator = "minus";
	});

multi.addEventListener("click", function(event){
		arg1 = Number(display.innerHTML);
		clearStatus = true;
		operator = "multi";
	});

divide.addEventListener("click", function(event){
		arg1 = Number(display.innerHTML);
		clearStatus = true;
		operator = "divide";
	});

sqrt.addEventListener("click", function(event){
		arg1 = Number(display.innerHTML);
		if (arg1 > 0){
			display.innerHTML = Math.sqrt(arg1);
			clearDisplay();
			clearStatus = true;
		}
		
	});


result.addEventListener("click", function(event){
		arg2 = Number(display.innerHTML);

		switch (operator){
			case "summ": display.innerHTML = calc.summ(arg1,arg2);
						 clearDisplay();
						 break;

			case "minus": display.innerHTML = calc.minus(arg1,arg2);
						  clearDisplay();
						  break;	

			case "multi": display.innerHTML = calc.multi(arg1,arg2);
						  clearDisplay();
						  break;

			case "divide": display.innerHTML = calc.divide(arg1,arg2);
						  clearDisplay();
						  break;			  				  		 
		}

		operator = "";
		arg1 = null;
		arg2 = null;
		clearStatus = true;
	});

/*-----------------------------------------------------------------------------------*/

display.innerHTML = "";
for (var i=0; i < numbers.length; i++){
	numbers[i].addEventListener("click", function(event){

		if (clearStatus) {
			display.innerHTML = "";
			clearStatus = false;
		}
		display.innerHTML += event.target.innerHTML;
	});
}

