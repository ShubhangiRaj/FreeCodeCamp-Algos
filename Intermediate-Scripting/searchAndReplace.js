function myReplace(str, before, after) {
	var strToArr = str.split(" ");
	
	for(var i = 0; i<strToArr.length; i++){
		if(before === strToArr[i]){
			var replaced = strToArr.splice(i, 1, after);
		}
	}
  
    var newStr = strToArr.join(" ");
    return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");