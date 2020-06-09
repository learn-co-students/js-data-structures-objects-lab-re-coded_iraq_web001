// Write your solution in this file!
let driver ={
}
function updateDriverWithKeyAndValue(driver,key,value) {
 const nwDriver= Object.assign({},driver,{[key]:value});
   return nwDriver;
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = Object.assign(driver,{[key]:value})
  // newDriver[key] = value
  return newDriver ;
}
 
function deleteFromDriverByKey(driver,key){
  const deleteDrive = Object.assign({},driver)
   delete deleteDrive[key];
   return deleteDrive;
}
function destructivelyDeleteFromDriverByKey(driver,key){

  delete driver[key];
  return driver;
}


updateDriverWithKeyAndValue(driver,"name",'Sam')
 
//const newDriver = nondestructivelyUpdateObject(driver, 'address', ' 11 Broadway ');
