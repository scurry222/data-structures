var HashTable = function() {
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  const bucket = this._storage.get(index);
  let overWritten = false;
  if (bucket) {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        overWritten = true;
      }
    }
    if (!overWritten) {
      bucket.push([k, v]);
      this._count++;
    }
  } else {
    this._storage.set(index, [[k, v]]);
    this._count++;
  }
  if (this._count / this._limit >= .75) {
    this.resize(2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  if (bucket) {
    for (let [key, val] of bucket) {
      if (key === k) {
        return val;
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
        this._count--;
      }
    }
  }
  if (this._count / this._limit < .25) {
    this.resize(0.5);
  }
};

HashTable.prototype.resize = function(limitCoefficient) {
  const newStorage = LimitedArray(this._limit * limitCoefficient);
  this._storage.each(function(bucket) {
    if (bucket) {
      for (let [oldKey, oldValue] of bucket) {
        let newIndex = getIndexBelowMaxForKey(oldKey, this._limit * limitCoefficient);
        let newBucket = newStorage.get(newIndex);
        if (newBucket) {
          newBucket.push([oldKey, oldValue]);
        } else {
          newStorage.set(newIndex, [[oldKey, oldValue]]);
        }
      }
    }
  }.bind(this));
  this._storage = newStorage;
  this._limit *= limitCoefficient;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// insert: O(1)
// retrieve: O(1)
// remove: O(1)
