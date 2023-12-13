/// Dom manipulation 
// // getElementById

// const heading = document.getElementById("main-heading")
// console.log(heading)


// // getElementByClassName

// const lists = document.getElementsByClassName("list-item")
// const container = document.getElementsByClassName("container")

// console.log(lists.length)

// for (let i = 0 ; i < lists.length ; i ++) {
//     console.log(lists[i])
// }

// for (let list of lists) {
//     console.log(list)
// }

// console.log(container)

// getElementByTagName
// const lists = document.getElementsByTagName("li")
// console.log(lists) 
1

// querySelector 

// const element = document.querySelector("ul")
// const element = document.querySelector(".container")
// const element = document.querySelector("ul li")
// const element = document.querySelectorAll("ul li")


// const elements = document.querySelectorAll("ul li")
// let num = Number(prompt("What element you want to be black")) - 1
// elements[num].style.backgroundColor = "black"

// const liElement = document.querySelectorAll(".list-item")
// // liElement.innerText = "Hamada"
// // liElement.innerHTML = "<h1>Hamada</h1>"
// // liElement.textContent = "<h1>Hamada</h1>"
// console.log(liElement[2].innerText)
// console.log(liElement[2].innerHTML)
// console.log(liElement[2].textContent)

// // style 
// const elements = document.querySelectorAll("*")
// for (let ele of elements) {
//     ele.style.margin = "0px"
//     ele.style.padding = "0px"
//     ele.style.boxSizing = "border-box"
// }

// // const body = document.querySelector("body")
// const body = document.body
// console.log(body)
// body.style.display = "flex"
// body.style.justifyContent = "center"
// body.style.alignItems = "center"
// body.style.height = "100vh"
// body.style.backgroundColor = "cadetblue"
// body.style.fontFamily = "'Courier New', 'Courier', 'monospace'"


// const container = document.querySelector(".container")
// container.style.border = "5px solid white"
// container.style.padding = "20px"
// container.style.borderRadius = "20px"
// container.style.width = "60%"

// const ulElement = document.getElementsByTagName("ul")

// ulElement[0].style.listStyle = "none"


// /// create element 


// const ulElement = document.querySelector("ul")

// // ulElement.innerHTML += "<li class='list-item'>Playing</li>"

// // console.log(ulElement.innerHTML)

// const new_li = document.createElement("li")
// new_li.innerText = "Playing"
// // new_li.setAttribute("class" , "list-item data")
// // new_li.removeAttribute("class")
// new_li.classList.add("list-item")
// new_li.classList.add("data")
// // new_li.classList.remove("list-item")
// console.log(new_li.classList.contains("date"))

// console.log(new_li)

// ulElement.append(new_li)

// new_li.remove()

// const liElement = document.querySelector("li")
// console.log(liElement.parentElement.parentElement)

// const ul = document.querySelector("ul")
// console.log(ul)
// console.log(ul.parentElement.parentElement)
// console.log(ul.parentElement)
// console.log(ul.children[0].style.backgroundColor = "red")
// console.log(ul.children[1].style.backgroundColor = "blue")
// console.log(ul.parentElement.children)
// console.log(ul.previousElementSibling.previousElementSibling.style.color = "green")
// console.log(ul.nextElementSibling?.style?.color = "red")

// function handleClick(event) {
//     console.log(event)
//     event.target.style.backgroundColor = "red"
//     console.log(event.target)
// }
// const button = document.querySelector("button")

// button.addEventListener("click" , handleClick)

// // input.addEventListener("click" , handleClick)
// function handleFocus(event) {
//     const input = event.target
//     if (input.value.length === 0 ) {
//         input.style.border = "1px solid red"
        
//     }else if (input.type === "email"){
//         if(input.value.indexOf("@") !== -1 && input.value.indexOf(".") !== -1  ){
//             input.style.border = "1px solid green"

//         }else {
//             input.style.border = "1px solid red"

//         }
//     }
//     else { 
//         input.style.border = "1px solid green"
        
//     }
// }


// function handleBlur(event) {
//     const input = event.target
//     if (input.value.length === 0 ) {
//         input.style.border = "1px solid red"
        
//     }else if (input.type === "email"){
//         if(input.value.indexOf("@") !== -1 && input.value.indexOf(".") !== -1  ){
//             input.style.border = "1px solid green"

//         }else {
//             input.style.border = "1px solid red"

//         }
//     }
//     else { 
//         input.style.border = "1px solid green"
        
