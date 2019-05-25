debugger;
var paragraph = document.createElement("p");
var helloJs = document.createTextNode("Hello JS");
paragraph.appendChild(helloJs);
var body = document.getElementsByTagName("body")[0];
body.appendChild(paragraph);
