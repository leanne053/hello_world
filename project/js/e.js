$("body").click(function(event){
    $("#result").html("무엇을 클릭했을까?" +event.target.nodeName);
})