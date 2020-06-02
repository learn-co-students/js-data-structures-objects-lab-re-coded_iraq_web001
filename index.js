// Write your solution in this file!

let driver = {};
function updateDriverWithKeyAndValue(obj, key, value){
    let newOb = {...obj};
    newOb[key] = value;
    return newOb;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(obj, key){
  const newOb = {...obj};
  delete newOb[key];
  return newOb;
}

function destructivelyDeleteFromDriverByKey(obj, key){
  delete obj[key];
  return obj;
} 

