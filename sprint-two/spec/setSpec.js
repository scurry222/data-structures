describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });


  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should not add values that already exist in the set', function() {
    set.add('Steven Seagal');
    set.add('Steven Seagal');
    expect(set.size).to.equal(1);
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should remove only one value when theres multiple items in the set', function() {
    set.add('Mel Gibson');
    set.add('Steven Seagal');
    set.remove('Mel Gibson');

    expect(set.contains('Steven Seagal')).to.equal(true);
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should add objects to a set', function() {
    let bigSteve = {'Steven': 'Seagal'};
    set.add(bigSteve);
    expect(set.contains(bigSteve)).to.equal(true);
  });

  it('should not allow modifications to existing elements in the set', function() {
    let arr = [];
    set.add(arr);
    arr.push(1);
    expect(set.contains([])).to.equal(true);
  });
});
