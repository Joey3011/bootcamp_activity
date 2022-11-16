const pushButton = document.getElementById("pushButton")
const emptyButton = document.getElementById("emptyButton")
const peekButton = document.getElementById("peekButton")
const input = document.getElementById("input")
const stack_item = document.getElementsByClassName("stack-item")


pushButton.addEventListener("click", () => {
    let inputValue = input.value.toString()
    let stackItem = []
    var top = 0;  
    if(inputValue == ""){
        alert("Pls. enter a value")
      }else{
        stackItem.push(document.getElementById("input").value)
       for(let element of stack_item){
        if(element.innerHTML == ""){
            element.innerHTML = stackItem
            break;
        }
       }
       
    }

})


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

//ASSIGNMENT: Compute the student average by accessing the declared ojects

//CLUE: We can use to compute the average manually or using for loop
        

const averageGrade = (arr) => {
    const newArray = []
    arr.forEach(grade => {
        let newGrade = {
          "Student": grade.studentId,
          "Average Grade" : (grade.Q1 + grade.Q2 + grade.Q3 + grade.Q4) / 4
        }
        newArray.push(newGrade)
    })
   return newArray
}
let result = averageGrade(studentGrades)
console.log(result)







