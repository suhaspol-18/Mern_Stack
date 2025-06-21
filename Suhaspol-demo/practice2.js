let gameSeq=[];
let userSeq=[];

let btns=["red","green","yellow","blue"];

let started=false;
let level=0;
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Is Started");
        started=true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 1000);
}

function levelUp(){
    level++;
    h3.innerText=`level ${level}`;
    let rnadIdx=Math.floor(Math.random()*3);
    let randClr=btns[rnadIdx];
    let randBtn=document.querySelector(`.${randClr}`);
    btnFlash(randBtn);
    
}