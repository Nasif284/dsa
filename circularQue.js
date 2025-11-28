class CircularQueue {
  constructor(size = 20) {
    this.queue = [];
    this.front = -1;
    this.rear = -1;
    this.size = size;
  }
  isFull() {
    return (this.rear + 1) % this.size == 0;
  }
  isEmpty() {
    return this.front == -1;
  }
  enqueue(x) {
    if (this.isFull()) {
      return "The queue is full";
    }
    if (this.isEmpty()) {
      this.front = 0;
    }
      this.rear = (this.rear + 1) % this.size
      this.queue[this.rear] = x
    }
    dequeue() {
        if (this.isEmpty()) {
            return "The queue is empty"
        }
        if (this.front == this.rear) {
            this.front = this.rear = -1
        } else {
                 this.front = (this.front + 1) % this.size;
        }
    }
}
