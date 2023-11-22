// ///////////////////////////////////////
// // Short Circuiting (&& and ||)

// console.log('---- OR ----');
// // Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('---- AND ----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'jonas');

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');



// ///////////////////////////////////////
// // The Nullish Coalescing Operator
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);


///////////////////////////////////////

// // Optional Chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // console.log(restaurant.openingHours.mon.open);

// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// // const users = [];

// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');






// // Dom manipulation
// // Get ElementById

// let mainHeading = document.getElementById("main-heading")
// console.log(mainHeading)

// // Get Element By Class Name 

// let classes = document.getElementsByClassName("list-item")
// console.log(classes)

// // Get Element by Tag name

// let allPs = document.getElementsByTagName("li")
// console.log(allPs)


// // query selector 

// const divs  =document.querySelector("div")
// console.log(divs)

// // query selector all 

// const allDivs  =document.querySelectorAll("div")
// console.log(allDivs)

/* ******************************** */
// styling
/* ******************************** */


// // script2.js


// let body = document.body 
// body.style.display = "flex"
// body.style.justifyContent = "center"
// body.style.alignItems = "center"
// body.style.backgroundColor = "cadetblue"
// body.style.fontFamily = "'Courier New', Courier, monospace"
// body.style.height = "100vh"

// // Get the container element
// let container = document.querySelector(".container");

// // Apply dynamic styles to the container
// container.style.border = "5px solid white";
// container.style.padding = "20px";
// container.style.borderRadius = "30px";
// container.style.width = "500px";
// container.style.display = "flex";
// container.style.flexDirection = "column";
// container.style.justifyContent = "center";
// container.style.alignItems = "center";

// // Get the main heading element
// let mainHeading = document.getElementById("main-heading");

// // Apply dynamic styles to the main heading
// mainHeading.style.color = "white";
// mainHeading.style.fontWeight = "900";
// mainHeading.style.letterSpacing = "5px";


// const ulElement = document.getElementsByTagName("ul")
// ulElement[0].style.listStyle = "none"
// ulElement[0].style.fontSize = "23px"
// ulElement[0].style.width = "100%"

// // Get the list items
// const listItems = document.querySelectorAll(".list-item");

// // Apply dynamic styles to each list item
// for(const item of listItems){
//     item.style.backgroundColor = "white";
//     item.style.display = "block";
//     item.style.width = "90%";
//     item.style.textAlign = "center";
//     item.style.marginBottom = "3px";
//     item.style.padding = "10px";
//     item.style.fontWeight = "600";
// };

// // create element 

// const my_ul = document.querySelector("ul")

// const new_li = document.createElement("li")

// my_ul.append(new_li)


/* ******************************** */
// // modify element 
/* ******************************** */


// const  first_li = document.querySelector(".list-item")
// console.log(first_li.innerText)
// console.log(first_li.textContent)
// console.log(first_li.innerHTML)


// new_li.innerText = "Hello world"

// new_li.setAttribute("class" , "list-item")
// new_li.removeAttribute("class")


// const title = document.querySelector("#main-heading")
// console.log(title.getAttribute("id"))

// new_li.classList.add("list-item")
// new_li.classList.remove("list-item")

// console.log(new_li.classList.contains("list-item"))


// new_li.remove()



/* ******************************** */

//  navigate the dom

/* ******************************** */

/// nevigate up

// let ul = document.querySelector("ul")
// console.log(ul)
// console.log(ul.parentNode)
// console.log(ul.parentElement)
// console.log(ul.parentNode.parentNode)
// console.log(ul.parentElement.parentElement)


// /// navigate down

// console.log(ul.childNodes)
// console.log(ul.firstChild)
// console.log(ul.lastChild)

// console.log(ul.children)
// console.log(ul.childElementCount)
// console.log(ul.firstElementChild.style.backgroundColor = "black")
// console.log(ul.lastElementChild)


// sibling

// console.log(ul.previousSibling)
// console.log(ul.nextSibling)

// console.log(ul.previousElementSibling)
// console.log(ul.nextElementSibling)



/* ******************************** */
/// Event listener 
/* ******************************** */

// const box_2 = document.querySelector(".btn-2")

// function alertBtn() {
//     alert("hello World 2")
// }
// box_2.addEventListener("click" , alertBtn)

// const heading = document.querySelector("#main-heading")

// function changeBg () {
//     heading.style.backgroundColor = "black"
// }
// box_2.addEventListener("mouseover" , changeBg) 
