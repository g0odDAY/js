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
        if(!this.head) return undefined;
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
    shift(){
        // 배열의 길이가 0이라면 return undefined
        if(this.length === 0) return undefined;
        //현재 head값을 변수에 저장
        const tmp = this.head;
        //만약 길이가 1이라면 head,tail 둘다 null로 만들어라.
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            //head의 값을 저장한 변수의 next 값으로 대체한다
            this.head = tmp.next;
            //head의 prev 값을 null로 바꾼다
            this.head.prev = null;
            //
            tmp.next = null;
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
    get(idx){
        if(idx < 0 || idx >= this.length) return null;

        const half = this.length / 2;

        if(half >= idx){
            let cnt = 0;
            let current = this.head;
            while(cnt !== idx){
                current = current.next;
                cnt++;
            }
            return current;
        }else{
            let cnt = this.length-1;
            let current = this.tail;
            while(cnt !== idx){
                current = current.next;
                cnt--;
            }
            return current;
        }
    }
    set(idx,val){
        let node = this.get(idx);
        if(node !== null){
            node.val = val;
            return true;
        }
        return false;
    }
    insert(idx,val){
        if(idx < 0 || idx >= this.length) return false;
        if(idx === 0) return !!this.unshift(val);
        if(idx === this.length) return !!this.push(val);

        let preNode = this.get(idx-1);
        let afterNode = preNode.next;
        let newNode = new Node(val);

        newNode.next = afterNode;
        newNode.prev = preNode;
        preNode.next = newNode;
        afterNode.prev = newNode;

        this.length++;
        return true;
    }
    remove(idx){
        if(idx < 0 || idx >= this.length) return undefined;
        if(idx === 0) return this.shift();
        if(idx === this.length -1) return this.pop();

        const removedNode = this.get(idx);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }

}
const list = new DoublyLinkedList();
list.push(92);
list.push(50);
list.push(100);

console.log(list.remove(1))
console.log(list);