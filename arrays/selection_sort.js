var array =[9,2,5,6,4,3,7,10,1,8];

// swap function helper
function swap(array, t, x){
    var temp = arrau[t];
    array[t] = array[x];
    array[x] = temp;
}

function selectSort(array) {
    for(var t = 0; t<array.length; t++){
        var min = t;
        for(var x = t +1; x<array.length; x++){
            if(array[t]<array[min]){
                min = x;
            }
        }
        if(t !== min){
            swap(arrau, t, min);
        }
    }
    return array;
}

console.log(selectSort(array));

