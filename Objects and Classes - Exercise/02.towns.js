function towns(array) {
    let townInfo = {};

    for (let info of array) {
        // let infoLine=info.split(' | ');
        // let townName=infoLine[0];
        // let latitude=infoLine[1];
        // let longitude=infoLine[2];

        let [townName, latitude, longitude] = info.split(' | ');
        townInfo.town = townName;
        townInfo.latitude = Number(latitude).toFixed(2);
        townInfo.longitude = Number(longitude).toFixed(2);
        console.log(townInfo)
    }

}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)