const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let result = [];

class Node {
  constructor(item) {
    this.item = item;
    // this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(item) {
    const node = new Node(item);
    if (this.head === null) {
      this.head = node;
      this.head.next = null;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length += 1;
  }
  pop() {
    if (this.length === 0) {
      return -1;
    } else {
      const popItem = this.head.item;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length === 0) {
        this.head = null;
      }
      return popItem;
    }
  }
  size() {
    return this.length;
  }
  empty() {
    if (this.length === 0) {
      return 1;
    } else {
      return 0;
    }
  }
  front() {
    if (this.length === 0) {
      return -1;
    } else {
      return this.head.item;
    }
  }
  back() {
    if (this.length === 0) {
      return -1;
    } else {
      return this.tail.item;
    }
  }
}

const queue = new Queue();
for (let i = 1; i <= Number(input[0]); i++) {
  let [a, b] = input[i].split(' ');
  if (a === 'push') {
    queue.push(b);
  } else if (a === 'pop') {
    result.push(queue.pop());
  } else if (a === 'size') {
    result.push(queue.size());
  } else if (a === 'empty') {
    result.push(queue.empty());
  } else if (a === 'front') {
    result.push(queue.front());
  } else {
    result.push(queue.back());
  }
}

console.log(result.join('\n'));
