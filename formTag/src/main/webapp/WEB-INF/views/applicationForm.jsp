<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
 <head>
    <meta charset="utf-8">
    <title>프런트엔드 개발자 지원서</title>
    <style>
			#container { 
				width:520px;
				border:1px solid black;
				padding:20px 40px;
				margin:0 auto;
			}
      legend { font-weight:bold; }
			ul {list-style-type: none;}
			li { line-height:30px;}
    </style>
  </head>
  <body>
		<div id="container">
			<h1>프런트엔드 개발자 지원서 </h1>
			<p>HTML, CSS, Javascript에 대한 기술적 이해와 경험이 있는 분을 찾습니다.</p>
			<hr>
			<form>
					<h4>개인정보</h4>
							<label for="name" class="info">이름</label>
							<input type="text" id="name" placeholder="공백 없이 입력하세요"/><br>
							<label for="phone" class="info">연락처</label>
							<input type="tel" id="phone"/>
					<h4>지원분야</h4>
							<input type="radio" name="field" value="웹 퍼블리싱">웹퍼블리싱<br>
							<input type="radio" name="field" value="웹 애플리케이션 개발">웹 애플리케이션 개발<br>
							<input type="radio" name="field" value="개발 환경 개선">개발 환경 개선<br>						
									
						<h4 >지원동기</h4>
							<textarea cols="60" rows="5" placeholder="본사 지원 동기를 간략히 써 주세요"></textarea><br>
							<input type="submit" value="접수하기"/>
							<input type="submit" value="다시 쓰기"/>
				
			</form>
		</div>
  </body>
</html>
