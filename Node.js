module.exports.add = function (a, b) {
  console.log("successfully connect in common js");
  return a + b;
};

class Node {
  value = null;
  next = null;
  constructor(value) {
    this.value = value;
  }
  display() {
    console.log(this.value);
  }
}

module.exports.Node = Node;
