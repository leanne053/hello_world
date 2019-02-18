<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head>
	<meta charset="utf-8">
	<title>market</title>
	<style>
		#container {  /* 전체 콘텐츠를 감싸는 div */
			width:650px;  /* 너비 */
			margin:0 auto;  /* 가로로 중앙에 배치 */
			padding:5px;	/* 테두리와 내용 사이의 패딩 여백 */		
		}
		#check {   /* 텍스트 부분을 감싸는 div */
			width:640px;  /* 너비 - 그림 너비 값에 맞춤 */
			border:1px solid #ccc;  /* 테두리 */
		}
		h1{
		color:white;
		font-size:1em;
		background:#222;
		margin:0;
		padding:10px;
		}
		h2{
		color:#ff0000;
		font-size: 1.2em;
		text-align:center;
		}
		p{
		font-size:1.5em;
		line-height:2em;
		font-weight: bold;
		text-align: center;
		}
		.accent{
		color:blue;
		}
		.smalltext{
		font-size:0.7em;
		}
		ul{
		list-style-type:none;
		}		
	</style>
</head>

<body>
	<form action="home3">
	<div id="container">
		<img src="resources/top.jpg" alt="가정용 꿀사과 - 흠집이 있고 약간은 못생겼지만 맛과 영양은 그대로입니다. 질좋은 사과를 저렴하게 즐겨보세요">		
		<div id="check">
			<h1>확인하세요</h1>
			<h2>주문 및 배송</h2>
			<p><span class="accent">오후 2시 이전</span> 주문건은 당일 발송합니다<br>
			2시 이후 주문건은 다음날 발송합니다(주말 제외)</p>
			<hr>
			<h2>교환 및 환불</h2>
			<p>불만족시<span class="accent"> 100% 환불</span>해 드립니다<br>
			고객센터로 전화주세요</p>
			<hr>
			<h2>고객센터 </h2>
			<p>0000-0000<br>
			<span class="smalltext">상담시간 : 오전 9시 ~ 오후 6시 (토/일, 공휴일 휴무)</span></p>
		</div>
	</div>
	
		<h1>웹에서 사용하는 목록들</h1>
	<ul>
		<li>회사소개</li>
		<li>도서</li>
		<li>자료실</li>
		<li>질문답변</li>
		<li>동영상강의</li>
	</ul>
	
	
	</form>
</body>
</html>