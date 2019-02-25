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
			content+="Total: "+total+"Average: "+(total/array)
			
			$("#people").html(content);
		});
		$("#pop").on("click",function(){
			array.pop();
			listAll();
			}
		//맨뒤에 있는 값을 제외함.
			$("#shift").on("click",function(){
			array.shift();
				listAll();
				});
			//맨앞에 있는 값을 제외함.
	});
</script>
</head>

<body>

	NAME: <input type="text" id="name"><br>
	SCORE: <input type="number" id="score">
	<button id="button1">OK</button>
	<button id="pop">SHOW LIST</button>
	<button id="shift">SHOW LIST</button>
	<button id="splice">splice</button>
	<!-- splice 내가 원하는 곳에서 내가 없애고 싶은 숫자만큼 없앨 수 있음 -->
	<div id="people">
		
	
	</div>
</body>
</html>