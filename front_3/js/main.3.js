/*..............................
GLOBAL VARIABLES
Below, make the following variables:
-a literal object variable to hold the mouse.x and mouse.y values
-variables to hold the color and size of our div elements
................................*/
//버튼을 클릭했을 때 circle 혹은 square 가 생성할 수 있게 해주는 기능
$(function (){
    $(window).on("mousemove", function(e){
      console.log("X : " + e.offsetX + "/ Y : " + e.offsetY);
    });
    var clickCircle= false;
    var clickSquare= false;
    var game = document.getElementById("gamearea");;
    var mouse={
      x:0,
      y:0
    };
    var color="turquoise";
    var size=20;
    var colors="red orange yellow teal green blue purple brown lightblue".split(" ");
    $('.select').on("click", function(){
      // alert($(this).attr('id'));
      var id = $(this).attr('id');
      if (id == 'circle' && clickCircle==false) {
          clickCircle=true;
          clickSquare=false;
      } else if(id == 'square' && clickSquare==false) {
          clickSquare=true;
          clickCircle=false;
      }
    });
 
    /*.................................
    DOT OBJECT
    Finish the Dot Object constructor started below. We need to make object properties and 2 methods: this.draw()  and this.fall()
    .................................*/
    function Dot(x,y,color){
      //properties
      this.x=x;
      this.y=y;
      this.color=color;
      this.size=40;
      this.div=document.createElement("div");
      this.div.style.background=this.color;
      this.div.style.top=this.y+"px";
      this.div.style.left=this.x+"px";
      if (clickCircle == true){
      this.div.classList.add("dot");
      } else if(clickSquare == true){
        this.div.classList.add("sq"); 
      }
      //methods
      this.draw=function(){
      this.div.style.width=this.size+"px";
      this.div.style.height=this.size+"px";
      game.appendChild(this.div);
        
      };
    }
    /*................................
    EVENT LISTENERS
    Finish the event listener so it will get the mouse coordinates when the user clicks in the game area
    .................................*/
    game.addEventListener("click", function(e){
    mouse.x=e.offsetX;
    mouse.y=e.offsetY;
    color=colors[Math.floor(Math.random()*colors.length)]
    var d= new Dot(mouse.x,mouse.y,color);
    
    if(!clickCircle==false){  
    d.draw();
    clickCircle=false;
    

    } else if(!clickSquare==false){
      d.draw();
      clickSquare=false; 
    }
    });
    
})