function convertToObject(jsonData){
let newObj=JSON.parse(jsonData);
for(let key of Object.keys(newObj)){
    console.log(`${key}: ${newObj[key]}`)
}
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')