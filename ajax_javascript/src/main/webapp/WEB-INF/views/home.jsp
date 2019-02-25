<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<title>Home</title>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>	
</head>
<script>
	$(function(){
		 $("#userId").on("keyup",function(){

			 var userId=$("#userId".val();
			 
			 $.ajax({
				
				 url:"ajaxTest",
				 data:{id:userId},
				 type:"get",
				 success:function(flag){
					 if(flag=="duplicated"){
						 $("#message").html("duplicated!");
					 }else{
						 $("#message").html("Good to go");
					 }
				 }
			 });
			 
			 
			 /*$.ajax({
				url:"ajaxTest",
				//action 명을 뜻함.
				data:{id:"user01",pw:"1234"},
				//client에서 server로 넘어가는 값(ex.input)
				//{변수명(속성):서버로 보낼 값}
				//ex.{id:"user01", pw:"1234"}
				type:"get",
				//method 방식
				success:function(serverData){
				//위의 모든 것이 성공하였다면	
					alert(serverData)
				}
				
				
			}); */
			
		});
		
		
		/* $("#userId").on("keyup",function(){

			$.ajax({
				
				/* url:  ,
				data: ,
				type: ,
				success: function(data){ */
					
					
					
				//}
			/* }) */
			
		});
		
		
		
	});


</script>
<body>
	
	<!-- ID:<input type="text" id="userId"><b id="message"></b> -->
	<input type="text" id="" name=""/>
	<button id="test">TEST</button>
</body>
</html>
