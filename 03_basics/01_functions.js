// function myworld(){// ye parameters hai
//     console.log("L")
//     console.log("U")
//     console.log("C")
//     console.log("K")
//     console.log("Y")
// }

//myworld()// ye refrence hai

function addtwonumbers(number1 , number2){
    let result = number1 + number2
    return result// function ka rule hota hai ager tumne return declare kar diye uske bad function woek karta hi nhi hai
}
 const result = addtwonumbers(2,7)
 
 //console.log("result:", result);

 function loginerDetail (username){
    return `${username} just logged in`
 }
 //console.log(loginerDetail("lucky"));
 
 

function librarycoustomer (coustomer = "sam"){// agar aap value pass nhi kroge to bydefault value ka use karke ham undefiend se defiend value bna denge
    if (coustomer === undefined) {// ye if statement jab run hoga tab situation true hogi
        // iska dusra tarika hai likhna ka if(!coustomer){} Exclamation ka use karke
        //console.log("plese fill the form details");
        return
        
    }
    return `${coustomer} just joined library`
}
//console.log(librarycoustomer("lucky"));
//console.log(librarycoustomer())// agar koi value pass hi nhi kare to uska output***Undefiened*** ayega q for interview ** or agr bydefalut value pass kari hogi to vo vali value pass hogi
// agar hamne value pass karadi argument main  to jo hamne bydefalut value pass kari thi uski koi value nhi hogi or jo hamne pass kara parameters main bydefalut vo print hi nhi hogi



//***rest operator(...) */ for example
function calculatecartprice (num1){
return num1
}
//console.log(calculatecartprice(200));
// or agar hame 1 se jyada value pass karni hai to
//console.log(calculatecartprice(200,500,600,800));// 1 se jyada value pass karane ke liye rest operator ka use karte hai for example niche dekho

function calculatecartprice (...num1){// rest operator ka use karke ham 1 se jyada value ko pass kara sakte hai**** ye output aaray main dega
    return num1
}
   // console.log(calculatecartprice(200,500,600,800));

// practice q  jo menekare

function bunglowprice (...price){//for example main maine rest operator ka use kara hai
return price
}
//console.log(bunglowprice(200000000,3000000,5000000));

//******* It is a example of function with object*******/

//const user = {
//username: "lucky",
//price: 277
}
// yha ham object ko function ke through pass kar rahe hai
//function checkobject (user){
    //console.log(`username is ${user.username} and price is ${user.price}`);

}

//checkobject(user)

// yha object ko ham direct bhi pass kar sakte hai

// //checkobject({
//     username: "ram",
//     price: 200
// })


const myNewArray = [200,400,600,800]

function returnsecondvalue(getArray){
return getArray[1]
}

console.log(returnsecondvalue(myNewArray));
