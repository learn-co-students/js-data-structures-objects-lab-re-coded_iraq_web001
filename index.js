// Write your solution in this file!
let driver={};
function updateDriverWithKeyAndValue(driverObj ,key ,value){
  let driverNew={...driverObj}
  driverNew[key]=value;
  return driverNew;
}

function destructivelyUpdateDriverWithKeyAndValue(driverObj ,key ,value){
  
  driverObj[key]=value;
  return driverObj;
}
function deleteFromDriverByKey(driverObj,key){
  let driverNew = Object.assign({},driverObj);
  delete driverNew[key];
  return driverNew;
}
function destructivelyDeleteFromDriverByKey(driverObj,key){
  delete driverObj[key];
  return driverObj;
}