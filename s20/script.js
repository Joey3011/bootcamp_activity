console.log("Script connected")
const checkName = document.getElementById("checkName")
const nameInput = document.getElementById("nameInput")
const section = document.getElementById("section")
const add = document.getElementById("add")
const check = document.getElementById("check")
const find = document.getElementById("find")
const view = document.getElementById("view")
const remove = document.getElementById("remove")
const students = [] // variable to store array
// function add students
const addStudent = (arr, sName, studSec) =>{
    if(sName != "" && studSec != ""){
        let found = arr.find((findName) => findName.studentName.toLowerCase() === sName.toLowerCase())
        if(found){
            console.log(`${sName} is already listed`)
        }else{
            students.push({studentName: sName, Section: studSec})
            console.log(`${sName} was added to student's list`)
            nameInput.value = ""
            section.value = ""
        }
    }else{
        alert("Invalid input")
        nameInput.value = ""
    }
    return 
}
// function count number of students
const countStudent = () =>{
    if(students != ""){
        console.log(`There are total number of ${students.length} students in the student's list.`)
    }else{
        alert("No enrollee yet!")
    }
}
// function view student
const viewStudent = (arr) => {
    if(students != ""){
        arr.forEach(element => {
            return element
        });
    }else{ 
        alert("No enrollee yet!")
    }
    return arr
}
// function search or find student
const checkStudent = (arr) =>{
    let input = checkName.value
    if(students != ""){
        if(input != ""){
            let found = arr.find((findName) => findName.studentName.toLowerCase() === input.toLowerCase())
            if(found){
                console.log(`${checkName.value} is an enrollee`)
            }else{
                console.log(`${checkName.value} is not an enrollee`)
            }
        }else{
            alert("Invalid input") 
        }
    }else{
        alert("No enrollee yet!")
    }
    return arr
}
// function remove
const removeStudent = (arr) => {
    let input = checkName.value // users input
    if(students != ""){
        if(input != ""){
            let indexOfObject = ''
            let foundRecord = false
                for(let i = 0; i < arr.length; i += 1){ // use for loop to get index
                   if(arr[i].studentName.toLowerCase() == input.toLowerCase()){ // check if input match the student name
                    indexOfObject = arr.indexOf(arr[i]) // index
                    console.log(indexOfObject)
                    foundRecord = true
                    break;
                   }
                }
                if(foundRecord){
                    arr.splice(indexOfObject, 1) //Remove student using splice
                    console.log(`${input} index of ${indexOfObject} from students list was remove`) // student that is remove
                    console.log(students) // remaining student
                }else{
                    console.log(`No record to delete for ${input}`)
                }
        }else{
            alert("Invalid input")
        }
    }else{
        alert("No enrollee yet!") 
    }
   return 
}
remove.addEventListener('click', ()=>{
    removeStudent(students)
})

find.addEventListener('click', () => {
    checkStudent(students)
})
view.addEventListener('click', () =>{
    console.log(viewStudent(students))
})
check.addEventListener('click', () =>{
    countStudent()
})
add.addEventListener('click', () =>{
    addStudent(students, nameInput.value, section.value)
})

section.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault()
      add.click()
    }
});