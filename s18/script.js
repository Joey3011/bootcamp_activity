// console.log("connected");

// let gino = {
//     firstGrading: 95,
//     subject: "English",
//     teachers: ["Jelly", "Jem", "Joey"],
//     isStudent:true,
//     school: {
//         city: "Manila",
//         country: "Philippines"
//     },
//     classmates: [
//         {
//             name: "Dahl",
//             batch: "26"
//         },

//         {
//             name: "John Paul",
//             batch: "5"
//         },

//         {
//             name: "Jhyx",
//             batch: "1"
//         }
//     ],

//     description: function() {
//         return `${this.subject}: ${this.firstGrading}`
//     }
// }

/*
    Q: How do we access properties in an object?
    //through dot (.) notation
    //through bracket ([""]) notation
    //objectName.propertyName

*/

// console.log(gino.firstGrading);//95
// //objectName.propertyName

// console.log(gino.subject); //English

// console.log(gino[`isStudent`]);
// //true - returns a boolean

// console.log(gino[`teachers`]);
// //array of teachers

// console.log(gino.teachers);
// //even using dot notation it will still return the desired output

// console.log(gino.teachers[1]);//outputs the index element Jem

// console.log(gino.school); //objects

// console.log(gino.school.city); //Manila
// console.log(gino.school[`city`]);
// console.log(gino [`school`][`city`]);

// //Q: How to access school's country?
// console.log(gino.school.country);
// console.log(gino [`school`] [`country`]);

// //Q: How to access the 2nd object of classmates?
// console.log(gino[`classmates`][1]);

// console.log(gino[`classmates`][1][`batch`]);


// //Q: How do we access the function in the object?
// console.log(gino.description);
// //it displays the defined function but it did not exective the function.

// console.log(gino.description());

// //Q: How to add property in an object?
// console.log(gino.semester); //undefined
// gino.semester = "first";

// console.log(gino);

// //Removing a property in an object
// delete gino.semester;
// console.log(gino);

const pushButton = document.getElementById("pushButton")
const emptyButton = document.getElementById("emptyButton")
const peekButton = document.getElementById("peekButton")
const input = document.getElementById("input")
const stack_item = document.getElementsByClassName("item")
const stackItem = []

pushButton.addEventListener("click", () => {
    let inputValue = input.value
    let arr = []
    if(inputValue == ""){
        alert("Pls. enter a value")
      }else{
        arr.push(inputValue)
        for(let i = stack_item.length-1; i >= 0; i--){
                if(stack_item[i].innerHTML == ""){
                    stack_item[i].innerHTML = arr
                    stackItem.push(stack_item[i].innerHTML.toString())
                    alert(`'${arr}' is the item that was added to stack using 'push()'`)
                    break;
                }
        }
       console.log(stackItem)
    } 
})

emptyButton.addEventListener('click', () => {
    if(stackItem == ""){
        alert("Stack is empty!")
    }else{
        const response = confirm(`Are you sure you want to remove the item at the last position?`)
        if(response){
            let remove = stackItem.pop()
            alert(`'${remove}' is the item at the last position and is now being remove using 'pop()'`)
            for(let i = 0; i < stack_item.length; i += 1){
                if(stack_item[i].innerHTML == remove){
                    stack_item[i].innerHTML = ''
                    break
                }
            }
            console.log(stackItem)
        }
    }
})

peekButton.addEventListener('click', () => {
    let peeked = stackItem.peek()
    if(peeked){
        alert(`Item '${peeked}' was the last element of an array that is recently added and was returned using 'peek()'`)
    }
})

Array.prototype.peek = function () {
    if (this.length === 0) {
      alert("Stack is empty!")
    }
    return this[this.length - 1]
};



const studentGrades = [
    {
        studentId: 1,
        Q1: 89.3,
        Q2: 91.2,
        Q3: 93.3,
        Q4: 89.8
    },
    {
        studentId: 2,
        Q1: 69.2,
        Q2: 71.8,
        Q3: 76.5,
        Q4: 81.9
    },
    {
        studentId: 3,
        Q1: 95.7,
        Q2: 91.4,
        Q3: 90.7,
        Q4: 85.6
    },
    {
        studentId: 4,
        Q1: 86.9,
        Q2: 74.5,
        Q3: 83.3,
        Q4: 86.1
    },
    {
        studentId: 5,
        Q1: 70.9,
        Q2: 73.8,
        Q3: 80.1,
        Q4: 81.8
    },
];

// ASSIGNMENT: Compute the student average by accessing the declared ojects

// CLUE: We can use to compute the average manually or using for loop
        

