const var1 = document.getElementById("var1")
const var2 = document.getElementById("var2")
const viewOtput = document.getElementById("viewOutput")
const operator = document.getElementsByName("operator");

const additionVar1 = document.getElementById("additionVar1");
const additionVar2 = document.getElementById("additionVar2");
const subtractionVar1 = document.getElementById("subtractionVar1");
const subtractionVar2 = document.getElementById("subtractionVar2");
const multiplicationVar1 = document.getElementById("multiplicationVar1");
const multiplicationVar2 = document.getElementById("multiplicationVar2");
const divisorVar1 = document.getElementById("divisorVar1");
const divisorVar2 = document.getElementById("divisorVar2");

const varNum1 = document.getElementById("num1")
const varNum2 = document.getElementById("num2")
const varNum3 = document.getElementById("num3")
const varNum4 = document.getElementById("num4")

const letsGetItOn = (var1, var2) => {
    if(var1.value != '' && var2.value != ''){
        if(!Number(var1.value) || !Number(var2.value)){
            alert("Input entered is not a number")
           }else{
            let num1 = Number(var1.value)
            let num2 = Number(var2.value)

            for (let radio of operator) {
                if (radio.checked) {
                    if(radio.value == "==") {
                        alert(`Is ${num1} equal to ${num2} = ${num1 == num2}`)
                    }else if(radio.value == "!="){
                        alert(`Is ${num1} not equal to ${num2} = ${num1 != num2}`)
                    }else if(radio.value == "<"){
                        alert(`Is ${num1} less than ${num2} = ${num1 < num2}`)
                    }else if(radio.value == ">"){
                        alert(`Is ${num1} greater than ${num2} = ${num1 > num2}`)
                    }else if(radio.value == "<="){
                        alert(`Is ${num1} less than equal ${num2} = ${num1 <= num2}`)
                    }else if(radio.value == ">="){
                        alert(`Is ${num1} greater than equal ${num2} = ${num1 >= num2}`)
                    }else if(radio.value == "!=="){
                        alert(`Is ${num1} Strictly Not equal to ${num2} = ${num1 !== num2}`)
                    }
                    break;
                }    
            }
        }
    }else{
        alert("input element for variable has no value")
    }

} 

//add to var 1
additionVar1.addEventListener("click", () => {
    if(var1.value != '' && var2.value != ''){
        if(varNum1.value != ''){
            //start
            if(!Number(varNum1.value)){
                alert("Input entered is not a number")
            }else{
                let num1 = Number(var1.value)
                let num2 = Number(var2.value)
                let add = Number(varNum1.value)
                for (const radio of operator) {
                    if (radio.checked) {
                        if(radio.value == "==") {
                            alert(`Is ${num1 += add} equal to ${num2} = ${num1 == num2}`)
                        }else if(radio.value == "!="){
                            alert(`Is ${num1 += add} not equal to ${num2} = ${num1 != num2}`)
                        }else if(radio.value == "<"){
                            alert(`Is ${num1 += add} less than ${num2} = ${num1 < num2}`)
                        }else if(radio.value == ">"){
                            alert(`Is ${num1 += add} greater than ${num2} = ${num1 > num2}`)
                        }else if(radio.value == "<="){
                            alert(`Is ${num1 += add} less than equal ${num2} = ${num1 <= num2}`)
                        }else if(radio.value == ">="){
                            alert(`Is ${num1 += add} greater than equal ${num2} = ${num1 >= num2}`)
                        }else if(radio.value == "!=="){
                            alert(`Is ${num1 += add} Strictly Not equal to ${num2} = ${num1 !== num2}`)
                        }
                        break;
                    }
                }
            }
            //end
        }else{
            alert("input element has no value")
        }   
    }else{
        alert("input element for variable has no value")
    }
}) 


//add to var 2
additionVar2.addEventListener("click", () => {
    if(var1.value != '' && var2.value != ''){
        if(varNum1.value != ''){
            //start
            if(!Number(varNum1.value)){
                alert("input entered is not a number")
            }else{
                let num1 = Number(var1.value)
                let num2 = Number(var2.value)
                let add = Number(varNum1.value)
                for (const radio of operator) {
                    if (radio.checked) {
                        if(radio.value == "==") {
                            alert(`Is ${num1} equal to ${num2 += add} = ${num1 == num2}`)
                        }else if(radio.value == "!="){
                            alert(`Is ${num1} not equal to ${num2 += add} = ${num1 != num2}`)
                        }else if(radio.value == "<"){
                            alert(`Is ${num1} less than ${num2 += add} = ${num1 < num2}`)
                        }else if(radio.value == ">"){
                            alert(`Is ${num1} greater than ${num2 += add} = ${num1 > num2}`)
                        }else if(radio.value == "<="){
                            alert(`Is ${num1} less than equal ${num2 += add} = ${num1 <= num2}`)
                        }else if(radio.value == ">="){
                            alert(`Is ${num1} greater than equal ${num2 += add} = ${num1 >= num2}`)
                        }else if(radio.value == "!=="){
                            alert(`Is ${num1} Strictly Not equal to ${num2 += add} = ${num1 !== num2}`)
                        }
                        break;
                    }
                }
            }
            //end
        }else{
            alert("input element has no value")
        }
    }else{
        alert("input element for variable has no value")
    }
}) 

