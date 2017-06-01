function titleCase(str) {
  	var lowerCaseStr = str.toLowerCase();
	var strToArr = lowerCaseStr.split(' ');

	for(var i = 0; i<strToArr.length; i++){
		strToArr[i] = strToArr[i].charAt(0).toUpperCase() + strToArr[i].slice(1);
	}
	var newStr = strToArr.join(' ');
	return newStr;
}

titleCase("I'm a little tea pot");