// const averageGrade = ((arrOfGrade) => {
//     const newArray = []
//         arrOfGrade.forEach((grade) => {
//             let newGrade = {
//                 ID: grade.studentId,
//                 Q1: grade.Q1,
//                 Q2: grade.Q2,
//                 Q3: grade.Q3,
//                 Q4: grade.Q4,
//                 "Student's Average Grade" : (grade.Q1 + grade.Q2 + grade.Q3 + grade.Q4) / (arrOfGrade.length - 1)
//             }
//             newArray.push(newGrade)
//         })
//     return newArray
// })
// let result = averageGrade(studentGrades)
// console.log(result)


//Object Constructor
// let hero = {
//     name: "Angela",
//     level: 1,
//     role: "support",
//     health: 100,
//     attack: 50,
//     mana: 100,

//     tackle: function() {
//         console.log(`This hero tackled hero`);
//         console.log(`Target hero's health is now reduced to heroHealth`);
//     },

//     faint: function(){
//         console.log(`Hero fainted`);
//     }
// }

// console.log(hero);

// //Q: What if we want to create a multiple objects with the same properties? Would you prefer creating 1 object each? No, it will take too long

// //To solve this dilemma, Object Constructor will be a good use.

// //Object Constructor - serves as a blueprint of our objects.
// // Objects created using "this" constructor will inherit what are the function properties and methods set by this function.

// //Q: What are the steps in creating an Object Constructor

// //Step 1: Create a template or blueprint
// function Pokemon (name, lvl, hp){
//     this.name = name;
//     this.level = lvl;
//     this.health = hp * 2;
//     this.attack = lvl;

//     this.tackle = function (target){
//         console.log(target);

//         console.log(`This ${this.name} tackled ${target.name}`);

//         console.log(`${target.name}'s health is now reduced to ${target.health - this.attack}`);
//     };

//     this.faint = function(){
//         console.log(`${this.name} fainted!`);
//     }
// }

// //Step 2: Initialize an Object with arguments
// let pikachu = new Pokemon ("Pikachu", 5, 50);
// let charizzard = new Pokemon ("Charizzard", 8, 40)

// console.log(pikachu);
// console.log(charizzard);

// //Step 3: Execute the property
// //For this example we execute the tackle property of Pikachu object
// console.log(pikachu.tackle(charizzard));
// console.log(pikachu.tackle(charizzard));
// console.log(pikachu.tackle(charizzard));

// function profile (firstName, lastName, nickName, job, hobby){
//     this.fullName = firstName + " " + lastName;
//     this.nickName = nickName;
//     this.job = job;
//     this.hobby = hobby;

//     this.checkInfo = function (info){
//         console.log(`${this.fullName}, also known by others by the name of ${info.nickName}, job is ${info.job} and likes ${info.hobby}`);
//     };
// }

// let viewInfo = new profile ("James", "Bond", "James", "Secret agent", "Eating");
// console.log(viewInfo)
// console.log(viewInfo.checkInfo(viewInfo))



// const car = [
//     {
//         brand: "Kotseng Bukot",
//         model:  "Nayntin Kopung-kopung",
//         price:  10000
//     },
//     {
//         brand: "Nissan",
//         model:  "Fortuner",
//         price:  10000
//     }
// ]


// console.log(car.brand == "nissan")


let users = [
	{
		username: "kimdhyn",
		email: "dahyun@gmail.com",
		password: "dahyunTwiceu"
	},
	{
		username: "jenKimBP",
		email: "jennieSolo@gmail.com",
		password: "dududuJennie",
	},
	{
		username: "lisaBP",
		email: "lisaManoban@gmail.com",
		password: "lisaIsHere"
	}
];


// let userName = prompt("Please enter username or email")
// let password = prompt("Please enter password")

// const log = (user, pwd) =>{
//     let loggin = users.find((checkLog) =>{
//         if(user != checkLog.username || pwd != checkLog.password){
//             return false
//        }else{
//             return true
//         }
//     })
//     if(!loggin) return alert(`Login failed. Wrong credentials`)

//     alert(`Thank you for logging in`) 

//     return loggin
// }

// console.log(log(userName, password))

let userName = prompt("Please enter username or email")
let password = prompt("Please enter password")

const log = (userOrEmail, pwd) =>{
    let loggin = users.find((checkLog) =>{
        if(userOrEmail !== checkLog.username && userOrEmail !== checkLog.email || pwd !== checkLog.password){
            return false
       }else{
            return true
        }
    })
    if(!loggin) return alert(`Login failed. Wrong credentials`)

    alert(`Thank you for logging in`) 
    
    return loggin
}

console.log(log(userName, password))