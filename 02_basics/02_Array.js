const marvel_heroes = ["thor","spiderman","Ironman"]
const dc_heros = ["superman","flash","badman"]

//console.log(marvel_heroes)

// const newheroes = marvel_heroes.concat(dc_heros)//---concat operator---- ka use karke hum 2 array ko combine karke new array bna sakte hai 
// console.log(newheroes)

const newheroes = [...marvel_heroes,...dc_heros]//--- spread operator ---- ka use bhi hum hum 2 array ko combine karke new array bna sakte hai 
console.log(newheroes)

const anotherarry = [1,2,3,[4,5,6],7,[8,9,[10,11]],12]// agar esa kuch array aata hai 
const realanotherarry = anotherarry.flat(Infinity)// flat ka use karke hum us array ko shi format main kar sakte hai
console.log(realanotherarry);

console.log(Array.isArray("lucky"));// ye abhi array hai ya nhi ye pucha isse
console.log(Array.from("lucky"));// .from ki help se hum array main convert kar sakte hai//
console.log(Array.of({name: "lucky"}));
//-----------------question .of ------------------
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



