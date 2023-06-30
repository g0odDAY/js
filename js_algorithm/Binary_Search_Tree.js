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
}

const tree = new Binary_Search_Tree();
console.log(tree.insert(10));
console.log(tree.insert(5));
console.log(tree.insert(2));
console.log(tree.insert(6));
console.log(tree.insert(13));
console.log(tree.insert(16));
console.log(tree.insert(11));
console.log(tree.find(22));
console.log(tree.find(11));
console.log(tree.find(10));
console.log(tree);
