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
    addFrony(val){
        var newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }
    displayValues(){
        var current = this.head;
        while(current !== null){
            console.log(current.value);
            current = current.next;
        }
    }
    min(){
        var node = this.head;
        var min = node.val;
        while (node != null) {
            if(node.val < min){
                min = node.val;
            }
            node = node.next;
        }
        return min;
    }
    max(){
        var node = this.head;
        var max = node.val;
        while (node != null) {
            if(node.val > min){
                max = node.val;
            }
            node = node.next;
        }
        return max;
    }
    ave(){
        var node = this.head;
        var count = 0;
        var sum = 0;
        while(node != null){
            count +=1;
            sum += node.val;
            node = node.next;
        }
        return sum/count;
    }
}


var newList = new SingleList();

for(var x = 1; x <30; x++){
    newList.push(x);
}

console.log('list' + newList.displayValues());
console.log('min' + newList.min());
console.log('max' + newList.max());
console.log('avg' + newList.ave());