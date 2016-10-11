

$("#inputText").keyup(function(e){
  var inputText = document.getElementById("inputArea").value;
  document.getElementById("textArea").innerHTML = inputText;
});
