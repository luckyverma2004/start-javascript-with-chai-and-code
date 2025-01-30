const score = 400
//console.log(score);

const balance = new Number(197)
//console.log(balance);

// console.log(balance.toString().length);//iss method ka use karke number ko string main convert kar sakte hai
// console.log(balance.toFixed(3));// iss method ka use karke number ke 00 laga sakte for example - (100.00) jitne zero lagna hai utna number to fixed ke bad lokhna hai 

const otherNumber = 123
//console.log(otherNumber.toPrecision(3));// ye precious value hi leta string main se jitni apne valu mangenege utni hi ye pricious value dega 

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-In'));

//++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));// ye negative value ko positive banata hai
// console.log(Math.round(4.6));// ye hamesha exact value dega 4 ya to 5 point main nhi deta 
// console.log(Math.ceil(4.2));// ye hamesha badi value deta hai ager value main point ke bad kich bhi likha hai to ye purani value se badi value hi dega
// console.log(Math.floor(4.5));// ye hamesh choti value dega
// console.log(Math.min(1,5,6,12));// ye minimum value deta hai
// console.log(Math.max(7,8,9,12,45));// ye hamesha maximum value hi deta hai 

console.log(Math.random());// ye metrhod hamesha 0 and 1 ki bich main value dega vo bhi decimal
console.log(Math.random() * 10 + 1 );
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.random(Math.random()* (max - min + 1)) + min ) 












