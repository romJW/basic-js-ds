const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class Node {
//   constructor(data){
//     this.data = data;
//     this.left = null;
//     this.left  = null;
//   }
// }



class BinarySearchTree {
  constructor() {
    this.head = null;
  }
  root(){
     return this.head;
  }

  add(data) {
   
    this.head  = addInside(this.head, data);

     function addInside(node, data){
      if(!node){
        return new Node(data);
      }

       if (node.data === data){
        return node;
      }

       if (data < node.data){
        node.left = addInside(node.left, data);
      }else {
         node.right = addInside(node.right, data);
         }
      return node;
     }  
  }

  has(data) {
    return searchInside(this.head, data)

    function searchInside(node, data){
        if (!node){
          return false;
        }

        if (node.data === data){
          return true;
        }
        
         if (data < node.data){
          return searchInside(node.left, data);
        } else {
          return searchInside(node.right, data);
        }
    }
  }

  find(data) {
    return findInside(this.head, data)
    function findInside(node, data){
      if (!node){
        return null;
      }

      else if (node.data === data){
        return node;
      }
      
      else if(data < node.data){
        return findInside(node.left, data);
      }
      else {
        return findInside(node.right, data);
      }
  }
    
  }

  remove(data) {
    this.head = removeNode(this.head, data);

    function removeNode(node, data){
       
      if (!node){
        return null;
      }

      if (data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data){
        node.right = removeNode(node.right, data);
        return node;
      }  else {
        if (!node.left && !node.right){
          return null;
        

      }
      if (!node.left){
        node = node.right;
        return node;
         }
       if (!node.right){
        node = node.left;
        return node;
      }

     let minFromRight = node.right;

     while (minFromRight.left){
      minFromRight = minFromRight.left;
     }
     node.data = minFromRight.data;
      
     node.right = removeNode(node.right, minFromRight.data);
     return node
    }
  }
  }

  min() {
    
    if(!this.head){
      return;
    }

    let node = this.head;
    while (node.left){
      node = node.left;
    }
    return node.data;

  }

  max() {
    if (!this.head){
      return;
    }

    let node = this.head;
    while (node.right){
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};