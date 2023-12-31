class Node{
    constructor(val){
        this.val = val,
        this.next=null
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
a.next = b;
b.next  =c;
b.next = a;

console.log(a)
function delNode(node){
    node.val = node.next.val;
    node.next = node.next.next
}

console.log(delNode(a))
console.log(a)


