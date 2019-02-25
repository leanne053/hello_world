<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
	<title>로그인</title>
</head>
	
<body>
<h1>
	log in  
</h1>
	<c:if test="${check!=null}">
	<h3><font color="blue">${check}님</font> 로그인을 성공했습니다.</h3><br>
	<form action="logout">
	<input type="submit" value="log-out">
	</form>
	<form action="writeAccount">
	<input type="submit" value="가계부작성하기">
	</form>
	</c:if>
	
	<c:if test="${check==null}">
	<form action="checkId" method="post">
	ID:<input type="text" name="id" id="id"><font color="red">${warning}</font><br>
	PW:<input type="password" name="pw" id="pw"><br>
	<input type="submit" value="log-in">
	</form>
	
	<form action="registerId" method="get">
	<input type="submit" value="register">
	
	</form>
	</c:if>
	
</body>
</html>
