//alert("Hello Form Treehouse");
//document.write("<h1>Welcome to JavaScript Basics</h1>");

var request = new XMLHttpRequest();
request.open("GET",'data.txt',false);
request.send();
//console.log(request);
if(request.status===200){
	document.write(request.responseText);
	console.log(request);
}