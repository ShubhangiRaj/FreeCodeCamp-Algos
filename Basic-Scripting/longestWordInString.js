function findLongestWord(str) {
	var strToArr = str.split(" ");

	var largestStrLen = 0;
	for(var i = 0; i< strToArr.length; i++){
		if(strToArr[i].length > largestStrLen){
			largestStrLen = strToArr[i].length;
		}
	}
	return largestStrLen;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
