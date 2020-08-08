function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this.root = null;
}

BinaryTree.prototype.add = function (data) {
  // create node using node constructor
  let newNode = new Node(data);

  // set the root to the new node if there is no root
  if (this.root === null) {
    this.root = newNode;
    // otherwise add node to the tree
  } else {
    this.addNode(this.root, newNode);
  }
};

BinaryTree.prototype.addNode = function (node, newNode) {
  // if the data is less than the node, we either fill the left side
  // or recursively use the function again until we find an open spot
  // for the new node
  if (newNode.data < node.data) {
    if (node.left === null) {
      node.left = newNode;
    } else {
      this.addNode(node.left, newNode);
    }
    // do the same but on the right if the data is greater
  } else {
    if (node.right === null) {
      node.right = newNode;
    } else {
      this.addNode(node.right, newNode);
    }
  }
};

BinarySearchTree = new BinaryTree();

BinarySearchTree.add(7);
BinarySearchTree.add(4);
BinarySearchTree.add(2);
BinarySearchTree.add(9);
BinarySearchTree.add(3);
BinarySearchTree.add(13);
BinarySearchTree.add(17);

console.log(BinarySearchTree);

BinaryTree.prototype.BFS = function () {

  // array where we store the value of each node that we have visited
  let visited = [];

  // variable to keep track of current node
  let current = this.root;

  // queue to store all nodes we need to visit
  let queue = [current];

  // this loop runs until our queue is empty
  // we look at the next node in the queue, add it to the visited array
  // finally, we add any children of the current node to the queue
  while (queue.length) {
    current = queue.shift();
    visited.push(current.data);

    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
    
  }

  return visited;

};

BinarySearchTree.BFS();

BinaryTree.prototype.DFSPreOrder = function () {



}

BinaryTree.prototype.DFSPostOrder = function () {



}

BinaryTree.prototype.DFSInOrder = function () {



}