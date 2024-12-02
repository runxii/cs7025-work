let imgName = "pic";
let imgType = ".png";

// let imgsrc = document.getElementById("img-to-switch").src;
document.getElementById("switch-button").addEventListener("click", switchPic)

function switchPic(){
    let rdmOrder = Math.floor(Math.random()*4)+1;
    imgsrc = imgName + rdmOrder + imgType;
    document.getElementById("img-to-switch").src = imgsrc;
    // alert("click to switch another random pic, "+imgsrc)
}