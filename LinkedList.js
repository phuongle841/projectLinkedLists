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
    let parent = this.root;
    let current = this.root;
    while (current != null && index) {
      parent = current;
      current = current.next;
      index--;
    }
    if (index > 0) {
      return false;
    }
    return parent.value;
  }
  pop() {
    let parent = this.root;
    let current = this.root;
    while (current.next != null) {
      parent = current;
      current = current.next;
    }
    parent.next = null;
    return current;
  }
  contains(value) {
    let result = false;
    let current = this.root;
    while (current != null) {
      if (value == current.value) {
        result = true;
      }
      current = current.next;
    }
    return result;
  }
  find(value) {
    let result = 0;
    let current = this.root;
    while (current != null) {
      console.log(result);
      result++;
      if (current.value == value) {
        return result;
      }
      current = current.next;
    }
    return null;
  }
  toString() {
    let current = this.root;
    let result = [];
    while (current != null) {
      result.push(current.value);
      current = current.next;
    }
    result.push("null");
    return result;
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
console.log("the value at 5 in the linked list:" + linkedList.at(5));
linkedList.pop();
console.log("the tail value of linked list:" + linkedList.tail());
console.log("Linked list contains 1444:" + linkedList.contains(1444));
console.log("Position of 39:" + linkedList.find(39));
console.log("Linked list to string is:" + linkedList.toString());
