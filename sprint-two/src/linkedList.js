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

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// addToTail: O(1)
// removeHead: O(1)
// contains: O(n)

