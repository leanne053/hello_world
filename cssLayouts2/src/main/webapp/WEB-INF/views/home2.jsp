<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head>
<title>폰트변경2</title>
<style>
	h1{
	color:rgb(0,200,0);
	}
	h2{
	color:blue;
	}
	.account{
	color:#ff0000;
	}
	a{
	text-decoration:none;
	}
	.edited{
	text-decoration:line-through;
	}
	.shadow1{
	text-shadow: 5px 5px 3px #f00;
	}
	.align-left{
	text-align:left;
	}
	.indent1{
	text-indent:5%;
	}
	.content{
	border:1px solid #ccc;
	width:300px;
	white-space:nowrap;
	overflow:hidden;
	text-overflow:ellipsis;
	}
</style>
</head>
<body>
	<h1>세계 10대 슈퍼푸드</h1>
	<img src="resources/galic.jpg">
	<h2>마늘(Garlic)</h2><p>일해백리(一害百利)는 마늘의 별명이다.한가<br>
	지 해가 있고 백가지 이로움이 있다는 뜻이다.<br>
	그 한 가지 해란 아린 맛으로 인해 위에 부담<br>
	을 준다는 것이다.</p>
	<p>마늘 특유의 아린 맛은 <span class="account">알리신</span>이라는 성분때문으로 살균 및 향균 작용<br>
	을 하며 마늘에 들어있는 아연이 피로 회복에 도움을 준다.</p>

	<h2>토마토</h2>
	<p>[<a href="https://www.fitbug.com/g/Superfoods-tomatoes" target="_black">외부 링크</a>]</p>
	<p>토마토는 비타민 A,C 가 풍부한<span class="edited">과일이다.</span>채소이다.</p>

	<h1 class="shadow1">HTML5</h1>
	<p class="align-left">Interger elementum massa at nulla placerat varius</p>
	<p class="indent">블루베리는 비타민 A,C,E 가 풍부하고...</p>
	<p class="content">귀리는 베타글루칸(항암 및 면역증강작용을 가지고 있는 불소화성 다당류) 성분을 포함하고 있다</p>
</body>
</html>
