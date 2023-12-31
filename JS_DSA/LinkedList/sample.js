class Node{
    constructor(val){
        console.log(this);
        this.val = val,
        this.next=null
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
a.next = b;
b.next  =c;
console.log(a);

