
const driver={}
function updateDriverWithKeyAndValue(driver='sam', key, value){
  return (Object.assign({},driver,{[key]:value}))
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
 
  return driver;
}
function deleteFromDriverByKey(driver, key){
  const obj = Object.assign({}, driver);

  delete obj[key];

  return obj;
}
function destructivelyDeleteFromDriverByKey(driver, key){
   delete driver[key];

  return driver;
}
console.log(updateDriverWithKeyAndValue({name:"sam"}, "addres", "value"))