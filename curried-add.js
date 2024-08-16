function curriedAdd(total = 0) {
  function add(nextValue) {
    if (nextValue === undefined) {
      // Return the accumulated total if no arguments are passed
      return total;
    } else {
      // Otherwise, return a new function with updated total
      return curriedAdd(total + nextValue);
    }
  }
  return add;
}

// Example usage:
let firstAdder = curriedAdd();
let secondAdder = curriedAdd();
let thirdAdder = curriedAdd();

console.log(firstAdder()); // 0
console.log(secondAdder(1)(2)()); // 3
console.log(thirdAdder(2)(8)(5)(1)()); // 16

module.exports = { curriedAdd };
