$("#inputArea").keyup(function(e){
  var inputText = document.getElementById("inputText").value;
  document.getElementById("textArea").innerHTML = inputText;
});

var caesarCipher = {
	"A": "",
	"B": "",
	"C": "",
	"D": "",
	"E": "",
	"F": "",
	"G": "",
	"H": "",
	"I": "",
	"J": "",
  "K": "",
  "L": "",
  "M": "",
}

$("input[type='radio']").click(function(){
  $("input:checked").prop('checked',false );
  $(this).prop('checked',true);
});

if ($("input:checked").val() == "echo") {
  console.log("echo");
}
if ($("input:checked").val() == "caesarCipher") {
  console.log("caesarCipher");
}
if ($("input:checked").val() == "runes") {
  console.log("runes");
}
