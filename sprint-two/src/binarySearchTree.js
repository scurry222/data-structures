var BinarySearchTree = function(value) {
  var searchTree = Object.create(BinarySearchTree.methods);
  searchTree.left = null;
  searchTree.right = null;
  searchTree.value = value;
  return searchTree;
};

BinarySearchTree.methods = {
  insert: function(value) {
    let traverse = function(tree) {
      if (value < tree.value && !tree.left) {
        tree.left = BinarySearchTree(value);
        return;
      } else if (value > tree.value && !tree.right) {
        tree.right = BinarySearchTree(value);
        return;
      }
      if (value < tree.value && tree.left) {
        traverse(tree.left);
      } else if (value > tree.value && tree.right) {
        traverse(tree.right);
      }
    };
    traverse(this);
  }, 
  contains: function(value) {
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
    callBack = callBack || _.identity;
    const traverse = function(tree) {
      callBack(tree.value);
      if (tree.left) {
        traverse(tree.left);
      }
      if (tree.right) {
        traverse(tree.right);
      }
    };
    traverse(this);
  },
  breadthFirstLog: function(callBack) {
    callBack = callBack || _.identity;
    const queue = [];
    queue.push(this);
    const traverse = function() {
      if (!queue.length) {
        return;
      }
      const node = queue.shift();
      callBack(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      traverse();
    };
    traverse();
  },
  depthFirstInOrder: function() {
    const data = [];
    const traverse = function(node) {
      if (node.left) {
        traverse(node.left);
      }
      data.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this);
    return data;
  },
  buildBSTFromInOrder: function() {
    const ordered = this.depthFirstInOrder();
    const half = Math.floor(ordered.length / 2);
    const balanced = new BinarySearchTree(ordered[half]);
    const buildBST = function(arr) {
      if (arr.length === 1) {
        balanced.insert(arr[0]);
        return;
      } else if (arr.length === 2) {
        balanced.insert(arr[1]);
        balanced.insert(arr[0]);
        return;
      } else {
        const midPoint = Math.floor(arr.length / 2);
        buildBST(arr.splice(0, midPoint));
        buildBST(arr.splice(midPoint - 1, arr.length));
      }
    };
    buildBST(ordered);
    return balanced;
  } 
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
//insert: O(log(n))
//contains: O(log(n))
//depthFirstLog: O(n)