class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Stack{
    constructor() {
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }
    push(val){
        const newNode = new Node(val);
        if(this.size === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            const tmp = this.top;
            this.top = newNode;
            this.top.next = tmp;
        }
        return ++this.size;
    }
    pop(){
        if(this.size === 0) return null;
        const removedNode = this.top;
        if(this.size === 1){
            this.top = null;
            this.bottom = null;
        }else{
            this.top = removedNode.next;
        }

        removedNode.next = null;

        this.size--;
        return removedNode;
    }
}
const stack = new Stack();


console.log(stack.pop());
console.log(stack);