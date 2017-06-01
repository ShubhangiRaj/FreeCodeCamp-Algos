function sumAll(arr) {
  	var num1 = arr[0];
	var num2 = arr[1];

	var newArr = [];

	var result = 0;

	if(num1 > num2){
		var temp;
		temp = num1;
		num1 = num2;
		num2 = temp;
	}

	for(var i = num1; i<= num2; i++){
		newArr.push(i);	
	}
	console.log(newArr);
	
	for(var j = 0; j<newArr.length ;  j++){
		result += parseInt(newArr[j]);
	}
	return result;
	
	
}

sumAll([10, 5]);