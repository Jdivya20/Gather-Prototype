
//Global varibales
var obj = {};
var id;
let x=0;
let y=0;
let w= Math.floor(Math.random()*1000);
let h= Math.floor(Math.random()*700);


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
    loadCanvas(id);

    //Checking  avatars in proximity
    nearby();
}



//Function to check nearby avatars
function nearby() {

    console.log(obj);
    var distance = Math.floor(Math.sqrt(Math.pow((obj["B"][0] - obj["A"][0]),2) + Math.pow((obj["B"][1] - obj["A"][1]),2) ))
    var cam= document.getElementById("cam")
    var flag=false;
    console.log(distance);
    if (flag===false && distance < 250) {
        console.log("Avatar nearby turn on mic and video");
        flag=true;
        cam.style.display="flex";
        cam.style.flexDirection="horizontal";
        start();
        console.log(flag)
    }
    else if (distance >= 250 || flag){
        stop();
        console.log("inside");
        flag=false;
        cam.style.display="none";
    }
}


//keydown event calls move fn whenever arrow keys are pressed.
document.onkeydown=move;

//function to display the canvas
function loadCanvas(pic){
    id = pic;
    console.log(id);
    var player1=id+'.png';
    var canvas = `<canvas id="myCanvas" width="1000" height="700" style="border:1px solid #000000; background-image: url('office.png'); background-size: contain;"></canvas>`
    document.getElementById("root").innerHTML=canvas;
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    //required when avatar images are added
    var img1 = new Image();
    var img2 = new Image(); 
    img1.src = '8.png';
    img2.src=player1;
    console.log(player1)
    // img2.src = '8.png';
    //Creating new images
    img1.onload = () => { 
        ctx.drawImage(img1, w, h);
        obj["A"] = [w,h];
    };
    img2.onload = () => { 
        ctx.drawImage(img2, x, y);
        obj["B"] = [x,y];
    };
}
var stop = function () {
    var stream = video.srcObject;
    var tracks = stream.getTracks();
    for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.stop();
    }
    video.srcObject = null;
}
var start = function () {
    var video = document.getElementById('video'),
        vendorUrl = window.URL || window.webkitURL;
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
            }).catch(function (error) {
                console.log("Something went wrong!");
            });
    }
}