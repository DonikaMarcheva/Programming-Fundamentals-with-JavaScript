function destinationMapper(data){
    let pattern=/(=|\/)(?<name>[A-Z][A-Za-z]{2,})\1/g;
    let destinations=[];
    let totalPoints=0;
    let matches=data.matchAll(pattern);
    for (const match of matches) {
        let destination=match.groups.name;
        destinations.push(destination);
        totalPoints+=destination.length;
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${totalPoints}`);

}
destinationMapper(("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="))
console.log("++++++++++++++++++");
destinationMapper(("ThisIs some InvalidInput"))