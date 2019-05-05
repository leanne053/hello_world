$(function(){
    var screen = document.getElementById("main");
    var mouse = {
        x:0,
        y:0,
    }
    function Memo(x,y){
    //properties
    this.x=x;
    this.y=y;
    this.div=document.createElement("div");
    this.div.style.top=this.y+"px";
    this.div.style.left=this.x+"px";
    this.div.classList.add("memo");
    this.div.classList.add("screen");
    //methods
    this.draw=function(){
        this.div.style.width=this.size+"px";
        this.div.style.height=this.size+"px";
        screen.appendChild(this.div);
    }
    }
    //event Listeners
    //mouse 위치에 div 생성하기
    screen.addEventListener("click", function(e){
        mouse.x=e.offsetX;
        mouse.y=e.offsetY;
        var m = new Memo(x,y);
        m.draw();
    })
})