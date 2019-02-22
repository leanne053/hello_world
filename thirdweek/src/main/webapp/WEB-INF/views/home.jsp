<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>Home</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
	$(function(){
		
		var array=[];
		var content="";

		$("#button").on("click", function(){
			var name=$("#name").val();
			var person={
									name:name
							  }
			array.push(person);
		});
		
		$("#list").on("click",function(){
			
				content="<br>";
				
				$.each(array,function(index,item){
					content+= "NAME : "+item.name+"<br>";
				});
				
				$("body").html(content);
		});
		
		
	});
</script>
</head>

<body>

	NAME : <input type="text" id="name">
	<button id="button">register</button>
	<button id="list">list all</button>

</body>
</html>
