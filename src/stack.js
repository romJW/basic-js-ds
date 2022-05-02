const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Node {
  constructor(value){
  this.value = value;
  this.previous = null;
   }
}

class Stack {
  constructor(){
    this.top  = null;
  }
  push( element ) {
   let node = new Node(element);
   node.previous  = this.top;
   this.top = node;

   return this.top.value;

  }

  pop() {
    let last  = this.top;
    this.top = this.top.previous;

    return last.value;
  }

  peek() {
    return this.top.value;
  }
}

module.exports = {
  Stack
};
