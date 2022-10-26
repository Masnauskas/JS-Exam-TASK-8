/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

//ES6
// class Calculator {
//   constructor(value1, value2) {
//     this.value1 = value1;
//     this.value2 = value2;
//   }
//   sum() {
//     console.log(this.value1 + this.value2);
//   }
//   subtraction() {
//     console.log(this.value1 - this.value2);
//   }
//   multiplication() {
//     console.log(this.value1 * this.value2);
//   }
//   division() {
//     console.log(this.value1 / this.value2);
//   }
// }

// const calc = new Calculator(5, 5);

//ES5
function Calculator(value1, value2) {
  this.value1 = value1;
  this.value2 = value2;
  this.sum = function () {
    console.log(this.value1 + this.value2);
  };
  this.subtraction = function () {
    console.log(this.value1 - this.value2);
  };
  this.multiplication = function () {
    console.log(this.value1 * this.value2);
  };
  this.division = function () {
    console.log(this.value1 / this.value2);
  };
}

const calc = new Calculator(5, 5);