subtractionVar1.addEventListener("click", () => {
    if(var1.value != '' && var2.value != ''){
        if(varNum2.value != ''){
            //start
            if(!Number(varNum2.value)){
                alert("input value is not a number")
            }else{
                let num1 = Number(var1.value)
                let num2 = Number(var2.value)
                let add = Number(varNum2.value)
                for (const radio of operator) {
                    if (radio.checked) {
                        if(radio.value == "==") {
                            alert(`Is ${num1 -= add} equal to ${num2} = ${num1 == num2}`)
                        }else if(radio.value == "!="){
                            alert(`Is ${num1 -= add} not equal to ${num2} = ${num1 != num2}`)
                        }else if(radio.value == "<"){
                            alert(`Is ${num1 -= add} less than ${num2} = ${num1 < num2}`)
                        }else if(radio.value == ">"){
                            alert(`Is ${num1 -= add} greater than ${num2} = ${num1 > num2}`)
                        }else if(radio.value == "<="){
                            alert(`Is ${num1 -= add} less than equal ${num2} = ${num1 <= num2}`)
                        }else if(radio.value == ">="){
                            alert(`Is ${num1 -= add} greater than equal ${num2} = ${num1 >= num2}`)
                        }else if(radio.value == "!=="){
                            alert(`Is ${num1 -= add} Strictly Not equal to ${num2} = ${num1 !== num2}`)
                        }
                        break;
                    }
                }
            }
            //end
        }else{
            alert("input element has no value")
        }
    }else{
        alert("input element for variable has no value")
    }
}) 
//subtract to var 2
subtractionVar2.addEventListener("click", () => {
    if(var1.value != '' && var2.value != ''){
        if(varNum2.value != ''){
            //start
            if(!Number(varNum2.value)){
                alert("input value is not a number")
            }else{
                let num1 = Number(var1.value)
                let num2 = Number(var2.value)
                let add = Number(varNum2.value)
                for (const radio of operator) {
                    if (radio.checked) {
                        if(radio.value == "==") {
                            alert(`Is ${num1} equal to ${num2 -= add} = ${num1 == num2}`)
                        }else if(radio.value == "!="){
                            alert(`Is ${num1} not equal to ${num2 -= add} = ${num1 != num2}`)
                        }else if(radio.value == "<"){
                            alert(`Is ${num1} less than ${num2 -= add} = ${num1 < num2}`)
                        }else if(radio.value == ">"){
                            alert(`Is ${num1} greater than ${num2 -= add} = ${num1 > num2}`)
                        }else if(radio.value == "<="){
                            alert(`Is ${num1} less than equal ${num2 -= add} = ${num1 <= num2}`)
                        }else if(radio.value == ">="){
                            alert(`Is ${num1} greater than equal ${num2 -= add} = ${num1 >= num2}`)
                        }else if(radio.value == "!=="){
                            alert(`Is ${num1} Strictly Not equal to ${num2 -= add} = ${num1 !== num2}`)
                        }
                        break;
                    }
                }
            }
            //end
        }else{
            alert("input element has no value")
        }
    }else{
        alert("input element for variable has no value")
    }
}) 

