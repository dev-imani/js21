// // // const browserType = "mozilla";
// // // console.log(browserType.length)
// // const universty="kririnyaga"
// // console.log(universty.toUpperCase())

// let d;
// d = new Date ();
// console.log(d)
// const PI =22/7;
// let radius;
// let area;
// let radius;
// let area;
// const PI = 22/7;

// document.getElementById("submit").onclick = function (){
//     radius =document.getElementById("radius").value;
//     radius = Number (radius)
//     area = PI * radius * radius
//     document.getElementById("result").textContent = area
// }
const add = document.getElementById("add")
const reset=document.getElementById("reset")
const decrease=document.getElementById("decrease")
let count=0;
const label= document.getElementById("label")
//pudtating to add

add.onclick = function (){
    count ++;
    label.textContent=count;
}
//updating to decrease
decrease.onclick = function (){
    count --;
    label.textContent=count;
}
// reset back to zero
reset.onclick = function (){
    count = 0;
    label.textContent=count;
}





