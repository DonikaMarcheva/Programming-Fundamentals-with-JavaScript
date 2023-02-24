function dictionary(array) {
    let newArr = [];
    let newObj = {};
    array.forEach(element => {
        let obj = JSON.parse(element);
        for (const key in obj) {
            newObj = {
                term: key,
                definition: obj[key]
            }
            let newTerm=newObj.term;
            let newDefinition=newObj.definition;
            let objWithDuplicateTerm=newArr.find(el=>el.term===newTerm);
            if(objWithDuplicateTerm){
                objWithDuplicateTerm.definition=newDefinition;
            }else{
            newArr.push(newObj);
            }
        }
    });
    newArr.sort((a, b) => a.term.localeCompare(b.term));
    for (const newObj of newArr) {
        console.log(`Term: ${newObj.term} => Definition: ${newObj.definition}`)
    }

}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )