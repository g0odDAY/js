class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        const newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(this.length === 0){
            return undefined;
        }
        const tmp = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
           this.tail = tmp.prev;
           this.tail.next = null;
           tmp.prev = null;
        }
        this.length--;
        return tmp;
    }
    unshift(val){
        const newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    shift(){
        if(this.length === 0) return undefined;
        const removeNode = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{

            this.head = removeNode.next;
            this.head.prev = null;
            removeNode.next = null;
        }
        this.length--;
        return removeNode;
    }
    get(idx){
        if(idx < 0 || idx >= this.length) return null;
        const half = this.length / 2;

        if(half >= idx){
            let cnt = 0;
            let current = this.head;
            while(idx !== cnt){
                current = current.next;
                cnt++;
            }
            return current;
        }else{
            let current = this.tail;
            let cnt = this.length - 1;
            while (idx !== cnt){
                current = current.prev;
                cnt--;
            }
            return current;
        }

    }
    set(idx,val){

        const node = this.get(idx);
        if(node){
            node.val = val;
            return true;
        }
        return false;
    }
    remove(idx){
        if(idx<0 || idx >= this.length) return undefined;
        if(idx === 0) return this.shift();
        if(idx === this.length -1) return this.pop();

        const removedNode = this.get(idx);
        const prev = removedNode.prev;
        const next = removedNode.next;
        prev.next = next;
        next.prev = prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;

    }
}
const list = new DoublyLinkedList();
list.push(5)
list.push(57)
list.push(5887)
list.push(7)
list.push(17)

console.log(list.remove(1))


console.log(list);