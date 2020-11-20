// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.nodes.includes(node)) {
    this.nodes.splice(this.nodes.indexOf(node), 1);
    for (let i = 0; i < this.edges.length; i++) {
      if (this.edges[i][0] === node || this.edges[i][1] === node) {
        this.edges.splice(i, 1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (let i = 0; i < this.edges.length; i++) {
    if ((this.edges[i][0] === fromNode &&
        this.edges[i][1] === toNode) ||
        (this.edges[i][0] === toNode &&
        this.edges[i][1] === fromNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.nodes.includes(toNode) && this.nodes.includes(fromNode)) {
    this.edges.push([fromNode, toNode]);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (let i = 0; i < this.edges.length; i++) {
    if ((this.edges[i][0] === fromNode &&
        this.edges[i][1] === toNode) ||
        (this.edges[i][0] === toNode &&
        this.edges[i][1] === fromNode)) {
      this.edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// addNode: O(1)
// contains: O(n)
// removeNode: O(n^2)
// hasEdge: O(n)
// addEdge: O(n)
// removeEdge: O(n)
// forEachNode: O(n)
