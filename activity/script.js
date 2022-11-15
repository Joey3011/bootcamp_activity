// // A student must screenshot their codes even if the desired output is not achieved. This will ensure how we could keep up with the student’s learning curve.


let hobbies = ["Biking", "Mountain Climbing", "Swimming"]
let address =[
    {
        isMarried: true,
        houseNumber: "32",
        street: "Washington",
        city: "Lincoln",
        state: "Nebraska"
    }
     
]
let fname = prompt("Enter your first name");
let lname = prompt("Enter your last name");
let age = prompt("Enter your age");

const letsGetitON = (num1, num2, num3) => {
    
    if(num1 != "" || num2 != "" || num3 != ""){    
      if(Number(num1) | Number(num2) || !Number(num3)){
        alert("Name should be string and age shuld be number")
      }else{
        console.log(`My name is ${fname},  ${lname}, ${age} years of age`)
        console.log("This was printed inside function:")
        console.log(hobbies)
        console.log("This was printed inside function:")
        console.log(address)
      }
    }else{
        alert("invalid input. All field required!") 
    }
    return 
}
letsGetitON(fname,lname, age)


// // // Login attempt while loop version
// const loginAttempt = () => { 
//     let loggedin = false;
//     let attempt = 3;  
//     while(!loggedin && attempt > 0){
//         let user = prompt("Enter username")
//         let pwd = prompt("Enter password")
//         let username = "student@mail.com"
//         let password = "discovery"
//       if (user == username && pwd == password){
//         loggedin = true;
//         alert('Sucessfully logged in');
//       }else{
//         attempt --;
//         alert(`You have left ${attempt} attempt`);
//         if(attempt == 0){
//             alert('you are blocked');
//         }
//       }
//     }
//     return
// }
// loginAttempt()


// //for loop version
// const loginAttempt = () => {
//     var attempt = 2 // this will be considered as 3. Count starts when user prompted to login. when attempt failed user will be given 2 more attempt
//     for(attempt; attempt >= 0; attempt--){
//         let user = prompt("Enter username")
//         let pwd = prompt("Enter password") 
//         let username = "student@mail.com"
//         let password = "discovery" 
//         if (user == username && pwd == password){
//             alert('Sucessfully logged in');
//             break;
//         } else{
//             alert(`You have left ${attempt} attempt`);
//             if(attempt == 0){
//                 alert('you are blocked');
//             }
//         }     
//     }
//  return
// }
// loginAttempt()

//Nested if version
// const loginAttempt = () => {
//     var loggedin = false;
//     var attempt = 3
//     var user = prompt("Enter username")
//     var pwd = prompt("Enter password") 
//     var username = "student@mail.com"
//     var password = "discovery" 
//     if(user == username || pwd == password){
//         alert('Sucessfully logged in');
//         loggedin = true
//     }else{
//         if(!loggedin && attempt == 3){
//             alert(`You have left ${attempt -= 1} attempt`);
//             user = prompt("Enter username")
//             pwd = prompt("Enter password") 
//             if(!loggedin && attempt ==  2 && user != username || pwd != password){
//                 alert(`You have left ${attempt -= 1} attempt`);
//                 user = prompt("Enter username")
//                 pwd = prompt("Enter password") 
//                 if(!loggedin && attempt ==  1 && user != username || pwd != password){
//                     alert(`You have left ${attempt -= 1} attempt`);
//                     if(!loggedin && attempt >  1 && user != username || pwd != password){
//                         alert("No  more attempt/s remaining. Pls wait for an hour to login again..")
//                     }
//                 }else{
//                     alert('Sucessfully logged in');
//                     loggedin = true
//                 }

//             }else{
//                 alert('Sucessfully logged in');
//                 loggedin = true
//             }
//         }
//     }
// }

// loginAttempt()



