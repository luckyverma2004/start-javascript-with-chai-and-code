//********************* This in js ************************** */
const user = {
    username:"lucky",
    price: 999,

     Akshat : ()=>{
        console.log(`${this.username}, welcome to website`)// this main  vo currunt context ko refer karta hai or ham isme jo  scope{} ke ander hai usse hi access kar sakte hai 
        // console.log(this);// isko hum block ke andar print karayenge to vo ye batayega ke {} iske andr kya hai
        
    }
}
 user.Akshat()
// console.log(this.price)

// user.welcomeMessage()
//console.log(this);// or agar block ke bahar print karaya to empty dega output e.g ({})

// user.username = "sam"// yha hamne context ko change kar diya 
// user.welcomeMessage()// to iska output (sam,welcome to website) ye aayega because hamne currunt context change kar diya hai

function chai() {
    let username = "lucky"
    //console.log(this.username);// function ke andar this ka use hota hi nhi hai 
    // this ka use aap object main hi kar sakte ho ache se
    
}
chai ()

//+++++++++++++++++++ Arrow function in js +++++++++++++++++

 const raj = () =>{// it is a syntax of Arrow function
     let username = "lucky"
     console.log(this.username);
 }
//this ka use aap object main hi kar sakte ho ache se
// raj ()


//************ It is a Basis Arrow function example its called Explicit Arrow function jiske andar hum return ka use karenge***************  */
const addtwo = (num1,num2) => {
return num1+num2
}
//console.log(addtwo(4,7));

const addthree = (num1,num2,num3) => (num1+num2+num3)
console.log(addthree(4,5,6));// this is called implicit Arrow function jisme ham return ka use nhi karte hai or na {} ye wale bracket ka


const name = () => ({username:"lucky"})// object ko return karna hai to use parenthesis () main likhna padega
console.log(name());
