var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage[JSON.stringify(item)] = item;
  }
};

setPrototype.contains = function(item) {
  return JSON.stringify(item) in this._storage;
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    delete this._storage[JSON.stringify(item)];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
