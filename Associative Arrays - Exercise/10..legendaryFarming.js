function legendaryFarming(input) {
    let keyMaterials = {
        shards: 0,
        fragments: 0,
        motes: 0
    };
    let junkMaterials = {};
    let searchedMaterial = "";
    let legendary = "";
    let inputArr = input.split(" ");

    for (let i = 0; i < inputArr.length; i += 2) {
        let quantity = Number(inputArr[i]);
        let material = inputArr[i + 1].toLowerCase();
        if (keyMaterials.hasOwnProperty(material)) {
            keyMaterials[material] += quantity;
        } else {
            if (!junkMaterials.hasOwnProperty(material)) {
                junkMaterials[material] = 0;
            }
            junkMaterials[material] += quantity;
        }
        if (keyMaterials[material] >= 250) {
            keyMaterials[material] -= 250;
            searchedMaterial = material;
            break;
        }
    }
    if (searchedMaterial === "shards") {
        legendary = "Shadowmourne";
    } else if (searchedMaterial === "fragments") {
        legendary = "Valanyr";
    } else {
        legendary = "Dragonwrath";
    }

    let sortedKeyMaterial = Object.entries(keyMaterials).sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1] - a[1]);
    let sortedJunkMaterials = Object.entries(junkMaterials).sort((a, b) => a[0].localeCompare(b[0]));

    console.log(`${legendary} obtained!`);
    for (let materialInfo of sortedKeyMaterial) {
        console.log(`${materialInfo[0]}: ${materialInfo[1]}`);
    }
    for (let materialInfo of sortedJunkMaterials) {
        console.log(`${materialInfo[0]}: ${materialInfo[1]}`);
    }
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')