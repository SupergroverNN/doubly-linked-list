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
    return this;
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
    if (this.length === 0) {
      this.append(data);
    }
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
    return this;
  }

  deleteAt(index) {
    let count = 1;
    let current = this._head;
    if (index === 0) {
      if (this.length === 1) {
        this._head = null;
        this._tail = null;
        this.length = 0;
      } else {
        this._head = current.next;
        this._head.prev = null;
        this.length--;
      }
    } else {
      while (count > 0) {
        current = current.next;
        if (count === this.length) {
          this._tail = this._tail.prev;
          this._tail.next = null;
        }
        if (count === index) {
          current.prev.next = current.next;
          current.next.prev = current.prev;
          this.length--;
          break;
        }
        count++;
      }
    }
    return this;
  }

  reverse() {
    if (this.length > 1) {
      let current = this._head;
      let prev = null;
      while (true) {
        let next = current.next;
        current.next = prev;
        current.prev = next;
        prev = current;
        current = next;
        if (current === null) {
          break;
        }
      }
      this._tail = this._head;
      this._head = prev;
    }

    return this;
  }

  indexOf(data) {
    let count = 0;
    let current = this._head;
    while (count >= 0) {
      if (current.data === data) {
        return count;
      }
      current = current.next;
      count++;
      if (current === null) {
        return -1;
      }
    }
  }
}

module.exports = LinkedList;
