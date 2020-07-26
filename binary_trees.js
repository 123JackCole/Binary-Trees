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

