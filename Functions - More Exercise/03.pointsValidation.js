function pointsValidator(array) {
    let x1 = array[0];
    let y1 = array[1];
    let x2 = array[2];
    let y2 = array[3];
  
    let firstValidationNum = firstPointValidator(array);
    let secondValidationNum = secondPointValidator(array);
    let thirdValidationNum = thirdPointValidator(array);
  
    (firstValidationNum === Math.trunc(firstValidationNum) ? console.log(`{${x1}, ${y1}} to {0, 0} is valid`) : console.log(`{${x1}, ${y1}} to {0, 0} is invalid`));
    (secondValidationNum === Math.trunc(secondValidationNum) ? console.log(`{${x2}, ${y2}} to {0, 0} is valid`) : console.log(`{${x2}, ${y2}} to {0, 0} is invalid`));
    (thirdValidationNum === Math.trunc(thirdValidationNum) ? console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`) : console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`));
  
    function firstPointValidator(arr) {
      return Math.sqrt((Math.pow(Math.abs(0 - x1), 2)) + Math.pow(Math.abs(0 - y1), 2));
    }
  
    function secondPointValidator(arr) {
      return Math.sqrt((Math.pow(Math.abs(0 - x2), 2)) + Math.pow(Math.abs(0 - y2), 2));
    }
  
    function thirdPointValidator(arr) {
      return Math.sqrt((Math.pow(Math.abs(x2 - x1), 2)) + Math.pow(Math.abs(y2 - y1), 2));
    }
  }
  
  pointsValidator([3, 0, 0, 4]);
  