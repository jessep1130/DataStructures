class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d; 

const linkedListFind = (head, target) => {
    let current = head; 
    while (current !== null) {
        if (current.val === target){
            return true; 
        }
        current = current.next;
    } return false; 
};

linkedListFind(a, "c")

