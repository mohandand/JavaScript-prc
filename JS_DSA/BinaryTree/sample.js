class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }

}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');

a.left = b
a.right= c;
c.left = f;
b.left = d;
b.right = e;

console.log(a)
function inverttree(root){
    if(!root) return [];
    let stack = [root];
    while(stack.length>0){
        let current = stack.pop();
        if(!current){
            [current.left, current.right] = [current.right, current.left];
            stack.push([current.left, current.right])
        }
    }
    console.log(a)
}

console.log(inverttree(a));