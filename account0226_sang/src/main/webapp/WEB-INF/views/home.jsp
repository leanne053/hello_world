<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
	<title>Home</title>
</head>
<body>
<h1>
	Hello world!  
</h1>

<P>  The time on the server is ${serverTime}. </P>
<form action="selectMember">
ID:<input type="text" name="id"><br>
pw:<input type="password" name="pw"><br>
<input type="submit" value="login"><br>
</form>
<form action="gosignup">
<input type="submit" value="signup">
</form>
</body>
</html>
