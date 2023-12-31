class Node{
    constructor(node){
        this.val = node;
        this.left=null;
        this.right=null;
    }
}

const a =new Node('a')
const b = new Node('b')
const c = new Node('c')
a.left = b
a.right = c


function isSame(p,q){
    if(!p && !q) return true;
    if(!p || !q) return false;
    if(p.val !== q.val) return false;
    let left = isSame(p.left,q.left);
    let right = isSame(p.right,q.right)
    return left&&right;
}

var isSameTree = function(p, q) {
    const s = [[p,q]];
    while (s.length) {
        const [p,q] = s.pop();
        if (!p && !q) return true;
        if (!p || !q) return false;
        if (p.val !== q.val) return false;
        if (p.left || q.left) s.push([p.left, q.left]);
        if (p.right || q.right) s.push([p.right, q.right]);
    }
    return true;
};
console.log(isSameRec(a,a));