//     }
// }
// function handleInput (event) { 
//     const input = event.target
//     if (input.value.length === 0 ) {
//         input.style.border = "1px solid red"
//     }else if (input.type === "email"){
//         if(input.value.indexOf("@") !== -1 && input.value.indexOf(".") !== -1  ){
//             input.style.border = "1px solid green"

//         }else {
//             input.style.border = "1px solid red"
//         }
//     }
//     else { 
//         input.style.border = "1px solid green"
        
//     }
// }
// // const select = document.querySelector("#select")

// function handleChange (event) {
//     console.log("Value has changed")
//     console.log(event.target.value)
// }

// function handleInvalid (event) {
//     console.log(event.target.validationMessage)
//     console.log("Invalid")
// }


// const ul = document.querySelector(".errorMessages")


// const form = document.querySelector("#form")
// const inputs = document.querySelectorAll("input")
// // inputs[0].focus()
// function handleSubmit (event) {
//     // []
    
//     const invalidInputs = Array.from( form.querySelectorAll(":invalid"))
//     console.log(invalidInputs)

//     if (invalidInputs.length){
//         ul.style.display = "block"
//     }
//     const messages =  invalidInputs.map((element) =>
//     {
//         const label = form.querySelector(`label[for=${element.id}]`)
//         return `<li> ${label.innerHTML}: ${element.validationMessage} </li>`
//     }
//     )

//     // for (let element of invalidInputs) {
//     //     const label = form.querySelector(`label[for=${element.id}]`)
//     //     // console.log(label.innerText)
//     //     messages.push(`<li>${label.innerHTML} ${element.validationMessage} </li>`)
//     // }

//     const messagesText = messages.join("")
//     console.log(messagesText)
//     ul.innerHTML = messagesText

//     event.preventDefault()
    
// }

// form.addEventListener("click" , handleSubmit)

// for (let input of inputs) {

// // input.addEventListener("invalid" , handleInvalid)
//     input.addEventListener("focus" , handleFocus)
//     input.addEventListener("blur" , handleBlur)
//     input.addEventListener("input" , handleInput)
// }

// select.addEventListener("change" , handleChange)

// input.addEventListener("focus" , handleFocus)


// const suggestions = [
//     "How Are you" , 
//     "youtube" , 
//     "facebook" , 
//     "channel" , 
//     "data" , 
//     "date", 
//     "Computer" , 
//     "Laptop"
// ]
// const searchInput = document.querySelector(".searchInput")
// const input = searchInput.querySelector("input")

// const resultBox = document.querySelector(".resultBox")


// function handleSearch(event) {
//     const input = event.target
//     const userData = event.target.value
//     if (userData){
//         let matchResult = []
//         matchResult = suggestions.filter((suggestion) => {
//             return suggestion.toLowerCase().includes(userData.toLowerCase())
//         })
//         matchResult = matchResult.map((ele)=> `<li>${ele}</li> `)



//         // for (let suggestion of suggestions) {
//         //     if(suggestion.toLowerCase().includes(userData.toLowerCase())){
//         //         matchResult.push(`<li>${suggestion}</li> `) 
//         //     }
//         // }

//         if (matchResult.length === 0) {
//             matchResult.push(`<li>${input.value}</li> `)
//         }
//         matchResult = matchResult.join("")
        
//         resultBox.innerHTML = matchResult
//     }else{
//         resultBox.innerHTML = ""
//     }

//     const allLis = resultBox.querySelectorAll("li")
//     allLis.forEach((li)=>{
//         li.addEventListener("click" , (e) => {
//             input.value = e.target.innerText 

//         })
//     })

//     // for (let li of allLis) {
//     //     li.addEventListener("click" , (e) => {
//     //         input.value = e.target.innerText 

//     //     })
//     // }
// }
// input.addEventListener("input" , handleSearch)






// const data = {
//     name:"ahemd"
// }
// data.name = "Ali"
// console.log(data)




// // const input = document.getElementById("myinput")
// console.log(input)

// // input.value = "Hamada"

// function handleMovement () {
//     console.log("Hello")
// }

// input.addEventListener("mouseover" , handleMovement)
// input.addEventListener("keyup" ,function(e){

//     console.log("Key Up")

// } )
// input.addEventListener("keypress" , (e) =>{
//     console.log("Key Pressed")
// })

// input.addEventListener("keydown" , (e)=>{
//     console.log("Key Down")
// })

// input.addEventListener("mousemove" , (e) => {
//     console.log(e.clientX , e.clientY)
// })
// input.addEventListener("mouseleave" , (e) => {
//     console.log("Mouse leave")
// })


