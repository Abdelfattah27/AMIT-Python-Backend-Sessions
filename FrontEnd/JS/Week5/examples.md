# Examples 
1. Form Validation On Blur 
```html
<style>
body {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    background: rgb(210,210,210);
    font-family: Open Sans, sans serif;
  }
  
  /*the 'company' title*/
  #title {
    text-align: center;
    font-family: allura;
    font-size: 80px;
    line-height: 1;
    padding: 0;
    margin: 0;
    color: white;
    text-shadow: 1px 1px 2px #292929, -1px -1px 0.5px #292929;
  }
  
  #form_container {
    width: 300px;
    height: auto;
    margin: 30px auto;
    padding: 30px;
    border-radius: 5px;
    background: #95a5a6;
    box-shadow: 15px 15px 8px #292929;
    position: relative;
    z-index: 3;
    border: none;
  }
  
  #form {
    width: 100%;
    height: auto;
    margin: 30px auto;
    /*temp*/
    border: none;
  }
  
  /*This hiddes the labels for use only by the JS as there are placeholders in the HTML*/
  label {
    visibility: hidden;
  }
  
  input {
    width: calc(100% - 16px);
    padding: 10px 0 10px 10px;
    margin: 0;
    border: 2px solid transparent;
    border-radius: 5px;
    box-shadow: 1px 1px 1px #B2B2B2, -1px -1px 1px #292929;
    position: relative;
  }
  input:focus {
    outline:none;
    border: 2px solid transparent;
  }
  
  /* input.isRequired {
    border: 2px solid #e74c3c;
  } */
  
  /*used a button so to easily add fontawesome's icon to the submit*/
  button {
    border: none;
    background: #3498db;
    width: 80px;
    height: 35px;
    padding: 0;
    margin-top: 16px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #292929, -1px -1px 1px #B2B2B2;
    border-radius: 5px;
    transition: all .3s;
    color: white;
    font-weight: 700;
  }
  button:hover {
    background: #2980b9;
  }
  button:focus {
    box-shadow: 1px 1px 1px #B2B2B2, -1px -1px 1px #292929;
  }
  
  /*style for the error box*/
  .errorMessages {
    width: calc(100% - 8px);
    padding: 20px 0;
    background: #e74c3c;
    color: white;
    border: 2px solid #EC644B;
    display: none;
  }
  .errorMessages li {
    padding: 0 0 5px 0;
    margin: 0 0 0 30px;
    font-family: Open Sans, sans serif;
  }
  
</style>
<body>

  <div id="form_container">
    <h2 id="title">Company</h2>
    <form id="form" action="" accept-charset="UTF-8" method="">
      
      <ul class="errorMessages"></ul>
      
      <!-- This is to provide a "name" for the js to pull from in the error report once submitted-->
      <label for="fname">first name:</label>
      <input id="fname" type="text" onblur="requiredField(this)" placeholder="first name" required>
      
      <label for="lname">last name:</label>
      <input id="lname" type="text" onblur="requiredField(this)" placeholder="last name" required>
      
      <label for="email">email:</label>
      <input id="email" type="email" onblur="requiredField(this)" placeholder="email" required>
      
      <button type="submit">
        <span>submit <i class="fa fa-bolt"></i></span>
      </button>
    </form>
  </div>
</body>

<script>
// onblur function
function requiredField(event) {
    const input = event.target
    if (input.value.length < 1) {
        // red border
        input.style.borderColor = "#e74c3c";
    } else if (input.type == "email") {
        console.log("this is an email type");

        if (input.value.indexOf("@") != -1 && input.value.indexOf(".") != -1) {
            // green border
            input.style.borderColor = "#2ecc71";
        } else {
            // red border
            input.style.borderColor = "#e74c3c";
        }
    } else {
        // green border
        input.style.borderColor = "#2ecc71";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

        const errorList = form.querySelector("ul.errorMessages");

        function showAllErrorMessages() {
            errorList.innerHTML = "";

            // Find all invalid fields within the form.
            for (const node of form.querySelectorAll(":invalid")) {
                // Find the field's corresponding label
                const label = form.querySelector("label[for=" + node.id + "]"),
             
                    // Opera incorrectly does not fill the validationMessage property.
                    message = node.validationMessage || "Invalid value.";
                    // console.log(label , message) ;
                errorList.style.display = "block";
                errorList.innerHTML += "<li><span>" + label.innerHTML + "</span> " + message + "</li>";
            }
        }

        const submitButtons = form.querySelectorAll("input[type=submit], button:not([type=button])");
        for (const button of submitButtons) {
            button.addEventListener("click", showAllErrorMessages);
        }

        const inputFields = form.querySelectorAll("input");
        for (const input of inputFields) {
            input.addEventListener("blur" , requiredField)
            input.addEventListener("keypress", function (event) {
                if (event.keyCode == 13) {
                    showAllErrorMessages();
                }
            });
        }
});


</script>

```

