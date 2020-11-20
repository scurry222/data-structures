var BinarySearchTree = function(value) {
  var searchTree = Object.create(BinarySearchTree.methods);
  searchTree.left = null;
  searchTree.right = null;
  searchTree.value = value;
  return searchTree;
};

BinarySearchTree.methods = {
  insert: function(value) {
    // is there no left or right?
    // return this.node.left = value if less, this.node.right = value if more
    // is value less than searchTree's value?
    // recursively call to the left
    // is value greater than searchTree's value?
    // recursively call to the right
    let traverse = function(tree) {
      if (value < tree.value && !tree.left) {
        tree.left = BinarySearchTree(value);
        return;
      } else if (value > tree.value && !tree.right) {
        tree.right = BinarySearchTree(value);
        return;
      }
      
      // if its smaller than current and left doesn't exist but right exists
      //set left to new thing 
      if (value < tree.value && tree.left) {
        traverse(tree.left);
      } else if (value > tree.value && tree.right) {
        traverse(tree.right);
      }
    };
    traverse(this);
  }, 
  contains: function(value) {
    // are we at the value right now?
    // return value
    // else if value is greater than tree value recurse right
    // else left
    const traverse = function(tree) {
      if (value === tree.value) {
        return true;
      } else {
        if (tree.left && value < tree.value) {
          return traverse(tree.left);
        } else if (tree.right && value > tree.value) {
          return traverse(tree.right);
        } else {
          return false;
        }
      }
    };
    return traverse(this);
  },
  depthFirstLog: function(callBack) {

  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
