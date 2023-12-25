const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree {

  constructor() {
    this.base = null;
  }

  root() {
    return this.base;
  }

  add(data) {
    this.base = addData(this.base, data);

    function addData(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node
      }

      if (data < node.data) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return hasdata(this.base, data);

    function hasdata(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return hasdata(node.left, data);
      } else {
        return hasdata(node.right, data);
      }
    }
  }

  find(data) {
    return findNode (this.base, data);
    
    function findNode (node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (node.data > data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.base = removeNode(this.base, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if (data > node.data) {
          node.right = removeNode(node.right, data);
          return node;
        } else {
          if (!node.left && !node.right) {
            return null;
          }
          if (!node.left) {
            node = node.right;
            return node;
          }
          if (!node.right) {
            node = node.left;
            return node;
          }
          let min = node.right;
          while(min.left) {
            min = min.left;
          }
          node.data = min.data;
          node.right = removeNode(node.right, min.data);
          return node;
        }
      }
    }
  }

  min() {
    if (!this.base) {
      return;
    }
    let node = this.base;
    while (node.left) {
      node = node.left;
    }
    return node.data
  }

  max() {
    if (!this.base) {
      return;
    }
    let node = this.base;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};