// function uniteUnique(arr) {
// 	var arr1 = arguments[0];
// 	var arr2 = arguments[1];
// 	var arr3 = arguments[2];

// 	var concatArr = arr1.concat(arr2, arr3);

// 	var newArr = [];

// 	for(var i = 0; i<concatArr.length; i++){
// 		if(newArr.indexOf(concatArr[i]) === -1){
// 			newArr.push(concatArr[i]);
// 		}
// 	}
// 	return newArr;
// }
function uniteUnique(arr1, arr2, arr3) {
  // Creates an empty array to store our final result.
  var finalArray = [];

  // Loop through the arguments object to truly made the program work with two or more arrays
  // instead of 3.
  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    // Loops through the array at hand
    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);