class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class Binary_Search_Tree{
    constructor() {
        this.root = null;
    }
    insert(val){
        const newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(val === current.val) return undefined;
            if(current.val > val){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }else{
                    current = current.left;
                }
            }else if(current.val < val){
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }else{
                    current = current.right;
                }
            }
        }
    }
    find(val){
        if(this.root === null) return false;
        let current = this.root;

        while(current){
            if(val < current.val){
                current = current.left;
            }else if(val > current.val){
                current = current.right;
            }else{
                return true;
            }
        }
        return false;
    }
    BFS(){
        let result = [];
        let queue = [];
        let node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            result.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return result;
    }
}
const list = new Binary_Search_Tree();
list.insert(10);
list.insert(6);
list.insert(3);
list.insert(8);
list.insert(15);
list.insert(20);

console.log(list.BFS());
