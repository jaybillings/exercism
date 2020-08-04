//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  constructor(firstNode = null, lastNode = null) {
    this.firstNode = firstNode;
    this.lastNode = lastNode;
    this.numNodes = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.firstNode) {
      // No nodes
      this.firstNode = newNode;
      this.lastNode = newNode;
    } else {
      // One or more nodes
      const currentLastNode = this.lastNode;
      currentLastNode.nextNode = newNode;
      newNode.prevNode = currentLastNode;
      this.lastNode = newNode;
    }

    this.numNodes++;
    return this.count();
  }

  pop() {
    if (!this.firstNode) throw new Error("Trying to pop from an empty list");

    const currentLastNode = this.lastNode;

    if (!currentLastNode.prevNode) {
      // Only one node
      this.lastNode = null;
      this.firstNode = null;
    } else {
      // More than one node
      let newLastNode = currentLastNode.prevNode;
      newLastNode.nextNode = null;
      this.lastNode = newLastNode;
    }

    this.numNodes--;
    return currentLastNode.value;
  }

  shift() {
    if (!this.firstNode) throw new Error("Trying to shift from an empty list");

    let currentFirstNode = this.firstNode;

    if (!currentFirstNode.nextNode) {
      // Only one node
      this.firstNode = null;
      this.lastNode = null;
    } else {
      // More than one node
      let newFirstNode = currentFirstNode.nextNode;
      newFirstNode.prevNode = null;
      this.firstNode = newFirstNode;
    }

    this.numNodes--;
    return currentFirstNode.value;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.firstNode) {
      // No nodes
      this.firstNode = newNode;
      this.lastNode = newNode;
    } else {
      // One or more nodes
      const currentFirstNode = this.firstNode;
      currentFirstNode.prevNode = newNode;
      newNode.nextNode = currentFirstNode;
      this.firstNode = newNode;
    }

    this.numNodes++;
    return this.count();
  }

  delete(valueToDelete) {
    if (!this.firstNode) throw new Error("Trying to delete from an empty list");

    let currentNode = this.firstNode;
    let prevNode = null;
    let foundValue = false;

    while (currentNode && !foundValue) {
      if (currentNode.value === valueToDelete) {
        foundValue = true;
        if (!currentNode.prevNode) {
          // Current node is first node
          this.shift();
        } else if (!currentNode.nextNode) {
          // Current node is last node
          this.pop();
        } else {
          // Current node is neither first nor last
          const prevNode = currentNode.prevNode;
          const nextNode = currentNode.nextNode;
          prevNode.nextNode = nextNode;
          nextNode.prevNode = prevNode;
          this.numNodes--;
        }
      }

      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    if (!foundValue) return null;
    else return this.count();
  }

  count() {
    return this.numNodes;
  }
}

class Node {
  constructor(value, prevNode = null, nextNode = null) {
    this.value = value;
    this.prevNode = prevNode;
    this.nextNode = nextNode;
  }
}