function browserHistory(obj, arr) {
    for (let nextActions of arr) {
        if (nextActions === "Clear History and Cache") {
            obj["Open Tabs"] = [];
            obj["Recently Closed"] = [];
            obj["Browser Logs"] = [];
        } else {
            let token = nextActions.split(' ')
            let action = token.shift();
            let site = token.join(" ");
            if (action === "Open") {
                obj["Open Tabs"].push(site);
                obj["Browser Logs"].push(nextActions);
            } else if (action === "Close") {
                if (obj["Open Tabs"].includes(site)) {
                    let index = obj["Open Tabs"].indexOf(site);
                    obj["Open Tabs"].splice(index, 1);
                    obj["Recently Closed"].push(site);
                    obj["Browser Logs"].push(nextActions);
                }
            }
        }
    }
    console.log(obj["Browser Name"]);
    console.log(`Open Tabs: ${obj["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${obj["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${obj["Browser Logs"].join(", ")}`);
}
browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

)