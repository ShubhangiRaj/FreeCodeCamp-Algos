function reverseString(str) {
  	var strToArr = str.split("");
  	var newArr = strToArr.reverse();
  	var newStr = newArr.join("");
  	return newStr;
}

reverseString("hello");