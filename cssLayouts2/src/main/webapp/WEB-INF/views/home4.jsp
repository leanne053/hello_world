<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
 <head>
    <meta charset="utf-8">
    <title>텍스트 스타일</title>
    <style>
			.container {
				width:500px;
				padding:10px;
				border:1px solid #ccc;
			}
			.fontBold{
				font-weight:700;
				font-size:larger;
				color:#ad3000;
			}
    </style>
  </head>
  <body>
  	<form action="home4">
		<div class="container">
			<h1>최신 웹 디자인 트렌드</h1>
			<p><span class="fontBold">반응형 웹 디자인</span> - 다양한 화면 크기에 최적화하다</p>
			<p><span class="fontBold">플랫 디자인</span> - 입체에서 평면으로 </p>
			<p><span class="fontBold">풀스크린 배경</span> - 콘텐츠에 집중</p>
			<p><span class="fontBold">원 페이지 사이트</span> - 한 페이지에 모든 내용을 담다</p>
			<p><span class="fontBold">패럴랙스 스크롤링</span> - 동적인 효과로 강한 인상을!</p>
			<p><span class="fontBold">웹 폰트</span> - 웹 타이포그래피를 받쳐주는 기술</p>
		</div>
  </form>
  </body>
</html>