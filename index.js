// Write your solution in this file!
let driver = {}
function updateDriverWithKeyAndValue(obj, key , value)
{
    const newObj = { ...obj };
    newObj[key] = value;
    return newObj;
}
function destructivelyUpdateDriverWithKeyAndValue(obj , key ,value)
{
    obj[key] = value;
    return obj;
}
function deleteFromDriverByKey(obj , key)
{
    const newo = {... obj}
    delete newo[key]
    return newo;
}
function destructivelyDeleteFromDriverByKey(obj , key)
{
    delete obj[key]
    return obj;
}
