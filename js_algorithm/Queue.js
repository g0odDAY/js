class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    enqueue(val){
        const newNode = new Node(val);
        if(this.size === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this;
    }
    dequeue(){
        if(this.size === 0) return null;
        const removedNode = this.head;
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = removedNode.next;
            removedNode.next = null;
        }
        this.size--;
        return removedNode.val;
    }
}
const queue = new Queue();
queue.enqueue('dd')

console.log(queue.dequeue());


console.log(queue);