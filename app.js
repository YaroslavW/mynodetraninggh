var calculator = require('./calculator.js');

var rs = require('readline-sync');
var x = rs.question('Enter the first number');
var simbol = rs.question('Enter the sign');
var y = rs.question('Enter the second number');

switch(simbol){
	case  '+':
	calculator.add(x, y);
	break;
	case '-':
	calculator.subtract(x, y);
	break;
	case '*':
  calculator.multiply(x,y);
  break;
  case '/':
  calculator.divide(x, y);
  break;
  default:
  console.log("Something went wrong");
}

/*
calculator.add( 6, 2 );
calculator.subtract( 6, 2 );
calculator.multiply( 6, 2 );
calculator.divide( 6, 2 );
*/