3. Auto Complete with suggestion 

```html

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body{
  background: #f4f5;
  padding: 0 20px;
}

.container{
  max-width: 450px;
  margin: 150px auto;
}

.container .searchInput{
  background: #fff;
  width: 100%;
  border-radius: 5px;
  position: relative;
  box-shadow: 0px 1px 5px 3px rgba(0,0,0,0.12);
}

.searchInput input{
  height: 55px;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0 60px 0 20px;
  font-size: 18px;
  box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
}

.searchInput.active input{
  border-radius: 5px 5px 0 0;
}

.searchInput .resultBox{
  padding: 0;
  opacity: 0;
  pointer-events: none;
  max-height: 280px;
  overflow-y: auto;
}

.searchInput.active .resultBox{
  padding: 10px 8px;
  opacity: 1;
  pointer-events: auto;
}

.resultBox li{
  list-style: none;
  padding: 8px 12px;
  display: none;
  width: 100%;
  cursor: default;
  border-radius: 3px;
}

.searchInput.active .resultBox li{
  display: block;
}
.resultBox li:hover{
  background: #efefef;
}

</style>
<div class="container">
  <div class="searchInput">
    <input type="text" placeholder="Saisir une adresse..">
    <div class="resultBox">
      <!-- here list are inserted from javascript -->
    </div>
    <div class="icon"><i class="fas fa-search"></i></div>
  </div>
</div>

<script>

let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to became Freelancer",
    "How to became Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];

// getting all required elements
const searchInput = document.querySelector(".searchInput");
const input = searchInput.querySelector("input");
const resultBox = searchInput.querySelector(".resultBox");
const icon = searchInput.querySelector(".icon");
let linkTag = searchInput.querySelector("a");
let webLink;

// if user press any key and release
function handleSearch (e){
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        for (let ele of suggestions) {

            if (ele.toLocaleLowerCase().includes(userData.toLocaleLowerCase())){
                emptyArray.push(ele)
            }

        }
        for (let i = 0 ; i < emptyArray.length  ; i ++) {
            emptyArray[i] =  '<li>'+ emptyArray[i] +'</li>';
        }

        searchInput.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = resultBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].addEventListener("click" , (e) => {
                input.value = e.target.innerText
            })
        }
    }else{
        searchInput.classList.remove("active"); //hide autocomplete box
    }
}
input.addEventListener("keyup" , handleSearch)


function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = input.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    resultBox.innerHTML = listData;
}

</script>
```


