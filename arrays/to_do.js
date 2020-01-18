//reverse

function reverseArr(arr){
    var temp = [];
    for(var x = 0; arr.length/2>x; x++){
        temp = arr[x];
        arr[x] = arr[arr.length - 1-x];
        arr[arr.length - 1-x] = temp;
    }
    return arr;
}
reverseArr[2,1,2,3,4];

// Rotating
function rotateArr(arr, ShifyBy){
    var rotate = ShifyBy%arr.length;
    if(rotate<0){
        rotate = rotate+arr.length;
    }
    for(var i = arr.length -1; i>=0; i--){
        arr[i +rotate]=arr[i];
    }
    for (var x = rotate; x >0; x--){
        arr[x -1] = arr[arr.length-1];
        arr.pop();
    }
    return arr;
}
rotateArr([1,-7,4, true, 'Wyatt'],5);

// filter
function filts(min, max, arr){
    for(var x = arr.length-1; x>0; x--){
        if(arr[x]<min || arr[x]>max){
            for(var t = x; t<arr.length; t++){
                arr[x] =arr[t+1];
            }
            arr.pop();
        }
    }
    return arr;
}
filts([1,25,7, true],6);

// comcats
function concats(arrX,arrY){
    var newArr = [];
    for(var x = 0; arrX.length>x ; x++){
        newArr.push(arrX[x]);
    }
    for(var y = 0; arrY.length>y ; y++){
        newArr.push(arrY[y]);
    }
    return newArr;
}

//skyline

function skyline(arr){
    var seeEm = 0;
    var newArr = [];

    for(var x = 0; arr.length; x++){
        if(arr[x]> seeEm){
            newArr.push(arr[x]);
            visible = arr[x];
        }
        return newArr;
    }
}