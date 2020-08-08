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

// Iterative solution using a stack
// BinaryTree.prototype.DFSPreOrder = function () {

//   let visited = [];

//   let current = this.root;

//   let stack = [current];

//   while(stack.length) {
//     current = stack.pop();
//     visited.push(current.data);

//     if (current.right) {
//       stack.push(current.right);
//     }
//     if (current.left) {
//       stack.push(current.left);
//     }

//   }

//   return visited;

// };

BinaryTree.prototype.DFSPreOrder = function () {
  // array where we store the value of each node that we have visited
  let visited = [];

  // variable to keep track of current node
  let current = this.root;

  // method that adds node data to visited then runs itself on the node's children
  let traverse = (node) => {
    visited.push(node.data);

    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
  };

  traverse(current);
  return visited;
};

BinaryTree.prototype.DFSPostOrder = function () {
  // array where we store the value of each node that we have visited
  let visited = [];

  // variable to keep track of current node
  let current = this.root;

  // method that adds node data to visited then runs itself on the node's children
  let traverse = (node) => {
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }

    visited.push(node.data);
  };
};

BinaryTree.prototype.DFSInOrder = function () {
  // array where we store the value of each node that we have visited
  let visited = [];

  // variable to keep track of current node
  let current = this.root;

  // method that adds node data to visited then runs itself on the node's children
  let traverse = (node) => {
    if (node.left) {
      traverse(node.left);
    }

    visited.push(node.data);

    if (node.right) {
      traverse(node.right);
    }
  };
};

BinarySearchTree.DFSPreOrder();
BinarySearchTree.DFSPostOrder();
BinarySearchTree.DFSInOrder();