function diffArray(arr1, arr2) {
  	var newArr = [];
	var concatArr = arr1.concat(arr2); // [1,2,3,5,1,2,3,4,5]
	
	for(var i = 0; i<concatArr.length; i++){
		if(arr1.indexOf(concatArr[i]) === -1 || arr2.indexOf(concatArr[i]) === -1){
			newArr.push(concatArr[i]);
		}
	}
	return newArr;

}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);