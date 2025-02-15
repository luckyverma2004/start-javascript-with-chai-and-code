//const tinderuser = new Object ()
const tinderuser = {}
//console.log(tinderuser);
// for assume tum dusre aap ke liye bna rahe ho 
const regularuser = {
email:"luckyverma2004@gmail.com",
fullname: {
    username: {
        firstname: "lucky",
        lastname: "verma",
    }
}

}
//console.log(regularuser.fullname.username);

const obj1 = {1: "a", 2: "b"}// ye 2 object ko marge karne wala q hai
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1 , obj2}// ye method ka use hum array main bhi karte the
//const obj3 = Object.assign({},obj1,obj2)// or ye tarika hai object ko marge karneka with object method but iska use hame bhout kam karna hai
const obj3 = {...obj1,...obj2}// isse ham kehte hai spread method jiska use karke ham object ko combine karte hai***or iska use hame hamesha karna hai***
//console.log(obj3);

tinderuser.id = "123abc"
tinderuser.name = "lucky"
tinderuser.isLoggedIn = false

// console.log(tinderuser);
// console.log(Object.keys(tinderuser));// isse ham keys ko print kar sakte hai
// console.log(Object.values(tinderuser));// isse ham value ko print kar sakte hai
// console.log(Object.entries(tinderuser));// isse ham entries ko print kar sakte hai
//console.log(tinderuser.hasOwnproperty('isLoggedIn')); ** is method se ham puch sakte hai ki question jo ki vo answer dega true and false main

//****** object ko destructure karne ka tarika*****

const course = {
    coursename: "javascript in hindi",
    price: "999",
    courseInstructor:"hitesh sir"
}


const {courseInstructor:Instructor} = course // ye method hai object ko define karne ka with de structure
console.log(Instructor);// or ager pure name nhi likhna ho to : ye laga kar name change karlo or usse fir ham print bhi kar sakte hai

//*****api(jason) ke bare main normal information*******/

[
    {},
    {},
]







