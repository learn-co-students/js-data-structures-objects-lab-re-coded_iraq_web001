// Write your solution in this file!
let driver={
  key:"driver"
}
function updateDriverWithKeyAndValue(driver,key,value){
 let newD = {...driver};
  newD[key] = value;
  return newD;
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
   driver[key] = value;
   return driver;
}

function deleteFromDriverByKey(driver,key){
  let newD = {...driver};
  delete newD[key];
  return newD;
}

function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver[key];
  return driver;
}