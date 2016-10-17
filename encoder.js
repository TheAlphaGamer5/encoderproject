$("#inputArea").keyup(function(e){
  var inputText = document.getElementById("inputText").value;
  document.getElementById("textArea").innerHTML = inputText;
  if ($("input:checked").val() == "echo") {
    console.log("echo");
  }
  else if ($("input:checked").val() == "caesarCipher") {
    console.log("caesarCipher");
  }
  else if ($("input:checked").val() == "runes") {
    console.log("runes");
  }

});

var caesarCipher = {
	"a": "z",
	"b": "a",
	"c": "b",
	"d": "c",
	"e": "d",
	"f": "e",
	"g": "f",
	"h": "g",
	"i": "h",
	"J": "i",
  "k": "j",
  "L": "k",
  "m": "l",
  "n": "m",
  "o": "n",
  "p": "o",
  "q": "p",
  "r": "q",
  "s": "r",
  "t": "s",
  "u": "t",
  "v": "u",
  "w": "v",
  "x": "w",
  "y": "x",
  "z": "y"
}

$("input[type='radio']").click(function(){
  $("input:checked").prop('checked',false );
  $(this).prop('checked',true);
});

/* if ($("input:checked").val() == "echo") {
  console.log("echo");
}
else if ($("input:checked").val() == "caesarCipher") {
  console.log("caesarCipher");
}
else if ($("input:checked").val() == "runes") {
  console.log("runes");
}
*/
