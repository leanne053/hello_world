<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>

<html>
<head>
	<title>Home</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
	$(function(){
		var array=[];
		var content="";
		var toal=0;
		var arg=0;
		
		$("#button1").on("click",function(){
			var name=$("#name").val();
			var score=$("#score").val();
			var person={
					name:name,
					score:score
			}
/* 			$("#name").val("");
			$("#score").val(""); */
			array.push(person);
		});
		$("#list").on("click",function(){
			content="<br>";
			sum=0;
			$.each(array,function(index,item){
				content+="Name:"+item.name+"  "+"점수:"+item.score+"<br>";
				total+=Number(item.score);
			});
			content+="<hr>";
			content+="Total: "+total+"Average: "+(total/array);
			
			$("#people").html(content);
		});
	});
</script>
</head>

<body>

	NAME: <input type="text" id="name"><br>
	SCORE: <input type="number" id="score">
	<button id="button1">OK</button>
	<button id="list">SHOW LIST</button>
	<div id="people">
		
	
	</div>
</body>
</html>