4. Image Gallery 
```html
<style>

@import url("https://fonts.googleapis.com/css?family=Lato:400,400i,700");

body{
  display:flex;
  justify-content:center;
  width: 100%;
  align-items: center;
  height: 100vh;
  flex-direction:column;
  background-color: antiquewhite;
}


.gallery{
  /* position:relative; */
  display:flex;
  flex-direction: column;
  
  /* grid-template-columns:repeat(6,100px);
  grid-template-rows:repeat(5,100px); */
}
.images-data{
    display: flex;
    justify-content: center;
    align-items: center;
}

.item{
  margin:0.2em;
}

.small:hover{
  opacity:0.5;
}

.item img{
  height:100%;
  width:100%;
  max-height: 300px;
  /* object-fit:cover; */
}
.small img{
  height:100px;
  width:100px;
  object-fit:cover;
}

.feature{

  position:relative;
}


.arrow{
  position:absolute;
  bottom:0px;
  background:#546E7A;
  opacity:0.9;
  box-shadow:5px 5px 5px #37474F;
  border-radius:50%;
  width:30px;
  height:30px;
  margin:0.2em;
  
  display:flex;
  justify-content:center;
  align-items:center;
}

.arrow img{
  width:20px;
  height:20px;
}

.arrow-left{
  left:-20px;
}

.arrow-right{
  right:-20px;
}



</style>
<body>
  
  <div class="gallery">
    
    <div class="item feature">
      <img data-key='1' src='https://tinyurl.com/y2qr6d9z' alt='' />
      <div class='arrow arrow-left'>
        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/3521175/arrow-left.svg' />
      </div>
      <div class='arrow arrow-right'><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/3521175/arrow-right.svg' /></div>
    </div>

    <div class="item small">
      <img data-key='1' src='https://tinyurl.com/y2qr6d9z' alt='' />
    </div>
    <div class="item small">
      <img data-key='2' src='https://tinyurl.com/y444ugpz' alt='' />
    </div>
    <div class="item small">
      <img data-key='3'  src='https://tinyurl.com/y5quqfal' alt=''>
    </div>
    <div class="item small">
      <img data-key='4' src='https://tinyurl.com/y5t6oacf' alt=''>
    </div>
    <div class="item small">
      <img data-key='5' src='https://tinyurl.com/y2dlrkku' alt=''>
    </div>
    <div class="item small">
      <img data-key='6' src='https://tinyurl.com/y57vjxpe' alt=''></div>
  </div>
</body>

<script>

const featureImage = document.querySelector(".feature img");
const smallImages = document.querySelectorAll(".small img");
const smallImagesArray = Array.from(smallImages);
const imgSRC = smallImagesArray.map(image => image.src);
const buttons = document.querySelectorAll(".arrow");

for(let image of smallImages){
    image.addEventListener("click", changeFeatureImage)
}
for(let image of buttons){
    image.addEventListener("click", nextImage)
}

// smallImages.forEach(image => image.addEventListener("click", changeFeatureImage));
// buttons.forEach(button => button.addEventListener("click", nextImage));



function changeFeatureImage(event) {

  featureImage.dataset.key = event.target.dataset.key;
}

function nextImage() {
  
  // find out data-key of current image
  const currentImage = document.querySelector(".feature img");
  const currentKey = parseInt(currentImage.dataset.key);

  
  let newKey=0;
  if (this.className.includes("right")){
    newKey = currentKey+1;
    if(newKey>6){newKey=1;} 
  }else{
    newKey = currentKey-1;
    if(newKey<1){newKey=6;}
  }
 
  // update data-key and src of feature image
  featureImage.dataset.key = newKey;
  featureImage.src = imgSRC[newKey-1];
 }


</script>

  
  

```

5. accorion 
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>

.container {
  width: 80%;
  max-width: 600px;
  margin: 50px auto;
}

button.accordion {
  width: 100%;
  background-color: whitesmoke;
  border: none;
  outline: none;
  text-align: left;
  padding: 15px 20px;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  transition: background-color 0.2s linear;
}

button.accordion:after {
  font-family: FontAwesome;
  content: "\f150";
  font-family: "fontawesome";
  font-size: 18px;
  float: right;
}

button.accordion.is-open:after {
  content: "\f151";
}

button.accordion:hover,
button.accordion.is-open {
  background-color: #ddd;
}

