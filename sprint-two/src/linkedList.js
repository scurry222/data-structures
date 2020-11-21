var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    const node = Node(value);
    // handle case of no elements in the list
    if (!list.head) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      node.prev = list.tail;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    const oldHead = list.head;
    if (!list.head) {
      return;
    } else if (list.head === list.tail) {
      list.head = null;
      list.tail = null;
      return oldHead.value;
    } else {
      list.head = list.head.next;
      list.head.prev = null;
      return oldHead.value;
    }
  };

  list.contains = function(target) {
    if (!list.head) {
      return false;
    }
    let curr = list.head;
    // while we have not reached target and we are not at tail, go to next
    while (curr !== null) {
      if (curr.value === target) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  };

  list.addToHead = function(value) {
    const newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  };

  list.removeTail = function() {
    const oldTail = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return oldTail.value;
    //don't do anything if tail is null meaning list doesn't exist
    } else if (this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      return oldTail.value;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// addToTail: O(1)
// removeHead: O(1)
// contains: O(n)

