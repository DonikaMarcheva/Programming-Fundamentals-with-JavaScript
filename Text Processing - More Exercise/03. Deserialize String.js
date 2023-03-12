function deserializeString(input) {
    let text = '';
    let indexesObg = {};
    for (let entry of input) {
        let [value, indexesData] = entry.split(':');
        if (value === 'end') {
            break;
        } else {
            let indexesArr = indexesData.split('/');
            for (let index of indexesArr) {
                indexesObg[index] = value;
            }
        }
    }
    for (let data in indexesObg) {
        text += indexesObg[data];
    }
    console.log(text)
}
deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']
)