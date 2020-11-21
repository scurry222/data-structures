var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  set.size = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage[JSON.stringify(item)] = item;
    this.size += 1;
  }
};

setPrototype.contains = function(item) {
  return JSON.stringify(item) in this._storage;
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    delete this._storage[JSON.stringify(item)];
    this.size -= 1;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// add: O(1)
// contains: O(1)
// remove: O(1)
