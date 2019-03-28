var game=document.getElementById("gamearea");
var mouse={
  x:0,
  y:0
};
var color="turquoise";
var size=20;
//var dotArray=[],
//   speed=3;
var colors="red orange yellow teal green blue purple brown lightblue".split(" ");


/*.................................
DOT OBJECT
Finish the Dot Object constructor started below. We need to make object properties and 2 methods: this.draw()  and this.fall()
.................................*/
//원인지 사각형이 선택하는 select 기능
$(function (){
  $('.select').on("click", function(){
    // alert("!");
    Dot();
    // var dot=document.getElementById("dot");
    // var square=document.getElementById("square");
    //  dot.addEventListener("click", Dot);
    //  square.addEventListener("click", square);
  });
});


function Dot(x,y,color){
  //properties
  this.x=x;
  this.y=y;
  this.color=color;
  this.size=20;
 // this.speed=speed;
  this.div=document.createElement("div");
  this.div.style.background=this.color;
  this.div.style.top=this.y+"px";
  this.div.style.left=this.x+"px";
  
  this.div.classList.add("dot");
  //dotArray.push(this);
  //methods
  this.draw=function(){
    this.div.style.width=this.size+"px";
  this.div.style.height=this.size+"px";
    game.appendChild(this.div);
    
    
  };

  
  
//   this.fall=function(){
//     this.div.style.top=this.y+"px";
//     if(this.y >= game.offsetHeight){
//       game.removeChild(this.div);
//       dotArray.splice(dotArray.indexOf(this), 1);
//     }else{
//     this.y+=this.speed;}
//   };
  
// }

function Square(x,y,color){
  //properties
  this.x=x;
  this.y=y;
  this.color=color;
  this.size=20;
 // this.speed=speed;
  this.div=document.createElement("div");
  this.div.style.background=this.color;
  this.div.style.top=this.y+"px";
  this.div.style.left=this.x+"px";
  
  this.div.classList.add("square");
  //dotArray.push(this);
  //methods
  this.draw=function(){
    this.div.style.width=this.size+"px";
  this.div.style.height=this.size+"px";
    game.appendChild(this.div);
    
    
  };
  // this.fall=function(){
  //   this.div.style.top=this.y+"px";
  //   if(this.y >= game.offsetHeight){
  //     game.removeChild(this.div);
  //     dotArray.splice(dotArray.indexOf(this), 1);
  //   }else{
  //   this.y+=this.speed;}
  // };
  
}

/*................................
EVENT LISTENERS
Finish the event listener so it will get the mouse coordinates when the user clicks in the game area
.................................*/
game.addEventListener("click", function(e){
  mouse.x=e.clientX;
  mouse.y=e.clientY;
  color=colors[Math.floor(Math.random()*colors.length)]
  var d= new Dot(mouse.x,mouse.y,color);
  // d.size=Math.ceil(Math.random()*100)+20;
d.draw();
  // d.speed=Math.ceil(Math.random()*10);
  
  
});
}

//animation loop
//function loop(){
//for(var i = 0; i < dotArray.length; i++){
//   dotArray[i].fall();
// }  
  
//  window.requestAnimationFrame(loop);
//}