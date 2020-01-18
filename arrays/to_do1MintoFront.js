//1
var values = [1,2,3,5,7,10];
function pushFront(array, value){
    for(var x = array.length; x>0; x --){
        var current = array[x -1];
        array[x] = current;
        console.log(array);
    }
    array[0] = value;
}

console.log(pushFront(values, 99));

//2 

function popFront(array){
    var returnValue = array[0];
    for(var x =1; x< array.length; x++){
        var currentVal = array[x];
        array[x - 1] = currentVal;
    }
    array.pop();
    console.log(array);
    return returnValue;
}
console.log(popFront(values));
//pushFront.shift('sam');

console.log(pushFront);

//3 Insert at....
function insertAt(array, postion, value){
    for(var x = array.length; x> position; x--){
        var currentValue =array[x -1];
        array[x] = currentValue;
        console.log(array);
    }
    array[position] = value;
    return array
}
console.log(insertAt(values, 5, 999))

//3 Remove At 
function removeAt(array, position){
    var returnValue = array[postion];
    for(var x = postion; x< array.length; x++){
        var currentVal = array[x+1];
        array[x] = currentVal;
    }
    array.pop();
    console.log('removeAt', array);
    return returnValue;
}

//min to front

function min2Front(array){
    var mindex =0;
//find min value in array
for (var x = 1; x<array.length; x ++){
    var currentVal = array[x];

    if(currentVal < array[mindex]){
        mindex = x;
        console.log('found a new min', mindex);
        }
    }
    return pushFront(array, removeAt(array,mindex));
}

var values = [23,65,756,-9,7];

console.log(min2Front(values));