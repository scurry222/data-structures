var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  // your code here
  newTree.children = [];
  newTree.parent = null;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.contains = function(target) {
  const traverse = function(tree) {
    let previous = false;
    for (let child of tree.children) {
      let current = traverse(child);
      previous = previous || current;
    }
    return previous || target === tree.value;
  };
  return traverse(this);
};

treeMethods.removeFromParent = function() {
  // this's parent we wanna remove this tree from children
  this.parent.children.slice(this.parent.children.indexOf(this), 1);
  // on this we want parent to be null
  this.parent = null;
};

treeMethods.traverse = function(tree, callback) {
  callback(tree.value);
  for (let child of tree.children) {
    this.traverse(child, callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// addChild: O(1)
// contains: O(n)
