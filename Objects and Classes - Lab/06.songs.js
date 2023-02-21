function songs(array) {
    let songCount = array.shift();
    let searchedType = array.pop();
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songsList = [];
    for (let songDiscription of array) {
        let token = songDiscription.split('_');
        let songType = token[0];
        let songName = token[1];
        let songTime = token[2];
        let song = new Song(songType, songName, songTime);
        songsList.push(song);
    }
    if (searchedType === "all") {
        for (let el of songsList) {
            console.log(el.name);
        }
    } else {
        let filtered = songsList.filter((i) => i.type === searchedType);
        for (let el of filtered) {
            console.log(el.name)
        }
    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])
