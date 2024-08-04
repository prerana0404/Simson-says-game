let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let btns=['yellow','green','purple','red'];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false)
        {
            console.log("game started");
            started=true;
            levelup();

        }
});


function userflash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },800);

}


function gameflash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);

}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level} `;
    let randIdx=Math.floor(Math.random()*4);
    let randcolor=btns[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
  //  console.log(randIdx);
    //console.log(randcolor);
    //console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
    
}
function checkAns(idx){
   // console.log("curr level:",level);
   //let idx=level-1;
   if(userseq[idx]==gameseq[idx]){
     if(userseq.length==gameseq.length){
       setTimeout(levelup,1000);
     }
     console.log("samee value");
     }else{
     h2.innerHTML=`game over! your score was <b> ${level}</b> <br> press any key to start `;
     document.querySelector("body").style.backgroundColor='red';
     setTimeout(function(){
        document.querySelector("body").style.backgroundColor='white';
     },150);
     reset();
    }

}
function btnpress(){
    console.log(this);
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset()
{
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
    
}