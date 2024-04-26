let gameseq = [];
let userseq = [];
let start = false;
let level = 0;
let btns = ["red","green","yellow","purple"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(start == false){
        console.log("game is started");
        start = true;
        levelup();
    }  
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");   
    }, 250);
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText=`level: ${level}`;
    let randomno = Math.floor(Math.random()*3);
    let randcolor = btns[randomno];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq); 
    btnflash(randbtn);
}



function check(indx){
    if(gameseq[indx] == userseq[indx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }   
    }
    else{
        h2.innerHTML = `Game is over!<b>your score is:</b> ${level}<br> please try any key`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        hiscore();
        reset();
    }
}

function btnpress(event){
    let btn = event.target;
    btnflash(btn);
    let userColor = btn.getAttribute("id");
    userseq.push(userColor);
    check(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}
function reset(){
    gameseq = [];
    userseq = [];
    start = false;
    level = 0;
}
let h3 = document.querySelector("h3");
    h3.classList.add("color");

let high=0;
function hiscore(){
    if(high<level){
        high = level;
    }
    h3.innerHTML=`<b>Highest Score is:</b> ${high}`;
}