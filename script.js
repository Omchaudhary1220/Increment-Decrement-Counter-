const value=document.getElementById("value");
let count=0;
function Increment(){
    count++;
    value.innerText=count;
}
function Decrement(){
    count--;
    value.innerText=count;
}
function reset(){
    count=0;
    value.innerText=count;
}
