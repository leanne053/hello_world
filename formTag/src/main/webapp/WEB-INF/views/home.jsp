<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head>
	<title>상품정보</title>
	<style>
	.container{
	width:600px;
	margin:0 auto;
	}
	ul{
	list-style-type: none;
	}
	label.title{
	font-weight: bold;
	width:80px;
	float:left;
	}
	div.centered{
	text-align:center;
	}
	fieldset{
	margin: 15px 10px;
	border-color:#8748E1;
	}
	fieldset legend{
	font-weight: bold;
	font-size: 18px;
	color: pink;
	}
	ul li{
	margin-bottom:10px;
	}
	</style>
</head>
<body>
	<div class="container">
	<h1>상품 주문서</h1>
	<fieldset>
		<legend>개인 정보</legend>
		<ul>
			<li>
				<label for="name" class="title">이름</label>
				<input type="text" id="name" placeholder="이름(여백없이 입력)" required />
			</li>
			<li>
				<label for="tels" class="title">연락처 </label>
				<input type="text" id="tels" placeholder="연락가능한 전화번호"/>
			</li>
		</ul>
	</fieldset>
	<fieldset>
		<legend>배송지 정보</legend>
		<ul>
			<li>
				<label for="add" class="title">주소</label>
				<input type="text" id="add" required/>
			</li>
			<li>
				<label for="phone2" class="title">전화번호</label>
				<input type="text" id="phone2" required />
			</li>
			<li>
				<label for="memo" class="title">메모</label>
				<textarea cols="40" rows="3" id="memo"></textarea>
			</li>
		</ul>
	</fieldset>
	<fieldset>
		<legend>주문 정보</legend>
			<ul>
				<li>
					<label><input type="checkbox">과테말라 안티구아(100g)</label>
					<label><input type="number" value="0" min="0" max="5"/>개</label>
				</li>
				<li>
					<label><input type="checkbox">인도네시아 만델링(100g)</label>
					<label><input type="number" value="0" min="0" max="5" />개</label>
				</li>
				<li>
					<label><input type="checkbox">탐라는도다(블렌딩)(100g)</label>
					<label><input type="number" value="0" min="0" max="5"/>개</label>
				</li>
			</ul>
	</fieldset>
	</div>
	<div class="centered">
	<input type="submit" value="주문하기">
	<input type="submit" value="다시 작성">
	</div>
</body>
</html>
