var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  // your code here
  newTree.children = []; // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let tree = Tree(value);
  this.children.push(tree);
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

/*
 * Complexity: What is the time complexity of the above functions?
 */

// addChild: O(1)
// contains: O(n)
