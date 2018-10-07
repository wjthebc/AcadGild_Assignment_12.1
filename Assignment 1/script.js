 function counterReducer(actionType, counter){
  //increments by 1 if action type = INC
  if(actionType === "INC"){
    var n = counter;
    n++;
    return n;
    }
  //decrements by 1 if action type = DSC
  if(actionType === "DSC"){
    var n = counter;
    n--;
    return n;
    }
}
