class Queue<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

// Example usage:
const stringQueue = new Queue<string>();
stringQueue.enqueue("apple");
stringQueue.enqueue("banana");
stringQueue.enqueue("orange");

console.log(stringQueue.dequeue()); // Output: apple
console.log(stringQueue.isEmpty()); // Output: false

const numberQueue = new Queue<number>();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
numberQueue.enqueue(3);

console.log(numberQueue.dequeue()); // Output: 1
console.log(numberQueue.isEmpty()); // Output: false
