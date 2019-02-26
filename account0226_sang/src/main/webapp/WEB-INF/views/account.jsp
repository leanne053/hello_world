<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
	<title>가계부</title>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>	
<script>
	$(function(){
		init();
		$("#register").on("click",buttonEvent);
	};
	
	function init()({
		callList();
	}
	
	function callList(){
		
		$.ajax({
			url:"selectAcount",
			type:"get",
			success:addList
			});
		
	}
		function addList(serverData){

			var content="";
			
			$.each(serverData,function(index,item){
			
				content+="<tr>";
				content+="<td>"+item.title+"</td>";
				content+="<td>"+item.content+"</td>";
				content+="<td>"+item.amount+"원</td>";
				content+="<td>"+item.eventdate+"</td>";
				content+="</tr>";
			});
			("#resultList").html(content);
		}

		function buttonEvent(){
			var title=$(#title).val();
			var content=$(#content).val();
			var flag=$("input[name='flag']:checked").val();
			var amount=$(#amount).val();
			var eventdate=$(#eventdate).val();
			
			if(title.length==0){
				alert("제목을 입력해주세요");//
				return;
			}
			
			var account={
					title:title,
					content:content,
					flag:flag,
					amount:amount,
					eventdate:eventdate
			};
			
			$.ajax({
				url:"insertAccount",
				data:account,
				type:"post",
				success:function(serverData){
					if(serverData==1){
						alert("등록성공");
						callList();
					}else{
						alert("등록실패");
					}
				}	
			});
			
			
		}

</script>
</head>
<body>
<h1>
	가계부
</h1>
	
		가계부제목<input type="text" id="title"><br>
		가계부내용<input type="text" id="content"><br>
		수입/지출여부:<input type="radio" id="flag" name="flag" value="p" checked>수입&nbsp;
					<input type="radio" id="flag" name="flag" value="l">지출<br>
		가격:<input type="number" id="amount"><br>
		날짜:<input type="date" id="eventdate">
		<button id="register">등록</button>
		
		<table id="resultList">
		<tr>
			<td></td>
		</tr>
		<tr>
			<td></td>
		</tr>
		<tr>
			<td></td>
		</tr>
		<tr>
			<td></td>
		</tr>
		<tr>
			<td></td>
		</tr>
		<tr>
			<td></td>
		</tr>
		
		</table>


</body>
</html>
