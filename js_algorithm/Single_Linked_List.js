class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            //tail은 지금 head를 가리키고 있엇기 때문에 head.next에 newNode의 참조값을 저장시키는것과 같다
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length===0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(idx){
        if(idx < 0 || this.length <= idx){
            return null;
        }
        let cnt = 0;
        let current = this.head;
        while(cnt !== idx){
            current = current.next;
            cnt++;
        }
        return current;
    }
    set(idx,val){
        const foundNode = this.get(idx);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(idx,val){
        if(idx < 0 || this.length <= idx) return false;
        if(idx === this.length)return !!this.push(val);
        if(idx === 0) return !!this.unshift(val);
        let newNode = new Node(val);
        let prev = this.get(idx-1);
        let tmp = prev.next;
        prev.next = newNode;
        newNode.next = tmp;
        this.length++;
        return true;
    }
    remove(idx){
        if(idx < 0 || this.length <= idx) return undefined;
        if(idx === this.length-1) {
            return this.pop(idx);
        }
        if(idx === 0){
            return this.shift();
        }

        let prev = this.get(idx-1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;

    }
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for(let i=0;i<this.length;i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }


}
let list = new SinglyLinkedList();
list.push('hello');
list.push('bye');
list.push('nice');
list.push('very');
list.push('good');
console.log(list.remove(4))

console.log(list);