function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function BinaryTree() {
    this.root = null;
}

BinaryTree.prototype.add = function(data) {
    let newNode = new Node(data);

    if (this.root === null) {
        this.root = newNode;
    } else {
        this.addNode(this.root, newNode);
    }

}

BinaryTree.prototype.addNode = function(node, newNode) {

    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            this.addNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            this.addNode(node.right, newNode);
        }
    }

}
