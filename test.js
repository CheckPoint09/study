/* let options = {
    bobik: 1,
    botinok: false,
    team: ["pidary", "raki", "gavnoedy"],
    mmr: "12k"
};

for (let i in options) {
    console.log('Svoistvo ' + i + ' imeet znachenije ' + options[i]);
}

console.log(Object.keys(options));

console.log(options[5]); */

//console.log(typeof(options[key]));
 let arr = ["suka", 1, "blyad", 3];

 /* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  } */
arr.forEach(function(item, i, mass) {
    console.log(i + " :" + item + " Масива:" + mass);
}); 

console.log(typeof(mass));
console.log(typeof(item));
console.log(typeof(i));
// console.log(typeof(i));