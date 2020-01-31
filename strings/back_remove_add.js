class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class SingleList{
    constructor(){
        this.head = null;
    }
    isEmpty(){
        return this.head === null;
    }
    addFront(val){
        var newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }
    addBack(value){
        var newNode = new Node(value);
        var current = this.head;
        if(this.isEmpty()){
            this.addFront(value);
            return;
        }
    }
    removeBack(){
        var valueToReturn = this.head.value;
        if(node != null){
            if(this.node.next == null){
                this.head = null;
            } else {
                while(this.node.next.next != null){
                    node = node.next;
                }
                this.node.next = null;
            }
            return this;
        }    
    }
}