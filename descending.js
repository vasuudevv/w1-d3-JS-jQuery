qTeams = {aaiec: 400,
    aaiwc: 60,
    qai: 200,
    poc: 100,
    gtm: 50,
    hr: 10
    };

let sortedArray = Object.entries(qTeams).sort((a,b) => b[1]-a[1]); //convert object into array
let sortedObj = Object.fromEntries(sortedArray);  //convert key-value pair of array into object
let finalArray = sortedArray.map(ele => ele[0]);

console.log(Object.keys(sortedObj));
console.log(finalArray);