multiplicationVar1.addEventListener("click", () => {
    if(var1.value != '' && var2.value != ''){
        if(varNum3.value != ''){
            //start
            if(!Number(varNum3.value)){
                alert("input value is not a number")
            }else{
                let num1 = Number(var1.value)
                let num2 = Number(var2.value)
                let add = Number(varNum3.value)
                for (const radio of operator) {
                    if (radio.checked) {
                        if(radio.value == "==") {
                            alert(`Is ${num1 *= add} equal to ${num2} = ${num1 == num2}`)
                        }else if(radio.value == "!="){
                            alert(`Is ${num1 *= add} not equal to ${num2} = ${num1 != num2}`)
                        }else if(radio.value == "<"){
                            alert(`Is ${num1 *= add} less than ${num2} = ${num1 < num2}`)
                        }else if(radio.value == ">"){
                            alert(`Is ${num1 *= add} greater than ${num2} = ${num1 > num2}`)
                        }else if(radio.value == "<="){
                            alert(`Is ${num1 *= add} less than equal ${num2} = ${num1 <= num2}`)
                        }else if(radio.value == ">="){
                            alert(`Is ${num1 *= add} greater than equal ${num2} = ${num1 >= num2}`)
                        }else if(radio.value == "!=="){
                            alert(`Is ${num1 *= add} Strictly Not equal to ${num2} = ${num1 !== num2}`)
                        }
                        break;
                    }
                }
            }
            //end
        }else{
            alert("input element has no value")
        }
    }else{
        alert("input element for variable has no value")
    }
}) 
//multiply to var 2
multiplicationVar2.addEventListener("click", () => {
    if(var1.value != '' && var2.value != ''){
        if(varNum3.value != ''){
            //start
            if(!Number(varNum3.value)){
                alert("input value is not a number")
            }else{
                let num1 = Number(var1.value)
                let num2 = Number(var2.value)
                let add = Number(varNum3.value)
                for (const radio of operator) {
                    if (radio.checked) {
                        if(radio.value == "==") {
                            alert(`Is ${num1} equal to ${num2 *= add} = ${num1 == num2}`)
                        }else if(radio.value == "!="){
                            alert(`Is ${num1} not equal to ${num2 *= add} = ${num1 != num2}`)
                        }else if(radio.value == "<"){
                            alert(`Is ${num1} less than ${num2 *= add} = ${num1 < num2}`)
                        }else if(radio.value == ">"){
                            alert(`Is ${num1} greater than ${num2 *= add} = ${num1 > num2}`)
                        }else if(radio.value == "<="){
                            alert(`Is ${num1} less than equal ${num2 *= add} = ${num1 <= num2}`)
                        }else if(radio.value == ">="){
                            alert(`Is ${num1} greater than equal ${num2 *= add} = ${num1 >= num2}`)
                        }else if(radio.value == "!=="){
                            alert(`Is ${num1} Strictly Not equal to ${num2 *= add} = ${num1 !== num2}`)
                        }
                        break;
                    }
                }
            }
            //end
        }else{
            alert("input element has no value")
        }
    }else{
        alert("input element for variable has no value")
    }
}) 
divisorVar1.addEventListener("click", () => {
    if(var1.value != '' && var2.value != ''){
        if(varNum4.value != ''){
            //start
            if(!Number(varNum4.value)){
                alert("input value is not a number")
            }else{
                let num1 = Number(var1.value)
                let num2 = Number(var2.value)
                let add = Number(varNum4.value)
                for (const radio of operator) {
                    if (radio.checked) {
                        if(radio.value == "==") {
                            alert(`Is ${num1 /= add} equal to ${num2} = ${num1 == num2}`)
                        }else if(radio.value == "!="){
                            alert(`Is ${num1 /= add} not equal to ${num2} = ${num1 != num2}`)
                        }else if(radio.value == "<"){
                            alert(`Is ${num1 /= add} less than ${num2} = ${num1 < num2}`)
                        }else if(radio.value == ">"){
                            alert(`Is ${num1 /= add} greater than ${num2} = ${num1 > num2}`)
                        }else if(radio.value == "<="){
                            alert(`Is ${num1 /= add} less than equal ${num2} = ${num1 <= num2}`)
                        }else if(radio.value == ">="){
                            alert(`Is ${num1 /= add} greater than equal ${num2} = ${num1 >= num2}`)
                        }else if(radio.value == "!=="){
                            alert(`Is ${num1 /= add} Strictly Not equal to ${num2} = ${num1 !== num2}`)
                        }
                        break;
                    }
                }
            }
            //end
        }else{
            alert("input element has no value")
        }
    }else{
        alert("input element for variable has no value")
    }
}) 
//divide to var 2
divisorVar2.addEventListener("click", () => {
    if(var1.value != '' && var2.value != ''){
        if(varNum4.value != ''){
            //start
            if(!Number(varNum4.value)){
                alert("input value is not a number")
            }else{
                let num1 = Number(var1.value)
                let num2 = Number(var2.value)
                let add = Number(varNum4.value)
                for (const radio of operator) {
                    if (radio.checked) {
                        if(radio.value == "==") {
                            alert(`Is ${num1} equal to ${num2 /= add} = ${num1 == num2}`)
                        }else if(radio.value == "!="){
                            alert(`Is ${num1} not equal to ${num2 /= add} = ${num1 != num2}`)
                        }else if(radio.value == "<"){
                            alert(`Is ${num1} less than ${num2 /= add} = ${num1 < num2}`)
                        }else if(radio.value == ">"){
                            alert(`Is ${num1} greater than ${num2 /= add} = ${num1 > num2}`)
                        }else if(radio.value == "<="){
                            alert(`Is ${num1} less than equal ${num2 /= add} = ${num1 <= num2}`)
                        }else if(radio.value == ">="){
                            alert(`Is ${num1} greater than equal ${num2 /= add} = ${num1 >= num2}`)
                        }else if(radio.value == "!=="){
                            alert(`Is ${num1} Strictly Not equal to ${num2 /= add} = ${num1 !== num2}`)
                        }
                        break;
                    }
                }
            }
            //end
        }else{
            alert("input element has no value")
        }
    }else{
        alert("input element for variable has no value")
    }
}) 

viewOtput.addEventListener("click", () =>{
    letsGetItOn(var1, var2)
})

