//Remove blanks - create a function that, given a string returns all of that strings content removing the blanks

function removeEmpties(arr){
    var words = arr.split(' ');
    return words.join("");
}
removeEmpties("Pl ayTha tFun kyMu sic White bou");

// Digits Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

function digits(only){
    var removeAlp = [];
    //loop through array
    for(var x = 0; x < only.length; x++){
        if(x !== "^[a-zA-Z0-9_.-]*$"){
        removeAlp = removeAlp+1;
        }
    }
    return removeAlp;
}
digits("1T5WL71gt");

// AcronymsCreate a function that, given a string, returns the string’s acronym (first letters only, capitalized). Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 

function acronyms(arr){
    var stubbed = '';
    var words = arr.split('');
    for(var x = 0; x < words.length; x++){
        if(words[x]!=""){
            stubbed += words[x][0]
        }
    }
    return stubbed.toUpperCase()
    }
    console.log(acronyms('Here we go again......'))
//Output everything is capitalized and the words aren't removed

// COUNT NON SPACES Accept a string and return the number of non-space characters found in the string. 
//For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

function nonSpaces(arr){
    var space = removeEmpties(arr);
    //for(var t = 0; arr.length>x; x++){
        //if(arr[t] == ' ')
        //arr.removeEmpties[x];
    //}
    return space.length;
}
console.log(nonSpaces('What are you running from...'))

/// Remove Shorter Strings Given a string array and value (length), remove any strings shorter than the length from the array.

function removeShort(arr, val){
    for(var x = arr.length - 1; x >=0; x--){
        if(arr[x].length<val){
            for(var t = x; t<arr.length-1; t++){
                arr[t]= arr[t+x];
            }
            arr.pop()
            //remove(arr[x]);
        }
        return arr;
    }
}


