
//A class withou constructor


class MathHelper {
  add(n1, n2) {
    console.log(`adding ${n1} to ${n2}`)
    return n1 + n2;
  }
  sub(n1, n2) {
     return n1 - n2;
   }
  div(n1, n2) {
    return n1 / n2
  }
}

const mathHelper = new MathHelper();

let res = mathHelper.add(20, 30);
let res2 = mathHelper.sub(70, 30);
let res3 = mathHelper.div(80, 20);

console.log(res);
console.log(res2);
console.log(res3);

// class MathHelper {

//     add(num1, num2) {
//         return num1 + num2;
//     }

//     subtract(num1, num2) {
//         return num1 - num2;
//     }

//     multiply(num1, num2) {
//         return num1 * num2;
//     }

//     divide(num1, num2) {
//         return num1 / num2;
//     }

//     modulo(num1, num2) {
//         return num1 % num2;
//     }

//     power(num1, num2) {
//         return num1 ** num2;
//     }
// }

// // Create an instance from the class
// const mathHelper = new MathHelper();

// //use the instance
// console.log(mathHelper.add(2, 3));
// console.log(mathHelper.subtract(2, 3));
// console.log(mathHelper.multiply(2, 3));
// console.log(mathHelper.divide(2, 3));
// console.log(mathHelper.modulo(2, 3));
// console.log(mathHelper.power(2, 3));
