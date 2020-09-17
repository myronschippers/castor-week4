console.log('Hello Castor');

// anonymous function
// function () {}

// declared function
function myFunction(name, lastName) {
  console.log('in myFunction');
  return name + ' ' + lastName;
}

// const myOtherFunction = function () {};

// function call
const result = myFunction('Myron', 'Schippers'); // 1 2
console.log(result);

const basketOfFruit = ['orange', 'apple', 'grapefruit'];

const loopFruit = function (listOfFruit, nameFruit) {
  for (let fruit of listOfFruit) {
    // console.log(fruit)
    // want to see specific fruit
    if (fruit === nameFruit) {
      return true;
    }
  }

  return false;

}

console.log(loopFruit(basketOfFruit, 'apple'));
console.log(loopFruit(['kiwi', 'passion fruit'], 'apple'));
