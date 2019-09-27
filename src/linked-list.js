const Node = require("./node");

class LinkedList {
  constructor() {
    this.length = 0;
    this._head = null;
    this._tail = null;
  }

  append(data) {
    let node = new Node(data);
    if (!this._head) {
      this._head = node;
      this._tail = node;
    } else {
      node.prev = this._tail;
      this._tail.next = node;
      this._tail = node;
    }
    this.length++;
    // console.log("_tail", this._tail);
    // console.log("_head", this._head);
    // console.log("----------------------");
  }

  head() {
    return this._head !== null ? this._head.data : null;
  }

  tail() {
    return this._tail !== null ? this._tail.data : null;
  }

  at(index) {
    let count = 0;
    let current = this._head;
    if (index === 0 && this._head) {
      return this._head.data;
    }
    while (current !== null && count !== index) {
      current = current.next;
      count++;
    }
    return current.data;
  }

  insertAt(index, data) {
    let count = 1;
    let current = this._head;
    let node = new Node(data);
    if (index === 0) {
      this._head.prev = node;
      node.next = this._head;
      this._head = node;
    } else {
      while (count > 0) {
        current = current.next;
        if (count === index) {
          node.prev = current.prev;
          current.prev.next = node;
          node.next = current;
          current.prev = node;
          break;
        }
        count++;
      }
    }
  }

  isEmpty() {
    return this._head === null;
  }

  clear() {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }

  deleteAt(index) {}

  reverse() {}

  indexOf(data) {}
}

module.exports = LinkedList;
