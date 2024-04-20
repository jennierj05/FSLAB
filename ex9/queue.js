var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.items.shift();
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    return Queue;
}());
// Example usage:
var stringQueue = new Queue();
stringQueue.enqueue("apple");
stringQueue.enqueue("banana");
stringQueue.enqueue("orange");
console.log(stringQueue.dequeue()); // Output: apple
console.log(stringQueue.isEmpty()); // Output: false
var numberQueue = new Queue();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
numberQueue.enqueue(3);
console.log(numberQueue.dequeue()); // Output: 1
console.log(numberQueue.isEmpty()); // Output: false
