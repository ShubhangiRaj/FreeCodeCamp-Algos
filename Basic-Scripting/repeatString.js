function repeatStringNumTimes(str, num) {
    var emptyStr = "";
    if(num < 0){
      return emptyStr;
    }
    else{
      for(var i = 0; i < num; i ++){
        emptyStr = str + emptyStr;
      }
    }
    return emptyStr;
}

repeatStringNumTimes("abc", 3);