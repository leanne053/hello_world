<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
	<title>가계부작성</title>
	<style>
	body{
	margin:0 auto;
	padding: 5%;
	}
	.space{
	margin-top:10px;
	}
	</style>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
	
<body>
<h1>
	 가계부 작성
</h1>
		<c:forEach var="accountBook" items="${bList}">
	<table>
		<tr>
		<th>no.</th><th>손/이득구분</th><th>title</th><th>손/수익내용</th><th>손/수익금액</th><th>손/수익일어난시점</th><th>등록</th>
		</tr>
		<tr>
		<td>accountBook.accountseq</td>
		<td>accountBook.flag</td>
		<td>accountBook.amount</td>
		<td>accountBook.eventdate</td>
		<td>accountBook.indate</td>
		</tr>
	<form action="viewAccount" method="get">
	</table>
		</c:forEach>
	
	</form>
</body>
</html>
