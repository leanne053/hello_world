<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head>
	<title>Home</title>
	<style>
	.left{
	width:250px;
	height:650px;
	
	}
	.center{
	width:250px;
	height:650px;
	}
	
	</style>
	 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js">
	 </script>
</head>
<script>
	    /* window.onload=function(){
		
		var button=document.getElementById("button1")
		button.addEventListener("click",function(){
			
		var content=document.getElementById("content").value;//getter
		document.getElementById("content").value="";//setter
		alert(content);
		
		document.getElementById("header").innerHTML=content;//getter
		//innerHTML이란 <> </> 태그사이에 있는 내용을 innerHTML이라 하고 innerHTML는 태그까지 읽는다
		document.getElementById("content").value="";//setter
		});
	}  */ 
  //javascript의 경우
	
 	   $(function(){
			$("#button1").on("click",function(){
				var content = $("#content").val();//getter
			});
			$("body").on("click",function(){
				$("#leftSide").html(content);
			});
 		
	 });   
/*jQuery의 경우  */

</script>
<body>
	 
	<!-- <h1 id="header"></h1> -->
	<input type="text" id="content" />
	<button id="button1">TEST</button>
	<div class="left" id="left">
	<h1 id="leftSide"></h1>
	</div>
	<p class="center" id="center">
	
	</p>
	
	
</body>
</html>
