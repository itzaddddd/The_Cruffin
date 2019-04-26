$("#login").click(function(){
	let url = "login.html";
	$(location).attr('href',url);
});

$("#regis").click(function(){
	let url = "regis.html";
	$(location).attr('href',url);
});

$("#cart").click(function(){
	let url = "cart.html";
	$(location).attr('href',url);
});

$("#about_us").click(function(){
	let url = "about_us.html";
	$(location).attr('href',url);
});

$("#book").click(function(){
	let url = "book.html";
	$(location).attr('href',url);
});

$("#author").click(function(){
	let url = "author.html";
	$(location).attr('href',url);
});


$("#search").click(function(){
	let url = "search.html";
	$(location).attr('href',url);
});

$(".nav-link").mouseover(function(){
	$(this).css("color","red");
	$(this).mouseout(function(){
		$(this).css("color","white");
	});
});