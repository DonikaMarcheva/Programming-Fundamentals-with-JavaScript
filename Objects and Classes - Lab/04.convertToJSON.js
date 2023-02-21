function convertToJSON(name, lastName, hairColor) {
    let res = {
        name,
        lastName,
        hairColor
    }
    let resJSON = JSON.stringify(res);
    console.log(resJSON)
}
convertToJSON('George', 'Jones', 'Brown')