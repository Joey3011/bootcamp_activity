//input
const var1 = document.getElementById("var1")
const var2 = document.getElementById("var2")
const changeVar1 = document.getElementById("changeVar1").readOnly = true
const changeVar2 = document.getElementById("changeVar2").readOnly = true

//radio
const operator = document.getElementsByName("operator");
const assignmentOperator = document.getElementsByName("assignmentOperator");
const addValue = document.getElementsByName("addValue");
//button
const viewOtput = document.getElementById("viewOutput")
const reset = document.getElementById("reset");


const letsGetItOn = (var1, var2) => {
    if(var1.value != '' && var2.value != ''){
        if(Number(var1.value) || Number(var2.value) || Number(var2.value) == 0 || Number(var2.value) == "0"){
            let num1 = Number(var1.value)
            let num2 = Number(var2.value)
            if(!operator[0].checked && !operator[1].checked && !operator[2].checked && !operator[3].checked && !operator[4].checked && !operator[5].checked && !operator[6].checked){
                alert("No operator selected")
            }
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
           }else{
            alert("Input entered is not a number")
        }
    }else{
        alert("input element for variable has no value")
    }

} 

viewOtput.addEventListener("click", () =>{
    letsGetItOn(var1, var2)
})

reset.addEventListener('click', () =>{
    addValue[0].checked = false
    addValue[1].checked = false
    assignmentOperator[0].checked = false
    assignmentOperator[1].checked = false
    assignmentOperator[2].checked = false
    assignmentOperator[3].checked = false
    operator[0].checked = false
    operator[1].checked = false
    operator[2].checked = false
    operator[3].checked = false
    operator[4].checked = false
    operator[5].checked = false
    operator[6].checked = false
    document.getElementById("var1").value = ""
    document.getElementById("var2").value = ""
    document.getElementById("changeVar1").value = ""
    document.getElementById("changeVar2").value = ""
    document.getElementById("changeVar1").readOnly = true
    document.getElementById("changeVar2").readOnly = true
})

const radioSelectVariable = (radio) => {  
    if(radio.value == "assignToVar1") {
        document.getElementById("changeVar1").readOnly = false
        document.getElementById("changeVar2").readOnly = true
        document.getElementById("changeVar2").value = ""
    }else if(radio.value == "assignToVar2"){
        document.getElementById("changeVar2").readOnly = false
        document.getElementById("changeVar1").readOnly = true
        document.getElementById("changeVar1").value = "";
    }
}


//add to var 1
const checkResultforVariable1 = (radio) =>{
    let changeVariableValue1 = Number(var1.value)
    let changeVariableValue2 = Number(var2.value)

    if(var1.value != "" && var1.value != ""){

        if(Number(var1.value) || Number(var2.value) || Number(var1.value) == 0 || Number(var2.value) == 0){
            if(!addValue[0].checked && !addValue[1].checked){
                alert("No item selected to which variable you want to add/change value")
                addValue[0].checked = false
                addValue[1].checked = false
                assignmentOperator[0].checked = false
                assignmentOperator[1].checked = false
                assignmentOperator[2].checked = false
                assignmentOperator[3].checked = false
            }else if(addValue[0].checked == true){
                if(document.getElementById("changeVar1").value == ""){
                    alert("input element for 'add value to variable 1' has no value") 
                    addValue[0].checked = false
                    addValue[1].checked = false
                    assignmentOperator[0].checked = false
                    assignmentOperator[1].checked = false
                    assignmentOperator[2].checked = false
                    assignmentOperator[3].checked = false
                    document.getElementById("changeVar1").readOnly = true
                    changeVar1.value = ""
                }else{
                    if(Number(document.getElementById("changeVar1").value) || Number(document.getElementById("changeVar1").value) == 0){
                        if(radio.value == "+=") {
                            document.getElementById("var1").value = changeVariableValue1 += Number(document.getElementById("changeVar1").value)
                        }else if(radio.value == "-="){
                            document.getElementById("var1").value = changeVariableValue1 -= Number(document.getElementById("changeVar1").value)
                        }else if(radio.value == "*="){
                            document.getElementById("var1").value = changeVariableValue1 -= Number(document.getElementById("changeVar1").value)
                        }else if(radio.value == "/="){
                            document.getElementById("var1").value = changeVariableValue1 -= Number(document.getElementById("changeVar1").value)    
                        }
                    }else{
                        alert("Input entered is not a number")
                    }
                }
                 
            }else if(addValue[1].checked == true){
                if(document.getElementById("changeVar2").value == ""){
                    alert("input element for 'add value to variable 2' has no value") 
                    addValue[0].checked = false
                    addValue[1].checked = false
                    assignmentOperator[0].checked = false
                    assignmentOperator[1].checked = false
                    assignmentOperator[2].checked = false
                    assignmentOperator[3].checked = false
                    document.getElementById("changeVar2").readOnly = true
                    changeVar1.value = ""
                }else{
                    if(Number(document.getElementById("changeVar2").value) || Number(document.getElementById("changeVar2").value) == 0){
                        if(radio.value == "+=") {
                            document.getElementById("var2").value = changeVariableValue2 += Number(document.getElementById("changeVar2").value)
                        }else if(radio.value == "-="){
                            document.getElementById("var2").value = changeVariableValue2 -= Number(document.getElementById("changeVar2").value)
                        }else if(radio.value == "*="){
                            document.getElementById("var2").value = changeVariableValue2 -= Number(document.getElementById("changeVar2").value)
                        }else if(radio.value == "/="){
                            document.getElementById("var2").value = changeVariableValue2 -= Number(document.getElementById("changeVar2").value)    
                        }
                    }else{
                        alert("Input entered is not a number")
                    }
                }
            }
        }else{
            alert("Input entered is not a number")
            addValue[0].checked = false
            addValue[1].checked = false
            assignmentOperator[0].checked = false
            assignmentOperator[1].checked = false
            assignmentOperator[2].checked = false
            assignmentOperator[3].checked = false
        }

    }else{
        alert("input element has no value") 
        addValue[0].checked = false
        addValue[1].checked = false
        assignmentOperator[0].checked = false
        assignmentOperator[1].checked = false
        assignmentOperator[2].checked = false
        assignmentOperator[3].checked = false
    }  
}




