function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function TreeNode(data) {
    this.data = data;
    this.children = [];
}

function BinaryTree() {
    this.root = null;
}

BinaryTree.prototype.add = function(data) {
    // create our node using our node constructor
    let newNode = new Node(data);

    // set the root to the new node if there is no root
    if (this.root === null) {
        this.root = newNode;
    // otherwise add our node to the tree
    } else {
        this.addNode(this.root, newNode);
    }

}

BinaryTree.prototype.addNode = function(node, newNode) {

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

}

BinarySearchTree = new BinaryTree();

BinarySearchTree.add(7);
BinarySearchTree.add(4);
BinarySearchTree.add(2);
BinarySearchTree.add(9);
BinarySearchTree.add(3);
BinarySearchTree.add(13);
BinarySearchTree.add(17);

console.log(BinarySearchTree)