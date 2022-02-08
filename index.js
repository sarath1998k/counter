//document.getElementById("count-el").innerText=5

//variable
let count=0;
console.log(count);//output
countel=document.getElementById("count-el");
let savednum = "0"
function increment(){
    count=count+1;
    countel.innerText=count;
}
function decrement(){
    count=count-1;
    countel.innerText = count;
}
function saved(){
    savednum  += ","+count;
    document.getElementById("saved").innerText=savednum;
}
function reset(){
    count=0;
    savednum=0;
    countel.innerText=0;
    document.getElementById("saved").innerText=0;
}
