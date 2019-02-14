<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>

<head>
	<meta charset="utf-8">
	<title>예약 접수</title>
	<style>
		ul {
			list-style:none;
		}
		li {
			line-height:50px;
		}
		label {
			width:60px;
			float:left;
		}
	</style>
</head>
<body>
	<h1>예약 정보</h1>
		<form action="reservation">
			<ul>
				<li>
					<label for="r-name">이름</label>
					<input type="text" id="r-name" />				
				</li>
				<li>
					<label for="r-phone">휴대폰</label>
					<input type="text" id="r-phone" />
				</li>
				<li>
					<label for="r-email">이메일</label>
					<input type="text" id="r-email">
				</li>
				<li>
					<input type="submit" value="예약하기">
				</li>
			</ul>
		
		</form>
</body>

</html>