.accordion-content {
  background-color: white;
  border-left: 1px solid whitesmoke;
  border-right: 1px solid whitesmoke;
  padding: 0 20px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
}
</style>
<div class="container">
  <h1>Simple Accordions</h1>

  <button class="accordion">Website Design and Development</button>
  <div class="accordion-content">
    <p>
      Whether you need a wordpress website, a shopify site, or a custom fullstack application, we got you! No matter what kind of website or application you need, it will be made with clean and maintable code that follows modern development standards. We also have top notch designers that can make unique designs that will make your website look different and unique. Not to mention that we also provide 24/7 website maintenance so that you get all the support you need.
    </p>
  </div>

  <button class="accordion">Website Analytics and Performance</button>
  <div class="accordion-content">
    <p>
      We believe that in order to have a successful website, you need to constantly adjust and adapt to the data provided by your website visitors. Here at Pierre Web Development, we have narrowed down the specific key performance indicators that will dramatically boost your success with connecting to target markets. We will provide a basic metric dashboard based on how much traffic your site gets, detailed analytical reports that show which parts of your website is the most popular among visitors as well as access to tools you can use to make meaningful decisions based on this data.
    </p>
  </div>

  <button class="accordion">Digital Marketing</button>
  <div class="accordion-content">
    <p>
      We know that every great website focuses on helping you get more business and building a brand that your ideal customers will love and support. We can help you set up a great, SEO-focused content strategy, a paid ads campaign, email marketing integration with Mailchimp as well as a social media marketing campaign. We also use popular website analytic tools to track your site's performance and provide you with weekly analytic reports to help bolster your growth.
    </p>
  </div>
</div>
<script>

    //pseudocode
/*
  1.Grab the accordion buttons from the DOM
  2. go through each accordion button one by one
  3. Use the classlist dom method in combination with the toggle method provided by the DOM to add or remove the "is-open" class. At this point, the accordion button should be able to switch back and forth between its font awesome icons but there is no content inside of it. This is because of the overflow:hidden and the max-height of zero; it is hiding our content. So now we must use javascript to change these values with DOM CSS
  4. get the div that has the content of the accordion button you are currently looking at; we do this using the .nextElementSibling method which allows us to look at the html element that is directly next to the current html element we are looking at. Since we are currently looking at a button (accordion button), the next element after that is the div with the class accordion-content. This is exactly what we want because it allows us to work with the div that has the content that we want to display. Also please note that we could have got to this div in another way but this is the "shortest path" to our answer.
  
  5. set the max-height based on whether the current value of the max-height css property. If the max-height is currently 0 (if the page has just been visited for the first time) or null (if it has been toggled once already) which means that it is closed, you will give it an actual value so the content will be shown; if not then that means the max-height currently has a value and you can set it back to null to close it.
  6. If the accordion is closed we set the max-height of the currently hidden text inside the accordion from 0 to the scroll height of the content inside the accordion. The scroll height refers to the height of an html element in pixels. For this specific example, we are talking about the height of the div with the class accordion-content with all of its nested ptags
*/


const accordionBtns = document.querySelectorAll(".accordion");

