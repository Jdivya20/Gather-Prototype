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
  var cardbody=  `<div class="card" style="width: 28rem;">
  <div class="card-body">
    <h5 class="card-title">Gather Town</h5>
    <p class="card-text">Create your avatar!!</p>
    <div class="container">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>

  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
document.getElementById("root").innerHTML=cardbody;
}
