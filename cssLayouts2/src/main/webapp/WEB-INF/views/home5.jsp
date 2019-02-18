<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
 <head>
    <meta charset="utf-8">
     <title>텍스트 스타일</title>
    <style>
			.container {
				width:720px;
				padding:10px;
				border:1px solid #ccc;
			}
			.book-img {
				float:left;
				padding:10px;
				margin-right:20px;
			}
			.book-desc {
				padding:10px;
			}
			body{
			font-family:"맑은 고딕", 돋움;
			}
			h1{
			font-size:17px;
			}
			p{
			font-size:16px;
			line-height:25px;
			}
			.accent{
			font-weight:bold;
			color:red;
			}
    </style>
  </head>
  <body>
  	<form action="home5">
		<div class="container">
			<div class="book-img">
				<img src="resources/book.png">
			</div>
			<div class="book-desc">
				<h1>웹 디자인 트렌드를 따라잡는 비법 대공개!</h1>
				<p>그래픽 프로그램으로 웹 디자인 요소를 일일이 만들어 웹사이트를 제작하는 시대는 지났다. 이제 모바일, 태블릿, PC 등 멀티 디바이스에 한 번에 적용할 수 있는 웹 디자인 방법을 알아야 한다. 바로 코딩을 이용한 웹 디자인이다. </p>
				<p> <span class="accent">이 책은 HTML과 CSS에 대한 기초적인 내용만 알고 있다면 누구든 쉽게 코딩으로 여러 기기에 대응할 수 있는 웹 디자인을 만들 수 있도록 기획되었다.</span> jQuery를 몰라도 된다. jQuery 플러그인을 가져다 사용할 수 있는 방법을 소스 한 줄 한 줄 자세하고 친절하게 설명해 놓았으니까!</p>			
			</div>
		</div>
	</form>
  </body>
</html>