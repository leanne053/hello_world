<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
	<title>회원가입</title>
</head>
<body>
<h1>
	회원가입 
</h1>

<P>  The time on the server is ${serverTime}. </P>
<form action="insertMember" method="post">
ID:<input type="text" name="id"><br>
pw:<input type="password" name="pw"><br>
<input type="submit" value="signup"><br>
</form>

</body>
</html>
