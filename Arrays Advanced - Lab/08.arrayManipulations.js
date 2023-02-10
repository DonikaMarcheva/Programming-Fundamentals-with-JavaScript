function arrayManipulation(array) {
    let manipulatedInput=array
    .shift()
    .split(' ')
    .map(Number);
   for(let i=0; i<array.length;i++){
    let command=array[i];
    let elementsOfCommand=command.split(' ');
    switch (elementsOfCommand[0]){
        case "Add": 
        manipulatedInput=add(manipulatedInput,Number(elementsOfCommand[1]));
        break;
        case "Remove":
            manipulatedInput=removeNumber(manipulatedInput,Number(elementsOfCommand[1]));
            break;
            case "RemoveAt":
                manipulatedInput=removeAtIndex(manipulatedInput,Number(elementsOfCommand[1]));
                break;
                case "Insert":
                    manipulatedInput=insertAtIndex(manipulatedInput,Number(elementsOfCommand[1]),Number(elementsOfCommand[2]));
                    break;
    }
   }
   console.log(manipulatedInput.join(' '));

    function add(input, num) {
        let newArr = input.push(num)
        return input;
    }
    function removeNumber(input, num) {
        for (let i = 0; i < input.length; i++) {
            if (input[i] === num) {
                let removedNum = input.splice(i, 1);
            }
        }
        return input;
    }
    function removeAtIndex(input, num) {
        let removedNum= input.splice(num, 1);
        return input;
    }
    function insertAtIndex(input, num, index) {
        let newInsert= input.splice(index, 0, num);
        return input;
    }
}
arrayManipulation(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
)