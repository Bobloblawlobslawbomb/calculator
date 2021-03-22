function add(number1, number2){
  return number1 + number2;
}

function subtract(number1, number2){
  return number1 - number2;
}

function multiply(number1, number2){
  return number1 * number2;
} 

function divide(number1, number2){
  return number1 / number2;
}

//function convertTemp() {
// return (number1 - 32) * 1.8;
//}




const number1=parseInt(prompt("Enter a number:"));
const number2=parseInt(prompt("Enter another number:"));
  
alert(add(number1, number2));
//alert(convertTemp); still working on the temp conversion need a new set of eyes