const name = "lucky"
const repocount = 50

//console.log(name  + repocount ); ye tarika old hai string define karne ka

console.log(`Hello my name is ${name} and my repocount is ${50} `);// ye new tarika hai string ko define karne ka

const gameName = new String ('lucky-lv-com')
// console.log(gameName[1]);// iska use hum string konse number par konsi hai jan sakte hai
// console.log(gameName.__proto__);// isse ham string ka prortotype pata chalta hai
// console.log(gameName.length);// isse hame hmari string ki length pata chalti hai
// console.log(gameName.toUpperCase());// ye value ko change kar deta hai heap & stack wala concept -- isne capital main convert kiya ---
// console.log(gameName.toLowerCase());// ye uper wale ka change opposite hai 
// console.log(gameName.charAt(2));// isse hame pata chalte hai konse number par konsa characture hai
// console.log(gameName.indexOf('k'));// ye uper wale ka ulta hai 
// console.log(gameName.slice(0,4));// ye batata hai ki tumari string 0 to 4 ke bich main kon kon se word hai--- ye range batata hai ----

const newstring = gameName.substring(0,4)// ye bi slice ki tarah hota hai range batata hai 
console.log(newstring);

const anotherstring = gameName.slice(-5,2)// slice main hi hum negative value use kar sakte hai 
console.log(anotherstring);// ye us range ki string ko hata deta hai iska output (lu)

// const newstringone = "  lucky  "
// console.log(newstringone);
// console.log(newstringone.trim());// ye string unnecessary space ko remove karta hai 
//---------------trim are two types start trim and end trim command 

const url = "https://lucky.com/lucky%20verma"
console.log(url.replace('%','@'));// is string ki method ka use karke hum string ke bich main kuch bhi replace kar sakte

console.log(url.includes('lucky'));// is method se hum string se puch bhi sakte hai --- true ya false main answer dega---

console.log(gameName.split('-')); // is method ke help se hum remove kar sakte hai kuch bhi string main

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"





