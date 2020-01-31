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
    //remove first node
    removeFirstNo(){
        var valueToReturn = this.head.value;
        this.head = this.head.next;
        return valueToReturn;
    }
    displayValues(){
        var current = this.head;
        while(current !== null){
            console.log(current.value);
            current = current.next;
        }
    }
    addBack(value){
        var newNode = new Node(value);
        var current = this.head;
        if(this.isEmpty()){
            this.addFrony(value);
            return;
        }
    }
    length(){
        var count = 0;
        var runner = this.head;
        while(runner != null){
            count ++;
            runner = runner.next;
        }
        return count;
    }
    contains(value){
        var tade = this.head;
        while(tade != null){
            if(tade.value ==value){
                return true;
            }
            tade = tade.next
        }
        return false;
    }
}

var diplayList = new SingleList();

for(var x = 0; x < 25; x++){
    diplayList.push('Person' + x);
}

console.log(diplayList.contains());