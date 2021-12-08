var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//required when avatar images are added
// var img1 = new Image();
// var img2 = new Image(); 
// img1.src = 'wolf.png';
// img2.src = 'avatar.png';
let x=0;
let y=0;


//create avatar



// for(let i=0;i<10;i++){
// let w= Math.floor(Math.random()*1000);
// let h= Math.floor(Math.random()*700);
// var red = Math.floor(Math.random() * 255);
// var green = Math.floor(Math.random() * 255);
// var blue = Math.floor(Math.random() * 255);
// // ctx.fillStyle = '#8ED6FF';
// ctx.fillStyle = "rgb(" + red + "," + green + "," + blue + " )";  
// ctx.fillRect(w,h,20,20);
// }


//function to generate random colors
// function generateRandomColor() {
// var letters = '0123456789ABCDEF';
// var color = '#';
// for (var i = 0; i < 6; i++) {
// color += letters[Math.floor(Math.random() * 16)];
// }
// return color;
// }
// for(let i=0;i<10;i++){
// let w= Math.floor(Math.random()*1000);
// let h= Math.floor(Math.random()*700);
// ctx.fillStyle=generateRandomColor();
// ctx.fillRect(w,h,20,20);
// }
//Creating new images
// img1.onload = () => { 
//     ctx.drawImage(img1, w, h);
// };
// img2.onload = () => { 
//     ctx.drawImage(img2, x, y);
// };

//Function to move the avatar
function move(e){
    if(e.keyCode==39){
        x+=5;
    }
    if(e.keyCode==37){
        x-=5;
    }
    if(e.keyCode==38){
        y-=5;
    }
    if(e.keyCode==40){
        y+=5;
    }
    c.width=c.width;
    ctx.drawImage(img2,x,y)
    ctx.drawImage(img1, w, h); 
}


//keydown event calls move fn whenever arrow keys are pressed.
document.onkeydown=move;

function createAvatar(){
  var cardbody=  `<div class="card mt-5" style="width: 28rem;  margin:auto;">
  <div class="card-body">
    <h5 class="card-title" style="text-align:center;">Gather Town</h5>
    <p class="card-text" style="text-align:center;">Select your avatar!!</p>
    <div class="container">
        <div class="row">
            <div class="col">
            <img src="boy1.png" style="width:50px; height:50px;" onclick="loadCanvas()"/>
            </div>
            <div class="col">
            <img src="girl2.png" style="width:50px; height:50px;" onclick="loadCanvas()"/>
            </div>
            <div class="col">
            <img src="boy3.png" style="width:50px; height:50px;" onclick="loadCanvas()"/>
            </div>
            <div class="col">
            <img src="girl4.png" style="width:50px; height:50px;" onclick="loadCanvas()"/>
            </div>
        </div>
        <br/>

        <div class="row">
            <div class="col">
            <img src="girl1.png" style="width:50px; height:50px;" onclick="loadCanvas()"/>
            </div>
            <div class="col">
            <img src="boy2.png" style="width:50px; height:50px;" onclick="loadCanvas()"/>
            </div>
            <div class="col">
            <img src="boy4.png" style="width:50px; height:50px;" onclick="loadCanvas()"/>
            </div>
            <div class="col">
            <img src="girl3.png" style="width:50px; height:50px;" onclick="loadCanvas()"/>
            </div>
        </div>
    </div>
  </div>
</div>`
document.getElementById("root").innerHTML=cardbody;
}

//function to display the canvas
function loadCanvas(){
    
}