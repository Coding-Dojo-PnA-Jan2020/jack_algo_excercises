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

var sLine= new SingleList();
    var first = list.push("person number " );
    for(var x = 1; x<500; x++){
        sLine.push('person number ');
    }sLine.print();
    
console.log('There are ' + list.contains(first));

var myList = new SingleList();
myList.add(5);
myList.add(7);
myList.add(11);
myList.add(666);
myList.displayValues();
console.log(myList.length());
console.log(myList);