// const arr = [1 , 2  , 3 , 4 , 5 , 6 , 7 , 8 ,9]

// for(let ele of arr) {
//     if (ele %2  === 0 ) {
//         console.log(ele)
//     }
// }



// function filterOddNumber(myArray) {
//     for(let ele of myArray) {
//         if (ele %2  === 1 ) {
//             console.log(ele)
//         }
//     }
// }

// function filterDivisible3Number(myArray) {
//     for(let ele of myArray) {
//         if (ele %3  === 0 ) {
//             console.log(ele)
//         }
//     }
// }

// function genericFilter(ele) {
//     return ele%2 === 0
// }

// function filterEvenNumber(myArray , myFilter) {
//     for(let ele of myArray) {
//         if ( myFilter(ele) ) { 
//              console.log(ele)
//         }
//     }
// }

// filterEvenNumber([2 , 4 ,5 ,7 , 9] , (ele) => {
//     return ele%2 == 0 ;
// })

// console.log("#####")

// filterEvenNumber([2 , 4 ,5 ,7 , 9] , (ele) => {
//     return ele%3 == 0 ;
// })
// console.log("#####")

// filterEvenNumber([2 , 4 ,5 ,7 , 9] , (ele) => {
//     return ele%2 == 1 ;
// })
// console.log("#####")


// console.log("#####")
// filterOddNumber(arr)
// console.log("#####")
// filterDivisible3Number(arr)

// const arr = [1 , 2  , 3 , 4 , 5 , 6 , 7 , 8 ,9]
// arr[0] = "mohamed"
// arr="ali"

// arr.forEach((ele)=>{
//     if (ele%2 == 0){
//         console.log(ele)
//     }
// })

// arr.forEach((val , idx , myArr) =>{
//     myArr[idx] +=1 
//     console.log("########")
// })

// console.log(arr)

// const students = [
//     {name:"Ahmed" , grade:30 } , 
//     {name:"Ali" , grade:89}
// ]
// // for (let val of students) {
// //     val.grade *=1.2 
// // }
// students.forEach((ele)=> ele.grade *= 1.2)
// // students.forEach(())
// console.log(students)

// const arr2 = []
// for(let ele of arr) {
//     arr2.push(ele*2)
// }
// console.log(arr2)


// const arr2 =  arr.map((ele) => {
//     return ele * 2
// })
// console.log(arr2)

// const arr =  [ 2  , 3 , 5 , 6 , 7  ,9]
// const students = [
//     {name:"Ahmed" , grade:30 } , 
//     {name:"Ali" , grade:86} ,
//     {name:"mohamed" , grade:89} ,
//     {name:"salah" , grade:40} ,
//     {name:"hassan" , grade:66}
// ]

// const names = students.map((ele) => ele.name )
// console.log(names)

// const str = "hello world, how are you"
// const arrStr = str.split(" ")
// console.log(arrStr)

// const newArr = arrStr.map((ele) => {
//     return ele[0].toUpperCase() + ele.slice(1).toLowerCase()
// })
// console.log(newArr)
// const newStr = newArr.join(" ")
// console.log(newStr)

// Hello World, How Are You

// const arr =  [ 2  , 3 , 5 , 6 , 7  ,9]
// const arr2 = arr.filter((ele) => ele%2 === 0)

// console.log(arr2)


// const students = [
//     {name:"Ahmed" , grade:30 } , 
//     {name:"Ali" , grade:86} ,
//     {name:"mohamed" , grade:89} ,
//     {name:"salah" , grade:40} ,
//     {name:"hassan" , grade:66}
// ]
// const succeededStudents = students.filter((student) => student.grade > 50)
// console.log(succeededStudents)

// const fruits = ["apple" , "banana" , "rice" , "kiwi"]
// const oboveLimitFruits = fruits.filter((fru) => fru.length > 4)
// console.log(oboveLimitFruits)

/////////////////////////////////////////////////////
// let number = 0 

// const incrementBtn = document.querySelector(".increment") 
// const decrementBtn = document.querySelector(".decrement") 
// const p = document.querySelector(".source")
// console.log(incrementBtn) 
// console.log(decrementBtn) 
// console.log(p) 
// incrementBtn.addEventListener("click" , (e) => {
//     number ++ 
//     p.innerHTML = number
//     console.log(number)
// })
// decrementBtn.addEventListener("click" , (e) => {
//     number -- 
//     p.innerHTML = number
// })

