"use strict"
// JSON : Java script object notation 
// const personal_info = {
//     "name" : "ahmed" , 
//     "age" : 12
// }
// console.log(personal_info)

// Local Storage

// const json_data = JSON.stringify(personal_info)
// console.log(json_data)
// const obj_data = JSON.parse(json_data)
// console.log(obj_data)

// const volume = 90 

// localStorage.setItem("name" , "ahmed")
// const name = localStorage.getItem("name")
// console.log(name)
// localStorage.clear()
// localStorage.removeItem("name")

// TODO : make the to do list to save data on localStorage and retrieve it again


// AJAX : Asynchronous Java Script XML 

// const p = document.querySelector("p")
// // console.log(p)
// // alert("Hello World")
// // console.log("Finish")

// console.log("start")

// // setTimeout(()=> {
// // console.log("Hello")
// // } , 2000)
// p.addEventListener("click" , () => {
//     console.log("Hello")
// })
// setTimeout(()=> {
//     console.log("Hello")
// } , 0)

// // for(let i = 0; i < 9000000000 ; i ++) ; // 10
// // console.log("Helo")
// // for(let i = 0; i < 900000000 ; i ++) ;
// console.log("End")

// API : application program Interface
// const [a ] = [1]

const countriesContainer = document.querySelector(".countries")
const btn = document.querySelector(".btn-country")
const errorElement = document.querySelector(".error")


function createCountry(countryData) {
    const countryHTML = `
    <article class="country">
        <img class="country__img" src="${countryData.flag}" />
        <div class="country__data">
            <h3 class="country__name">${countryData.name}</h3>
            <h4 class="country__region">${countryData.region}</h4>
            <p class="country__row"><span>👫</span>${countryData.population}</p>
            <p class="country__row"><span>🗣️</span>${countryData.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${countryData.currencies[0].name}</p>
        </div>
    </article>
    `
    countriesContainer.innerHTML += countryHTML
    countriesContainer.style.opacity = 1

}



// function getCountry (country) {
//     const request = new XMLHttpRequest()
//     request.open("GET" , `https://countries-api-836d.onrender.com/countries/name/${country}/`)
//     request.send()
//     request.addEventListener("load" , function() {
//         const [ countryData ] = JSON.parse(this.responseText)
//         createCountry(countryData)

//         const neighbor = countryData.borders[1]
//         console.log(neighbor)

//         const request2 = new XMLHttpRequest()
//         request2.open("GET" ,`https://countries-api-836d.onrender.com/countries/alpha/${neighbor}/` )
//         request2.send()
//         request2.addEventListener("load" , function(){
//             const neighborCountry = JSON.parse(this.responseText)
//             createCountry(neighborCountry)

//         })
       
//     })
// }

// getCountry("egypt")

// setTimeout(() => {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//             console.log(3)
//                 setTimeout(() => {
//                     console.log(4)
//                 } , 1000)
//         } , 1000)
//     } , 1000)
// } , 1000)


// function getCountry(countryName) {
// fetch(`https://countries-api-836d.onrender.com/countries/name/${countryName}`)
// .then((response) =>  response.json() , (error) => {
//     errorElement.innerHTML = "Error Had Happen, Try again"
// })
// .then((country) => {
//    createCountry(country[0])
//    console.log(country)
//    const neighbor = country[0].borders[1]
//    return fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbor}/`)
// })
// .then((response) => response.json() , (error) => {
//     errorElement.innerHTML = "Error Had Happen, Try again"

// })
// .then((country) => createCountry(country))
// }



// function getCountry(countryName) {
//     fetch(`https://countries-api-836d.onrender.com/countries/name/${countryName}`)
//     .then((response) =>  {
//      console.log(response)
//         if (response.status === 404) {
//             throw new Error("Country Not Found")
//         }
//        return response.json()
    
//     } )
//     .then((country) => {
//        createCountry(country[0])
//        console.log(country)
//        if (country[0].borders.length ===0) {
//             throw new Error("This country doesn't have neighbors")
//        }
//        const neighbor = country[0].borders[1]
//        return fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbor}/`)
//     })
//     .then((response) => response.json() )
//     .then((country) => createCountry(country))
//     .catch(error => {
//         console.log(error.message)
//         errorElement.innerHTML = error.message
//     })
// }
    
// btn.addEventListener("click" , () => {
//     getCountry("australia")
// })


// console.log(request)


// try{
//     const x = 0
//     let y = 10 
//     // x = y
// }catch{
//     console.log("hello")
// }

const getCountry = async function ( countryName) {
    try{
        const response = await fetch(`https://countries-api-836d.onrender.com/countries/name/${countryName}`)
        if (!response.ok) {
            throw new Error("Country not found")
        }
        const [data] = await response.json()
        createCountry(data)
        if(data.borders.length === 0){
            throw new Error ("No Neighbors found")
        }
        const neighbor = data.borders[1]

        const responseNeighbor = await fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbor}`)
        const neighborData = await responseNeighbor.json()
        createCountry(neighborData)
    }catch(err){
        errorElement.innerHTML = err
    }
}
// const request = fetch(`https://countries-api-836d.onrender.com/countries/name/egypt`)

// console.log(request)
getCountry("australia")






