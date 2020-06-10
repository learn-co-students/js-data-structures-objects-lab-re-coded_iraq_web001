// Write your solution in this file!
let driver = {name:'sam'}
function updateDriverWithKeyAndValue(driver,key,value){
  driver ={ ...driver}
  driver[key] = value

  return driver
}

updateDriverWithKeyAndValue(driver,'address', '11 Broadway')
function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){

  driver[key] = value

  return driver
}

destructivelyUpdateDriverWithKeyAndValue(driver,'address','11 Broadway')

function deleteFromDriverByKey(driver,key){
  const driver1 = Object.assign({}, driver);

  delete driver1[key];
  return driver1
}

deleteFromDriverByKey(driver,'name')
function destructivelyDeleteFromDriverByKey(driver,key){
  //const driver1 = Object.assign({}, driver);
//  return driver
  delete driver[key];
  console.log(driver)

  return driver




}
destructivelyDeleteFromDriverByKey(driver,'name')
