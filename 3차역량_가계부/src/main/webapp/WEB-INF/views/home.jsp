<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
	<title>로그인</title>
<style>
body{
margin-top:5%;
margin-left: 5%;
}
</style>
</head>
<body>
<h1>
	로그인 
</h1>
	<form action="login">
	ID:<input type="text" name="id" placeholder="id입력"><font color="red">${warning}</font><br>
	PW:<input type="password" name="pw" placeholder="pw입력"><br><br>
	<input type="submit" value="login">
	</form>
	
	<form action="signup">
	<input type="submit" value="회원가입하기"><br>
	</form>
	
</body>
</html>
