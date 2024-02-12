import { prompt } from './helper.js';

// 🦁 Crée une fonction `validateNumber`
// 🦁 Elle prendra en paramètre `number`
// 🦁 Si `number` n'est pas un nombre ou est trop grand / trop petit (max: 100000000000000)
// 🦁 Alors affiche "Error : number is not a number or is too big / too small (max: 100000000000000)" et quitte le programme
// 💡 function validateNumber(number) {

console.log('ADDITION-MASTER ™️');

console.log(`Choose an operator :
1. Addition
2. Soustraction
3. Multiplication
4. Division`);

function validateNumber(number) {
  if (Number.isNaN(number) || Math.abs(number) > 100000000000000) {
    console.log(
      'Error : number is not a number or is too big / too small (max: 100000000000000)'
    );
    process.exit(1);
  }
}

function promptNumber(message) {
  const number = Number(prompt(message));

  validateNumber(number);

  return number;
}

let operator = 0;

while (operator === 0) {
  const tempOperator = promptNumber('Enter the operator : ');

  if (
    tempOperator !== 1 &&
    tempOperator !== 2 &&
    tempOperator !== 3 &&
    tempOperator !== 4
  ) {
    console.log('\nError : operator is not 1, 2, 3 or 4 ! Retry.');
  } else {
    operator = tempOperator;
  }
}

const firstNumber = promptNumber('Enter the first number : ');
const secondNumber = promptNumber('Enter the second number : ');

function calculateResult(operator, firstNumber, secondNumber) {
  if (operator === 1) {
    return firstNumber + secondNumber;
  }

  if (operator === 2) {
    return firstNumber - secondNumber;
  }

  if (operator === 3) {
    return firstNumber * secondNumber;
  }

  if (operator === 4) {
    if (secondNumber === 0) {
      throw new Error('Invalid number!');
    }
    return firstNumber / secondNumber;
  }
}

console.log(
  'The result is :',
  calculateResult(operator, firstNumber, secondNumber)
);

// switch (operator) {
//   case 1:
//     console.log('The result of addition is : ', firstNumber + secondNumber);
//     break;
//   case 2:
//     console.log('The result of soustraction is : ', firstNumber - secondNumber);
//     break;
//   case 3:
//     console.log(
//       'The result of multiplication is : ',
//       firstNumber * secondNumber
//     );
//     break;
//   case 4:
//     console.log('The result of division is : ', firstNumber / secondNumber);
//     break;
// }
