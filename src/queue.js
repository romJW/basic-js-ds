const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor(){
    this.first=null;
  }

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    let node = new ListNode(value);
    if (!this.first){
      this.first = node;
    }else{
      let fir = this.first;
         while(fir.next){
           fir = fir.next;
         }
         fir.next = node;
    }

  }

  dequeue() {
  let firNum = this.first.value;
  this.first = this.first.next;
   return firNum;

  }
}

module.exports = {
  Queue
};