for(let accordion of accordionBtns) {
  accordion.onclick = function (e) {
    e.target.classList.toggle("is-open");

    let content = e.target.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
};

</script>
```

5. Drop Down Menu Navigation

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,400,1,0" />
  <link rel="stylesheet" href="styles.css" />
  <style>

    * {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  display: grid;
  place-items: center;
  background: #fdfefe;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  background: #080808;
}

.dropdown-menu {
  position: relative;
  perspective: 200px;
}

.dropdown-menu > button {
  position: relative;
  z-index: 2;
  transition: 0.3s;
}

.dropdown-menu.open > button {
  background: -webkit-linear-gradient(to bottom, #0072ff, #00c6ff);
  background: linear-gradient(to bottom, #0072ff, #00c6ff);
}

.dropdown-menu button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 16px;
  width: 230px;
  height: 60px;
  color: #f9f9f9;
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: 18px;
  font-family: "Cambria";
}

.dropdown-menu button .chevron {
  margin-left: auto;
}

.dropdown-menu > button:hover {
  font-wight: bold;
}

.navigation-menu {
  position: absolute;
  overflow: hidden;
  z-index: 1;
  top: 60px;
  left: 0;
  width: 100%;
  height: 160px;
  opacity: 0;
  transform-origin: 50% 0%;
  transform: rotateX(-90deg);
  visibility: hidden;
  background: #17202a;
  transition: 0.4s;
}

.navigation-menu button {
  border: 0;
  width: 100%;
  height: 56px;
  border-radius: 0;
}

.navigation-menu button:hover {
  background: black;
}

.dropdown-menu.open .navigation-menu {
  opacity: 1;
  transform: rotateX(0);
  visibility: visible;
}

.main-menu {
  position: absolute;
  width: 460px;
  display: flex;
  transition: 0.3s;
}

.main-menu.open {
  translate: -50%;
}

.primary-menu {
  width: 230px;
}

.secondary-menu {
  display: none;
  width: 230px;
}

.secondary-menu.open {
  display: block;
}

  </style>
</head>

<body>
  <nav>
    <section class="dropdown-menu" id="dropdown-menu">
      <button onclick="handleDropdownClicked(event)">
        <span class="material-symbols-sharp"> account_circle </span>
        Administrator
        <span class="chevron material-symbols-sharp" id="dropdown-icon"> expand_more </span>
      </button>
      <section id="navigation-menu" class="navigation-menu">
        <div id="main-menu" class="main-menu">
          <div class="primary-menu">
            <button onclick="handleMenuLabelClicked('manage-accounts')">
              <span class="material-symbols-sharp"> manage_accounts </span>
              Account
              <span class="chevron material-symbols-sharp">
                chevron_right
              </span>
            </button>
            <button onclick="handleMenuLabelClicked('admin-dashboard')">
              <span class="material-symbols-sharp"> dashboard </span>
              Dashboard
              <span class="chevron material-symbols-sharp">
                chevron_right
              </span>
            </button>
            <button>
              <span class="material-symbols-sharp"> logout </span>
              Sign Out
            </button>
          </div>
          <section id="manage-accounts" class="secondary-menu" onclick="handleMenuLabelClicked()">
            <button>
              <span class="material-symbols-sharp"> mark_email_unread </span>
              Inbox
            </button>
            <button>
              <span class="material-symbols-sharp"> calendar_month </span>
              Calendar
            </button>
            <button>
              <span class="material-symbols-sharp"> priority </span>
              Priority
            </button>
            <button>
              <span class="material-symbols-sharp"> forum </span>
              Community
            </button>
          </section>
          <section id="admin-dashboard" class="secondary-menu" onclick="handleMenuLabelClicked()">
            <button>
              <span class="material-symbols-sharp"> data_usage </span>
              Overview
            </button>
            <button>
              <span class="material-symbols-sharp"> bar_chart_4_bars </span>
              Performance
            </button>
            <button>
              <span class="material-symbols-sharp"> analytics </span>
              Analytics
            </button>
            <button>
              <span class="material-symbols-sharp">
                insights
              </span>
              Insights
            </button>
            <button>
              <span class="material-symbols-sharp"> layers </span>
              Reports
            </button>
          </section>
        </div>
      </section>
    </section>
  </nav>

  <script >

    const handleDropdownClicked = (event) => {
  event.stopPropagation();
  const dropdownMenu = document.getElementById("dropdown-menu");
  toggleDropdownMenu(!dropdownMenu?.classList?.contains("open"));
};

const handleMenuLabelClicked = (label) => {
  const navigationMenu = document.getElementById("navigation-menu");
  const mainMenu = document.getElementById("main-menu");
  const secondaryMenuLabels = document.getElementsByClassName("secondary-menu");
  if (label) {
    for (let l of secondaryMenuLabels) {
      l.classList.remove("open");
    }
    const secondaryMenu = document.getElementById(label);
    secondaryMenu.classList.add("open");
    navigationMenu.style.height = secondaryMenu.clientHeight + "px";
  } else {
    navigationMenu.style.height = "168px";
  }
  mainMenu.classList.toggle("open");
};

const toggleDropdownMenu = () => {
  const dropdownMenu = document.getElementById("dropdown-menu");
  dropdownMenu.classList.toggle("open");
  const dropdownIcon = document.getElementById("dropdown-icon");
  dropdownIcon.innerText = dropdownMenu.classList.contains("open")
    ? "close"
    : "expand_more";
};

  </script>
</body>

</html>
```
