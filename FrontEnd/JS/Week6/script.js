

// window.open("https://www.google.com" , "parent")
// window.open("https://www.google.com" , "_blank" , "width=500,height=600")
// window.open("https://www.google.com" , "_self" , )

// window.close()

// window.moveTo(200, 200);
// window.resizeTo(800, 600);


// console.log(window.screen.height)
// console.log(window.screen.width)
// console.log(window.screen.availHeight)
// console.log(window.screen.availWidth)
// console.log(window.innerWidth)
// console.log(window.innerHeight)

// window.location.href returns the href (URL) of the current page
// window.location.hostname returns the domain name of the web host
// window.location.pathname returns the path and filename of the current page
// window.location.protocol returns the web protocol used (http: or https:)
// window.location.assign() loads a new document

// console.log(window.location.href)
// console.log(window.location.pathname)
// console.log(window.location.hostname)
// console.log(window.location.protocol)
// console.log(window.location.assign("https://www.google.com"))

// window.location.href = "https://www.google.com"
// window.history.back()
// window.history.forward()




// const countEl = document.querySelector("#count");
// const incrementBtn = document.querySelector("#increment");
// const decrementBtn = document.querySelector("#decrement");

// let count = 0;

// incrementBtn.addEventListener("click", () => {
// count++;
// countEl.textContent = count;
// });

//   decrementBtn.addEventListener("click", () => {
//     count--;
//     countEl.textContent = count;
//   });


// setTimeout(function() {
//     console.log("This message will appear after 2000 milliseconds (2 seconds).");
//   }, 2000);
  



/**
 * OOP
 */



// OOP 
// const arr = [] 
// console.log(arr)
// // arr.map()

// arr.name = "ahmed"

// console.log(arr.name)

// // data = {
// //     name:"ahmed" , 
// //     age:22  , 
// //     calcAge : function() {
// //         console.log("Age")
// //     }

// // }
// // console.log(data)
// // data.calcAge()

// authentication = {
//     username,
//     password ,
//     login() , 
    
// }

// ahmed = {
//     "ahmed" ,
//     "12345678" , 
//     login(username , password) {
//         if(username == "mohamed" , password == "12345678") {
//             return true
//         }else {
//             return false
//         }
//     }
// }


// const arr = [1 , 2 , 3 , 4]
// const ar2 = [2 , 3 , 7 ]
// arr.push(3)

// ar2.push(-1)


// arr = {
//     data: [1 ,2 , 3 , ,4] , 
//     push : function() {

//     }
// }

// const arr = new Array(1 , 2 , 3) //  => [args] ===  new Array(args)
// console.log(arr)


// const Person = function(firstName , birthYear) {
//     this.firstName = firstName  
//     this.birthYear = birthYear 

//     // this.calcAge = function() {
//     //     console.log(2037 - this.birthYear)
//     // }
// }
// Person.prototype.calcAge = function() {
//         console.log(2037 - this.birthYear)
// }

// const abdelfattah = new Person("abdelfattah" , 1996)

// abdelfattah.__proto__.calcAge = function() {
//     console.log(2037 - this.birthYear)
// }
// console.log(abdelfattah)
// abdelfattah.calcAge()

// // console.log(abdelfattah)

// const mahmoud = new Person("mahmoud" , 1999)
// mahmoud.calcAge()
// // console.log(mahmoud)
// // mahmoud.calcAge()
// // abdelfattah.calcAge()

// console.log(mahmoud.__proto__)

// console.log(mahmoud.__proto__ === Person.prototype)

// console.log(abdelfattah.hasOwnProperty("firstName"))
// console.log(abdelfattah.hasOwnProperty("calcAge"))

// const arr = []
// console.log(arr)
// console.log(arr.__proto__)
// console.log(arr.__proto__.__proto__)
// console.log(arr.__proto__.__proto__.__proto__)

// const myArr = [1 , 2 , 3]

// myArr.sayHello()

// const myArray2 = [23 ,3 ,3] 

// myArray2.sayHello()

// console.dir(document.querySelector("h3"))


// constructor function 

// const Person = function(firstName , birthYear) {
//     this.firstName = firstName  
//     this.birthYear = birthYear 

//     // this.calcAge = function() {
//     //     console.log(2037 - this.birthYear)
//     // }
// }
// Person.prototype.calcAge = function() {
//         console.log(2037 - this.birthYear)
// }

// ES6 classes 


// class Person {
//     constructor(myFullName , birthYear) {
//         this.fullName = myFullName  
//         this.birthYear = birthYear 
//     }

//     calcAge() {
//         return 2024 - this.birthYear
//     }

//     get age() {
//         return 2024 - this.birthYear
//     }

//     set fullName (val) {
//         if(val.split(" ").length === 2 ){
//             this._fullName = val
//         }else {
//             prompt("Bad Input")
//         }
//     }
//     get fullName () {
//         return this._fullName
//     }

//     // set setBirthDate(val) {
//     //     this.birthYear = val
//     // } 
// }

// class Student extends Person{
//     constructor(fullName , birthYear , course) {
//         super(fullName , birthYear)

//         this.course = course 

//     }
//     introduce () {
//         console.log(
//             `My name is ${this.fullName} Have ${this.age} year's old and study ${this.course}`
//         )
//     }
// }

// const stu1  = new Student("ha")
/**
 * 
 * ِAbstraction
 * Encapsulation 
 * Inheritance 
 * PolyMorphism
 * 
 */

// const  mahmoud = new Person("Mahmoud ahmed" , 1999)
// // mahmoud.setFullName = "Mahmoud ahmed"



// console.log(mahmoud.age)
// console.log(mahmoud.calcAge())


// class Animal {
//     constructor(name) {
//         this.name = name
//     }

//     makeSound() {
//         console.log(undefined)
//     }
// }


// class Cat extends Animal {
  
//     makeSound() {
//         console.log("Neao Neao")
//     }
// }

// class Dog extends Animal {

//     makeSound() {
//         console.log("Woof Woof")
//     }

// }
// const animal = new Animal("a")
// const cat = new Cat("c")
// const dog = new Dog("d")

// animal.makeSound()
// cat.makeSound()
// dog.makeSound()


// const str = "ahmed"
// const arr= [1 , 2 , 3 , 4]

// console.log(str.length)
// console.log(arr.length)


class Account {
    #balance
    constructor(owner , balance) {
        this.owner = owner 
        this.#balance = balance
    }
    withdraw (val) {
        if (this.#balance  > val ){
            this.#balance -= val
        }else {
            console.error("You can not perform this ")
        }
    }

    deposit(val) {
        this.#balance += val
    }

    get balance () {
        return this.#balance
    }
}

const ac1 = new Account("Ahmed" , 12000)

ac1.withdraw(5000)
// ac1.balance = 20
console.log(ac1.balance)
const ac2 =  new Account("Mohamed" , 22000)





