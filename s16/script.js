// let userInput = prompt("Enter your age");

// let eligibility = (age) => {
//     if(age < 18){
//         return "Minor"
//     }else{
//         if(age >= 18 && age <= 60){
//             return "Pwede pa"
//         }else{
//             return "Stop na"
//         }
//     }
// }

// console.log(eligibility(userInput))

const checkOuput = document.getElementById("proceed")
const reset = document.getElementById("reset")
const reset_loop_output = document.getElementById("reset_loop_output")
const userInput = document.getElementById("inputNum")
const output = document.getElementById("output")

let eligibility = (userInput) => {
  
    if(userInput.value == ""){
        return "Please input inside the box"
    }else{
            if(!Number(userInput.value)){
                return "Unexpected Input"
            }else{
                if(userInput.value % 2 === 0){
                    return "odd"
                }else if(userInput.value % 2 === 1){
                    return "even"
                }else{
                    return "Not odd nor even"
                }
            }
    }
}


checkOuput.addEventListener('click',  () => {
    output.innerHTML = eligibility(userInput)
    userInput.value = ""
})

reset.addEventListener('click',  () => {
    output.innerHTML = ""
    userInput.value = ""
})



const mgaMarites = ["Joey", " " ,"Manuel", " " ,"Justine"]

const activityNestedLoop = (arr) => {
 
    for(let i = 0; i < arr.length; i += 1){

        for(let j =0; j < arr[i].length; j += 1){
            console.log(arr[i][j])
         
        }  
    }
return arr   
}

activityNestedLoop(mgaMarites)




console.log("hello nested");

//Nested IFs
//An If Statement that is the target of another if or else. 

// function eligibility (age) {
//     if (age < 18)
//     {
//         return ("Minor ka pa, child labor yan if ever");
//     }
//     else
//     {
//         //NESTED IF EXAMPLE
//         if (age >= 18 && age <= 60){
//             return ("Aba pwede ka pa mag work, ayihii sasahod na siya");
//         }
//         else 
//         {
//             return ("Tanders ka na, pension na need mo");
//         }
//     }
// }

// let userInput = prompt ("Enter your age");
// console.log(eligibility(userInput));

//Exercise 1: Nested IF
/*

Create a JavaScript code that will determine if the input type is even or odd.

MAIN GOAL:
Perform a Nested If for this scenario.
Enclose inside the function.
When a user input a word, it will display “Unexpected Input”
When a user inputs none, it will display “Please input inside the box”.
When a user inputs a valid number, it will display even or odd.


*/
// function oddEven(num){
//     if(isNaN (num) || typeof parseInt (num) !== "number"){
//         //isNan - determines whether a values is NaN (not a number) or a number
//         return `Unexpected Input`;
//     }

//     else if (num === '') {
//         return "Please input inside the box";
//     }

//     else {
//         if (num % 2 == 0)
//         {
//             return ("Even Number");
//         }
//         else {
//             return ("Odd Number");
//         }
//     }
// }

// let userInput = prompt ("Give Me a Number");
// console.log(oddEven(userInput));

//NESTED LOOPS
//A loop that is placed to another loop.

/*
SYNTAX 
for (init; condition; increment/decrement)
{
    //create an inner loop
    for (init; condition; increment/decrement)
    {
        //statement of an inner loop
    }

    //statement of an outer loop
}

*/

//Example 1: Using For Loop

// for (let i=0; i <= 2; i++)
// {
//     console.log("-Outer Loop");
//     for (let j=0; j<=3; j++)
//     {
//         console.log("---Inner Loop");
//     }
// }

// //Example 2: Using While Loop
// let i=0;
// while (i <= 2)
// {
//     console.log("-outer loop");
//     i++;

//     let j = 0;
//     while (j <=3 ) 
//     {
//         console.log("---inner loop");
//         j++;
//     }
// }

//Nested Loops in an Array

// function multiplyNumbers (arr) {
//     let product = 1;
//     //creating an outer loop
//     for (let k=0; k<arr.length; k++)
//     {
//         //creating an inner loop
//         for (let l=0; l<arr[k].length; l++)
//         {
//             //create a statement for the inner loop
//             product *= arr[k][l];
//         }
//     }
//     //statement of an outer loop
//     //to know the answer
//     console.log(product);
//     return product;
// }

// multiplyNumbers([
//     [1,2],
//     [3,4],
//     [5,6,7]
// ]);

/*

MAIN GOAL:
Perform a Nested Loop for this scenario.
Include an array with elements.
Ensure that names are included together the spelled name.


*/

// const names = ["Karen", "Marites", "Marisol"];

// for (let i=0; i<names.length; i++)
// {
//     //outer loop displayed the names inside the array
//     console.log(`My name is ${names[i]}`);
//     for (let j=0; j<names[i].length; j++)
//     {
//         //inner loop that spells the names inside the array
//         console.log(`Spells ${names[i][j]}`);
//     }
// }




