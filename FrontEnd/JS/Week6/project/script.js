const entry = document.getElementById("entry")
const form = document.getElementById("form")
const ul = document.getElementById("todo-list")
const alert = document.querySelector(".alert")


const submitBtn = document.querySelector(".submit-btn")
const cancelBtn = document.querySelector(".cancel-btn")
const editBtn = document.querySelector(".edit-btn")


let editedElement = null

console.log(submitBtn , cancelBtn , editBtn)
function displayAlert(message , className) {

    alert.innerText = message 
    alert.classList.add(className)

    setTimeout(() => {

        alert.innerText = "" 
        alert.classList.remove(className)

    } ,1500 )

}


function deleteItem (e) {
    e.target.parentElement.remove()
    displayAlert("One Item Has bee Removed" , "alert-success")
}

function checkItem (e) {
    const liElement = e.target.parentElement 
    const status = liElement.classList.toggle("liChecked")
    e.target.innerText = status ?  "uncheck" : "check"
}
function editItem (e) {
    submitBtn.classList.add("d-none")
    editBtn.classList.remove("d-none")
    cancelBtn.classList.remove("d-none")

    const pTag = e.target.previousElementSibling

    editedElement = pTag
    console.log(pTag)

    entry.value = pTag.innerText

    const actions = document.querySelectorAll("i")
    actions.forEach((ele) => {
        ele.classList.add("d-none")
    })
    // console.log(actions)

}

form.addEventListener("submit" , (e) => {
    e.preventDefault()
    const li = document.createElement("li")
    li.classList.add("list-item")

    const pTag = document.createElement("p")
    const value = entry.value
    if (value) {
    pTag.innerText = value
    pTag.classList.add("text")

    const editI = document.createElement("i")
    editI.classList.add("bx")
    editI.classList.add("bxs-edit")
    editI.innerText = "edit"
    editI.addEventListener("click" , editItem)


    const checkI = document.createElement("i")
    checkI.classList.add("bx")
    checkI.classList.add("bx-check")
    checkI.innerText = "check"
    checkI.addEventListener("click" , checkItem)

    const trashI = document.createElement("i")
    trashI.classList.add("bx")
    trashI.classList.add("bxs-trash")
    trashI.innerText = "delete"
    trashI.addEventListener("click" , deleteItem)


    li.append(pTag)
    li.append(editI)
    li.append(checkI)
    li.append(trashI)

    ul.append(li)

    displayAlert( "One Item Has Been Added"  ,"alert-success" )


    entry.value = null

    }else {
        displayAlert("No Data Provided"  , "alert-danger")
    }

})


editBtn.addEventListener("click" , (e) => {
    // TODO : handle empty value 
    editedElement.innerText = entry.value 
    restoreDefault()
// TODO : Alert
})

function restoreDefault() {
    submitBtn.classList.remove("d-none") 
    editBtn.classList.add("d-none") 
    cancelBtn.classList.add("d-none") 

    const actions = document.querySelectorAll("i")
    actions.forEach((ele) => {
        ele.classList.remove("d-none")
    })
    entry.value = null
    editedElement = null
}

cancelBtn.addEventListener("click" , restoreDefault)


// TODO : Handle Clear button 



// window.open("https://www.google.com" , "_blank" , "width=500,height=400")
// window.close()

// console.log(window.screen.height)
// console.log(window.screen.width)
// console.log(window.screen.availHeight)
// console.log(window.screen.availWidth)
// console.log(window.innerWidth)
// console.log(window.innerHeight)

// console.log(window.location.href)
// console.log(window.location.pathname)
// console.log(window.location.hostname)
// console.log(window.location.protocol)
// window.location.href = "https://www.google.com"


// window.history.back()
// window.history.forward()