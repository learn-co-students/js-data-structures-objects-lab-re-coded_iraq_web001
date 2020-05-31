// Write your solution in this file!

const driver = {
  name : 'Sam',
}; 

function updateDriverWithKeyAndValue(driver,key,value) {
 const newDriver = Object.assign({},driver);
  newDriver.address = '11 Broadway';
  return newDriver
  ;
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
  driver.address = '12 Broadway';
  return driver;
}

function deleteFromDriverByKey(driver,name){
  const newDriver = Object.assign({},driver);
  delete newDriver.name;
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver,name){
  delete driver.name;
  return driver;
}
