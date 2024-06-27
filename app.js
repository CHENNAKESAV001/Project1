let xturn=true;
let start=false;
let winpattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let p=document.querySelector("h3");
function init(){
let btns=document.querySelectorAll(".box");
for(let btn of btns)
    {
        btn.addEventListener("click",xoroturn);
    }
}
let btn=document.querySelector(".st");
btn.addEventListener("click",function(){
    if(!start){
        init();
        this.innerText="Restart";
        p.innerText="It's Player X's turn";
        start=true;
    }
    else
    {
        let btns=document.querySelectorAll(".box");
        for(btn of btns)
            {
                btn.addEventListener("click",xoroturn);
                btn.innerText="";
                p.innerText="It's Player X's turn";
                p.style.color="black";
                xturn=true; 
            }
    }
})
function checkwinner(){
    let box=document.querySelectorAll(".box");
    for(pos of winpattern){
        let p1=box[pos[0]];
        let p2=box[pos[1]];
        let p3=box[pos[2]];
        if(p1.innerText!="" && p2.innerText!="" && p3.innerText!=""){
            if(p1.innerText==p2.innerText && p2.innerText==p3.innerText){
                p.innerText=`Congratulations!...Player ${(p1.innerText).toUpperCase()} is the winner`;
                p.style.color="#800080";
                let btn=document.querySelector(".st");
                btn.innerText="Play again";
                let btns=document.querySelectorAll(".box");
                for(btn of btns)
                    btn.removeEventListener("click",xoroturn);

            }
        }
    }
}
function xoroturn(){
    if(xturn){
        if(this.innerText==""){
        this.innerText="x";
        this.style.color="red";
        p.innerText="It's Player O's turn"
        xturn=false;}
    }
    else{
        if(this.innerText==""){
        this.innerText="o";
        this.style.color="blue";
        p.innerText="It's Player X's turn"
        xturn=true;}
    }
    checkwinner();
}

