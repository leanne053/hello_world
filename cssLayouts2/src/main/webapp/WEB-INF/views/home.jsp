<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head>
<title>폰트변경</title>
<style>
	@font-face{
	font-family:"trana";
	src:local("resources/font/trana"), 
	url("resources/font/trana.eo"),
	url("resources/font/trana.woff") format("woff"),
	url("resources/font/trana.ttf") format("truetype");
	}
	w-font{
	font-family:"trana", sans-serif;
	}
	p{
	font-size:30px;
	}
	.accent{
	font-variant:small-caps;
	font-weight: bold;
	}
	.txt{
		font:italic 12px/24px 돋움;
	}

</style>
</head>
<body>
	<p>Using Default Fonts</p>
	<p class="w-font">Using Trana Fonts</p>
	<br>
	<h1>세계 3대 미항</h1>
	<p class="accent">시드니(SYDNEY), 호주</p>
	<p class="accent">리우데자네이루(Rio de Janeiro), 브라질</p>
	<p class="accent">나폴리(Naples), 이탈리아</p>
	<p class="txt">여러 요소가 함께 사용된 웹 문서 안에서 텍스트가 눈에 띄게 하려면 내용에 맞는 글꼴과 글자 크기, 그<br>
	리고 글자색을 선택하는 것이 중요합니다.</p>
	<p>이럴 때 사용할 수 있는 것이 글꼴 속성입니다</p>
	<p style="font:caption">[font:caption] 캡션에 어울리는 글꼴 스타일</p>
	<p style="font:icon">[font:icon]아이콘에 어울리는 글꼴 스타일</p>
	<p style="font:menu">[font:menu]드롭다운 메뉴에 어울리는 글꼴 스타일</p>
	<p style="font:message-box">[font:message-box]대화상자에 어울리는 글꼴 스타일</p>
	<p style="font:small-caption">[font:small-caption]작은 캡션에 어울리는 글꼴 스타일</p>
	<p style="font:status-bar">[font:status-bar]상태 표시줄에 어울리는 글꼴스타일</p>

</body>
</html>
