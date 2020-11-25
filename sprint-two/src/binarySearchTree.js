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
    const visited = [];
    queue.push(this);
    while (queue.length) {
      const node = queue.shift();
      visited.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    for (let i = 0; i < visited.length; i++) {
      callBack(visited[i]);
    }
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
//insert: O(log(n))
//contains: O(log(n))
//depthFirstLog: O(n)