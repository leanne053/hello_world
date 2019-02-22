<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>Home</title>
</head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
	$(function(){
	
		var array= ["apple","banana","mango"];
		
		
		$("#button").on("click", function(){
			
			var name=${"#name"}.val();
			var person=${
					name:name
			}
			array.push(person);
		});
		/* var person={name:"hong, gil-dong"
					,age:24
					,address:"seoul coex"
		
					};
					
		alert(person.age); */
		
	});
<body>
	NAME:<button></button>

</body>
</html>
