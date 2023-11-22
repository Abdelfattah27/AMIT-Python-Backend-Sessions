!["Dom"](https://www.w3schools.com/js/pic_htmltree.gif)

```html
  <!-- <div class="container">
        <div class="hello"></div>
        <h1 id="main-heading">Favorite Hoppies </h1>
        <ul>
            <li class="list-item"> hello <span>World</span></li>
            <li class="list-item">Writing</li>
            <li class="list-item">Swimming</li>
            <li class="list-item">Calling</li>
            <li class="list-item">Reading</li>
        </ul>
    
    </div> -->


    <h1 id="main-heading">Event listeners</h1>

    <!-- <div class="container">
        <div class="boxes box-1">
            <h1 class="heading">Example 1 </h1>
            <button onclick="alert('Hello World')"> Enter</button>
        </div>
        <div class="boxes box-2">
            <h1 class="heading">Example 1 </h1>
            <button class="btn-2">Enter</button>
        </div>
        <div class="boxes box-3">
            <h1 class="heading">Example 1 </h1>
            <button >Enter</button>
        </div>
    </div> -->

    <!-- <div class="container">
        <p class="hide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, alias quas sint consequuntur distinctio laudantium itaque ad harum deleniti corporis modi aliquid dolorem nostrum quidem, necessitatibus quia. Rerum, deleniti optio?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam expedita cupiditate, possimus iusto quo aliquam aliquid dignissimos, placeat dolores deleniti laborum temporibus! Assumenda consectetur mollitia perferendis odio. Odit, ipsum consequatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cumque quibusdam error ut eligendi nostrum ea ratione laborum dolores vero nemo at atque quas, maiores perferendis, est excepturi. Laboriosam, ad.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora ipsum, magnam fugit, tempore omnis voluptates veritatis officia soluta sequi laudantium a repellat blanditiis adipisci repudiandae, tenetur delectus temporibus enim.
        </p>
        <p class="show-more">show more</p> -->
    </div>

```

```css

/* body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: cadetblue;
    font-family: 'Courier New', Courier, monospace;
}
.container {
    border: 5px solid white;
    padding: 20px;
    border-radius: 30px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#main-heading{
    color: white;
    font-weight: 900;
    letter-spacing: 5px;

}
ul {
    list-style: none;
    font-size: 23px;
    width: 100%;
   


}
.list-item{
    background-color: white;
    display: block;
    width: 90%;
    text-align: center;
    margin-bottom: 3px;
    padding: 10px;
    font-weight: 600;

} */
body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background-color: cadetblue;
    font-family: 'Courier New', Courier, monospace;
}
.container {
    width: 90%;
    border: 5px solid white;
    padding: 20px;
    border-radius: 30px;
    /* width: 500px; */
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    align-items: center;
    margin: 20px;
}
#main-heading{
    color: white;
    font-weight: 900;
    letter-spacing: 5px;

}

.boxes {

    /* width: 100%; */
    border: 2px solid white;
    padding: 20px;
    border-radius: 30px;
    /* width: 500px; */
    margin: 20px;
    display: flex;
    flex-direction: column;   
    color: white;
    text-wrap: nowrap;
    height: 200px;
    justify-content: space-between;
}
button{
    background-color: transparent;
    /* border: none; */
    border: 2px solid white;

    padding: 10px;
    border-radius: 10px;
}
ul {
    list-style: none;
    font-size: 23px;
    width: 100%;
   


}
.list-item{
    background-color: white;
    display: block;
    width: 90%;
    text-align: center;
    margin-bottom: 3px;
    padding: 10px;
    font-weight: 600;

}


```