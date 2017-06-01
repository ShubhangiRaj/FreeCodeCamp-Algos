function factorialize(num) {
	var result = num;
  
  	if(num < 1){
    	return 1;
  	}
  
  	for(var i = 1; i < num; i++){
    	result = i*result;
  	}
  	return result;
}

factorialize(5);