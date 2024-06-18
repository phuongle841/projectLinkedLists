const { add, Node } = require("./Node");
add(3.4);
const node = new Node();

class LinkedList {
  root;
  constructor() {
    this.root == null;
  }
  display = function () {
    let current = this.root;
    while (current != null) {
      current.display();
      current = current.next;
    }
    console.log("end of linkedList");
  };
  append(value) {
    const newNode = new Node(value);
    let current = this.root;

    if (this.root == null) {
      this.root = newNode;
      return;
    }

    while (current.next != null) {
      current = current.next;
    }

    current.next = newNode;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.root;
    this.root = newNode;
  }
  deleteFirst() {
    let current = this.root;
    this.root = this.root.next;
    return current;
  }
  size() {
    let length = 0;
    let current = this.root;
    while (current != null) {
      length++;
      current = current.next;
    }
    return length;
  }
  head() {
    return this.root.value;
  }
  tail() {
    let parent = this.root;
    let current = this.root;
    while (current != null) {
      parent = current;
      current = current.next;
    }
    return parent.value;
  }
  at(index) {
    index = index - 2;
    let parent = this.root;
    let current = this.root;
    while (current != null && index) {
      parent = current;
      current = current.next;
      index--;
      console.log(index);
    }
    if (index < 0) {
      return false;
    }
    return parent.value;
  }
}
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(5);
linkedList.append(2);
linkedList.append(1444);
linkedList.append(3);
linkedList.append(39);
linkedList.append(99);
console.log("the size of linked list is: " + linkedList.size());
console.log("the head value of linked list:" + linkedList.head());
console.log("the tail value of linked list:" + linkedList.tail());
console.log("the value at 5 in the linked list:" + linkedList.at(9));
