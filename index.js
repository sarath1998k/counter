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
    savednum = savednum + ","+count ;
    document.getElementById("saved").innerText=savednum;
}

