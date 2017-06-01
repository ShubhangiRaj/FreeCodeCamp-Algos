function pairElement(str) {
 	var strToArr = str.split("");
	var newArr = [];

	for(var i = 0; i<strToArr.length; i++){
		if(strToArr[i] === "A"){
			newArr.push([strToArr[i], "T"]);
		}
		if(strToArr[i] === "C"){
			newArr.push([strToArr[i], "G"]);
		}
		if(strToArr[i] === "G"){
			newArr.push([strToArr[i], "C"]);
		}
		if(strToArr[i] === "T"){
			newArr.push([strToArr[i], "A"]);
		}
	}
	return newArr;
}
pairElement("GCG");
