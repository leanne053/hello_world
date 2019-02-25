<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>회원가입</title>
	<style>
	body{
	margin:0 auto;
	padding: 20%;
	}
	.space{
	margin-top:10px;
	}
	</style>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
	
<body>
<h1>
	 회원가입
</h1>
	<form action="insertId" method="post">
	ID:<input type="text" id="id" name="id" placeholder="id를 입력하세요"><br>
	PW:<input type="password" id="pw" name="pw" placeholder="패스워드를 입력하세요"><br>
	<input class="space" type="submit" value="register">
	</form>

</body>
</html>
