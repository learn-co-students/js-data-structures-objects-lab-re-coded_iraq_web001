// Write your solution in this file!

let driver = {
  name: "mike",
  address: "Erbil",
};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, { [key]: value });
}
destructivelyUpdateDriverWithKeyAndValue(driver, "address", "12 Broadway");


function deleteFromDriverByKey(driver, key) {
  let newObj = Object.assign({}, driver);
  delete newObj[key];
  return newObj;
}
let newDriver = deleteFromDriverByKey(driver, "address");


function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}