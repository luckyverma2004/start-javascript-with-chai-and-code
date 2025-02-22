// jo bhi ham block ke bhar declare karte hai vo global scope hai  
let a = 7000
const b = 20
var c = 30// hamesha hame var ko avoid karna hai

// ye block scope hai 
{
let a = 100
const b = 200
//console.log("Inner: ",a);

}

//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username = "lucky"

    function two(){
        const website = "youtube"
        //console.log(username)// ye global scope ka access le sakta hai but block scope ka access sirf ye block ke ander hi le sakta hai
        //console.log(website)
    }
   //console.log(website)// isme isne error de diya hai ki tum block scope ka access nhi le sakte ho but block scope parent scope (global scope) ka access le sakte ho

    two()
}

one()

if (true) {
    const username = "lucky"
    if (username === "lucky") {
        const website = " youtube"
        console.log(username + website);
        
    }
   // console.log(website) not access because its blockl scope
    
   //  console.log(username)ye execute ho jayega because isne access global scope se manga
    
}


//+++++++++++++++++++++++++ Inresting q +++++++++++
console.log(addone(5)); // isse uper bhi declare karenge to ye wala function access le sakta hai 

function addone(num) {
    return num + 1
}
//console.log(addone(5));// ager hum iss line ko upper bhi shift karte hai to vo run ho jayega

//console.log(addtwo(5));// cannot acces ka error mar diya 
  const addtwo = function(num){
    return num + 2
  }

  console.log(addtwo(5));// ager hum iss line ko upper bhi shift karte hai to vo run ho jayega agr hum iss line ko upper shift karenge(means declare uper) to ye nhi execute hoga
  


