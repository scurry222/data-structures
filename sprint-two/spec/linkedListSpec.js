describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  it('should not throw an error when removing more nodes than are in the list', function() {
    linkedList.addToTail(5);
    linkedList.removeHead();
    linkedList.removeHead();
    expect(linkedList.head).to.equal(null);
  });
  // add more tests here to test the functionality of linkedList

  it('should add to head', function() {
    linkedList.addToHead(4);
    expect(linkedList.head.value).to.equal(4);
    linkedList.addToHead(5);
    expect(linkedList.head.value).to.equal(5);
  });

  it('should remove the tail correctly for a linked list of length 1', function() {
    linkedList.addToHead(69);
    linkedList.removeTail();
    expect(linkedList.tail).to.equal(null);
  });

  it('should remove the tail correctly for a linked list of length 2', function() {
    linkedList.addToHead(69);
    linkedList.addToHead(420);
    linkedList.removeTail();
    expect(linkedList.contains(420)).to.equal(true);
    expect(linkedList.contains(69)).to.equal(false);
  });

  it('should remove the head correctly for a linked list of length 1', function() {
    linkedList.addToHead(69);
    linkedList.removeHead();
    expect(linkedList.head).to.equal(null);
  });

  it('should remove the head correctly for a linked list of length 2', function() {
    linkedList.addToHead(69);
    linkedList.addToHead(420);
    linkedList.removeHead();
    expect(linkedList.contains(420)).to.equal(false);
    expect(linkedList.contains(69)).to.equal(true);
  });
});
