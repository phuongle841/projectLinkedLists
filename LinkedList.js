const { Node } = require("./Node");

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
  insertAt(value, index) {
    let current = this.root;
    let parent = this.root;
    while (current != null) {
      index--;
      parent = current;
      current = current.next;
      if (index == 1) {
        const newNode = new Node(value);
        parent.next = newNode;
        newNode.next = current;
        break;
      }
    }
  }
  removeAt(value) {
    let parent = this.root;
    let current = this.root;
    while (current.next != null) {
      parent = current;
      current = current.next;
      if (current.value == value) {
        parent.next = current.next;
      }
    }
  }
}

module.exports.LinkedList = LinkedList;
